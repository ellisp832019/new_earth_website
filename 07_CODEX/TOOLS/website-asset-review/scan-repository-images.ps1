[CmdletBinding()]
param()
$ErrorActionPreference = 'Stop'
$toolDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$repoRoot = (Resolve-Path (Join-Path $toolDir '..\..\..')).Path
$dataDir = Join-Path $toolDir 'data'
New-Item -ItemType Directory -Force $dataDir | Out-Null
$excluded = '\\.git\\|\\node_modules\\|\\dist\\|\\build\\|\\.cache\\|\\temp\\|\\tmp\\'
$extensions = @('.png','.jpg','.jpeg','.webp','.gif','.svg','.avif','.bmp','.ico')
$masterPath = Join-Path $repoRoot '01_STRATEGY\WA-05\ASSET_REVIEW\WEBSITE_ASSET_MASTER_REGISTER.csv'
$master = @(Import-Csv $masterPath)

function Get-Dimensions([string]$path) {
  try {
    $bytes = [IO.File]::ReadAllBytes($path)
    if ($bytes.Length -ge 24 -and $bytes[0] -eq 137 -and $bytes[1] -eq 80 -and $bytes[2] -eq 78 -and $bytes[3] -eq 71) {
      return @{ width=[BitConverter]::ToUInt32(@($bytes[19],$bytes[18],$bytes[17],$bytes[16]),0); height=[BitConverter]::ToUInt32(@($bytes[23],$bytes[22],$bytes[21],$bytes[20]),0) }
    }
    if ($bytes.Length -ge 30 -and [Text.Encoding]::ASCII.GetString($bytes,0,4) -eq 'RIFF' -and [Text.Encoding]::ASCII.GetString($bytes,8,4) -eq 'WEBP') { return @{ width='UNKNOWN'; height='UNKNOWN' } }
  } catch {}
  return @{ width='UNKNOWN'; height='UNKNOWN' }
}
function Get-Classification([string]$top,[string]$path) {
  if ($top -eq 'ASSETS_REFERENCE') { return 'LOCAL_REFERENCE' }
  switch ($top) { 'ASSETS' { return 'CURATED_WEBSITE_ASSET' }; '03_CONTENT' { return 'CONTENT_ASSET' }; '04_DESIGN_SYSTEM' { return 'DESIGN_ASSET' }; '05_WORDPRESS' { return 'WORDPRESS_REFERENCE' }; '06_THEME' { return 'THEME_ASSET' }; '01_STRATEGY' { return 'STRATEGY_EVIDENCE' }; '00_BLUEPRINT' { return 'BLUEPRINT_EVIDENCE' }; '02_INFORMATION_ARCHITECTURE' { return 'INFORMATION_ARCHITECTURE_EVIDENCE' }; '07_CODEX' { return 'CODEX_TOOL_ASSET' }; '08_DEPLOYMENT' { return 'DEPLOYMENT_EVIDENCE' }; '09_LOGS' { return 'LOG_OR_SESSION_EVIDENCE' }; default { return 'UNKNOWN' } }
}
function Get-GitState([string]$relative) {
  $tracked = $false; $ignored = $false; $untracked = $false
  $trackedMatch = @(git ls-files -- $relative 2>$null); if ($trackedMatch.Count -gt 0) { $tracked=$true }
  $ignoredMatch = @(git check-ignore --no-index -- $relative 2>$null); if ($ignoredMatch.Count -gt 0) { $ignored=$true }
  if (-not $tracked -and -not $ignored) { $untracked=$true }
  $label = if($tracked){'TRACKED'} elseif($ignored){'IGNORED'} elseif($untracked){'UNTRACKED'} else {'UNKNOWN'}
  return @{ label=$label; tracked=$tracked; ignored=$ignored; untracked=$untracked }
}
$files = @(Get-ChildItem -LiteralPath $repoRoot -Recurse -File | Where-Object { $extensions -contains $_.Extension.ToLowerInvariant() -and $_.FullName -notmatch $excluded })
$records = foreach ($file in $files) {
  $relative = $file.FullName.Substring($repoRoot.Length+1).Replace('\','/')
  $top = $relative.Split('/')[0]
  $hash = (Get-FileHash -LiteralPath $file.FullName -Algorithm SHA256).Hash.ToLowerInvariant()
  $dim = Get-Dimensions $file.FullName
  $git = Get-GitState $relative
  $match = @($master | Where-Object { $_.asset_path.Replace('\','/') -eq $relative -or $_.sha256.ToLowerInvariant() -eq $hash -or $_.filename -eq $file.Name })
  $matchStatus = if($match.Count -eq 1){'MATCHED'} elseif($match.Count -gt 1){'AMBIGUOUS MATCH'} else {'UNMATCHED'}
  $source = Get-Classification $top $relative
  $review = if($source -eq 'LOCAL_REFERENCE'){'REFERENCE_ONLY'} elseif($matchStatus -eq 'MATCHED' -and $source -eq 'CURATED_WEBSITE_ASSET'){'OWNER_REVIEW_CANDIDATE'} elseif($source -like '*EVIDENCE' -or $source -in @('WORDPRESS_REFERENCE','DEPLOYMENT_EVIDENCE')){'INTERNAL_EVIDENCE_ONLY'} elseif($source -eq 'CODEX_TOOL_ASSET'){'TOOL_UI_ASSET'} else {'UNKNOWN_REVIEW_REQUIRED'}
  $public = if($source -eq 'LOCAL_REFERENCE'){'REFERENCE_ONLY'} elseif($review -eq 'OWNER_REVIEW_CANDIDATE'){'BLOCKED_RIGHTS'} elseif($review -eq 'INTERNAL_EVIDENCE_ONLY' -or $review -eq 'TOOL_UI_ASSET'){'INTERNAL_ONLY'} else {'NOT_REVIEWED'}
  $ratio='UNKNOWN'; $dw=0.0; $dh=0.0; if([double]::TryParse([string]$dim.width,[ref]$dw) -and [double]::TryParse([string]$dim.height,[ref]$dh) -and $dh -gt 0){$ratio=('{0:N4}' -f ($dw/$dh))}
  [pscustomobject]@{ discovery_id=''; asset_id=if($match.Count -eq 1){$match[0].asset_id}else{''}; filename=$file.Name; repo_relative_path=$relative; extension=$file.Extension.ToLowerInvariant(); file_size_bytes=$file.Length; width=$dim.width; height=$dim.height; aspect_ratio=$ratio; sha256=$hash; top_level_area=$top; source_classification=$source; git_status=$git.label; git_tracked=$git.tracked; git_ignored=$git.ignored; duplicate_group_id=''; wa05h_match_status=$matchStatus; review_classification=$review; public_build_eligibility=$public; rights_status=if($match.Count -eq 1){$match[0].rights_status}else{'NOT RECORDED'}; provenance_status=if($match.Count -eq 1){$match[0].rights_status}else{'UNKNOWN'}; accessibility_status=if($match.Count -eq 1){$match[0].accessibility_class}else{'UNKNOWN'}; notes=if($source -eq 'LOCAL_REFERENCE'){'Local-only reference; not public candidate'}elseif($matchStatus -eq 'UNMATCHED'){'Discovered outside WA-05H master register'}else{'Physical discovery is not public approval'} }
}
$i=1; foreach($record in $records){$record.discovery_id=('IMGDISC-{0:D4}' -f $i);$i++}
$groups=@($records | Group-Object sha256 | Where-Object Count -gt 1); $dup=1; foreach($group in $groups){$id=('DUP-{0:D3}' -f $dup);$group.Group | ForEach-Object {$_.duplicate_group_id=$id};$dup++}
$csvPath=Join-Path $dataDir 'FULL_REPOSITORY_IMAGE_INVENTORY.csv'; $records | Export-Csv -LiteralPath $csvPath -NoTypeInformation -Encoding utf8
$index = foreach($r in $records) { $assetId = if($r.asset_id){$r.asset_id}else{''}; $page = if($r.asset_id){'Governed candidate'}else{'Unassigned / Reference'}; [pscustomobject]@{ id=$assetId; discovery_id=$r.discovery_id; filename=$r.filename; path=('../../../'+$r.repo_relative_path); repo_path=$r.repo_relative_path; page=$page; role='Visual asset'; source_area=$r.top_level_area; source_classification=$r.source_classification; git_status=$r.git_status; registered=($r.wa05h_match_status -eq 'MATCHED'); duplicate_group=$r.duplicate_group_id; review_classification=$r.review_classification; public_build_eligibility=$r.public_build_eligibility; rights=$r.rights_status; access=$r.accessibility_status; dimensions=("$($r.width)x$($r.height)"); size=$r.file_size_bytes } }
$json=($index | ConvertTo-Json -Depth 5); Set-Content -LiteralPath (Join-Path $dataDir 'asset-index.js') -Value ("window.NEW_EARTH_ASSET_INDEX = $json;`r`nwindow.NEW_EARTH_ASSET_INDEX_META = {generated_at:'"+(Get-Date).ToUniversalTime().ToString('o')+"', total:"+$records.Count+"};") -Encoding utf8
Write-Host "Discovered $($records.Count) image-like files; $($groups.Count) duplicate groups; $(@($records | Where-Object review_classification -eq 'OWNER_REVIEW_CANDIDATE').Count) owner candidates."

$ErrorActionPreference = 'Stop'
$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$repoRoot = (Resolve-Path (Join-Path $scriptDir '..\..\..')).Path
$entry = Join-Path $scriptDir 'index.html'
$referenceDir = Join-Path $repoRoot 'ASSETS_REFERENCE\global_images'
if (-not (Test-Path -LiteralPath $entry -PathType Leaf)) { throw "Missing tool entrypoint: $entry" }
if (-not (Test-Path -LiteralPath $referenceDir -PathType Container)) { throw "Missing reference directory: $referenceDir" }
$images = @(Get-ChildItem -LiteralPath $referenceDir -Filter '*.png' -File)
if ($images.Count -eq 0) { throw "No reference PNG files found in $referenceDir" }
Write-Host "Website asset review: $($images.Count) local reference PNGs found."
Start-Process -FilePath $entry

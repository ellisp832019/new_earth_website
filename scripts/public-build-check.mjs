import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
const root=fileURLToPath(new URL('../dist/',import.meta.url));
const forbidden=['ASSETS_REFERENCE','01_STRATEGY','07_CODEX','09_LOGS','D:\\Dev\\Projects','localhost','OWNER_REVIEW'];
async function walk(dir){let out=[];for(const e of await readdir(dir,{withFileTypes:true})){const p=join(dir,e.name);out=e.isDirectory()?out.concat(await walk(p)):out.concat(p)}return out}
const files=await walk(root);let bad=[];for(const f of files){const t=await readFile(f,'utf8').catch(()=> '');for(const term of forbidden)if(t.includes(term))bad.push(`${f}: ${term}`)}if(bad.length){console.error(bad.join('\n'));process.exit(1)}console.log('Public build gate passed: no internal paths or blocked assets found.');

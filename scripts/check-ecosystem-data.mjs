import { readFile } from 'node:fs/promises';
import ts from 'typescript';

const source = new URL('../src/data/ecosystem.ts', import.meta.url);
const sourceText = await readFile(source, 'utf8');
const transpiled = ts.transpileModule(sourceText, {
  compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.ESNext },
  reportDiagnostics: true,
});

if (transpiled.diagnostics?.length) {
  console.error('Unable to transpile ecosystem data.');
  process.exit(1);
}

const data = await import(`data:text/javascript;base64,${Buffer.from(transpiled.outputText).toString('base64')}`);
  const failures = [];
  const groups = new Set(['purpose', 'governance', 'platform', 'intelligence', 'knowledge', 'publishing', 'infrastructure', 'practical-work']);
  const statuses = new Set(['ESTABLISHED', 'IN_DEVELOPMENT', 'PROTOTYPE', 'RESEARCH', 'PLANNED', 'FUTURE_CANDIDATE', 'REUSE_CANDIDATE', 'ARCHITECTURE_ONLY', 'UNCONFIRMED', 'NOT_APPLICABLE']);
  const allowedCanonicalIds = new Set(['NE-AI-COMPUTE-01']);
  const privatePattern = /(?:https?:\/\/|\blocalhost\b|(?:\d{1,3}\.){3}\d{1,3}|[A-Z]:\\|\/(?:home|var|etc|users)\/|\b(?:api[ _-]?key|credential|password|token|database|dashboard url|endpoint|hostname|repository mapping)\b)/i;
  const nonEmpty = (value) => typeof value === 'string' && value.trim().length > 0;
  const basisValid = (basis) => basis && nonEmpty(basis.source) && nonEmpty(basis.note);
  const nodeKeys = new Set();

  for (const node of data.ecosystemNodes) {
    if (!nonEmpty(node.key) || nodeKeys.has(node.key)) failures.push(`duplicate or missing node key: ${node.key}`);
    nodeKeys.add(node.key);
    if (!groups.has(node.group)) failures.push(`invalid group: ${node.key}`);
    if (!nonEmpty(node.name) || !nonEmpty(node.summary)) failures.push(`missing public name or summary: ${node.key}`);
    if (!node.authority || !nonEmpty(node.authority.summary) || !basisValid(node.authority.basis)) failures.push(`invalid authority claim: ${node.key}`);
    if (!node.implementation || !statuses.has(node.implementation.status) || !nonEmpty(node.implementation.note) || !basisValid(node.implementation.basis)) failures.push(`invalid implementation claim: ${node.key}`);
    if (node.implementation.status === 'ESTABLISHED' && !basisValid(node.implementation.basis)) failures.push(`ESTABLISHED lacks claim basis: ${node.key}`);
    if (node.canonicalId && !allowedCanonicalIds.has(node.canonicalId)) failures.push(`unsupported canonical ID: ${node.canonicalId}`);
    if (privatePattern.test(JSON.stringify(node))) failures.push(`private implementation detail detected: ${node.key}`);
  }

  const relationshipKeys = new Set();
  for (const relationship of data.ecosystemRelationships) {
    const key = `${relationship.from}|${relationship.type}|${relationship.to}`;
    if (relationshipKeys.has(key)) failures.push(`duplicate relationship: ${key}`);
    relationshipKeys.add(key);
    if (!nodeKeys.has(relationship.from) || !nodeKeys.has(relationship.to)) failures.push(`relationship endpoint missing: ${key}`);
    if (!nonEmpty(relationship.description) || !basisValid(relationship.evidence)) failures.push(`invalid relationship evidence: ${key}`);
    if (relationship.basis === 'IMPLEMENTED_CONNECTION' && !basisValid(relationship.evidence)) failures.push(`implemented connection lacks evidence: ${key}`);
    if (privatePattern.test(JSON.stringify(relationship))) failures.push(`private implementation detail detected in relationship: ${key}`);
  }

  const approvedNodes = data.getPublicApprovedNodes();
  const approvedKeys = new Set(approvedNodes.map((node) => node.key));
  const approvedRelationships = data.getPublicApprovedRelationships();
  if (approvedNodes.some((node) => node.publication !== 'PUBLIC_APPROVED')) failures.push('node selector exposes pending node');
  if (approvedRelationships.some((relationship) => relationship.publication !== 'PUBLIC_APPROVED' || !approvedKeys.has(relationship.from) || !approvedKeys.has(relationship.to))) failures.push('relationship selector exposes pending or dangling edge');

  const authoritySequence = ['OBSERVE', 'RECOMMEND', 'PREPARE', 'EXECUTE WITH APPROVAL', 'PRE-AUTHORISED EXECUTION ONLY WHEN EXPLICITLY PERMITTED'];
  const buildSequence = ['DISCOVER', 'REUSE', 'DEFINE', 'BOUND', 'APPROVE', 'BUILD', 'TEST', 'REVIEW EVIDENCE', 'RELEASE DELIBERATELY', 'LEARN'];
  if (JSON.stringify(data.humanAuthorityProgression) !== JSON.stringify(authoritySequence)) failures.push('human authority progression differs from approved sequence');
  if (JSON.stringify(data.futureBuildMethod) !== JSON.stringify(buildSequence)) failures.push('future build method differs from approved sequence');

  if (failures.length) {
    console.error(failures.join('\n'));
    process.exitCode = 1;
  } else {
    const count = (items, key) => Object.fromEntries([...new Set(items.map((item) => item[key]))].sort().map((value) => [value, items.filter((item) => item[key] === value).length]));
    console.log(`Ecosystem data check passed: ${data.ecosystemNodes.length} nodes, ${data.ecosystemRelationships.length} relationships.`);
    console.log(`Publication counts: ${JSON.stringify(count(data.ecosystemNodes, 'publication'))}`);
    console.log(`Status counts: ${JSON.stringify(count(data.ecosystemNodes.map((node) => node.implementation), 'status'))}`);
  }

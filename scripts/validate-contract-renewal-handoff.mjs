import assert from 'node:assert/strict';
import fs from 'node:fs';

const slug = 'law-firm-contract-renewal-obligation-evidence';
const service = '/services/contract-administration';
const label = 'Plan contract administration support';
const updated = '2026-10-03';
const boundary = 'Counsel still decides notice, obligations, and contract interpretation.';
const source = fs.readFileSync('app/fleet-data.ts', 'utf8');
const anchor = `makeAugust14Research('${slug}'`;
const start = source.indexOf(anchor);
const end = source.indexOf("makeAugust14Research('offshore-legal-support-hearing-exhibit-index-integrity'", start);
assert.ok(start >= 0 && end > start, 'Expected a bounded contract-renewal record slice');
const record = source.slice(start, end);

assert.match(record, new RegExp(anchor.replaceAll('(', '\\(')));
assert.match(record, new RegExp(`updated: '${updated}'`));
assert.match(record, /serviceLink: \{ slug: 'contract-administration', label: 'Plan contract administration support'/);
assert.match(record, new RegExp(boundary.replaceAll('.', '\\.')));

const artifact = `.next/server/app/research/${slug}.html`;
if (process.env.VERIFY_ARTIFACT === '1') {
  assert.ok(fs.existsSync(artifact), `Missing fresh route artifact: ${artifact}`);
  const html = fs.readFileSync(artifact, 'utf8');
  const main = html.match(/<main[\s\S]*?<\/main>/)?.[0] ?? '';
  assert.match(html, new RegExp(`<link rel="canonical" href="https://legalservicesoffshore.com/research/${slug}"`));
  assert.match(html, new RegExp(`<meta property="article:modified_time" content="${updated}"`));
  assert.match(main, new RegExp(`>${label}<`));
  assert.match(main, new RegExp(`href="${service}"`));
  assert.match(main, new RegExp(boundary.replaceAll('.', '\\.')));
  assert.match(html, new RegExp(`"dateModified":"${updated}"`));
  const sitemap = fs.readFileSync('.next/server/app/sitemap.xml.body', 'utf8');
  assert.match(sitemap, new RegExp(`<loc>https://legalservicesoffshore.com/research/${slug}</loc>`));
}

console.log(`Contract renewal handoff: PASS (${fs.existsSync(artifact) ? 'source + artifact' : 'source'})`);

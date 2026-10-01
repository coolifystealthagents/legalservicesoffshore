import assert from 'node:assert/strict';
import fs from 'node:fs';

const slug = 'law-firm-intake-fact-pattern-normalization-study';
const service = '/services/legal-intake-support';
const label = 'Plan legal intake support';
const updated = '2026-10-01';
const record = fs.readFileSync('app/research/research-2026-08-19.ts', 'utf8');

assert.match(record, new RegExp(`slug: '${slug}'`));
assert.match(record, /updated: '2026-10-01'/);
assert.match(record, /serviceLink: \{ slug: 'legal-intake-support', label: 'Plan legal intake support'/);
assert.match(record, /conflict, urgency, acceptance, or advice questions/);

const artifact = `.next/server/app/research/${slug}.html`;
if (process.env.VERIFY_ARTIFACT === '1') {
  assert.ok(fs.existsSync(artifact), `Missing fresh route artifact: ${artifact}`);
  const html = fs.readFileSync(artifact, 'utf8');
  const main = html.match(/<main[\s\S]*?<\/main>/)?.[0] ?? '';
  assert.match(html, new RegExp(`<link rel="canonical" href="https://legalservicesoffshore.com/research/${slug}"`));
  assert.match(html, new RegExp(`<meta property="article:modified_time" content="${updated}"`));
  assert.match(main, new RegExp(`>${label}<`));
  assert.match(main, new RegExp(`href="${service}"`));
  assert.match(main, /conflict, urgency, acceptance, or advice questions/);
  assert.match(html, new RegExp(`"dateModified":"${updated}"`));
  const sitemap = fs.readFileSync('.next/server/app/sitemap.xml.body', 'utf8');
  assert.match(sitemap, new RegExp(`<loc>https://legalservicesoffshore.com/research/${slug}</loc>`));
}

console.log(`Intake handoff: PASS (${fs.existsSync(artifact) ? 'source + artifact' : 'source'})`);
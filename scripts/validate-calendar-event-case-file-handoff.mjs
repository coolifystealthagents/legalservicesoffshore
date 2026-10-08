import assert from 'node:assert/strict';
import fs from 'node:fs';

const slug = 'law-firm-calendar-event-provenance-study';
const service = '/services/case-file-management';
const label = 'Plan case-file calendar support';
const updated = '2026-10-08';
const source = fs.readFileSync('app/research/research-2026-08-19.ts', 'utf8');
const start = source.indexOf(`slug: '${slug}'`);
const end = source.indexOf("slug: 'legal-support-access-recertification-evidence'", start);

assert.ok(start >= 0, 'calendar-event research record is present');
assert.ok(end > start, 'calendar-event research record has a following boundary');
const record = source.slice(start, end);
assert.match(record, new RegExp(`updated: '${updated}'`));
assert.match(record, /serviceLink: \{ slug: 'case-file-management', label: 'Plan case-file calendar support'/);
assert.match(record, /approved calendar note, source reference, and review owner/);
assert.match(record, /The firm decides whether a date controls, requires legal action, or needs client communication/);
assert.doesNotMatch(record, /serviceLink: \{ slug: 'e-discovery-support'/);

const artifact = `.next/server/app/research/${slug}.html`;
if (process.env.VERIFY_ARTIFACT === '1') {
  assert.ok(fs.existsSync(artifact), `Missing fresh route artifact: ${artifact}`);
  const html = fs.readFileSync(artifact, 'utf8');
  const main = html.match(/<main[\s\S]*?<\/main>/)?.[0] ?? '';
  assert.match(html, new RegExp(`<link rel="canonical" href="https://legalservicesoffshore.com/research/${slug}"`));
  assert.match(html, new RegExp(`<meta property="article:modified_time" content="${updated}"`));
  assert.match(main, new RegExp(`>${label}<`));
  assert.match(main, new RegExp(`href="${service}"`));
  assert.match(main, /approved calendar note, source reference, and review owner/);
  assert.match(main, /The firm decides whether a date controls, requires legal action, or needs client communication/);
  assert.match(html, new RegExp(`"dateModified":"${updated}"`));
  const sitemap = fs.readFileSync('.next/server/app/sitemap.xml.body', 'utf8');
  assert.match(sitemap, new RegExp(`<loc>https://legalservicesoffshore.com/research/${slug}</loc>`));
}

console.log(`Calendar-event case-file handoff: PASS (${fs.existsSync(artifact) ? 'source + artifact' : 'source'})`);

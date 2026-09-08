import assert from 'node:assert/strict';
import fs from 'node:fs';
import test from 'node:test';

const source = fs.readFileSync('app/research/research-2026-08-19.ts', 'utf8');
const start = source.indexOf("slug: 'legal-document-production-source-map-research'");
const end = source.indexOf("slug: 'law-firm-calendar-event-provenance-study'", start);

function record() {
  assert.ok(start >= 0, 'document-production research record is present');
  assert.ok(end > start, 'document-production research record has a following boundary');
  return source.slice(start, end);
}

test('document-production research keeps its e-discovery handoff and counsel boundary', () => {
  const selected = record();
  assert.match(selected, /updated: '2026-09-08'/);
  assert.match(selected, /serviceLink: \{ slug: 'e-discovery-support', label: 'Plan e-discovery support'/);
  assert.match(selected, /Set up a reviewable e-discovery support lane/);
  assert.match(selected, /counsel review/);
  assert.match(selected, /stop for privilege or production decisions/);
  assert.match(selected, /The support worker must not decide those questions/);
});

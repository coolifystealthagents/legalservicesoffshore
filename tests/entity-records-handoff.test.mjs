import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';

const root = path.resolve(import.meta.dirname, '..');
const dataPath = path.join(root, 'app', 'fleet-data.ts');

test('entity relationship research keeps its typed corporate-records handoff and firm decision boundary', () => {
  const source = fs.readFileSync(dataPath, 'utf8');
  const start = source.indexOf("{ ...makeAugust14Research('legal-support-entity-relationship-evidence'");
  const end = source.indexOf("makeAugust14Research('offshore-legal-support-privilege-source-preservation'", start);

  assert.notEqual(start, -1, 'selected research record is present');
  assert.notEqual(end, -1, 'selected research record has a bounded source slice');

  const record = source.slice(start, end);
  const handoff = record.slice(record.indexOf('serviceLink:'));
  assert.match(record, /updated: '2026-10-25'/);
  assert.match(handoff, /slug: 'corporate-records-support'/);
  assert.match(handoff, /label: 'Plan corporate records support'/);
  assert.match(handoff, /approved entity sources, record fields, and the review owner/);
  assert.match(handoff, /The firm decides identity, ownership, authority, conflicts, and governance actions/);
  assert.doesNotMatch(handoff, /matching records does not establish legal identity/, 'the source limitation is not reused as the reader handoff');
});
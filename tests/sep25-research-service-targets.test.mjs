import assert from 'node:assert/strict';
import fs from 'node:fs';
import test from 'node:test';

const source = fs.readFileSync('app/research/research-2026-09-25.ts', 'utf8');

function selectedRecord(slug, nextSlug) {
  const start = source.indexOf(`slug:'${slug}'`);
  const end = source.indexOf(`slug:'${nextSlug}'`, start);
  assert.ok(start >= 0, `${slug} research record is present`);
  assert.ok(end > start, `${slug} research record has a following boundary`);
  return source.slice(start, end);
}

test('September 25 formation research points only to the published corporate-records service', () => {
  const record = selectedRecord('offshore-legal-support-entity-formation-filing-preparation-study', 'law-firm-offshore-contract-obligation-extraction-study');
  assert.match(record, /updated:'2026-09-26'/);
  assert.match(record, /service:\{slug:'corporate-records-support',label:'Plan a formation-records lane'/);
  assert.match(record, /Keep formation choices and filing authority with the firm/);
  assert.doesNotMatch(record, /document-preparation/);
});

test('September 25 contract research points only to the published contract-administration service', () => {
  const record = selectedRecord('law-firm-offshore-contract-obligation-extraction-study', 'offshore-legal-support-records-retention-disposition-research');
  assert.match(record, /updated:'2026-09-26'/);
  assert.match(record, /service:\{slug:'contract-administration',label:'Build a source-linked contract lane'/);
  assert.match(record, /Keep contract interpretation with the firm/);
  assert.doesNotMatch(record, /contract-management/);
});
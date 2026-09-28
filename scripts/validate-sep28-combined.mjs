import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
const blog=JSON.parse(await readFile('.paperclip/daily-content/2026-09-28/blog.json','utf8'));
const research=JSON.parse(await readFile('.paperclip/daily-content/2026-09-28/research.json','utf8'));
assert.equal(blog.entries.length,12);
assert.equal(research.entries.length,5);
assert.equal(new Set([...blog.entries,...research.entries].map(x=>x.slug)).size,17);
for(const entry of [...blog.entries,...research.entries]){
 assert.equal(entry.publicationDate,'2026-09-28');
 assert.match(entry.contentHash,/^[a-f0-9]{64}$/);
 assert.ok(entry.liveUrl.startsWith('https://legalservicesoffshore.com/'));
}
assert.ok(Math.min(...blog.audit.wordCounts)>=900);
assert.ok(Math.min(...research.bodyWordCounts)>=1200);
assert.ok(blog.audit.maxFiveWordShingleJaccard<0.5);
assert.ok(research.maximumPairwiseFiveWordShingleJaccard<0.5);
console.log('September 28 combined release: PASS (exact 12 Blog + 5 Research)');

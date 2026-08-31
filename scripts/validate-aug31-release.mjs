import fs from 'node:fs';
import assert from 'node:assert/strict';

const blog = fs.readFileSync('app/blog/blog-2026-08-31.ts', 'utf8');
const research = fs.readFileSync('app/research/research-2026-08-31.ts', 'utf8');
const blogSlugs = [...blog.matchAll(/slug: '([^']+)'/g)].map((m) => m[1]);
const researchSlugs = [...research.matchAll(/slug: '([^']+)'/g)].map((m) => m[1]);
assert.equal(blogSlugs.length, 12, 'August 31 blog count');
assert.equal(researchSlugs.length, 5, 'August 31 research count');
assert.equal(new Set([...blogSlugs, ...researchSlugs]).size, 17, 'all slugs unique');
assert.match(blog, /published: '2026-08-31'/);
assert.match(research, /published: '2026-08-31'/);
assert.match(blog, /August 31, 2026/);
assert.match(research, /August 31, 2026/);
assert.doesNotMatch(blog + research, /[—–]| -- /, 'humanizer punctuation check');
assert.match(fs.readFileSync('app/data.ts', 'utf8'), /\.\.\.august31BlogPosts/);
assert.match(fs.readFileSync('app/fleet-data.ts', 'utf8'), /\.\.\.august31ResearchPosts/);
console.log('August 31 release: PASS (12 blog, 5 research, unique slugs, visible and structured dates)');

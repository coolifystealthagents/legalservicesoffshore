import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';

const source=await readFile('app/blog/blog-2026-09-23.ts','utf8');
const data=await readFile('app/data.ts','utf8');
const article=await readFile('app/blog/[slug]/page.tsx','utf8');
const sitemap=await readFile('app/sitemap.xml/route.ts','utf8');
const slugMatches=[...source.matchAll(/\{slug:'([^']+)'/g)].map(match=>match[1]);
const mediaMatches=[...source.matchAll(/image:'(\/[^']+\.(?:png|webp))'/g)].map(match=>match[1]);
assert.equal(slugMatches.length,12,'exactly 12 topic records');
assert.equal(new Set(slugMatches).size,12,'unique slugs');
assert.equal(mediaMatches.length,12,'exactly 12 media records');
assert.equal(new Set(mediaMatches).size,12,'unique media within batch');
assert.match(data,/\.\.\.september23BlogPosts/);
assert.match(article,/datePublished: published/);
assert.match(article,/alternates: \{ canonical: url \}/);
assert.match(sitemap,/blogs\.map/);
assert.doesNotMatch(source,/[—–]| -- /,'house-style punctuation');
for(const [index,slug] of slugMatches.entries()){
 const html=await readFile(`.next/server/app/blog/${slug}.html`,'utf8');
 const mediaPath=mediaMatches[index];
 assert.match(html,new RegExp(`<link rel="canonical" href="https://legalservicesoffshore.com/blog/${slug}"`));
 assert.match(html,/"datePublished":"2026-09-23"/);
 assert.match(html,/American Bar Association, Formal Opinion 08-451/);
 assert.match(html,new RegExp(`<meta property="og:image" content="https://legalservicesoffshore.com${mediaPath}"`));
 assert.match(html,new RegExp(`<meta name="twitter:image" content="https://legalservicesoffshore.com${mediaPath}"`));
 assert.match(html,new RegExp(`<img src="${mediaPath.replaceAll('/','\\/')}" alt="[^"]+ editorial illustration"`));
 await readFile(`public${mediaPath}`);
 const visible=html.replace(/<script[\s\S]*?<\/script>/g,' ').replace(/<style[\s\S]*?<\/style>/g,' ').replace(/<[^>]+>/g,' ').replace(/&[a-z#0-9]+;/gi,' ');
 assert.ok(visible.trim().split(/\s+/).length>=900,`${slug} has at least 900 rendered words`);
}
console.log('September 23 Blog: PASS (12 new articles, 900+ words, sources, canonical, datePublished, sitemap wiring)');

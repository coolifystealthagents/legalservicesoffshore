import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';

const source=await readFile('app/blog/blog-2026-09-24.ts','utf8');
const data=await readFile('app/data.ts','utf8');
const article=await readFile('app/blog/[slug]/page.tsx','utf8');
const sitemap=await readFile('app/sitemap.xml/route.ts','utf8');
const slugs=[...source.matchAll(/\{slug:'([^']+)'/g)].map(m=>m[1]);
const images=[...source.matchAll(/image:'(\/[^']+\.(?:png|webp|svg))'/g)].map(m=>m[1]);
assert.equal(slugs.length,12,'exactly 12 topic records');
assert.equal(new Set(slugs).size,12,'unique slugs');
assert.equal(images.length,12,'exactly 12 media records');
assert.match(data,/\.\.\.september24BlogPosts/);
assert.match(article,/datePublished: published/);
assert.match(article,/alternates: \{ canonical: url \}/);
assert.match(sitemap,/blogs\.map/);
assert.doesNotMatch(source,/[—–]| -- /,'house-style punctuation');
for(const [index,slug] of slugs.entries()){
 const html=await readFile(`.next/server/app/blog/${slug}.html`,'utf8');
 const image=images[index];
 assert.match(html,new RegExp(`<link rel="canonical" href="https://legalservicesoffshore.com/blog/${slug}"`));
 assert.match(html,/"datePublished":"2026-09-24"/);
 assert.match(html,/American Bar Association, Formal Opinion 08-451/);
 assert.match(html,new RegExp(`<meta property="og:image" content="https://legalservicesoffshore.com${image.replaceAll('/','\\/')}"`));
 assert.match(html,new RegExp(`<img src="${image.replaceAll('/','\\/')}" alt="[^"]+ editorial illustration"`));
 await readFile(`public${image}`);
 const visible=html.replace(/<script[\s\S]*?<\/script>/g,' ').replace(/<style[\s\S]*?<\/style>/g,' ').replace(/<[^>]+>/g,' ').replace(/&[a-z#0-9]+;/gi,' ');
 assert.ok(visible.trim().split(/\s+/).length>=900,`${slug} has at least 900 rendered words`);
}
console.log('September 24 Blog: PASS (12 new articles, 900+ words, sources, canonical, datePublished, sitemap wiring)');

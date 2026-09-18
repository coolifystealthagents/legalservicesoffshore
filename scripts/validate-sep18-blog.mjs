import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';

const source=await readFile('app/blog/blog-2026-09-18.ts','utf8');
const data=await readFile('app/data.ts','utf8');
const article=await readFile('app/blog/[slug]/page.tsx','utf8');
const sitemap=await readFile('app/sitemap.xml/route.ts','utf8');
const manifest=JSON.parse(await readFile('.paperclip/daily-content/2026-09-18/blog.json','utf8'));
const expected=manifest.entries.map(entry=>entry.slug);
const mediaPaths=[...source.matchAll(/^\s+'(\/[^']+\.(?:png|webp))',$/gm)].map(match=>match[1]);
assert.equal(manifest.contract,'canonical-daily-blog-publishing');
assert.equal(manifest.requiredCount,12);
assert.equal(manifest.entries.length,12);
assert.equal(new Set(expected).size,12);
assert.equal(mediaPaths.length,12);
assert.equal(new Set(mediaPaths).size,12);
assert.match(data,/\.\.\.september18BlogPosts/);
assert.match(article,/datePublished: published/);
assert.match(article,/alternates: \{ canonical: url \}/);
assert.match(sitemap,/blogs\.map/);
assert.doesNotMatch(source,/[—–]| -- /,'house-style punctuation');
for(const [index,entry] of manifest.entries.entries()){
 const mediaPath=mediaPaths[index];
 assert.equal((source.match(new RegExp(`slug:'${entry.slug}'`,'g'))||[]).length,1,`one source record for ${entry.slug}`);
 assert.equal(entry.publicationDate,'2026-09-18');
 assert.equal(entry.liveUrl,`https://legalservicesoffshore.com/blog/${entry.slug}`);
 const html=await readFile(`.next/server/app/blog/${entry.slug}.html`,'utf8');
 assert.match(html,new RegExp(`<link rel="canonical" href="https://legalservicesoffshore.com/blog/${entry.slug}"`));
 assert.match(html,/"datePublished":"2026-09-18"/);
 assert.match(html,/American Bar Association, Formal Opinion 08-451/);
 assert.match(html,new RegExp(`<meta property="og:image" content="https://legalservicesoffshore.com${mediaPath}"`));
 assert.match(html,new RegExp(`<meta name="twitter:image" content="https://legalservicesoffshore.com${mediaPath}"`));
 assert.match(html,new RegExp(`<img src="${mediaPath.replaceAll('/','\\/')}" alt="[^"]+ editorial illustration"`));
 await readFile(`public${mediaPath}`);
 const visible=html.replace(/<script[\s\S]*?<\/script>/g,' ').replace(/<style[\s\S]*?<\/style>/g,' ').replace(/<[^>]+>/g,' ').replace(/&[a-z#0-9]+;/gi,' ');
 assert.ok(visible.trim().split(/\s+/).length>=900,`${entry.slug} has at least 900 rendered words`);
}
console.log('September 18 Blog: PASS (12 new articles, 900+ words, sources, canonical, datePublished, sitemap wiring)');

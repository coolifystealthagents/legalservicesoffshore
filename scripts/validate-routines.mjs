import { readFile } from 'node:fs/promises';

const manifest = JSON.parse(await readFile(new URL('../ops/routines.json', import.meta.url)));
const schedule = JSON.parse(await readFile(new URL('../ops/recurring-routines.json', import.meta.url)));
const quality = JSON.parse(await readFile(new URL('../ops/quality-tools.json', import.meta.url)));

const expected = [
  ['daily-blog-publishing', 'Daily Blog Publishing', '0 9 * * 1-5', 'skip_if_active', 'medium', 20, 25],
  ['daily-research-publishing', 'Daily Research Publishing', '0 6 * * *', 'always_enqueue', 'high', 10, 15],
];
const fail = (message) => { throw new Error(message); };

if (manifest.version !== '2.4' || manifest.site !== 'LegalServicesOffshore.com') fail('manifest identity/version mismatch');
if (manifest.repository !== 'coolifystealthagents/legalservicesoffshore' || manifest.productionBranch !== 'main') fail('canonical repository or production branch mismatch');
if (manifest.framework !== 'Next.js 15 App Router' || manifest.timezone !== 'UTC') fail('framework/timezone mismatch');
if (manifest.coolify !== 'prohibited' || manifest.terminalBoundary !== 'github_push') fail('unsafe terminal boundary');
if (manifest.routines.length !== 2 || schedule.routines.length !== 2) fail('exactly two routines are required');

for (const [id, title, cron, concurrency, priority, minimum, maximum] of expected) {
  const routine = manifest.routines.find((item) => item.id === id);
  const scheduled = schedule.routines.find((item) => item.id === id);
  if (!routine || !scheduled) fail(`${id} missing`);
  for (const [key, value] of Object.entries({ title, cron, concurrency, priority })) {
    if (routine[key] !== value || scheduled[key] !== value) fail(`${id} ${key} mismatch`);
  }
  if (routine.catchUp !== 'skip_missed' || scheduled.catchUp !== 'skip_missed') fail(`${id} catch-up mismatch`);
  if (routine.target.minimum !== minimum || routine.target.maximum !== maximum || scheduled.targetMin !== minimum || scheduled.targetMax !== maximum) fail(`${id} target mismatch`);
  if (!routine.pushRequired || routine.thumbnailMode !== 'deterministic_python_composite') fail(`${id} terminal stages missing`);
  if (/coolify|google search console|gsc|deploy|live-site/i.test(scheduled.runbook)) {
    const allowed = /Never call Coolify or GSC\./i.test(scheduled.runbook);
    if (!allowed || /\b(deploy|live-site)\b/i.test(scheduled.runbook.replace(/Never call Coolify or GSC\./i, ''))) fail(`${id} prohibited deployment/GSC action found`);
  }
}
if (quality.humanizer.source !== 'https://github.com/blader/humanizer' || quality.humanizer.version !== '2.9.1' || !quality.humanizer.noFabrication) fail('official Humanizer contract missing');
if (quality.thumbnail.dimensions.width !== 1200 || quality.thumbnail.dimensions.height !== 630 || quality.thumbnail.apiPerArticle) fail('thumbnail contract mismatch');
console.log('v2.4 routine manifest: PASS (2 routines, UTC, GitHub-push terminal boundary, Coolify/GSC excluded)');

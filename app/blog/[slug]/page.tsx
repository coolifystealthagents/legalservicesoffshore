import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Footer, Header, CTA, JsonLd } from '../../components';
import { blogPosts, site } from '../../data';
import { richArticle } from '../article-data';

const base = 'https://legalservicesoffshore.com';

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) return {};
  const url = `${base}/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: { title: post.title, description: post.excerpt, url, type: 'article' },
  };
}

function ArticleBanner({ label, title, body }: { label: string; title: string; body: string }) {
  return (
    <aside className="article-banner" data-article-banner="true" aria-label={label}>
      <p className="banner-label">{label}</p>
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
      <a className="btn primary" href="/contact">Discuss the role</a>
    </aside>
  );
}

function SecurityArticle() {
  const url = `${base}/blog/${richArticle.slug}`;
  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: base },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${base}/blog` },
      { '@type': 'ListItem', position: 3, name: richArticle.keyword, item: url },
    ],
  };
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Offshore legal assistant Philippines: a data security plan for law firms',
    description: 'Set the task boundary, access rules, review steps, and incident handoff before a Philippines-based legal assistant opens a client file.',
    datePublished: richArticle.published,
    dateModified: richArticle.modified,
    mainEntityOfPage: url,
    author: { '@type': 'Organization', name: site.brand },
    publisher: { '@type': 'Organization', name: site.brand, url: base },
    citation: richArticle.sources.map((source) => source.url),
  };
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: richArticle.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  return (
    <>
      <Header />
      <main>
        <article className="rich-article" data-article-body="true" data-revision={richArticle.revision}>
          <JsonLd data={articleSchema} />
          <JsonLd data={faqSchema} />
          <JsonLd data={breadcrumbs} />
          <header className="article-hero">
            <div className="container article-narrow">
              <p className="eyebrow">Philippines legal staffing guide</p>
              <h1>Offshore legal assistant Philippines: a data security plan for law firms</h1>
              <p className="lead" data-narrative="true">A Philippines-based legal assistant can prepare intake notes, organize matter files, format documents, and keep task queues moving. The safe version of the role starts with narrow access, named reviewers, and a written stop rule for anything unusual.</p>
              <div className="article-meta"><span>Published July 25, 2026</span><span>11 minute read</span><span>Evidence checked</span></div>
            </div>
          </header>

          <div className="container article-narrow article-content">
            <section aria-labelledby="direct-answer">
              <h2 id="direct-answer">The direct answer</h2>
              <p data-narrative="true">Hire for a defined support lane, not for broad access to every matter. A strong first role might turn approved intake facts into a summary, prepare a document from a locked template, or update a matter record after a lawyer has chosen the next step.</p>
              <p data-narrative="true">The firm keeps legal judgment, client advice, filing approval, settlement choices, trust-account work, and final release of sensitive material. The assistant owns careful preparation and fast escalation, while a lawyer or firm manager owns every decision that changes a client's rights or the firm's position.</p>
            </section>

            <section className="evidence-strip" aria-label="Research findings">
              <div><strong>68%</strong><span>of breaches involved a human element in Verizon's 2024 dataset</span></div>
              <div><strong>10,626</strong><span>confirmed breaches were reviewed in the 2024 DBIR</span></div>
              <div><strong>859,532</strong><span>complaints reached the FBI's IC3 in 2024</span></div>
            </section>

            <section aria-labelledby="role-boundary">
              <h2 id="role-boundary">Draw the role boundary before the first login</h2>
              <p data-narrative="true">Start with the work that already has a good example and a clear end point. If the firm cannot show what a correct intake summary or finished file set looks like, the assistant will have to guess, and guessing around client data is a bad training plan.</p>
              <div className="table-wrap" tabIndex={0} role="region" aria-label="Legal assistant task boundary table">
                <p className="scroll-cue">Swipe or scroll sideways to see the firm control column.</p>
                <table>
                  <caption>Support work and the matching firm control</caption>
                  <thead><tr><th>Work lane</th><th>Assistant may do</th><th>Firm keeps</th></tr></thead>
                  <tbody>
                    <tr><td>New inquiry</td><td>Collect approved facts and note missing items</td><td>Conflict decision, advice, and acceptance</td></tr>
                    <tr><td>Matter files</td><td>Name, sort, and compare files to a checklist</td><td>Privilege calls and disclosure approval</td></tr>
                    <tr><td>Documents</td><td>Format from a locked firm template</td><td>Legal substance, signature, and filing</td></tr>
                    <tr><td>Calendar</td><td>Enter dates supplied by the firm and flag gaps</td><td>Deadline calculation and legal response</td></tr>
                    <tr><td>Billing support</td><td>Clean narratives and find missing entries</td><td>Write-offs, client disputes, and final bills</td></tr>
                    <tr><td>Status reports</td><td>Summarize approved fields and open tasks</td><td>Client promises and case strategy</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            <ArticleBanner label="Role planning" title="Turn one legal task into a safe first role" body="Bring one work sample, the tools involved, and the name of the reviewer. The staffing team can use that detail to discuss a Philippines-based candidate profile." />

            <section aria-labelledby="human-risk">
              <h2 id="human-risk">Treat ordinary mistakes as the main design problem</h2>
              <p data-narrative="true">The 2024 Verizon Data Breach Investigations Report reviewed 30,458 security incidents and 10,626 confirmed breaches across 94 countries. It found that a human element was involved in 68% of breaches after malicious privilege misuse was removed from that measure.</p>
              <p data-narrative="true">That finding does not mean staff are the enemy. It means the role should make a wrong click, wrong recipient, or wrong file easier to catch before it becomes a client problem.</p>

              <figure className="article-figure">
                <svg viewBox="0 0 760 330" role="img" aria-labelledby="chart-title chart-desc">
                  <title id="chart-title">Human element in confirmed breaches</title>
                  <desc id="chart-desc">A horizontal bar shows 68 percent with a human element and 32 percent without that classification in Verizon's 2024 report dataset.</desc>
                  <rect x="0" y="0" width="760" height="330" rx="24" fill="#fffaf3" />
                  <text x="42" y="52" className="svg-title">Human element in confirmed breaches</text>
                  <text x="42" y="85" className="svg-note">Share of breaches in the 2024 DBIR dataset</text>
                  <text x="42" y="145" className="svg-label">Human element</text>
                  <rect x="210" y="118" width="462" height="42" rx="10" fill="#e5e7eb" />
                  <rect x="210" y="118" width="314" height="42" rx="10" fill="#0f8f73" />
                  <text x="540" y="146" className="svg-value">68%</text>
                  <text x="42" y="215" className="svg-label">Other classification</text>
                  <rect x="210" y="188" width="462" height="42" rx="10" fill="#e5e7eb" />
                  <rect x="210" y="188" width="148" height="42" rx="10" fill="#f27b3d" />
                  <text x="374" y="216" className="svg-value">32%</text>
                  <text x="42" y="282" className="svg-axis">Unit: percent of confirmed breaches</text>
                </svg>
                <figcaption>Method note: Verizon classified the human element after excluding malicious privilege misuse. The two bars show the reported 68% and the remaining 32%; they do not measure a law-firm-only sample.</figcaption>
              </figure>

              <p data-narrative="true">The same report said exploitation of vulnerabilities as the first path into a breach rose 180% from the prior year. A firm therefore needs both people controls and software controls: careful handoffs will not fix an unpatched device, and a patched device will not stop a rushed worker from sending the wrong attachment.</p>
            </section>

            <section aria-labelledby="access-plan">
              <h2 id="access-plan">Use an access plan that can be checked</h2>
              <p data-narrative="true">Limit the account to assigned matters and the few tools needed for the first task. A worker formatting approved documents may need a template folder and a task queue, but not the firm's full email archive, trust account, or every case file.</p>
              <p data-narrative="true">The National Privacy Commission publishes the Philippines' Data Privacy Act of 2012, which covers the processing of personal information and sets duties around lawful handling and security. The firm should map those duties with the rules in its own jurisdiction and contract terms, rather than treating location as a substitute for a real privacy review.</p>
              <p data-narrative="true">NIST's 2024 Cybersecurity Framework 2.0 groups security work under Govern, Identify, Protect, Detect, Respond, and Recover. For a small legal support role, that can be as simple as naming the owner, listing the data, limiting access, reviewing activity, writing an incident contact, and confirming how access will be removed.</p>
            </section>

            <section aria-labelledby="daily-handoff">
              <h2 id="daily-handoff">Build a four-part daily handoff</h2>
              <figure className="article-figure process-figure">
                <svg viewBox="0 0 860 300" role="img" aria-labelledby="flow-title flow-desc">
                  <title id="flow-title">Daily legal support handoff</title>
                  <desc id="flow-desc">Four connected steps show receive, prepare, review, and release, with lawyer control at review and release.</desc>
                  <rect width="860" height="300" rx="24" fill="#17324d" />
                  <text x="42" y="52" className="svg-title svg-light">One task, four visible handoffs</text>
                  <g transform="translate(42 92)">
                    <rect width="165" height="120" rx="18" fill="#fffaf3" /><text x="20" y="38" className="svg-step">1. Receive</text><text x="20" y="70" className="svg-small">Approved queue</text><text x="20" y="94" className="svg-small">and source file</text>
                    <path d="M175 60h38" stroke="#dff4ed" strokeWidth="5" /><path d="m207 48 15 12-15 12" fill="none" stroke="#dff4ed" strokeWidth="5" />
                    <g transform="translate(220 0)"><rect width="165" height="120" rx="18" fill="#fffaf3" /><text x="20" y="38" className="svg-step">2. Prepare</text><text x="20" y="70" className="svg-small">Follow template</text><text x="20" y="94" className="svg-small">and flag gaps</text></g>
                    <path d="M395 60h38" stroke="#dff4ed" strokeWidth="5" /><path d="m427 48 15 12-15 12" fill="none" stroke="#dff4ed" strokeWidth="5" />
                    <g transform="translate(440 0)"><rect width="165" height="120" rx="18" fill="#dff4ed" /><text x="20" y="38" className="svg-step">3. Review</text><text x="20" y="70" className="svg-small">Lawyer checks</text><text x="20" y="94" className="svg-small">substance</text></g>
                    <path d="M615 60h38" stroke="#dff4ed" strokeWidth="5" /><path d="m647 48 15 12-15 12" fill="none" stroke="#dff4ed" strokeWidth="5" />
                    <g transform="translate(660 0)"><rect width="158" height="120" rx="18" fill="#f7c9ad" /><text x="20" y="38" className="svg-step">4. Release</text><text x="20" y="70" className="svg-small">Firm sends, files,</text><text x="20" y="94" className="svg-small">or approves</text></g>
                  </g>
                  <text x="42" y="258" className="svg-note svg-light">Control point: the assistant prepares; the firm reviews and releases.</text>
                </svg>
                <figcaption>This graphic is a planning model, not a claim about every law firm. Change the final two steps to match the firm's rules, practice area, and client commitments.</figcaption>
              </figure>

              <p data-narrative="true">Set one stop rule that is easy to remember: if the task needs legal judgment, a new recipient, wider access, or a changed client promise, pause and ask. Managers should praise a clean stop instead of rewarding silent guesses.</p>
            </section>

            <ArticleBanner label="Access check" title="Map tools before candidate matching" body="List the practice system, file areas, inboxes, and hours tied to the first task. Keep broad access and legal decisions with the firm." />

            <section aria-labelledby="first-week">
              <h2 id="first-week">Run a narrow first week</h2>
              <ul className="week-plan">
                <li><strong>Day 1:</strong> Open the named accounts, test multi-factor authentication, and review the stop rule.</li>
                <li><strong>Day 2:</strong> Complete one redacted practice item while the manager watches the handoff.</li>
                <li><strong>Day 3:</strong> Prepare a small live batch, then check every field and attachment before release.</li>
                <li><strong>Day 4:</strong> Repeat the same task and record the questions that the written guide missed.</li>
                <li><strong>Day 5:</strong> Score accuracy, escalation, access discipline, and turnaround before adding work.</li>
              </ul>
              <p data-narrative="true">The FBI's 2024 IC3 report recorded 859,532 complaints, and reported losses rose 33% from 2023. It also said ransomware complaints tied to critical infrastructure rose 9%, which is a useful reminder that an incident contact and a tested reporting path belong in the onboarding file.</p>
            </section>

            <section aria-labelledby="scripts">
              <h2 id="scripts">Give the assistant words to use</h2>
              <div className="script-grid">
                <div className="script-card"><h3>When a request needs legal judgment</h3><p>"I can collect the facts and prepare the file, but this question needs review from the attorney. I have paused the task and sent the details to [name]."</p></div>
                <div className="script-card"><h3>When access looks wrong</h3><p>"This file or account is outside the access listed for my task. I have not opened or shared it, and I am sending the link and time to [name] for review."</p></div>
              </div>
            </section>

            <section aria-labelledby="reporting">
              <h2 id="reporting">Make incident reporting calm and fast</h2>
              <p data-narrative="true">If the assistant clicks a suspect link, sees the wrong client file, or sends an attachment to the wrong person, the first move is to stop and report facts. The assistant should not delete messages, edit logs, contact the recipient without direction, or try to hide a small mistake.</p>
              <blockquote>
                <p>"Without the information you report to us through IC3 or your local FBI Field Office, we simply cannot piece together the puzzle of this ever-shifting threat landscape."</p>
                <cite>B. Chad Yarbrough, Operations Director for Criminal and Cyber, Federal Bureau of Investigation, 2024 IC3 Annual Report</cite>
              </blockquote>
              <p data-narrative="true">Yarbrough was writing about reports to law enforcement, not ordinary internal mistakes at a law firm. The practical lesson is still sound: quick, accurate facts help the responsible owner decide what to do next.</p>
            </section>

            <section aria-labelledby="manager-review">
              <h2 id="manager-review">Review the role every week</h2>
              <p data-narrative="true">Access removal deserves the same care as setup. When a task ends or a worker changes roles, close the account, transfer open items, preserve the records the firm needs, and confirm that no shared password remains in use.</p>
            </section>

            <ArticleBanner label="Philippines-based staffing" title="Hire around a written control plan" body="Share the task, schedule, systems, review owner, and access limits. A staffing specialist can discuss candidates matched to that exact support lane." />

            <section aria-labelledby="hiring-questions">
              <h2 id="hiring-questions">Questions to ask before hiring</h2>
              <ul className="check-list">
                <li>Which legal support tasks has the candidate done from a written checklist?</li>
                <li>How does the candidate handle a missing fact or unclear instruction?</li>
                <li>Can the worker explain why named accounts matter?</li>
                <li>Who handles attendance, coaching, and replacement questions?</li>
                <li>How will the firm review early work without exposing unrelated matters?</li>
                <li>What is the exact path for reporting a wrong file, recipient, or permission?</li>
              </ul>
              <p data-narrative="true">The answer should name people, tools, and steps. A promise that data is "fully secure" is not a plan, because no provider or firm can honestly promise that mistakes and attacks will never happen.</p>
              <p data-narrative="true">For more role planning, read the <a href="/blog">offshore legal support role guide</a>, the <a href="/blog">first-week checklist</a>, and the <a href="/blog">provider question list</a>. The <a href="/services/admin-support">legal admin support page</a> also shows a narrow starting scope.</p>
            </section>

            <section aria-labelledby="faqs">
              <h2 id="faqs">Frequently asked questions</h2>
              <div className="faq-list">
                {richArticle.faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p data-narrative="true">{faq.answer}</p></details>)}
              </div>
            </section>

            <section className="sources" aria-labelledby="sources">
              <h2 id="sources">Sources</h2>
              <ol>{richArticle.sources.map((source) => <li key={source.url}><a href={source.url}>{source.name}</a><p>{source.note}</p></li>)}</ol>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) notFound();
  if (slug === richArticle.slug) return <SecurityArticle />;

  return (
    <>
      <Header />
      <main>
        <article className="section"><div className="container article-shell"><p className="eyebrow">{site.brand} blog</p><h1>{post.title}</h1><p className="lead">{post.excerpt}</p><section className="card"><h2>Start with a defined workflow</h2><p>For Philippines-based staffing, document the work, tools, schedule, and desired outcome before candidate matching. Keep business judgment and final approvals with a named manager.</p><h2>Prepare representative examples</h2><p>Use real, appropriately redacted examples to explain quality. Review early work together and update the written process when an exception appears.</p><h2>Plan access and handoffs</h2><p>Provide only the access needed for the position and use named accounts where possible. Write down which questions must be escalated and who receives them.</p></section></div></article>
        <CTA />
      </main>
      <Footer />
    </>
  );
}

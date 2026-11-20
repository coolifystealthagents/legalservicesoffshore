import type { CSSProperties } from 'react';
import { blogPosts, services, site, staffingProcess } from './data';
import { fleetServices } from './fleet-data';
import { Footer, Header, JsonLd, Marquee, ReviewRail, SectionHead } from './components';
import { getCardImage } from './blog/card-image';

const marqueeItems = [
  'Client intake',
  'Matter files',
  'Document preparation',
  'Billing support',
  'Records cleanup',
  'Legal research',
  'E-discovery',
  'Immigration administration',
  'Corporate records',
  'Quality reporting',
];

const laneLabels: Record<string, string> = {
  'legal-intake-support': 'Intake',
  'litigation-document-review': 'Litigation',
  'contract-administration': 'Contracts',
  'legal-research-support': 'Research',
  'case-file-management': 'Matters',
  'e-discovery-support': 'E-discovery',
  'immigration-case-administration': 'Immigration',
  'real-estate-legal-support': 'Real estate',
  'corporate-records-support': 'Corporate',
  'billing-and-time-entry-support': 'Billing',
  'reporting-and-qa': 'Quality',
};

const laneTags: Record<string, string[]> = {
  'legal-intake-support': ['Approved scripts', 'Conflict fields', 'Escalation path'],
  'litigation-document-review': ['Indexing', 'Tagging', 'Privilege flags'],
  'contract-administration': ['Templates', 'Versions', 'Renewals'],
  'legal-research-support': ['Source log', 'Citations', 'Date limits'],
  'case-file-management': ['Matter taxonomy', 'Naming', 'Closeout'],
  'e-discovery-support': ['Custodians', 'Transfers', 'Production checks'],
  'immigration-case-administration': ['Evidence', 'Forms', 'Notices'],
  'real-estate-legal-support': ['Diligence', 'Signatures', 'Closing'],
  'corporate-records-support': ['Entity files', 'Minutes', 'Filings'],
  'billing-and-time-entry-support': ['Narratives', 'Exceptions', 'Follow-up'],
  'reporting-and-qa': ['Scorecards', 'Samples', 'Rework log'],
};

const ledger = [
  { strong: 'Attorney review', span: 'Legal judgment, privilege, and client advice stay inside the firm' },
  { strong: 'Narrow access', span: 'Named accounts and the minimum tools for one queue' },
  { strong: 'Written handoffs', span: 'Source record, prepared output, and open questions' },
  { strong: 'Visible quality', span: 'Samples, scorecards, rework reasons, and exceptions' },
];

const boundaryRules = [
  { label: '01', text: 'Give the support team one finished example that already meets the firm standard.' },
  { label: '02', text: 'Open only the folders and systems required for the first queue, then expand after review.' },
  { label: '03', text: 'Name the attorney or manager who decides exceptions, privilege, and client-facing next steps.' },
];

export default function Home() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `https://${site.domain}/#organization`,
        name: site.brand,
        url: `https://${site.domain}`,
      },
      {
        '@type': 'WebPage',
        '@id': `https://${site.domain}/#webpage`,
        url: `https://${site.domain}`,
        name: 'Offshore legal support for law firms',
        description: 'Plan offshore legal intake, matter administration, document preparation, billing support, and quality reporting with clear attorney review rules.',
        about: { '@id': `https://${site.domain}/#organization` },
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: services.map((service, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: service.title,
            url: `https://${site.domain}/services/${service.slug}`,
          })),
        },
      },
    ],
  };

  const featuredLanes = fleetServices.slice(0, 8);
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1} className="cf-home">
        <JsonLd data={schema} />

        <section className="cf-hero">
          <div className="cf-container cf-hero-grid">
            <div className="cf-hero-copy">
              <p className="cf-eyebrow">Offshore legal support, built around your rules</p>
              <h1>
                Give legal admin work a
                <em>clear owner.</em>
              </h1>
              <p className="cf-hero-lead">
                Build a remote support role for the repeat work that slows your firm down.
                Your attorneys keep legal judgment. Your support team keeps the handoff moving.
              </p>
              <ul className="cf-hero-list">
                <li>Client intake notes and follow-up</li>
                <li>Matter status and deadlines</li>
                <li>Document prep from templates</li>
                <li>Billing and records cleanup</li>
              </ul>
              <div className="cf-actions">
                <a className="cf-btn" href="/contact-us" id="cta-page-action-1">Request a support plan ↗</a>
                <a className="cf-btn cf-btn--ghost" href="/services">Review the legal lanes</a>
              </div>
              <p className="cf-micro">Start with one role, a short task list, and firm-set review rules.</p>
            </div>

            <div className="cf-scene" aria-label="A legal matter file prepared for attorney review">
              <div className="cf-seal" aria-hidden="true">
                <span>Legal operations · Philippines · review gate</span>
              </div>
              <figure className="cf-photo-sheet" data-depth="9">
                <img
                  src="/images/editorial/home-international-legal-advisory-v3.webp"
                  width="1536"
                  height="1024"
                  alt="Three international legal advisers reviewing a contract in a boardroom"
                  fetchPriority="high"
                />
                <figcaption>Prepared work, kept inside firm review.</figcaption>
              </figure>
              <article className="cf-file" data-tilt data-tilt-strength="4">
                <div className="cf-file-head">
                  <span>Matter file</span>
                  <b>LSO-042</b>
                </div>
                <h3>Intake + matter admin</h3>
                <ul>
                  <li>Approved intake scripts</li>
                  <li>Limited tool access</li>
                  <li>Source records attached</li>
                  <li>Named review owner</li>
                </ul>
                <div className="cf-file-foot">
                  <span>Review gate</span>
                  <b>Attorney</b>
                </div>
              </article>
              <span className="cf-tab" aria-hidden="true">Confidential</span>
              <span className="cf-stamp" aria-hidden="true">Attorney review required</span>
            </div>
          </div>
          <Marquee items={marqueeItems} />
        </section>

        <section className="cf-section cf-section--paper">
          <div className="cf-container">
            <div className="cf-statement">
              <h2 data-reveal>Routine work still needs <em>care.</em></h2>
              <div className="cf-statement-copy" data-reveal style={{ '--cf-delay': '90ms' } as CSSProperties}>
                <p>
                  New leads wait for a call back. Matter notes sit in an inbox. Files need
                  the same cleanup every week. None of this is legal strategy, but missed
                  details still hurt the client experience.
                </p>
                <p>
                  A well-scoped offshore role gives that work an owner. The firm sets the
                  script, access, deadline rules, and review point before the first task
                  goes live.
                </p>
              </div>
            </div>
            <div className="cf-ledger" data-reveal>
              {ledger.map((item) => (
                <div key={item.strong}>
                  <strong>{item.strong}</strong>
                  <span>{item.span}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="cf-section" id="tasks">
          <div className="cf-container">
            <SectionHead
              eyebrow="The matter index"
              title={<>Support lanes shaped for legal teams.</>}
              copy="Start with the work that repeats and already has a good example. Add more only after the first lane is steady."
            />
            <div className="cf-lanes">
              {featuredLanes.map((service, index) => (
                <a
                  className="cf-lane"
                  href={`/services/${service.slug}`}
                  key={service.slug}
                  data-tilt
                  data-tilt-strength="3"
                  data-reveal
                  style={{ '--cf-delay': `${(index % 2) * 70}ms` } as CSSProperties}
                >
                  <span className="cf-lane-label">Legal lane · {laneLabels[service.slug] || 'Operations'}</span>
                  <div>
                    <h3>{service.title}</h3>
                    <p>{service.desc}</p>
                    <div className="cf-lane-tags">
                      {(laneTags[service.slug] || []).map((tag) => <span key={tag}>{tag}</span>)}
                    </div>
                  </div>
                  <span className="cf-lane-arrow" aria-hidden="true">↗</span>
                  <div className="cf-lane-foot">
                    <span>Review the scope and controls</span>
                  </div>
                </a>
              ))}
            </div>
            <div className="cf-index-bar" style={{ marginTop: 30, marginBottom: 0, paddingBottom: 0, borderBottom: 0 }}>
              <p>Eleven legal support lanes, one recruiting and employment team behind them.</p>
              <a className="cf-link" href="/services">Compare every service</a>
            </div>
          </div>
        </section>

        <section className="cf-section cf-section--deep">
          <div className="cf-container cf-boundary">
            <div className="cf-boundary-copy" data-reveal>
              <p className="cf-eyebrow cf-eyebrow--light">A safer way to hand off work</p>
              <h2>Write the boundary before you share the login.</h2>
              <p>
                Your first role plan should name the task, the source file, the expected
                output, and the person who approves exceptions. That is much safer than
                a vague job description.
              </p>
              <div className="cf-rule-list">
                {boundaryRules.map((rule) => (
                  <div className="cf-rule" key={rule.label}>
                    <span>{rule.label}</span>
                    <p>{rule.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="cf-privilege" aria-hidden="true">
              <div className="cf-privilege-sheet" data-tilt data-tilt-strength="3">
                <p className="cf-mono">Privilege and review</p>
                <h3>Preparation moves.<br />Legal calls stay with counsel.</h3>
                <div className="cf-privilege-lines"><span /><span /><span /></div>
                <div className="cf-privilege-stamp">Attorney review</div>
              </div>
            </div>
          </div>
        </section>

        <section className="cf-section cf-section--paper">
          <div className="cf-container">
            <SectionHead
              eyebrow="From task list to working role"
              title={<>A plain four-step launch.</>}
              copy="A short pilot is more useful than a long interview loop. Keep the lane bounded and the review owner named."
            />
            <div className="cf-process">
              {staffingProcess.map((item, index) => (
                <article
                  className="cf-step"
                  key={item.step}
                  data-reveal
                  style={{ '--cf-delay': `${index * 90}ms` } as CSSProperties}
                >
                  <span className="cf-step-dot" aria-hidden="true">{item.step}</span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="cf-section">
          <div className="cf-container cf-team">
            <figure className="cf-team-media" data-reveal data-tilt data-tilt-strength="2">
              <img
                src="/images/stealth-agents-team-bacolod.jpg"
                alt="Official Stealth Agents team together in Bacolod, Philippines"
                loading="lazy"
              />
              <figcaption>StealthAgents team · Bacolod City, Philippines</figcaption>
            </figure>
            <div className="cf-team-copy" data-reveal style={{ '--cf-delay': '90ms' } as CSSProperties}>
              <p className="cf-eyebrow">The managed team behind the service</p>
              <h2>Recruiting, employment, and support in one place.</h2>
              <p>
                StealthAgents recruits and supports the Philippines-based professionals
                delivered through Legal Services Offshore. Your firm keeps legal
                judgment, access approval, and final review.
              </p>
              <p>
                The role works inside your practice tools, follows written preparation
                rules, and sends exceptions to the named owner instead of improvising.
              </p>
              <a className="cf-link" href="/about">Meet the operating model ↗</a>
            </div>
          </div>
        </section>

        <ReviewRail />

        <section className="cf-section">
          <div className="cf-container">
            <SectionHead
              eyebrow="Read before you hire"
              title={<>Useful notes for the planning call.</>}
              copy="Practical guidance for scoping the queue, protecting access, and reviewing the first handoffs."
            />
            <div className="cf-posts">
              {latestPosts.map((post, index) => (
                <a
                  className="cf-post"
                  href={`/blog/${post.slug}`}
                  key={post.slug}
                  data-reveal
                  style={{ '--cf-delay': `${index * 70}ms` } as CSSProperties}
                >
                  <img src={getCardImage(index)} alt="" loading="lazy" />
                  <div className="cf-post-body">
                    <span className="cf-post-meta">{post.minutes} minute guide</span>
                    <h3>{post.title.replace('Legal Services Offshore: ', '')}</h3>
                    <p>{post.excerpt}</p>
                    <span className="cf-link">Read the guide ↗</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="cf-cta">
          <div className="cf-container cf-cta-inner">
            <div data-reveal>
              <p className="cf-eyebrow cf-eyebrow--light">Bring the messy task list</p>
              <h2>We will help turn it into one clear legal support role.</h2>
              <p>
                Share the work, tools, hours, and review needs. The next step is a
                practical staffing scope, not a public rate card.
              </p>
            </div>
            <div className="cf-cta-actions" data-reveal style={{ '--cf-delay': '100ms' } as CSSProperties}>
              <a className="cf-btn" href="/contact-us" id="cta-page-action-4">Request a support plan</a>
              <a className="cf-link" href="/blog">Browse the planning guides</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

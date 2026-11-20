import type { CSSProperties } from 'react';
import { Footer, Header, JsonLd, CTA, PageHero, SectionHead } from '../components';
import { fleetServices } from '../fleet-data';
import { site } from '../data';

export const metadata = {
  title: 'Offshore Legal Support Services',
  description: 'Explore supervised Philippines-based legal intake, document, matter, research, billing, and quality support for law firms.',
  alternates: { canonical: '/services' },
};

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

export default function Services() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: fleetServices.map((service, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: `https://${site.domain}/services/${service.slug}`,
      name: service.title,
    })),
  };

  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1} className="cf-page services-index">
        <JsonLd data={schema} />
        <PageHero
          eyebrow="Offshore legal operations services"
          title={<>Preparation capacity with the review line left intact.</>}
          lead="Build a Philippines-based support role around the repeatable work that consumes lawyer and operations time. Each service begins with a defined queue, limited access, visible source records, and a client-side decision owner."
          image="/images/editorial/services-planning.webp"
          imageAlt="Legal operations team planning a supervised workflow together"
          imageCaption="Useful delegation makes ownership, exceptions, and approval visible."
          breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Services' }]}
          actions={<a className="cf-btn" href="/contact-us">Map a support role ↗</a>}
        />

        <section className="cf-section">
          <div className="cf-container">
            <SectionHead
              eyebrow="Choose the queue first"
              title={<>Eleven legal support lanes.</>}
              copy="Start with work that has consistent inputs, a repeatable preparation method, and a clear definition of done. A named queue is easier to train and easier to review."
            />
            <div className="cf-lanes">
              {fleetServices.map((service, index) => (
                <a
                  className="cf-lane"
                  href={`/services/${service.slug}`}
                  key={service.slug}
                  data-tilt
                  data-tilt-strength="3"
                  data-reveal
                  style={{ '--cf-delay': `${(index % 2) * 60}ms` } as CSSProperties}
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
                    <span>Review scope and controls</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="cf-section cf-section--sand">
          <div className="cf-container">
            <SectionHead
              eyebrow="A good first service"
              title={<>It repeats, it is traceable, and it stops at a review point.</>}
              copy="A broad request for legal help is difficult to train and difficult to review. A named intake, document, records, or billing queue is easier to control."
            />
            <div className="cf-ledger">
              <div><strong>Traceable inputs</strong><span>The worker can identify the source file, request, matter, owner, and due date.</span></div>
              <div><strong>Observable output</strong><span>The reviewer can compare the result with a checklist or accepted example.</span></div>
              <div><strong>Safe escalation</strong><span>The worker knows when to stop, what facts to preserve, and who must decide.</span></div>
              <div><strong>Named reviewer</strong><span>One attorney or firm manager owns exceptions and final approval.</span></div>
            </div>
          </div>
        </section>

        <section className="cf-section">
          <div className="cf-container">
            <SectionHead
              eyebrow="From task inventory to first live batch"
              title={<>A launch sequence your firm can inspect.</>}
              copy="Each stage leaves enough evidence for the next owner to understand what happened and what remains unresolved."
            />
            <div className="cf-process">
              {[
                ['Inventory', 'List the inputs, volume, current owner, systems, peak periods, and common exceptions.'],
                ['Boundary', 'Separate preparation from legal advice, substantive approval, privilege decisions, and client commitments.'],
                ['Example', 'Choose one accepted output, remove unnecessary sensitive material, and mark the required checks.'],
                ['Review', 'Score accuracy, source traceability, escalation quality, access discipline, and turnaround.'],
              ].map(([title, body], index) => (
                <article className="cf-step" key={title} data-reveal style={{ '--cf-delay': `${index * 80}ms` } as CSSProperties}>
                  <span className="cf-step-dot" aria-hidden="true">{`0${index + 1}`}</span>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="cf-section cf-section--tight">
          <div className="cf-container">
            <div className="cf-feature" data-reveal>
              <div className="cf-feature-copy">
                <p className="cf-eyebrow">Not sure which lane fits?</p>
                <h2>Start with the queue, not the job title.</h2>
                <p>
                  Describe one recurring workflow and the result you need. We will help
                  you decide whether it belongs with intake, matter administration,
                  document preparation, billing, or another legal operations lane.
                </p>
                <a className="cf-btn cf-btn--ink" href="/contact-us">Talk through the work ↗</a>
              </div>
              <div className="cf-feature-media">
                <img src="/images/editorial/home-legal-operations-handoff-v2.webp" alt="Legal operations handoff prepared for attorney review" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}

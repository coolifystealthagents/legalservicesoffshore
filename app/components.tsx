import type { CSSProperties, ReactNode } from 'react';
import { SiteHeader } from './site-header';
import { fleetServices } from './fleet-data';
import { stealthReviews } from './reviews-data';
import { site } from './data';

export function Header() {
  return <SiteHeader />;
}

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer data-site-footer="true" className="cf-footer">
      <div className="cf-footer-inner cf-container">
        <div className="cf-footer-top">
          <div className="cf-footer-brand">
            <a className="cf-brand" href="/" aria-label="Legal Services Offshore home">
              <img src="/logo.svg" alt="" width="40" height="40" />
              <span className="cf-brand-text">
                <span className="cf-brand-name">Legal Services Offshore</span>
                <span className="cf-brand-sub">Powered by StealthAgents</span>
              </span>
            </a>
            <p>
              Philippines-based legal operations support built around narrow scopes,
              documented handoffs, and attorney review that stays with your firm.
            </p>
            <p className="cf-footer-note">
              Legal work remains subject to attorney supervision and applicable
              professional rules. We recruit and employ talent only in the Philippines.
            </p>
          </div>
          <div>
            <h3>Services</h3>
            <div className="cf-footer-links">
              {fleetServices.slice(0, 7).map((service) => (
                <a href={`/services/${service.slug}`} key={service.slug}>{service.title}</a>
              ))}
            </div>
          </div>
          <div>
            <h3>Explore</h3>
            <div data-footer-menu="true" className="cf-footer-links">
              <a href="/services">All services</a>
              <a href="/about">About</a>
              <a href="/blog">Blog</a>
              <a href="/research">Research</a>
              <a href="/contact-us">Contact Us</a>
              <a href="/privacy">Privacy</a>
              <a href="/terms">Terms</a>
              <a href="/cancellation-policy">Cancellation</a>
            </div>
          </div>
        </div>

        <div className="cf-footer-parent">
          <a className="cf-footer-parent-logo" href="https://stealthagents.com/" target="_blank" rel="noopener noreferrer" aria-label="StealthAgents parent company">
            <img src="/images/stealth-agents-logo-black.png" alt="StealthAgents" />
          </a>
          <div>
            <h3>Parent company</h3>
            <p>
              StealthAgents recruits, employs, and supports the Philippines-based
              professionals who deliver this work. Legal Services Offshore is a
              StealthAgents subsidiary.
            </p>
            <a className="cf-footer-parent-link" href="https://stealthagents.com/" target="_blank" rel="noopener noreferrer">Powered by StealthAgents ↗</a>
          </div>
        </div>

        <div className="cf-footer-bottom">
          <span>© {year} Legal Services Offshore.</span>
          <span>{site.domain}</span>
        </div>
      </div>
    </footer>
  );
}

export function PageHero({
  eyebrow,
  title,
  lead,
  image,
  imageAlt,
  imageCaption,
  breadcrumb,
  actions,
  compact = false,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  lead: string;
  image?: string;
  imageAlt?: string;
  imageCaption?: string;
  breadcrumb?: { label: string; href?: string }[];
  actions?: ReactNode;
  compact?: boolean;
  children?: ReactNode;
}) {
  return (
    <section className={`cf-page-hero${compact ? ' cf-page-hero--compact' : ''}`}>
      <div className="cf-container cf-page-grid">
        <div className="cf-page-copy">
          {breadcrumb?.length ? (
            <nav className="cf-breadcrumb" aria-label="Breadcrumb">
              {breadcrumb.map((crumb, index) => (
                <span key={`${crumb.label}-${index}`}>
                  {crumb.href ? <a href={crumb.href}>{crumb.label}</a> : crumb.label}
                  {index < breadcrumb.length - 1 ? <span aria-hidden="true"> / </span> : null}
                </span>
              ))}
            </nav>
          ) : null}
          <p className="cf-eyebrow cf-eyebrow--light">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="cf-hero-lead">{lead}</p>
          {actions ? <div className="cf-actions">{actions}</div> : null}
          {children}
        </div>
        {image ? (
          <figure className="cf-page-media" data-tilt data-tilt-strength="3">
            <img src={image} alt={imageAlt || ''} />
            {imageCaption ? <figcaption>{imageCaption}</figcaption> : null}
          </figure>
        ) : (
          <div className="cf-page-orbit" aria-hidden="true">
            <div className="cf-page-seal">
              <span>Legal operations<br />Philippines<br />review gate</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export function SectionHead({
  eyebrow,
  title,
  copy,
  light = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  copy?: string;
  light?: boolean;
}) {
  return (
    <div className={`cf-head${light ? ' cf-head--light' : ''}`} data-reveal>
      <div>
        {eyebrow ? <p className={`cf-eyebrow${light ? ' cf-eyebrow--light' : ''}`}>{eyebrow}</p> : null}
        <h2>{title}</h2>
      </div>
      {copy ? <p>{copy}</p> : null}
    </div>
  );
}

export function Marquee({ items }: { items: readonly string[] }) {
  return (
    <div className="cf-marquee" aria-hidden="true">
      <div className="cf-marquee-track">
        {[0, 1].map((group) => (
          <div className="cf-marquee-group" key={group}>
            {items.map((item, index) => <span key={`${group}-${index}`}>{item}</span>)}
          </div>
        ))}
      </div>
    </div>
  );
}

export function ReviewRail() {
  return (
    <section className="cf-reviews" aria-labelledby="cf-review-heading">
      <div className="cf-container">
        <div className="cf-review-head">
          <h2 id="cf-review-heading">What clients say about the team</h2>
          <span>Verified source</span>
        </div>
        <div className="cf-review-viewport">
          <div className="cf-review-track">
            {[0, 1].map((group) => (
              <div className="cf-review-group" key={group} style={{ display: 'flex', gap: 14 }} aria-hidden={group === 1 ? true : undefined}>
                {stealthReviews.map((review) => (
                  <article className="cf-review-card" key={`${group}-${review.name}`} aria-hidden={group === 1 ? true : undefined}>
                    <div className="cf-review-stars" aria-label="5 out of 5 stars">★★★★★</div>
                    <h3>{review.headline}</h3>
                    <blockquote>“{review.body}”</blockquote>
                    <p>{review.name}<span>{review.detail}</span></p>
                  </article>
                ))}
              </div>
            ))}
          </div>
        </div>
        <p className="cf-review-note">
          Clearly labeled client feedback from the StealthAgents network, reproduced from the{' '}
          <a href="https://stealthagents.com/" target="_blank" rel="noopener noreferrer">official StealthAgents website</a>.
        </p>
      </div>
    </section>
  );
}

export function CTA() {
  return (
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
          <a className="cf-btn" href="/contact-us" id="cta-global-final-contact">Request a support plan ↗</a>
          <a className="cf-link" href="/services">Review the legal support lanes</a>
        </div>
      </div>
    </section>
  );
}

export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }} />;
}

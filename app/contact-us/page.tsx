import type { Metadata } from 'next';
import { Header, Footer } from '../components';
import StandardContactForm from './StandardContactForm';
import { ReviewMarquee } from '../stealth-reviews';
import './contact.css';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Scope a supervised offshore legal support role with clear work, access, and attorney-review boundaries.',
  alternates: { canonical: '/contact-us' },
};

export default function ContactUsPage(){return <>
  <Header/>
  <main id="main-content" tabIndex={-1} className="legal-contact">
    <section className="contact-fold"><div className="container contact-fold-grid">
      <div className="contact-story"><p className="contact-kicker">A controlled first support lane</p><h1>Give legal work the preparation time it needs.</h1><p className="contact-lead">Tell us which recurring queue is slowing your firm down. We will help define a Philippines-based role with narrow access, written handoffs, and a named client-side reviewer.</p><ul className="scope-labels"><li>Free role consultation</li><li>Task and access mapping</li><li>Attorney review stays in place</li></ul><ReviewMarquee/></div>
      <StandardContactForm endpoint="/api/contact" encoding="form"/>
    </div></section>
    <section className="parent-proof" aria-labelledby="parent-proof-title"><div className="container parent-proof-grid"><div className="team-photo"><img src="/images/stealth-agents-team.webp" width="1600" height="1067" alt="The official StealthAgents operations team in Bacolod" loading="eager"/><div className="official-plate"><img src="/images/stealth-agents-logo-black.png" width="149" height="50" alt="StealthAgents"/><strong>Official team, Bacolod</strong></div></div><div><p className="contact-kicker">The managed team behind the service</p><h2 id="parent-proof-title">Powered by StealthAgents</h2><p>StealthAgents recruits and supports the Philippines-based professionals delivered through Legal Services Offshore. Its operations team helps with candidate matching, attendance support, coaching, and continuity while your firm remains responsible for legal judgment, client advice, access approval, and final work review.</p><p>This managed-service structure gives the support role an operating layer without blurring the professional boundaries that belong to your firm.</p><a className="text-action" href="https://stealthagents.com/" target="_blank" rel="noopener noreferrer">Learn about StealthAgents</a></div></div></section>
    <section className="contact-depth"><div className="container contact-depth-grid"><article><h2>Bring one queue</h2><p>A useful consultation starts with one repeatable queue, such as new-client intake, document preparation, matter-file administration, billing follow-up, or reporting. Bring the current owner, systems, working hours, and one example of a correct output.</p></article><article><h2>Define the stop rule</h2><p>We will identify the point where preparation must stop and a lawyer or approved firm manager must review. Legal advice, conflict decisions, deadline calculation, filings, settlement choices, and release of sensitive material stay with the firm.</p></article><article><h2>Plan a measurable launch</h2><p>The first-week plan can include a redacted practice item, a small live batch, named accounts, daily review, and a scorecard for accuracy, escalation, access discipline, and turnaround.</p></article></div></section>
    <section className="contact-final"><div className="container"><h2>What happens after you submit?</h2><p>You will continue to the meeting calendar, choose a time that works, and receive a clear consultation confirmation. No scheduler is embedded on this page, so the role information reaches the team before the call.</p></div></section>
  </main><Footer/>
</>}

import type { Metadata } from "next";
import { Header, Footer } from "../components";
import StandardContactForm from "./StandardContactForm";
import "./contact.css";
import "./image-fix.css";

export const metadata: Metadata = {
  title: "Contact Us | Offshore Legal Support",
  description: "Book a free consultation to scope accountable offshore legal support for your firm.",
  alternates: { canonical: "/contact-us" },
  robots: { index: true, follow: true },
};
const services = [
  ["Legal intake", "Organize prospective-client details, conflicts inputs, and follow-up queues without giving legal advice."],
  ["Matter administration", "Keep matter records, calendars, status trackers, and document requests moving under attorney direction."],
  ["Document support", "Prepare templates, proof files, indexes, and review-ready packets with clear source controls."],
  ["Billing operations", "Support time-entry follow-up, invoice preparation, collections queues, and reporting for firm review."],
];
const quotes = [
  ["The intake workflow gave our attorneys a clean review point instead of another inbox.", "Managing partner, boutique firm"],
  ["We finally had visible ownership for matter updates and recurring administrative work.", "Legal operations director"],
  ["Clear access boundaries and attorney review made the handoff feel controlled from day one.", "Practice administrator"],
];

export default function ContactUsPage(){return <>
  <Header/>
  <main className="trusted-contact tc-legal">
    <section className="tc-hero"><div className="container tc-hero-grid">
      <div className="tc-copy"><p className="tc-kicker">Support built around attorney review</p><h1>Give your legal team more room for legal work.</h1><p className="tc-lead">Tell us where intake, matter administration, documents, billing, or reporting slows the firm down. We’ll help scope an offshore support role with explicit boundaries and review points.</p><div className="tc-proof-row"><span>35+ industries</span><span>Legal operations focus</span><span>Free consultation</span></div><a className="tc-text-link" href="#legal-support">Explore the support plan →</a></div>
      <StandardContactForm endpoint="/api/contact" encoding="form"/>
    </div></section>
    <section className="tc-strip"><div className="container tc-strip-grid"><strong>A practical consultation</strong><span>✓ Task inventory</span><span>✓ Access boundaries</span><span>✓ Attorney review</span><span>✓ Launch plan</span></div></section>
    <section className="tc-section" id="legal-support"><div className="container"><div className="tc-section-head"><div><p className="tc-kicker">Where support fits</p><h2>Delegate the process, preserve legal judgment.</h2></div><p>The best offshore legal support roles have repeatable inputs, documented outputs, and a licensed professional who retains every legal decision.</p></div><div className="tc-card-grid">{services.map(([title,body],i)=><article key={title}><span>0{i+1}</span><h3>{title}</h3><p>{body}</p></article>)}</div><div className="tc-inline-cta"><strong>Know which queue needs help?</strong><a href="#contactPageForm">Discuss it with our team</a></div></div></section>
    <section className="tc-testimonials"><div className="container"><p className="tc-kicker">What firms value</p><h2>Support that respects the review line.</h2><div className="tc-quote-grid">{quotes.map(([quote,by])=><figure key={quote}><div aria-label="5 out of 5 stars">★★★★★</div><blockquote>“{quote}”</blockquote><figcaption>{by}</figcaption></figure>)}</div></div></section>
    <section className="tc-section"><div className="container tc-check-grid"><div><p className="tc-kicker">Capability checklist</p><h2>Controls come before credentials.</h2><p>We’ll map the operating conditions that help a legal support role stay useful, secure, and reviewable.</p></div><ul><li>Approved task list and prohibited activities</li><li>Matter-system and document-access boundaries</li><li>Attorney ownership and review cadence</li><li>Conflict, confidentiality, and escalation steps</li><li>Templates, naming rules, and source evidence</li><li>Service levels and first-month scorecard</li></ul></div></section>
    <section className="tc-why"><div className="container tc-why-grid"><img src="/sep3-heroes/deposition-errata-return-tracker.png" width="1536" height="1024" alt="Organized legal operations tracker prepared for attorney review"/><div><p className="tc-kicker">Why structure matters</p><h2>Every handoff should leave a review trail.</h2><p>We shape roles around documented inputs, named owners, secure access, and unmistakable escalation points—so administrative capacity grows without blurring professional responsibility.</p><a href="#contactPageForm">Scope my legal support role →</a></div></div></section>
    <section className="tc-about"><div className="container tc-about-grid"><div><p className="tc-kicker">Powered by a proven team</p><h2>About Stealth Agents</h2><p>Stealth Agents works with over 35+ different industries. We're featured on Forbes as the top rated virtual assistant company.</p></div><a href="https://stealthagents.com" rel="noopener noreferrer">Powered by Stealth Agents</a></div></section>
    <section className="container tc-final"><div><p className="tc-kicker">A better operating brief</p><h2>Build legal support your attorneys can confidently review.</h2><p>Share the queue, systems, and boundaries. We’ll help define the role and next steps.</p></div><a href="#contactPageForm">Book a free consultation</a></section>
  </main><Footer/>
</>}

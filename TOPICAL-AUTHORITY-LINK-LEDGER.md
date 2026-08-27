# Legal Services Offshore topical-authority link ledger

## Scope

This planning record covers existing Philippines-based legal operations service pages and existing research routes. It is a source-only planning artifact; it does not add a public link or claim that a change is live.

Legal Services Offshore helps law firms and legal teams set up supervised administrative support. The firm keeps legal advice, professional judgment, client commitments, filing decisions, and other firm-controlled decisions.

## Confirmed service pillars

| Service route | Reader need | Boundary to retain |
| --- | --- | --- |
| `/services/legal-intake-support` | Organize approved intake facts and route open questions. | The firm decides conflicts, acceptance, and advice. |
| `/services/litigation-document-review` | Prepare reviewable litigation document work. | Counsel decides relevance, privilege, and final use. |
| `/services/contract-administration` | Track approved contract records and handoffs. | Counsel interprets terms and obligations. |
| `/services/legal-research-support` | Prepare sources and citations for attorney review. | Attorneys analyze authority and give advice. |
| `/services/case-file-management` | Maintain approved case-file records and access boundaries. | The firm controls legal significance and access decisions. |
| `/services/e-discovery-support` | Organize discovery materials and evidence records. | Counsel controls scope, privilege, and production. |
| `/services/immigration-case-administration` | Track administrative case work and approved follow-up. | Counsel decides eligibility, strategy, and advice. |
| `/services/real-estate-legal-support` | Prepare real-estate legal operations work for review. | Counsel controls legal interpretation and transaction decisions. |
| `/services/corporate-records-support` | Maintain approved corporate records and reminders. | Counsel and the client control governance decisions. |
| `/services/billing-and-time-entry-support` | Prepare time-entry and billing records for review. | The firm decides billing judgment, invoice release, and client communication. |

## Route-local handoff inventory

| Existing source route | Existing destination | Route-local result | Decision |
| --- | --- | --- | --- |
| `/research/law-firm-billing-source-reconciliation` | `/services/billing-and-time-entry-support` | Present through the shared research handoff record. | Delivered; do not duplicate. |
| `/research/legal-research-administration-boundaries` | `/services/legal-research-support` | Absent from the generated route-local main region on the 2026-08-27 production build. | Next candidate. |

## Next bounded candidate

- **Source:** `/research/legal-research-administration-boundaries`
- **Destination:** `/services/legal-research-support`
- **Reader question:** “How can I organize legal research sources and citations before an attorney decides what the authority means?”
- **Why this route fits:** The research page already explains source gathering and citation organization while preserving an attorney-owned analysis boundary. The service page offers the matching Philippines-based support lane.
- **Implementation boundary:** Store the handoff in the research route data model, render it after the article body, preserve the attorney-review limitation, update the route’s real modified value, and prove the final `href` inside the generated `<main>`. Do not add the link if the source record cannot provide a route-specific modified date and visible/schema date parity.

## Verification record

Baseline checked on 2026-08-27 from a clean, synchronized `main` at `de68467ac41b3c57c0c30ab15dcaa4062a759ea0`.

- `npm run validate:routines` passed. The routine manifest identifies GitHub push as the terminal delivery boundary and excludes Coolify and GSC.
- `npm run build` passed and generated 440 static pages.
- Generated source H1: `Where legal research administration should stop`.
- Generated source canonical: `https://legalservicesoffshore.com/research/legal-research-administration-boundaries`.
- Generated source `<main>` contains no `/services/legal-research-support` href.
- Generated destination H1: `Legal Research Support`.
- Generated destination canonical: `https://legalservicesoffshore.com/services/legal-research-support`.
- Both canonical routes are present in the generated sitemap. This repository emits no sitemap `lastmod`; that is its current sitemap contract.

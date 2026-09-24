# Legal Services Offshore topical-authority link ledger

## 2026-09-24 Blog publishing batch

Twelve new operational guides strengthen the existing intake, litigation review, e-discovery, immigration, contract, corporate records, case file, real estate, billing, and reporting/QA service pillars. Each route links to its matching on-site service through the shared article handoff and is recorded in `.paperclip/daily-content/2026-09-24/blog.json`. Live verification remains pending until production deployment completes.

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
| `/research/legal-research-administration-boundaries` | `/services/legal-research-support` | Present once in the generated route-local main region through the existing research handoff record. | Delivered; do not duplicate. |
| `/research/legal-document-production-source-map-research` | `/services/e-discovery-support` | Present once in the generated route-local main region through the existing research handoff record. | Delivered; do not duplicate. |
| `/research/offshore-legal-support-source-to-field-reproducibility-study-campaign-assurance` | `/services/case-file-management` | Present once in the locally generated route-local main region through the typed research handoff record. | Delivered locally; do not duplicate. |

## Execution status

All listed research-to-service paths are already present in their generated route-local pages. This ledger has no ready link candidate until a separate, fresh service-and-route audit identifies an existing source page with an absent, relevant destination.

## 2026-09-16 source delivery status

- Rendered source: 52f7ff64b74ddca7aa90477cbbcb4af4bd12e948 added the source-to-field reproducibility handoff to Case File Management. The local production artifact has the expected H1, canonical, one route-local href, Article dates `2026-09-14` and `2026-09-16`, and both sitemap locations; this sitemap intentionally has no `lastmod`.
- Both cache-busted canonical and www route and sitemap probes returned HTTP 403. This is `deployment_pending_public_verification / public_unavailable`, not rollout proof.
- Preserve rendered-source commit 52f7ff64b74ddca7aa90477cbbcb4af4bd12e948. A later public recheck must test the exact route-local marker and Case File Management href; it must not add a second CTA.

## Verification record

Reconciled on 2026-09-04 from clean, synchronized `main` at `cc0b24ffeef25b689c1810f54bbb54e55ac90e0e`.

- `npm run validate:routines` passed. The routine manifest identifies GitHub push as the terminal delivery boundary and excludes Coolify and GSC.
- `npm run build` passed and generated 510 static pages.
- Generated source H1: `Where legal research administration should stop`.
- Generated source canonical: `https://legalservicesoffshore.com/research/legal-research-administration-boundaries`.
- Generated source `<main>` contains exactly one `/services/legal-research-support` href, with the existing `Plan legal research support` handoff.
- Generated destination H1: `Legal Research Support`.
- Generated destination canonical: `https://legalservicesoffshore.com/services/legal-research-support`.
- Both canonical routes are present in the generated sitemap. This repository emits no sitemap `lastmod`; that is its current sitemap contract.

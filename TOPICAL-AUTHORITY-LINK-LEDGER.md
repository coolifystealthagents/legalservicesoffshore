# Legal Services Offshore topical-authority link ledger

## 2026-09-24 Blog publishing batch

Twelve new operational guides strengthen the existing intake, litigation review, e-discovery, immigration, contract, corporate records, case file, real estate, billing, and reporting/QA service pillars. Each route links to its matching on-site service through the shared article handoff and is recorded in `.paperclip/daily-content/2026-09-24/blog.json`. Source commit `4a14d3e68cf20dded795eeb3b1fd410ee0771b00` is on remote `main`; live verification is blocked because the Coolify API returned HTTP 401 and every bounded public route check through `2026-09-24T14:26:56Z` returned HTTP 404.

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

## 2026-09-27 generated-route reconciliation

Fresh production artifacts confirm that all ten mapped source and service routes exist, have their expected H1 and canonical URL, and appear in the sitemap. The sitemap still has no `lastmod` by repository contract.

| Source route | Service route | Route-local href count | Status |
| --- | --- | ---: | --- |
| `/research/legal-research-administration-boundaries` | `/services/legal-research-support` | 1 | Delivered; do not duplicate. |
| `/research/legal-document-production-source-map-research` | `/services/e-discovery-support` | 1 | Delivered; do not duplicate. |
| `/research/law-firm-billing-source-reconciliation` | `/services/billing-and-time-entry-support` | 1 | Delivered; do not duplicate. |
| `/research/law-firm-intake-fact-pattern-normalization-study` | `/services/legal-intake-support` | 1 | Delivered; do not duplicate. |
| `/research/legal-document-production-source-map-research` | `/services/litigation-document-review` | 0 | Verified absent; retain the existing E-Discovery handoff. |
| `/research/law-firm-contract-renewal-obligation-evidence` | `/services/contract-administration` | 1 | Delivered; do not duplicate. |
| `/research/law-firm-calendar-event-provenance-study` | `/services/case-file-management` | 0 | Verified absent. |
| `/research/immigration-case-administration-controls` | `/services/immigration-case-administration` | 0 | Verified absent. |
| `/research/legal-support-matter-status-evidence` | `/services/real-estate-legal-support` | 0 | Verified absent. |
| `/research/legal-support-entity-relationship-evidence` | `/services/corporate-records-support` | 0 | Verified absent. |

The intake fact-pattern and contract-renewal sources now have one typed handoff each. Their records retain firm ownership of conflict, urgency, acceptance, advice, notice, obligations, and contract interpretation. The remaining verified-absent rows require separate reviews.

## 2026-10-05 generated-route reconciliation

A fresh production build verified every listed source and service artifact. All ten have one H1, one self-canonical URL, and a sitemap entry. The five delivered pairs each have one matching href inside the source route's `<main>`; the five remaining candidates have zero. The sitemap intentionally has no `lastmod`.

This source-only correction changes no rendered route. Deployment and public proof are not applicable. Do not add a second CTA to either delivered row.

## 2026-10-06 research service-link reconciliation

The October 5 research batch already carries typed, route-local handoffs to existing Philippines-only legal operations service pages. This ledger records those rendered pairs so a later operator does not add a second CTA. Each handoff keeps legal advice, legal judgment, filing, status, and client commitments with the firm or qualified counsel.

| Existing source route | Existing destination | Route-local result | Decision |
| --- | --- | --- | --- |
| `/research/deposition-exhibit-provenance-offshore-research` | `/services/litigation-document-review` | Present through the typed research service link. | Delivered; do not duplicate. |
| `/research/bankruptcy-claim-packet-indexing-offshore-study` | `/services/case-file-management` | Present through the typed research service link. | Delivered; do not duplicate. |
| `/research/uscis-receipt-notice-reconciliation-offshore-research` | `/services/immigration-case-administration` | Present through the typed research service link. | Delivered; do not duplicate. |
| `/research/trademark-specimen-evidence-inventory-offshore-study` | `/services/legal-research-support` | Present through the typed research service link. | Delivered; do not duplicate. |
| `/research/service-of-process-proof-record-offshore-research` | `/services/case-file-management` | Present through the typed research service link. | Delivered; do not duplicate. |

This is a source-only reconciliation. It changes no rendered route, schema, sitemap, or publication date. Deployment and public proof are not applicable to this record.

## 2026-10-01 intake-handoff source delivery status

- Rendered source: `9e8f45f9ad125792ca5b2a55b78b0c798cf17de9` adds one typed `Plan legal intake support` handoff. Local production output has the expected H1, apex canonical, route-local service href count of one, the ownership-boundary marker, Article modified date `2026-10-01`, and the canonical sitemap location. This sitemap intentionally emits no `lastmod`.
- The repository routine makes GitHub push its terminal deployment boundary and prohibits direct Coolify use. No deployment handle was available and no deployment was triggered.
- Cache-busted apex and www checks returned HTML `200` with the expected H1 and apex canonical, but neither contained the new handoff label, boundary marker, or modified date. The canonical public sitemap contains the route but no `lastmod`. This is `deployment_pending_public_verification / public_stale`, not rollout proof.
- Preserve rendered-source commit `9e8f45f9ad125792ca5b2a55b78b0c798cf17de9`. A later recheck must inspect this exact route-local handoff; it must not add a second CTA.

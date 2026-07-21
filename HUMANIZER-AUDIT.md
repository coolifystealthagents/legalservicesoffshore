# Humanizer audit

Date: 2026-07-21

## Scope

Reviewed the site's public marketing and editorial copy while preserving route slugs, legal-service boundaries, metadata intent, schema facts, and the request flow.

## Files reviewed

- `app/page.tsx`
- `app/data.ts`
- `app/components.tsx`
- `app/layout.tsx`
- `app/services/[slug]/page.tsx`
- `app/blog/page.tsx`
- `app/blog/[slug]/page.tsx`
- `app/contact/page.tsx`
- `app/thank-you/page.tsx`

## What changed

- Replaced four repeated, generic guide pages with route-specific legal support advice.
- Fixed an awkward guide title and rewrote vague excerpts around access limits, attorney review, provider questions, and first-week checks.
- Removed an unused savings claim and generic staffing copy that mentioned unrelated work such as bookkeeping, development, and marketing.
- Rewrote the contact page around law-firm tasks, practice tools, client data, review owners, and attorney decisions.
- Replaced the placeholder thank-you message with a useful next step.
- Tightened shared CTA and process copy. Removed a brittle runtime text replacement from the homepage.
- Corrected two homepage service notes that were attached to the wrong legal support roles.
- Shortened one hero task label, raised the floating role card away from the section edge, and darkened helper text after visual QA.
- Removed the lone em dash and a curly apostrophe from edited marketing copy.

## Final anti-AI pass

The remaining numbered steps and checklists could look formulaic without context, but they are working instructions rather than decorative lists. Each item now names a legal-support task, control, or buyer decision. The copy does not use inflated claims, vague authority, chatbot language, generic positive conclusions, or invented proof.

## Exclusions

Privacy, terms, cancellation, and cancellation-policy pages were not edited. No testimonials, first-person stories, performance statistics, credentials, or provider claims were added.

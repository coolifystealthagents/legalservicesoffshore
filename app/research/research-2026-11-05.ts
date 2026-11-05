export const november05ResearchPosts = [
 {
  "slug": "how-often-do-legal-matter-records-lack-a-named-reviewer",
  "title": "How often do legal matter records lack a named reviewer?",
  "excerpt": "A bounded method for measuring whether legal matter records name the person accountable for the next decision.",
  "published": "2026-11-05",
  "sourceDate": "2026-11-05",
  "updated": "2026-11-05",
  "cluster": "legal-support-governance",
  "headlineStat": "A named reviewer is a control, not a formality",
  "sections": [
   {
    "heading": "Question and scope",
    "body": [
     "This study asks how often a legal matter record names the person accountable for the next decision at a defined review point. It treats the named reviewer as an observable field, not as proof that the review happened. The scope is one firm, department, or matter type during a fixed period. The result describes documentary completeness in that setting and should not be presented as an industry rate.",
     "The unit is one matter record at the review gate. A record may name a preparer and still lack a decision owner, so the study records both roles separately. It also distinguishes a named individual from a team mailbox or a generic queue. A team name may be appropriate for routing, but it does not show who accepted the risk or approved the next step."
    ]
   },
   {
    "heading": "Method and evidence standard",
    "body": [
     "Draw a frozen list of matters that reached the review gate during the window. Sample from that list using a documented method, and include matters that were corrected after the first review. Exclude matters that were opened in error, and record the reason. For each record, capture the matter identifier, the stage, the named preparer, the named reviewer, the source of the assignment, and the date.",
     "Define what counts as a named reviewer before opening any record. A person's name or a unique role identifier may count if the firm's directory maps it to one accountable person. A shared inbox, a group label, or an empty field does not. Two reviewers should calibrate on a small set and resolve disagreements before the main review. Record the initial rating and the adjudication so the result is reproducible."
    ]
   },
   {
    "heading": "Measures, findings, and interpretation",
    "body": [
     "Report the number of records reviewed and the share with a named reviewer, a team-only owner, or no owner. Show the result by matter type and stage. Include the age of the record at review and whether the reviewer changed during the matter. A single percentage can hide a pattern in which urgent matters are more likely to have a clear owner, or the reverse.",
     "Interpret a missing name as a routing or design signal, not as evidence about an individual's diligence. A cluster in one intake path may mean the template never asked for the field. A cluster across teams may mean the assignment rule is unclear. Inspect the records behind the largest gaps before proposing a cause. The study cannot show whether the underlying legal work was correct, and it should not be used to rank individuals."
    ]
   },
   {
    "heading": "Limitations and practical next step",
    "body": [
     "The review sees the written record and cannot observe the conversations that produced it. A record may name a reviewer who did not actually review, and a record may omit a name even when the review was thorough. The study also cannot determine whether the firm's review standard satisfies a professional or contractual obligation. Local law, client instructions, and matter risk may require a stricter control.",
     "Choose one change based on the most common gap. It might be a required reviewer field, a directory-backed role list, or a short check before a matter advances. Name the owner, the effective date, and the measure that will show whether the change helped. Recheck the same measure with the next cohort and keep the decision log. A bounded pilot is more useful than a broad claim that every record is now controlled."
    ]
   }
  ],
  "sources": [
   {
    "name": "American Bar Association — Model Rules of Professional Conduct",
    "url": "https://www.americanbar.org/groups/professional_responsibility/publications/model_rules_of_professional_conduct/"
   },
   {
    "name": "GAO — Standards for Internal Control",
    "url": "https://www.gao.gov/products/gao-14-704g"
   },
   {
    "name": "NIST Cybersecurity Framework 2.0",
    "url": "https://www.nist.gov/cyberframework"
   },
   {
    "name": "Law Society — Outsourcing guidance",
    "url": "https://www.lawsociety.org.uk/topics/business-management/outsourcing"
   }
  ],
  "relatedSlugs": [
   "measuring-redaction-quality-before-a-production-release",
   "can-a-contract-abstraction-be-reproduced-from-its-source-clauses",
   "where-does-delay-accumulate-in-a-legal-intake-queue"
  ],
  "thumbnail": "/thumbnails/november-05/legalservicesoffshore-how-often-do-legal-matter-records-lack-a-named-reviewer.png"
 },
 {
  "slug": "measuring-redaction-quality-before-a-production-release",
  "title": "Measuring redaction quality before a production release",
  "excerpt": "A bounded method for checking redaction coverage, consistency, and reviewer sign-off before documents leave the firm.",
  "published": "2026-11-05",
  "sourceDate": "2026-11-05",
  "updated": "2026-11-05",
  "cluster": "legal-support-quality",
  "headlineStat": "Redaction quality needs a repeatable check",
  "sections": [
   {
    "heading": "Question and scope",
    "body": [
     "This study asks whether a proposed production set meets the firm's written redaction standard before release. It examines coverage, consistency, metadata handling, and reviewer sign-off. The scope is a defined document set, matter, and production date. The result is a local readiness measure, not a certification that every sensitive item was found or that the production satisfies every legal requirement.",
     "The unit is one document as prepared for production. Record the document identifier, the source version, the redaction method, the categories applied, and the reviewer. If a document has attachments, treat the parent and each attachment as separate units when the redaction decision can differ. Report the number of documents and the number of pages separately so a long document does not distort the rate."
    ]
   },
   {
    "heading": "Method and evidence standard",
    "body": [
     "Define the redaction categories and the approved method before sampling. Record whether the text layer was removed, whether images were flattened, and whether metadata was stripped. A black rectangle over live text is not equivalent to a true redaction. The reviewer should check the produced file, not only the editing view, because the two can differ after export.",
     "Sample across document types, sources, and reviewers. Include documents that were redacted early and documents changed late in the process. Use a calibration set to align reviewers on what counts as a coverage error, a consistency error, and an accepted partial redaction. Preserve the initial rating and the adjudication. A sample drawn only from clean files will overstate readiness, while a sample of known problems will not show the base rate."
    ]
   },
   {
    "heading": "Measures, findings, and interpretation",
    "body": [
     "Report the share of sampled documents with each required check complete. Separate a missed redaction from a redaction applied too broadly, because the remedies differ. Record the number of documents where the text layer remained, the metadata was not removed, or the reviewer sign-off was missing. Show the result by document type and by preparer only when the group is large enough to support comparison.",
     "Inspect the files behind the largest gaps before assigning a cause. A cluster of text-layer failures may point to an export setting, while a cluster of missed categories may point to an unclear instruction. A high rate of over-redaction may indicate a cautious reviewer or a vague standard. The study can show where the process needs a check; it cannot decide whether a particular redaction was legally required."
    ]
   },
   {
    "heading": "Limitations and practical next step",
    "body": [
     "The review tests a sample against a written standard and cannot prove that no sensitive information remains. It also cannot determine whether the production satisfies a court order, a protective order, or a client instruction. The result depends on the sample, the reviewers, and the version of the files. If the production changes after the review, the earlier result no longer describes the released set.",
     "Choose one control to test next, such as a text-layer check on every exported file or a second reviewer for a defined category. Record the owner, the due date, and the measure. Run the check on the next production and compare the result. Keep the sample and the decision log with the matter. A short, repeatable check is more useful than a one-time assurance that the team was careful."
    ]
   }
  ],
  "sources": [
   {
    "name": "U.S. Courts — Federal Rules of Civil Procedure",
    "url": "https://www.uscourts.gov/rules-policies/current-rules-practice-procedure/federal-rules-civil-procedure"
   },
   {
    "name": "NIST Cybersecurity Framework 2.0",
    "url": "https://www.nist.gov/cyberframework"
   },
   {
    "name": "ICO — Data protection and confidentiality",
    "url": "https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/"
   },
   {
    "name": "American Bar Association — Litigation",
    "url": "https://www.americanbar.org/groups/litigation/"
   }
  ],
  "relatedSlugs": [
   "how-often-do-legal-matter-records-lack-a-named-reviewer",
   "can-a-contract-abstraction-be-reproduced-from-its-source-clauses",
   "where-does-delay-accumulate-in-a-legal-intake-queue"
  ],
  "thumbnail": "/thumbnails/november-05/legalservicesoffshore-measuring-redaction-quality-before-a-production-release.png"
 },
 {
  "slug": "can-a-contract-abstraction-be-reproduced-from-its-source-clauses",
  "title": "Can a contract abstraction be reproduced from its source clauses?",
  "excerpt": "A documentary test of whether contract abstractions preserve the clause, defined term, and version needed for independent review.",
  "published": "2026-11-05",
  "sourceDate": "2026-11-05",
  "updated": "2026-11-05",
  "cluster": "legal-support-contracts",
  "headlineStat": "Traceability is the test of a useful abstraction",
  "sections": [
   {
    "heading": "Question and scope",
    "body": [
     "This study asks whether a reviewer can reproduce a contract abstraction from the source clauses without asking the preparer for context. It examines the source location, the defined terms, the version reviewed, and the treatment of cross-references. The scope is one contract set or one defined abstraction template during a fixed period. The result is a documentary finding, not a legal opinion on the contract.",
     "The unit is one abstraction row tied to one contract. If a row summarizes several clauses, the study records each source location and whether the relationship between them is explained. If a contract has amendments or incorporated documents, the row is checked against the version that controls. Report the number of contracts and the number of rows separately."
    ]
   },
   {
    "heading": "Method and evidence standard",
    "body": [
     "Define the required fields before sampling: clause reference, defined term, source version, summary, open question, and reviewer. A row is reproducible when another reviewer can open the cited clause and confirm the summary without additional explanation. A page number alone is usually insufficient because versions paginate differently; a section and paragraph reference is stronger. Record the date the clause was checked so a later reviewer knows which version was used.",
     "Sample rows across contract types, preparers, and review stages. Include rows that were corrected and rows that were accepted on the first pass. Two reviewers should calibrate on a small set and discuss disagreements about whether a summary crossed into interpretation. Preserve the initial rating and the adjudication. The study measures traceability, not whether the commercial terms are favorable or enforceable."
    ]
   },
   {
    "heading": "Measures, findings, and interpretation",
    "body": [
     "Report the share of rows with a complete source location, a defined-term reference, a version, and a reviewer. Record how often the reviewer had to ask the preparer for context. Show the result by contract type and by whether the contract was amended. A low rate of complete source locations may point to a template problem rather than to individual carelessness.",
     "Inspect the rows behind the largest gaps. A cluster in amended contracts may mean the abstraction was built from the original instead of the current version. A cluster in defined terms may mean the template does not prompt for them. The study cannot say whether the abstraction captured every material term, and it should not be used to compare legal quality across firms or matters."
    ]
   },
   {
    "heading": "Limitations and practical next step",
    "body": [
     "The review sees the abstraction and the cited contract, not the negotiation history or the client's commercial intent. A reproducible row can still be legally incomplete, and a sparse row can sit beside a careful review. The study also depends on the version of the contract supplied. If the contract changes after the review, the earlier finding no longer describes the current abstraction.",
     "Choose one change, such as a required clause reference, a defined-term field, or a version check before the abstraction is accepted. Name the owner and the date, then recheck the same measure on the next contract set. Keep a short log of rows returned for missing context. The goal is to make the abstraction easier to audit, not to add fields that no reviewer uses."
    ]
   }
  ],
  "sources": [
   {
    "name": "American Bar Association — Contract law resources",
    "url": "https://www.americanbar.org/groups/business_law/"
   },
   {
    "name": "NIST Cybersecurity Framework 2.0",
    "url": "https://www.nist.gov/cyberframework"
   },
   {
    "name": "Law Society — Outsourcing guidance",
    "url": "https://www.lawsociety.org.uk/topics/business-management/outsourcing"
   },
   {
    "name": "GAO — Standards for Internal Control",
    "url": "https://www.gao.gov/products/gao-14-704g"
   }
  ],
  "relatedSlugs": [
   "how-often-do-legal-matter-records-lack-a-named-reviewer",
   "measuring-redaction-quality-before-a-production-release",
   "where-does-delay-accumulate-in-a-legal-intake-queue"
  ],
  "thumbnail": "/thumbnails/november-05/legalservicesoffshore-can-a-contract-abstraction-be-reproduced-from-its-source-clauses.png"
 },
 {
  "slug": "where-does-delay-accumulate-in-a-legal-intake-queue",
  "title": "Where does delay accumulate in a legal intake queue?",
  "excerpt": "A stage-level method for locating wait time in legal intake without treating every long cycle as a performance problem.",
  "published": "2026-11-05",
  "sourceDate": "2026-11-05",
  "updated": "2026-11-05",
  "cluster": "legal-support-operations",
  "headlineStat": "Delay belongs to a stage before it belongs to a person",
  "sections": [
   {
    "heading": "Question and scope",
    "body": [
     "This study asks where time is spent between the receipt of a legal intake request and the first substantive review. It separates active preparation, waiting for missing information, waiting for an approval, and waiting for a system or access step. The scope is one intake queue or one defined matter type during a fixed period. The result describes that queue and is not a benchmark for other firms.",
     "The unit is one intake item followed from receipt to the defined review point. Record the timestamps from the system of record where possible, and mark estimated times separately. If an item was reopened, keep the original cycle and add the new segment. Exclude duplicates and test submissions, and record the exclusion reason. Report the number of items and the number of stages observed."
    ]
   },
   {
    "heading": "Method and evidence standard",
    "body": [
     "Define each stage and its start and end events before extracting data. A stage begins when the item enters the queue and ends when the required action is recorded. Do not use the time a message was read as a proxy for the time work began unless the system records that event. If a timestamp is missing, record the gap rather than filling it with an average.",
     "Sample items across request types, arrival days, and assigned teams. Include items that were escalated and items that moved without escalation. Two reviewers should compare a small set of timelines and resolve differences in stage boundaries. The study measures elapsed time, not effort or quality. A fast item is not necessarily complete, and a slow item is not necessarily poorly handled."
    ]
   },
   {
    "heading": "Measures, findings, and interpretation",
    "body": [
     "Report the median and range for each stage, the share of items with a missing timestamp, and the most common reason for a wait. Show the result by request type and arrival period. A long wait for missing information is different from a long wait for an internal approval, and the report should keep those categories separate. Use counts with the rates so a small group is not overinterpreted.",
     "Inspect the items behind the longest waits before assigning a cause. A cluster in one stage may reflect a staffing gap, a system step, or a rule that sends every item to the same reviewer. A cluster across stages may reflect an unclear intake form. The study cannot show whether the eventual decision was correct, and it should not be used to rank individual reviewers without additional evidence."
    ]
   },
   {
    "heading": "Limitations and practical next step",
    "body": [
     "The timestamps reflect the system's record and may not capture work done in email, chat, or a personal queue. The study also cannot observe the urgency of each item or the quality of the underlying legal judgment. A queue with a stable median can still contain a small group of very old items that matter more than the average. Report the tail and the missing data alongside the central measure.",
     "Choose one stage for a bounded improvement, such as a clearer missing-information request or a named approval backup. Record the owner, the start date, and the measure that will show whether the wait changed. Recheck the same stage after the change and keep the before-and-after sample. The most useful result is a specific next test, not a general claim that the queue is fast or slow."
    ]
   }
  ],
  "sources": [
   {
    "name": "GAO — Standards for Internal Control",
    "url": "https://www.gao.gov/products/gao-14-704g"
   },
   {
    "name": "NIST Cybersecurity Framework 2.0",
    "url": "https://www.nist.gov/cyberframework"
   },
   {
    "name": "American Bar Association — Law practice management",
    "url": "https://www.americanbar.org/groups/law_practice/"
   },
   {
    "name": "Law Society — Outsourcing guidance",
    "url": "https://www.lawsociety.org.uk/topics/business-management/outsourcing"
   }
  ],
  "relatedSlugs": [
   "how-often-do-legal-matter-records-lack-a-named-reviewer",
   "measuring-redaction-quality-before-a-production-release",
   "can-a-contract-abstraction-be-reproduced-from-its-source-clauses"
  ],
  "thumbnail": "/thumbnails/november-05/legalservicesoffshore-where-does-delay-accumulate-in-a-legal-intake-queue.png"
 },
 {
  "slug": "testing-whether-legal-handoffs-preserve-the-source-reference",
  "title": "Testing whether legal handoffs preserve the source reference",
  "excerpt": "A method for checking whether a completed legal handoff keeps the source, the action, and the reviewer connected.",
  "published": "2026-11-05",
  "sourceDate": "2026-11-05",
  "updated": "2026-11-05",
  "cluster": "legal-support-governance",
  "headlineStat": "A handoff is only as good as the reference it preserves",
  "sections": [
   {
    "heading": "Question and scope",
    "body": [
     "This study asks whether a completed legal handoff lets a reviewer connect the output to the source that supported it and the person who accepted it. It examines source location, the action recorded, the exception state, and the reviewer disposition. The scope is one handoff type or one support queue during a fixed period. The result is an evidence-quality finding, not a legal conclusion.",
     "The unit is one completed handoff record. If one record covers several documents, treat each document as a separate unit when the source or reviewer can differ. Record the matter identifier, the task type, the source reference, the output, the exception state, and the reviewer. Report the number of records and the number of documents separately so a large file set does not hide a small number of handoffs."
    ]
   },
   {
    "heading": "Method and evidence standard",
    "body": [
     "Define what counts as a source reference before sampling. A link to a folder may be insufficient if the folder can change; a document identifier and version are stronger. Define what counts as an action record and what counts as an acceptance. A status of done without a reviewer or a source is not a complete handoff for this study, even if the work was performed.",
     "Sample across task types and reviewers, including handoffs that were returned or corrected. Use a calibration set to align reviewers on missing, partial, and complete references. Preserve the initial rating and the adjudication. If the source is a conversation, record the date, the participants, and the person who confirmed the note. The study measures traceability, not whether the source was accurate or the legal work was correct."
    ]
   },
   {
    "heading": "Measures, findings, and interpretation",
    "body": [
     "Report the share of handoffs with a complete source reference, an action record, an exception field, and a named reviewer. Show the result by task type and by whether the handoff crossed teams. Include the number of records where the reviewer had to ask for the source again. A high rate of rework requests is a useful signal even when the final records look complete.",
     "Inspect the records behind the largest gaps before proposing a cause. A cluster in one task type may mean the template does not ask for a version. A cluster across teams may mean the handoff standard is not shared. The study cannot show whether the reviewer exercised good judgment, and it should not be used to compare individual performance without contextual evidence."
    ]
   },
   {
    "heading": "Limitations and practical next step",
    "body": [
     "The review sees the written handoff and cannot observe the conversation or the system state at the time. A record may contain a source link that has since changed, and a good handoff may be recorded poorly. The study also depends on the sample and the reviewer calibration. It does not establish compliance with a professional rule, a client instruction, or a data-protection requirement.",
     "Choose one change, such as a required document identifier, a version field, or a reviewer sign-off before closure. Name the owner and the date, then recheck the same measure on the next cohort. Keep a short log of returned handoffs and the reason. The aim is a handoff that another authorized person can reconstruct, not a longer form that adds fields without improving the review."
    ]
   }
  ],
  "sources": [
   {
    "name": "American Bar Association — Model Rules of Professional Conduct",
    "url": "https://www.americanbar.org/groups/professional_responsibility/publications/model_rules_of_professional_conduct/"
   },
   {
    "name": "NIST Cybersecurity Framework 2.0",
    "url": "https://www.nist.gov/cyberframework"
   },
   {
    "name": "GAO — Standards for Internal Control",
    "url": "https://www.gao.gov/products/gao-14-704g"
   },
   {
    "name": "Law Society — Outsourcing guidance",
    "url": "https://www.lawsociety.org.uk/topics/business-management/outsourcing"
   }
  ],
  "relatedSlugs": [
   "how-often-do-legal-matter-records-lack-a-named-reviewer",
   "measuring-redaction-quality-before-a-production-release",
   "can-a-contract-abstraction-be-reproduced-from-its-source-clauses"
  ],
  "thumbnail": "/thumbnails/november-05/legalservicesoffshore-testing-whether-legal-handoffs-preserve-the-source-reference.png"
 }
];

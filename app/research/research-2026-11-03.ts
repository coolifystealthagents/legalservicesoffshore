import type { ResearchPost } from '../fleet-data';

export const november03ResearchPosts: ResearchPost[] = [
  {
    "slug": "legalservicesoffshore-intake-completeness-study",
    "title": "Measuring intake completeness in a distributed legal team",
    "excerpt": "A bounded protocol for measuring whether matter intake records carry the request, source evidence, conflict status, and decision needed for attorney review.",
    "published": "2026-11-03",
    "sourceDate": "2026-11-03",
    "updated": "2026-11-03",
    "cluster": "Evidence Quality",
    "headlineStat": "Intake completeness should be measured against a defined evidence standard, not against how polished the packet looks.",
    "sections": [
      {
        "heading": "Question and decision use",
        "body": "This protocol asks which required elements are present in a matter intake record at the moment it reaches attorney review. The elements are the client and matter identity, the requested scope, the source for each key fact, the conflict search status, the open questions, and the decision requested. The result is intended to help a legal operations team improve forms, routing, and reviewer coverage rather than to rank individual preparers. A useful measurement question names the decision it will inform.\n\nIf the team is deciding whether to change the intake form, the study should report which fields are missing most often and where the missing value originates. If the team is deciding whether to add a reviewer, the study should show whether incomplete packets cluster around particular matter types, offices, or times of day. The question should be written before the sample is drawn. This is not an audit opinion and it is not a legal conclusion. The study observes documentation in a defined window and cannot prove that a complete record produced a better client outcome. It can show whether the team's own evidence standard is being met and where the process breaks down."
      },
      {
        "heading": "Population and unit of analysis",
        "body": "The population should be defined from a frozen export of intake records, with the query time, systems, date boundaries, and status filters recorded. Include new matters, reopened matters, and changes to existing matters only if the protocol treats them as separate units. If they are combined, report the mix so the reader can see what the completeness rate represents. The unit is one intake record followed from its opening event to the attorney decision or the end of the observation window.\n\nA record that is returned for correction is still one unit, with a linked correction event. A record that is reopened later creates a new event but may remain the same matter. The protocol should state which choice it uses and apply it consistently. Excluded records need a reason. Common exclusions include duplicates, test records, matters handled outside the intake queue, and records missing the identifiers needed to link them to a source. Report the excluded count by reason so the denominator can be challenged. A large unexplained exclusion is a limitation, not a cleaning detail."
      },
      {
        "heading": "Evidence dictionary",
        "body": "Define each field before reviewing any record. The client name, matter identifier, request source, scope statement, conflict search date, search result status, open question, owner, and decision requested should each have an allowed value and a source rule. Distinguish missing, unknown, not applicable, and confirmed negative, because those states have different operational meanings. A source rule should say where the value must come from.\n\nThe conflict status should come from the approved conflict system or a dated search record, not from a note that says checked. The scope should come from the client request or the attorney's instruction, not from a summary written after a call. The requested decision should be explicit enough that a reviewer can answer it. Where a field is derived, record the formula and the source fields. If the team calculates an age in business days, define the calendar, the start event, and the stop event. If a field is free text, provide examples of acceptable entries and a rule for what makes an entry insufficient. The dictionary is part of the study and should be archived with the sample."
      },
      {
        "heading": "Sampling and reviewer calibration",
        "body": "Draw the sample from the frozen frame using a documented method. A simple random sample may be sufficient for a small queue, while a stratified sample can ensure coverage of matter types, offices, and exception states. Record the random seed and any replacement. Do not let reviewers choose the records that look most informative after seeing preliminary results.\n\nTwo reviewers should classify a small calibration set before the main review. Compare their answers field by field, discuss the ambiguous cases, and revise the dictionary. Then double-review a prespecified subset of the main sample. Report agreement counts and preserve the initial ratings so the reader can see whether the final result depended on extensive harmonization. If only one reviewer is available, say so and treat the result as a single-reviewer observation. That does not make the study useless, but it limits claims about consistency. A second reviewer on a subsample is often enough to reveal whether the definitions are clear."
      },
      {
        "heading": "Measures and reporting",
        "body": "Report completeness as a count and a rate for each required element, with the denominator and the missing count visible. A single overall percentage can hide the difference between a missing client name and a missing conflict date. The reader should be able to see which element drives the result. Include the age of incomplete records at the observation date, not only the share that are incomplete.\n\nA queue with many fresh records may look worse than a queue with a few old ones, even though the older items carry more risk. Report the distribution and the open count by owner group, with a caution that routing and case difficulty may explain differences. Separate first-pass completeness from corrected completeness. A record that was returned and fixed is not the same as a record that arrived complete. Report both, and keep the reason for each return. This distinction helps the team see whether the form is weak, the reviewer is catching problems, or the preparer is learning."
      },
      {
        "heading": "Analysis and interpretation",
        "body": "Compare completeness across the variables the protocol prespecified, such as matter type, intake channel, office, and time of day. Do not add segments after the fact simply because they produce an interesting difference. With a small sample, many apparent differences will be noise. Examine the narratives behind the largest gaps before assigning a cause.\n\nA missing conflict search may reflect a system outage, an unfamiliar entity, or a preparer who did not know the search was required. Each cause suggests a different remedy. A training note will not fix a broken integration, and a new field will not fix a reviewer who never asks for it. Report uncertainty in plain language. If the sample contains nine incomplete records, say nine rather than implying a precise population rate. If the design cannot support a comparison between offices, say that the comparison is descriptive. A modest claim that the team can defend is more useful than a strong claim that collapses under review."
      },
      {
        "heading": "Limitations and sources of error",
        "body": "The study cannot observe intake work that never reached the queue. Matters opened by a partner through a direct conversation, records kept in a local drive, and requests handled by another office may be missing from the frame. The result describes the sampled records, not every matter the firm accepts. Reviewer judgment is another limitation.\n\nTwo people may disagree about whether a scope statement is sufficiently specific or whether a conflict result is confirmed. Calibration reduces but does not eliminate that variation. The study should preserve the disagreements and the adjudication rule rather than reporting only the final consensus. System changes can also affect the result. A form update, a new matter management release, or a change in the conflict database may alter what the team can record. Note the relevant change dates and avoid comparing periods as if the instrument stayed constant. Public guidance can frame the questions but cannot validate a local record."
      },
      {
        "heading": "Privacy and role boundaries",
        "body": "Use the minimum client and matter information needed for the study. Replace names with study keys, restrict access to the crosswalk, and follow the firm's retention and deletion rules. Do not copy privileged or sensitive material into the analysis file when a reference to the approved source is enough. The offshore team may prepare the sample, classify administrative fields, and maintain the study log.\n\nThe supervising attorney or authorized firm reviewer decides whether a record is sufficient for acceptance and whether a legal question is resolved. The study should not be used to make a client-facing statement about the firm's compliance or the strength of a matter. If a record contains information from another client or an unrelated matter, stop and report it through the firm's incident path. Do not include it in the sample or discuss it in a group review. The privacy rule applies to the study just as it applies to the underlying work."
      },
      {
        "heading": "From finding to controlled change",
        "body": "Choose one change based on the most common or most consequential gap. It might be a required field, a different source system, a routing rule, or a second-review step. Name the owner, the due date, and the measure that will show whether the change helped. Recheck the same measure after two cycles rather than declaring success immediately.\n\nA short-term improvement may reflect reviewer attention rather than a durable process change. If the measure does not move, examine whether the change addressed the cause or only the symptom. Keep a decision log with the finding, the change, the owner, and the result. This log is the institutional memory of the intake process and helps a new manager understand why the form looks the way it does. The goal is not a perfect record; it is a record that makes the next decision easier and the next correction visible."
      }
    ],
    "sources": [
      {
        "name": "American Bar Association — Law Practice Resources",
        "url": "https://www.americanbar.org/groups/law_practice/resources/"
      },
      {
        "name": "U.S. Courts — Rules and Policies",
        "url": "https://www.uscourts.gov/rules-policies"
      },
      {
        "name": "NIST Cybersecurity Framework 2.0",
        "url": "https://www.nist.gov/cyberframework"
      },
      {
        "name": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/"
      },
      {
        "name": "Legal Services Corporation",
        "url": "https://www.lsc.gov/"
      }
    ],
    "relatedSlugs": [
      "legalservicesoffshore-matter-handoff-evidence-study",
      "legalservicesoffshore-deadline-calendar-reconciliation-study",
      "legalservicesoffshore-access-recertification-patterns-study"
    ],
    "thumbnail": "/thumbnails/november-03/legalservicesoffshore-intake-completeness-study.png"
  },
  {
    "slug": "legalservicesoffshore-matter-handoff-evidence-study",
    "title": "Where matter handoffs lose evidence",
    "excerpt": "A study design for locating the point in a legal matter handoff where the source, owner, status, or next action stops being reproducible.",
    "published": "2026-11-03",
    "sourceDate": "2026-11-03",
    "updated": "2026-11-03",
    "cluster": "Workflow Design",
    "headlineStat": "A handoff is reliable when a second reviewer can reconstruct the next action from the record alone.",
    "sections": [
      {
        "heading": "Research question",
        "body": "This study asks where a legal matter handoff loses the evidence needed to continue the work. The focus is on the transition between the person who prepares a task and the person who reviews or acts on it. The record may lose the source, the owner, the current status, the next action, the approval, or the reason for a change. The practical question is not whether handoffs sometimes fail.\n\nIt is which part of the handoff fails most often and whether the failure is visible before the next deadline. A team that can locate the loss can change the template, the routing, or the review step. A team that only knows a handoff felt unclear has little to act on. The study is descriptive and operational. It does not evaluate the legal quality of the work or the competence of an individual. It asks whether the administrative record gives the next reviewer enough to proceed without private memory."
      },
      {
        "heading": "Frame and unit",
        "body": "Define a handoff as a recorded transfer of responsibility for a matter task from one named role to another. The frame should include handoffs between preparer and reviewer, between shifts, between offices, and between the firm and an approved service team. Each handoff is a unit, even when several handoffs occur within one matter. The record should be linked to the matter and to the task it concerns.\n\nIf a handoff covers several tasks, either split it into separate units or define a bundle rule and report the bundle size. A bundle that mixes a routine update with an urgent filing question will produce a misleading result if treated as one undifferentiated handoff. Exclude social messages that do not transfer responsibility, automated notifications with no owner, and records that cannot be linked to a matter. Report the excluded count and the reason. A large number of unlinkable records is itself a finding about the record system."
      },
      {
        "heading": "Evidence standard",
        "body": "A complete handoff should name the matter, the task, the source, the current status, the next action, the receiving owner, and the time of transfer. If an approval is required, the record should name the approver and the scope of the approval. If the handoff depends on another document, the record should link to it rather than paraphrase it. The standard should distinguish a request from a decision.\n\nA message that asks the reviewer to look at a draft is a request. A message that says the reviewer approved the draft for filing is a decision. Both may be legitimate handoffs, but they support different next actions and should not share a status. Define what counts as a source. A system field, a signed document, a dated message, or an approved note may qualify, depending on the task. A private recollection does not. If the source is a conversation, the record should include a contemporaneous note and the name of the person who confirmed it."
      },
      {
        "heading": "Sampling",
        "body": "Sample handoffs across normal work, exceptions, shift changes, and periods when a backup owner was active. Include handoffs that were completed smoothly as well as those that were returned or reopened. A sample of only problem cases will describe failure modes but not the base rate. Record the selection method and the frame version.\n\nIf the team uses a queue export, note the export time and the status filter. If the team uses a manual list, say who assembled it and what instructions they received. A convenience sample can still be useful for design, but it should not be presented as a representative rate. For each sampled handoff, capture the time between the transfer and the next substantive action. This interval is not a performance score, because waiting may reflect an approval, a missing document, or a system outage. It is a clue that helps the reviewer locate where the record stops moving."
      },
      {
        "heading": "Classification and agreement",
        "body": "Classify each handoff against the evidence standard as complete, partial, or absent for each element. Require a short rationale and a source reference for every partial or absent rating. A handoff that lacks a next action but has a clear owner is different from one that has neither, and the classification should preserve that difference. Two reviewers should independently classify a calibration set and compare results.\n\nDisagreements often reveal that the team has not defined what counts as a next action or how much source detail is enough. Revise the definitions and repeat the calibration before the main review. Preserve the initial ratings and the adjudication. Reporting only the reconciled result hides the fact that the standard was ambiguous. A study that shows where reviewers disagreed can be more useful than one that reports a single tidy percentage."
      },
      {
        "heading": "Findings that matter",
        "body": "Look for handoffs where the next action is implied but not written, where the owner is a team rather than a person, or where the status describes effort rather than the next step. These patterns are common and easy to fix with a template change. They are also easy to miss when the reviewer already knows the matter. Another signal is a handoff that depends on a document that is not linked.\n\nThe receiving reviewer may spend time searching for the source, or may proceed on a summary that omits a key exception. Record the search time and the missing document as part of the finding, not as an unrelated delay. A third signal is a correction that overwrites the original record. If the team cannot see what changed, it cannot tell whether the next reviewer understood the change or simply received a cleaner-looking version. Preserve the before-and-after states for any material correction."
      },
      {
        "heading": "Interpretation and limits",
        "body": "A high rate of partial handoffs does not prove that the team is careless. It may mean the template asks for too much, the queue is under pressure, or the receiving role has never specified what it needs. The study should point to the design question rather than assign blame. A low rate of incomplete handoffs may mean the process is strong, or it may mean the sample excluded the difficult cases.\n\nCheck the frame against the queue and the exception log. If the sample contains only handoffs that reached a reviewer, it may miss the ones that never moved at all. The study cannot show whether a complete handoff led to a better legal result. It observes the record and the next action, not the outcome of the matter. That limitation should be stated plainly so the findings are not used to make a claim the design cannot support."
      },
      {
        "heading": "Governance and follow-up",
        "body": "Assign an owner for the handoff standard and a date for the next review. The owner should be able to change the template, the routing rule, or the training material, not only comment on the study. A finding without an owner becomes a recurring slide in the next review. Choose one change and test it on a defined group of handoffs.\n\nFor example, add a required next-action field and a named receiving owner, then compare the next sample with the baseline. Keep the change small enough that the team can see whether it helped. Record the decision in a short log with the finding, the change, the owner, and the result. Share the log with the reviewers who supplied the sample so they can see how their observations were used. That feedback loop is more likely to produce a durable improvement than a one-time audit."
      },
      {
        "heading": "Reporting the handoff sample",
        "body": "Report the number of handoffs in the frame, the number sampled, and the number excluded for each reason. Show completeness by element rather than only as an overall score, because a team may be strong on ownership and weak on source links. Include the age of open handoffs at the observation date and the number that were returned for correction. A table with counts, denominators, and short definitions is more useful than a chart that hides the sample size.\n\nDescribe the selection method in enough detail that another reviewer could repeat it. State whether the sample was random, stratified, or convenience-based, and explain what the result can and cannot support. If reviewers disagreed during calibration, report the disagreement and the rule used to resolve it. End with one change, one owner, and one date for the next check so the finding becomes an operational decision rather than a discussion."
      }
    ],
    "sources": [
      {
        "name": "American Bar Association — Law Practice Resources",
        "url": "https://www.americanbar.org/groups/law_practice/resources/"
      },
      {
        "name": "NIST Cybersecurity Framework 2.0",
        "url": "https://www.nist.gov/cyberframework"
      },
      {
        "name": "U.S. Courts — Rules and Policies",
        "url": "https://www.uscourts.gov/rules-policies"
      },
      {
        "name": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/"
      },
      {
        "name": "NIST SP 800-61 Rev. 2 — Incident Handling Guide",
        "url": "https://csrc.nist.gov/pubs/sp/800/61/r2/final"
      }
    ],
    "relatedSlugs": [
      "legalservicesoffshore-intake-completeness-study",
      "legalservicesoffshore-privilege-log-reviewer-agreement-study",
      "legalservicesoffshore-deadline-calendar-reconciliation-study"
    ],
    "thumbnail": "/thumbnails/november-03/legalservicesoffshore-matter-handoff-evidence-study.png"
  },
  {
    "slug": "legalservicesoffshore-privilege-log-reviewer-agreement-study",
    "title": "Reviewer agreement in privilege log preparation",
    "excerpt": "A method for studying whether two trained reviewers classify privilege log entries the same way, and where the definitions rather than the documents cause disagreement.",
    "published": "2026-11-03",
    "sourceDate": "2026-11-03",
    "updated": "2026-11-03",
    "cluster": "Review Consistency",
    "headlineStat": "Agreement is a property of the review standard as much as of the reviewers.",
    "sections": [
      {
        "heading": "Question and scope",
        "body": "This study asks how consistently two trained reviewers classify the same privilege log entries when they use the same written standard. It compares the author, recipient, date, document type, description, and asserted basis fields. It also records where the reviewers disagree about whether an entry is sufficiently supported by the source document. The scope is administrative preparation, not the legal decision to withhold a document.\n\nThe reviewers may flag an entry for attorney attention, but the study does not ask them to decide privilege. That boundary keeps the research focused on the record and avoids turning a quality study into a legal opinion. The result is intended to improve the data dictionary, the examples, and the calibration process. A high agreement rate does not prove that the log is legally correct, and a low rate does not prove that either reviewer is careless."
      },
      {
        "heading": "Entry frame and sampling",
        "body": "The frame is a closed set of privilege log entries from a defined review batch. Record the batch identifier, the number of entries, the review platform, and the date the export was taken. If the log changed after the export, preserve the earlier version and note the change. Draw a sample across document types, custodians, and review outcomes.\n\nInclude entries with attachments, entries that were corrected, and entries that the preparer found difficult. A sample of only simple emails will overstate agreement because the fields are easier to read. The unit is one log entry, not one document page. If an entry covers a family of documents, define whether the family is one unit or whether each document is separate. Apply the rule consistently and report the family size so the reader can interpret the result."
      },
      {
        "heading": "Definitions and codebook",
        "body": "The codebook should define each field, the allowed values, and the source that controls. For the author field, specify whether the sender of an email or the signer of a letter controls. For the date field, specify whether the document date or the send date controls. Ambiguity here will appear as reviewer disagreement even when both reviewers are competent.\n\nInclude examples of correct and incorrect entries. A short annotated example is often more useful than a long rule. The examples should cover attachments, forwarded messages, distribution lists, and documents with no clear author. These are the cases where reviewers typically diverge. Version the codebook and record which version each reviewer used. If the codebook changes during the study, the later entries are not directly comparable with the earlier ones. Either freeze the codebook for the sample or report the change as a limitation."
      },
      {
        "heading": "Calibration and independence",
        "body": "Train both reviewers on a small set that is not part of the main sample. Discuss the disagreements, revise the codebook if needed, and repeat the calibration. The goal is a shared standard, not a memorized answer key. During the main review, the reviewers should classify independently and should not see each other's answers.\n\nPreserve the initial ratings before any discussion. If the workflow requires immediate adjudication, record the initial rating separately from the final one. A third reviewer can adjudicate disagreements, but the adjudication should not erase the disagreement. Report the initial agreement, the final agreement, and the number of cases that required adjudication. That three-part result is more informative than a single consensus rate."
      },
      {
        "heading": "Measures",
        "body": "Report agreement by field and by overall entry. A log may have strong agreement on dates and weak agreement on descriptions, and the overall rate can hide that difference. Use counts and percentages, and show the number of entries behind each result. For categorical fields, report how often the reviewers chose the same value and how often they chose different values.\n\nFor free-text descriptions, define a coding scheme before measuring agreement, such as whether the description identifies the document type, the participants, and the asserted basis. Do not compare free text with an exact-match rule unless the codebook requires exact wording. Report the direction of disagreements where possible. If one reviewer consistently marks a basis as unsupported while the other accepts it, the team may need a clearer rule or a different approval path. A simple disagreement count will not reveal that pattern."
      },
      {
        "heading": "What disagreement can mean",
        "body": "Disagreement can mean the codebook is ambiguous, the source document is hard to read, the reviewers received different training, or the sample includes genuinely close calls. It can also mean one reviewer is applying a stricter standard than the other. The study should distinguish these possibilities rather than treating all disagreement as error. Review a few disagreement cases together and ask each reviewer to explain the rule they applied.\n\nIf both can cite the codebook but reach different answers, the codebook needs an example. If one reviewer cannot cite a rule, the training or the reference material may be incomplete. A pattern tied to one document type is a design clue. Attachments, privileged communications with multiple recipients, and documents created by an assistant are common sources of ambiguity. Add examples for those cases before expanding the review."
      },
      {
        "heading": "Limitations",
        "body": "The study uses a sample from one or a few batches, so it cannot describe the firm's entire practice. The reviewers know they are participating in a study, which may change their behavior. The sample may exclude entries that were never logged or documents that were withheld without an entry. The study does not measure legal correctness.\n\nTwo reviewers can agree on an entry that the supervising attorney later rejects. Agreement is a consistency measure, not a validity measure. The report should say this clearly so the result is not overread. Resource constraints may limit the number of entries that can be double-reviewed. A small sample can still be useful for finding definition problems, but it cannot support a precise estimate. Report the sample size and the uncertainty in plain language."
      },
      {
        "heading": "Operational use",
        "body": "Use the findings to revise the codebook, add examples, or change the calibration process. If disagreement clusters around a field that the team rarely uses, consider removing the field or replacing it with a controlled list. If disagreement clusters around attachments, add a family-level rule. Set a review cadence and a target for the next round.\n\nThe target should be about the process, such as reducing unexplained disagreement in two fields, not about forcing reviewers to agree. A team that understands why it disagrees can improve faster than a team that is simply told to be consistent. Keep the study log with the codebook version and the sample identifiers. A later reviewer should be able to see what was tested and what changed. That record is the foundation for a more reliable privilege log process."
      },
      {
        "heading": "Reporting and the next review round",
        "body": "Report the number of entries in the frame, the number double-reviewed, and the number that required adjudication. Show agreement by field and by document type, with the counts behind each percentage. Preserve examples of disagreement in a restricted appendix so the team can see the kind of ambiguity that produced the result. Do not publish privileged content in the report; use a neutral description and a study key.\n\nSet a date for the next round and name the codebook version that will be used. If the team changes the definitions, treat the next round as a new baseline rather than comparing it directly with the earlier result. Record the training that reviewers received and any change to the review platform. A short decision log with the finding, the change, the owner, and the result will make the next study easier to interpret."
      },
      {
        "heading": "What the report should not claim",
        "body": "The report should not say that the log is legally sufficient or that the firm has met a production obligation. It should say how consistently the reviewers applied the written standard and where the standard was unclear. That distinction matters because agreement can coexist with a substantive error that the attorney later corrects. The report should name the attorney or review owner who is responsible for the legal decision.\n\nIt also should not compare agreement rates across firms, matters, or time periods unless the codebook and the review method are comparable. A different document mix or a different definition of the unit can change the result. Keep the comparison inside the defined study and state the version of the standard used. A reader should be able to tell whether the same codebook and the same unit definition were used."
      }
    ],
    "sources": [
      {
        "name": "American Bar Association — Law Practice Resources",
        "url": "https://www.americanbar.org/groups/law_practice/resources/"
      },
      {
        "name": "U.S. Courts — Rules and Policies",
        "url": "https://www.uscourts.gov/rules-policies"
      },
      {
        "name": "NIST Cybersecurity Framework 2.0",
        "url": "https://www.nist.gov/cyberframework"
      },
      {
        "name": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/"
      },
      {
        "name": "Federal Judicial Center",
        "url": "https://www.fjc.gov/"
      }
    ],
    "relatedSlugs": [
      "legalservicesoffshore-intake-completeness-study",
      "legalservicesoffshore-matter-handoff-evidence-study",
      "legalservicesoffshore-access-recertification-patterns-study"
    ],
    "thumbnail": "/thumbnails/november-03/legalservicesoffshore-privilege-log-reviewer-agreement-study.png"
  },
  {
    "slug": "legalservicesoffshore-deadline-calendar-reconciliation-study",
    "title": "Deadline calendar reconciliation: sources and gaps",
    "excerpt": "A study design for comparing court notices, approved deadline notes, and calendar entries to find where a legal deadline record stops agreeing with its source.",
    "published": "2026-11-03",
    "sourceDate": "2026-11-03",
    "updated": "2026-11-03",
    "cluster": "Workflow Design",
    "headlineStat": "A calendar entry is only as reliable as the source and approval linked to it.",
    "sections": [
      {
        "heading": "Question and scope",
        "body": "This study asks where a deadline calendar stops agreeing with the notice or instruction that supports it. It compares the source document, the approved deadline note, and the calendar entry for the same matter event. It records whether the date, the time zone, the owner, and the approval are visible and consistent. The scope is administrative reconciliation.\n\nThe study does not decide which deadline is legally correct or whether a response was timely. Those are legal questions for the responsible attorney. The study asks whether the firm's own record is reproducible and whether the handoff between source and calendar preserved the evidence. The practical use is to find fixable gaps in the intake, calculation, approval, or entry step. A recurring mismatch may point to a template problem, a training gap, a system limitation, or a coverage issue. The study should help the team choose which one to address first."
      },
      {
        "heading": "Frame and unit",
        "body": "The frame is a set of calendar entries for a defined period, linked to matters and source documents. Include entries created from court notices, scheduling orders, internal instructions, and client requests. Exclude personal reminders and entries that cannot be linked to a matter. The unit is one deadline event, not one calendar row.\n\nA single event may have a reminder, a docket entry, and a task; those are linked records, not separate deadlines. Define the event key before sampling so the team does not count the same date multiple times. Record the systems involved and the export time. If the calendar was updated after the export, preserve the earlier version and note the change. A reconciliation study depends on a stable snapshot, because a moving calendar can make a correct entry look wrong."
      },
      {
        "heading": "Evidence standard",
        "body": "A complete deadline record should show the source notice, the date or period stated, the rule or instruction relied on, the calculated date, the approver, the time zone, and the calendar entry. It should also show the owner and the next check. A record that lacks any of these elements is partial, even if the date happens to be right. The standard should distinguish a date stated in a notice from a date calculated by the firm.\n\nA notice that says a response is due within a stated period requires a calculation, and the record should show the rule used. A notice that states a specific date still needs confirmation that the date was read correctly and entered in the right time zone. A source link should point to the actual notice or order, not to a summary. If the notice is in a court portal, record the docket entry and the retrieval time. If the notice arrived by email, record the message identifier and the attachment version. A screenshot alone may not show whether the document was later amended."
      },
      {
        "heading": "Sampling",
        "body": "Sample across matter types, courts, offices, and deadline sources. Include entries created during normal hours and entries created during coverage or leave. A sample drawn only from routine matters will miss the handoffs most likely to fail. Include at least one entry that was corrected, one that was extended, and one that was closed without a filing.\n\nThese cases test whether the record preserves history and whether the close rule is applied consistently. If the sample has no exceptions, say so and explain how the frame was drawn. Record the selection method and the random seed if applicable. A convenience sample can be useful for a pilot, but the report should not describe it as representative. The reader needs to know what the sample can and cannot support."
      },
      {
        "heading": "Classification",
        "body": "Classify each deadline event as consistent, inconsistent, or unverifiable. Consistent means the source, the approved note, and the calendar agree on the date, the time zone, and the owner. Inconsistent means a material element differs. Unverifiable means the source or approval cannot be located.\n\nFor each inconsistent event, record which element differs and the likely stage where the difference entered. A date changed at entry is different from a date changed after a later order. A missing time zone is different from a wrong time zone. The reason codes should be specific enough to guide a fix. A second reviewer should check a subset and compare classifications. Disagreements often reveal that the standard did not define what counts as a material difference. Revise the definitions before expanding the sample, and preserve the initial ratings."
      },
      {
        "heading": "Analysis",
        "body": "Report counts and rates by element, source type, and stage. Show the denominator and the number of unverifiable records. A high unverifiable rate is a finding about access or record linkage, not necessarily about deadline accuracy. Examine the direction of errors.\n\nA calendar that is consistently early may reflect a conservative rule, while a calendar that is consistently late may reflect a misread notice or a delayed entry. The direction matters because the remedy is different. Do not combine early and late errors into a single accuracy rate without explanation. Compare the reconciliation result with the exception log and the urgent handoff log. If the study finds inconsistencies that the logs do not record, the team may be under-reporting. If the logs show many exceptions that the sample misses, the sample may be too narrow. Both are useful findings."
      },
      {
        "heading": "Limitations",
        "body": "The study cannot determine whether a deadline was legally correct. It observes the record and the agreement between source, approval, and calendar. A consistent record may still reflect a legal error, and an inconsistent record may be harmless if the attorney corrected it elsewhere. The sample may miss deadlines that were never entered in the calendar.\n\nThose are the most serious gaps, but they are also the hardest to find from a calendar export. Pair the study with a docket review or a source-notice review to estimate what the calendar frame cannot see. Court rules, time zones, and filing systems change. A finding from one period may not apply to another. Record the relevant rule and system versions, and avoid comparing periods as if the environment stayed constant."
      },
      {
        "heading": "Operational follow-up",
        "body": "Choose one change based on the most common or highest-risk gap. It might be a required time-zone field, a second-review rule for calculated dates, a link to the source notice, or a weekly docket reconciliation. Name the owner and the date of the next check. Test the change on a defined set of matters and compare the same measures.\n\nIf the inconsistency rate falls but the unverifiable rate rises, the change may have improved entry without improving evidence. Report both results so the team does not trade one problem for another. Keep a decision log with the finding, the change, the owner, and the result. Review it with the attorneys and the operations team so the calendar standard reflects both legal requirements and administrative reality. The goal is a record that a reviewer can reconstruct, not a promise that no deadline will ever be missed."
      },
      {
        "heading": "Reporting the reconciliation",
        "body": "Report the number of deadline events in the frame, the number sampled, and the number that could not be verified. Show consistency by source type, element, and stage so the reader can see whether the problem sits in intake, calculation, approval, or entry. Include the direction of each material difference and the reason code assigned. A count of inconsistent entries without that detail will not tell the team what to fix.\n\nDescribe the systems and the export time used for the snapshot, and note any calendar change that occurred during the review. If the sample was stratified, report the strata and the number selected from each. End with one change, one owner, and a date for the next check. Keep the report short enough for the attorneys and operations team to review together, because the fix usually crosses both roles."
      },
      {
        "heading": "What the report should not claim",
        "body": "The report should not say that a deadline was met or missed, because it does not observe the filing or the court's response. It observes whether the firm's record agrees with its source and whether the approval is visible. A later legal review may reach a different conclusion about the controlling date. The report should name the attorney role that owns that conclusion.\n\nIt also should not treat a calendar entry as proof that the underlying notice was correct. A notice can be amended, a portal can display an outdated entry, and a rule can change. The study can only show what the team recorded and how it reconciled the record. That limit should appear beside the result, not in a footnote."
      }
    ],
    "sources": [
      {
        "name": "U.S. Courts — Rules and Policies",
        "url": "https://www.uscourts.gov/rules-policies"
      },
      {
        "name": "American Bar Association — Law Practice Resources",
        "url": "https://www.americanbar.org/groups/law_practice/resources/"
      },
      {
        "name": "Federal Judicial Center",
        "url": "https://www.fjc.gov/"
      },
      {
        "name": "NIST Cybersecurity Framework 2.0",
        "url": "https://www.nist.gov/cyberframework"
      },
      {
        "name": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/"
      }
    ],
    "relatedSlugs": [
      "legalservicesoffshore-intake-completeness-study",
      "legalservicesoffshore-matter-handoff-evidence-study",
      "legalservicesoffshore-privilege-log-reviewer-agreement-study"
    ],
    "thumbnail": "/thumbnails/november-03/legalservicesoffshore-deadline-calendar-reconciliation-study.png"
  },
  {
    "slug": "legalservicesoffshore-access-recertification-patterns-study",
    "title": "Access recertification patterns for offshore legal support",
    "excerpt": "A bounded study of whether offshore legal support accounts still match the matters, tools, and review role they were granted for.",
    "published": "2026-11-03",
    "sourceDate": "2026-11-03",
    "updated": "2026-11-03",
    "cluster": "Access Governance",
    "headlineStat": "Access recertification is useful when it can show why an account still needs each permission.",
    "sections": [
      {
        "heading": "Question and scope",
        "body": "This study asks whether an offshore legal support account still matches the work it was granted to perform. It compares the assigned matters, the tools and folders, the role, the reviewer, and the date of the last access decision. It also records whether the account owner can explain why each permission is needed. The scope is administrative access review, not a security audit or a legal ethics opinion.\n\nThe study observes whether the firm's own access rule is documented and whether the record supports a recertification decision. It does not test the security of the underlying systems. The result is intended to help a legal operations team design a review that is practical to repeat and honest about what it observes. A recertification that takes weeks and produces a spreadsheet nobody reads is not a control. A short review that names the owner, the scope, and the next check is more likely to be sustained."
      },
      {
        "heading": "Population and unit",
        "body": "The population is the set of active accounts assigned to offshore legal support work during a defined period. Include accounts used by paralegals, legal assistants, research support, and team leads. Exclude service accounts and shared mailboxes unless the protocol treats them as a separate category. The unit is one account at one review point.\n\nIf an account changes role during the period, create a new review event and link it to the earlier one. That preserves the history without counting the same account twice in a single snapshot. Record the systems covered, the export time, and the owner who supplied the list. If the firm has multiple identity systems, state which one is authoritative. A review that misses a system can create false confidence about the account's actual reach."
      },
      {
        "heading": "Evidence standard",
        "body": "A complete access record should show the account identity, the assigned role, the matters or matter groups, the tools and folders, the approver, the approval date, and the last review date. It should also show the business reason for the access and the date the reason was confirmed. A generic reason such as needs access to do the job is not enough. A useful reason names the task, the matter type, and the review role.\n\nFor example, an account may need read access to a specific matter folder to prepare a document index, with no permission to edit client records or release documents. Distinguish access that is required, temporary, and inherited. A temporary permission should have an expiry date and a named owner. An inherited permission should be traceable to a group or role, not accepted simply because it appeared during provisioning."
      },
      {
        "heading": "Sampling",
        "body": "Draw a sample across roles, tenure, matter types, and access levels. Include accounts that were recently provisioned, accounts that changed role, and accounts that have been active for a long time. Long-lived accounts are more likely to carry permissions that were never reviewed. Include at least one account with an exception, such as a temporary project permission or a cross-matter role.\n\nIf the sample contains no exceptions, check whether the frame excluded them. A review of only standard accounts will miss the cases most likely to need a decision. Record the selection method and the number of accounts in the frame. A sample of ten accounts from a small team may be enough for a pilot, but it cannot support a precise population estimate. Report the limitation plainly."
      },
      {
        "heading": "Classification",
        "body": "Classify each permission as supported, unsupported, or unclear. Supported means the record names a current task and an approver. Unsupported means the permission is no longer needed or the reason is not documented. Unclear means the reviewer cannot determine the need from the record and must ask the owner.\n\nDo not classify a permission as supported merely because the account holder says it is needed. The record should show the task and the approver. A conversation can clarify the need, but the result should be recorded and dated. If the approver is unavailable, mark the item open rather than assuming approval. Record the age of the last review and whether the account changed role since then. A permission that was appropriate at provisioning may be inappropriate after a move to a different matter or a different review role. The review should treat role change as a trigger, not wait for the annual cycle."
      },
      {
        "heading": "Analysis",
        "body": "Report the number of accounts, permissions, supported decisions, unsupported decisions, and open questions. Show the distribution by role and by system. A single percentage can hide a concentration of unsupported access in one folder or one matter group. Look for patterns in the reasons.\n\nIf many accounts have broad folder access because the team could not scope it at provisioning, the problem is the provisioning process, not the recertification review. If many temporary permissions have no expiry date, the problem is the request form. Compare the review result with the offboarding and role-change records. An account that should have been removed but still appears in the active list is a finding about the joiner-mover-leaver process. Report it separately from a permission that is merely broader than necessary."
      },
      {
        "heading": "Limitations",
        "body": "The study observes the access record, not the actual use of the account. A permission may be unused but still supported for occasional work, or used regularly without a documented reason. The team should not infer misuse from an unused permission. The sample may miss accounts that were never added to the review list.\n\nIf the identity system is incomplete, the frame is incomplete. State which systems were checked and which were unavailable. The study also cannot evaluate whether the firm's access rule satisfies a professional or contractual obligation. It can show whether the firm follows its own rule. Legal, security, and privacy owners should review the standard itself."
      },
      {
        "heading": "Operational follow-up",
        "body": "Choose one change to test, such as adding a business-reason field to the access request, requiring an expiry date for temporary permissions, or triggering a review when an account changes role. Name the owner and the next review date. Measure the change with the same classification. If unsupported permissions fall but open questions rise, the team may need a clearer approver role rather than a stricter form.\n\nReport both outcomes. Keep the review short and repeatable. A quarterly sample of a few accounts, combined with a role-change trigger, is often more useful than an annual review of everything. The goal is a record that shows why access exists and who confirmed it."
      },
      {
        "heading": "Reporting the recertification",
        "body": "Report the number of accounts in the frame, the number sampled, and the number of permissions reviewed. Show supported, unsupported, and unclear decisions separately, and include the age of the last review for each account. A permission that is broad but documented is different from one that is broad and unexplained, and the report should preserve that distinction. The reviewer should be able to see the reason and the approver for each supported permission.\n\nDescribe the identity systems checked and any system that could not be included. If the sample was drawn from a single team, say so and avoid presenting the result as a firm-wide rate. End with one access change to test, a named owner, and a date for the next review. The report should be stored with the access standard so a later reviewer can see how the current rule was tested."
      },
      {
        "heading": "What the report should not claim",
        "body": "The report should not say that an account is secure or that a permission was misused. It observes whether the access record supports the current role and whether a reviewer can explain the need. An unused permission may still be justified for occasional work, and a used permission may lack a documented reason. The report should distinguish access governance from security testing and should not be used as evidence that a control is effective.\n\nIt also should not present a small team sample as a firm-wide access rate. If the review covered one office or one support group, say so. A later review can expand the frame, but it should treat the first result as a baseline rather than a benchmark. The report should say which teams and systems were in scope."
      }
    ],
    "sources": [
      {
        "name": "NIST Cybersecurity Framework 2.0",
        "url": "https://www.nist.gov/cyberframework"
      },
      {
        "name": "NIST SP 800-207 — Zero Trust Architecture",
        "url": "https://csrc.nist.gov/pubs/sp/800/207/final"
      },
      {
        "name": "American Bar Association — Law Practice Resources",
        "url": "https://www.americanbar.org/groups/law_practice/resources/"
      },
      {
        "name": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/"
      },
      {
        "name": "Cybersecurity and Infrastructure Security Agency",
        "url": "https://www.cisa.gov/"
      }
    ],
    "relatedSlugs": [
      "legalservicesoffshore-intake-completeness-study",
      "legalservicesoffshore-matter-handoff-evidence-study",
      "legalservicesoffshore-privilege-log-reviewer-agreement-study"
    ],
    "thumbnail": "/thumbnails/november-03/legalservicesoffshore-access-recertification-patterns-study.png"
  }
];

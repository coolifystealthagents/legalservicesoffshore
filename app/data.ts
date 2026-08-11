export const site = {
  "domain": "LegalServicesOffshore.com",
  "slug": "legalservicesoffshore",
  "brand": "Legal Services Offshore",
  "primary": "legal services offshore",
  "audience": "law firms and legal teams outsourcing support work safely",
  "angle": "intake, document prep, billing support, research, and admin with review gates",
  "style": "Legal case-file editorial",
  "dark": "#26160b",
  "color": "#9a3412",
  "accent": "#1e3a8a",
  "heroImage": "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80",
  "serviceImage": "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=80",
  "alt": "legal assistant working with documents in law office",
  "badge": "Legal ops"
} as const;
export const services = [
  {
    slug: 'operations-support',
    title: 'Legal operations support',
    desc: 'Offshore legal operations support for matter updates, deadline tracking, intake routing, and attorney-reviewed handoffs.',
  },
  {
    slug: 'customer-support',
    title: 'Legal client intake support',
    desc: 'Remote intake support for law firms that need faster call notes, lead routing, appointment follow-up, and clear escalation rules.',
  },
  {
    slug: 'admin-support',
    title: 'Legal admin support',
    desc: 'Offshore legal admin help for document prep, billing support, calendar upkeep, records cleanup, and task lists your team can review.',
  },
  {
    slug: 'reporting-and-qa',
    title: 'Legal reporting and QA',
    desc: 'Weekly offshore staff reporting, sample checks, scorecards, and issue logs built for legal teams that need proof of work.',
  },
] as const;

export const serviceDetails = {
  'operations-support': {
    bestTasks: ['Matter status updates from approved fields', 'Deadline reminders and calendar checks', 'New matter setup checklists', 'Vendor, courier, and filing follow-up'],
    guardrails: ['Attorneys approve legal judgment calls', 'Use least-access permissions in practice tools', 'Keep a daily issue log for missing facts'],
    firstWeek: ['Give three clean matter examples', 'Set the escalation list by matter type', 'Review the first 20 updates before widening scope'],
    faqs: [
      { question: 'Can offshore staff manage legal operations without making legal decisions?', answer: 'Yes, if the role is limited to admin steps, status tracking, and prepared checklists. Attorney review should stay in place for legal judgment, filings, and client advice.' },
      { question: 'What should a firm prepare first?', answer: 'Start with matter types, tool access rules, sample updates, deadline rules, and the person who approves exceptions during the pilot.' },
    ],
  },
  'customer-support': {
    bestTasks: ['New lead intake notes', 'Appointment reminders', 'Client status call summaries', 'Routing urgent messages to the right owner'],
    guardrails: ['Use approved scripts for intake calls', 'Do not promise case outcomes or legal advice', 'Escalate angry, urgent, or sensitive calls fast'],
    firstWeek: ['Load approved call scripts', 'Shadow real intake calls', 'Score the first 25 notes for accuracy and tone'],
    faqs: [
      { question: 'Can offshore intake staff talk to prospective clients?', answer: 'They can collect facts, book calls, and route messages when they use approved scripts. They should not give legal advice or promise results.' },
      { question: 'How do you keep intake quality visible?', answer: 'Use a short scorecard for name, contact details, matter type, urgency, next step, and escalation notes. Review samples daily during the pilot.' },
    ],
  },
  'admin-support': {
    bestTasks: ['Document formatting from templates', 'Billing and time-entry cleanup', 'Calendar and inbox triage', 'Records naming and folder cleanup'],
    guardrails: ['Protect confidential files with role-based access', 'Keep template changes under firm review', 'Separate prep work from legal review'],
    firstWeek: ['Pick one document type', 'Share naming rules and sample folders', 'Check every prepared file before client use'],
    faqs: [
      { question: 'What legal admin work is safest to outsource first?', answer: 'Start with repeatable prep work: formatting, folder cleanup, calendar upkeep, billing support, and document checklists tied to firm templates.' },
      { question: 'Should offshore admins access every system?', answer: 'No. Start with the few systems needed for the pilot, use separate accounts, and expand access only after quality and security checks are working.' },
    ],
  },
  'reporting-and-qa': {
    bestTasks: ['Weekly output scorecards', 'Sample review logs', 'Turnaround tracking', 'Missed-item and rework reports'],
    guardrails: ['Review work samples along with totals', 'Track rework reasons in plain language', 'Keep client-facing quality decisions with the firm'],
    firstWeek: ['Choose five scorecard fields', 'Review work samples on days two and five', 'Decide what work can move from daily to weekly review'],
    faqs: [
      { question: 'What should a legal offshore scorecard include?', answer: 'Track volume, accuracy, turnaround time, missing details, rework reasons, and escalation speed. Keep it short enough that managers will use it.' },
      { question: 'When can review become weekly instead of daily?', answer: 'Move to weekly review after the offshore staff member shows steady accuracy on the same task type and exceptions are being escalated correctly.' },
    ],
  },
} as const;
const blogPostsSource = [
  {
    slug: 'offshore-legal-assistant-philippines-data-security-plan',
    title: 'Offshore legal assistant Philippines: a data security plan for law firms',
    excerpt: 'Set the task boundary, access rules, review steps, and incident handoff before a Philippines-based legal assistant opens a client file.',
    minutes: 11,
  },
  { slug: 'offshore-legal-intake-support-workflow', title: 'How to scope offshore legal intake support for a law firm', excerpt: 'Turn intake notes, call routing, follow-up, and escalation into one reviewable support workflow.', minutes: 8 },
  { slug: 'legal-admin-tasks-to-outsource-first', title: 'Legal admin tasks to outsource first', excerpt: 'Use repeatable document, calendar, billing, and records work to define a careful first support lane.', minutes: 7 },
  { slug: 'offshore-legal-operations-support-checklist', title: 'Offshore legal operations support checklist', excerpt: 'Set owners, inputs, deadlines, permissions, and review points before matter administration moves to a remote team.', minutes: 9 },
  { slug: 'legal-document-prep-offshore-workflow', title: 'A safe workflow for offshore legal document preparation', excerpt: 'Separate formatting and checklist work from legal substance with templates and a named approval gate.', minutes: 8 },
  { slug: 'law-firm-offshore-support-access-controls', title: 'Access controls for offshore law firm support', excerpt: 'Start with individual accounts, narrow permissions, and a simple process for changing or removing access.', minutes: 8 },
  { slug: 'legal-client-intake-virtual-assistant-scope', title: 'Legal client intake virtual assistant scope guide', excerpt: 'Define what an intake assistant can collect, record, schedule, and escalate without giving legal advice.', minutes: 7 },
  { slug: 'offshore-legal-billing-support-process', title: 'How to scope offshore legal billing support', excerpt: 'Build a billing cleanup process that improves completeness while leaving write-offs and client decisions with the firm.', minutes: 7 },
  { slug: 'legal-matter-status-updates-outsourcing', title: 'Outsourcing legal matter status updates', excerpt: 'Create a repeatable status process from approved fields, open tasks, deadlines, and exception notes.', minutes: 8 },
  { slug: 'offshore-legal-support-quality-scorecard', title: 'A quality scorecard for offshore legal support', excerpt: 'Track accuracy, missing details, turnaround, rework, and escalation without turning the scorecard into busywork.', minutes: 8 },
  { slug: 'law-firm-remote-support-first-week-plan', title: 'The first week plan for a remote legal support role', excerpt: 'Use a narrow task, redacted examples, limited access, daily review, and a written stop rule.', minutes: 7 },
  { slug: 'offshore-legal-research-admin-boundaries', title: 'Where offshore legal research administration should stop', excerpt: 'Separate source gathering and organization from legal analysis, conclusions, and advice.', minutes: 8 },
  { slug: 'law-firm-calendar-deadline-support', title: 'Calendar and deadline support for law firms', excerpt: 'Define how a support role can enter approved dates, flag gaps, and escalate uncertainty to the firm.', minutes: 7 },
  { slug: 'offshore-legal-records-cleanup-guide', title: 'A controlled approach to offshore legal records cleanup', excerpt: 'Use naming rules, folder examples, sampling, and access limits to improve records without broad file exposure.', minutes: 7 },
  { slug: 'legal-support-provider-interview-questions', title: 'Questions to ask an offshore legal support provider', excerpt: 'Compare supervision, replacement, access, quality reporting, and escalation using one written workflow.', minutes: 8 },
  { slug: 'offshore-legal-support-role-brief-template', title: 'What belongs in an offshore legal support role brief', excerpt: 'Describe the work, tools, schedule, output, reviewer, quality bar, and decisions reserved for counsel.', minutes: 7 },
  { slug: 'law-firm-offshore-support-communication-rhythm', title: 'Communication rhythms for offshore legal support teams', excerpt: 'Set a practical cadence for queues, questions, urgent items, review notes, and weekly improvements.', minutes: 7 },
  { slug: 'legal-support-handoff-and-escalation-rules', title: 'Handoff and escalation rules for legal support work', excerpt: 'Make unusual facts, unclear instructions, sensitive files, and legal judgment calls easy to pause and route.', minutes: 8 },
  { slug: 'offshore-legal-admin-pilot-success-measures', title: 'How to measure an offshore legal admin pilot', excerpt: 'Choose a small set of measures that show quality, speed, rework, access discipline, and manager effort.', minutes: 7 },
  { slug: 'legal-support-role-access-review-checklist', title: 'Legal support access review checklist', excerpt: 'Review accounts, folders, permissions, open tasks, and removal steps as the role changes over time.', minutes: 7 },
  { slug: 'offshore-legal-conflict-check-intake-workflow', title: 'Offshore legal conflict-check intake workflow', excerpt: 'Organize conflict-check facts and missing information without turning support staff into the decision maker.', minutes: 8 },
  { slug: 'law-firm-email-triage-offshore-support', title: 'Law firm email triage with offshore support', excerpt: 'Create a queue, priority labels, and escalation rules for inbox support while attorneys keep legal judgment.', minutes: 7 },
  { slug: 'offshore-legal-case-opening-checklist', title: 'Offshore legal case-opening checklist', excerpt: 'Turn an approved matter-opening request into a consistent checklist for names, folders, dates, and reviewers.', minutes: 8 },
  { slug: 'legal-support-document-naming-standard', title: 'Document naming standards for offshore legal support', excerpt: 'Use examples, version rules, and sampling to make matter files easier to find and safer to hand off.', minutes: 7 },
  { slug: 'offshore-legal-discovery-administration-scope', title: 'How to scope offshore discovery administration', excerpt: 'Separate collection logistics, file organization, and status tracking from privilege and legal analysis.', minutes: 9 },
  { slug: 'law-firm-client-portal-support-workflow', title: 'Law firm client portal support workflow', excerpt: 'Define what a support role can upload, label, acknowledge, and escalate in a client portal.', minutes: 7 },
  { slug: 'offshore-legal-transcription-quality-process', title: 'A quality process for offshore legal transcription', excerpt: 'Set source-file checks, formatting rules, review samples, and a clear path for unclear audio.', minutes: 7 },
  { slug: 'legal-calendar-maintenance-support-role', title: 'Legal calendar maintenance support role', excerpt: 'Keep approved dates and reminders organized while deadline interpretation stays with the firm.', minutes: 7 },
  { slug: 'offshore-legal-appointment-scheduling-guide', title: 'Offshore legal appointment scheduling guide', excerpt: 'Build a scheduling lane with approved availability, intake facts, and escalation for unusual requests.', minutes: 7 },
  { slug: 'law-firm-time-entry-cleanup-workflow', title: 'Law firm time-entry cleanup workflow', excerpt: 'Improve completeness and consistency in time entries without giving support staff authority over billing decisions.', minutes: 7 },
  { slug: 'offshore-legal-invoice-preparation-controls', title: 'Controls for offshore legal invoice preparation', excerpt: 'Use approved fields and manager review to prepare invoices while write-offs and client disputes remain with the firm.', minutes: 8 },
  { slug: 'legal-support-matter-closure-checklist', title: 'Legal support matter-closure checklist', excerpt: 'Coordinate approved closing steps, file checks, and access removal without deciding whether a matter is legally complete.', minutes: 8 },
  { slug: 'offshore-legal-template-management-workflow', title: 'Offshore legal template management workflow', excerpt: 'Keep approved templates findable and current while changes to legal substance require firm ownership.', minutes: 7 },
  { slug: 'law-firm-standard-operating-procedure-support', title: 'Support for law firm standard operating procedures', excerpt: 'Turn recurring legal operations work into usable instructions with owners, examples, and exception paths.', minutes: 8 },
  { slug: 'offshore-legal-qa-sampling-plan', title: 'An offshore legal support quality sampling plan', excerpt: 'Choose practical samples that reveal missing details, rework, and escalation quality without slowing every task.', minutes: 8 },
  { slug: 'legal-support-urgent-task-escalation-matrix', title: 'Urgent task escalation matrix for legal support', excerpt: 'Make urgency visible with response windows, owners, and stop rules for work that may affect a client or deadline.', minutes: 8 },
  { slug: 'offshore-legal-knowledge-base-maintenance', title: 'Maintaining a law firm knowledge base offshore', excerpt: 'Organize approved process notes and point uncertain legal questions back to the firm.', minutes: 7 },
  { slug: 'law-firm-offshore-support-training-records', title: 'Training records for offshore law firm support', excerpt: 'Track task sign-off, access training, sample reviews, and changes to the written workflow.', minutes: 7 },
  { slug: 'offshore-legal-staff-holiday-coverage-plan', title: 'Holiday coverage planning for offshore legal support', excerpt: 'Document queue ownership, handoffs, escalation contacts, and safe limits before coverage begins.', minutes: 7 },
  { slug: 'legal-support-backlog-reduction-workflow', title: 'A backlog reduction workflow for legal support', excerpt: 'Sort aging tasks by approved priority and status while keeping legal urgency decisions with the firm.', minutes: 8 },
  { slug: 'offshore-legal-file-audit-support', title: 'Offshore support for a legal file audit', excerpt: 'Use a defined checklist to find missing fields and documents without making privilege or compliance conclusions.', minutes: 8 },
  { slug: 'law-firm-offshore-support-change-control', title: 'Change control for offshore legal support workflows', excerpt: 'Record who changed a process, why it changed, and how the team will check the next outputs.', minutes: 7 },
  { slug: 'offshore-legal-support-manager-dashboard', title: 'A manager dashboard for offshore legal support', excerpt: 'Combine queue health, quality samples, rework, and open exceptions into a useful weekly review.', minutes: 8 },
  { slug: 'legal-support-offshore-performance-review', title: 'Offshore legal support performance review guide', excerpt: 'Run a fair review using agreed outputs, quality samples, coaching notes, and the role boundary.', minutes: 8 },
  { slug: 'offshore-legal-virtual-receptionist-intake', title: 'Offshore legal virtual receptionist intake workflow', excerpt: 'Design a careful receptionist lane for calls, facts, appointments, and fast escalation to the firm.', minutes: 8, published: '2026-08-10' },
  { slug: 'law-firm-offshore-support-service-levels', title: 'Service levels for offshore law firm support', excerpt: 'Set practical response windows and ownership rules without promising outcomes a support role cannot control.', minutes: 7, published: '2026-08-10' },
  { slug: 'offshore-legal-support-confidentiality-checklist', title: 'Confidentiality checklist for offshore legal support', excerpt: 'Turn confidentiality expectations into access, handling, communication, and review steps a team can follow.', minutes: 8, published: '2026-08-10' },
  { slug: 'legal-offshore-support-work-queue-design', title: 'How to design an offshore legal support work queue', excerpt: 'Build a visible queue with inputs, priority labels, owners, due dates, and exception paths.', minutes: 8, published: '2026-08-10' },
  { slug: 'offshore-legal-support-client-communications', title: 'Client communication boundaries for offshore legal support', excerpt: 'Define what support staff may acknowledge, collect, schedule, and route while attorneys retain advice and promises.', minutes: 8, published: '2026-08-10' },
  { slug: 'law-firm-offshore-support-document-review-prep', title: 'Document review preparation with offshore legal support', excerpt: 'Organize files, labels, and checklists before attorney review while keeping privilege and conclusions with counsel.', minutes: 9, published: '2026-08-10' },
  { slug: 'offshore-legal-support-matter-intake-form', title: 'An offshore legal matter intake form that works', excerpt: 'Capture the facts, tools, review owner, and escalation rules needed to start a support role safely.', minutes: 7, published: '2026-08-10' },
  { slug: 'legal-support-offshore-attorney-review-gates', title: 'Attorney review gates for offshore legal support', excerpt: 'Place review points where factual preparation becomes legal judgment, client communication, or final release.', minutes: 8, published: '2026-08-10' },
  { slug: 'offshore-legal-support-work-sample-test', title: 'How to build an offshore legal support work sample test', excerpt: 'Use redacted examples and a short scorecard to test accuracy, judgment boundaries, and escalation behavior.', minutes: 8, published: '2026-08-10' },
  { slug: 'law-firm-offshore-support-data-retention', title: 'Data retention planning for offshore law firm support', excerpt: 'Document what the role stores, where it lives, who owns retention, and how access ends.', minutes: 8, published: '2026-08-10' },
  { slug: 'offshore-legal-support-practice-area-pilot', title: 'Choosing a practice area for an offshore legal support pilot', excerpt: 'Choose a repeatable first lane by weighing volume, examples, review capacity, sensitivity, and measurable outcomes.', minutes: 8, published: '2026-08-10' },
  { slug: 'legal-offshore-support-holiday-handover', title: 'A holiday handover plan for offshore legal support', excerpt: 'Keep queues, contacts, urgent items, and approval boundaries clear when normal coverage changes.', minutes: 7, published: '2026-08-10' },
  { slug: 'offshore-legal-support-error-log', title: 'How to use an offshore legal support error log', excerpt: 'Make recurring misses visible, assign fixes, and separate coaching issues from process defects.', minutes: 7, published: '2026-08-10' },
  { slug: 'law-firm-offshore-support-weekly-report', title: 'What belongs in a weekly offshore legal support report', excerpt: 'Report output, quality samples, open exceptions, rework, and decisions needed from the firm.', minutes: 7, published: '2026-08-10' },
  { slug: 'offshore-legal-support-access-offboarding', title: 'Offboarding access for offshore legal support roles', excerpt: 'Close accounts, transfer work, preserve required records, and confirm that shared credentials are not left behind.', minutes: 8, published: '2026-08-10' },
  { slug: 'legal-support-offshore-call-escalation', title: 'Call escalation rules for offshore legal support', excerpt: 'Give intake and receptionist roles simple signals for urgency, sensitivity, complaints, and attorney review.', minutes: 7, published: '2026-08-10' },
  { slug: 'offshore-legal-support-workflow-documentation', title: 'Documenting an offshore legal support workflow', excerpt: 'Write instructions around inputs, actions, examples, stop rules, reviewers, and a clear done state.', minutes: 8, published: '2026-08-10' },
  { slug: 'law-firm-offshore-support-capacity-planning', title: 'Capacity planning for offshore law firm support', excerpt: 'Match queue volume and review capacity before adding tasks, hours, or matters to a remote role.', minutes: 8, published: '2026-08-10' },
  { slug: 'offshore-legal-support-quality-calibration', title: 'Quality calibration for offshore legal support teams', excerpt: 'Use shared examples and short review sessions to align the worker, manager, and firm quality bar.', minutes: 7, published: '2026-08-10' },
  { slug: 'legal-offshore-support-vendor-transition', title: 'Transitioning legal support work to an offshore team', excerpt: 'Move one workflow with an inventory, shadow period, controlled access, and an explicit rollback plan.', minutes: 9, published: '2026-08-10' },
  { slug: 'offshore-legal-support-manager-playbook', title: 'A manager playbook for offshore legal support', excerpt: 'Create a repeatable rhythm for assigning work, reviewing samples, coaching, and escalating exceptions.', minutes: 8, published: '2026-08-10' },
  { slug: 'law-firm-offshore-support-risk-register', title: 'A risk register for offshore legal support', excerpt: 'Track access, quality, deadline, communication, and continuity risks with owners and next actions.', minutes: 8, published: '2026-08-10' },
] as const;

export const blogPosts = blogPostsSource
  .sort((a, b) => Number(Boolean(b.published)) - Number(Boolean(a.published)));

export const blogDetails = {
  'legal-services-offshore-planning': {
    answer: 'Write the role around a real queue of work, not a broad job title. Name the inputs, expected output, access needed, review owner, and matters that must go straight to an attorney.',
    prepareTitle: 'Write the role file',
    prepare: ['Three recent examples of finished work', 'The systems and folders needed for the first task', 'A list of decisions reserved for attorneys', 'The person who reviews early work and handles exceptions'],
    questionsTitle: 'Check the scope before hiring',
    questions: ['Can a new team member follow the task from the examples alone?', 'Does each task have a clear done state?', 'Who answers questions when a matter falls outside the example?', 'Which access can wait until after the pilot?'],
  },
  'legal-services-offshore-tasks-to-outsource': {
    answer: 'Begin with frequent, low-judgment work such as document formatting, intake notes, calendar checks, billing cleanup, and matter status updates from approved fields. Keep legal advice and case strategy with counsel.',
    prepareTitle: 'Good signs for a first task',
    prepare: ['The task happens often enough to practice', 'A clean finished example already exists', 'Errors can be found before the work reaches a client', 'The firm can limit access to only the files and tools required'],
    questionsTitle: 'Tasks to hold back',
    questions: ['Does the task require legal judgment?', 'Could a mistake change a filing or client promise?', 'Is the process still changing every week?', 'Would the worker need broad system access on day one?'],
  },
  'legal-services-offshore-provider-questions': {
    answer: 'Ask the provider to explain who screens the worker, who supervises day-to-day work, how account access is handled, and how the firm can replace a poor fit. A useful answer names the person and the process.',
    prepareTitle: 'Questions for the provider call',
    prepare: ['Who checks legal support experience before a candidate reaches us?', 'How do you handle attendance, coaching, and replacement requests?', 'Can each worker use an individual account with limited permissions?', 'Who contacts us when a task or instruction is unclear?'],
    questionsTitle: 'Listen for a concrete answer',
    questions: ['Does the answer name an owner?', 'Does it explain what the firm must still manage?', 'Can the provider show a sample report without exposing client data?', 'Are security and replacement terms written in the agreement?'],
  },
  'legal-services-offshore-onboarding-checklist': {
    answer: 'Keep the first week narrow. Teach one task with real examples, open only the access that task needs, review every early output, and write down the questions that the original instructions missed.',
    prepareTitle: 'Before the first login',
    prepare: ['Create a separate user account with limited permissions', 'Remove client details from training examples when possible', 'Name the attorney or manager who approves exceptions', 'Choose one scorecard for accuracy, missing details, and turnaround'],
    questionsTitle: 'End-of-week review',
    questions: ['Which instructions caused the most questions?', 'What errors appeared more than once?', 'Did urgent items reach the right person quickly?', 'Is the first task steady enough to add another one?'],
  },
} as const;

export const staffingOffer = {
  partner: 'the staffing team',
  included: [
    'turn the firm\'s task list into a role with clear limits and review points',
    'match candidates to the work, schedule, practice tools, and communication needs',
    'set up sample work, a short scorecard, and limited tool access for the pilot',
    'give the firm a named contact for attendance, quality, and replacement questions',
  ],
} as const;

export const leadQuestions = [
  'Which legal admin task is taking the most time each week?',
  'Which practice tools, inboxes, phones, or file systems will the person use?',
  'What hours, time zone, and response time does the firm need?',
  'Who will review work during the first two weeks?',
  'Which decisions must always go to an attorney or firm manager?',
] as const;

export const staffingProcess = [
  { step: '1', title: 'Define the role', body: 'Turn the current task list into one role with a clear output, tool list, limits, and first-week checks.' },
  { step: '2', title: 'Review candidates', body: 'The staffing team matches candidates to the work, schedule, practice tools, and communication needs.' },
  { step: '3', title: 'Start with one lane', body: 'Use sample work, limited access, daily review, and a short scorecard while the new hire learns the task.' },
  { step: '4', title: 'Add work carefully', body: 'Add another task only after the first one is accurate and the worker sends exceptions to the right person.' },
] as const;

export const staffingFitNote = 'The right setup depends on the task, schedule, practice tools, access limits, and review owner. Share those details so the staffing team can map the role.';

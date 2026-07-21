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
export const blogPosts = [
  {
    slug: 'legal-services-offshore-planning',
    title: 'How to plan an offshore legal support role',
    excerpt: 'Define the work, access limits, review owner, and first-week checks before you start hiring.',
    minutes: 6,
  },
  {
    slug: 'legal-services-offshore-tasks-to-outsource',
    title: 'Which legal support tasks should you outsource first?',
    excerpt: 'Start with repeatable admin work that has a clean example and a clear approval point.',
    minutes: 7,
  },
  {
    slug: 'legal-services-offshore-provider-questions',
    title: 'Questions to ask an offshore legal support provider',
    excerpt: 'Ask who screens staff, how access is controlled, and what happens when work needs correction.',
    minutes: 8,
  },
  {
    slug: 'legal-services-offshore-onboarding-checklist',
    title: 'First-week checklist for offshore legal support',
    excerpt: 'Set up sample files, limited access, escalation rules, and early work reviews before adding more tasks.',
    minutes: 9,
  },
] as const;

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

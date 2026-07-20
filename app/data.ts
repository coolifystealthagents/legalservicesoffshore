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
    "slug": "legal-services-offshore-planning",
    "title": "Legal Services Offshore: What does it plan?",
    "excerpt": "A plain-English guide to staffing details, scope, and hidden planning.",
    "minutes": 6
  },
  {
    "slug": "legal-services-offshore-tasks-to-outsource",
    "title": "Legal Services Offshore: What tasks should you outsource first?",
    "excerpt": "Start with recurring work that has examples and clear review rules.",
    "minutes": 7
  },
  {
    "slug": "legal-services-offshore-provider-questions",
    "title": "Legal Services Offshore: Questions to ask before hiring",
    "excerpt": "Use these questions before you sign with a provider or freelancer.",
    "minutes": 8
  },
  {
    "slug": "legal-services-offshore-onboarding-checklist",
    "title": "Legal Services Offshore: First week onboarding checklist",
    "excerpt": "A simple checklist for tools, SOPs, calls, QA, and reporting.",
    "minutes": 9
  }
] as const;
export const stats = [{label:'Typical savings target',value:'30-60%',note:'depends on role, management, and local hiring plan'},{label:'Best pilot length',value:'14 days',note:'enough time to test quality before scaling'},{label:'Start with',value:'5-10 tasks',note:'clear recurring tasks beat vague job descriptions'}] as const;

export const stealthOffer = {
  partner: 'Stealth Agents',
  promise: 'Get a managed offshore staffing plan built around the work you need removed from your plate.',
  fit: [
    'business owners who need reliable remote staff but do not want to screen alone',
    'teams that want trained support, backup coverage, and a clear manager path',
    'companies that need help with admin, operations, customer support, calls, bookkeeping, development, or marketing work',
  ],
  included: [
    'role planning call to turn your task list into a clear staffing scope',
    'candidate matching based on skills, schedule, tools, and communication needs',
    'onboarding guidance for SOPs, scorecards, reporting, and safe tool access',
    'managed support so quality, attendance, and replacement questions do not sit only on the owner',
  ],
  proof: [
    'clear task scope before hiring',
    'weekly reporting rhythm',
    'named accountability and escalation path',
    'simple handoff plan for tools, SOPs, and quality checks',
  ],
} as const;

export const leadQuestions = [
  'What work do you want off your plate first?',
  'Which tools, inboxes, phones, CRMs, or systems will the staff member use?',
  'What hours, time zone, and response time do you need?',
  'Who checks quality during the first two weeks?',
  'What should the staff member never decide without approval?',
] as const;

export const staffingProcess = [
  { step: '1', title: 'Map the role', body: 'We turn messy tasks into one clear role with outcomes, tools, limits, and a first-week checklist.' },
  { step: '2', title: 'Match the staff', body: 'Stealth Agents can help match remote staff to the work, schedule, communication style, and skill level you need.' },
  { step: '3', title: 'Launch with control', body: 'Start with SOPs, sample work, limited access, daily review, and a simple scorecard so quality is easy to see.' },
  { step: '4', title: 'Scale what works', body: 'Once the first tasks are stable, add more work, better reporting, and stronger delegation without guessing.' },
] as const;

export const staffingFitNote = 'Every staffing plan depends on role scope, schedule, skills, tools, and management needs. Send the role details and Stealth Agents can guide the best fit.';

export const richArticle = {
  slug: 'offshore-legal-assistant-philippines-data-security-plan',
  keyword: 'offshore legal assistant Philippines',
  revision: 'lso-20260725-security-plan',
  published: '2026-07-25',
  modified: '2026-07-25',
  faqs: [
    {
      question: 'Can a Philippines-based legal assistant open client files?',
      answer: 'Yes, with a named account, assigned matters, and early sample checks. The firm still approves legal advice, filings, and unusual disclosures.',
    },
    {
      question: 'Should a legal assistant use a shared firm password?',
      answer: 'No. Named accounts are easier to remove and give the firm a useful activity record.',
    },
    {
      question: 'What work is a safe first assignment?',
      answer: 'Start with one repeatable task and a redacted example. Require firm review before the work reaches a client, court, or third party.',
    },
    {
      question: 'Who should handle a suspected security event?',
      answer: 'The assistant should stop the affected task and report the facts to the named firm contact. The firm decides whether to lock an account, preserve records, notify a client, or follow an incident plan.',
    },
  ],
  sources: [
    {
      name: 'Verizon, 2024 Data Breach Investigations Report',
      url: 'https://www.verizon.com/business/resources/reports/2024-dbir-data-breach-investigations-report.pdf',
      note: 'Incident, breach, human-element, and vulnerability findings used in the chart and security discussion.',
    },
    {
      name: 'FBI Internet Crime Complaint Center, 2024 IC3 Annual Report',
      url: 'https://www.ic3.gov/AnnualReport/Reports/2024_IC3Report.pdf',
      note: 'Complaint totals, annual change, ransomware trend, and the quoted reporting guidance.',
    },
    {
      name: 'National Privacy Commission of the Philippines, Data Privacy Act of 2012',
      url: 'https://privacy.gov.ph/data-privacy-act/',
      note: 'Philippine privacy-law text and data-protection context.',
    },
    {
      name: 'NIST, Cybersecurity Framework 2.0',
      url: 'https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf',
      note: 'Govern, identify, protect, detect, respond, and recover functions used to organize the plan.',
    },
  ],
} as const;

export interface UnitMeta {
  id: 1 | 2 | 3 | 4 | 5;
  title: string;
  classes: number;
  description: string;
  topics: string[];
  examWeightage: string;
  topExamThemes: string[];
}

export const BOM_UNITS: UnitMeta[] = [
  {
    id: 1,
    title: 'Unit 1: Introduction & Business Formats',
    classes: 16,
    description: 'Foundations of business enterprise, starting factors, organizational forms, modern e-commerce formats, and managerial competencies.',
    topics: [
      'Nature and Purpose of Business',
      'Factors to be Considered for Starting a Business',
      'Forms of Business Organisation (Sole Proprietorship, Partnership, Company, Co-operative)',
      'Modern Business Formats: Brick & Mortar, Brick & Click, E-commerce, Franchising, Outsourcing',
      'Nature and Functions of Management (POSDCORB overview)',
      'Managerial Competencies (Technical, Human, Conceptual skills)',
    ],
    examWeightage: 'Heavy (Usually 15–20 Marks in Finals & Sessionals)',
    topExamThemes: [
      'Factors for starting a business (10M)',
      'Brick & Click vs. Brick & Mortar (5M/10M)',
      'Franchising benefits & risks (2M/5M/10M)',
      'Managerial competencies (Robert Katz model) (5M)',
    ],
  },
  {
    id: 2,
    title: 'Unit 2: Business Environment & CSR',
    classes: 8,
    description: 'Concentric environmental layers (Micro, Meso, Macro PESTLE, International) and Corporate Social Responsibility with ethical governance.',
    topics: [
      'Meaning and Significance of Business Environment',
      'Layers: Micro / Immediate Environment',
      'Layers: Meso / Intermediate Environment',
      'Layers: Macro Environment (PESTLE)',
      'Layers: International / Global Environment',
      'Business Ethics: Principles and Importance',
      'Corporate Social Responsibility (CSR): Archie Carroll\'s 4 Pillars & Stakeholders',
    ],
    examWeightage: 'High (10–15 Marks: Frequent 10M long questions)',
    topExamThemes: [
      'Difference between Micro, Meso, and Macro environment (10M)',
      'Archie Carroll\'s 4 Pillars of CSR (10M)',
      'Social responsibilities toward different interest groups (5M/10M)',
      'Features of Meso environment (2M)',
    ],
  },
  {
    id: 3,
    title: 'Unit 3: Planning and Organizing',
    classes: 12,
    description: 'Strategic planning, decision-making rationales, delegation principles, centralization vs decentralization, and structural organograms.',
    topics: [
      'Strategic Planning (Vision, Mission, Objectives, SWOT)',
      'Decision-Making Process & Bounded Rationality (Herbert Simon)',
      'Decision-Making Techniques (Quantitative & Qualitative)',
      'Organizing: Formal vs Informal Organisations',
      'Centralisation vs Decentralisation',
      'Delegation of Authority: Authority, Responsibility, Accountability (ARA)',
      'Organisational Structures & Organograms (Matrix, Virtual, Divisional, Project)',
    ],
    examWeightage: 'Critical Core (15–20 Marks every single year)',
    topExamThemes: [
      'Steps in Decision-Making Process (Repeated 2023, 2024, 2025!) (5M)',
      'Matrix Organisation & Dual Accountability (2M/5M)',
      'Virtual Organisation (Repeated 2023, 2024, 2025!) (2M)',
      'Centralisation vs Decentralisation & Delegation Factors (10M)',
      'Formal vs Informal Organisation (5M)',
    ],
  },
  {
    id: 4,
    title: 'Unit 4: Directing and Controlling',
    classes: 12,
    description: 'Motivation processes & theories, leadership traits and styles, IT & social media communication dynamics, and controlling feedback loops.',
    topics: [
      'Motivation: Meaning, Importance, Financial vs Non-Financial Motivators',
      'Motivation Theories: Maslow\'s Hierarchy, Douglas McGregor Theory X & Y, Herzberg',
      'Leadership: Meaning, Traits, and Styles (Autocratic, Democratic, Laissez-Faire, Charismatic)',
      'Communication Process & Digital Directions: Role of IT and Social Media',
      'Controlling: Principles, Process, and Measures (Zero-Base Budgeting)',
      'Relationship between Planning and Controlling',
    ],
    examWeightage: 'Critical Core (15–20 Marks every single year)',
    topExamThemes: [
      'Relationship between Planning and Controlling (Repeated 2023 & 2024!) (2M/5M)',
      'Leadership Styles & Traits (Repeated 2023, 2024, 2025!) (5M/10M)',
      'Factors affecting motivation & Maslow/McGregor theories (5M/10M)',
      'Role of IT & Social Media in communication (5M/10M)',
    ],
  },
  {
    id: 5,
    title: 'Unit 5: Contemporary Issues in Management',
    classes: 12,
    description: 'Modern management frameworks (BPR, Learning Organisation, Six Sigma, SCM) and the future of work (Work-Life balance, Freelancing, WFH, Co-working).',
    topics: [
      'Business Process Reengineering (BPR): Radical redesign, 4 keywords, success & failure',
      'Learning Organisation: Peter Senge\'s 5 Disciplines & implementation hurdles',
      'Six Sigma: Bill Smith / Motorola origin, 3.4 DPMO, DMAIC methodology',
      'Supply Chain Management (SCM): Plan, Source, Make, Deliver, Return',
      'Work-Life Balance: Importance in modern corporate environments',
      'Freelancing: Gig economy & types of freelancers',
      'Flexi-time and Work From Home (WFH): Benefits and challenges',
      'Co-sharing / Co-working Spaces: Features & utility for startups',
    ],
    examWeightage: 'High (10–15 Marks in Finals)',
    topExamThemes: [
      'BPR: Concept, Advantages, and Success/Failure factors (5M/10M)',
      'Six Sigma & DMAIC methodology (1M/2M)',
      'Work-Life Balance & Flexi-time schedule (5M/10M)',
      'Co-sharing / Co-working utility (2M)',
    ],
  },
];

export interface MnemonicCard {
  id: string;
  topic: string;
  unit: 1 | 2 | 3 | 4 | 5;
  mnemonic: string;
  mnemonicPhrase: string;
  keys: { letter: string; word: string; meaning: string }[];
  diagramBox?: string;
  simpleExplanation: string;
  examTip: string;
}

export const BOM_MNEMONICS: MnemonicCard[] = [
  {
    id: 'm-start-business',
    topic: 'Factors to Consider When Starting a Business',
    unit: 1,
    mnemonic: 'L - S - F - L - C - P - W',
    mnemonicPhrase: 'Learn Some Facts, Let Cash Pay Workers',
    keys: [
      { letter: 'L', word: 'Line of Business', meaning: 'Choose product/service with proven market demand.' },
      { letter: 'S', word: 'Size of Enterprise', meaning: 'Decide small/medium/large scale based on capital.' },
      { letter: 'F', word: 'Form of Ownership', meaning: 'Pick Sole Proprietor, Partnership, or Joint Stock Company.' },
      { letter: 'L', word: 'Location of Business', meaning: 'Proximity to raw materials, cheap transport, and customers.' },
      { letter: 'C', word: 'Capital Requirement', meaning: 'Plan Fixed Capital (machinery) and Working Capital (daily cash).' },
      { letter: 'P', word: 'Physical Facilities', meaning: 'Buy machines and configure an ergonomic plant layout.' },
      { letter: 'W', word: 'Workforce', meaning: 'Recruit competent, qualified managers and skilled staff.' },
    ],
    simpleExplanation: 'Before opening any business, an entrepreneur must check 7 basic pillars: what to sell, how big to start, legal structure, where to set up, how much cash is needed, factory machines, and who to hire.',
    examTip: 'Frequently asked as a 10-Mark or 5-Mark question. Writing this 7-point list with bold headings guarantees full marks.',
  },
  {
    id: 'm-management-functions',
    topic: 'Five Core Functions of Management',
    unit: 1,
    mnemonic: 'P - O - S - D - C',
    mnemonicPhrase: 'Please Open School During Corona',
    keys: [
      { letter: 'P', word: 'Planning', meaning: 'Thinking before doing; setting goals and future course of action.' },
      { letter: 'O', word: 'Organizing', meaning: 'Grouping activities into departments and assigning duties.' },
      { letter: 'S', word: 'Staffing', meaning: 'Putting the right people in the right jobs (recruiting & training).' },
      { letter: 'D', word: 'Directing', meaning: 'Guiding, motivating, leading, and supervising employees.' },
      { letter: 'C', word: 'Controlling', meaning: 'Checking if actual performance matches plans and fixing gaps.' },
    ],
    diagramBox: `[ Planning ] ──► [ Organizing ] ──► [ Staffing ] ──► [ Directing ] ──► [ Controlling ]
     ▲                                                                     │
     └─────────────────────── Feedback & Audit Loop ───────────────────────┘`,
    simpleExplanation: 'Management is a continuous cycle. You first plan what to do, organize resources, hire staff, direct them to work, and control results against the plan.',
    examTip: 'Mention Henry Fayol and Luther Gulick (POSDCORB) for an extra edge in 5-mark answers.',
  },
  {
    id: 'm-carroll-csr',
    topic: 'Archie Carroll\'s 4 Pillars of Corporate Social Responsibility (CSR)',
    unit: 2,
    mnemonic: 'E - L - E - P',
    mnemonicPhrase: 'Every Leader Earns Profit',
    keys: [
      { letter: 'E', word: 'Economic Duty', meaning: 'The base: Be profitable; produce goods society wants.' },
      { letter: 'L', word: 'Legal Duty', meaning: 'Obey all central/state laws and pay fair taxes on time.' },
      { letter: 'E', word: 'Ethical Duty', meaning: 'Do what is fair and right, even beyond statutory minimums.' },
      { letter: 'P', word: 'Philanthropic Duty', meaning: 'The apex: Voluntary charity, donating to hospitals & education.' },
    ],
    diagramBox: `        ▲
       / \\       4. PHILANTHROPIC (Charity, community upliftment)
      /───\\      3. ETHICAL       (Fairness, no deceit, moral values)
     /─────\\     2. LEGAL         (Obey statutes, play by the rules)
    /───────\\    1. ECONOMIC      (Be profitable — the essential foundation)
   /─────────\\`,
    simpleExplanation: 'Carroll visualized CSR as a pyramid. A company cannot be philanthropic if it is bankrupt; economic profitability is the foundation, followed by following the law, being ethical, and finally giving back to society.',
    examTip: 'Always draw the 4-tier pyramid diagram! Examiners award 10/10 when the diagram is present.',
  },
  {
    id: 'm-macro-pestle',
    topic: 'Macro Business Environment Components',
    unit: 2,
    mnemonic: 'P - E - S - T - L - E',
    mnemonicPhrase: 'PESTLE Analysis Framework',
    keys: [
      { letter: 'P', word: 'Political', meaning: 'Government stability, trade policies, political risk.' },
      { letter: 'E', word: 'Economic', meaning: 'GDP growth, inflation, interest rates, disposable income.' },
      { letter: 'S', word: 'Socio-Cultural', meaning: 'Demographics, consumer lifestyle habits, values.' },
      { letter: 'T', word: 'Technological', meaning: 'Automation, smartphones, artificial intelligence.' },
      { letter: 'L', word: 'Legal', meaning: 'Companies Act, Consumer Protection, Labor laws.' },
      { letter: 'E', word: 'Environmental', meaning: 'Pollution norms, carbon emissions, clean green energy.' },
    ],
    simpleExplanation: 'The macro environment consists of big outside societal forces that affect all companies in the country and cannot be directly controlled by one single firm.',
    examTip: 'Pair this with a distinction between Micro (immediate actors) and Meso (industry associations).',
  },
  {
    id: 'm-decision-steps',
    topic: 'Steps in the Decision-Making Process',
    unit: 3,
    mnemonic: 'I - D - A - E - S - I - F',
    mnemonicPhrase: 'I Decide And Every Step Is Fine',
    keys: [
      { letter: 'I', word: 'Identify Problem', meaning: 'Notice the symptom or gap between expected and actual results.' },
      { letter: 'D', word: 'Diagnose Causes', meaning: 'Dig into root causes rather than treating superficial symptoms.' },
      { letter: 'A', word: 'Alternatives Generation', meaning: 'Brainstorm creative potential solutions.' },
      { letter: 'E', word: 'Evaluate Choices', meaning: 'Weigh each alternative by cost, feasibility, and risk.' },
      { letter: 'S', word: 'Select Best Option', meaning: 'Pick the optimal (or satisficing) course of action.' },
      { letter: 'I', word: 'Implement Choice', meaning: 'Execute the decision with budget and designated staff.' },
      { letter: 'F', word: 'Follow-up / Feedback', meaning: 'Review outcomes and apply corrective adjustments.' },
    ],
    diagramBox: `[1. Identify] ──► [2. Diagnose] ──► [3. Alternatives] ──► [4. Evaluate]
                                                               │
[7. Feedback] ◄── [6. Implement] ◄── [5. Select Best Option] ◄─┘`,
    simpleExplanation: 'Decision-making is a systematic 7-step journey from spotting a problem to testing results after executing the solution.',
    examTip: 'This question appeared in Gauhati University 2023, 2024, AND 2025! Must memorize.',
  },
  {
    id: 'm-delegation-ara',
    topic: 'Three Core Elements of Delegation of Authority',
    unit: 3,
    mnemonic: 'A - R - A',
    mnemonicPhrase: 'Authority, Responsibility, Accountability',
    keys: [
      { letter: 'A', word: 'Authority', meaning: 'Right to make decisions, give orders, and command (Flows DOWN).' },
      { letter: 'R', word: 'Responsibility', meaning: 'Obligation to complete assigned tasks diligently (Flows UP).' },
      { letter: 'A', word: 'Accountability', meaning: 'Ultimate answerability for results (CANNOT be delegated!).' },
    ],
    diagramBox: `1. AUTHORITY      ──► Right to command & allocate funds (Flows DOWNWARD)
2. RESPONSIBILITY ──► Duty of subordinate to perform work (Flows UPWARD)
3. ACCOUNTABILITY ──► Final answerability (CANNOT be passed to another person!)`,
    simpleExplanation: 'You can pass down authority and assign tasks, but you can NEVER pass down accountability. If your assistant makes a mistake, YOU are still answerable to the director.',
    examTip: 'Highlight the "Principle of Absoluteness of Accountability" in your 2-mark or 5-mark answer.',
  },
  {
    id: 'm-maslow-needs',
    topic: 'Maslow\'s Hierarchy of Human Needs',
    unit: 4,
    mnemonic: 'P - S - S - E - S',
    mnemonicPhrase: 'Please Save Some Extra Snacks',
    keys: [
      { letter: 'P', word: 'Physiological', meaning: 'Food, water, shelter, air, basic minimum salary.' },
      { letter: 'S', word: 'Safety & Security', meaning: 'Job tenure, insurance, safe factory conditions.' },
      { letter: 'S', word: 'Social & Belonging', meaning: 'Work friendships, team acceptance, cordial peers.' },
      { letter: 'E', word: 'Esteem & Status', meaning: 'Job titles, public awards, recognition, respect.' },
      { letter: 'S', word: 'Self-Actualization', meaning: 'Reaching one\'s highest creative potential and personal dreams.' },
    ],
    diagramBox: `        ▲
       / \\       5. SELF-ACTUALIZATION (Highest creative potential)
      /───\\      4. ESTEEM NEEDS       (Recognition, status, respect)
     /─────\\     3. SOCIAL / BELONGING (Friendship, team acceptance)
    /───────\\    2. SAFETY & SECURITY  (Job stability, insurance)
   /─────────\\   1. PHYSIOLOGICAL      (Food, shelter, basic salary)
  /───────────\\`,
    simpleExplanation: 'People satisfy primitive needs first. Once you have food and a secure job, you seek friends, then respect/promotions, and finally self-realization.',
    examTip: 'Mention the "Rule of Prepotency": a satisfied need ceases to motivate; only unsatisfied higher needs motivate.',
  },
  {
    id: 'm-six-sigma-dmaic',
    topic: 'Six Sigma DMAIC Quality Improvement Cycle',
    unit: 5,
    mnemonic: 'D - M - A - I - C',
    mnemonicPhrase: 'Define, Measure, Analyze, Improve, Control',
    keys: [
      { letter: 'D', word: 'Define', meaning: 'Define the quality problem and customer requirements.' },
      { letter: 'M', word: 'Measure', meaning: 'Collect data and quantify the current defect rate.' },
      { letter: 'A', word: 'Analyze', meaning: 'Find the root causes of errors (using Ishikawa fishbone diagrams).' },
      { letter: 'I', word: 'Improve', meaning: 'Test and implement targeted process solutions.' },
      { letter: 'C', word: 'Control', meaning: 'Set up control charts and updated SOPs to sustain zero defects.' },
    ],
    diagramBox: `[ DEFINE ] ──► [ MEASURE ] ──► [ ANALYZE ] ──► [ IMPROVE ] ──► [ CONTROL ]`,
    simpleExplanation: 'Six Sigma aims for virtually zero defects: no more than 3.4 defects per million opportunities (99.99966% accuracy).',
    examTip: 'Always name Bill Smith (Motorola, 1986) and Jack Welch (General Electric).',
  },
];

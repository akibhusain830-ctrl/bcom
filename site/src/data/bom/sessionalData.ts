import type { PyqItem } from './pyqs';

export interface SessionalPaper {
  id: 'sessional-a' | 'sessional-b';
  code: string;
  title: string;
  subtitle: string;
  fullMarks: 40;
  timeLimit: '2 Hours';
  unitsCovered: 'Units 1, 2, and 3 Only';
  blueprintTip: string;
  questions: PyqItem[];
}

export const SESSIONAL_SET_A_QUESTIONS: PyqItem[] = [
  // SECTION A: Short Answer Questions (2M × 5 = 10 Marks)
  {
    id: 'sess-a-1',
    year: 'Sessional-A',
    marks: 2,
    unit: 1,
    section: 'Short Answer (2M)',
    question: 'Define Scientific Management and state two of its key techniques.',
    mnemonic: 'F - T (Functional foremanship, Time study)',
    modelAnswer: '**Scientific Management** was defined by F.W. Taylor as: *"Knowing exactly what you want men to do and seeing that they do it in the best and cheapest way."* It replaces unscientific rules of thumb (guesswork) with exact, researched scientific work methods.\n\nTwo Core Techniques:\n1. **Functional Foremanship:** Dividing factory worker supervision into 8 specialized bosses (4 for planning work, 4 for executing work).\n2. **Time Study:** Using a stopwatch to measure the exact standard time a well-trained worker needs to complete a given task.',
    examinerTip: 'Quote F.W. Taylor and list 2 distinct techniques (Functional Foremanship, Time Study) for full 2 marks.'
  },
  {
    id: 'sess-a-2',
    year: 'Sessional-A',
    marks: 2,
    unit: 1,
    section: 'Short Answer (2M)',
    question: 'Explain the concepts of "Perpetual Succession" and "Common Seal" in a Joint Stock Company.',
    mnemonic: 'P - S (Permanent life, Stamp signature)',
    modelAnswer: 'Two core legal characteristics of a Joint Stock Company:\n1. **Perpetual Succession:** A company is created by law and has continuous existence independent of its members. *"Members may come and members may go, but the company goes on forever."* Death, insolvency, or exit of shareholders does not dissolve the company.\n2. **Common Seal:** Being an artificial legal person, a company cannot sign documents by hand. The common seal acts as its official signature affixed to contracts and share certificates by authorized directors.',
    examinerTip: 'State the quote: "Members may come and go, but the company continues forever."'
  },
  {
    id: 'sess-a-3',
    year: 'Sessional-A',
    marks: 2,
    unit: 3,
    section: 'Short Answer (2M)',
    question: 'What are Planning Premises? State one internal and one external premise.',
    mnemonic: 'I - E (Inside budget vs Outside market)',
    modelAnswer: '**Planning Premises** are the future assumptions, forecasts, and anticipated market conditions upon which business plans and strategies are formulated.\n\nTwo Categories of Premises:\n1. **Internal Premises (Controllable):** Assumptions regarding factors within the enterprise, such as available capital budget, machinery capacity, and worker skill levels.\n2. **External Premises (Uncontrollable):** Assumptions regarding external market forces, such as government tax policies, inflation rates, and competitor price moves.',
    examinerTip: 'Distinguish clearly between internal (controllable) and external (uncontrollable) assumptions.'
  },
  {
    id: 'sess-a-4',
    year: 'Sessional-A',
    marks: 2,
    unit: 2,
    section: 'Short Answer (2M)',
    question: 'Define Business Ethics and state two reasons why ethical conduct is essential.',
    mnemonic: 'T - R (Trust, Reputation)',
    modelAnswer: '**Business Ethics** is the set of moral principles, values, and behavioral rules that govern the choices, conduct, and decisions of commercial enterprises in the marketplace, directing managers to do what is right, fair, and just.\n\nWhy Ethical Conduct is Essential:\n1. **Builds Long-Term Consumer Trust:** Customers remain loyal to brands that maintain honesty in pricing, product safety, and fair advertising (e.g., Tata Group).\n2. **Prevents Severe Legal Penalties:** Adhering to ethical norms prevents costly government penalties, consumer court lawsuits, and reputational collapse.',
    corporateExample: 'Tata Group adhering to ethical governance with zero bribery tolerance.',
    examinerTip: 'Give Tata Group as a corporate example of ethical governance.'
  },
  {
    id: 'sess-a-5',
    year: 'Sessional-A',
    marks: 2,
    unit: 3,
    section: 'Short Answer (2M)',
    question: 'What is Management by Objectives (MBO)? State its two core pillars.',
    mnemonic: 'J - R (Joint goal-setting, Results-based review)',
    modelAnswer: '**Management by Objectives (MBO)**, introduced by Peter Drucker in 1954, is a management system where superiors and subordinates jointly identify common corporate targets, define each individual’s responsibilities, and evaluate performance based on actual results achieved.\n\nTwo Core Pillars:\n1. **Joint Goal-Setting:** Managers and workers sit together to agree on clear, realistic, and measurable targets rather than orders being dictated top-down.\n2. **Periodic Results Review:** Employees are evaluated objectively against agreed target results rather than personal supervisor favoritism.',
    examinerTip: 'Name Peter Drucker (1954) and emphasize "Joint Goal-Setting".'
  },

  // SECTION B: Medium Explanations (5M × 2 = 10 Marks — 4 Given with Choice)
  {
    id: 'sess-a-6',
    year: 'Sessional-A',
    marks: 5,
    unit: 1,
    section: 'Analytical (5M)',
    question: 'Explain five key factors governing the choice of an ideal form of business organisation.',
    mnemonic: 'C - L - C - M - F (Capital, Liability, Continuity, Management, Flexibility)',
    diagram: 'Choice of Business Form:\n├── 1. Capital Requirement (Small = Sole Prop, Huge = Joint Stock Co)\n├── 2. Nature of Liability (Unlimited = Sole/Partner, Limited = Company)\n├── 3. Continuity & Stability (Perpetual Company vs Temporary Sole Prop)\n├── 4. Managerial Talent Needed (Simple Solo vs Professional Board)\n└── 5. Secrecy & Flexibility (100% Secret Sole Prop vs Public Disclosures)',
    modelAnswer: '### Introduction\nSelecting the right legal form of business organization is a critical foundational decision. An entrepreneur must evaluate five primary determinant factors:\n\n1. **Capital Requirement:**\n   - Small businesses requiring modest capital (like local bakeries or tailoring shops) operate best as Sole Proprietorships or Partnerships.\n   - Large industrial ventures (like steel mills or airlines) requiring hundreds of crores choose Joint Stock Companies to raise funds from the general public.\n2. **Nature of Liability:**\n   - Sole proprietors and general partners bear **unlimited liability**, meaning personal family assets can be seized to settle business debts.\n   - Investors who wish to shield their personal assets choose a Company format where liability is strictly limited to unpaid share capital.\n3. **Continuity and Stability:**\n   - If permanent, uninterrupted survival is essential, a Joint Stock Company is ideal because it possesses perpetual succession.\n   - Sole proprietorships and partnerships are unstable, dissolving upon the death, illness, or bankruptcy of the owners.\n4. **Managerial Talent & Specialization:**\n   - A single owner cannot master marketing, finance, engineering, and legal affairs simultaneously. Enterprises requiring multi-disciplinary leadership require corporate structures with professional boards.\n5. **Business Secrecy and Legal Formalities:**\n   - Sole proprietorship offers 100% decision flexibility and complete business secrecy without publishing financial accounts.\n   - Companies face heavy government regulation, mandatory public audits, and loss of trade privacy.',
    corporateExample: 'Small local retail stores (Sole Proprietorship) vs Apollo Hospitals Ltd (Joint Stock Company).',
    examinerTip: 'Cover Capital, Liability, Continuity, Management, and Secrecy for full 5 marks.'
  },
  {
    id: 'sess-a-7',
    year: 'Sessional-A',
    marks: 5,
    unit: 1,
    section: 'Analytical (5M)',
    question: 'Distinguish between Henri Fayol’s Administrative Management and F.W. Taylor’s Scientific Management with a comparison matrix.',
    diagram: 'Fayol (Top-Down Administrative Hierarchy) ◄────────► Taylor (Bottom-Up Factory Workshop Speed)',
    modelAnswer: '### Introduction\nHenri Fayol and Frederick Winslow Taylor are the twin founding pillars of classical management thought. While Fayol approached management from the executive boardroom, Taylor focused on the factory floor.\n\n### Comparison Matrix\n\n| Basis of Distinction | Administrative Management (Henri Fayol) | Scientific Management (F.W. Taylor) |\n|---|---|---|\n| **1. Primary Focus** | Overall top-level administration and 14 general principles of office management. | Shop-floor worker efficiency, machine operation, and physical task speed. |\n| **2. Direction of Approach** | **Top-Down:** Starts at top executives and flows downward to workers. | **Bottom-Up:** Starts at worker tools on factory machines and flows upward. |\n| **3. Scope of Applicability**| Universally applicable to all types of enterprises (offices, banks, colleges). | Best suited for manufacturing plants, assembly lines, and factory workshops. |\n| **4. Core Contribution** | Developed 14 Universal Principles and 5 management functions (POSDC). | Developed Scientific Principles (Rules of thumb replaced, Time/Motion study). |\n| **5. Unity of Command** | Strictly insisted that a subordinate must receive orders from **only one boss**. | Rejected rigid unity of command; introduced **Functional Foremanship** with 8 bosses. |\n| **6. Wage Philosophy** | Recommended fair remuneration based on living costs and company capacity. | Recommended **Differential Piece Wage System** (high pay for fast workers, low pay for slow workers). |',
    examinerTip: 'Highlight the difference in Unity of Command (Fayol: strictly 1 boss; Taylor: 8 bosses) for full marks.'
  },
  {
    id: 'sess-a-8',
    year: 'Sessional-A',
    marks: 5,
    unit: 2,
    section: 'Analytical (5M)',
    question: 'Explain Archie Carroll’s Four Pillars of Corporate Social Responsibility (CSR) with a pyramid diagram.',
    mnemonic: 'E - L - E - P (Economic, Legal, Ethical, Philanthropic)',
    diagram: '        ▲\n       / \\       4. PHILANTHROPIC (Voluntary charity, community upliftment)\n      /───\\      3. ETHICAL       (Fairness, moral values, beyond law)\n     /─────\\     2. LEGAL         (Obey statutes, comply with tax rules)\n    /───────\\    1. ECONOMIC      (Be profitable — the essential foundation)\n   /─────────\\',
    modelAnswer: '### Concept of Carroll’s CSR Pyramid\nIn 1991, Professor Archie B. Carroll conceptualized Corporate Social Responsibility as a four-part pyramid framework. He argued that a truly responsible enterprise must satisfy all four layers simultaneously:\n\n1. **Economic Responsibility (The Foundation Tier — "Be Profitable"):**\n   - The primary requirement of any enterprise: produce goods and services society demands, create employment, and generate reasonable profit to ensure commercial survival.\n2. **Legal Responsibility (Second Tier — "Obey the Law"):**\n   - Society requires businesses to play by the legal rules of the economic game. Must obey labor laws, consumer protection acts, pollution standards, and pay statutory taxes.\n3. **Ethical Responsibility (Third Tier — "Be Ethical"):**\n   - Obligation to do what is fair, right, and just, even when not explicitly mandated by written law (e.g., fair vendor payment cycles, avoiding deceptive advertisements).\n4. **Philanthropic Responsibility (The Apex Tier — "Be a Good Corporate Citizen"):**\n   - Voluntary corporate charity: donating corporate funds toward public schools, rural healthcare, disaster relief, and community welfare programs.',
    corporateExample: 'Tata Group fulfilling all four tiers by maintaining profitable steel mills (Economic), complying with environmental laws (Legal), paying fair wages (Ethical), and funding cancer research hospitals (Philanthropic).',
    examinerTip: 'Always draw the 4-tier pyramid diagram! Guarantees 5/5 marks in GU exams.'
  },
  {
    id: 'sess-a-9',
    year: 'Sessional-A',
    marks: 5,
    unit: 3,
    section: 'Analytical (5M)',
    question: 'Explain the limitations of planning in a dynamic business environment and how managers can overcome them.',
    mnemonic: 'R - D - C - T - F (Rigidity, Dynamic change, Cost, Time, False security)',
    modelAnswer: '### Limitations of Planning\nWhile planning is the foundational function of management, it suffers from several practical constraints in volatile markets:\n\n1. **Planning Leads to Rigidity:**\n   - Once formalized, employees follow pre-set schedules blindly. When local market realities change unexpectedly, rigid procedures prevent workers from using personal initiative.\n2. **Inaccuracy in Dynamic Markets:**\n   - Planning relies on forecasts about the future. Rapid technological shifts, sudden inflation spikes, or government policy changes can render forecasts completely wrong.\n3. **Heavy Financial Costs:**\n   - Gathering market intelligence, hiring strategy consultants, and conducting board meetings consumes massive financial expenditure.\n4. **Time-Consuming Delays:**\n   - Debating, writing, and approving elaborate plans takes weeks or months, causing companies to miss sudden lucrative market opportunities.\n5. **False Sense of Security:**\n   - Managers mistakenly believe that having a written plan guarantees business success, leading to operational complacency.\n\n### Measures to Overcome Limitations:\n- **Adopt Contingency Planning:** Prepare flexible alternative courses of action (Plan B and Plan C).\n- **Use Rolling Forecasts:** Continuously update quarterly forecasts rather than clinging to rigid 5-year plans.\n- **Encourage Ground-Level Feedback:** Empower branch managers to adapt procedures to immediate local conditions.',
    examinerTip: 'Explain the dynamic environment and provide Contingency Planning as the practical solution.'
  },

  // SECTION C: High-Weight Essay Questions (10M × 2 = 20 Marks — 4 Given with Choice)
  {
    id: 'sess-a-10',
    year: 'Sessional-A',
    marks: 10,
    unit: 1,
    section: 'Long Essay (10M)',
    question: 'Discuss Henri Fayol’s 14 Principles of Management. Explain the top 7 principles in detail with simple real-world examples and draw the Gang Plank diagram.',
    mnemonic: 'D - A - D - U - U - S - R (Division, Authority, Discipline, Unity of command, Unity of direction, Subordination, Remuneration)',
    diagram: 'FAYOL\'S SCALAR CHAIN & GANG PLANK:\n           A (Top Boss)\n         /   \\\n       B       E\n     /           \\\n   C               F\n /                   \\\nD ◄── GANG PLANK ───► G  (Direct lateral shortcut for emergencies between D & G)',
    modelAnswer: '### Introduction to Henri Fayol\nHenri Fayol (1841–1925), known as the **"Father of Modern Operational Management,"** formulated 14 universal principles of management in his book *General and Industrial Management* to guide executives in running organizations effectively.\n\n---\n\n### Top 7 Core Principles Explained with Real-World Examples\n\n1. **Division of Work (Specialization):**\n   - Divide large complex tasks into smaller specialized jobs. Repeating the same task builds worker speed, accuracy, and operational efficiency.\n   - *Example:* In a bank, separate clerks handle cash deposits, loan underwriting, and customer inquiries.\n2. **Authority and Responsibility:**\n   - Authority is the formal right to give orders; responsibility is the obligation to perform duties. They must be evenly balanced: giving authority without responsibility breeds abuse of power, while responsibility without authority causes frustration.\n   - *Example:* A sales manager given the target of Rs 10 lakh sales must be granted the authority to offer 5% customer discounts.\n3. **Discipline:**\n   - Sincere obedience, respect for organizational rules, and honoring employment contracts at all levels. Requires fair supervisors and clear rules.\n   - *Example:* Workers arriving on time and management paying promised performance bonuses punctually.\n4. **Unity of Command:**\n   - An employee must receive orders from **only one superior**. Receiving contradictory orders from two bosses creates confusion, delays, and conflict.\n   - *Example:* A software engineer reporting strictly to one Project Lead rather than being pulled between two managers.\n5. **Unity of Direction:**\n   - One head and one unified plan for a group of corporate activities sharing the same objective. It prevents conflicting departmental efforts.\n   - *Example:* A company producing both cars and motorcycles must have separate independent marketing divisions for each product line.\n6. **Subordination of Individual Interest to General Interest:**\n   - The collective targets of the company must take absolute priority over any single worker or manager’s selfish desires.\n   - *Example:* An executive refusing to purchase raw materials from a family member\'s firm at inflated rates.\n7. **Fair Remuneration:**\n   - Workers must receive fair wages that guarantee a dignified standard of living while staying within the company’s financial capacity.\n   - *Example:* Providing medical insurance and inflation-adjusted dearness allowances to retain talented staff.\n\n---\n\n### Scalar Chain and the "Gang Plank" Concept\n- **Scalar Chain:** The formal, unbroken line of authority and communication flowing from the highest executive down to the lowest worker.\n- **Gang Plank Shortcut:** Normally, communication must travel through every intermediate boss. However, in emergency crises, Fayol introduced the **Gang Plank**—a direct lateral bridge enabling two employees of identical rank in different departments (e.g. D and G) to communicate directly, provided their respective immediate superiors are informed immediately.\n\n---\n\n### Summary of Remaining Principles:\n- **Centralization:** Balancing top control with subordinate delegation.\n- **Order:** A place for everything, and everything in its place.\n- **Equity:** Fair, kind, and just treatment of all subordinates without bias.\n- **Stability of Tenure:** Minimizing unnecessary employee turnover to build loyalty.\n- **Initiative:** Encouraging employees to suggest creative ideas.\n- **Esprit de Corps:** Fostering harmonious team spirit and mutual trust.',
    corporateExample: 'McDonald’s kitchen operations dividing assembly into specialized stations (Division of Work).',
    examinerTip: 'Draw the inverted-V Scalar Chain / Gang Plank diagram; guarantees full 10/10 marks.'
  },
  {
    id: 'sess-a-11',
    year: 'Sessional-A',
    marks: 10,
    unit: 2,
    section: 'Long Essay (10M)',
    question: 'Discuss the various components of the Business Environment. Explain the Micro and Macro (PESTLE) layers with a comprehensive structural diagram.',
    mnemonic: 'INTERNAL + MICRO (Customers, Suppliers, Rivals) + MACRO (P-E-S-T-L-E)',
    diagram: '┌────────────────────────────────────────────────────────────────────────┐\n│                        BUSINESS ENVIRONMENT                            │\n├───────────────────────────────────┬────────────────────────────────────┤\n│      MICRO LAYER (Immediate)      │     MACRO LAYER (PESTLE Forces)    │\n├───────────────────────────────────┼────────────────────────────────────┤\n│ • Customers & Buyers              │ • Political: Govt stability, laws  │\n│ • Suppliers & Vendors             │ • Economic: Inflation, GDP growth  │\n│ • Competitors & Rivals            │ • Socio-Cultural: Demographics     │\n│ • Marketing Intermediaries        │ • Technological: Automation, AI    │\n│ • Financing Bodies                │ • Legal: Acts of parliament        │\n│                                   │ • Environmental: Climate standards │\n└───────────────────────────────────┴────────────────────────────────────┘',
    modelAnswer: '### Introduction to Business Environment\nThe business environment comprises the aggregate total of all individuals, external institutions, economic forces, and societal factors that lie outside the immediate control of an enterprise but significantly shape its performance, profitability, and survival.\n\nIt is structured into three concentric layers: **Internal Environment**, **Micro External Environment**, and **Macro External Environment**.\n\n---\n\n### I. Internal Environment (Controllable Forces)\nFactors located inside the enterprise that managers can directly regulate:\n1. **Value System & Mission:** The ethical philosophy and purpose established by founders.\n2. **Human Resources:** Skills, training, morale, and motivation of the workforce.\n3. **Financial Capital & Physical Assets:** Production plants, liquidity reserves, and proprietary technology.\n\n---\n\n### II. Micro Environment (Immediate Operating Task Forces)\nExternal actors that interact directly with the enterprise on a daily basis:\n1. **Customers:** The central focal point; customer preferences, income levels, and purchasing behavior determine product survival.\n2. **Suppliers:** Provide essential raw materials, parts, and equipment. Unreliable suppliers cause factory shutdowns and cost inflation.\n3. **Competitors:** Direct rivals fighting for market share. Pricing wars, promotional campaigns, and new product launches force continuous adaptation.\n4. **Marketing Intermediaries:** Wholesalers, retail chains, and logistical delivery partners who distribute goods from factory gates to end consumers.\n5. **Financiers:** Banks, venture funds, and shareholders who furnish debt and equity capital.\n\n---\n\n### III. Macro Environment (Broad PESTLE Forces)\nBroad societal forces that impact all businesses in the economy, analyzed using the **PESTLE** framework:\n1. **Political Environment (P):** Government stability, foreign trade policies, export incentives, and political party ideologies.\n2. **Economic Environment (E):** National GDP growth rates, interest rates, inflation levels, consumer disposable income, and foreign exchange rates.\n3. **Socio-Cultural Environment (S):** Population demographics, literacy rates, religious traditions, consumer lifestyle preferences, and health consciousness.\n4. **Technological Environment (T):** Digital transformation, internet commerce, automated robotics, artificial intelligence, and rapid product obsolescence.\n5. **Legal Environment (L):** Statutory legislation enacted by parliament (e.g., Companies Act 2013, Consumer Protection Act 2019, GST laws).\n6. **Environmental / Natural Environment (E):** Environmental pollution standards, climate change risks, raw material scarcity, and green energy mandates.',
    corporateExample: 'Tata Motors monitoring technological and environmental layers by investing heavily in electric vehicles (EVs).',
    examinerTip: 'Draw the concentric layers diagram and explain all 6 letters of PESTLE clearly.'
  },
  {
    id: 'sess-a-12',
    year: 'Sessional-A',
    marks: 10,
    unit: 3,
    section: 'Long Essay (10M)',
    question: 'Explain the meaning, significance, and 7-step process of Decision-Making in management with a visual flowchart.',
    mnemonic: 'I - D - A - E - S - I - F (Identify, Diagnose, Alternatives, Evaluate, Select, Implement, Feedback)',
    diagram: '[1. Identify Problem] ──► [2. Diagnose Causes] ──► [3. Develop Alternatives] ──► [4. Evaluate Choices]\n                                                                                       │\n[7. Follow-up & Feedback] ◄── [6. Implement Choice] ◄── [5. Select Optimal Option] ◄───┘',
    modelAnswer: '### Meaning of Decision-Making\nDecision-making is the cognitive, rational process of choosing the best course of action among two or more competing alternatives to resolve an operational problem or achieve an organizational goal.\n\nIt is the core essence of management: every plan, organizational structure, staffing assignment, and control benchmark is born from decisions.\n\n---\n\n### The 7-Step Decision-Making Process\n\n1. **Step 1: Identify and Define the Problem:**\n   - Recognize that a discrepancy exists between actual organizational performance and desired goals (e.g., a 15% drop in product sales).\n2. **Step 2: Diagnose Root Causes:**\n   - Investigate deeper underlying causes rather than treating superficial symptoms. A drop in sales could be caused by poor product quality, rude sales staff, or competitor discounts.\n3. **Step 3: Develop Alternative Solutions:**\n   - Brainstorm creative potential courses of action using cross-functional team discussions, market research, and lateral thinking.\n4. **Step 4: Evaluate the Alternatives:**\n   - Scrutinize every prospective option against four critical criteria: financial cost, technical feasibility, potential risks, and expected payoff.\n5. **Step 5: Select the Optimal Alternative:**\n   - Choose the alternative that maximizes return while minimizing risk. Under conditions of incomplete market data, managers choose the best realistic "satisficing" option.\n6. **Step 6: Implement the Decision:**\n   - Translate the chosen strategy into concrete action: communicate the decision to affected departments, assign individual responsibilities, and allocate budgets.\n7. **Step 7: Follow-up and Feedback Loop:**\n   - Monitor actual performance results against initial projections. If the outcome deviates negatively from expectations, managers initiate corrective modifications.',
    corporateExample: 'Netflix deciding in 2007 to transition from mailing physical DVDs to online digital streaming.',
    examinerTip: 'Draw the 7-step sequential flowchart with the feedback loop; repeats frequently in GU exams.'
  },
  {
    id: 'sess-a-13',
    year: 'Sessional-A',
    marks: 10,
    unit: 3,
    section: 'Long Essay (10M)',
    question: 'Explain the concept of Delegation of Authority. Discuss the Trinity of Delegation (Authority, Responsibility, Accountability). Can accountability be delegated? Discuss major barriers to delegation.',
    mnemonic: 'A - R - A (Authority, Responsibility, Accountability) | "Accountability is Absolute"',
    diagram: 'THE TRINITY OF DELEGATION:\n1. AUTHORITY      ──► Flows Downward (Right to direct & spend)\n2. RESPONSIBILITY ◄── Flows Upward   (Obligation to perform assigned task)\n3. ACCOUNTABILITY ◄── Flows Upward   (Ultimate answerability to higher boss — CANNOT BE DELEGATED)',
    modelAnswer: '### Meaning of Delegation of Authority\nDelegation is the downward transfer of formal decision-making authority and operational duties from a superior manager to an immediate subordinate. It empowers managers to multiply their effectiveness by focusing on strategic leadership while subordinates handle daily operational tasks.\n\n---\n\n### The Trinity of Delegation (The Three Core Elements)\n\n1. **Authority (The Right to Command):**\n   - The legitimate power to make decisions, give binding orders, allocate company funds, and utilize organizational resources. **Authority flows downward** from superior to subordinate.\n2. **Responsibility (The Obligation to Perform):**\n   - The moral and contractual obligation of a subordinate to execute the assigned task conscientiously. **Responsibility flows upward** from subordinate to superior.\n3. **Accountability (The Answerability for Outcomes):**\n   - The final answerability of a person for the completion and outcome of the assigned task. A subordinate is accountable to their superior for their performance.\n\n---\n\n### Can Accountability Ever Be Delegated? (The Principle of Absolute Accountability)\n- **NO, accountability can NEVER be delegated.**\n- While a manager can delegate authority and operational tasks to an assistant, the manager remains **100% answerable** to higher top executives for the final outcome.\n- *Classic Example:* If a Chief Financial Officer delegates tax filing to an accountant, and the accountant misses the statutory deadline, the CFO cannot escape responsibility by blaming the clerk before the Board of Directors. The CFO remains absolutely accountable.\n\n---\n\n### Barriers to Effective Delegation\n\n#### A. Obstacles on the Part of Superiors (Managers):\n1. **"I can do it better myself" Fallacy:** Egotistical managers believe no subordinate can match their personal work standard.\n2. **Fear of Subordinate Outshining Them:** Insecure managers fear that a capable subordinate might become popular and take their job.\n3. **Reluctance to Share Power:** Managers enjoy the personal prestige of making every single corporate decision.\n4. **Lack of Trust in Team Members:** Hesitation to trust subordinates with critical responsibilities.\n\n#### B. Obstacles on the Part of Subordinates:\n1. **Fear of Criticism and Failure:** Subordinates avoid taking initiative to protect themselves from reprimands if things go wrong.\n2. **Lack of Self-Confidence and Information:** Feeling unready or lacking necessary tools, training, or authority budgets to succeed.\n3. **Inadequate Incentives:** Reluctance to take on heavier workloads without additional pay, bonuses, or promotion promises.',
    examinerTip: 'Explicitly emphasize that authority is delegated, but accountability remains absolute and cannot be delegated.'
  }
];

export const SESSIONAL_SET_B_QUESTIONS: PyqItem[] = [
  // SECTION A: Short Answer Questions (2M × 5 = 10 Marks)
  {
    id: 'sess-b-1',
    year: 'Sessional-B',
    marks: 2,
    unit: 1,
    section: 'Short Answer (2M)',
    question: 'What is a "Brick & Click" business model? State its primary consumer advantage.',
    mnemonic: 'B - C (Physical Brick + Digital Click)',
    modelAnswer: 'The **Brick & Click** (or Omnichannel) model integrates a physical brick-and-mortar storefront (\"Brick\") with a digital e-commerce website and mobile app (\"Click\").\n\nPrimary Consumer Advantage:\n- **Seamless Omnichannel Convenience:** Customers can browse products online from home and pick them up immediately at a local store within hours (Click-and-Collect / BOPIS), or test products physically in-store and order home delivery.',
    corporateExample: 'Reliance Retail operating physical Reliance Digital stores alongside online JioMart.',
    examinerTip: 'Mention the integration of physical store ("brick") with digital website ("click") and give Reliance as an example.'
  },
  {
    id: 'sess-b-2',
    year: 'Sessional-B',
    marks: 2,
    unit: 1,
    section: 'Short Answer (2M)',
    question: 'What is meant by "Gang Plank" in Henri Fayol’s Scalar Chain principle?',
    mnemonic: 'SHORTCUT IN EMERGENCY',
    modelAnswer: '**Gang Plank** is an emergency lateral communication shortcut between two employees of identical rank in different departments, bypassing the formal, slow scalar chain to prevent catastrophic operational delays.\n\nCondition for Use:\n- Both employees must notify their respective immediate superiors immediately after communicating.',
    examinerTip: 'Draw a small inverted-V showing the direct lateral bridge between two colleagues.'
  },
  {
    id: 'sess-b-3',
    year: 'Sessional-B',
    marks: 2,
    unit: 2,
    section: 'Short Answer (2M)',
    question: 'State the statutory CSR spending mandate under Section 135 of the Indian Companies Act, 2013.',
    mnemonic: '2% OF AVERAGE NET PROFITS',
    modelAnswer: 'Under Section 135 of the Indian Companies Act, 2013, qualifying companies (net worth ≥ Rs 500 cr, turnover ≥ Rs 1,000 cr, or net profit ≥ Rs 5 cr) must mandatorily spend at least **2% of their average net profits made during the 3 immediately preceding financial years** on approved social welfare activities listed under Schedule VII (education, poverty alleviation, healthcare, rural development).',
    examinerTip: 'Quote the exact statutory figures: 2% of average net profits of preceding 3 financial years.'
  },
  {
    id: 'sess-b-4',
    year: 'Sessional-B',
    marks: 2,
    unit: 2,
    section: 'Short Answer (2M)',
    question: 'Explain the concept of Nishkama Karma and its relevance to modern business management.',
    mnemonic: 'DUTY WITHOUT GREED',
    modelAnswer: 'Derived from the Bhagavad Gita, ***Nishkama Karma*** means performing one’s prescribed professional duties with total dedication, craftsmanship, and excellence without selfish attachment or obsessive greed for personal results (*Phala*).\n\nRelevance to Management:\n- It eliminates anxiety and emotional burnout, encouraging managers to focus on ethical decision-making, genuine customer service, and long-term organizational health rather than quarterly greed.',
    examinerTip: 'Explain as "Selfless action without attachment to fruits" and link to ethical stress-free management.'
  },
  {
    id: 'sess-b-5',
    year: 'Sessional-B',
    marks: 2,
    unit: 3,
    section: 'Short Answer (2M)',
    question: 'What is Herbert Simon’s concept of "Bounded Rationality" and "Satisficing"?',
    mnemonic: 'LIMITED MINDS -> "GOOD ENOUGH" CHOICES',
    modelAnswer: 'Nobel Laureate Herbert Simon argued that human managers cannot make 100% purely rational decisions due to **Bounded Rationality** (limited mental capacity, incomplete market information, and severe time pressure).\n\nInstead of searching endlessly for the single perfect option ("maximizing"), managers select the first alternative that meets their minimum acceptable target—a strategy called **"Satisficing"** (satisfy + suffice).',
    examinerTip: 'Define Bounded Rationality and clarify that "Satisficing" means picking a "good enough" realistic option.'
  },

  // SECTION B: Medium Explanations (5M × 2 = 10 Marks — 4 Given with Choice)
  {
    id: 'sess-b-6',
    year: 'Sessional-B',
    marks: 5,
    unit: 1,
    section: 'Analytical (5M)',
    question: 'What is Franchising? Explain its key advantages and disadvantages from the franchisee\'s perspective.',
    mnemonic: 'ADV: B-T-M | DISADV: F-R-L (Fees, Royalties, Lack of freedom)',
    diagram: 'Franchisor (Brand Owner & SOPs) ◄── Fees & Ongoing Royalties ──► Franchisee (Operates Store)',
    modelAnswer: '### Concept of Franchising\nFranchising is a legal and commercial contract where a brand owner (**Franchisor**) licenses its registered trademark, recipes, and standard operating procedures to an independent operator (**Franchisee**) in exchange for upfront fees and ongoing royalties.\n\n### Advantages for the Franchisee:\n1. **Proven Business Model with High Survival Rate:**\n   - Drastically minimizes startup failure risk because the business model, menu, and operating procedures are already market-tested.\n2. **Instant Brand Recognition:**\n   - Enjoys immediate consumer footfall and trust from Day 1 without spending years building a reputation.\n3. **Continuous Training & Supply-Chain Support:**\n   - Receives staff training, kitchen blueprints, national television marketing, and bulk raw-material purchasing discounts.\n\n### Disadvantages for the Franchisee:\n1. **Heavy Upfront & Ongoing Costs:**\n   - Must pay hefty initial franchise fees, expensive store build-out mandates, plus ongoing monthly royalties (4–8% of gross sales revenue).\n2. **Zero Operational Autonomy:**\n   - Lacks creative freedom; cannot alter prices, introduce new menu items, or adjust store operating hours without franchisor approval.\n3. **Vulnerability to Brand Scandals:**\n   - If a different franchisee in another city damages the brand reputation, all franchise stores suffer sales losses.',
    corporateExample: 'Domino’s Pizza and McDonald’s operated in India through master franchise agreements.',
    examinerTip: 'Focus specifically on the Franchisee’s point of view as requested in the question.'
  },
  {
    id: 'sess-b-7',
    year: 'Model-40M',
    marks: 5,
    unit: 2,
    section: 'Analytical (5M)',
    question: 'Explain the arguments in favour of and against Corporate Social Responsibility (CSR).',
    mnemonic: 'FAVOUR: L-R-P | AGAINST: M-D-S (Milton Friedman, Dilution, Skills)',
    modelAnswer: '### Concept of CSR\nCorporate Social Responsibility is the voluntary ethical commitment of commercial enterprises to improve the quality of life of workers, local communities, and society while driving economic growth.\n\n### Arguments in Favour of CSR:\n1. **Long-Term Self-Interest:** Healthy, educated, and prosperous local communities build stable consumer markets, loyal workforces, and sustainable corporate profits.\n2. **Prevents Restrictive Government Regulations:** Voluntary compliance with high environmental and ethical standards prevents governments from enacting restrictive laws.\n3. **Enhanced Brand Goodwill:** Modern consumers actively choose ethical, socially responsible brands over opportunistic rivals.\n4. **Corporate Resource Availability:** Large businesses possess the managerial talent, technical knowledge, and capital required to solve societal problems.\n\n### Arguments Against CSR:\n1. **Violation of Profit Maximization (Milton Friedman):** Nobel Laureate Milton Friedman argued that the sole responsibility of business is to maximize profits within the rules of law. Spending shareholder funds on charity without consent is seen as an inappropriate "tax."\n2. **Dilution of Primary Economic Purpose:** Distracts executives from commercial innovation and core operational productivity.\n3. **Lack of Social Skills:** Corporate managers are trained in accounting and marketing, not in resolving complex societal poverty or environmental issues.',
    corporateExample: 'Tata Group investing in healthcare (in favour) vs Milton Friedman’s classic shareholder efficiency critique.',
    examinerTip: 'Cite Milton Friedman’s classic critique alongside modern stakeholder theory for full 5 marks.'
  },
  {
    id: 'sess-b-8',
    year: 'Model-40M',
    marks: 5,
    unit: 3,
    section: 'Analytical (5M)',
    question: 'Distinguish between Formal Organisation and Informal Organisation with a comprehensive comparison matrix.',
    diagram: 'Formal (Deliberate, Official Chain of Command) ◄────────► Informal (Spontaneous, Friendly Social Network)',
    modelAnswer: '### Introduction\nEvery business enterprise contains two interrelated organizational structures: a deliberately created **Formal Organisation** and an organic **Informal Organisation**.\n\n### Comprehensive Comparison Matrix\n\n| Basis of Distinction | Formal Organisation | Informal Organisation |\n|---|---|---|\n| **1. Origin & Creation** | Deliberately designed and structured by top management through formal policies. | Spontaneously emerges from social interactions, friendships, and personal bonds. |\n| **2. Primary Objective** | To fulfill official corporate goals, operational efficiency, and profitability. | To satisfy psychological, emotional, and social belonging needs of workers. |\n| **3. Authority Flow** | Flows strictly downward along the official hierarchy and scalar chain. | Flows horizontally or diagonally based on personal charisma, respect, and peer influence. |\n| **4. Communication Channel** | Official scalar chain (formal emails, circulars, memos). Slower but documented. | Unofficial grapevine network. Lightning-fast but prone to rumors and distortion. |\n| **5. Rules & Structure** | Governed by written rules, job descriptions, and strict standard procedures. | Governed by unwritten social codes, group norms, and mutual peer expectations. |\n| **6. Stability & Tenure** | Highly structured, predictable, and permanent in nature. | Dynamic, fluid, and changes frequently as worker friendships evolve. |',
    examinerTip: 'Draw the 6-point comparison table; examiners award 5/5 immediately.'
  },
  {
    id: 'sess-b-9',
    year: 'Model-40M',
    marks: 5,
    unit: 3,
    section: 'Analytical (5M)',
    question: 'Explain the concept of Matrix Organisational Structure. Discuss its key merits and reasons why organizational conflict occurs.',
    diagram: 'MATRIX DESIGN (Dual Authority Grid):\nFunctional Heads (Vertical Authority) ──┬── Project Managers (Horizontal Authority)\n                                         └──► Employee receives orders from TWO BOSSES',
    modelAnswer: '### Meaning of Matrix Organisation\nA **Matrix Structure** is a hybrid organizational design that overlays horizontal project teams across traditional vertical functional departments (Marketing, Engineering, Finance). An employee assigned to a project reports to **two bosses simultaneously** (Dual Command):\n1. Their permanent **Functional Department Manager**.\n2. Their temporary **Project Manager**.\n\n### Key Merits of Matrix Structure:\n1. **Efficient Resource Utilization:** Specialized engineers, data analysts, and designers are shared across multiple corporate projects without hiring separate duplicate teams.\n2. **High Adaptability & Quick Response:** Cross-functional teams form and dissolve rapidly to deliver custom client projects in volatile markets.\n3. **Multidisciplinary Skill Growth:** Employees gain both deep technical expertise and broad project leadership experience.\n\n### Why Organizational Conflict Occurs (Demerits):\n1. **Violation of Unity of Command:** Employees face confusing, contradictory priorities from two bosses (e.g., Functional Boss demanding administrative training vs Project Boss demanding urgent project deadlines).\n2. **Power Struggles & Turf Wars:** Department heads and project managers clash over budget allocations and employee time commitments.\n3. **High Stress & Meeting Fatigue:** Employees spend excessive time in coordination meetings resolving cross-functional disputes.',
    corporateExample: 'NASA aerospace missions and IT consulting companies (Infosys, Wipro) assembling client project matrix teams.',
    examinerTip: 'Explicitly mention the violation of Unity of Command and draw the dual-command grid.'
  },

  // SECTION C: High-Weight Essay Questions (10M × 2 = 20 Marks — 4 Given with Choice)
  {
    id: 'sess-b-10',
    year: 'Model-40M',
    marks: 10,
    unit: 1,
    section: 'Long Essay (10M)',
    question: 'Discuss the Elton Mayo Hawthorne Studies in detail (Illumination, Relay Assembly, Bank Wiring). Explain its key findings and historical significance to human relations management.',
    mnemonic: 'I - R - M - B (Illumination, Relay, Mass Interview, Bank Wiring) | "Hawthorne Effect"',
    diagram: 'ELTON MAYO\'S HAWTHORNE EXPERIMENTS (1924–1932):\n1. Illumination Tests       ──► Physical lighting changes did NOT dictate output\n2. Relay Assembly Room      ──► Small friendly groups with empathetic supervision flourished\n3. Mass Interviewing        ──► Worker feelings, attitudes, and informal status dictate effort\n4. Bank Wiring Observation  ──► Informal social peer groups restrict output to group norms',
    modelAnswer: '### Introduction to the Hawthorne Studies\nBetween 1924 and 1932, a team of researchers from Harvard Business School, led by psychologist **Elton Mayo** and **Fritz Roethlisberger**, conducted landmark experiments at the Western Electric Company\'s Hawthorne Works in Chicago. These studies revolutionized industrial management by exposing the limitations of classical scientific theory and giving birth to the **Human Relations Movement**.\n\n---\n\n### Four Major Stages of the Experiments\n\n1. **Stage 1: The Illumination Experiments (1924–1927):**\n   - *Objective:* To test the relationship between physical lighting levels and factory worker productivity.\n   - *Method:* Workers were split into a control group (constant light) and an experimental group (light varied from bright to moonlight level).\n   - *Surprising Finding:* Productivity rose in both groups, even when light was dimmed to moonlight levels. The researchers concluded that psychological and social factors were far more potent than physical working conditions.\n2. **Stage 2: The Relay Assembly Test Room (1927–1929):**\n   - *Objective:* To observe the impact of rest pauses, shorter working hours, and financial incentives on 6 female telephone assembly workers.\n   - *Method:* Working conditions were altered progressively, followed by the complete removal of all privileges.\n   - *Finding:* Output continuously rose to all-time highs even when rest periods were removed. The girls felt special, valued, and operated as a cohesive team under warm, friendly supervision without fear of harsh bosses.\n3. **Stage 3: The Mass Interviewing Program (1928–1930):**\n   - Over 21,000 employees were interviewed confidentially. The study revealed that workers are not isolated individuals motivated solely by money; their productivity is directly governed by their emotional feelings, social status, and workplace relationships.\n4. **Stage 4: The Bank Wiring Observation Room (1931–1932):**\n   - A group of 14 male workers was observed under a group piece-wage incentive.\n   - *Finding:* The group established an unwritten, informal output code to protect slower workers. Anyone producing too much was labeled a "Rate Buster," while anyone producing too little was a "Chiseler." Informal group social pressure defeated official monetary incentives.\n\n---\n\n### The "Hawthorne Effect" and Core Findings\n- **The Hawthorne Effect:** Human beings work significantly harder simply when they know they are being noticed, valued, and appreciated by managers.\n- **Social Man over Economic Man:** Workers are social creatures with psychological needs, not mechanical cogs in a machine.\n- **Informal Groups Dictate Norms:** Informal social cliques inside an organization exert powerful control over worker output.\n\n---\n\n### Historical Significance\n- Transformed management thought from cold physical engineering (Taylorism) to empathetic human leadership.\n- Sparked modern organizational behavior, employee counseling, open-door policies, and participatory management.',
    examinerTip: 'Detail all 4 experimental stages and define the "Hawthorne Effect" for full 10 marks.'
  },
  {
    id: 'sess-b-11',
    year: 'Model-40M',
    marks: 10,
    unit: 2,
    section: 'Long Essay (10M)',
    question: 'What is Indian Ethos in Management? Contrast Indian Ethos with Western Management models and explain the concept and principles of Holistic Management.',
    mnemonic: 'ETHOS: N-S-V-A | CONTRAST: Spiritual Duty vs Material Profit',
    diagram: 'HOLISTIC MANAGEMENT ECOSYSTEM:\n┌────────────────────────────────────────────────────────┐\n│               HOLISTIC LIVING ECOSYSTEM                │\n│  Atman (Worker Dignity) ──► Society ──► Nature/Planet  │\n│        (Profit + Human Values + Ecological Harmony)    │\n└────────────────────────────────────────────────────────┘',
    modelAnswer: '### Introduction to Indian Ethos in Management\n**Indian Ethos in Management** refers to the application of timeless cultural, philosophical, and spiritual principles derived from ancient Indian scriptures (Bhagavad Gita, Upanishads, Mahabharata) to contemporary business administration. It teaches that businesses must balance economic success with moral righteousness (*Dharma*) and societal welfare.\n\n---\n\n### Four Core Principles of Indian Ethos\n\n1. ***Atmano Mokshartham Jagat Hitaya Cha*** (Self-Realization & Societal Good):\n   - Business is not merely a vehicle for personal enrichment; it is an instrument for societal upliftment and personal character development.\n2. ***Nishkama Karma*** (Selfless Dedicated Action):\n   - Performing professional duties with absolute excellence and devotion without obsessive greed for personal rewards. It eliminates workplace anxiety and unethical shortcuts.\n3. ***Samatvam*** (Equanimity of Mind):\n   - Maintaining emotional poise, calm self-discipline, and balance in both success and failure, preventing executive arrogance and despair.\n4. ***Vasudhaiva Kutumbakam*** (The World as One Family):\n   - Treating the organization, customers, employees, and suppliers as members of a single living family rather than competing adversaries.\n\n---\n\n### Systematic Comparison: Indian Ethos vs Western Management\n\n| Dimension | Western Management Model | Indian Ethos in Management |\n|---|---|---|\n| **1. Guiding Goal** | Profit maximization, shareholder return, material wealth. | Ethical duty (*Dharma*), societal welfare, sustainable profits. |\n| **2. View of Workers** | A resource / cost of production ("Economic Man"). | A divine conscious being (*Atman*) deserving dignity and respect. |\n| **3. Leadership Style**| Command-and-control, transactional, carrot-and-stick. | Servant leadership, nurturing parent/mentor (*Karta/Rishi*). |\n| **4. Market Approach**| Aggressive market dominance, crushing rivals. | Harmonious coexistence, mutual benefit, collective growth. |\n| **5. Motivation Source**| External monetary bonuses, stock options, promotions. | Internal moral fulfillment, sense of duty, selfless service. |\n| **6. Decision Basis** | Purely analytical logic, short-term quarterly metrics. | Synthesis of rational intellect and intuitive moral wisdom. |\n\n---\n\n### Concept of Holistic Management\nHolistic management views an enterprise as an interconnected, living ecosystem rather than a cold profit-generating machine. It insists that long-term commercial survival requires balancing three vital pillars: **People** (human dignity), **Planet** (ecological harmony), and **Profit** (fair financial return).',
    corporateExample: 'Tata Group dedicating 66% of parent holding company equity to philanthropic charitable trusts.',
    examinerTip: 'Cite the Sanskrit scriptural concepts (Nishkama Karma, Samatvam) with simple English explanations.'
  },
  {
    id: 'sess-b-12',
    year: 'Model-40M',
    marks: 10,
    unit: 3,
    section: 'Long Essay (10M)',
    question: 'Explain Michael Porter’s Five Forces Model of Industry Competitiveness with an analytical diagram and real-world examples.',
    mnemonic: 'N - B - S - S - R (New Entrants, Buyers, Suppliers, Substitutes, Rivalry)',
    diagram: 'PORTER\'S FIVE FORCES MODEL:\n                     ┌────────────────────────────────┐\n                     │  Threat of New Entrants (1)    │\n                     └───────────────┬────────────────┘\n                                     ▼\n┌────────────────────┐   ┌────────────────────────┐   ┌────────────────────┐\n│ Bargaining Power   ├──►│ INTENSITY OF RIVALRY   │◄──┤ Bargaining Power   │\n│ of Suppliers (3)   │   │ AMONG EXISTING FIRMS(5)│   │ of Buyers (2)      │\n└────────────────────┘   └────────────────────────┘   └────────────────────┘\n                                     ▲\n                     ┌───────────────┴────────────────┐\n                     │ Threat of Substitutes (4)      │\n                     └────────────────────────────────┘',
    modelAnswer: '### Introduction to Michael Porter’s Five Forces Model\nFormulated by Harvard Business School Professor Michael E. Porter in 1979, the **Five Forces Framework** is an analytical strategic tool used by executives to evaluate the attractiveness, competitive intensity, and long-term profitability potential of any industry.\n\nPorter proved that competitive rivalry extends far beyond direct rivals: it is shaped by five structural market forces:\n\n---\n\n### Detailed Analysis of the Five Competitive Forces\n\n1. **Force 1: Threat of New Entrants:**\n   - How easy or difficult is it for new startup rivals to enter the market and capture market share?\n   - When barriers to entry are high (huge capital requirements, strict government licensing, heavy economies of scale, strong customer brand loyalty), threat is low and industry profitability remains high (e.g. Commercial Aircraft manufacturing).\n2. **Force 2: Bargaining Power of Buyers (Customers):**\n   - How much leverage do consumers or corporate clients have to force price cuts or demand premium quality?\n   - Power is high when there are few large buyers, standardized products, zero switching costs, and complete price transparency. High buyer power drives industry profit margins down.\n3. **Force 3: Bargaining Power of Suppliers:**\n   - How much power do raw material, component, or labor suppliers have to raise prices or restrict supply?\n   - Suppliers have immense power when there are very few suppliers, high switching costs to change vendors, and no substitutes (e.g. Intel supplying microprocessors to computer manufacturers).\n4. **Force 4: Threat of Substitute Products:**\n   - Products from outside the industry that satisfy the identical fundamental consumer need.\n   - If substitute options are cheap and convenient, they place a strict ceiling on industry prices (e.g. High-speed rail substituting short-haul domestic airline flights).\n5. **Force 5: Intensity of Rivalry Among Existing Competitors (The Centerpiece):**\n   - The degree of direct competition and price warfare among existing market players.\n   - Rivalry is fierce when there are numerous equal-sized competitors, slow industry growth, and high exit barriers (e.g. Indian Telecom: Reliance Jio vs Bharti Airtel battling over data tariffs).\n\n---\n\n### Strategic Takeaways for Managers\n- **Identify Industry Profitability:** Avoid investing capital in industries where all 5 forces are strong (e.g. low-cost airlines).\n- **Formulate Competitive Strategy:** Pick Cost Leadership (lowest cost) or Differentiation (unique premium features) to erect defenses against these forces.',
    examinerTip: 'Draw the 5-box Porter diagram; state how it helps managers evaluate industry profit potential.'
  },
  {
    id: 'sess-b-13',
    year: 'Model-40M',
    marks: 10,
    unit: 3,
    section: 'Long Essay (10M)',
    question: 'Discuss Centralisation versus Decentralisation in management. What determinant factors govern the degree of decentralisation in a large modern corporation?',
    mnemonic: 'SIZE - GROWTH - MANAGERS - RISK - ENVIRONMENT - PHILOSOPHY',
    diagram: 'Centralized (Apex Control, Slow, Rigid) ◄────────► Decentralized (Dispersed Authority, Agile, High Morale)',
    modelAnswer: '### Concepts of Centralisation and Decentralisation\n- **Centralisation:** The systematic concentration and retention of decision-making authority, policy creation, and operating control at the top-management level of the hierarchy.\n- **Decentralisation:** The systematic and deliberate dispersal of decision-making authority across all levels of management down to the lowest operational branches.\n\n---\n\n### Systematic Comparison Matrix\n\n| Basis of Distinction | Centralisation | Decentralisation |\n|---|---|---|\n| **1. Authority Concentration**| Concentrated strictly at the executive apex. | Dispersed widely across middle and branch managers. |\n| **2. Decision Speed** | Slow; minor issues must travel up the scalar chain. | Fast and responsive to immediate local market changes. |\n| **3. Burden on Executives** | High; top executives suffer cognitive burnout. | Low; frees executives to focus on long-term strategy. |\n| **4. Subordinate Morale** | Low; employees feel like unthinking order-takers. | High; empowers employees, boosting initiative. |\n| **5. Suitable Organization**| Small startups with simple operations. | Large multi-location conglomerates (Tata, Reliance). |\n\n---\n\n### Henri Fayol’s Principle of Centralisation\nHenri Fayol noted that neither absolute centralization nor absolute decentralization can exist in a healthy enterprise. Absolute centralization causes bureaucratic paralysis, while absolute decentralization leads to chaos. Management must find the **optimum balance** suited to its circumstances.\n\n---\n\n### Determinant Factors Governing Degree of Decentralisation\n\n1. **Size and Complexity of the Corporation:**\n   - As an enterprise expands geographically across hundreds of cities, top managers cannot manage daily branch decisions. Large size mandates decentralization.\n2. **History and Growth Pattern:**\n   - Companies that grew organically under founder supervision tend to stay centralized; corporations that expanded via mergers and acquisitions operate in decentralized divisions.\n3. **Availability & Competence of Subordinate Managers:**\n   - Decentralization requires well-trained, reliable middle managers. If branch personnel are inexperienced, authority must stay centralized.\n4. **Importance & Financial Risk Level of the Decision:**\n   - High-risk strategic decisions (corporate mergers, major plant capital investments) remain strictly centralized. Minor routine matters (local customer refunds, daily shift rosters) are decentralized.\n5. **Dynamism of Market Environment:**\n   - Highly volatile, competitive markets require decentralized branch managers empowered to respond rapidly to rival promotions.\n6. **Top Management Philosophy:**\n   - The personal trust, leadership style, and confidence top executives have in their team members.',
    corporateExample: 'Hindustan Unilever decentralizing regional product distribution while centralizing treasury finance and R&D.',
    examinerTip: 'Quote Henri Fayol: "Decentralisation is a matter of degree, not an absolute."'
  }
];

export const SESSIONAL_PAPERS: SessionalPaper[] = [
  {
    id: 'sessional-a',
    code: 'BCM4200104MJ-SET-A',
    title: 'Sessional Exam Paper Set A: Core Foundations & Frameworks',
    subtitle: 'High-Yield Blueprint covering Units 1, 2, and 3 · Solved in Simple English',
    fullMarks: 40,
    timeLimit: '2 Hours',
    unitsCovered: 'Units 1, 2, and 3 Only',
    blueprintTip: 'Master Set A to guarantee 36+/40 in standard classical questions (Fayol 14 Principles, Scientific Management, Carroll CSR, Decision-Making 7 Steps, Delegation Trinity).',
    questions: SESSIONAL_SET_A_QUESTIONS,
  },
  {
    id: 'sessional-b',
    code: 'BCM4200104MJ-SET-B',
    title: 'Sessional Exam Paper Set B: Advanced Applied Analysis & Distinction Blueprint',
    subtitle: 'High-Yield Blueprint covering Units 1, 2, and 3 · Solved in Simple English',
    fullMarks: 40,
    timeLimit: '2 Hours',
    unitsCovered: 'Units 1, 2, and 3 Only',
    blueprintTip: 'Master Set B to guarantee 36+/40 in analytical & distinction questions (Hawthorne Studies, Porter Five Forces, Indian Ethos vs Western, Matrix Organization, Centralization vs Decentralization).',
    questions: SESSIONAL_SET_B_QUESTIONS,
  },
];

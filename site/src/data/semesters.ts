export interface Subject {
  id: string;
  name: string;
  shortName: string;
  code: string;
  credit: number;
  status: 'active' | 'coming_soon';
  description: string;
  questionCount?: number;
}

export interface Semester {
  id: 1 | 3;
  name: string;
  shortName: string;
  tagline: string;
  subjects: Subject[];
}

export const SEMESTERS: Semester[] = [
  {
    id: 1,
    name: '1st Semester (FYUGP / NEP)',
    shortName: 'Sem 1',
    tagline: 'Foundations of Business, Accounting & Financial Systems',
    subjects: [
      {
        id: 'bom',
        name: 'Business Organisation and Management',
        shortName: 'BOM',
        code: 'BCM0100104 / BCM4100104 MN',
        credit: 4,
        status: 'active',
        description: 'Organizational structures, management functions, strategic planning, motivation, leadership, and contemporary issues.',
        questionCount: 42,
      },
      {
        id: 'fa',
        name: 'Financial Accounting',
        shortName: 'FA',
        code: 'BCM0100101',
        credit: 4,
        status: 'coming_soon',
        description: 'Accounting principles, depreciation, inventory valuation, branch & hire-purchase accounts.',
      },
      {
        id: 'ifs',
        name: 'Indian Financial System',
        shortName: 'IFS',
        code: 'BCM0100103',
        credit: 3,
        status: 'coming_soon',
        description: 'Financial markets, banking structure, RBI monetary policy, and capital market instruments.',
      },
    ],
  },
  {
    id: 3,
    name: '3rd Semester (FYUGP / NEP)',
    shortName: 'Sem 3',
    tagline: 'Corporate Law, Advanced Corporate Accounting & Direct Taxes',
    subjects: [
      {
        id: 'corp-acc',
        name: 'Corporate Accounting',
        shortName: 'Corp Acc',
        code: 'BCM0300101',
        credit: 4,
        status: 'coming_soon',
        description: 'Issue of shares, debentures, redemption, final accounts of companies, and amalgamation.',
      },
      {
        id: 'company-law',
        name: 'Company Law',
        shortName: 'Company Law',
        code: 'BCM0300102',
        credit: 4,
        status: 'coming_soon',
        description: 'Companies Act 2013, incorporation, MoA/AoA, board meetings, directors, and winding up.',
      },
      {
        id: 'income-tax',
        name: 'Income Tax Law & Practice',
        shortName: 'Income Tax',
        code: 'BCM0300103',
        credit: 4,
        status: 'coming_soon',
        description: 'Heads of income (Salaries, House Property, PGBP, Capital Gains), deductions, and tax computations.',
      },
      {
        id: 'business-stats',
        name: 'Business Statistics',
        shortName: 'Statistics',
        code: 'BCM0300104',
        credit: 3,
        status: 'coming_soon',
        description: 'Measures of central tendency, dispersion, correlation, regression, and index numbers.',
      },
    ],
  },
];

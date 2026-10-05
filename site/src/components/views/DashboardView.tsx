import React from 'react';
import type { NavTabId } from '../Sidebar';
import { BOM_PYQS } from '../../data/bom/pyqs';
import { SESSIONAL_SET_A_QUESTIONS, SESSIONAL_SET_B_QUESTIONS } from '../../data/bom/sessionalData';

interface DashboardViewProps {
  onSelectTab: (tab: NavTabId) => void;
  onSelectSemester: (semId: 1 | 3) => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  onSelectTab,
  onSelectSemester,
}) => {
  const allPortalQuestions = [...BOM_PYQS, ...SESSIONAL_SET_A_QUESTIONS, ...SESSIONAL_SET_B_QUESTIONS];
  const getUnitCount = (uId: number) => allPortalQuestions.filter((q) => q.unit === uId).length;
  const getPaperCount = (yearStr: string) => BOM_PYQS.filter((q) => q.year === yearStr).length;

  const chapters = [
    {
      id: 'unit1' as NavTabId,
      icon: '1',
      title: 'Unit 1: Introduction & Business Formats',
      count: getUnitCount(1),
      desc: 'Nature of Business, Forms of Ownership, Brick & Click, Franchising, Managerial Competencies.',
      badge: 'High Sessional Weightage',
    },
    {
      id: 'unit2' as NavTabId,
      icon: '2',
      title: 'Unit 2: Business Environment & CSR',
      count: getUnitCount(2),
      desc: 'Micro, Meso, Macro PESTLE layers, Business Ethics & Archie Carroll\'s 4 CSR Pillars.',
      badge: '10M Essay Favorite',
    },
    {
      id: 'unit3' as NavTabId,
      icon: '3',
      title: 'Unit 3: Planning and Organizing',
      count: getUnitCount(3),
      desc: '7 Decision-Making Steps, Bounded Rationality, Delegation (ARA), Matrix & Virtual Org.',
      badge: '100% Repeated Questions',
    },
    {
      id: 'unit4' as NavTabId,
      icon: '4',
      title: 'Unit 4: Directing and Controlling',
      count: getUnitCount(4),
      desc: 'Maslow\'s Hierarchy, Leadership Styles, Principles of Control, Planning-Control Feedback Loop.',
      badge: 'Core Management Theory',
    },
    {
      id: 'unit5' as NavTabId,
      icon: '5',
      title: 'Unit 5: Contemporary Issues in Management',
      count: getUnitCount(5),
      desc: 'Business Process Reengineering (BPR), Six Sigma DMAIC, Work-Life Balance, WFH & Co-working.',
      badge: 'Modern Trends',
    },
  ];



  return (
    <div className="py-4 sm:py-8">
      {/* Editorial Dashboard Hero */}
      <div className="border-b border-white/5 pb-8 mb-10">
        <div className="flex items-center gap-2 mb-3">
          <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-mono font-bold uppercase tracking-wider text-[#d4af37] bg-[#d4af37]/10 border border-[#d4af37]/25">
            Gauhati University NEP Edition
          </span>
          <span className="text-slate-600">•</span>
          <span className="text-[11px] font-mono text-slate-400">
            {allPortalQuestions.length} Solved Questions (100% Verified)
          </span>
        </div>
        <h2 className="font-editorial text-2xl sm:text-4xl font-normal text-white tracking-tight mb-3">
          B.Com Study Portal — <span className="text-[#d4af37]">Score 80+</span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl font-sans-reader">
          Clean, reading-focused study archive for Gauhati University B.Com (NEP / FYUGP). Contains complete solved papers, unit-by-unit question banks, and rapid-recall memory hooks designed to eliminate exam anxiety.
        </p>
      </div>

      {/* Syllabus Guides Section */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-4">
          <div className="text-[11px] font-mono uppercase tracking-widest text-slate-500">
            Syllabus Units (Business Organisation and Management)
          </div>
          <span className="text-xs font-mono text-[#d4af37]">5 Units Available</span>
        </div>
        <div className="flex flex-col gap-1">
          {chapters.map((ch) => (
            <div
              key={ch.id}
              onClick={() => onSelectTab(ch.id)}
              className="group flex items-start sm:items-center gap-4 py-4 border-b border-white/[0.04] cursor-pointer hover:translate-x-1 transition-transform"
            >
              <div className="font-editorial text-lg text-slate-500 group-hover:text-[#d4af37] w-6 shrink-0 pt-0.5 sm:pt-0">
                {ch.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <h3 className="font-editorial text-base sm:text-lg font-medium text-white group-hover:text-[#d4af37] transition-colors">
                    {ch.title}
                  </h3>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#d4af37]/10 text-[#d4af37] border border-[#d4af37]/20">
                    {ch.badge}
                  </span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/5 text-slate-400 border border-white/5">
                    {ch.count} Questions
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {ch.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sessional Papers Section (Units 1, 2, 3 Only - 40 Marks) */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-4">
          <div className="text-[11px] font-mono uppercase tracking-widest text-[#d4af37] flex items-center gap-2">
            <span>🎯</span>
            <span>Upcoming Sessional Examination (40 Marks — Units 1, 2 & 3 Only)</span>
          </div>
          <span className="text-xs font-mono text-[#d4af37] bg-[#d4af37]/10 px-2 py-0.5 rounded border border-[#d4af37]/25">
            2 Papers · Score 80+
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div
            onClick={() => onSelectTab('sessionalA')}
            className="p-5 rounded-xl border border-[#d4af37]/25 bg-[#d4af37]/[0.03] hover:bg-[#d4af37]/[0.06] cursor-pointer transition-all hover:-translate-y-0.5"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono text-[#d4af37] font-semibold bg-[#d4af37]/10 px-2 py-0.5 rounded">
                SET A · 40 Marks
              </span>
              <span className="text-xs text-slate-400 font-mono">13 Solved Questions</span>
            </div>
            <h3 className="font-editorial text-lg text-white font-medium mb-1.5">
              Sessional Set A: Core Foundations
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed font-sans-reader mb-3">
              Standard classical questions: Fayol 14 Principles, Taylor Scientific Management, Carroll 4 CSR Pillars, Decision-Making 7 Steps, Delegation Trinity.
            </p>
            <span className="text-xs font-editorial text-[#d4af37] flex items-center gap-1">
              Open Set A →
            </span>
          </div>

          <div
            onClick={() => onSelectTab('sessionalB')}
            className="p-5 rounded-xl border border-white/10 bg-[#111318] hover:border-[#d4af37]/40 cursor-pointer transition-all hover:-translate-y-0.5"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono text-amber-300 font-semibold bg-white/5 px-2 py-0.5 rounded border border-white/10">
                SET B · 40 Marks
              </span>
              <span className="text-xs text-slate-400 font-mono">13 Solved Questions</span>
            </div>
            <h3 className="font-editorial text-lg text-white font-medium mb-1.5">
              Sessional Set B: Advanced Distinction
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed font-sans-reader mb-3">
              Analytical & distinction questions: Hawthorne Studies, Porter 5 Forces, Indian Ethos vs Western, Matrix Design, Centralization vs Decentralization.
            </p>
            <span className="text-xs font-editorial text-[#d4af37] flex items-center gap-1">
              Open Set B →
            </span>
          </div>
        </div>
      </div>

      {/* Solved Papers Section */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-4">
          <div className="text-[11px] font-mono uppercase tracking-widest text-slate-500">
            Semester Final Examination PYQs (Full 60 Marks)
          </div>
          <span className="text-xs font-mono text-slate-400">3 Past Papers</span>
        </div>
        <div className="flex flex-col gap-1">
          {[
            {
              id: 'pyq2025' as NavTabId,
              icon: '📄',
              title: '2025 Solved Question Paper',
              count: getPaperCount('2025'),
              desc: 'Full 60 Marks Paper · Gauhati University NEP (Minor/FYUGP SET-A) with model answers.',
            },
            {
              id: 'pyq2024' as NavTabId,
              icon: '📄',
              title: '2024 Solved Question Paper',
              count: getPaperCount('2024'),
              desc: 'Full 60 Marks Paper · Gauhati University Sem-1 Commerce Paper with detailed explanations.',
            },
            {
              id: 'pyq2023' as NavTabId,
              icon: '📄',
              title: '2023 Solved Question Paper',
              count: getPaperCount('2023'),
              desc: 'Full 60 Marks Paper · Gauhati University NEP Commerce Paper with step-by-step solutions.',
            },
          ].map((p) => (
            <div
              key={p.id}
              onClick={() => onSelectTab(p.id)}
              className="group flex items-start sm:items-center gap-4 py-4 border-b border-white/[0.04] cursor-pointer hover:translate-x-1 transition-transform"
            >
              <div className="text-lg text-slate-500 group-hover:text-[#d4af37] w-6 shrink-0 pt-0.5 sm:pt-0">
                {p.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <h3 className="font-editorial text-base sm:text-lg font-medium text-white group-hover:text-[#d4af37] transition-colors">
                    {p.title}
                  </h3>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/5 text-slate-400 border border-white/5">
                    {p.count} Questions
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fast Memory Hack Callout */}
      <div
        onClick={() => onSelectTab('mnemonics')}
        className="p-5 rounded-lg border border-[#d4af37]/25 bg-[#d4af37]/[0.03] hover:bg-[#d4af37]/[0.06] cursor-pointer transition-colors mb-8"
      >
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="text-[11px] font-mono uppercase tracking-widest text-[#d4af37] font-semibold mb-1">
              Rapid Exam Formula
            </div>
            <h3 className="font-editorial text-lg text-white font-medium">
              ⚡ Fast Memory Hacks (Mnemonics)
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Memorize long lists in seconds using proven rhymes: <em>L-S-F-L-C-P-W</em>, <em>E-L-E-P</em>, <em>I-D-A-E-S-I-F</em>, and <em>DMAIC</em>.
            </p>
          </div>
          <span className="text-sm font-editorial text-[#d4af37] shrink-0">Open →</span>
        </div>
      </div>

      {/* Semester 3 Callout */}
      <div
        onClick={() => {
          onSelectSemester(3);
          onSelectTab('sem3');
        }}
        className="p-5 rounded-lg border border-white/5 bg-[#13151b]/40 hover:bg-[#13151b] cursor-pointer transition-colors"
      >
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="text-[11px] font-mono uppercase tracking-widest text-slate-500 font-semibold mb-1">
              Upcoming Subjects
            </div>
            <h3 className="font-editorial text-base text-slate-200 font-medium">
              3rd Semester Subjects Archive
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Corporate Accounting, Company Law, Income Tax, and Business Statistics roadmap.
            </p>
          </div>
          <span className="text-xs text-slate-400 shrink-0">Switch Sem →</span>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { SEMESTERS } from '../../data/semesters';

export const Sem3View: React.FC = () => {
  const sem3 = SEMESTERS.find((s) => s.id === 3) || SEMESTERS[1];

  return (
    <div className="py-4 sm:py-8">
      {/* Header */}
      <div className="mb-8 pb-6 border-b border-white/5">
        <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-mono font-bold uppercase tracking-wider text-[#d4af37] bg-[#d4af37]/10 border border-[#d4af37]/25 mb-4">
          Semester 3 Archive
        </span>
        <h1 className="font-editorial text-2xl sm:text-4xl font-normal text-white leading-tight mb-2">
          3rd Semester (FYUGP / NEP) Subjects
        </h1>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-sans-reader">
          Advanced Corporate Accounting, Company Law, Income Tax, and Business Statistics under the Gauhati University syllabus.
        </p>
      </div>

      {/* Subject Cards */}
      <div className="space-y-4">
        {sem3.subjects.map((sub) => (
          <div key={sub.id} className="p-5 rounded-lg border border-white/5 bg-[#0d0e12] hover:border-[#d4af37]/30 transition-colors">
            <div className="flex items-center justify-between gap-3 mb-2">
              <span className="text-xs font-mono text-[#d4af37] bg-[#d4af37]/10 px-2 py-0.5 rounded border border-[#d4af37]/20">
                {sub.code}
              </span>
              <span className="text-xs font-mono text-slate-500">
                {sub.credit} Credits
              </span>
            </div>

            <h3 className="font-editorial text-lg font-medium text-white mb-2">
              {sub.name}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans-reader">
              {sub.description}
            </p>

            <div className="mt-4 pt-3 border-t border-white/[0.03] flex items-center justify-between text-xs text-slate-500">
              <span>Roadmap Slot Ready</span>
              <span className="font-mono text-[#d4af37]">Ready for PYQs</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

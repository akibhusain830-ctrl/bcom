import React, { useState, useMemo } from 'react';
import { BOM_PYQS } from '../../data/bom/pyqs';
import { FormattedAnswer } from '../FormattedAnswer';
import { Search, X } from 'lucide-react';

interface PyqViewProps {
  year: '2025' | '2024' | '2023' | 'Model-40M';
}

export const PyqView: React.FC<PyqViewProps> = ({ year }) => {
  const [filterSection, setFilterSection] = useState<'all' | '1' | '2' | '5' | '10'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const paperQuestions = useMemo(() => {
    return BOM_PYQS.filter((q) => q.year === year);
  }, [year]);

  const sec1 = paperQuestions.filter((q) => q.marks === 1);
  const sec2 = paperQuestions.filter((q) => q.marks === 2);
  const sec3 = paperQuestions.filter((q) => q.marks === 5);
  const sec4 = paperQuestions.filter((q) => q.marks === 10);

  const getTitle = () => {
    switch (year) {
      case '2025':
        return 'Gauhati University B.Com 1st Sem 2025 (NEP / Minor SET-A)';
      case '2024':
        return 'Gauhati University B.Com 1st Sem 2024 (Commerce BCM 1)';
      case '2023':
        return 'Gauhati University B.Com 1st Sem 2023 (Commerce BCM0100104)';
      case 'Model-40M':
        return 'Sessional Examination Model Paper (40 Marks)';
    }
  };

  const getSub = () => {
    return year === 'Model-40M'
      ? 'Time: 2 Hours · Full Marks: 40 · Sessional Focus on Units 1 & 2'
      : 'Time: 2½ Hours · Full Marks: 60 · Complete Syllabus Model Solutions';
  };

  const sectionsToRender = [
    { id: '1', title: 'Section 1: Objective & MCQs (1 Mark each)', items: sec1 },
    { id: '2', title: 'Section 2: Short Answers (2 Marks each)', items: sec2 },
    { id: '5', title: 'Section 3: Medium Analytical Answers (5 Marks each)', items: sec3 },
    { id: '10', title: 'Section 4: Long Essay Answers (10 Marks each)', items: sec4 },
  ].filter((sec) => {
    if (filterSection === 'all') return sec.items.length > 0;
    return sec.id === filterSection && sec.items.length > 0;
  });

  return (
    <div className="py-2 sm:py-6">
      {/* Paper Header (Clean Editorial Title) */}
      <div className="mb-8 pb-6 border-b border-white/5">
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-mono font-bold uppercase tracking-wider text-[#d4af37] bg-[#d4af37]/10 border border-[#d4af37]/25">
            Full Solved Paper
          </span>
          <span className="text-slate-600">•</span>
          <span className="text-[11px] font-mono text-slate-400">
            {paperQuestions.length} Total Questions
          </span>
        </div>

        <h1 className="font-editorial text-2xl sm:text-3xl font-medium text-white leading-tight mb-2">
          {getTitle()}
        </h1>
        <p className="text-slate-400 text-xs sm:text-sm font-mono mb-4">
          {getSub()}
        </p>

        {/* Section Quick Jump Filter Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2">
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1">
            <button
              onClick={() => setFilterSection('all')}
              className={`px-3 py-1 rounded text-xs font-mono transition-colors shrink-0 ${
                filterSection === 'all'
                  ? 'bg-[#d4af37] text-black font-semibold'
                  : 'bg-[#13151b] text-slate-400 hover:text-white border border-white/5'
              }`}
            >
              All ({paperQuestions.length})
            </button>
            {sec1.length > 0 && (
              <button
                onClick={() => setFilterSection('1')}
                className={`px-3 py-1 rounded text-xs font-mono transition-colors shrink-0 ${
                  filterSection === '1'
                    ? 'bg-[#d4af37] text-black font-semibold'
                    : 'bg-[#13151b] text-slate-400 hover:text-white border border-white/5'
                }`}
              >
                1M MCQs ({sec1.length})
              </button>
            )}
            {sec2.length > 0 && (
              <button
                onClick={() => setFilterSection('2')}
                className={`px-3 py-1 rounded text-xs font-mono transition-colors shrink-0 ${
                  filterSection === '2'
                    ? 'bg-[#d4af37] text-black font-semibold'
                    : 'bg-[#13151b] text-slate-400 hover:text-white border border-white/5'
                }`}
              >
                2M Short ({sec2.length})
              </button>
            )}
            {sec3.length > 0 && (
              <button
                onClick={() => setFilterSection('5')}
                className={`px-3 py-1 rounded text-xs font-mono transition-colors shrink-0 ${
                  filterSection === '5'
                    ? 'bg-[#d4af37] text-black font-semibold'
                    : 'bg-[#13151b] text-slate-400 hover:text-white border border-white/5'
                }`}
              >
                5M Medium ({sec3.length})
              </button>
            )}
            {sec4.length > 0 && (
              <button
                onClick={() => setFilterSection('10')}
                className={`px-3 py-1 rounded text-xs font-mono transition-colors shrink-0 ${
                  filterSection === '10'
                    ? 'bg-[#d4af37] text-black font-semibold'
                    : 'bg-[#13151b] text-slate-400 hover:text-white border border-white/5'
                }`}
              >
                10M Essays ({sec4.length})
              </button>
            )}
          </div>

          {/* Mini Search Filter within Paper */}
          <div className="relative sm:w-64 shrink-0">
            <Search className="w-3.5 h-3.5 text-slate-500 absolute left-2.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search in this paper..."
              className="w-full bg-[#13151b] border border-white/5 rounded-md pl-8 pr-7 py-1 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#d4af37]/40"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Render Sections with Answers Directly Visible (Continuous Reading) */}
      {sectionsToRender.map((sec, sIdx) => {
        const matchingItems = searchQuery.trim()
          ? sec.items.filter(
              (q) =>
                q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                q.modelAnswer.toLowerCase().includes(searchQuery.toLowerCase()) ||
                q.mnemonic?.toLowerCase().includes(searchQuery.toLowerCase())
            )
          : sec.items;

        if (matchingItems.length === 0) return null;

        return (
          <section key={sIdx} className="mb-14">
            <div className="mb-6 pb-2 border-b border-white/5 flex items-center justify-between">
              <h2 className="font-editorial text-lg sm:text-xl font-medium text-white">
                {sec.title}
              </h2>
              <span className="text-xs font-mono text-slate-500">
                {matchingItems.length} Questions
              </span>
            </div>

            <div className="space-y-10">
              {matchingItems.map((q, qIdx) => (
                <article
                  key={q.id}
                  className="border-b border-white/[0.06] pb-10 mb-8"
                >
                  {/* Question Meta & Title */}
                  <div className="mb-3">
                    <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400 mb-1.5 flex-wrap">
                      <span className="text-[#d4af37] font-semibold">Q{qIdx + 1}</span>
                      <span className="text-slate-600">•</span>
                      <span>Unit {q.unit}</span>
                      <span className="text-slate-600">•</span>
                      <span className={q.marks === 10 ? 'text-amber-300/80 bg-amber-400/10 px-1.5 py-0.2 rounded border border-amber-400/20' : ''}>
                        {q.marks} {q.marks === 1 ? 'Mark' : 'Marks'}
                      </span>
                    </div>

                    <h3 className="font-editorial text-base sm:text-lg font-medium text-white leading-snug">
                      {q.question}
                    </h3>
                  </div>

                  {/* MCQ Options List (if present) */}
                  {q.options && (
                    <div className="my-3 space-y-1.5">
                      {q.options.map((opt, oIdx) => {
                        const isCorrect = q.correctOption && opt.includes(q.correctOption);
                        return (
                          <div
                            key={oIdx}
                            className={`p-2 rounded text-xs font-mono transition-colors flex items-center justify-between ${
                              isCorrect
                                ? 'bg-[#d4af37]/10 text-[#d4af37] font-semibold border border-[#d4af37]/30'
                                : 'bg-[#13151b] text-slate-400 border border-white/[0.02]'
                            }`}
                          >
                            <span>{opt}</span>
                            {isCorrect && (
                              <span className="text-[10px] text-[#d4af37] font-bold uppercase tracking-wider">
                                Correct
                              </span>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* Memory Mnemonic Callout (if present) */}
                  {q.mnemonic && (
                    <div className="memorize-box">
                      <div className="memorize-title">Mnemonic Formula</div>
                      <span className="text-slate-200">{q.mnemonic}</span>
                    </div>
                  )}

                  {/* Flowchart / Diagram Box (if present) */}
                  {q.diagram && (
                    <div className="my-5 rounded-md border border-white/[0.06] bg-black/25 overflow-hidden">
                      <div className="px-3.5 py-1.5 border-b border-white/[0.04] flex items-center justify-between text-[11px] font-mono text-slate-400 bg-white/[0.015]">
                        <span className="flex items-center gap-1.5 text-slate-300">
                          <span className="text-xs">📊</span> Visual Structure Flowchart
                        </span>
                        <span className="text-[10px] text-slate-500 uppercase tracking-wider">Exam Blueprint</span>
                      </div>
                      <pre className="p-3.5 sm:p-4 font-mono text-xs sm:text-[12.5px] text-slate-300 leading-relaxed overflow-x-auto no-scrollbar whitespace-pre">
                        {q.diagram}
                      </pre>
                    </div>
                  )}

                  {/* Model Answer Directly Rendered with FormattedAnswer */}
                  <FormattedAnswer content={q.modelAnswer} />

                  {/* Corporate Example Tag (Quiet Inline Marginalia) */}
                  {q.corporateExample && (
                    <div className="mt-4 pt-3 border-t border-white/[0.04] text-xs text-slate-400 flex items-start gap-2">
                      <span className="text-slate-500 select-none">🏢</span>
                      <div>
                        <span className="text-slate-300 font-medium mr-1.5">Corporate Case:</span>
                        <span>{q.corporateExample}</span>
                      </div>
                    </div>
                  )}

                  {/* Examiner Tip (Soft Gold Marginalia) */}
                  {q.examinerTip && (
                    <div className="mt-2 text-xs text-slate-400 flex items-start gap-2">
                      <span className="text-amber-400 select-none">🎯</span>
                      <div>
                        <span className="text-[#d4af37]/90 font-medium mr-1.5">
                          {q.marks === 10 ? 'Examiner Key for 9–10 Marks:' : 'Examiner Key:'}
                        </span>
                        <span className="text-slate-300">{q.examinerTip}</span>
                      </div>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
};

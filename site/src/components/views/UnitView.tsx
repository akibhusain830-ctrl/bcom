import React, { useState, useMemo } from 'react';
import { BOM_UNITS } from '../../data/bom/units';
import { BOM_PYQS } from '../../data/bom/pyqs';
import { FormattedAnswer } from '../FormattedAnswer';
import { Search, X, Zap, Award } from 'lucide-react';

interface UnitViewProps {
  unitId: 1 | 2 | 3 | 4 | 5;
}

export const UnitView: React.FC<UnitViewProps> = ({ unitId }) => {
  const [filterSection, setFilterSection] = useState<'all' | 'short' | 'medium' | 'essay'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const unit = BOM_UNITS.find((u) => u.id === unitId) || BOM_UNITS[0];
  const allUnitQuestions = BOM_PYQS.filter((q) => q.unit === unitId);

  // Group by marks
  const shortQuestions = allUnitQuestions.filter((q) => q.marks <= 2);
  const mediumQuestions = allUnitQuestions.filter((q) => q.marks === 5);
  const essayQuestions = allUnitQuestions.filter((q) => q.marks === 10);

  // Filter based on selected section and search query
  const filteredQuestions = useMemo(() => {
    let result = allUnitQuestions;

    if (filterSection === 'short') {
      result = result.filter((q) => q.marks <= 2);
    } else if (filterSection === 'medium') {
      result = result.filter((q) => q.marks === 5);
    } else if (filterSection === 'essay') {
      result = result.filter((q) => q.marks === 10);
    }

    if (searchQuery.trim()) {
      const qLower = searchQuery.toLowerCase();
      result = result.filter(
        (q) =>
          q.question.toLowerCase().includes(qLower) ||
          q.modelAnswer.toLowerCase().includes(qLower) ||
          q.mnemonic?.toLowerCase().includes(qLower)
      );
    }

    return result;
  }, [allUnitQuestions, filterSection, searchQuery]);

  const displayedShort = filteredQuestions.filter((q) => q.marks <= 2);
  const displayedMedium = filteredQuestions.filter((q) => q.marks === 5);
  const displayedEssay = filteredQuestions.filter((q) => q.marks === 10);

  // 80+ Blueprint advice per unit
  const getUnitBlueprint = () => {
    switch (unitId) {
      case 1:
        return 'Critical for 10M: Memorize the 7 factors for starting a business (L-S-F-L-C-P-W) and Joint Stock Company merits/demerits. High internal sessional weightage.';
      case 2:
        return 'Critical for 10M: Always draw Carroll\'s 4-tier CSR Pyramid diagram and the 3 Concentric Layers (Micro, Meso, Macro PESTLE) box diagram.';
      case 3:
        return 'Critical for 10M: Decision-making 7 steps repeats every year! Pair with Centralisation vs Decentralisation and the Matrix organisation grid diagram.';
      case 4:
        return 'Critical for 10M: Maslow\'s Need Hierarchy pyramid + 3 Leadership styles continuum + Planning vs Controlling feedback loop diagram guarantees full marks.';
      case 5:
        return 'Critical for 10M: Quote Hammer & Champy with 4 BPR keywords + draw the Six Sigma DMAIC cycle + Work-Life Balance / Flexi-time points.';
    }
  };

  return (
    <div className="py-2 sm:py-6">
      {/* Unit Header Badge & Overview */}
      <div className="mb-8 pb-6 border-b border-white/5">
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-mono font-bold uppercase tracking-wider text-[#d4af37] bg-[#d4af37]/10 border border-[#d4af37]/25">
            Unit {unit.id} Syllabus Guide
          </span>
          <span className="text-slate-600">•</span>
          <span className="text-[11px] font-mono text-slate-400">
            {unit.classes} Classes
          </span>
          <span className="text-slate-600">•</span>
          <span className="text-[11px] font-mono text-[#d4af37] bg-white/5 px-2 py-0.5 rounded border border-white/10">
            {allUnitQuestions.length} Curated Exam Questions
          </span>
        </div>

        <h1 className="font-editorial text-2xl sm:text-3xl font-medium text-white leading-tight mb-2">
          {unit.title}
        </h1>
        <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-sans-reader">
          {unit.description}
        </p>

        {/* 80+ Strategy Blueprint Box */}
        <div className="mt-4 p-3.5 rounded-lg bg-[#d4af37]/[0.04] border border-[#d4af37]/25 flex items-start gap-3">
          <Award className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
          <div className="text-xs">
            <span className="font-mono font-bold text-[#d4af37] uppercase tracking-wider block mb-0.5">
              80+ Exam Strategy Blueprint
            </span>
            <p className="text-slate-300 leading-relaxed font-sans-reader">
              {getUnitBlueprint()}
            </p>
          </div>
        </div>

        {/* Prescribed Syllabus Topics Pills */}
        <div className="mt-4 pt-4 border-t border-white/[0.04]">
          <span className="text-[11px] font-mono uppercase tracking-widest text-slate-500 block mb-2">
            Prescribed Syllabus Topics:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {unit.topics.map((t, idx) => (
              <span key={idx} className="text-xs px-2.5 py-1 rounded bg-[#13151b] border border-white/5 text-slate-300">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Section Quick Jump Filter Bar */}
        <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1">
            <button
              onClick={() => setFilterSection('all')}
              className={`px-3 py-1 rounded text-xs font-mono transition-colors shrink-0 ${
                filterSection === 'all'
                  ? 'bg-[#d4af37] text-black font-semibold'
                  : 'bg-[#13151b] text-slate-400 hover:text-white border border-white/5'
              }`}
            >
              All ({allUnitQuestions.length})
            </button>
            <button
              onClick={() => setFilterSection('short')}
              className={`px-3 py-1 rounded text-xs font-mono transition-colors shrink-0 ${
                filterSection === 'short'
                  ? 'bg-[#d4af37] text-black font-semibold'
                  : 'bg-[#13151b] text-slate-400 hover:text-white border border-white/5'
              }`}
            >
              1M & 2M ({shortQuestions.length})
            </button>
            <button
              onClick={() => setFilterSection('medium')}
              className={`px-3 py-1 rounded text-xs font-mono transition-colors shrink-0 ${
                filterSection === 'medium'
                  ? 'bg-[#d4af37] text-black font-semibold'
                  : 'bg-[#13151b] text-slate-400 hover:text-white border border-white/5'
              }`}
            >
              5M Analytical ({mediumQuestions.length})
            </button>
            <button
              onClick={() => setFilterSection('essay')}
              className={`px-3 py-1 rounded text-xs font-mono transition-colors shrink-0 ${
                filterSection === 'essay'
                  ? 'bg-[#d4af37] text-black font-semibold'
                  : 'bg-[#13151b] text-slate-400 hover:text-white border border-white/5'
              }`}
            >
              10M Essays ({essayQuestions.length})
            </button>
          </div>

          {/* Mini Search Filter within Unit */}
          <div className="relative sm:w-64 shrink-0">
            <Search className="w-3.5 h-3.5 text-slate-500 absolute left-2.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={`Search Unit ${unit.id} topics...`}
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

      {/* No Matches Found */}
      {filteredQuestions.length === 0 && (
        <div className="py-12 text-center text-slate-500 text-xs">
          No questions found matching "{searchQuery}" in Unit {unit.id}.
        </div>
      )}

      {/* Section A: Quick Definitions (1M & 2M) */}
      {(filterSection === 'all' || filterSection === 'short') && displayedShort.length > 0 && (
        <section className="mb-14">
          <div className="mb-6 pb-2 border-b border-white/5 flex items-center justify-between">
            <div>
              <h2 className="font-editorial text-lg sm:text-xl font-medium text-white flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#d4af37]" />
                Section A: Quick Definitions & Objective (1M – 2M)
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">High-frequency scoring terms and definitions</p>
            </div>
            <span className="text-xs font-mono text-slate-500">
              {displayedShort.length} Questions
            </span>
          </div>

          <div className="space-y-8">
            {displayedShort.map((q, qIdx) => (
              <article key={q.id} className="border-b border-white/[0.06] pb-8">
                <div className="mb-2">
                  <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400 mb-1 flex-wrap">
                    <span className="text-[#d4af37] font-semibold">Q{qIdx + 1}</span>
                    <span className="text-slate-600">•</span>
                    <span>{q.marks} {q.marks === 1 ? 'Mark' : 'Marks'}</span>
                    <span className="text-slate-600">•</span>
                    <span className="text-slate-300 bg-white/5 px-1.5 py-0.2 rounded border border-white/5">
                      {q.year === 'Model-40M' ? 'Model Exam' : `${q.year} Final`}
                    </span>
                  </div>
                  <h3 className="font-editorial text-base sm:text-lg font-medium text-white">
                    {q.question}
                  </h3>
                </div>

                {/* MCQ Options (if present) */}
                {q.options && (
                  <div className="my-2.5 space-y-1">
                    {q.options.map((opt, oIdx) => {
                      const isCorrect = q.correctOption && opt.includes(q.correctOption);
                      return (
                        <div
                          key={oIdx}
                          className={`p-1.5 rounded text-xs font-mono flex items-center justify-between ${
                            isCorrect
                              ? 'bg-[#d4af37]/10 text-[#d4af37] font-semibold border border-[#d4af37]/30'
                              : 'bg-[#13151b] text-slate-400 border border-white/[0.02]'
                          }`}
                        >
                          <span>{opt}</span>
                          {isCorrect && (
                            <span className="text-[10px] text-[#d4af37] font-bold uppercase">Correct</span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}

                {q.mnemonic && (
                  <div className="memorize-box">
                    <div className="memorize-title">Mnemonic Formula</div>
                    <span className="text-slate-200">{q.mnemonic}</span>
                  </div>
                )}

                <FormattedAnswer content={q.modelAnswer} />

                {q.examinerTip && (
                  <div className="mt-3 text-xs text-slate-400 italic">
                    <strong className="text-[#d4af37] font-normal not-italic">Scoring Key: </strong>
                    <span>{q.examinerTip}</span>
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>
      )}

      {/* Section B: Medium Analytical Explanations (5 Marks) */}
      {(filterSection === 'all' || filterSection === 'medium') && displayedMedium.length > 0 && (
        <section className="mb-14">
          <div className="mb-6 pb-2 border-b border-white/5 flex items-center justify-between">
            <div>
              <h2 className="font-editorial text-lg sm:text-xl font-medium text-white">
                Section B: Medium Explanations (5 Marks)
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">Tested analytical questions with flowcharts & diagrams (~1 page each)</p>
            </div>
            <span className="text-xs font-mono text-slate-500">
              {displayedMedium.length} Questions
            </span>
          </div>

          <div className="space-y-8">
            {displayedMedium.map((q, qIdx) => (
              <article key={q.id} className="border-b border-white/[0.06] pb-8">
                <div className="mb-2">
                  <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400 mb-1 flex-wrap">
                    <span className="text-[#d4af37] font-semibold">Q{qIdx + 1}</span>
                    <span className="text-slate-600">•</span>
                    <span>5 Marks</span>
                    <span className="text-slate-600">•</span>
                    <span className="text-slate-300 bg-white/5 px-1.5 py-0.2 rounded border border-white/5">
                      {q.year === 'Model-40M' ? 'Model Exam / Syllabus' : `${q.year} Final`}
                    </span>
                  </div>
                  <h3 className="font-editorial text-base sm:text-lg font-medium text-white">
                    {q.question}
                  </h3>
                </div>

                {q.mnemonic && (
                  <div className="memorize-box">
                    <div className="memorize-title">Mnemonic Formula</div>
                    <span className="text-slate-200">{q.mnemonic}</span>
                  </div>
                )}

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

                <FormattedAnswer content={q.modelAnswer} />

                {/* Subtle Margins for Corporate Case & Scoring Key (Zero Card Clutter) */}
                {q.corporateExample && (
                  <div className="mt-4 pt-3 border-t border-white/[0.04] text-xs text-slate-400 flex items-start gap-2">
                    <span className="text-slate-500 select-none">🏢</span>
                    <div>
                      <span className="text-slate-300 font-medium mr-1.5">Corporate Case:</span>
                      <span>{q.corporateExample}</span>
                    </div>
                  </div>
                )}

                {q.examinerTip && (
                  <div className="mt-2 text-xs text-slate-400 flex items-start gap-2">
                    <span className="text-amber-400 select-none">🎯</span>
                    <div>
                      <span className="text-[#d4af37]/90 font-medium mr-1.5">Examiner Key:</span>
                      <span className="text-slate-300">{q.examinerTip}</span>
                    </div>
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>
      )}

      {/* Section C: High-Weight Essays (10 Marks) */}
      {(filterSection === 'all' || filterSection === 'essay') && displayedEssay.length > 0 && (
        <section className="mb-14">
          <div className="mb-6 pb-2 border-b border-white/5 flex items-center justify-between">
            <div>
              <h2 className="font-editorial text-lg sm:text-xl font-medium text-white">
                Section C: High-Weight Essays (10 Marks)
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">Comprehensive essays with comparisons & scholar definitions (2–2½ pages each)</p>
            </div>
            <span className="text-xs font-mono text-slate-500">
              {displayedEssay.length} Questions
            </span>
          </div>

          <div className="space-y-12">
            {displayedEssay.map((q, qIdx) => (
              <article
                key={q.id}
                className="border-b border-white/[0.06] pb-12 mb-10"
              >
                <div className="mb-4">
                  <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400 mb-2 flex-wrap">
                    <span className="text-[#d4af37] font-semibold">Essay {qIdx + 1}</span>
                    <span className="text-slate-600">•</span>
                    <span className="text-xs font-mono text-amber-300/80 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                      10 Marks
                    </span>
                    <span className="text-slate-600">•</span>
                    <span className="text-slate-300">
                      {q.year === 'Model-40M' ? 'Model Exam / Syllabus' : `${q.year} Final`}
                    </span>
                  </div>
                  <h3 className="font-editorial text-xl sm:text-2xl font-medium text-white leading-snug">
                    {q.question}
                  </h3>
                </div>

                {q.mnemonic && (
                  <div className="memorize-box">
                    <div className="memorize-title">Mnemonic Formula</div>
                    <span className="text-slate-200">{q.mnemonic}</span>
                  </div>
                )}

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

                <FormattedAnswer content={q.modelAnswer} />

                {/* Subtle Margins for Corporate Case & Scoring Key */}
                {q.corporateExample && (
                  <div className="mt-4 pt-3 border-t border-white/[0.04] text-xs text-slate-400 flex items-start gap-2">
                    <span className="text-slate-500 select-none">🏢</span>
                    <div>
                      <span className="text-slate-300 font-medium mr-1.5">Corporate Case:</span>
                      <span>{q.corporateExample}</span>
                    </div>
                  </div>
                )}

                {q.examinerTip && (
                  <div className="mt-2 text-xs text-slate-400 flex items-start gap-2">
                    <span className="text-amber-400 select-none">🎯</span>
                    <div>
                      <span className="text-[#d4af37]/90 font-medium mr-1.5">Scoring Key for 9–10 Marks:</span>
                      <span className="text-slate-300">{q.examinerTip}</span>
                    </div>
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

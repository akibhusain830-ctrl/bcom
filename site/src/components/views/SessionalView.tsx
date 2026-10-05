import React, { useState, useMemo } from 'react';
import { SESSIONAL_PAPERS } from '../../data/bom/sessionalData';
import { FormattedAnswer } from '../FormattedAnswer';
import { Search, X, Zap, Award, BookOpen } from 'lucide-react';

interface SessionalViewProps {
  initialSet?: 'sessional-a' | 'sessional-b';
  onSelectSet?: (set: 'sessional-a' | 'sessional-b') => void;
}

export const SessionalView: React.FC<SessionalViewProps> = ({
  initialSet = 'sessional-a',
  onSelectSet,
}) => {
  const [selectedSetId, setSelectedSetId] = useState<'sessional-a' | 'sessional-b'>(initialSet);
  const [filterSection, setFilterSection] = useState<'all' | '2' | '5' | '10'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const currentPaper = useMemo(() => {
    return SESSIONAL_PAPERS.find((p) => p.id === selectedSetId) || SESSIONAL_PAPERS[0];
  }, [selectedSetId]);

  const handleSwitchSet = (setId: 'sessional-a' | 'sessional-b') => {
    setSelectedSetId(setId);
    setFilterSection('all');
    setSearchQuery('');
    if (onSelectSet) onSelectSet(setId);
    if (typeof window !== 'undefined') {
      window.location.hash = setId === 'sessional-a' ? 'sessionalA' : 'sessionalB';
    }
  };

  const sec2 = currentPaper.questions.filter((q) => q.marks === 2);
  const sec5 = currentPaper.questions.filter((q) => q.marks === 5);
  const sec10 = currentPaper.questions.filter((q) => q.marks === 10);

  const sectionsToRender = [
    {
      id: '2',
      title: 'Section A: Short Answer Questions (2 Marks × 5 = 10 Marks)',
      subtitle: 'Compulsory foundational terms and definitions',
      items: sec2,
    },
    {
      id: '5',
      title: 'Section B: Medium Explanations (5 Marks × 2 = 10 Marks)',
      subtitle: 'Analytical questions with flowcharts & diagrams (Answer any two in exam)',
      items: sec5,
    },
    {
      id: '10',
      title: 'Section C: High-Weight Essays (10 Marks × 2 = 20 Marks)',
      subtitle: 'Comprehensive essays with comparisons & scholar models (Answer any two in exam)',
      items: sec10,
    },
  ].filter((sec) => {
    if (filterSection === 'all') return sec.items.length > 0;
    return sec.id === filterSection && sec.items.length > 0;
  });

  return (
    <div className="py-2 sm:py-6">
      {/* Paper Header */}
      <div className="mb-8 pb-6 border-b border-white/5">
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-mono font-bold uppercase tracking-wider text-[#d4af37] bg-[#d4af37]/10 border border-[#d4af37]/25">
            College Sessional Exam (40M)
          </span>
          <span className="text-slate-600">•</span>
          <span className="text-[11px] font-mono text-[#d4af37] font-semibold">
            Strictly Units 1, 2 & 3 Only
          </span>
          <span className="text-slate-600">•</span>
          <span className="text-[11px] font-mono text-slate-400">
            Time: 2 Hours · Full Marks: 40
          </span>
        </div>

        <h1 className="font-editorial text-2xl sm:text-3xl font-medium text-white leading-tight mb-2">
          {currentPaper.title}
        </h1>
        <p className="text-slate-400 text-xs sm:text-sm font-sans-reader mb-4">
          {currentPaper.subtitle}
        </p>

        {/* Paper Toggle Switcher (Set A vs Set B) */}
        <div className="flex bg-[#111318] border border-white/5 rounded-lg p-1 mb-5 max-w-md">
          <button
            onClick={() => handleSwitchSet('sessional-a')}
            className={`flex-1 py-1.5 px-3 rounded text-xs font-mono transition-all flex items-center justify-center gap-2 ${
              selectedSetId === 'sessional-a'
                ? 'bg-[#d4af37] text-black font-semibold shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <span>📝</span> Set A: Core Foundations (40M)
          </button>
          <button
            onClick={() => handleSwitchSet('sessional-b')}
            className={`flex-1 py-1.5 px-3 rounded text-xs font-mono transition-all flex items-center justify-center gap-2 ${
              selectedSetId === 'sessional-b'
                ? 'bg-[#d4af37] text-black font-semibold shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <span>🎯</span> Set B: Advanced 80+ (40M)
          </button>
        </div>

        {/* 80+ Sessional Strategy Blueprint Callout */}
        <div className="p-3.5 sm:p-4 rounded-lg bg-[#d4af37]/[0.03] border border-[#d4af37]/20 flex items-start gap-3 mb-6 text-xs font-sans-reader">
          <Award className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
          <div>
            <div className="font-semibold text-[#d4af37] mb-1">
              80+ Sessional Blueprint: Units 1, 2 & 3 Combined
            </div>
            <p className="text-slate-300 leading-relaxed mb-1">
              {currentPaper.blueprintTip}
            </p>
            <p className="text-slate-400 text-[11px]">
              <strong>Exam Strategy:</strong> In the 40M exam, Section A has 5 compulsory 2M questions; Section B requires 2 out of 4 (5M each); Section C requires 2 out of 4 (10M each). We have solved <strong>all questions</strong> so you can choose your strongest topics freely.
            </p>
          </div>
        </div>

        {/* Section Quick Jump Filter Bar + In-Page Search */}
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
              All ({currentPaper.questions.length})
            </button>
            <button
              onClick={() => setFilterSection('2')}
              className={`px-3 py-1 rounded text-xs font-mono transition-colors shrink-0 ${
                filterSection === '2'
                  ? 'bg-[#d4af37] text-black font-semibold'
                  : 'bg-[#13151b] text-slate-400 hover:text-white border border-white/5'
              }`}
            >
              Section A: 2M ({sec2.length})
            </button>
            <button
              onClick={() => setFilterSection('5')}
              className={`px-3 py-1 rounded text-xs font-mono transition-colors shrink-0 ${
                filterSection === '5'
                  ? 'bg-[#d4af37] text-black font-semibold'
                  : 'bg-[#13151b] text-slate-400 hover:text-white border border-white/5'
              }`}
            >
              Section B: 5M ({sec5.length})
            </button>
            <button
              onClick={() => setFilterSection('10')}
              className={`px-3 py-1 rounded text-xs font-mono transition-colors shrink-0 ${
                filterSection === '10'
                  ? 'bg-[#d4af37] text-black font-semibold'
                  : 'bg-[#13151b] text-slate-400 hover:text-white border border-white/5'
              }`}
            >
              Section C: 10M ({sec10.length})
            </button>
          </div>

          {/* Mini Search Filter */}
          <div className="relative sm:w-64 shrink-0">
            <Search className="w-3.5 h-3.5 text-slate-500 absolute left-2.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search topics (e.g. Fayol, Ethics, Porter)..."
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

      {/* Render Questions (Zero Card Clutter, Clean Editorial Flow) */}
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
              <div>
                <h2 className="font-editorial text-lg sm:text-xl font-medium text-white flex items-center gap-2">
                  {sec.id === '2' && <Zap className="w-4 h-4 text-[#d4af37]" />}
                  {sec.id === '5' && <BookOpen className="w-4 h-4 text-[#d4af37]" />}
                  {sec.id === '10' && <Award className="w-4 h-4 text-[#d4af37]" />}
                  {sec.title}
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">{sec.subtitle}</p>
              </div>
              <span className="text-xs font-mono text-slate-500">
                {matchingItems.length} Solved
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
                      <span className="text-slate-600">•</span>
                      <span className="text-slate-400">
                        {selectedSetId === 'sessional-a' ? 'Sessional Set A' : 'Sessional Set B'}
                      </span>
                    </div>

                    <h3 className="font-editorial text-base sm:text-lg font-medium text-white leading-snug">
                      {q.question}
                    </h3>
                  </div>

                  {/* Memory Mnemonic Formula */}
                  {q.mnemonic && (
                    <div className="memorize-box">
                      <div className="memorize-title">Mnemonic Formula</div>
                      <span className="text-slate-200">{q.mnemonic}</span>
                    </div>
                  )}

                  {/* Flowchart / Diagram Box (Soft, Clean Container) */}
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

                  {/* Model Answer Rendered via FormattedAnswer */}
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

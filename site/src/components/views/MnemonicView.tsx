import React, { useState } from 'react';
import { BOM_MNEMONICS } from '../../data/bom/mnemonics';

export const MnemonicView: React.FC = () => {
  const [selectedUnit, setSelectedUnit] = useState<number | 'all'>('all');

  const filtered = selectedUnit === 'all'
    ? BOM_MNEMONICS
    : BOM_MNEMONICS.filter((m) => m.unit === selectedUnit);

  return (
    <div className="py-2 sm:py-6">
      {/* Header */}
      <div className="mb-8 pb-6 border-b border-white/5">
        <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-mono font-bold uppercase tracking-wider text-[#d4af37] bg-[#d4af37]/10 border border-[#d4af37]/25 mb-3">
          Psychological Memory Engine
        </span>
        <h1 className="font-editorial text-2xl sm:text-3xl font-medium text-white leading-tight mb-2">
          ⚡ Fast Memory Hacks (Mnemonics)
        </h1>
        <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-sans-reader">
          Designed so you can recall long university answers effortlessly under exam pressure. Memorize the short rhyme phrase, recall the bold headings, write in plain English, and score 80+. All answers and formulas are open and ready for continuous reading.
        </p>

        {/* Quick Filter by Unit */}
        <div className="mt-5 flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
          <span className="text-[11px] font-mono uppercase text-slate-500 mr-1 shrink-0">Filter:</span>
          <button
            onClick={() => setSelectedUnit('all')}
            className={`px-3 py-1 rounded text-xs font-mono transition-colors shrink-0 ${
              selectedUnit === 'all'
                ? 'bg-[#d4af37] text-black font-semibold'
                : 'bg-[#13151b] text-slate-400 hover:text-white border border-white/5'
            }`}
          >
            All Units ({BOM_MNEMONICS.length})
          </button>
          {[1, 2, 3, 4, 5].map((u) => {
            const count = BOM_MNEMONICS.filter((m) => m.unit === u).length;
            return (
              <button
                key={u}
                onClick={() => setSelectedUnit(u)}
                className={`px-3 py-1 rounded text-xs font-mono transition-colors shrink-0 ${
                  selectedUnit === u
                    ? 'bg-[#d4af37] text-black font-semibold'
                    : 'bg-[#13151b] text-slate-400 hover:text-white border border-white/5'
                }`}
              >
                Unit {u} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Mnemonics List (Permanently Open, Editorial Layout) */}
      <div className="space-y-12">
        {filtered.map((m, idx) => (
          <article key={m.id} className="border-b border-white/[0.06] pb-10">
            {/* Meta & Heading */}
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2 flex-wrap text-xs">
                <span className="font-mono text-[#d4af37] font-semibold">
                  Unit {m.unit}
                </span>
                <span className="text-slate-600">•</span>
                <span className="font-mono font-bold text-white bg-white/5 px-2.5 py-0.5 rounded border border-white/10 tracking-wider">
                  {m.mnemonic}
                </span>
                <span className="text-slate-600">•</span>
                <span className="text-[11px] font-mono text-slate-500">Hack #{idx + 1}</span>
              </div>

              <h2 className="font-editorial text-xl sm:text-2xl font-medium text-white leading-snug">
                {m.topic}
              </h2>

              <p className="text-sm text-[#d4af37] font-serif italic mt-1.5 bg-[#d4af37]/[0.04] border-l-2 border-[#d4af37] pl-3 py-1">
                Memory Rhyme: "{m.mnemonicPhrase}"
              </p>
            </div>

            {/* Keys Breakdown Table/List */}
            <div className="my-4 space-y-1.5">
              <span className="text-[11px] font-mono uppercase tracking-widest text-slate-500 block mb-2">
                Letter-by-Letter Recall Points:
              </span>
              <div className="my-3 space-y-1">
                {m.keys.map((k, kIdx) => (
                  <div
                    key={kIdx}
                    className="py-1.5 flex items-start gap-3 text-xs sm:text-[13.5px] border-b border-white/[0.03] last:border-none"
                  >
                    <span className="font-mono font-bold text-[#d4af37] w-5 text-center shrink-0 select-none pt-0.5">
                      {k.letter}
                    </span>
                    <div className="flex-1">
                      <strong className="text-white font-medium mr-2">{k.word}:</strong>
                      <span className="text-slate-300 leading-relaxed">{k.meaning}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ASCII Diagram Box (if available) */}
            {m.diagramBox && (
              <div className="my-4">
                <span className="text-[11px] font-mono uppercase tracking-widest text-slate-500 block mb-1.5">
                  Visual Structure Diagram:
                </span>
                <pre className="p-3.5 rounded-md bg-black/25 border border-white/[0.06] font-mono text-xs text-slate-300 leading-relaxed overflow-x-auto no-scrollbar whitespace-pre">
                  {m.diagramBox}
                </pre>
              </div>
            )}

            {/* Plain English Explanation */}
            <div className="memorize-box">
              <div className="memorize-title">In Plain English (How to understand it)</div>
              <span className="text-slate-300 text-sm leading-relaxed">{m.simpleExplanation}</span>
            </div>

            {/* Exam Scoring Key */}
            <div className="mt-3 text-xs text-slate-400 italic">
              <strong className="text-[#d4af37] font-normal not-italic">Scoring Key for Exam: </strong>
              <span>{m.examTip}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

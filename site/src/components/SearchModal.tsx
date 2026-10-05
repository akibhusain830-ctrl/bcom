import React, { useState, useEffect, useRef } from 'react';
import { BOM_PYQS } from '../data/bom/pyqs';
import type { PyqItem } from '../data/bom/pyqs';
import { BOM_MNEMONICS } from '../data/bom/mnemonics';
import { Search, X, Zap } from 'lucide-react';
import { SESSIONAL_SET_A_QUESTIONS, SESSIONAL_SET_B_QUESTIONS } from '../data/bom/sessionalData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectQuestion: (question: PyqItem) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectQuestion,
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const allSearchableQuestions = [...BOM_PYQS, ...SESSIONAL_SET_A_QUESTIONS, ...SESSIONAL_SET_B_QUESTIONS];

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredQuestions = query.trim() === ''
    ? []
    : allSearchableQuestions.filter((q) => {
        const qLower = query.toLowerCase();
        return (
          q.question.toLowerCase().includes(qLower) ||
          q.modelAnswer.toLowerCase().includes(qLower) ||
          q.mnemonic?.toLowerCase().includes(qLower)
        );
      });

  const filteredMnemonics = query.trim() === ''
    ? []
    : BOM_MNEMONICS.filter((m) => {
        const qLower = query.toLowerCase();
        return (
          m.topic.toLowerCase().includes(qLower) ||
          m.mnemonic.toLowerCase().includes(qLower) ||
          m.simpleExplanation.toLowerCase().includes(qLower)
        );
      });

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-[#0d0e12] border border-white/10 rounded-2xl w-full max-w-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]">
        {/* Search Input Bar */}
        <div className="p-4 border-b border-white/5 flex items-center gap-3 bg-[#13151b]">
          <Search className="w-5 h-5 text-[#d4af37] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type any exam topic (e.g. 'Matrix', 'Bounded Rationality', 'Maslow', 'Six Sigma')..."
            className="w-full bg-transparent text-slate-100 placeholder-slate-500 text-sm focus:outline-none"
          />
          {query && (
            <button onClick={() => setQuery('')} className="p-1 text-slate-400 hover:text-white">
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs bg-white/5 text-slate-400 hover:text-white px-2 py-1 rounded border border-white/10"
          >
            ESC
          </button>
        </div>

        {/* Results Container */}
        <div className="p-4 overflow-y-auto space-y-4 no-scrollbar">
          {query.trim() === '' ? (
            <div className="py-8 text-center text-slate-500 text-xs font-sans-reader">
              <p>Type keywords to search across all Solved Question Papers and Mnemonics.</p>
              <div className="mt-4 flex flex-wrap justify-center gap-1.5">
                {['Brick & Click', 'Decision Making', 'Delegation', 'Theory X', 'CSR', 'BPR'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="px-2.5 py-1 rounded-md bg-[#13151b] hover:bg-white/5 border border-white/5 text-slate-400 hover:text-[#d4af37] text-xs transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <>
              {/* Question Matches */}
              {filteredQuestions.length > 0 && (
                <div>
                  <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider block mb-2">
                    Questions ({filteredQuestions.length}):
                  </span>
                  <div className="space-y-2">
                    {filteredQuestions.slice(0, 10).map((q) => (
                      <div
                        key={q.id}
                        onClick={() => {
                          onSelectQuestion(q);
                          onClose();
                        }}
                        className="p-3 rounded-lg bg-[#13151b] hover:bg-[#1a1d26] border border-white/5 cursor-pointer transition-colors"
                      >
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-white/5 text-slate-300 border border-white/5">
                            {q.year}
                          </span>
                          <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-[#d4af37]/10 text-[#d4af37] border border-[#d4af37]/20">
                            {q.marks}M
                          </span>
                          <span className="text-[10px] font-mono text-slate-500">Unit {q.unit}</span>
                        </div>
                        <p className="text-xs sm:text-sm font-editorial font-medium text-white line-clamp-2">
                          {q.question}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Mnemonic Matches */}
              {filteredMnemonics.length > 0 && (
                <div>
                  <span className="text-[11px] font-mono font-bold text-[#d4af37] uppercase tracking-wider block mb-2">
                    Memory Hacks ({filteredMnemonics.length}):
                  </span>
                  <div className="space-y-2">
                    {filteredMnemonics.map((m) => (
                      <div
                        key={m.id}
                        className="p-3 rounded-lg bg-[#d4af37]/[0.04] border border-[#d4af37]/25 flex items-center justify-between gap-3"
                      >
                        <div>
                          <div className="flex items-center gap-1.5 text-xs font-semibold text-[#d4af37] mb-0.5">
                            <Zap className="w-3.5 h-3.5" />
                            <span>{m.topic}</span>
                          </div>
                          <p className="text-xs text-slate-300 italic">"{m.mnemonicPhrase}"</p>
                        </div>
                        <span className="font-mono text-xs font-bold px-2 py-1 rounded bg-[#0d0e12] text-[#d4af37] border border-[#d4af37]/30 shrink-0">
                          {m.mnemonic}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {filteredQuestions.length === 0 && filteredMnemonics.length === 0 && (
                <div className="py-10 text-center text-slate-500 text-xs">
                  No matching exam questions or mnemonics found for "{query}".
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

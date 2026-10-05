import React, { useState } from 'react';
import type { NavTabId } from './Sidebar';

interface MobileDrawerProps {
  activeTab: NavTabId;
  onSelectTab: (tab: NavTabId) => void;
  activeSemId: 1 | 3;
  onSelectSemester: (semId: 1 | 3) => void;
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({
  activeTab,
  onSelectTab,
  activeSemId,
  onSelectSemester,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (tab: NavTabId) => {
    onSelectTab(tab);
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Menu Pill at Bottom Center (Exact ppm-notes style) */}
      <div className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-40">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#0d0e12]/90 hover:bg-[#0d0e12] border border-white/10 backdrop-blur-xl text-[#d4af37] px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider flex items-center gap-2 shadow-2xl active:scale-95 transition-all"
        >
          <span>☰</span> Study Archive
        </button>
      </div>

      {/* Dark Overlay Backdrop */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="lg:hidden fixed inset-0 bg-black/70 backdrop-blur-sm z-50 transition-opacity"
        />
      )}

      {/* Slide-Up Bottom Drawer Sheet */}
      <div
        className={`lg:hidden fixed bottom-0 left-0 right-0 max-h-[82vh] bg-[#0d0e12] border-t border-white/10 rounded-t-2xl z-50 p-6 overflow-y-auto shadow-2xl transition-transform duration-300 ease-out ${
          isOpen ? 'translate-y-0' : 'translate-y-full pointer-events-none'
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-5">
          <h3 className="font-editorial text-base font-semibold text-white">
            All Study Resources
          </h3>
          <button
            onClick={() => setIsOpen(false)}
            className="text-slate-400 hover:text-white text-2xl leading-none p-1"
          >
            &times;
          </button>
        </div>

        {/* Semester Segmented Switcher inside drawer */}
        <div className="flex bg-[#13151b] border border-white/5 rounded-lg p-1 mb-5">
          <button
            onClick={() => onSelectSemester(1)}
            className={`flex-1 py-1.5 rounded text-xs font-semibold transition-all ${
              activeSemId === 1
                ? 'bg-[#1e222e] text-[#d4af37] border border-[#d4af37]/30 shadow-sm'
                : 'text-slate-400'
            }`}
          >
            1st Semester
          </button>
          <button
            onClick={() => {
              onSelectSemester(3);
              handleSelect('sem3');
            }}
            className={`flex-1 py-1.5 rounded text-xs font-semibold transition-all ${
              activeSemId === 3
                ? 'bg-[#1e222e] text-[#d4af37] border border-[#d4af37]/30 shadow-sm'
                : 'text-slate-400'
            }`}
          >
            3rd Semester
          </button>
        </div>

        {/* Drawer Items List */}
        <nav className="flex flex-col space-y-1">
          {activeSemId === 1 ? (
            <>
              <div
                onClick={() => handleSelect('dashboard')}
                className={`py-3 px-2 border-b border-white/[0.03] font-editorial text-sm cursor-pointer ${
                  activeTab === 'dashboard' ? 'text-[#d4af37] font-semibold' : 'text-slate-300'
                }`}
              >
                🏠 Main Dashboard
              </div>
              <div
                onClick={() => handleSelect('unit1')}
                className={`py-3 px-2 border-b border-white/[0.03] font-editorial text-sm cursor-pointer ${
                  activeTab === 'unit1' ? 'text-[#d4af37] font-semibold' : 'text-slate-300'
                }`}
              >
                1 Unit 1: Introduction
              </div>
              <div
                onClick={() => handleSelect('unit2')}
                className={`py-3 px-2 border-b border-white/[0.03] font-editorial text-sm cursor-pointer ${
                  activeTab === 'unit2' ? 'text-[#d4af37] font-semibold' : 'text-slate-300'
                }`}
              >
                2 Unit 2: Business Environment & CSR
              </div>
              <div
                onClick={() => handleSelect('unit3')}
                className={`py-3 px-2 border-b border-white/[0.03] font-editorial text-sm cursor-pointer ${
                  activeTab === 'unit3' ? 'text-[#d4af37] font-semibold' : 'text-slate-300'
                }`}
              >
                3 Unit 3: Planning & Organizing
              </div>
              <div
                onClick={() => handleSelect('unit4')}
                className={`py-3 px-2 border-b border-white/[0.03] font-editorial text-sm cursor-pointer ${
                  activeTab === 'unit4' ? 'text-[#d4af37] font-semibold' : 'text-slate-300'
                }`}
              >
                4 Unit 4: Directing & Controlling
              </div>
              <div
                onClick={() => handleSelect('unit5')}
                className={`py-3 px-2 border-b border-white/[0.03] font-editorial text-sm cursor-pointer ${
                  activeTab === 'unit5' ? 'text-[#d4af37] font-semibold' : 'text-slate-300'
                }`}
              >
                5 Unit 5: Contemporary Issues
              </div>
              <div
                onClick={() => handleSelect('pyq2025')}
                className={`py-3 px-2 border-b border-white/[0.03] font-editorial text-sm cursor-pointer ${
                  activeTab === 'pyq2025' ? 'text-[#d4af37] font-semibold' : 'text-slate-300'
                }`}
              >
                📄 2025 Solved PYQ
              </div>
              <div
                onClick={() => handleSelect('pyq2024')}
                className={`py-3 px-2 border-b border-white/[0.03] font-editorial text-sm cursor-pointer ${
                  activeTab === 'pyq2024' ? 'text-[#d4af37] font-semibold' : 'text-slate-300'
                }`}
              >
                📄 2024 Solved PYQ
              </div>
              <div
                onClick={() => handleSelect('pyq2023')}
                className={`py-3 px-2 border-b border-white/[0.03] font-editorial text-sm cursor-pointer ${
                  activeTab === 'pyq2023' ? 'text-[#d4af37] font-semibold' : 'text-slate-300'
                }`}
              >
                📄 2023 Solved PYQ
              </div>
              <div
                onClick={() => handleSelect('sessionalA')}
                className={`py-3 px-2 border-b border-white/[0.03] font-editorial text-sm cursor-pointer ${
                  activeTab === 'sessionalA' ? 'text-[#d4af37] font-semibold' : 'text-slate-300'
                }`}
              >
                📝 Sessional Set A (40M — Units 1–3)
              </div>
              <div
                onClick={() => handleSelect('sessionalB')}
                className={`py-3 px-2 border-b border-white/[0.03] font-editorial text-sm cursor-pointer ${
                  activeTab === 'sessionalB' ? 'text-[#d4af37] font-semibold' : 'text-slate-300'
                }`}
              >
                🎯 Sessional Set B (40M — Units 1–3)
              </div>
              <div
                onClick={() => handleSelect('mnemonics')}
                className={`py-3 px-2 font-editorial text-sm cursor-pointer ${
                  activeTab === 'mnemonics' ? 'text-[#d4af37] font-semibold' : 'text-slate-300'
                }`}
              >
                ⚡ Fast Memory Hacks (Mnemonics)
              </div>
            </>
          ) : (
            <div
              onClick={() => handleSelect('sem3')}
              className={`py-3 px-2 font-editorial text-sm cursor-pointer ${
                activeTab === 'sem3' ? 'text-[#d4af37] font-semibold' : 'text-slate-300'
              }`}
            >
              📚 All 3rd Semester Subjects
            </div>
          )}
        </nav>
      </div>
    </>
  );
};

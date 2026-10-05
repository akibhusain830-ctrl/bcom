import React from 'react';

export type NavTabId =
  | 'dashboard'
  | 'unit1'
  | 'unit2'
  | 'unit3'
  | 'unit4'
  | 'unit5'
  | 'pyq2025'
  | 'pyq2024'
  | 'pyq2023'
  | 'pyqsessional'
  | 'sessionalA'
  | 'sessionalB'
  | 'mnemonics'
  | 'sem3';

interface SidebarProps {
  activeTab: NavTabId;
  onSelectTab: (tab: NavTabId) => void;
  activeSemId: 1 | 3;
  onSelectSemester: (semId: 1 | 3) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  onSelectTab,
  activeSemId,
  onSelectSemester,
}) => {
  return (
    <aside className="hidden lg:flex w-[290px] bg-[#0d0e12] border-r border-white/5 py-8 px-6 flex-col fixed h-screen z-50 overflow-y-auto no-scrollbar">
      {/* Brand Header */}
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
        <div className="font-editorial text-xl font-medium text-[#d4af37] border border-[#d4af37]/30 px-2.5 py-0.5 rounded bg-[#d4af37]/5">
          B
        </div>
        <div>
          <h1 className="font-editorial text-base font-semibold text-white tracking-tight">
            B.Com Portal
          </h1>
          <p className="text-[10px] text-slate-500 uppercase tracking-widest mt-0.5">
            Score 80+ Edition
          </p>
        </div>
      </div>

      {/* Semester Switcher Segmented Control */}
      <div className="flex bg-[#13151b] border border-white/5 rounded-lg p-1 mb-6">
        <button
          onClick={() => {
            onSelectSemester(1);
            if (activeTab === 'sem3') onSelectTab('dashboard');
          }}
          className={`flex-1 py-1.5 rounded text-xs font-semibold transition-all ${
            activeSemId === 1
              ? 'bg-[#1e222e] text-[#d4af37] border border-[#d4af37]/30 shadow-sm'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          1st Semester
        </button>
        <button
          onClick={() => {
            onSelectSemester(3);
            onSelectTab('sem3');
          }}
          className={`flex-1 py-1.5 rounded text-xs font-semibold transition-all ${
            activeSemId === 3
              ? 'bg-[#1e222e] text-[#d4af37] border border-[#d4af37]/30 shadow-sm'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          3rd Semester
        </button>
      </div>

      {/* Navigation Menu */}
      <nav className="flex flex-col gap-5 text-sm">
        {activeSemId === 1 ? (
          <>
            <div>
              <div className="text-[10px] font-bold uppercase text-slate-500 tracking-widest mb-2 px-1">
                Overview
              </div>
              <div
                onClick={() => onSelectTab('dashboard')}
                className={`flex items-center gap-2.5 px-2.5 py-2 rounded-lg cursor-pointer transition-colors ${
                  activeTab === 'dashboard'
                    ? 'text-[#d4af37] font-semibold bg-[#d4af37]/5'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.02]'
                }`}
              >
                <span>🏠</span> Dashboard
              </div>
            </div>

            <div>
              <div className="text-[10px] font-bold uppercase text-slate-500 tracking-widest mb-2 px-1">
                Syllabus Guides (BOM)
              </div>
              <div className="space-y-0.5">
                {[
                  { id: 'unit1' as NavTabId, num: '1', title: 'Unit 1: Introduction' },
                  { id: 'unit2' as NavTabId, num: '2', title: 'Unit 2: Business Env & CSR' },
                  { id: 'unit3' as NavTabId, num: '3', title: 'Unit 3: Planning & Org' },
                  { id: 'unit4' as NavTabId, num: '4', title: 'Unit 4: Directing & Control' },
                  { id: 'unit5' as NavTabId, num: '5', title: 'Unit 5: Contemporary' },
                ].map((item) => (
                  <div
                    key={item.id}
                    onClick={() => onSelectTab(item.id)}
                    className={`flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg cursor-pointer transition-colors text-[13px] ${
                      activeTab === item.id
                        ? 'text-[#d4af37] font-semibold bg-[#d4af37]/5'
                        : 'text-slate-400 hover:text-white hover:bg-white/[0.02]'
                    }`}
                  >
                    <span className="font-mono text-xs text-slate-500 w-4">{item.num}</span>
                    <span>{item.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sessional Papers Section (Units 1, 2, 3 Focus - 40 Marks) */}
            <div>
              <div className="text-[10px] font-bold uppercase text-slate-500 tracking-widest mb-2 px-1 flex items-center justify-between">
                <span>Sessional (Units 1–3)</span>
                <span className="text-[9px] text-[#d4af37] bg-[#d4af37]/10 px-1.5 py-0.2 rounded font-mono">40 Marks</span>
              </div>
              <div className="space-y-0.5">
                <div
                  onClick={() => onSelectTab('sessionalA')}
                  className={`flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg cursor-pointer transition-colors text-[13px] ${
                    activeTab === 'sessionalA'
                      ? 'text-[#d4af37] font-semibold bg-[#d4af37]/5'
                      : 'text-slate-400 hover:text-white hover:bg-white/[0.02]'
                  }`}
                >
                  <span className="text-xs">📝</span>
                  <div className="flex-1 truncate">
                    <span>Sessional Set A (40M)</span>
                  </div>
                </div>
                <div
                  onClick={() => onSelectTab('sessionalB')}
                  className={`flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg cursor-pointer transition-colors text-[13px] ${
                    activeTab === 'sessionalB'
                      ? 'text-[#d4af37] font-semibold bg-[#d4af37]/5'
                      : 'text-slate-400 hover:text-white hover:bg-white/[0.02]'
                  }`}
                >
                  <span className="text-xs">🎯</span>
                  <div className="flex-1 truncate">
                    <span>Sessional Set B (40M)</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="text-[10px] font-bold uppercase text-slate-500 tracking-widest mb-2 px-1">
                Semester Final PYQs
              </div>
              <div className="space-y-0.5">
                {[
                  { id: 'pyq2025' as NavTabId, icon: '📄', label: '2025 Solved PYQ (60M)' },
                  { id: 'pyq2024' as NavTabId, icon: '📄', label: '2024 Solved PYQ (60M)' },
                  { id: 'pyq2023' as NavTabId, icon: '📄', label: '2023 Solved PYQ (60M)' },
                ].map((item) => (
                  <div
                    key={item.id}
                    onClick={() => onSelectTab(item.id)}
                    className={`flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg cursor-pointer transition-colors text-[13px] ${
                      activeTab === item.id
                        ? 'text-[#d4af37] font-semibold bg-[#d4af37]/5'
                        : 'text-slate-400 hover:text-white hover:bg-white/[0.02]'
                    }`}
                  >
                    <span className="text-xs">{item.icon}</span>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="text-[10px] font-bold uppercase text-slate-500 tracking-widest mb-2 px-1">
                Fast Revision
              </div>
              <div
                onClick={() => onSelectTab('mnemonics')}
                className={`flex items-center gap-2.5 px-2.5 py-2 rounded-lg cursor-pointer transition-colors text-[13px] ${
                  activeTab === 'mnemonics'
                    ? 'text-[#d4af37] font-semibold bg-[#d4af37]/5'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.02]'
                }`}
              >
                <span>⚡</span> Memory Hacks (Mnemonics)
              </div>
            </div>
          </>
        ) : (
          <div>
            <div className="text-[10px] font-bold uppercase text-slate-500 tracking-widest mb-2 px-1">
              3rd Semester Subjects
            </div>
            <div
              onClick={() => onSelectTab('sem3')}
              className={`flex items-center gap-2.5 px-2.5 py-2 rounded-lg cursor-pointer transition-colors ${
                activeTab === 'sem3'
                  ? 'text-[#d4af37] font-semibold bg-[#d4af37]/5'
                  : 'text-slate-400 hover:text-white hover:bg-white/[0.02]'
              }`}
            >
              <span>📚</span> All 3rd Sem Subjects
            </div>
          </div>
        )}
      </nav>
    </aside>
  );
};

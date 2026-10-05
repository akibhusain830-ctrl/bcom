import { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import type { NavTabId } from './components/Sidebar';
import { MobileDrawer } from './components/MobileDrawer';
import { TopBar } from './components/TopBar';
import { DashboardView } from './components/views/DashboardView';
import { UnitView } from './components/views/UnitView';
import { PyqView } from './components/views/PyqView';
import { MnemonicView } from './components/views/MnemonicView';
import { SessionalView } from './components/views/SessionalView';
import { Sem3View } from './components/views/Sem3View';
import { SearchModal } from './components/SearchModal';

const getInitialTab = (): NavTabId => {
  const hash = (typeof window !== 'undefined' ? window.location.hash.replace('#', '') : '') as NavTabId;
  const validTabs: NavTabId[] = [
    'dashboard', 'unit1', 'unit2', 'unit3', 'unit4', 'unit5',
    'pyq2025', 'pyq2024', 'pyq2023', 'pyqsessional', 'sessionalA', 'sessionalB', 'mnemonics', 'sem3'
  ];
  return validTabs.includes(hash) ? hash : 'dashboard';
};

export function App() {
  const [activeTab, setActiveTabState] = useState<NavTabId>(getInitialTab);

  const setActiveTab = (tab: NavTabId) => {
    setActiveTabState(tab);
    if (typeof window !== 'undefined') {
      window.location.hash = tab;
    }
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as NavTabId;
      const validTabs: NavTabId[] = [
        'dashboard', 'unit1', 'unit2', 'unit3', 'unit4', 'unit5',
        'pyq2025', 'pyq2024', 'pyq2023', 'pyqsessional', 'sessionalA', 'sessionalB', 'mnemonics', 'sem3'
      ];
      if (validTabs.includes(hash)) {
        setActiveTabState(hash);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const [activeSemId, setActiveSemId] = useState<1 | 3>(1);
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>('normal');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Global Ctrl+K keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Title for top bar
  const getTopBarTitle = () => {
    switch (activeTab) {
      case 'dashboard':
        return 'B.Com Study Portal — Dashboard';
      case 'unit1':
        return 'Unit 1: Introduction & Formats';
      case 'unit2':
        return 'Unit 2: Business Environment & CSR';
      case 'unit3':
        return 'Unit 3: Planning & Organizing';
      case 'unit4':
        return 'Unit 4: Directing & Controlling';
      case 'unit5':
        return 'Unit 5: Contemporary Issues';
      case 'pyq2025':
        return '2025 Solved Question Paper (60M)';
      case 'pyq2024':
        return '2024 Solved Question Paper (60M)';
      case 'pyq2023':
        return '2023 Solved Question Paper (60M)';
      case 'pyqsessional':
      case 'sessionalA':
        return 'Sessional Set A (40M) — Units 1, 2 & 3';
      case 'sessionalB':
        return 'Sessional Set B (40M) — Units 1, 2 & 3';
      case 'mnemonics':
        return 'Fast Memory Hacks (Mnemonics)';
      case 'sem3':
        return '3rd Semester Subjects Archive';
    }
  };

  const fontSizeClass = {
    normal: 'text-[15px]',
    large: 'text-[17px]',
    xlarge: 'text-[19px]',
  }[fontSize];

  return (
    <div className="min-h-screen bg-[#0a0b0d] text-[#d1d5db] font-sans antialiased">
      {/* App Layout */}
      <div className="flex min-h-screen">
        {/* Desktop Fixed Sidebar */}
        <Sidebar
          activeTab={activeTab}
          onSelectTab={setActiveTab}
          activeSemId={activeSemId}
          onSelectSemester={setActiveSemId}
        />

        {/* Main Interactive Reader Panel */}
        <main className="flex-1 lg:ml-[290px] min-h-screen flex flex-col pb-24 lg:pb-16 w-full max-w-full overflow-x-hidden">
          {/* Sticky Minimalist Top Bar */}
          <TopBar
            title={getTopBarTitle()}
            fontSize={fontSize}
            onChangeFontSize={setFontSize}
            onOpenSearch={() => setIsSearchOpen(true)}
          />

          {/* Reader Container (Max width 720px for optimal reading) */}
          <div className={`w-full max-w-[720px] mx-auto px-4 sm:px-8 my-4 sm:my-8 ${fontSizeClass}`}>
            {activeTab === 'dashboard' && (
              <DashboardView
                onSelectTab={setActiveTab}
                onSelectSemester={setActiveSemId}
              />
            )}
            {activeTab === 'unit1' && <UnitView unitId={1} />}
            {activeTab === 'unit2' && <UnitView unitId={2} />}
            {activeTab === 'unit3' && <UnitView unitId={3} />}
            {activeTab === 'unit4' && <UnitView unitId={4} />}
            {activeTab === 'unit5' && <UnitView unitId={5} />}

            {activeTab === 'pyq2025' && <PyqView year="2025" />}
            {activeTab === 'pyq2024' && <PyqView year="2024" />}
            {activeTab === 'pyq2023' && <PyqView year="2023" />}

            {(activeTab === 'sessionalA' || activeTab === 'pyqsessional') && (
              <SessionalView
                initialSet="sessional-a"
                onSelectSet={(set) => setActiveTab(set === 'sessional-a' ? 'sessionalA' : 'sessionalB')}
              />
            )}
            {activeTab === 'sessionalB' && (
              <SessionalView
                initialSet="sessional-b"
                onSelectSet={(set) => setActiveTab(set === 'sessional-a' ? 'sessionalA' : 'sessionalB')}
              />
            )}

            {activeTab === 'mnemonics' && <MnemonicView />}
            {activeTab === 'sem3' && <Sem3View />}
          </div>
        </main>
      </div>

      {/* Mobile Floating Menu Pill + Slide-Up Bottom Drawer */}
      <MobileDrawer
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        activeSemId={activeSemId}
        onSelectSemester={setActiveSemId}
      />

      {/* Global Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectQuestion={(q) => {
          if (q.year === '2025') setActiveTab('pyq2025');
          else if (q.year === '2024') setActiveTab('pyq2024');
          else if (q.year === '2023') setActiveTab('pyq2023');
          else if (q.year === 'Model-40M') setActiveTab('pyqsessional');
          setIsSearchOpen(false);
        }}
      />
    </div>
  );
}

export default App;

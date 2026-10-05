import React from 'react';
import { Search, Type } from 'lucide-react';

interface TopBarProps {
  title: string;
  fontSize: 'normal' | 'large' | 'xlarge';
  onChangeFontSize: (size: 'normal' | 'large' | 'xlarge') => void;
  onOpenSearch: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({
  title,
  fontSize,
  onChangeFontSize,
  onOpenSearch,
}) => {
  const nextFontSize = () => {
    if (fontSize === 'normal') onChangeFontSize('large');
    else if (fontSize === 'large') onChangeFontSize('xlarge');
    else onChangeFontSize('normal');
  };

  return (
    <header className="h-14 px-4 sm:px-12 flex items-center justify-between sticky top-0 z-30 bg-[#0a0b0d]/90 backdrop-blur-md border-b border-white/5">
      <div className="flex items-center gap-3 min-w-0">
        <h2 className="font-editorial text-sm sm:text-base font-normal text-white truncate">
          {title}
        </h2>
      </div>

      <div className="flex items-center gap-2 shrink-0">
        <button
          onClick={onOpenSearch}
          className="p-1.5 rounded-md hover:bg-white/5 text-slate-400 hover:text-white transition-colors"
          title="Search (Ctrl + K)"
        >
          <Search className="w-4 h-4" />
        </button>

        <button
          onClick={nextFontSize}
          className="flex items-center gap-1 px-2 py-1 rounded-md hover:bg-white/5 text-slate-400 hover:text-white transition-colors text-xs font-mono"
          title="Adjust Text Size"
        >
          <Type className="w-3.5 h-3.5" />
          <span className="text-[#d4af37]">
            {fontSize === 'normal' ? '1x' : fontSize === 'large' ? '1.2x' : '1.4x'}
          </span>
        </button>
      </div>
    </header>
  );
};

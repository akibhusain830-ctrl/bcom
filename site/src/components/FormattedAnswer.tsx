import React from 'react';

interface FormattedAnswerProps {
  content: string;
}

interface Block {
  type: 'h2' | 'h3' | 'h4' | 'hr' | 'table' | 'numbered' | 'bullet' | 'paragraph';
  text?: string;
  rows?: string[];
  items?: any[];
}

export const FormattedAnswer: React.FC<FormattedAnswerProps> = ({ content }) => {
  // Parse inline formatting: **bold** and *italic*
  const renderInline = (text: string): React.ReactNode => {
    if (!text) return null;
    const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={i} className="text-white font-semibold">
            {part.slice(2, -2)}
          </strong>
        );
      }
      if (part.startsWith('*') && part.endsWith('*')) {
        return (
          <em key={i} className="text-[#e2e8f0] italic">
            {part.slice(1, -1)}
          </em>
        );
      }
      return part;
    });
  };

  // Clean Markdown Block Parser
  const parseBlocks = (text: string): Block[] => {
    const lines = text.split('\n');
    const blocks: Block[] = [];
    let currentList: any = null;
    let currentTable: any = null;
    let currentParagraph: string[] = [];

    const flushParagraph = () => {
      if (currentParagraph.length > 0) {
        blocks.push({ type: 'paragraph', text: currentParagraph.join(' ') });
        currentParagraph = [];
      }
    };

    const flushList = () => {
      if (currentList) {
        blocks.push(currentList);
        currentList = null;
      }
    };

    const flushTable = () => {
      if (currentTable) {
        blocks.push(currentTable);
        currentTable = null;
      }
    };

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmed = line.trim();

      if (!trimmed) {
        flushParagraph();
        flushList();
        flushTable();
        continue;
      }

      // Heading 2
      if (trimmed.startsWith('## ')) {
        flushParagraph();
        flushList();
        flushTable();
        blocks.push({ type: 'h2', text: trimmed.replace(/^##\s+/, '') });
        continue;
      }

      // Heading 3
      if (trimmed.startsWith('### ')) {
        flushParagraph();
        flushList();
        flushTable();
        blocks.push({ type: 'h3', text: trimmed.replace(/^###\s+/, '') });
        continue;
      }

      // Heading 4
      if (trimmed.startsWith('#### ')) {
        flushParagraph();
        flushList();
        flushTable();
        blocks.push({ type: 'h4', text: trimmed.replace(/^####\s+/, '') });
        continue;
      }

      // Divider
      if (trimmed === '---') {
        flushParagraph();
        flushList();
        flushTable();
        blocks.push({ type: 'hr' });
        continue;
      }

      // Markdown Table
      if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
        flushParagraph();
        flushList();
        if (!currentTable) {
          currentTable = { type: 'table', rows: [] };
        }
        currentTable.rows.push(trimmed);
        continue;
      } else {
        flushTable();
      }

      // Numbered List Item: e.g. "1. **Sole Proprietorship:**" or "1. Planning:"
      const numMatch = trimmed.match(/^([0-9]+)\.\s+(.*)/);
      if (numMatch) {
        flushParagraph();
        if (!currentList || currentList.type !== 'numbered') {
          flushList();
          currentList = { type: 'numbered', items: [] };
        }
        currentList.items.push({ num: numMatch[1], text: numMatch[2], subItems: [] });
        continue;
      }

      // Bullet / Sub-bullet item: e.g. "- Owned, managed..." or "* Example: ..."
      const bulletMatch = trimmed.match(/^[-*]\s+(.*)/);
      if (bulletMatch) {
        flushParagraph();
        if (currentList && currentList.type === 'numbered' && currentList.items.length > 0) {
          // Sub-item of previous numbered point
          currentList.items[currentList.items.length - 1].subItems.push(bulletMatch[1]);
        } else {
          if (!currentList || currentList.type !== 'bullet') {
            flushList();
            currentList = { type: 'bullet', items: [] };
          }
          currentList.items.push({ text: bulletMatch[1] });
        }
        continue;
      }

      // Indented continuation of sub-item or point
      if (currentList && currentList.type === 'numbered' && (line.startsWith('   ') || line.startsWith('\t'))) {
        const lastItem = currentList.items[currentList.items.length - 1];
        if (lastItem.subItems.length > 0) {
          lastItem.subItems[lastItem.subItems.length - 1] += ' ' + trimmed;
        } else {
          lastItem.text += ' ' + trimmed;
        }
        continue;
      }

      // Plain paragraph line
      flushList();
      currentParagraph.push(trimmed);
    }

    flushParagraph();
    flushList();
    flushTable();

    return blocks;
  };

  const blocks = parseBlocks(content);

  return (
    <div className="space-y-4 mt-3 font-sans-reader leading-relaxed text-[#d1d5db]">
      {blocks.map((block, bIdx) => {
        // H2 Heading: Clean Editorial Serif with subtle underline
        if (block.type === 'h2' && block.text) {
          return (
            <div key={bIdx} className="pt-4 pb-1.5 border-b border-white/[0.08] mt-6 mb-3">
              <h3 className="font-editorial text-lg sm:text-xl font-medium text-white tracking-tight">
                {renderInline(block.text)}
              </h3>
            </div>
          );
        }

        // H3 Heading: Soft, dignified warm-white section label with subtle amber dot
        if (block.type === 'h3' && block.text) {
          return (
            <div key={bIdx} className="pt-4 mt-3 mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]/70 shrink-0" />
              <h4 className="font-editorial text-base sm:text-[17px] font-medium text-amber-100/90 tracking-wide">
                {renderInline(block.text)}
              </h4>
            </div>
          );
        }

        // H4 Subheading: Soft muted label
        if (block.type === 'h4' && block.text) {
          return (
            <h5 key={bIdx} className="text-xs font-mono font-medium text-slate-400 uppercase tracking-widest mt-3 mb-1">
              {renderInline(block.text)}
            </h5>
          );
        }

        // Divider
        if (block.type === 'hr') {
          return <hr key={bIdx} className="border-white/5 my-4" />;
        }

        // Paragraph: Comfortable font size and generous line height for effortless reading
        if (block.type === 'paragraph' && block.text) {
          return (
            <p key={bIdx} className="text-[14.5px] sm:text-[15.5px] text-slate-300 leading-relaxed font-sans-reader mb-3">
              {renderInline(block.text)}
            </p>
          );
        }

        // Numbered List: Clean Editorial Flow (Zero Card Clutter, Open Spacing)
        if (block.type === 'numbered' && block.items) {
          return (
            <div key={bIdx} className="my-5 space-y-4">
              {block.items.map((item, iIdx) => (
                <div key={iIdx} className="flex items-start gap-3 py-0.5">
                  {/* Subtle Clean Numeral */}
                  <span className="font-mono text-sm font-semibold text-[#d4af37]/85 shrink-0 select-none w-5 pt-0.5">
                    {item.num}.
                  </span>

                  <div className="flex-1 min-w-0 space-y-1.5">
                    {/* Main point title and content */}
                    <div className="text-[14.5px] sm:text-[15.5px] text-slate-200 leading-relaxed font-sans-reader">
                      {renderInline(item.text)}
                    </div>

                    {/* Sub-items & Examples indented cleanly with a delicate hairline */}
                    {item.subItems && item.subItems.length > 0 && (
                      <div className="pl-3.5 border-l border-white/[0.08] space-y-1 mt-1.5">
                        {item.subItems.map((sub: string, sIdx: number) => {
                          const cleanSub = sub.replace(/^[-*]\s*/, '');
                          const isExample = /^(?:\*|_)?example\b/i.test(cleanSub) || cleanSub.toLowerCase().includes('example:');

                          if (isExample) {
                            const exampleContent = cleanSub.replace(/^(?:\*|_)?example(?:\*|_)?:\s*/i, '');
                            return (
                              <div
                                key={sIdx}
                                className="text-xs sm:text-[13px] text-amber-200/80 italic flex items-baseline gap-1.5 pt-0.5 leading-relaxed"
                              >
                                <span className="not-italic text-[11px] font-mono font-medium text-[#d4af37]/70 uppercase tracking-wider">
                                  e.g.
                                </span>
                                <span className="text-slate-300">
                                  {renderInline(exampleContent)}
                                </span>
                              </div>
                            );
                          }

                          return (
                            <div
                              key={sIdx}
                              className="text-xs sm:text-[13.5px] text-slate-300/90 flex items-start gap-2 leading-relaxed"
                            >
                              <span className="text-slate-500 select-none leading-none mt-1.5">•</span>
                              <span className="flex-1">{renderInline(cleanSub)}</span>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          );
        }

        // Bullet List: Minimalist unboxed points
        if (block.type === 'bullet' && block.items) {
          return (
            <div key={bIdx} className="my-4 space-y-2 pl-1">
              {block.items.map((item, iIdx) => (
                <div key={iIdx} className="flex items-start gap-2.5 text-[14px] sm:text-[15px] text-slate-300 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]/60 shrink-0 mt-2" />
                  <div className="flex-1">{renderInline(item.text)}</div>
                </div>
              ))}
            </div>
          );
        }

        // Clean Minimalist Table
        if (block.type === 'table' && block.rows && block.rows.length >= 2) {
          const headerRow = block.rows[0];
          const dataRows = block.rows.slice(2); // skip separator

          const parseCells = (rowStr: string) =>
            rowStr
              .split('|')
              .map((c) => c.trim())
              .filter((_, idx, arr) => idx > 0 && idx < arr.length - 1);

          const headers = parseCells(headerRow);
          const rows = dataRows.map(parseCells);

          return (
            <div key={bIdx} className="custom-table-wrapper my-5">
              <table className="custom-table">
                <thead>
                  <tr>
                    {headers.map((h, hIdx) => (
                      <th key={hIdx}>{renderInline(h)}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, rIdx) => (
                    <tr key={rIdx}>
                      {row.map((cell, cIdx) => (
                        <td key={cIdx}>{renderInline(cell)}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }

        return null;
      })}
    </div>
  );
};

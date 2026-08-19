import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { translations } from '../translations';
import { coursesData } from '../data/coursesData';
import { Search, Copy, Check, FileText, ChevronRight } from 'lucide-react';

interface ReferenceViewerProps {
  courseId: string;
}

export const ReferenceViewer: React.FC<ReferenceViewerProps> = ({ courseId }) => {
  const { language } = useApp();
  const t = translations[language];
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const course = coursesData.find(c => c.id === courseId);
  if (!course) return null;

  // Filter references based on query matching syntax or description
  const filteredRefs = course.references.filter((ref) => {
    const syntaxMatch = ref.syntax.toLowerCase().includes(searchQuery.toLowerCase());
    const descMatch = ref.desc[language].toLowerCase().includes(searchQuery.toLowerCase()) || 
                      ref.desc.en.toLowerCase().includes(searchQuery.toLowerCase());
    return syntaxMatch || descMatch;
  });

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1500);
  };

  return (
    <div className="max-w-3xl mx-auto py-6" id="cheat-sheets-viewer">
      <div className="space-y-6">
        
        {/* Header Title */}
        <div className="flex items-center space-x-3 text-slate-800 dark:text-white">
          <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900/20">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-black tracking-tight">{course.title.en} {t.reference}</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-sans">
              {language === 'en' 
                ? "Quick-lookup cheat sheets for standard syntax rules and built-in methods." 
                : "សន្លឹកជំនួយរហ័សសម្រាប់ស្វែងរកច្បាប់សរសេរកូដ និងអនុគមន៍ស្តង់ដារ។"}
            </p>
          </div>
        </div>

        {/* Search bar inside cheat sheet */}
        <div className="relative max-w-md">
          <Search className="absolute left-3.5 top-3 w-4.5 h-4.5 text-slate-400" />
          <input
            type="text"
            placeholder={language === 'en' ? "Search syntax, tags, keywords..." : "ស្វែងរកពាក្យគន្លឹះ កូដ ថេក..."}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
          />
        </div>

        {/* References list list */}
        {filteredRefs.length > 0 ? (
          <div className="space-y-4">
            {filteredRefs.map((ref) => (
              <div
                key={ref.id}
                className="bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 rounded-2xl p-5 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4 text-left"
              >
                {/* Syntax & description */}
                <div className="space-y-2 flex-1">
                  <div className="inline-block px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-950 border border-slate-200/40 dark:border-slate-800/60 font-mono text-xs font-bold text-indigo-600 dark:text-indigo-400">
                    {ref.syntax}
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-normal font-sans">
                    {ref.desc[language]}
                  </p>
                </div>

                {/* Example code box with Copy Button */}
                <div className="flex items-center space-x-3 bg-slate-50 dark:bg-slate-950 p-3 rounded-xl border border-slate-200/30 dark:border-slate-850 md:max-w-xs w-full justify-between">
                  <span className="font-mono text-xs text-slate-500 dark:text-slate-400 truncate pr-2">
                    {ref.example}
                  </span>
                  <button
                    onClick={() => handleCopy(ref.id, ref.example)}
                    className="p-2 rounded-lg hover:bg-slate-200/50 dark:hover:bg-slate-900 text-slate-400 hover:text-slate-900 dark:hover:text-white shrink-0 transition cursor-pointer"
                    title="Copy syntax"
                  >
                    {copiedId === ref.id ? (
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white dark:bg-slate-900 rounded-2xl border border-dashed border-slate-200 dark:border-slate-800">
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {language === 'en' ? "No cheat sheet matches found." : "រកមិនឃើញសន្លឹកជំនួយដែលត្រូវគ្នាឡើយ។"}
            </p>
          </div>
        )}

      </div>
    </div>
  );
};

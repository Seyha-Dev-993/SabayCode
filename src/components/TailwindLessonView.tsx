import React, { useState, useEffect } from 'react';
import { getTailwindPageDetails, TailwindPageDetails } from '../data/tailwindCourseData';
import { Terminal, Lightbulb, Check, Sparkles, BookOpen, Layers, Info } from 'lucide-react';
import Prism from 'prismjs';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-javascript';

interface TailwindLessonViewProps {
  lessonId: string;
  language: 'en' | 'km';
}

export const TailwindLessonView: React.FC<TailwindLessonViewProps> = ({ lessonId, language }) => {
  const details = getTailwindPageDetails(lessonId);
  const [activeClass, setActiveClass] = useState<string>('');

  const highlightCode = (codeStr: string, lang: string) => {
    if (!codeStr) return '';
    const low = lang.toLowerCase();
    const prismLang = ['html', 'markup'].includes(low) ? 'markup' : (low === 'css' ? 'css' : 'javascript');
    const grammar = Prism.languages[prismLang] || Prism.languages.clike || Prism.languages.markup;
    const html = Prism.highlight(codeStr, grammar, prismLang);
    return <code className={`language-${prismLang}`} dangerouslySetInnerHTML={{ __html: html }} />;
  };

  // Automatically reset the active class to the first available class when page changes
  useEffect(() => {
    if (details.classes && details.classes.length > 0) {
      setActiveClass(details.classes[0].className);
    } else {
      setActiveClass('');
    }
  }, [lessonId]);

  // Helper to resolve mapped CSS for currently selected class name
  const activeCssRule = details.classes?.find(c => c.className === activeClass)?.css || '';

  // Render Concept Archetype
  const renderConcept = () => {
    return (
      <div className="space-y-6">
        <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          {details.description[language]}
        </p>

        {details.paragraphs?.[language].map((paragraph, index) => (
          <p key={index} className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
            {paragraph}
          </p>
        ))}

        {details.tip && (
          <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/50 dark:border-amber-900/30 dark:bg-amber-950/10 flex items-start gap-3">
            <Lightbulb className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
            <div>
              <h5 className="text-xs font-bold text-amber-800 dark:text-amber-400 uppercase tracking-wide">
                {language === 'en' ? 'Pro Tip' : 'គន្លឹះពិសេស'}
              </h5>
              <p className="text-xs text-amber-700 dark:text-amber-300/80 mt-1">
                {details.tip[language]}
              </p>
            </div>
          </div>
        )}

        {details.codeBlock && (
          <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-900 text-slate-200">
            <div className="flex items-center justify-between px-4 py-2 bg-slate-800 border-b border-slate-700/50">
              <span className="text-[10px] font-bold text-slate-400 tracking-wider font-mono uppercase">
                {language === 'en' ? 'Code Implementation' : 'ការអនុវត្តកូដ'}
              </span>
              <Terminal className="w-4 h-4 text-slate-500" />
            </div>
            <pre className="p-4 overflow-x-auto text-xs font-mono leading-relaxed text-indigo-300">
              {highlightCode(details.codeBlock, 'html')}
            </pre>
          </div>
        )}
      </div>
    );
  };

  // Render Config Archetype
  const renderConfig = () => {
    return (
      <div className="space-y-6">
        <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          {details.description[language]}
        </p>

        {details.codeBlock && (
          <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-900 text-slate-200">
            <div className="flex items-center justify-between px-4 py-2 bg-slate-800 border-b border-slate-700/50">
              <span className="text-[10px] font-bold text-indigo-400 tracking-wider font-mono">
                tailwind.config.js
              </span>
              <Terminal className="w-4 h-4 text-slate-500" />
            </div>
            <pre className="p-4 overflow-x-auto text-xs font-mono leading-relaxed text-indigo-200">
              {highlightCode(details.codeBlock, 'javascript')}
            </pre>
          </div>
        )}

        {details.beforeAfterConfig && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-slate-100 bg-slate-50/50 dark:border-slate-800 dark:bg-slate-900/40">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-mono">
                {language === 'en' ? 'Before (Default)' : 'មុនពេលកែសម្រួល'}
              </span>
              <pre className="mt-2 text-xs font-mono text-slate-500 dark:text-slate-400 overflow-x-auto">
                {highlightCode(details.beforeAfterConfig.before, 'javascript')}
              </pre>
            </div>
            <div className="p-4 rounded-xl border border-indigo-100 bg-indigo-50/30 dark:border-indigo-950/20 dark:bg-indigo-950/10">
              <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-500 font-mono">
                {language === 'en' ? 'After (Customized)' : 'ក្រោយពេលកែសម្រួល'}
              </span>
              <pre className="mt-2 text-xs font-mono text-indigo-600 dark:text-indigo-400 overflow-x-auto">
                {highlightCode(details.beforeAfterConfig.after, 'javascript')}
              </pre>
            </div>
            <div className="md:col-span-2 p-4 rounded-xl border border-emerald-100 bg-emerald-50/30 dark:border-emerald-950/20 dark:bg-emerald-950/10 flex gap-2.5 items-start">
              <Check className="w-4.5 h-4.5 text-emerald-500 mt-0.5 shrink-0" />
              <div>
                <span className="text-xs font-bold text-emerald-800 dark:text-emerald-400">
                  {language === 'en' ? 'Resulting Utility Outcome:' : 'លទ្ធផលរចនាដែលទទួលបាន៖'}
                </span>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                  {details.beforeAfterConfig.result}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  // Render Interactive Preview Sandbox Container
  const renderInteractivePreview = () => {
    let previewElement = null;

    // Render corresponding interactive element depending on layout/preview context
    switch (details.previewType) {
      case 'text':
        previewElement = (
          <p className={`transition-all duration-300 ${activeClass} font-semibold text-slate-800 dark:text-slate-200`}>
            Sabaicode Tailwind Course
          </p>
        );
        break;
      case 'flex':
        previewElement = (
          <div className={`transition-all duration-300 w-full p-4 bg-slate-100 dark:bg-slate-800/50 rounded-xl flex flex-wrap gap-2 items-center justify-center ${activeClass}`}>
            <div className="px-4 py-2 bg-indigo-500 text-white font-mono text-xs rounded-lg font-bold shadow-sm">Item 1</div>
            <div className="px-4 py-2 bg-indigo-500 text-white font-mono text-xs rounded-lg font-bold shadow-sm">Item 2</div>
            <div className="px-4 py-2 bg-indigo-500 text-white font-mono text-xs rounded-lg font-bold shadow-sm">Item 3</div>
          </div>
        );
        break;
      case 'grid':
        previewElement = (
          <div className={`transition-all duration-300 w-full p-4 bg-slate-100 dark:bg-slate-800/50 rounded-xl grid grid-cols-2 ${activeClass}`}>
            <div className="p-4 bg-rose-500 text-white text-center font-bold text-xs rounded-lg shadow-sm">Box A</div>
            <div className="p-4 bg-amber-500 text-white text-center font-bold text-xs rounded-lg shadow-sm">Box B</div>
          </div>
        );
        break;
      case 'border':
        previewElement = (
          <div className={`transition-all duration-300 w-32 h-32 bg-indigo-600 shadow-md ${activeClass}`}></div>
        );
        break;
      case 'shadow':
        previewElement = (
          <div className={`transition-all duration-300 w-32 h-32 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-850 rounded-2xl flex items-center justify-center text-slate-500 text-xs font-bold ${activeClass}`}>
            Elevated Box
          </div>
        );
        break;
      case 'filter':
        previewElement = (
          <div className={`transition-all duration-300 w-28 h-28 bg-gradient-to-tr from-rose-500 to-indigo-600 rounded-2xl ${activeClass}`}></div>
        );
        break;
      case 'opacity':
        previewElement = (
          <div className={`transition-all duration-300 w-32 h-32 bg-indigo-500 rounded-2xl ${activeClass}`}></div>
        );
        break;
      case 'transform':
        previewElement = (
          <div className="perspective-sm">
            <div className={`transition-all duration-300 w-28 h-28 bg-indigo-500 rounded-2xl flex items-center justify-center text-white font-bold text-sm shadow-md ${activeClass}`}>
              3D Rotate
            </div>
          </div>
        );
        break;
      default:
        previewElement = (
          <div className={`transition-all duration-300 w-32 h-32 bg-indigo-500 rounded-2xl ${activeClass}`}></div>
        );
    }

    return (
      <div className="space-y-6">
        <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          {details.description[language]}
        </p>

        {/* Dynamic Class Selector - Shared Toggle Component */}
        <div className="p-5 rounded-2xl border border-slate-150 bg-slate-50/40 dark:border-slate-800/60 dark:bg-slate-900/20">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-indigo-500 shrink-0" />
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
              {language === 'en' ? 'Interactive Class Toggle Preview' : 'តុក្កតាសាកល្បងប្តូរ Class និង CSS ផ្ទាល់'}
            </h4>
          </div>

          <div className="flex flex-col md:flex-row gap-5 items-stretch">
            {/* Visual Screen Preview */}
            <div className="flex-1 min-h-[160px] bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl flex flex-col items-center justify-center p-6 relative overflow-hidden">
              <span className="absolute top-2 left-3 text-[9px] font-mono font-bold text-slate-400">
                {language === 'en' ? 'Live Canvas' : 'ផ្ទាំងបង្ហាញផ្ទាល់'}
              </span>
              {previewElement}
            </div>

            {/* Translated CSS rules dashboard */}
            <div className="w-full md:w-[280px] p-4 bg-slate-900 text-indigo-300 rounded-xl border border-slate-800 flex flex-col justify-between font-mono">
              <div className="space-y-2 text-xs">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                  {language === 'en' ? 'Applied Class' : 'Class កំពុងប្រើ'}
                </span>
                <span className="text-emerald-400 font-bold text-sm block">
                  .{activeClass || 'none'}
                </span>
              </div>
              <div className="space-y-2 mt-4 pt-4 border-t border-slate-800/80 text-xs">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                  {language === 'en' ? 'Raw CSS Compiled' : 'កូដ CSS សុទ្ធទទួលបាន'}
                </span>
                <pre className="text-slate-200 leading-relaxed whitespace-pre-wrap break-all">
                  {highlightCode(activeCssRule, 'css')}
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* High Fidelity Interactive Matrix Table */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-indigo-500 shrink-0" />
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
              {language === 'en' ? 'Utility Class Reference Map' : 'តារាងប្រៀបធៀបគូស្ទីលពាក្យគន្លឹះ និងកូដ CSS'}
            </h4>
          </div>

          <div className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 text-slate-400 uppercase tracking-wider font-mono text-[10px]">
                    <th className="py-2.5 px-4">{language === 'en' ? 'Class Name' : 'ឈ្មោះ Class'}</th>
                    <th className="py-2.5 px-4">{language === 'en' ? 'Raw CSS Rules' : 'ច្បាប់កូដ CSS សុទ្ធ'}</th>
                    <th className="py-2.5 px-4">{language === 'en' ? 'Function Description' : 'ការពន្យល់តួនាទី'}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 font-sans">
                  {details.classes?.map((cls, idx) => (
                    <tr 
                      key={idx} 
                      onClick={() => setActiveClass(cls.className)}
                      className={`cursor-pointer transition hover:bg-indigo-500/5 ${cls.className === activeClass ? 'bg-indigo-500/10 dark:bg-indigo-500/15 font-semibold text-indigo-600 dark:text-indigo-400' : 'text-slate-700 dark:text-slate-300'}`}
                    >
                      <td className="py-3 px-4 font-mono text-xs">{cls.className}</td>
                      <td className="py-3 px-4 font-mono text-[11px] text-slate-500 dark:text-slate-400">{cls.css}</td>
                      <td className="py-3 px-4 text-xs">{cls.desc[language]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Worked Example UI Panel */}
        {details.workedExample && (
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-indigo-500 shrink-0" />
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                {language === 'en' ? 'Real-world Layout Worked Example' : 'ឧទាហរណ៍ការអនុវត្តជាក់ស្តែងក្នុងប្រព័ន្ធ UI'}
              </h4>
            </div>

            <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-900 text-slate-200">
              <div className="flex items-center justify-between px-4 py-2 bg-slate-800 border-b border-slate-700/50">
                <span className="text-[10px] font-bold text-slate-400 tracking-wider font-mono">
                  {details.workedExampleDesc?.[language]}
                </span>
                <Terminal className="w-4 h-4 text-slate-500" />
              </div>
              <pre className="p-4 overflow-x-auto text-xs font-mono leading-relaxed text-indigo-300">
                {highlightCode(details.workedExample, 'html')}
              </pre>
            </div>
          </div>
        )}
      </div>
    );
  };

  // Render Resources Archetype
  const renderResources = () => {
    return (
      <div className="space-y-6">
        <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          {details.description[language]}
        </p>

        <div className="space-y-4">
          {details.paragraphs?.[language].map((paragraph, index) => {
            const parts = paragraph.split('**');
            return (
              <div key={index} className="p-4 rounded-xl border border-slate-150 bg-slate-50/50 dark:border-slate-800 dark:bg-slate-900/30 flex items-start gap-3">
                <Info className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                <div className="text-sm text-slate-600 dark:text-slate-350 leading-relaxed">
                  {parts.length > 2 ? (
                    <>
                      <strong>{parts[1]}</strong>{parts.slice(2).join('')}
                    </>
                  ) : (
                    paragraph
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6 pt-2 pb-8">
      {/* Dynamic Header badge */}
      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 text-[10px] font-bold uppercase tracking-wider font-mono">
        {details.archetype === 'concept' && (language === 'en' ? 'Core Concept Guide' : 'មគ្គុទ្ទេសក៍គំនិតស្នូល')}
        {details.archetype === 'config' && (language === 'en' ? 'Configuration Tutorial' : 'របៀបកំណត់រចនាសម្ព័ន្ធ')}
        {details.archetype === 'utility' && (language === 'en' ? 'Utility Class Guide' : 'សៀវភៅណែនាំ Class')}
        {details.archetype === 'resources' && (language === 'en' ? 'Curated Resource list' : 'បញ្ជីធនធានសិក្សា')}
      </div>

      {/* Render matching archetype layout view */}
      {details.archetype === 'concept' && renderConcept()}
      {details.archetype === 'config' && renderConfig()}
      {details.archetype === 'utility' && renderInteractivePreview()}
      {details.archetype === 'resources' && renderResources()}
    </div>
  );
};

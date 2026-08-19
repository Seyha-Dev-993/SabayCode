import React from 'react';
import { ChevronLeft, Sparkles, BookOpen, Award, CheckCircle2 } from 'lucide-react';
import { AIPromptClassEnrollment } from '../../types/aiPromptClass';
import { AI_PROMPT_CLASS_INFO } from '../../data/aiPromptClassData';

interface Props {
  enrollment: AIPromptClassEnrollment;
  currentLessonTitle?: string;
  onNavigateOverview: () => void;
  onBackToClasses: () => void;
  lang: 'en' | 'km';
  setLang: (lang: 'en' | 'km') => void;
}

export const AIPromptClassHeader: React.FC<Props> = ({
  enrollment,
  currentLessonTitle,
  onNavigateOverview,
  onBackToClasses,
  lang,
  setLang,
}) => {
  const totalLessons = AI_PROMPT_CLASS_INFO.totalLessons;
  const completedCount = enrollment.completedLessonIds.length;
  const percent = Math.min(100, Math.round((completedCount / totalLessons) * 100));

  return (
    <header className="sticky top-0 z-40 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 text-slate-100 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Left: Navigation & Title */}
        <div className="flex items-center gap-3 min-w-0">
          <button
            onClick={onBackToClasses}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-all border border-slate-700/60"
            title={lang === 'km' ? 'ត្រឡប់ទៅថ្នាក់រៀនទាំងអស់' : 'Back to All Classes'}
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">{lang === 'km' ? 'ថ្នាក់រៀន' : 'Classes'}</span>
          </button>

          <div className="h-5 w-px bg-slate-800 hidden sm:block" />

          <button
            onClick={onNavigateOverview}
            className="flex items-center gap-2 group text-left min-w-0"
          >
            <div className="p-1.5 rounded-lg bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white shadow-md shadow-purple-500/20 shrink-0">
              <Sparkles className="w-4 h-4 animate-pulse" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-bold text-xs sm:text-sm text-slate-100 truncate group-hover:text-purple-300 transition-colors">
                  {AI_PROMPT_CLASS_INFO.title[lang]}
                </span>
                <span className="hidden md:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-purple-950/80 text-purple-300 border border-purple-800/60">
                  FLAGSHIP
                </span>
              </div>
              {currentLessonTitle && (
                <p className="text-[11px] text-slate-400 truncate hidden sm:block">
                  {currentLessonTitle}
                </p>
              )}
            </div>
          </button>
        </div>

        {/* Right: Progress & Language Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          {enrollment.enrolled && (
            <div className="hidden lg:flex items-center gap-3 px-3 py-1.5 rounded-xl bg-slate-800/80 border border-slate-700/60">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-purple-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />
                <span>{completedCount}/{totalLessons} {lang === 'km' ? 'មេរៀន' : 'Lessons'}</span>
              </div>
              <div className="w-20 bg-slate-700 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-purple-500 to-indigo-400 h-full transition-all duration-500"
                  style={{ width: `${percent}%` }}
                />
              </div>
              <span className="text-xs font-bold text-slate-200">{percent}%</span>
            </div>
          )}

          {/* Language Toggle Button */}
          <button
            onClick={() => setLang(lang === 'en' ? 'km' : 'en')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
          >
            <span>{lang === 'en' ? '🇰🇭 KM' : '🇺🇸 EN'}</span>
          </button>
        </div>
      </div>
    </header>
  );
};

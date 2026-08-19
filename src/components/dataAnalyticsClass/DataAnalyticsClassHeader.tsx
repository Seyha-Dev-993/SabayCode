import React from 'react';
import { ChevronLeft, BarChart2, CheckCircle2, Database } from 'lucide-react';
import { DataAnalyticsClassEnrollment } from '../../types/dataAnalyticsClass';
import { DATA_ANALYTICS_CLASS_INFO, getAllDataAnalyticsLessons } from '../../data/dataAnalyticsClassData';

interface Props {
  enrollment: DataAnalyticsClassEnrollment;
  currentLessonTitle?: string;
  onNavigateOverview: () => void;
  onBackToClasses: () => void;
  lang: 'en' | 'km';
  setLang: (lang: 'en' | 'km') => void;
}

export const DataAnalyticsClassHeader: React.FC<Props> = ({
  enrollment,
  currentLessonTitle,
  onNavigateOverview,
  onBackToClasses,
  lang,
  setLang,
}) => {
  const totalLessons = getAllDataAnalyticsLessons().length;
  const completedCount = enrollment.completedLessonIds.length;
  const percent = Math.min(100, Math.round((completedCount / (totalLessons || 1)) * 100));

  return (
    <header className="sticky top-0 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 shadow-sm dark:shadow-lg transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Left: Navigation & Title */}
        <div className="flex items-center gap-3 min-w-0">
          <button
            onClick={onBackToClasses}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all border border-slate-200 dark:border-slate-700/60 cursor-pointer"
            title={lang === 'km' ? 'ត្រឡប់ទៅថ្នាក់រៀនទាំងអស់' : 'Back to All Classes'}
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">{lang === 'km' ? 'ថ្នាក់រៀន' : 'Classes'}</span>
          </button>

          <div className="h-5 w-px bg-slate-200 dark:bg-slate-800 hidden sm:block" />

          <button
            onClick={onNavigateOverview}
            className="flex items-center gap-2 group text-left min-w-0 cursor-pointer"
          >
            <div className="p-1.5 rounded-lg bg-gradient-to-br from-emerald-500 via-teal-500 to-amber-500 text-white shadow-md shadow-emerald-500/20 shrink-0 flex items-center gap-1">
              <BarChart2 className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-bold text-xs sm:text-sm text-slate-900 dark:text-slate-100 truncate group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors">
                  {DATA_ANALYTICS_CLASS_INFO.title[lang]}
                </span>
                <span className="hidden md:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800/60">
                  PYTHON + SQL
                </span>
              </div>
              {currentLessonTitle && (
                <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate hidden sm:block">
                  {currentLessonTitle}
                </p>
              )}
            </div>
          </button>
        </div>

        {/* Right: Progress & Language Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          {enrollment.enrolled && (
            <div className="hidden lg:flex items-center gap-3 px-3 py-1.5 rounded-xl bg-slate-100/90 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-700 dark:text-emerald-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>{completedCount}/{totalLessons} {lang === 'km' ? 'មេរៀន' : 'Lessons'}</span>
              </div>
              <div className="w-20 bg-slate-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full transition-all duration-500"
                  style={{ width: `${percent}%` }}
                />
              </div>
              <span className="text-xs font-bold text-slate-700 dark:text-slate-200">{percent}%</span>
            </div>
          )}

          {/* Language Toggle Button */}
          <button
            onClick={() => setLang(lang === 'en' ? 'km' : 'en')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 transition-colors cursor-pointer"
          >
            <span>{lang === 'en' ? '🇰🇭 KM' : '🇺🇸 EN'}</span>
          </button>
        </div>
      </div>
    </header>
  );
};

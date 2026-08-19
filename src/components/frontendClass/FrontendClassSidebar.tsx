import React, { useState } from 'react';
import { 
  CheckCircle2, Circle, ChevronDown, ChevronRight, GraduationCap, 
  BookOpen, ArrowLeft, X 
} from 'lucide-react';
import { FRONTEND_MODULES, FRONTEND_CLASS_INFO } from '../../data/frontendClassData';
import { useApp } from '../../context/AppContext';

interface FrontendClassSidebarProps {
  currentLessonId: string;
  completedLessonIds: string[];
  totalLessonCount: number;
  onSelectLesson: (lessonId: string) => void;
  onBackToOverview: () => void;
  onCloseMobile?: () => void;
}

export const FrontendClassSidebar: React.FC<FrontendClassSidebarProps> = ({
  currentLessonId,
  completedLessonIds,
  totalLessonCount,
  onSelectLesson,
  onBackToOverview,
  onCloseMobile,
}) => {
  const { language } = useApp();
  const [openModules, setOpenModules] = useState<Record<string, boolean>>({ m1: true, m2: true });

  const toggleModule = (modId: string) => {
    setOpenModules(prev => ({ ...prev, [modId]: !prev[modId] }));
  };

  const completedCount = completedLessonIds.length;
  const progressPercent = Math.round((completedCount / (totalLessonCount || 1)) * 100);

  return (
    <aside className="w-80 h-full bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col font-sans text-slate-900 dark:text-slate-100 select-none">
      {/* Top Header */}
      <div className="p-4 border-b border-slate-200 dark:border-slate-800 space-y-3">
        <div className="flex items-center justify-between">
          <button
            onClick={onBackToOverview}
            className="inline-flex items-center gap-1.5 text-xs text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 font-bold transition"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{language === 'en' ? 'Class Overview' : 'មាតិកាថ្នាក់រៀន'}</span>
          </button>

          {onCloseMobile && (
            <button onClick={onCloseMobile} className="lg:hidden text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        <div className="flex items-center gap-2">
          <GraduationCap className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0" />
          <h2 className="text-xs font-bold text-slate-900 dark:text-white line-clamp-1">
            {FRONTEND_CLASS_INFO.title[language] || FRONTEND_CLASS_INFO.title.en}
          </h2>
        </div>

        {/* Progress Bar */}
        <div className="space-y-1.5 pt-1">
          <div className="flex items-center justify-between text-[11px] font-mono">
            <span className="text-slate-500 dark:text-slate-400">{completedCount} / {totalLessonCount} Completed</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold">{progressPercent}%</span>
          </div>
          <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden border border-slate-200 dark:border-slate-800">
            <div
              className="h-full bg-emerald-500 rounded-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* Modules List */}
      <div className="flex-1 overflow-y-auto p-3 space-y-2">
        {FRONTEND_MODULES.map((mod) => {
          const isOpen = !!openModules[mod.id];
          const modCompletedCount = mod.lessons.filter(l => completedLessonIds.includes(l.id)).length;
          const isModFinished = modCompletedCount === mod.lessons.length && mod.lessons.length > 0;

          return (
            <div key={mod.id} className="rounded-xl border border-slate-200 dark:border-slate-800/80 overflow-hidden bg-slate-50 dark:bg-slate-950/40">
              <button
                onClick={() => toggleModule(mod.id)}
                className="w-full p-2.5 text-left hover:bg-slate-100 dark:hover:bg-slate-800/60 transition flex items-center justify-between gap-2"
              >
                <div className="flex items-center gap-2 overflow-hidden">
                  {isOpen ? (
                    <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                  ) : (
                    <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
                  )}
                  <span className="text-xs font-bold text-slate-800 dark:text-slate-200 line-clamp-1">
                    {mod.title[language] || mod.title.en}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 shrink-0 text-[10px] font-mono">
                  {isModFinished ? (
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
                  ) : (
                    <span className="text-slate-500">{modCompletedCount}/{mod.lessons.length}</span>
                  )}
                </div>
              </button>

              {isOpen && (
                <div className="pl-6 pr-2 py-1 space-y-1 divide-y divide-slate-100 dark:divide-slate-800/40 bg-white dark:bg-slate-950">
                  {mod.lessons.map((lesson) => {
                    const isCurrent = lesson.id === currentLessonId;
                    const isDone = completedLessonIds.includes(lesson.id);

                    return (
                      <button
                        key={lesson.id}
                        onClick={() => {
                          onSelectLesson(lesson.id);
                          if (onCloseMobile) onCloseMobile();
                        }}
                        className={`w-full text-left p-2 rounded-lg text-xs transition flex items-center gap-2 ${
                          isCurrent
                            ? 'bg-indigo-50 dark:bg-indigo-600/20 text-indigo-700 dark:text-indigo-300 font-bold border border-indigo-200 dark:border-indigo-500/40'
                            : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900'
                        }`}
                      >
                        {isDone ? (
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400 shrink-0" />
                        ) : (
                          <Circle className="w-3.5 h-3.5 text-slate-400 dark:text-slate-600 shrink-0" />
                        )}
                        <span className="line-clamp-1">{lesson.title[language] || lesson.title.en}</span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </aside>
  );
};

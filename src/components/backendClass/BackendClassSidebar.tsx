import React, { useState } from 'react';
import { ChevronDown, ChevronRight, CheckCircle2, Circle, LayoutGrid, Award, BookOpen, X } from 'lucide-react';
import { backendModulesData } from '../../data/backendClassData';
import { BackendLesson } from '../../types/backendClass';

interface BackendClassSidebarProps {
  currentLessonId: string | null;
  completedLessonIds: string[];
  lang: 'en' | 'km';
  onSelectLesson: (lessonId: string) => void;
  onSelectOverview: () => void;
  completedPercent: number;
  onCloseMobile?: () => void;
}

export const BackendClassSidebar: React.FC<BackendClassSidebarProps> = ({
  currentLessonId,
  completedLessonIds,
  lang,
  onSelectLesson,
  onSelectOverview,
  completedPercent,
  onCloseMobile,
}) => {
  // Track open module accordions (default module containing active lesson or m1)
  const activeModule = backendModulesData.find((m) =>
    m.lessons.some((l) => l.id === currentLessonId)
  );

  const [openModules, setOpenModules] = useState<Record<string, boolean>>({
    [activeModule?.id || 'm1']: true,
  });

  const toggleModule = (modId: string) => {
    setOpenModules((prev) => ({ ...prev, [modId]: !prev[modId] }));
  };

  const isLessonCompleted = (lessonId: string) => completedLessonIds.includes(lessonId);

  return (
    <aside className="w-full lg:w-80 bg-white dark:bg-slate-950 border-r border-slate-200 dark:border-slate-800 flex flex-col h-full shrink-0">
      {/* Overview Navigation & Class Stats */}
      <div className="p-4 border-b border-slate-200 dark:border-slate-800 space-y-3">
        {onCloseMobile && (
          <div className="flex items-center justify-between pb-1 lg:hidden">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              {lang === 'km' ? 'មាតិកាថ្នាក់រៀន' : 'Lesson Menu'}
            </span>
            <button
              onClick={onCloseMobile}
              className="p-1 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        )}

        <button
          onClick={() => {
            onSelectOverview();
            if (onCloseMobile) onCloseMobile();
          }}
          className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg border text-xs font-semibold transition ${
            currentLessonId === null
              ? 'bg-emerald-600 text-white border-emerald-600 shadow'
              : 'border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-700 dark:text-slate-300'
          }`}
        >
          <div className="flex items-center gap-2">
            <LayoutGrid className="w-4 h-4" />
            <span>{lang === 'km' ? 'ទិដ្ឋភាពទូទៅនៃថ្នាក់' : 'Class Overview'}</span>
          </div>
          <BookOpen className="w-3.5 h-3.5 opacity-70" />
        </button>

        {/* Progress Card */}
        <div className="p-3 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800">
          <div className="flex items-center justify-between text-xs font-semibold mb-1.5">
            <span className="text-slate-600 dark:text-slate-400">
              {lang === 'km' ? 'លទ្ធផលសិក្សា' : 'Class Progress'}
            </span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold">{completedPercent}%</span>
          </div>
          <div className="w-full bg-slate-200 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
            <div
              className="bg-emerald-500 h-full rounded-full transition-all duration-300"
              style={{ width: `${completedPercent}%` }}
            />
          </div>
          <div className="flex items-center justify-between text-[10px] text-slate-500 dark:text-slate-400 mt-2">
            <span>
              {completedLessonIds.length} / {backendModulesData.flatMap((m) => m.lessons).length}{' '}
              {lang === 'km' ? 'មេរៀនបានបញ្ចប់' : 'Lessons Done'}
            </span>
            {completedPercent === 100 && (
              <span className="flex items-center gap-1 text-amber-500 font-bold">
                <Award className="w-3 h-3" />
                {lang === 'km' ? 'បញ្ចប់វគ្គ' : 'Completed'}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Modules & Lessons List */}
      <div className="flex-1 overflow-y-auto p-3 space-y-2">
        {backendModulesData.map((mod) => {
          const isOpen = !!openModules[mod.id];
          const modCompletedCount = mod.lessons.filter((l) => isLessonCompleted(l.id)).length;
          const isModAllDone = modCompletedCount === mod.lessons.length && mod.lessons.length > 0;

          return (
            <div
              key={mod.id}
              className="rounded-xl border border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-900/40 overflow-hidden"
            >
              {/* Module Accordion Header */}
              <button
                onClick={() => toggleModule(mod.id)}
                className="w-full flex items-center justify-between p-3 text-left hover:bg-slate-50 dark:hover:bg-slate-800/50 transition text-xs font-bold text-slate-800 dark:text-slate-200"
              >
                <div className="flex items-center gap-2 pr-2">
                  <span className="w-5 h-5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-[10px] flex items-center justify-center shrink-0">
                    {mod.moduleNumber}
                  </span>
                  <span className="line-clamp-1">{mod.title[lang]}</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-400 shrink-0">
                  <span className="text-[10px] font-mono">
                    {modCompletedCount}/{mod.lessons.length}
                  </span>
                  {isOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                </div>
              </button>

              {/* Module Lessons list */}
              {isOpen && (
                <div className="border-t border-slate-100 dark:border-slate-800/60 bg-slate-50/50 dark:bg-slate-950/40 divide-y divide-slate-100 dark:divide-slate-800/40">
                  {mod.lessons.map((lesson: BackendLesson) => {
                    const isCurrent = lesson.id === currentLessonId;
                    const isDone = isLessonCompleted(lesson.id);

                    return (
                      <button
                        key={lesson.id}
                        onClick={() => {
                          onSelectLesson(lesson.id);
                          if (onCloseMobile) onCloseMobile();
                        }}
                        className={`w-full flex items-start gap-2.5 p-2.5 text-left text-xs transition ${
                          isCurrent
                            ? 'bg-emerald-50 dark:bg-emerald-950/70 border-l-4 border-emerald-600 text-emerald-950 dark:text-emerald-200 font-semibold'
                            : 'hover:bg-slate-100 dark:hover:bg-slate-800/60 text-slate-700 dark:text-slate-300'
                        }`}
                      >
                        <div className="mt-0.5 shrink-0">
                          {isDone ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 fill-emerald-500/20" />
                          ) : (
                            <Circle className="w-4 h-4 text-slate-400" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="line-clamp-2 leading-tight">{lesson.title[lang]}</p>
                          <div className="flex items-center gap-2 text-[10px] text-slate-400 mt-1 font-mono">
                            <span>{lesson.durationMinutes} min</span>
                            <span>•</span>
                            <span className="text-amber-500/90">{lesson.difficulty}</span>
                          </div>
                        </div>
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

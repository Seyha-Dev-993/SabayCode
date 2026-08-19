import React, { useState } from 'react';
import { ChevronDown, ChevronRight, CheckCircle, Circle, BookOpen, Trophy, Award, Lock } from 'lucide-react';
import { DatabaseSqlModule } from '../../types/databaseSqlMasteryClass';
import { DatabaseSqlClassEnrollment } from '../../types/databaseSqlMasteryClass';

interface Props {
  modules: DatabaseSqlModule[];
  currentLessonId: string;
  enrollment: DatabaseSqlClassEnrollment;
  onSelectLesson: (lessonId: string) => void;
  lang: 'en' | 'km';
}

export const DatabaseSqlSidebar: React.FC<Props> = ({
  modules,
  currentLessonId,
  enrollment,
  onSelectLesson,
  lang,
}) => {
  // Find initial active module based on current lesson
  const initialActiveModule = modules.find((m) =>
    m.lessons.some((l) => l.id === currentLessonId)
  )?.id || modules[0]?.id;

  const [expandedModules, setExpandedModules] = useState<Record<string, boolean>>({
    [initialActiveModule]: true,
  });

  const toggleModule = (modId: string) => {
    setExpandedModules((prev) => ({
      ...prev,
      [modId]: !prev[modId],
    }));
  };

  return (
    <aside className="w-full lg:w-80 shrink-0 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col h-auto lg:h-[calc(100vh-4rem)] overflow-y-auto font-sans transition-colors">
      <div className="p-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/80 backdrop-blur">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-blue-500" />
          <span>{lang === 'km' ? 'មាតិកាវគ្គសិក្សា' : 'Course Curriculum'}</span>
        </h2>
      </div>

      <div className="p-2 space-y-1 flex-1">
        {modules.map((mod) => {
          const isExpanded = !!expandedModules[mod.id];
          const completedInMod = mod.lessons.filter((l) =>
            enrollment.completedLessonIds.includes(l.id)
          ).length;
          const isModCompleted = completedInMod === mod.lessons.length && mod.lessons.length > 0;

          return (
            <div
              key={mod.id}
              className="rounded-xl overflow-hidden border border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-800/30 transition-all"
            >
              {/* Module Header Toggle */}
              <button
                onClick={() => toggleModule(mod.id)}
                className="w-full text-left px-3 py-2.5 flex items-center justify-between hover:bg-slate-100/80 dark:hover:bg-slate-800/60 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-2.5 min-w-0 pr-2">
                  {isExpanded ? (
                    <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                  ) : (
                    <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
                  )}
                  <div className="min-w-0">
                    <span className="text-xs font-bold text-slate-900 dark:text-slate-100 block truncate">
                      {mod.title[lang]}
                    </span>
                    <span className="text-[10px] text-slate-500 dark:text-slate-400">
                      {completedInMod}/{mod.lessons.length} {lang === 'km' ? 'មេរៀន' : 'lessons'}
                    </span>
                  </div>
                </div>

                {isModCompleted && (
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                )}
              </button>

              {/* Lesson Items */}
              {isExpanded && (
                <div className="bg-white dark:bg-slate-900 border-t border-slate-200/60 dark:border-slate-800/60 py-1 space-y-0.5">
                  {mod.lessons.map((lesson) => {
                    const isSelected = lesson.id === currentLessonId;
                    const isCompleted = enrollment.completedLessonIds.includes(lesson.id);

                    return (
                      <button
                        key={lesson.id}
                        onClick={() => onSelectLesson(lesson.id)}
                        className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between gap-2 transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 font-semibold border-l-4 border-blue-600'
                            : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100/70 dark:hover:bg-slate-800/50'
                        }`}
                      >
                        <div className="flex items-center gap-2 min-w-0">
                          {isCompleted ? (
                            <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          ) : isSelected ? (
                            <Circle className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 fill-blue-600/20 shrink-0" />
                          ) : (
                            <Circle className="w-3.5 h-3.5 text-slate-300 dark:text-slate-600 shrink-0" />
                          )}
                          <span className="truncate">{lesson.title[lang]}</span>
                        </div>
                        <span className="text-[10px] text-slate-400 shrink-0">
                          {lesson.durationMinutes}m
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}

        {/* Capstone Section Entry */}
        <div className="pt-2">
          <button
            onClick={() => onSelectLesson('capstone')}
            className={`w-full text-left p-3 rounded-xl border flex items-center gap-3 transition-all cursor-pointer ${
              currentLessonId === 'capstone'
                ? 'bg-gradient-to-r from-amber-500/20 to-orange-500/20 border-amber-500 text-amber-900 dark:text-amber-200 font-bold'
                : 'bg-amber-50/50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800/50 text-slate-800 dark:text-slate-200 hover:bg-amber-100/50'
            }`}
          >
            <div className="p-2 rounded-lg bg-amber-500 text-white shrink-0">
              <Trophy className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <span className="text-xs font-bold block truncate">
                {lang === 'km' ? 'គម្រោង Capstone បញ្ចប់' : 'Capstone Master Project'}
              </span>
              <span className="text-[10px] text-amber-700 dark:text-amber-400">
                {lang === 'km' ? 'ប្រឡង និងដាក់ស្នើ Portfolio' : 'Audit & Final Portfolio'}
              </span>
            </div>
          </button>
        </div>
      </div>
    </aside>
  );
};

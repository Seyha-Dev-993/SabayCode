import React, { useState } from 'react';
import {
  ChevronDown,
  ChevronRight,
  CheckCircle,
  Circle,
  PlayCircle,
  Award,
  BarChart2,
  BookOpen,
} from 'lucide-react';
import { DataAnalyticsModule, DataAnalyticsClassEnrollment } from '../../types/dataAnalyticsClass';
import { DATA_ANALYTICS_CLASS_INFO, getAllDataAnalyticsLessons } from '../../data/dataAnalyticsClassData';

interface Props {
  modules: DataAnalyticsModule[];
  currentLessonId: string;
  enrollment: DataAnalyticsClassEnrollment;
  onSelectLesson: (lessonId: string) => void;
  lang: 'en' | 'km';
}

export const DataAnalyticsClassSidebar: React.FC<Props> = ({
  modules,
  currentLessonId,
  enrollment,
  onSelectLesson,
  lang,
}) => {
  const allLessons = getAllDataAnalyticsLessons();
  const totalLessons = allLessons.length;
  const completedCount = enrollment.completedLessonIds.length;
  const percent = Math.min(100, Math.round((completedCount / (totalLessons || 1)) * 100));

  // Find current module index to keep expanded by default
  const activeModuleIndex = modules.findIndex((m) =>
    m.lessons.some((l) => l.id === currentLessonId)
  );

  const [expandedModules, setExpandedModules] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    modules.forEach((m, idx) => {
      initial[m.id] = idx === (activeModuleIndex >= 0 ? activeModuleIndex : 0);
    });
    return initial;
  });

  const toggleModule = (id: string) => {
    setExpandedModules((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <aside className="w-full lg:w-80 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 flex flex-col h-full shrink-0 select-none transition-colors">
      {/* Sidebar Top Header & Progress */}
      <div className="p-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            {lang === 'km' ? 'មាតិកាវគ្គសិក្សា (១២ មូឌុល)' : 'Curriculum (12 Modules)'}
          </span>
          <span className="text-xs font-extrabold text-emerald-600 dark:text-emerald-400">{percent}%</span>
        </div>

        <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-2.5 overflow-hidden p-0.5 border border-slate-300 dark:border-slate-700/50">
          <div
            className="bg-gradient-to-r from-emerald-500 via-teal-500 to-amber-400 h-full rounded-full transition-all duration-500 shadow-sm shadow-emerald-500/50"
            style={{ width: `${percent}%` }}
          />
        </div>

        <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 mt-2 font-medium">
          <span>{completedCount} / {totalLessons} {lang === 'km' ? 'បានបញ្ចប់' : 'Completed'}</span>
          {enrollment.capstoneSubmitted && (
            <span className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-bold">
              <Award className="w-3 h-3" />
              {lang === 'km' ? 'បានបញ្ចប់ថ្នាក់' : 'Certified'}
            </span>
          )}
        </div>
      </div>

      {/* Accordion Module List */}
      <div className="flex-1 overflow-y-auto p-2 space-y-2 divide-y divide-slate-200/60 dark:divide-slate-800/40">
        {modules.map((mod) => {
          const isExpanded = !!expandedModules[mod.id];
          const completedInMod = mod.lessons.filter((l) =>
            enrollment.completedLessonIds.includes(l.id)
          ).length;
          const isModComplete = completedInMod === mod.lessons.length && mod.lessons.length > 0;

          return (
            <div key={mod.id} className="pt-2">
              {/* Module Accordion Header */}
              <button
                onClick={() => toggleModule(mod.id)}
                className="w-full flex items-center justify-between p-2.5 rounded-xl text-left hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors group cursor-pointer"
              >
                <div className="flex items-center gap-2.5 min-w-0 pr-2">
                  <div
                    className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-extrabold shrink-0 ${
                      isModComplete
                        ? 'bg-emerald-100 dark:bg-emerald-500/20 text-emerald-800 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-500/30'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
                    }`}
                  >
                    {mod.moduleNumber}
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-xs font-bold text-slate-900 dark:text-slate-200 group-hover:text-emerald-600 dark:group-hover:text-emerald-300 truncate leading-tight">
                      {mod.title[lang]}
                    </h4>
                    <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">
                      {completedInMod}/{mod.lessons.length} {lang === 'km' ? 'មេរៀន' : 'lessons'}
                    </span>
                  </div>
                </div>

                <div className="text-slate-400 dark:text-slate-500 group-hover:text-slate-700 dark:group-hover:text-slate-300 shrink-0">
                  {isExpanded ? (
                    <ChevronDown className="w-4 h-4" />
                  ) : (
                    <ChevronRight className="w-4 h-4" />
                  )}
                </div>
              </button>

              {/* Module Lessons Item List */}
              {isExpanded && (
                <div className="ml-3 pl-3 border-l border-slate-200 dark:border-slate-800 space-y-1 my-1.5">
                  {mod.lessons.map((les) => {
                    const isSelected = les.id === currentLessonId;
                    const isCompleted = enrollment.completedLessonIds.includes(les.id);

                    return (
                      <button
                        key={les.id}
                        onClick={() => onSelectLesson(les.id)}
                        className={`w-full flex items-center justify-between p-2 rounded-lg text-left text-xs transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-emerald-50 dark:bg-emerald-950/80 text-emerald-900 dark:text-emerald-200 border border-emerald-300 dark:border-emerald-500/40 font-bold shadow-sm dark:shadow-emerald-950/50'
                            : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/50 hover:text-slate-900 dark:hover:text-white'
                        }`}
                      >
                        <div className="flex items-center gap-2 min-w-0 pr-2">
                          {isCompleted ? (
                            <CheckCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                          ) : isSelected ? (
                            <PlayCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 animate-pulse" />
                          ) : (
                            <Circle className="w-3.5 h-3.5 text-slate-400 dark:text-slate-600 shrink-0" />
                          )}
                          <span className="truncate leading-tight">{les.title[lang]}</span>
                        </div>
                        <span className="text-[10px] text-slate-400 dark:text-slate-500 font-mono shrink-0">
                          {les.durationMinutes}m
                        </span>
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

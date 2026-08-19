import React, { useState } from 'react';
import {
  ChevronDown,
  ChevronRight,
  CheckCircle,
  Circle,
  PlayCircle,
  Award,
  Sparkles,
  BookOpen,
  Lock,
} from 'lucide-react';
import { AIPromptModule, AIPromptClassEnrollment } from '../../types/aiPromptClass';
import { AI_PROMPT_CLASS_INFO } from '../../data/aiPromptClassData';

interface Props {
  modules: AIPromptModule[];
  currentLessonId: string;
  enrollment: AIPromptClassEnrollment;
  onSelectLesson: (lessonId: string) => void;
  lang: 'en' | 'km';
}

export const AIPromptClassSidebar: React.FC<Props> = ({
  modules,
  currentLessonId,
  enrollment,
  onSelectLesson,
  lang,
}) => {
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

  const completedCount = enrollment.completedLessonIds.length;
  const totalLessons = AI_PROMPT_CLASS_INFO.totalLessons;
  const percent = Math.min(100, Math.round((completedCount / totalLessons) * 100));

  return (
    <aside className="w-full lg:w-80 bg-slate-900 border-r border-slate-800 text-slate-200 flex flex-col h-full shrink-0 select-none">
      {/* Sidebar Top Header & Progress */}
      <div className="p-4 border-b border-slate-800 bg-slate-950/60">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5 text-purple-400" />
            {lang === 'km' ? 'មាតិកាវគ្គសិក្សា (៩ មូឌុល)' : 'Curriculum (9 Modules)'}
          </span>
          <span className="text-xs font-extrabold text-purple-400">{percent}%</span>
        </div>

        <div className="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden p-0.5 border border-slate-700/50">
          <div
            className="bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400 h-full rounded-full transition-all duration-500 shadow-sm shadow-purple-500/50"
            style={{ width: `${percent}%` }}
          />
        </div>

        <div className="flex items-center justify-between text-[11px] text-slate-400 mt-2 font-medium">
          <span>{completedCount} / {totalLessons} {lang === 'km' ? 'បានបញ្ចប់' : 'Completed'}</span>
          {enrollment.capstoneSubmitted && (
            <span className="inline-flex items-center gap-1 text-emerald-400 font-bold">
              <Award className="w-3 h-3" />
              {lang === 'km' ? 'បានបញ្ចប់ថ្នាក់' : 'Certified'}
            </span>
          )}
        </div>
      </div>

      {/* Accordion Module List */}
      <div className="flex-1 overflow-y-auto p-2 space-y-2 divide-y divide-slate-800/40">
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
                className="w-full flex items-center justify-between p-2.5 rounded-xl text-left hover:bg-slate-800/60 transition-colors group"
              >
                <div className="flex items-center gap-2.5 min-w-0 pr-2">
                  <div
                    className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-extrabold shrink-0 ${
                      isModComplete
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                        : 'bg-purple-950/60 text-purple-300 border border-purple-800/60'
                    }`}
                  >
                    {mod.moduleNumber}
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-xs font-bold text-slate-200 truncate group-hover:text-purple-300 transition-colors">
                      {mod.title[lang]}
                    </h4>
                    <p className="text-[10px] text-slate-400">
                      {completedInMod}/{mod.lessons.length} {lang === 'km' ? 'មេរៀន' : 'lessons'}
                    </p>
                  </div>
                </div>

                <div className="text-slate-400 group-hover:text-slate-200">
                  {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                </div>
              </button>

              {/* Lesson Items */}
              {isExpanded && (
                <div className="mt-1 ml-2 pl-3 border-l-2 border-slate-800 space-y-1 my-1">
                  {mod.lessons.map((lesson) => {
                    const isActive = lesson.id === currentLessonId;
                    const isCompleted = enrollment.completedLessonIds.includes(lesson.id);

                    return (
                      <button
                        key={lesson.id}
                        onClick={() => onSelectLesson(lesson.id)}
                        className={`w-full flex items-center justify-between p-2 rounded-lg text-left transition-all group ${
                          isActive
                            ? 'bg-purple-950/90 text-purple-200 border border-purple-600/60 shadow-md shadow-purple-900/30'
                            : 'hover:bg-slate-800/80 text-slate-300'
                        }`}
                      >
                        <div className="flex items-start gap-2 min-w-0 pr-2">
                          <div className="mt-0.5 shrink-0">
                            {isCompleted ? (
                              <CheckCircle className="w-4 h-4 text-emerald-400" />
                            ) : isActive ? (
                              <PlayCircle className="w-4 h-4 text-purple-400 animate-pulse" />
                            ) : (
                              <Circle className="w-4 h-4 text-slate-600 group-hover:text-slate-400" />
                            )}
                          </div>
                          <div className="min-w-0">
                            <span
                              className={`text-xs block truncate ${
                                isActive ? 'font-bold text-purple-200' : 'font-medium text-slate-300'
                              }`}
                            >
                              {lesson.lessonNumber}. {lesson.title[lang]}
                            </span>
                            <div className="flex items-center gap-2 mt-0.5 text-[10px] text-slate-400">
                              <span>{lesson.durationMinutes} min</span>
                              <span>•</span>
                              <span
                                className={`px-1.5 py-0.2 rounded text-[9px] font-semibold ${
                                  lesson.difficulty === 'Beginner'
                                    ? 'bg-emerald-950/60 text-emerald-300 border border-emerald-800/40'
                                    : lesson.difficulty === 'Intermediate'
                                    ? 'bg-blue-950/60 text-blue-300 border border-blue-800/40'
                                    : 'bg-purple-950/60 text-purple-300 border border-purple-800/40'
                                }`}
                              >
                                {lesson.difficulty}
                              </span>
                            </div>
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

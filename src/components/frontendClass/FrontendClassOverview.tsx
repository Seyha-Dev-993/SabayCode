import React, { useState } from 'react';
import { 
  GraduationCap, Star, Clock, BookOpen, Users, CheckCircle2, 
  ChevronDown, ChevronUp, Play, Sparkles, Award, ShieldCheck 
} from 'lucide-react';
import { FRONTEND_CLASS_INFO, FRONTEND_MODULES } from '../../data/frontendClassData';
import { useApp } from '../../context/AppContext';

interface FrontendClassOverviewProps {
  isEnrolled: boolean;
  completedLessonCount: number;
  totalLessonCount: number;
  lastVisitedLessonId: string;
  onEnroll: () => void;
  onStartLesson: (lessonId?: string) => void;
}

export const FrontendClassOverview: React.FC<FrontendClassOverviewProps> = ({
  isEnrolled,
  completedLessonCount,
  totalLessonCount,
  lastVisitedLessonId,
  onEnroll,
  onStartLesson,
}) => {
  const { language } = useApp();
  const [openModules, setOpenModules] = useState<Record<string, boolean>>({ m1: true, m2: true });

  const toggleModule = (modId: string) => {
    setOpenModules(prev => ({ ...prev, [modId]: !prev[modId] }));
  };

  const percentComplete = Math.round((completedLessonCount / (totalLessonCount || 1)) * 100);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10 font-sans animate-fade-in text-slate-900 dark:text-slate-100">
      {/* Hero Header Section */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 relative overflow-hidden text-white shadow-2xl space-y-6">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-4">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="px-3.5 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-indigo-400" />
              <span>{FRONTEND_CLASS_INFO.badge}</span>
            </span>

            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold rounded-full">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>{FRONTEND_CLASS_INFO.rating} ({FRONTEND_CLASS_INFO.reviewsCount.toLocaleString()} {language === 'en' ? 'reviews' : 'ការវាយតម្លៃ'})</span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            {FRONTEND_CLASS_INFO.title[language] || FRONTEND_CLASS_INFO.title.en}
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
            {FRONTEND_CLASS_INFO.subtitle[language] || FRONTEND_CLASS_INFO.subtitle.en}
          </p>

          {/* Stats Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-800 text-xs">
            <div className="flex items-center gap-2 text-slate-300">
              <Clock className="w-4 h-4 text-amber-400 shrink-0" />
              <div>
                <div className="font-bold text-white">{FRONTEND_CLASS_INFO.durationWeeks} Weeks ({FRONTEND_CLASS_INFO.durationHours}+ Hours)</div>
                <div className="text-[11px] text-slate-400">{language === 'en' ? 'Duration' : 'រយៈពេល'}</div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-slate-300">
              <BookOpen className="w-4 h-4 text-indigo-400 shrink-0" />
              <div>
                <div className="font-bold text-white">{FRONTEND_MODULES.length} Modules ({totalLessonCount} Lessons)</div>
                <div className="text-[11px] text-slate-400">{language === 'en' ? 'Curriculum' : 'មាតិកា'}</div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-slate-300">
              <Users className="w-4 h-4 text-emerald-400 shrink-0" />
              <div>
                <div className="font-bold text-white">{FRONTEND_CLASS_INFO.enrolledStudents.toLocaleString()}+ Students</div>
                <div className="text-[11px] text-slate-400">{language === 'en' ? 'Enrolled' : 'សិស្សបានចុះឈ្មោះ'}</div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-slate-300">
              <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0" />
              <div>
                <div className="font-bold text-white">Verified Certificate</div>
                <div className="text-[11px] text-slate-400">{language === 'en' ? 'Upon completion' : 'ទទួលបានវិញ្ញាបនបត្រ'}</div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            {!isEnrolled ? (
              <button
                onClick={onEnroll}
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold text-sm sm:text-base rounded-2xl transition shadow-xl shadow-indigo-600/30 transform hover:-translate-y-0.5"
              >
                <GraduationCap className="w-5 h-5" />
                <span>{language === 'en' ? 'Enroll in Class Now' : 'ចូលរៀនថ្នាក់នេះឥឡូវនេះ'}</span>
              </button>
            ) : (
              <button
                onClick={() => onStartLesson(lastVisitedLessonId)}
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm sm:text-base rounded-2xl transition shadow-xl shadow-emerald-600/30 transform hover:-translate-y-0.5"
              >
                <Play className="w-5 h-5 fill-current" />
                <span>{language === 'en' ? `Continue Class (${percentComplete}% Complete)` : `បន្តការសិក្សា (${percentComplete}% បានរៀន)`}</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* What You'll Learn Section */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />
          <span>{language === 'en' ? "What You'll Learn" : 'អ្វីដែលអ្នកនឹងរៀនច្បាស់លាស់'}</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {(FRONTEND_CLASS_INFO.outcomes[language] || FRONTEND_CLASS_INFO.outcomes.en).map((item, idx) => (
            <div key={idx} className="flex items-start gap-3 p-3.5 bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 rounded-2xl">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 dark:text-emerald-400 shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Prerequisites Section */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Award className="w-5 h-5 text-amber-500 dark:text-amber-400" />
          <span>{language === 'en' ? 'Prerequisites' : 'តម្រូវការជាមុន'}</span>
        </h2>

        <ul className="space-y-2">
          {(FRONTEND_CLASS_INFO.prerequisites[language] || FRONTEND_CLASS_INFO.prerequisites.en).map((req, idx) => (
            <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-500 dark:bg-amber-400" />
              <span>{req}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Full Curriculum Section */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />
            <span>{language === 'en' ? 'Full Curriculum Outline' : 'មាតិកាគ្រោងការសិក្សាទាំងស្រុង'}</span>
          </h2>
          <span className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400">
            {FRONTEND_MODULES.length} Modules • {totalLessonCount} Lessons
          </span>
        </div>

        <div className="space-y-4">
          {FRONTEND_MODULES.map((mod) => {
            const isOpen = !!openModules[mod.id];

            return (
              <div key={mod.id} className="border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden bg-slate-50 dark:bg-slate-950">
                <button
                  onClick={() => toggleModule(mod.id)}
                  className="w-full p-4 text-left bg-slate-100/80 dark:bg-slate-900/80 hover:bg-slate-200/60 dark:hover:bg-slate-800 transition flex items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <div className="text-sm font-extrabold text-slate-900 dark:text-white">
                      {mod.title[language] || mod.title.en}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      {mod.description[language] || mod.description.en}
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-mono hidden sm:inline">
                      {mod.lessons.length} {language === 'en' ? 'lessons' : 'មេរៀន'}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-slate-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="p-3 divide-y divide-slate-100 dark:divide-slate-800/60 bg-white dark:bg-slate-950">
                    {mod.lessons.map((lesson) => (
                      <button
                        key={lesson.id}
                        onClick={() => onStartLesson(lesson.id)}
                        className="w-full text-left p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-900 transition flex items-center justify-between gap-3 text-xs"
                      >
                        <div className="flex items-center gap-3">
                          <Play className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400 shrink-0" />
                          <span className="font-semibold text-slate-800 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-white">
                            {lesson.title[language] || lesson.title.en}
                          </span>
                        </div>

                        <span className="text-slate-500 font-mono text-[11px] shrink-0">
                          {lesson.durationMinutes} mins
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

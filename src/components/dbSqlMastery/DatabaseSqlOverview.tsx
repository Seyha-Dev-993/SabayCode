import React from 'react';
import { Database, Star, Clock, BookOpen, Users, CheckCircle2, Award, ArrowRight, ShieldCheck, Cpu, Code2, Play } from 'lucide-react';
import { DatabaseSqlModule, DatabaseSqlClassEnrollment } from '../../types/databaseSqlMasteryClass';
import { DATABASE_SQL_CLASS_INFO, getAllDatabaseSqlLessons } from '../../data/dbSqlMasteryClassData';

interface Props {
  modules: DatabaseSqlModule[];
  enrollment: DatabaseSqlClassEnrollment;
  onEnrollOrContinue: () => void;
  lang: 'en' | 'km';
}

export const DatabaseSqlOverview: React.FC<Props> = ({
  modules,
  enrollment,
  onEnrollOrContinue,
  lang,
}) => {
  const info = DATABASE_SQL_CLASS_INFO;
  const allLessons = getAllDatabaseSqlLessons();
  const completedCount = enrollment.completedLessonIds.length;
  const progressPercent = Math.min(100, Math.round((completedCount / (allLessons.length || 1)) * 100));

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-10 font-sans">
      {/* Premium Class Hero Card */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white p-6 sm:p-10 shadow-2xl border border-indigo-500/30">
        {/* Background Decorative Gradients */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-6">
          {/* Badge & Rating Row */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-md">
              {info.badge}
            </span>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-amber-400 text-xs font-bold">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              <span>{info.rating}</span>
              <span className="text-slate-400">({info.ratingCount.toLocaleString()})</span>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-800/80 text-blue-300 border border-slate-700">
              {info.level}
            </span>
          </div>

          {/* Title & Description */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30 shrink-0">
                <Database className="w-8 h-8" />
              </div>
              <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
                {info.title[lang]}
              </h1>
            </div>
            <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
              {info.shortDescription[lang]}
            </p>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-800/80">
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-blue-400 shrink-0" />
              <div>
                <span className="text-xs text-slate-400 block">{lang === 'km' ? 'រយៈពេល' : 'Duration'}</span>
                <span className="text-sm font-bold text-white">{info.durationWeeks} Weeks (~{info.durationHours} Hours)</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <BookOpen className="w-5 h-5 text-blue-400 shrink-0" />
              <div>
                <span className="text-xs text-slate-400 block">{lang === 'km' ? 'មូឌុល & មេរៀន' : 'Modules & Lessons'}</span>
                <span className="text-sm font-bold text-white">{info.moduleCount} Modules / {info.lessonCount} Lessons</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Users className="w-5 h-5 text-blue-400 shrink-0" />
              <div>
                <span className="text-xs text-slate-400 block">{lang === 'km' ? 'សិស្សបានចុះឈ្មោះ' : 'Enrolled Students'}</span>
                <span className="text-sm font-bold text-white">{info.enrolledCount.toLocaleString()}</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Award className="w-5 h-5 text-amber-400 shrink-0" />
              <div>
                <span className="text-xs text-slate-400 block">{lang === 'km' ? 'វិញ្ញាបនបត្រ' : 'Certificate'}</span>
                <span className="text-sm font-bold text-white">{lang === 'km' ? 'មានផ្តល់ជូន' : 'Verified Included'}</span>
              </div>
            </div>
          </div>

          {/* Action CTA Button */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={onEnrollOrContinue}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-base shadow-xl shadow-blue-500/25 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-3 cursor-pointer"
            >
              {enrollment.enrolled ? (
                <>
                  <Play className="w-5 h-5 fill-current" />
                  <span>{lang === 'km' ? 'បន្តការសិក្សា' : 'Continue Learning'} ({progressPercent}%)</span>
                </>
              ) : (
                <>
                  <span>{lang === 'km' ? 'ចុះឈ្មោះចូលរៀនឥតគិតថ្លៃ' : 'Enroll in Class for Free'}</span>
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>

            {enrollment.enrolled && (
              <div className="text-xs text-slate-400 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>{completedCount} of {allLessons.length} lessons completed</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Skills Acquired Grid */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
          <Cpu className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          <span>{lang === 'km' ? 'ជំនាញដែលអ្នកនឹងទទួលបាន' : 'Core Skills You Will Acquire'}</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {info.skillsAcquired.map((skill, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 flex items-start gap-3 shadow-xs"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">{skill}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Course Curriculum Breakdown */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <Code2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <span>{lang === 'km' ? 'មាតិកាវគ្គសិក្សាលម្អិត (១៤ មូឌុល)' : 'Complete Curriculum Structure (14 Modules)'}</span>
          </h2>
        </div>

        <div className="space-y-4">
          {modules.map((mod) => (
            <div
              key={mod.id}
              className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-xs space-y-3"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                    Module {mod.moduleNumber}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 mt-0.5">
                    {mod.title[lang]}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                    {mod.description[lang]}
                  </p>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 shrink-0">
                  {mod.lessons.length} {lang === 'km' ? 'មេរៀន' : 'lessons'}
                </span>
              </div>

              {/* Lesson Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-slate-100 dark:border-slate-800/60">
                {mod.lessons.map((lesson) => (
                  <div
                    key={lesson.id}
                    className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/40 text-xs font-medium text-slate-700 dark:text-slate-300 flex items-center justify-between gap-2"
                  >
                    <span className="truncate">{lesson.title[lang]}</span>
                    <span className="text-[10px] text-slate-400 shrink-0">{lesson.durationMinutes}m</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

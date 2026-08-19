import React from 'react';
import {
  BarChart2,
  Award,
  BookOpen,
  Clock,
  Users,
  Star,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Database,
  Table,
  LineChart,
} from 'lucide-react';
import { DATA_ANALYTICS_CLASS_INFO, getAllDataAnalyticsLessons } from '../../data/dataAnalyticsClassData';
import { DataAnalyticsModule, DataAnalyticsClassEnrollment } from '../../types/dataAnalyticsClass';

interface Props {
  modules: DataAnalyticsModule[];
  enrollment: DataAnalyticsClassEnrollment;
  onEnrollOrContinue: () => void;
  lang: 'en' | 'km';
}

export const DataAnalyticsClassOverview: React.FC<Props> = ({
  modules,
  enrollment,
  onEnrollOrContinue,
  lang,
}) => {
  const info = DATA_ANALYTICS_CLASS_INFO;
  const totalLessons = getAllDataAnalyticsLessons().length;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans pb-16 transition-colors">
      {/* MASTER CLASS HERO SECTION */}
      <div className="relative overflow-hidden bg-gradient-to-b from-slate-100 via-slate-50 to-slate-100 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950 border-b border-slate-200 dark:border-slate-800 pt-10 pb-16">
        {/* Top Gradient Accent Line */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-amber-400" />

        {/* Ambient Glow */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-600/10 dark:bg-emerald-600/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Badge & Rating Bar */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-500/30 uppercase tracking-widest">
              <BarChart2 className="w-3.5 h-3.5" />
              {info.badge[lang]}
            </span>

            <div className="flex items-center gap-1 bg-amber-100 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-500/30 px-3 py-1 rounded-full text-xs font-bold">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>{info.rating} ({info.reviewCount} {lang === 'km' ? 'ការវាយតម្លៃ' : 'reviews'})</span>
            </div>

            <div className="flex items-center gap-1 text-slate-700 dark:text-slate-400 text-xs font-semibold bg-white dark:bg-slate-900 px-3 py-1 rounded-full border border-slate-200 dark:border-slate-800 shadow-sm">
              <Users className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>{info.enrolledStudents.toLocaleString()} {lang === 'km' ? 'សិស្សចុះឈ្មោះរៀន' : 'students enrolled'}</span>
            </div>
          </div>

          {/* Main Title & Description */}
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight mb-4">
              {info.title[lang]}
            </h1>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
              {info.subtitle[lang]}
            </p>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800/80 backdrop-blur-sm shadow-sm">
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mb-1 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  {lang === 'km' ? 'រយៈពេល' : 'Duration'}
                </div>
                <div className="text-sm font-bold text-slate-900 dark:text-slate-100">{info.durationWeeks} Weeks ({info.durationHours} Hours)</div>
              </div>

              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800/80 backdrop-blur-sm shadow-sm">
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mb-1 flex items-center gap-1">
                  <BookOpen className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                  {lang === 'km' ? 'មូឌុល & មេរៀន' : 'Modules & Lessons'}
                </div>
                <div className="text-sm font-bold text-slate-900 dark:text-slate-100">{info.totalModules} Modules ({totalLessons} Lessons)</div>
              </div>

              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800/80 backdrop-blur-sm shadow-sm">
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mb-1 flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />
                  {lang === 'km' ? 'កម្រិតថ្នាក់រៀន' : 'Skill Level'}
                </div>
                <div className="text-sm font-bold text-slate-900 dark:text-slate-100">{info.level[lang]}</div>
              </div>

              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800/80 backdrop-blur-sm shadow-sm">
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mb-1 flex items-center gap-1">
                  <Award className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  {lang === 'km' ? 'វិញ្ញាបនប័ត្រ' : 'Certificate'}
                </div>
                <div className="text-sm font-bold text-slate-900 dark:text-slate-100">{info.certificate[lang]}</div>
              </div>
            </div>

            {/* Enroll / Continue Button */}
            <div className="flex items-center gap-4">
              <button
                onClick={onEnrollOrContinue}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-600 to-amber-500 hover:from-emerald-500 hover:to-amber-400 text-white font-extrabold text-base shadow-xl shadow-emerald-600/30 transition-all hover:scale-[1.02] active:scale-95 cursor-pointer"
              >
                <span>
                  {enrollment.enrolled
                    ? (lang === 'km' ? 'ចូលរៀនបន្ត (Continue Class)' : 'Continue Learning')
                    : (lang === 'km' ? 'ចូលរៀនឥឡូវនេះ (Enroll Now)' : 'Enroll in Class')}
                </span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* SYLLABUS & OUTCOMES */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Learning Outcomes */}
        <div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <CheckCircle2 className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
            {lang === 'km' ? 'អ្វីដែលអ្នកនឹងទទួលបានពីថ្នាក់រៀននេះ' : 'What You Will Learn'}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {info.whatYouWillLearn.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 flex items-start gap-3 shadow-sm"
              >
                <div className="p-1.5 rounded-lg bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {item[lang]}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Skills Tags */}
        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <Database className="w-5 h-5 text-teal-600 dark:text-teal-400" />
            {lang === 'km' ? 'ជំនាញ និងឧបករណ៍ដែលត្រូវសិក្សា' : 'Skills & Tools Covered'}
          </h2>

          <div className="flex flex-wrap gap-2">
            {info.skillsLearned.map((skill, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-300 text-xs font-semibold shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* 12-Module Curriculum Syllabus List */}
        <div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
            {lang === 'km' ? 'កាលវិភាគមូឌុលសិក្សាទាំង ១២' : 'Comprehensive 12-Module Syllabus'}
          </h2>

          <div className="space-y-4">
            {modules.map((mod) => (
              <div
                key={mod.id}
                className="p-5 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 space-y-3 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-emerald-700 dark:text-emerald-300">
                    {mod.title[lang]}
                  </h3>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                    {mod.lessons.length} {lang === 'km' ? 'មេរៀន' : 'Lessons'}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  {mod.description[lang]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import {
  Server,
  Clock,
  BookOpen,
  Users,
  Star,
  CheckCircle,
  Database,
  Lock,
  Boxes,
  Terminal,
  ShieldCheck,
  ChevronDown,
  ChevronRight,
  Play,
  Check,
  Award,
} from 'lucide-react';
import { backendModulesData } from '../../data/backendClassData';
import { enrollInBackendClass } from '../../utils/backendClassStorage';

interface BackendClassOverviewProps {
  lang: 'en' | 'km';
  isEnrolled: boolean;
  completedPercent: number;
  lastVisitedLessonId: string;
  onStartClass: (lessonId: string) => void;
}

export const BackendClassOverview: React.FC<BackendClassOverviewProps> = ({
  lang,
  isEnrolled,
  completedPercent,
  lastVisitedLessonId,
  onStartClass,
}) => {
  const [openModules, setOpenModules] = useState<Record<string, boolean>>({ m1: true, m2: true });

  const toggleModule = (id: string) => {
    setOpenModules((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleEnrollClick = () => {
    enrollInBackendClass();
    onStartClass(lastVisitedLessonId || 'm1-l1');
  };

  return (
    <div className="flex-1 overflow-y-auto bg-slate-50 dark:bg-slate-950 pb-16">
      {/* Hero Header Section */}
      <div className="relative overflow-hidden bg-slate-950 text-white border-b border-slate-800">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/40 via-slate-950 to-indigo-950/30 opacity-80" />
        <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="flex flex-wrap items-center gap-2 mb-4 text-xs font-semibold">
            <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1.5">
              <Server className="w-3.5 h-3.5" />
              {lang === 'km' ? 'វគ្គសិក្សា Backend ពេញលេញ' : 'Standalone Backend Class'}
            </span>
            <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
              {lang === 'km' ? 'កម្រិតមធ្យម (Intermediate)' : 'Intermediate Level'}
            </span>
            <div className="flex items-center gap-1 text-amber-400 ml-auto sm:ml-0 font-bold">
              <Star className="w-4 h-4 fill-amber-400" />
              <span>4.9 (2,450+ reviews)</span>
            </div>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mb-4 leading-tight">
            {lang === 'km'
              ? 'វគ្គសិក្សា Backend Engineering & RESTful APIs ពេញលេញ'
              : 'Complete Backend Engineering & RESTful APIs BootCamp'}
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed mb-6">
            {lang === 'km'
              ? 'រៀនពីរបៀបសរសេរ Server ដ៏រឹងមាំជាមួយ Node.js, Express, PostgreSQL, MongoDB, JWT Security, Redis Caching, Python, PHP, Docker និង Microservices ពីដំបូងរហូតដល់ចេះបង្កើត REST API ពេញលេញ។'
              : 'Master modern server architecture, RESTful API design, relational & NoSQL databases, JWT authentication, Redis caching, Docker containerization, microservices, and deployment strategies.'}
          </p>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-y border-slate-800/80 mb-8 text-xs text-slate-300">
            <div className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-emerald-400" />
              <div>
                <p className="text-slate-400">{lang === 'km' ? 'រយៈពេល' : 'Duration'}</p>
                <p className="font-bold text-white">16 Weeks / 70+ Hours</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <BookOpen className="w-4 h-4 text-emerald-400" />
              <div>
                <p className="text-slate-400">{lang === 'km' ? 'មេរៀន' : 'Curriculum'}</p>
                <p className="font-bold text-white">16 Modules / 20+ Lessons</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <Users className="w-4 h-4 text-emerald-400" />
              <div>
                <p className="text-slate-400">{lang === 'km' ? 'សិស្សចុះឈ្មោះ' : 'Students'}</p>
                <p className="font-bold text-white">11,800+ Enrolled</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <Award className="w-4 h-4 text-emerald-400" />
              <div>
                <p className="text-slate-400">{lang === 'km' ? 'វិញ្ញាបនបត្រ' : 'Certificate'}</p>
                <p className="font-bold text-white">{lang === 'km' ? 'ទទួលបានពេលបញ្ចប់' : 'Included'}</p>
              </div>
            </div>
          </div>

          {/* Start / Enroll Action Button */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={handleEnrollClick}
              className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm sm:text-base shadow-lg shadow-emerald-950/50 flex items-center gap-2 transition transform hover:-translate-y-0.5"
            >
              <Play className="w-5 h-5 fill-current" />
              <span>
                {isEnrolled
                  ? lang === 'km'
                    ? 'បន្តរៀនមេរៀនបន្ត'
                    : 'Continue Learning'
                  : lang === 'km'
                  ? 'ចូលរៀនឥឡូវនេះ (Enroll Now)'
                  : 'Start Class / Enroll Now'}
              </span>
            </button>

            {isEnrolled && (
              <div className="text-xs font-semibold text-emerald-400 flex items-center gap-2 bg-emerald-950/60 border border-emerald-800/80 px-4 py-2.5 rounded-xl">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>
                  {completedPercent}% {lang === 'km' ? 'បានរៀនរួចរាល់' : 'Course Completed'}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        {/* What You'll Learn Section */}
        <section className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-emerald-500" />
            <span>{lang === 'km' ? 'អ្វីដែលអ្នកនឹងរៀន / What You’ll Learn' : 'What You’ll Learn'}</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-950/50 border border-slate-100 dark:border-slate-800">
              <Server className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-slate-900 dark:text-white">RESTful API Architecture</p>
                <p className="text-slate-500 dark:text-slate-400 text-xs">
                  {lang === 'km'
                    ? 'រចនា API Endpoints តាមស្តង់ដារ, ប្រើប្រាស់ HTTP verbs, status codes និង response envelopes'
                    : 'Design clean HTTP REST endpoints, handle query filters, pagination, and status codes.'}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-950/50 border border-slate-100 dark:border-slate-800">
              <Database className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-slate-900 dark:text-white">Relational SQL & NoSQL Databases</p>
                <p className="text-slate-500 dark:text-slate-400 text-xs">
                  {lang === 'km'
                    ? 'ស្វែងយល់ពី PostgreSQL (JOINs, Primary/Foreign keys) និង MongoDB Document Store (Mongoose)'
                    : 'Master PostgreSQL query optimization, ORM integrations, and MongoDB document modeling.'}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-950/50 border border-slate-100 dark:border-slate-800">
              <Lock className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-slate-900 dark:text-white">Authentication & JWT Security</p>
                <p className="text-slate-500 dark:text-slate-400 text-xs">
                  {lang === 'km'
                    ? 'ប្រើប្រាស់ Bcrypt password hashing, JWT Bearer tokens និង Role-Based Access Control (RBAC)'
                    : 'Implement secure login flows, Bcrypt hashing, signed JWT tokens, and RBAC guards.'}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-950/50 border border-slate-100 dark:border-slate-800">
              <Boxes className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-slate-900 dark:text-white">Docker Containerization & Redis</p>
                <p className="text-slate-500 dark:text-slate-400 text-xs">
                  {lang === 'km'
                    ? 'សរសេរ Dockerfile, Docker Compose រួមជាមួយ Redis caching layer សម្រាប់បង្កើនល្បឿន Server'
                    : 'Containerize backend web apps, optimize in-memory Caching with Redis RAM.'}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Prerequisites */}
        <section className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-amber-500" />
            <span>{lang === 'km' ? 'តម្រូវការជាមុន / Prerequisites' : 'Prerequisites'}</span>
          </h2>
          <ul className="list-disc list-inside text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-2 leading-relaxed">
            <li>
              {lang === 'km'
                ? 'ចំណេះដឹងមូលដ្ឋានគ្រឹះនៃ JavaScript (Variables, Functions, Promises/Async-Await)'
                : 'Basic knowledge of JavaScript fundamentals (variables, functions, arrays, async/await).'}
            </li>
            <li>
              {lang === 'km'
                ? 'ការយល់ដឹងជាមូលដ្ឋានពីការសរសេរ Code លើ Terminal/Command line'
                : 'Familiarity with basic terminal or command prompt usage.'}
            </li>
          </ul>
        </section>

        {/* Curriculum Outline */}
        <section className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Terminal className="w-5 h-5 text-emerald-500" />
              <span>{lang === 'km' ? 'គ្រោងការសិក្សាទាំងមូល / Curriculum Outline' : 'Full Curriculum'}</span>
            </h2>
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
              16 Modules • 20+ Lessons
            </span>
          </div>

          <div className="space-y-3">
            {backendModulesData.map((mod) => {
              const isOpen = !!openModules[mod.id];
              return (
                <div
                  key={mod.id}
                  className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40 overflow-hidden"
                >
                  <button
                    onClick={() => toggleModule(mod.id)}
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-slate-100/60 dark:hover:bg-slate-800/50 transition"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-lg bg-emerald-600 text-white font-bold text-xs flex items-center justify-center shrink-0">
                        {mod.moduleNumber}
                      </span>
                      <div>
                        <h3 className="text-sm font-bold text-slate-900 dark:text-white">{mod.title[lang]}</h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1">
                          {mod.description[lang]}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400 text-xs shrink-0">
                      <span>{mod.lessons.length} {lang === 'km' ? 'មេរៀន' : 'lessons'}</span>
                      {isOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 divide-y divide-slate-100 dark:divide-slate-800/60">
                      {mod.lessons.map((lesson) => (
                        <div
                          key={lesson.id}
                          onClick={() => handleEnrollClick()}
                          className="flex items-center justify-between p-3 sm:px-5 hover:bg-emerald-50/50 dark:hover:bg-emerald-950/20 cursor-pointer transition text-xs"
                        >
                          <div className="flex items-center gap-3">
                            <BookOpen className="w-4 h-4 text-emerald-500 shrink-0" />
                            <span className="font-medium text-slate-800 dark:text-slate-200">
                              {lesson.title[lang]}
                            </span>
                          </div>
                          <div className="flex items-center gap-3 text-slate-400 font-mono text-[10px]">
                            <span>{lesson.durationMinutes} mins</span>
                            <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                              {lesson.difficulty}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

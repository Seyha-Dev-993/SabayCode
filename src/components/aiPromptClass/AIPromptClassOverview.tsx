import React from 'react';
import {
  Sparkles,
  Award,
  BookOpen,
  Clock,
  Users,
  Star,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Layers,
  Code2,
  Cpu,
  BrainCircuit,
  Terminal,
} from 'lucide-react';
import { AI_PROMPT_CLASS_INFO } from '../../data/aiPromptClassData';
import { AIPromptModule, AIPromptClassEnrollment } from '../../types/aiPromptClass';

interface Props {
  modules: AIPromptModule[];
  enrollment: AIPromptClassEnrollment;
  onEnrollOrContinue: () => void;
  lang: 'en' | 'km';
}

export const AIPromptClassOverview: React.FC<Props> = ({
  modules,
  enrollment,
  onEnrollOrContinue,
  lang,
}) => {
  const info = AI_PROMPT_CLASS_INFO;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans pb-16">
      {/* FLAGSHIP HERO SECTION */}
      <div className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border-b border-slate-800 pt-10 pb-16">
        {/* Top Gradient Accent Line */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400" />

        {/* Ambient Glow */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Flagship Badge & Rating Bar */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/30 uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 animate-spin" />
              {info.badge[lang]}
            </span>

            <div className="flex items-center gap-1 bg-amber-950/40 text-amber-300 border border-amber-500/30 px-3 py-1 rounded-full text-xs font-bold">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>{info.rating} ({info.reviewCount} {lang === 'km' ? 'ការវាយតម្លៃ' : 'reviews'})</span>
            </div>

            <div className="flex items-center gap-1 text-slate-400 text-xs font-semibold bg-slate-900 px-3 py-1 rounded-full border border-slate-800">
              <Users className="w-3.5 h-3.5 text-purple-400" />
              <span>{info.studentsEnrolled.toLocaleString()} {lang === 'km' ? 'សិស្សចុះឈ្មោះរៀន' : 'students enrolled'}</span>
            </div>
          </div>

          {/* Main Title & Description */}
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight mb-4">
              {info.title[lang]}
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
              {info.subtitle[lang]}
            </p>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/80 backdrop-blur-sm">
                <div className="text-xs text-slate-400 font-medium mb-1 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-purple-400" />
                  {lang === 'km' ? 'រយៈពេល' : 'Duration'}
                </div>
                <div className="text-sm font-bold text-slate-100">{info.durationWeeks} Weeks ({info.totalHours} Hours)</div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/80 backdrop-blur-sm">
                <div className="text-xs text-slate-400 font-medium mb-1 flex items-center gap-1">
                  <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
                  {lang === 'km' ? 'មូឌុល & មេរៀន' : 'Modules & Lessons'}
                </div>
                <div className="text-sm font-bold text-slate-100">{info.totalModules} Modules ({info.totalLessons} Lessons)</div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/80 backdrop-blur-sm">
                <div className="text-xs text-slate-400 font-medium mb-1 flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5 text-pink-400" />
                  {lang === 'km' ? 'កម្រិតថ្នាក់រៀន' : 'Skill Level'}
                </div>
                <div className="text-sm font-bold text-slate-100">{info.level[lang]}</div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/80 backdrop-blur-sm">
                <div className="text-xs text-slate-400 font-medium mb-1 flex items-center gap-1">
                  <Award className="w-3.5 h-3.5 text-emerald-400" />
                  {lang === 'km' ? 'វិញ្ញាបនប័ត្រ' : 'Certificate'}
                </div>
                <div className="text-sm font-bold text-emerald-300">{info.certificate[lang]}</div>
              </div>
            </div>

            {/* ENROLL / CONTINUE BUTTON */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onEnrollOrContinue}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-extrabold text-base bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white shadow-xl shadow-purple-600/30 hover:shadow-purple-600/50 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>
                  {enrollment.enrolled
                    ? lang === 'km'
                      ? 'បន្តរៀនមេរៀន (Continue Learning)'
                      : 'Continue Learning'
                    : lang === 'km'
                    ? 'ចូលរៀនថ្នាក់រៀននេះ (Enroll Now)'
                    : 'Enroll in Class Now'}
                </span>
                <ArrowRight className="w-5 h-5" />
              </button>

              {enrollment.enrolled && (
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 bg-emerald-950/40 border border-emerald-500/40 px-4 py-3 rounded-xl">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>
                    {lang === 'km'
                      ? `បានចុះឈ្មោះរួចរាល់ (${enrollment.completedLessonIds.length}/${info.totalLessons} មេរៀន)`
                      : `Enrolled (${enrollment.completedLessonIds.length}/${info.totalLessons} completed)`}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* WHAT YOU WILL LEARN GRID */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
            {lang === 'km' ? 'លទ្ធផលនៃការសិក្សាថ្នាក់អាជីពនេះ' : 'What You Will Master'}
          </h2>
          <p className="text-sm text-slate-400">
            {lang === 'km'
              ? 'ទទួលបានជំនាញប្រកួតប្រជែងលើទីផ្សារការងារ AI ជាមួយចំណេះដឹងអនុវត្តជាក់ស្តែង ១០០%'
              : 'Gain market-ready generative AI engineering skills with 100% practical hands-on prompts.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {info.learningOutcomes.map((outcome, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all"
            >
              <div className="p-2 rounded-lg bg-purple-950/80 text-purple-400 border border-purple-800/60 shrink-0">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <p className="text-sm text-slate-200 font-medium leading-relaxed">
                {outcome[lang]}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* COMPLETE CURRICULUM SYLLABUS */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-slate-800">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl font-extrabold text-white">
              {lang === 'km' ? 'កម្មវិធីសិក្សា ៩ មូឌុល (Curriculum)' : 'Curriculum Syllabus (9 Modules)'}
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              {lang === 'km' ? 'គ្របដណ្តប់ពីកម្រិតដំបូង រហូតដល់កម្រិត Master Capstone' : 'From LLM foundations to agentic tools and portfolio capstone.'}
            </p>
          </div>
          <button
            onClick={onEnrollOrContinue}
            className="px-5 py-2.5 rounded-xl font-bold text-xs bg-purple-600 hover:bg-purple-500 text-white shadow-md shadow-purple-600/20 self-start sm:self-auto"
          >
            {enrollment.enrolled
              ? lang === 'km'
                ? 'ចូលទៅកាន់មេរៀន'
                : 'Go to Lessons'
              : lang === 'km'
              ? 'ចូលរៀនឥឡូវនេះ'
              : 'Enroll Now'}
          </button>
        </div>

        {/* Module Accordion List */}
        <div className="space-y-4">
          {modules.map((mod) => (
            <div
              key={mod.id}
              className="rounded-2xl bg-slate-900/80 border border-slate-800/80 overflow-hidden"
            >
              <div className="p-5 bg-slate-900/90 border-b border-slate-800/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-600 text-white font-extrabold flex items-center justify-center text-sm shadow-md">
                    {mod.moduleNumber}
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-slate-100">
                      {mod.title[lang]}
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {mod.description[lang]}
                    </p>
                  </div>
                </div>

                <div className="text-xs font-semibold text-purple-300 bg-purple-950/60 border border-purple-800/50 px-3 py-1 rounded-full shrink-0 self-start sm:self-auto">
                  {mod.lessons.length} {lang === 'km' ? 'មេរៀន' : 'Lessons'}
                </div>
              </div>

              {/* Lessons List inside Module */}
              <div className="p-4 space-y-2 bg-slate-950/40 divide-y divide-slate-800/40">
                {mod.lessons.map((lesson) => (
                  <div
                    key={lesson.id}
                    className="pt-2 first:pt-0 flex items-center justify-between text-xs py-1"
                  >
                    <div className="flex items-center gap-2.5">
                      <Sparkles className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                      <span className="font-semibold text-slate-200">
                        {lesson.lessonNumber}. {lesson.title[lang]}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 text-slate-400 font-medium">
                      <span>{lesson.durationMinutes} min</span>
                      <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] bg-slate-800 border border-slate-700">
                        {lesson.difficulty}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CERTIFICATION FOOTER */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="p-8 rounded-3xl bg-gradient-to-br from-purple-950/60 via-slate-900 to-slate-950 border border-purple-800/50 text-center relative overflow-hidden">
          <Award className="w-12 h-12 text-purple-400 mx-auto mb-4 animate-bounce" />
          <h3 className="text-2xl font-bold text-white mb-2">
            {lang === 'km' ? 'ទទួលវិញ្ញាបនប័ត្របញ្ជាក់ការសិក្សា Master Flagship' : 'Earn Your Master Flagship Certification'}
          </h3>
          <p className="text-sm text-slate-300 max-w-xl mx-auto mb-6">
            {lang === 'km'
              ? 'បន្ទាប់ពីបញ្ចប់មេរៀនទាំង ៩ មូឌុល និងបញ្ជូនគម្រោង Capstone Portfolio អ្នកនឹងទទួលបានវិញ្ញាបនប័ត្រផ្លូវការពី SabayCode!'
              : 'Complete all 9 modules and submit your Capstone Prompt Library Portfolio to earn your official SabayCode certification.'}
          </p>
          <button
            onClick={onEnrollOrContinue}
            className="px-8 py-3.5 rounded-xl font-extrabold text-sm bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-600/30 hover:shadow-purple-600/50 transition-all"
          >
            {enrollment.enrolled
              ? lang === 'km'
                ? 'ចូលរៀនមេរៀនបន្ត'
                : 'Continue Learning'
              : lang === 'km'
              ? 'ចាប់ផ្តើមរៀនឥឡូវនេះ'
              : 'Start Learning Now'}
          </button>
        </div>
      </div>
    </div>
  );
};

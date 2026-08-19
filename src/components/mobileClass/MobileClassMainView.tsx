import React, { useState, useEffect } from 'react';
import { 
  Smartphone, ArrowLeft, ArrowRight, BookOpen, Clock, CheckCircle2, Play, 
  Code2, Sparkles, Layers, ShieldCheck, Star, Award, FileText, ChevronRight, HelpCircle, Laptop, RefreshCw, Trophy
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { MOBILE_COURSES, MobileCourse, MobileLesson } from '../../data/mobileCoursesHubData';
import { CourseBrandIcon, getCourseBannerStyle } from '../CourseBrandIcon';
import { MobileHubView } from './MobileHubView';
import { MobileClassHeader } from './MobileClassHeader';
import { BackendClassCodeSandbox } from '../backendClass/BackendClassCodeSandbox';

interface MobileClassMainViewProps {
  initialCourseId?: string | null;
  initialLessonId?: string | null;
  onNavigateHome: () => void;
  onNavigateClasses: () => void;
}

export const MobileClassMainView: React.FC<MobileClassMainViewProps> = ({
  initialCourseId,
  initialLessonId,
  onNavigateHome,
  onNavigateClasses,
}) => {
  const { language } = useApp();
  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(initialCourseId || null);
  const [selectedLessonId, setSelectedLessonId] = useState<string | null>(initialLessonId || null);
  const [activeTab, setActiveTab] = useState<'lessons' | 'cheatsheet' | 'quiz' | 'capstone' | 'setup'>('lessons');
  const [showSolution, setShowSolution] = useState<boolean>(false);
  const [copiedCode, setCopiedCode] = useState<boolean>(false);
  const [runKey, setRunKey] = useState<number>(0);

  const activeCourse: MobileCourse | undefined = MOBILE_COURSES.find((c) => c.id === selectedCourseId);
  const activeLesson: MobileLesson | undefined = 
    activeCourse?.lessons.find((l) => l.id === selectedLessonId || l.slug === selectedLessonId) 
    || activeCourse?.lessons[0];

  // Sync props
  useEffect(() => {
    if (initialCourseId) {
      setSelectedCourseId(initialCourseId);
    }
    if (initialLessonId) {
      setSelectedLessonId(initialLessonId);
    }
  }, [initialCourseId, initialLessonId]);

  // Reset showSolution state on lesson change
  useEffect(() => {
    setShowSolution(false);
    setCopiedCode(false);
  }, [selectedLessonId, activeLesson?.id]);

  // If no course selected, render Hub View
  if (!selectedCourseId || !activeCourse) {
    return (
      <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 font-sans text-slate-900 dark:text-slate-100 transition-colors">
        <MobileClassHeader onNavigateClasses={onNavigateClasses} />

        {/* Navigation Sub-Bar below Header */}
        <div className="border-b border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-xs shrink-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
            <button
              onClick={onNavigateClasses}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{language === 'en' ? 'Back to All Classes' : 'ត្រឡប់ទៅថ្នាក់រៀនទាំងអស់'}</span>
            </button>
          </div>
        </div>

        <main className="flex-1">
          <MobileHubView
            onSelectCourse={(courseId) => {
              setSelectedCourseId(courseId);
              setSelectedLessonId(null);
              window.scrollTo({ top: 0, behavior: 'instant' });
            }}
            onNavigateHome={onNavigateHome}
          />
        </main>
      </div>
    );
  }

  const bannerStyle = getCourseBannerStyle(activeCourse.iconName || activeCourse.id);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans text-slate-900 dark:text-slate-100 flex flex-col transition-colors">
      <MobileClassHeader onNavigateClasses={onNavigateClasses} />

      {/* Navigation Sub-Bar below Header */}
      <div className="border-b border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-xs shrink-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
          <button
            onClick={() => {
              setSelectedCourseId(null);
              setSelectedLessonId(null);
            }}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{language === 'en' ? 'Back to Mobile Engineering Hub' : 'ត្រឡប់ទៅមជ្ឈមណ្ឌល Mobile Engineering'}</span>
          </button>

          <div className="flex items-center gap-2 text-xs font-mono font-bold">
            <span className="text-slate-400 hidden sm:inline">{activeCourse.categoryId === 'languages' ? 'Language Track' : 'Framework Track'}</span>
            <span className="text-slate-400 hidden sm:inline">•</span>
            <span className={bannerStyle.accentColor}>{activeCourse.title[language]}</span>
          </div>
        </div>
      </div>

      {/* Main Course Content Header Banner */}
      <div className="bg-slate-950 text-white relative overflow-hidden border-b border-slate-800">
        <div className={`absolute inset-0 bg-gradient-to-r ${bannerStyle.bannerGradient} opacity-80`} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative z-10 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-start space-x-4">
              <div className="p-4 rounded-3xl bg-slate-900/90 border border-white/20 shadow-2xl backdrop-blur-xl shrink-0">
                <CourseBrandIcon iconName={activeCourse.iconName} courseId={activeCourse.id} className="w-12 h-12 text-white" />
              </div>

              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-0.5 rounded-full bg-slate-900/80 backdrop-blur-md text-sky-300 text-[10px] font-mono font-bold uppercase border border-sky-400/30">
                    {activeCourse.type.toUpperCase()}
                  </span>
                  <span className="px-3 py-0.5 rounded-full bg-slate-900/80 backdrop-blur-md text-amber-400 text-[10px] font-mono font-bold border border-amber-400/30">
                    {activeCourse.difficulty}
                  </span>
                </div>

                <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                  {activeCourse.title[language]}
                </h1>

                <p className="text-slate-300 text-xs sm:text-sm max-w-2xl leading-relaxed">
                  {activeCourse.summary[language]}
                </p>
              </div>
            </div>

            {/* Quick Action Button */}
            <div className="shrink-0 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  if (activeCourse.lessons.length > 0) {
                    setSelectedLessonId(activeCourse.lessons[0].id);
                  }
                  setActiveTab('lessons');
                }}
                className={`px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-wider shadow-xl transition cursor-pointer flex items-center justify-center gap-2 ${bannerStyle.buttonBg}`}
              >
                <Play className="w-4 h-4 fill-current" />
                <span>{language === 'en' ? 'Start Course' : 'ចាប់ផ្តើមវគ្គសិក្សា'}</span>
              </button>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center gap-2 pt-4 border-t border-white/10 overflow-x-auto no-scrollbar">
            <button
              onClick={() => setActiveTab('lessons')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-2 ${
                activeTab === 'lessons' ? 'bg-white text-slate-950 font-black shadow-md' : 'text-slate-300 hover:text-white hover:bg-white/10'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>{language === 'en' ? 'Curriculum & Lessons' : 'មេរៀនទាំងអស់'} ({activeCourse.lessons.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('cheatsheet')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-2 ${
                activeTab === 'cheatsheet' ? 'bg-white text-slate-950 font-black shadow-md' : 'text-slate-300 hover:text-white hover:bg-white/10'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>{language === 'en' ? 'Quick Reference Cheat Sheet' : 'កូដសង្ខេប Cheat Sheet'}</span>
            </button>

            <button
              onClick={() => setActiveTab('setup')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-2 ${
                activeTab === 'setup' ? 'bg-white text-slate-950 font-black shadow-md' : 'text-slate-300 hover:text-white hover:bg-white/10'
              }`}
            >
              <Laptop className="w-4 h-4" />
              <span>{language === 'en' ? 'Tools & Setup Guide' : 'ការដំឡើងប្រព័ន្ធ Tools & Setup'}</span>
            </button>

            <button
              onClick={() => setActiveTab('quiz')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-2 ${
                activeTab === 'quiz' ? 'bg-white text-slate-950 font-black shadow-md' : 'text-slate-300 hover:text-white hover:bg-white/10'
              }`}
            >
              <HelpCircle className="w-4 h-4" />
              <span>{language === 'en' ? 'Knowledge Quiz' : 'លំហាត់តេស្ត'} ({activeCourse.quiz.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('capstone')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-2 ${
                activeTab === 'capstone' ? 'bg-white text-slate-950 font-black shadow-md' : 'text-slate-300 hover:text-white hover:bg-white/10'
              }`}
            >
              <Trophy className="w-4 h-4 text-amber-400" />
              <span>{language === 'en' ? 'Capstone Project' : 'គម្រោងបញ្ចប់ Capstone'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Container Body */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 w-full space-y-8">
        {/* TAB 1: CURRICULUM & LESSONS */}
        {activeTab === 'lessons' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left: Lessons List Sidebar */}
            <div className="space-y-4 lg:col-span-1">
              <h3 className="text-sm font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 font-mono">
                {language === 'en' ? 'Course Outline' : 'លំដាប់មេរៀន'}
              </h3>

              <div className="space-y-3">
                {activeCourse.lessons.map((lesson, idx) => {
                  const isSelected = selectedLessonId === lesson.id || (!selectedLessonId && idx === 0);

                  return (
                    <div
                      key={lesson.id}
                      onClick={() => setSelectedLessonId(lesson.id)}
                      className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start space-x-3 text-left ${
                        isSelected
                          ? 'bg-blue-600/10 border-blue-500/50 dark:bg-blue-500/10 dark:border-blue-500/50 shadow-md'
                          : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-xl font-mono text-xs font-black flex items-center justify-center shrink-0 ${
                        isSelected ? 'bg-blue-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                      }`}>
                        {idx + 1}
                      </div>

                      <div className="min-w-0 flex-1 space-y-1">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-[10px] font-mono text-slate-400 uppercase">
                            {lesson.durationMinutes} min • {lesson.difficulty}
                          </span>
                        </div>
                        <h4 className={`text-xs font-bold leading-tight ${isSelected ? 'text-blue-600 dark:text-blue-400 font-extrabold' : 'text-slate-900 dark:text-slate-100'}`}>
                          {lesson.title[language]}
                        </h4>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right: Selected Lesson Viewer */}
            <div className="lg:col-span-2 space-y-6">
              {activeLesson && (
                (() => {
                  const currentLessonIndex = activeCourse.lessons.findIndex(l => l.id === activeLesson.id);
                  const prevLesson = currentLessonIndex > 0 ? activeCourse.lessons[currentLessonIndex - 1] : null;
                  const nextLesson = currentLessonIndex < activeCourse.lessons.length - 1 ? activeCourse.lessons[currentLessonIndex + 1] : null;

                  return (
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
                      {/* Top Breadcrumb & Progress Row */}
                      <div className="flex items-center justify-between gap-3 text-xs border-b border-slate-100 dark:border-slate-800/80 pb-4">
                        <button
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }}
                          className="inline-flex items-center gap-1.5 text-slate-500 hover:text-slate-900 dark:hover:text-white font-medium transition cursor-pointer"
                        >
                          <ArrowLeft className="w-3.5 h-3.5" />
                          <span>{language === 'en' ? 'Back to Top' : '← ត្រឡប់ទៅខាងលើ'}</span>
                        </button>

                        <div className="flex items-center gap-2">
                          <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-mono text-[11px] font-bold">
                            {language === 'en' 
                              ? `Lesson ${currentLessonIndex + 1} of ${activeCourse.lessons.length}` 
                              : `មេរៀនទី ${currentLessonIndex + 1} នៃ ${activeCourse.lessons.length}`}
                          </span>
                        </div>
                      </div>

                      {/* Header Title Block */}
                      <div className="space-y-3">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <div className="flex items-center gap-2">
                            <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-[10px] font-mono font-black uppercase tracking-wider border border-blue-500/20">
                              Module {activeLesson.moduleNumber} • {language === 'en' ? 'Sub-lesson' : 'មេរៀនរង'} {activeLesson.lessonNumberInModule || (currentLessonIndex + 1)}
                            </span>
                            <span className="px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[10px] font-mono font-bold">
                              {activeLesson.difficulty}
                            </span>
                          </div>
                          
                          <span className="flex items-center gap-1 text-xs font-mono text-slate-400">
                            <Clock className="w-3.5 h-3.5" />
                            <span>{activeLesson.durationMinutes} mins</span>
                          </span>
                        </div>

                        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight leading-snug">
                          {activeLesson.title[language]}
                        </h2>
                      </div>

                      {/* Block 1: Key Concept Box (✨ ការពន្យល់អំពីខ្លឹមសារសំខាន់ៗ) */}
                      <div className="p-5 rounded-2xl bg-sky-500/5 border border-sky-500/20 space-y-2">
                        <h3 className="text-xs font-mono font-black text-sky-600 dark:text-sky-400 uppercase tracking-wider flex items-center gap-2">
                          <Sparkles className="w-4 h-4 text-sky-500" />
                          <span>{language === 'en' ? 'Key Concept Explanation' : '✨ ការពន្យល់អំពីខ្លឹមសារសំខាន់ៗ'}</span>
                        </h3>
                        <p className="text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-sans">
                          {activeLesson.explanation[language]}
                        </p>
                      </div>

                      {/* Block 2: Benefits / Real World Context (📖 ការណែនាំពីអត្ថប្រយោជន៍) */}
                      <div className="p-5 rounded-2xl bg-amber-500/5 border border-amber-500/20 space-y-2">
                        <h3 className="text-xs font-mono font-black text-amber-600 dark:text-amber-400 uppercase tracking-wider flex items-center gap-2">
                          <BookOpen className="w-4 h-4 text-amber-500" />
                          <span>{language === 'en' ? 'Practical Benefits & Context' : '📖 ការណែនាំពីអត្ថប្រយោជន៍ និងការអនុវត្ត'}</span>
                        </h3>
                        <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
                          {activeLesson.realWorldExample?.[language] || (
                            language === 'en'
                              ? `Mastering this concept is essential for writing clean, production-ready ${activeCourse.title.en} code used in scalable mobile architectures.`
                              : `ការយល់ដឹងច្បាស់ពីចំណុចនេះ ជួយឱ្យអ្នកសរសេរកូដ ${activeCourse.title.km} បានស្អាត មានរបៀប រៀបចំ Architecture កម្មវិធីបានត្រឹមត្រូវសម្រាប់ផលិតផលពិត។`
                          )}
                        </p>
                      </div>

                      {/* Block 3: Interactive Sandbox Code & Live Output Terminal */}
                      <div className="space-y-3 pt-2">
                        <div className="flex items-center justify-between">
                          <h3 className="text-xs font-mono font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-wider flex items-center gap-2">
                            <Code2 className="w-4 h-4" />
                            <span>{language === 'en' ? 'Code Example & Syntax Sandbox' : 'កូដគំរូ និងការអនុវត្តសាកល្បង'}</span>
                          </h3>
                        </div>

                        <BackendClassCodeSandbox
                          code={activeLesson.tutorial[language]}
                          language={activeCourse.id}
                          lang={language}
                          title={`${activeCourse.id}.${activeCourse.type === 'language' ? 'code' : 'app'}`}
                          autoRunOnLoad={true}
                        />
                      </div>

                      {/* Block 4: Why It Matters In Production (🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត) */}
                      <div className="p-5 rounded-2xl bg-indigo-500/5 border border-indigo-500/20 space-y-2">
                        <h3 className="text-xs font-mono font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-wider flex items-center gap-2">
                          <ShieldCheck className="w-4 h-4 text-indigo-500" />
                          <span>{language === 'en' ? 'Why It Matters in Real Work' : '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត'}</span>
                        </h3>
                        <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
                          {language === 'en'
                            ? `Senior mobile developers rely on this core pattern to optimize runtime memory, prevent crashes, and write maintainable code for iOS & Android.`
                            : `Senior Mobile Developers តែងតែប្រើប្រាស់លំនាំគ្រឹះនេះ ដើម្បីបង្កើនល្បឿន Memory, ការពារ App កុំឱ្យ Crash និងធានាថាកូដងាយស្រួលថែទាំទៅថ្ងៃមុខ។`}
                        </p>
                      </div>

                      {/* Block 5: Practice Checkpoint (📝 លំហាត់អនុវត្ត) */}
                      <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-4">
                        <div className="flex items-center justify-between gap-2">
                          <h3 className="text-xs font-mono font-black text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
                            <Award className="w-4 h-4 text-purple-500" />
                            <span>{language === 'en' ? 'Practice Exercise Checkpoint' : '📝 លំហាត់អនុវត្ត'}</span>
                          </h3>

                          <button
                            onClick={() => setShowSolution(!showSolution)}
                            className="px-3 py-1 rounded-xl bg-purple-600/10 text-purple-600 dark:text-purple-400 hover:bg-purple-600/20 border border-purple-500/30 text-xs font-bold transition cursor-pointer"
                          >
                            {showSolution 
                              ? (language === 'en' ? 'Hide Solution' : 'លាក់ចម្លើយ') 
                              : (language === 'en' ? '👁️ Show Solution' : '👁️ បង្ហាញចម្លើយ')}
                          </button>
                        </div>

                        <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-medium">
                          {activeLesson.practiceExercise?.question[language] || (
                            language === 'en'
                              ? 'Write a short script applying this lesson\'s concept and verify the console output.'
                              : 'សាកល្បងសរសេរកូដដោយអនុវត្តតាមគំរូខាងលើ រួចរត់ផ្ទៀងផ្ទាត់លទ្ធផល។'
                          )}
                        </p>

                        {showSolution && (
                          <div className="p-4 rounded-xl bg-purple-950/40 border border-purple-800/60 space-y-2 animate-fadeIn">
                            <span className="text-[10px] font-mono font-bold text-purple-300 uppercase tracking-wider block">
                              {language === 'en' ? 'Verified Solution Code:' : 'ចម្លើយត្រឹមត្រូវ:'}
                            </span>
                            <pre className="bg-slate-950 text-emerald-300 p-3.5 rounded-lg font-mono text-xs overflow-x-auto border border-slate-800">
                              <code>
                                {activeLesson.practiceExercise?.solution || activeLesson.tutorial[language]}
                              </code>
                            </pre>
                          </div>
                        )}
                      </div>

                      {/* Navigation Controls: Previous / Next Lesson */}
                      <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-4">
                        <button
                          disabled={!prevLesson}
                          onClick={() => {
                            if (prevLesson) {
                              setSelectedLessonId(prevLesson.id);
                              window.scrollTo({ top: 300, behavior: 'smooth' });
                            }
                          }}
                          className={`px-4 py-2.5 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
                            prevLesson 
                              ? 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 cursor-pointer' 
                              : 'bg-slate-50 dark:bg-slate-900/50 text-slate-400 cursor-not-allowed opacity-50'
                          }`}
                        >
                          <ArrowLeft className="w-3.5 h-3.5" />
                          <span>{language === 'en' ? 'Back lesson' : 'មេរៀនមុន'}</span>
                        </button>

                        <button
                          disabled={!nextLesson}
                          onClick={() => {
                            if (nextLesson) {
                              setSelectedLessonId(nextLesson.id);
                              window.scrollTo({ top: 300, behavior: 'smooth' });
                            }
                          }}
                          className={`px-5 py-2.5 rounded-xl text-xs font-black transition flex items-center gap-2 ${
                            nextLesson 
                              ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-md cursor-pointer' 
                              : 'bg-slate-50 dark:bg-slate-950 text-slate-400 cursor-not-allowed opacity-50'
                          }`}
                        >
                          <span>{language === 'en' ? 'Next Lesson' : 'មេរៀនបន្ទាប់'}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  );
                })()
              )}
            </div>
          </div>
        )}

        {/* TAB 2: CHEAT SHEET */}
        {activeTab === 'cheatsheet' && (
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
            <div>
              <h2 className="text-2xl font-black text-slate-900 dark:text-white">
                {language === 'en' ? `${activeCourse.title.en} Cheat Sheet` : `កូដសង្ខេប ${activeCourse.title.km}`}
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                {language === 'en' ? 'Essential code snippets and syntax formulas for fast reference.' : 'រូបមន្ត និងកូដសង្ខេបសំខាន់ៗសម្រាប់ទាញយកប្រើប្រាស់ភ្លាមៗ។'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {activeCourse.cheatSheet.map((item, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-blue-600 dark:text-blue-400 font-mono">
                      #{idx + 1} {item.concept}
                    </span>
                  </div>

                  <pre className="bg-slate-900 text-sky-300 p-3.5 rounded-xl text-[11px] font-mono overflow-x-auto border border-slate-800">
                    <code>{item.code}</code>
                  </pre>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.explanation[language]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: TOOLS & SETUP GUIDE */}
        {activeTab === 'setup' && (
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
            <div className="space-y-2">
              <h2 className="text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2">
                <Laptop className="w-6 h-6 text-purple-500" />
                <span>{language === 'en' ? 'Development Tools & Setup Guide' : 'ការដំឡើងប្រព័ន្ធ និង Tools សំខាន់ៗ'}</span>
              </h2>
              <p className="text-xs text-slate-500">
                {language === 'en' ? 'Step-by-step guidance on setting up your local computer environment.' : 'ការណែនាំដំឡើងប្រព័ន្ធកុំព្យូទ័រសម្រាប់ការសរសេរកូដជាក់ស្តែង។'}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-4">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                {language === 'en' ? 'Required Software & Extensions' : 'កម្មវិធីកុំព្យូទ័រដែលត្រូវដំឡើង'}
              </h3>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-mono">
                {activeCourse.toolsAndSetup[language]}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/40 space-y-3">
              <h3 className="text-xs font-mono font-extrabold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                {language === 'en' ? 'Prerequisites Check' : 'លក្ខខណ្ឌតម្រូវដំបូង'}
              </h3>
              <p className="text-xs text-slate-700 dark:text-slate-300">
                {activeCourse.prerequisites[language]}
              </p>
            </div>
          </div>
        )}

        {/* TAB 4: QUIZ */}
        {activeTab === 'quiz' && (
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
            <div>
              <h2 className="text-2xl font-black text-slate-900 dark:text-white">
                {language === 'en' ? `${activeCourse.title.en} Knowledge Quiz` : `លំហាត់តេស្ត ${activeCourse.title.km}`}
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                {language === 'en' ? 'Test your understanding of concepts and syntax.' : 'វាស់ស្ទង់ការយល់ដឹងពីមេរៀន និងកូដសំខាន់ៗ។'}
              </p>
            </div>

            <div className="space-y-6">
              {activeCourse.quiz.map((q, idx) => (
                <div key={q.id} className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-4">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                    {idx + 1}. {q.question[language]}
                  </h3>

                  <div className="space-y-2">
                    {q.options.map((opt) => (
                      <div
                        key={opt.id}
                        className={`p-3.5 rounded-xl border text-xs font-medium flex items-center justify-between ${
                          opt.isCorrect
                            ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 font-bold'
                            : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300'
                        }`}
                      >
                        <span>{opt.text[language]}</span>
                        {opt.isCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-500" />}
                      </div>
                    ))}
                  </div>

                  <p className="text-xs text-slate-500 dark:text-slate-400 italic pt-2 border-t border-slate-200/60 dark:border-slate-800">
                    💡 {q.explanation[language]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: CAPSTONE PROJECT */}
        {activeTab === 'capstone' && (
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-500">
                <Trophy className="w-8 h-8" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold text-amber-500 uppercase tracking-wider">
                  {language === 'en' ? 'Final Capstone Assessment' : 'គម្រោងបញ្ចប់ការសិក្សា'}
                </span>
                <h2 className="text-2xl font-black text-slate-900 dark:text-white">
                  {activeCourse.capstoneProject.title[language]}
                </h2>
              </div>
            </div>

            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {activeCourse.capstoneProject.description[language]}
            </p>

            {activeCourse.capstoneProject.featureChecklist && (
              <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                <h3 className="text-xs font-mono font-bold text-amber-500 uppercase tracking-wider">
                  {language === 'en' ? 'Feature Checklist' : 'បញ្ជីមុខងារដែលត្រូវសាងសង់'}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeCourse.capstoneProject.featureChecklist[language].map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-slate-800">
              <h3 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                {language === 'en' ? 'Project Template Preview' : 'ទម្រង់គំរូគម្រោង'}
              </h3>

              <div className="rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
                <iframe
                  srcDoc={activeCourse.capstoneProject.starterCode.html}
                  title="Capstone Demo"
                  className="w-full h-56 bg-slate-950 border-0"
                />
              </div>
            </div>

            {activeCourse.capstoneProject.finalCode && (
              <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                <h3 className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider">
                  {language === 'en' ? 'Reference Source Code' : 'កូដគំរូពេញលេញ'}
                </h3>
                <pre className="bg-slate-950 text-sky-300 p-5 rounded-2xl font-mono text-xs overflow-x-auto border border-slate-800">
                  <code>{activeCourse.capstoneProject.finalCode}</code>
                </pre>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

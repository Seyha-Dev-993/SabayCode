import React, { useState, useEffect } from 'react';
import { 
  Server, ArrowLeft, ArrowRight, BookOpen, Clock, CheckCircle2, Play, 
  Code2, Sparkles, Layers, ShieldCheck, Star, Award, FileText, ChevronRight, HelpCircle, Laptop, Trophy, Send, RefreshCw
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { ALL_BACKEND_COURSES, BackendCourse, BackendLesson } from '../../data/backendCoursesHubData';
import { CourseBrandIcon, getCourseBannerStyle } from '../CourseBrandIcon';
import { BackendHubView } from './BackendHubView';
import { BackendClassHeader } from './BackendClassHeader';
import { BackendClassCodeSandbox } from './BackendClassCodeSandbox';
import { LessonQuizWidget } from './LessonQuizWidget';

interface BackendClassMainViewProps {
  initialCourseId?: string | null;
  initialLessonId?: string | null;
  onNavigateHome: () => void;
  onNavigateClasses: () => void;
}

export const BackendClassMainView: React.FC<BackendClassMainViewProps> = ({
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
  const [activeApiRequestIndex, setActiveApiRequestIndex] = useState<number>(0);
  const [apiSimulatedResponse, setApiSimulatedResponse] = useState<string | null>(null);

  // Lesson Completion State
  const [completedLessonIds, setCompletedLessonIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('sabaycode_completed_backend_lessons');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('sabaycode_completed_backend_lessons', JSON.stringify(completedLessonIds));
    } catch (e) {
      // storage fallback
    }
  }, [completedLessonIds]);

  const toggleLessonCompletion = (lessonId: string) => {
    setCompletedLessonIds((prev) =>
      prev.includes(lessonId)
        ? prev.filter((id) => id !== lessonId)
        : [...prev, lessonId]
    );
  };

  const activeCourse: BackendCourse | undefined = ALL_BACKEND_COURSES.find(
    (c) => c.id === selectedCourseId || c.slug === selectedCourseId
  );

  // Extract all lessons from modules
  const allCourseLessons: BackendLesson[] = activeCourse
    ? activeCourse.modules.flatMap((mod) => mod.lessons)
    : [];

  const activeLesson: BackendLesson | undefined =
    allCourseLessons.find((l) => l.id === selectedLessonId || l.slug === selectedLessonId) ||
    allCourseLessons[0];

  // Sync props
  useEffect(() => {
    if (initialCourseId) {
      setSelectedCourseId(initialCourseId);
    }
    if (initialLessonId) {
      setSelectedLessonId(initialLessonId);
    }
  }, [initialCourseId, initialLessonId]);

  // Reset state on lesson/course change
  useEffect(() => {
    setShowSolution(false);
    setCopiedCode(false);
    setApiSimulatedResponse(null);
  }, [selectedLessonId, selectedCourseId]);

  // If no course selected, render Hub View
  if (!selectedCourseId || !activeCourse) {
    return (
      <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 font-sans text-slate-900 dark:text-slate-100 transition-colors">
        <BackendClassHeader onNavigateClasses={onNavigateClasses} />

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
          <BackendHubView
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
      <BackendClassHeader onNavigateClasses={onNavigateClasses} />

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
            <span>{language === 'en' ? 'Back to Backend Engineering Hub' : 'ត្រឡប់ទៅមជ្ឈមណ្ឌល Backend Engineering'}</span>
          </button>

          <div className="flex items-center gap-2 text-xs font-mono font-bold">
            <span className="text-slate-400 hidden sm:inline">
              {activeCourse.categoryId === 'languages' ? 'Language Track' : activeCourse.categoryId === 'frameworks' ? 'Framework Track' : 'Database & Security Track'}
            </span>
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
                  <span className="px-3 py-0.5 rounded-full bg-slate-900/80 backdrop-blur-md text-emerald-300 text-[10px] font-mono font-bold uppercase border border-emerald-400/30">
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
                  if (allCourseLessons.length > 0) {
                    setSelectedLessonId(allCourseLessons[0].id);
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
              <span>{language === 'en' ? 'Curriculum & Lessons' : 'មេរៀនទាំងអស់'} ({allCourseLessons.length})</span>
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
            {/* Left: Modules & Lessons Outline Sidebar */}
            <div className="space-y-6 lg:col-span-1">
              {/* Course Overall Progress Widget */}
              {(() => {
                const courseCompletedCount = allCourseLessons.filter(l => completedLessonIds.includes(l.id)).length;
                const progressPct = allCourseLessons.length > 0 ? Math.round((courseCompletedCount / allCourseLessons.length) * 100) : 0;

                return (
                  <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 shadow-sm">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        <span>{language === 'en' ? 'Course Progress' : 'វឌ្ឍនភាពការសិក្សា'}</span>
                      </span>
                      <span className="font-extrabold text-emerald-600 dark:text-emerald-400">
                        {courseCompletedCount}/{allCourseLessons.length} ({progressPct}%)
                      </span>
                    </div>

                    <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2 overflow-hidden">
                      <div 
                        className="bg-emerald-500 h-full rounded-full transition-all duration-500 ease-out" 
                        style={{ width: `${progressPct}%` }}
                      />
                    </div>
                  </div>
                );
              })()}

              <h3 className="text-sm font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 font-mono">
                {language === 'en' ? 'Course Outline & Modules' : 'រចនាសម្ព័ន្ធមេរៀនតាម Module'}
              </h3>

              <div className="space-y-4">
                {activeCourse.modules.map((module) => (
                  <div key={module.moduleNumber} className="space-y-2">
                    <div className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                      <span className="text-[11px] font-mono font-bold text-slate-700 dark:text-slate-300 uppercase">
                        {module.title[language]}
                      </span>
                      <span className="text-[10px] font-mono text-slate-400">
                        {module.lessons.length} {language === 'en' ? 'lessons' : 'មេរៀន'}
                      </span>
                    </div>

                    <div className="space-y-2 pl-2">
                      {module.lessons.map((lesson) => {
                        const isSelected = selectedLessonId === lesson.id || (!selectedLessonId && lesson.id === activeLesson?.id);
                        const isDone = completedLessonIds.includes(lesson.id);

                        return (
                          <div
                            key={lesson.id}
                            onClick={() => setSelectedLessonId(lesson.id)}
                            className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-start space-x-3 text-left ${
                              isSelected
                                ? 'bg-emerald-600/10 border-emerald-500/50 dark:bg-emerald-500/10 dark:border-emerald-500/50 shadow-sm'
                                : isDone
                                ? 'bg-emerald-500/5 border-emerald-500/20 text-slate-900 dark:text-slate-100'
                                : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                            }`}
                          >
                            <div className={`w-7 h-7 rounded-lg font-mono text-xs font-black flex items-center justify-center shrink-0 ${
                              isDone
                                ? 'bg-emerald-600 text-white'
                                : isSelected 
                                ? 'bg-emerald-600 text-white' 
                                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                            }`}>
                              {isDone ? <CheckCircle2 className="w-4 h-4 text-white" /> : (lesson.lessonNumberInModule || lesson.moduleNumber)}
                            </div>

                            <div className="min-w-0 flex-1 space-y-0.5">
                              <div className="flex items-center justify-between gap-1">
                                <span className="text-[10px] font-mono text-slate-400 uppercase block">
                                  {lesson.durationMinutes} min • {lesson.difficulty}
                                </span>
                                {isDone && (
                                  <span className="text-[9px] font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase">
                                    {language === 'en' ? 'Done' : 'រួចរាល់'}
                                  </span>
                                )}
                              </div>
                              <h4 className={`text-xs font-bold leading-snug ${isSelected ? 'text-emerald-600 dark:text-emerald-400 font-extrabold' : 'text-slate-900 dark:text-slate-100'}`}>
                                {lesson.title[language]}
                              </h4>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Selected Lesson Viewer */}
            <div className="lg:col-span-2 space-y-6">
              {activeLesson && (
                (() => {
                  const currentLessonIndex = allCourseLessons.findIndex(l => l.id === activeLesson.id);
                  const prevLesson = currentLessonIndex > 0 ? allCourseLessons[currentLessonIndex - 1] : null;
                  const nextLesson = currentLessonIndex < allCourseLessons.length - 1 ? allCourseLessons[currentLessonIndex + 1] : null;

                  return (
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
                      {/* Top Breadcrumb & Progress Row */}
                      <div className="flex flex-wrap items-center justify-between gap-3 text-xs border-b border-slate-100 dark:border-slate-800/80 pb-4">
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
                              ? `Lesson ${currentLessonIndex + 1} of ${allCourseLessons.length}` 
                              : `មេរៀនទី ${currentLessonIndex + 1} នៃ ${allCourseLessons.length}`}
                          </span>

                          <button
                            onClick={() => toggleLessonCompletion(activeLesson.id)}
                            className={`px-3 py-1 rounded-lg font-mono text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
                              completedLessonIds.includes(activeLesson.id)
                                ? 'bg-emerald-600 text-white shadow-md'
                                : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
                            }`}
                          >
                            <CheckCircle2 className={`w-3.5 h-3.5 ${completedLessonIds.includes(activeLesson.id) ? 'text-white' : 'text-slate-400'}`} />
                            <span>
                              {completedLessonIds.includes(activeLesson.id)
                                ? (language === 'en' ? 'Completed' : 'បានបញ្ចប់')
                                : (language === 'en' ? 'Mark Complete' : 'សម្គាល់ថាបានបញ្ចប់')}
                            </span>
                          </button>
                        </div>
                      </div>

                      {/* Header Title Block */}
                      <div className="space-y-3">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <div className="flex items-center gap-2">
                            <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-mono font-black uppercase tracking-wider border border-emerald-500/20">
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
                          {activeLesson.title?.[language] || activeLesson.title?.en}
                        </h2>
                      </div>

                      {/* Objective Box */}
                      <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300 flex items-start gap-2.5">
                        <Award className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold text-slate-900 dark:text-white block mb-0.5">
                            {language === 'en' ? 'Lesson Objective:' : 'គោលបំណងមេរៀន៖'}
                          </span>
                          {activeLesson.objective?.[language] || activeLesson.objective?.en}
                        </div>
                      </div>

                      {/* Block 1: Key Concept Box (✨ ការពន្យល់អំពីខ្លឹមសារសំខាន់ៗ) */}
                      <div className="p-5 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 space-y-2">
                        <h3 className="text-xs font-mono font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-wider flex items-center gap-2">
                          <Sparkles className="w-4 h-4 text-emerald-500" />
                          <span>{language === 'en' ? 'Key Concept & Architecture' : '✨ ការពន្យល់អំពីខ្លឹមសារ និងស្ថាបត្យកម្ម'}</span>
                        </h3>
                        <p className="text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-sans">
                          {activeLesson.explanation ? (activeLesson.explanation[language] || activeLesson.explanation.en) : (activeLesson.objective?.[language] || activeLesson.objective?.en)}
                        </p>
                      </div>

                      {/* Block 2: Code Tutorial & Code Editor with Live Terminal Runner */}
                      <div className="space-y-3 pt-2">
                        <div className="flex items-center justify-between">
                          <h3 className="text-xs font-mono font-black text-blue-600 dark:text-blue-400 uppercase tracking-wider flex items-center gap-2">
                            <Code2 className="w-4 h-4" />
                            <span>{language === 'en' ? 'Code Example & Syntax Sandbox' : 'កូដគំរូ និងការអនុវត្តសាកល្បង'}</span>
                          </h3>
                        </div>

                        {/* Interactive Code Sandbox & Runner Output */}
                        <BackendClassCodeSandbox
                          starterCode={activeLesson.starterCode}
                          simulatedOutput={activeLesson.simulatedOutput}
                          lang={language}
                          title={`${activeCourse.id}.${activeLesson.starterCode?.language || 'code'}`}
                          autoRunOnLoad={true}
                        />
                      </div>

                      {/* Block 3: Interactive Lesson Quiz / Knowledge Check */}
                      <LessonQuizWidget
                        lesson={activeLesson}
                        courseId={activeCourse.id}
                        lang={language}
                        isCompleted={completedLessonIds.includes(activeLesson.id)}
                        onMarkComplete={() => {
                          if (!completedLessonIds.includes(activeLesson.id)) {
                            toggleLessonCompletion(activeLesson.id);
                          }
                        }}
                      />

                      {/* Navigation Controls & Completion Button */}
                      <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
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

                        {/* Prominent Mark Lesson Complete Button */}
                        <button
                          onClick={() => toggleLessonCompletion(activeLesson.id)}
                          className={`px-5 py-2.5 rounded-xl text-xs font-mono font-black transition flex items-center justify-center gap-2 cursor-pointer shadow-md ${
                            completedLessonIds.includes(activeLesson.id)
                              ? 'bg-emerald-600 hover:bg-emerald-500 text-white ring-2 ring-emerald-500/50'
                              : 'bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30'
                          }`}
                        >
                          <CheckCircle2 className="w-4 h-4" />
                          <span>
                            {completedLessonIds.includes(activeLesson.id)
                              ? (language === 'en' ? '✓ Lesson Completed' : '✓ បានបញ្ចប់មេរៀននេះ')
                              : (language === 'en' ? 'Mark Lesson as Completed' : 'សម្គាល់ថាបានបញ្ចប់មេរៀន')}
                          </span>
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
                              ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-md cursor-pointer' 
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
                {language === 'en' ? 'Essential code snippets, SQL formulas, and backend configurations for quick reference.' : 'រូបមន្ត និងកូដសង្ខេបសំខាន់ៗសម្រាប់ទាញយកប្រើប្រាស់ក្នុងគម្រោងពិត។'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {activeCourse.cheatSheet.map((item, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-emerald-600 dark:text-emerald-400 font-mono">
                      #{idx + 1} {item.concept}
                    </span>
                  </div>

                  <pre className="bg-slate-900 text-emerald-300 p-3.5 rounded-xl text-[11px] font-mono overflow-x-auto border border-slate-800">
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
                <Laptop className="w-6 h-6 text-emerald-500" />
                <span>{language === 'en' ? 'Backend Environment & Tooling Guide' : 'ការដំឡើងបរិស្ថានកូដ និង Tools សំខាន់ៗ'}</span>
              </h2>
              <p className="text-xs text-slate-500">
                {language === 'en' ? 'Local development environment setup guidance.' : 'ការណែនាំដំឡើងប្រព័ន្ធកុំព្យូទ័រសម្រាប់ការសរសេរកូដ Backend ពិតប្រាកដ។'}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-4">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                {language === 'en' ? 'Required Software Runtimes & CLIs' : 'កម្មវិធីកុំព្យូទ័រ និង Runtimes ដែលត្រូវដំឡើង'}
              </h3>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-mono">
                {activeCourse.toolsAndSetup[language]}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/40 space-y-3">
              <h3 className="text-xs font-mono font-extrabold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
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
                {language === 'en' ? 'Test your understanding of backend concepts, SQL queries, and architecture.' : 'វាស់ស្ទង់ការយល់ដឹងពីមេរៀន និងកូដ Backend សំខាន់ៗ។'}
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

        {/* TAB 5: CAPSTONE PROJECT & API TEST RUNNER */}
        {activeTab === 'capstone' && (
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 space-y-8 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-500">
                <Trophy className="w-8 h-8" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold text-amber-500 uppercase tracking-wider">
                  {language === 'en' ? 'Final Capstone Project Assessment' : 'គម្រោងបញ្ចប់ការសិក្សាអាជីព'}
                </span>
                <h2 className="text-2xl font-black text-slate-900 dark:text-white">
                  {activeCourse.capstoneProject.title[language]}
                </h2>
              </div>
            </div>

            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {activeCourse.capstoneProject.description[language]}
            </p>

            {/* Feature Checklist */}
            {activeCourse.capstoneProject.featureChecklist && (
              <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                <h3 className="text-xs font-mono font-bold text-amber-500 uppercase tracking-wider">
                  {language === 'en' ? 'Production Feature Checklist' : 'បញ្ជីមុខងារដែលត្រូវសាងសង់ក្នុងប្រព័ន្ធ'}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {(activeCourse.capstoneProject.featureChecklist[language] || activeCourse.capstoneProject.featureChecklist.en || []).map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Sample API Request & Endpoint Tester Panel */}
            {activeCourse.capstoneProject.sampleRequests && activeCourse.capstoneProject.sampleRequests.length > 0 && (
              <div className="space-y-4 pt-6 border-t border-slate-100 dark:border-slate-800">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-mono font-bold text-emerald-500 uppercase tracking-wider flex items-center gap-2">
                    <Send className="w-4 h-4 text-emerald-500" />
                    <span>{language === 'en' ? 'Interactive REST API Endpoint Tester' : 'ប្រព័ន្ធធ្វើតេស្ត REST API Endpoints ផ្ទាល់'}</span>
                  </h3>

                  <span className="text-[10px] font-mono text-slate-400">
                    HTTP Rest Client • Postman / Swagger Format
                  </span>
                </div>

                <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-4 text-white">
                  {/* API Request Selector Tabs */}
                  <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 border-b border-slate-800">
                    {activeCourse.capstoneProject.sampleRequests.map((req, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setActiveApiRequestIndex(idx);
                          setApiSimulatedResponse(null);
                        }}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition flex items-center gap-2 cursor-pointer ${
                          activeApiRequestIndex === idx
                            ? 'bg-emerald-600 text-white'
                            : 'bg-slate-900 text-slate-400 hover:text-white'
                        }`}
                      >
                        <span className={`px-1.5 py-0.5 rounded text-[9px] font-black uppercase ${
                          req.method === 'GET' ? 'bg-blue-500 text-white' : req.method === 'POST' ? 'bg-emerald-500 text-white' : 'bg-amber-500 text-white'
                        }`}>
                          {req.method}
                        </span>
                        <span>{req.title}</span>
                      </button>
                    ))}
                  </div>

                  {/* Active Request View */}
                  {(() => {
                    const req = activeCourse.capstoneProject.sampleRequests[activeApiRequestIndex];
                    if (!req) return null;

                    return (
                      <div className="space-y-4">
                        {/* URL Bar */}
                        <div className="flex items-center gap-2 bg-slate-900 p-2.5 rounded-xl border border-slate-800 font-mono text-xs">
                          <span className="px-2.5 py-1 rounded-md bg-emerald-500/20 text-emerald-400 font-black">
                            {req.method}
                          </span>
                          <span className="text-slate-200 flex-1 truncate">{req.url}</span>
                          <button
                            onClick={() => setApiSimulatedResponse(req.responseBody)}
                            className="px-4 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold transition flex items-center gap-1.5 cursor-pointer shrink-0"
                          >
                            <Send className="w-3.5 h-3.5" />
                            <span>{language === 'en' ? 'Send Request' : 'ផ្ញើ Request'}</span>
                          </button>
                        </div>

                        {/* Request Body if POST/PUT */}
                        {req.body && (
                          <div className="space-y-1.5">
                            <span className="text-[10px] font-mono text-slate-400 uppercase">
                              Request JSON Body:
                            </span>
                            <pre className="p-3 bg-slate-900 text-sky-300 rounded-xl font-mono text-xs overflow-x-auto border border-slate-800">
                              <code>{req.body}</code>
                            </pre>
                          </div>
                        )}

                        {/* Simulated API Response Window */}
                        {apiSimulatedResponse && (
                          <div className="space-y-1.5 pt-2 border-t border-slate-800 animate-fadeIn">
                            <div className="flex items-center justify-between text-[11px] font-mono">
                              <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                                <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-ping"></span>
                                HTTP Status: {req.responseStatus} {req.responseStatus < 300 ? 'OK / CREATED' : 'SUCCESS'}
                              </span>
                              <span className="text-slate-400">Response Time: 18ms</span>
                            </div>

                            <pre className="p-4 bg-slate-900 text-emerald-300 rounded-xl font-mono text-xs overflow-x-auto border border-emerald-500/30">
                              <code>{apiSimulatedResponse}</code>
                            </pre>
                          </div>
                        )}
                      </div>
                    );
                  })()}
                </div>
              </div>
            )}

            {/* Reference Source Code */}
            {activeCourse.capstoneProject.finalCode && (
              <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                <h3 className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider">
                  {language === 'en' ? 'Reference Backend Source Code' : 'កូដគំរូពេញលេញរបស់ Backend System'}
                </h3>
                <pre className="bg-slate-950 text-emerald-300 p-5 rounded-2xl font-mono text-xs overflow-x-auto border border-slate-800">
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

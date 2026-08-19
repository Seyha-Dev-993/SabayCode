import React, { useState, useMemo } from 'react';
import { 
  Search, BookOpen, Clock, ArrowLeft, ArrowRight, Code, 
  HelpCircle, Award, CheckCircle2, Sparkles, Filter, FileText, 
  Layers, Lightbulb, Play, RefreshCw, ChevronRight, GraduationCap,
  ShieldCheck, Code2, Star, Trophy, Laptop
} from 'lucide-react';
import { FRONTEND_CATEGORIES, FRONTEND_COURSES, FrontendCourse } from '../../data/frontendCoursesHubData';
import { CourseBrandIcon, getCourseBannerStyle } from '../CourseBrandIcon';
import { useApp } from '../../context/AppContext';
import { FrontendClassCodeSandbox } from './FrontendClassCodeSandbox';
import { FrontendClassLessonView } from './FrontendClassLessonView';

interface FrontendHubViewProps {
  onNavigateHome?: () => void;
  onNavigateClasses?: () => void;
}

export const FrontendHubView: React.FC<FrontendHubViewProps> = () => {
  const { language } = useApp();
  
  // State
  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeTab, setActiveTab] = useState<'lessons' | 'cheatsheet' | 'quiz' | 'capstone'>('lessons');
  const [selectedLessonIndex, setSelectedLessonIndex] = useState<number>(0);
  const [completedLessonIds, setCompletedLessonIds] = useState<string[]>([]);
  
  // Quiz state
  const [quizAnswers, setQuizAnswers] = useState<Record<string, string>>({});
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);

  // Selected Course Object
  const currentCourse = useMemo(() => {
    return FRONTEND_COURSES.find(c => c.id === selectedCourseId) || null;
  }, [selectedCourseId]);

  // Filtered Courses for the Hub Grid
  const filteredCourses = useMemo(() => {
    return FRONTEND_COURSES.filter(course => {
      const matchesCategory = activeCategoryFilter === 'all' || course.categoryId === activeCategoryFilter;
      const searchLower = searchQuery.toLowerCase().trim();
      const matchesSearch = !searchLower || 
        course.title.en.toLowerCase().includes(searchLower) ||
        (course.title.km && course.title.km.toLowerCase().includes(searchLower)) ||
        course.shortDescription.en.toLowerCase().includes(searchLower) ||
        course.id.toLowerCase().includes(searchLower);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategoryFilter, searchQuery]);

  const handleToggleLessonComplete = (lessonId: string) => {
    setCompletedLessonIds(prev => 
      prev.includes(lessonId) ? prev.filter(id => id !== lessonId) : [...prev, lessonId]
    );
  };

  const handleSelectQuizAnswer = (questionId: string, optionId: string) => {
    if (quizSubmitted) return;
    setQuizAnswers(prev => ({ ...prev, [questionId]: optionId }));
  };

  const courseBannerStyle = currentCourse ? getCourseBannerStyle(currentCourse.id) : null;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans pb-16 transition-colors">
      {/* If a course is selected, show Dedicated Course View */}
      {currentCourse && courseBannerStyle ? (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6 animate-fade-in">
          {/* Breadcrumb & Switcher Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-2xl shadow-sm">
            <button
              onClick={() => {
                setSelectedCourseId(null);
                setQuizSubmitted(false);
              }}
              className="inline-flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800 px-3.5 py-2 rounded-xl transition cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{language === 'en' ? 'Back to Frontend Hub' : 'ត្រឡប់ទៅ Frontend Hub'}</span>
            </button>

            {/* Quick Course Switcher Dropdown */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-600 dark:text-slate-400 font-medium hidden sm:inline">
                {language === 'en' ? 'Switch Course:' : 'ប្តូរវគ្គសិក្សា:'}
              </span>
              <select
                value={currentCourse.id}
                onChange={(e) => {
                  setSelectedCourseId(e.target.value);
                  setSelectedLessonIndex(0);
                  setActiveTab('lessons');
                  setQuizSubmitted(false);
                }}
                className="bg-slate-100 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 text-xs text-slate-900 dark:text-white font-bold rounded-xl px-3 py-2 focus:outline-none focus:border-indigo-500 cursor-pointer"
              >
                {FRONTEND_COURSES.map(c => (
                  <option key={c.id} value={c.id}>
                    {c.title[language] || c.title.en}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Dedicated Course Header Banner (Mobile Style) */}
          <div className="bg-slate-950 text-white relative overflow-hidden rounded-3xl border border-slate-800 shadow-2xl p-6 sm:p-8 space-y-6">
            <div className={`absolute inset-0 bg-gradient-to-r ${courseBannerStyle.bannerGradient} opacity-80`} />

            <div className="relative z-10 space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex items-start space-x-4">
                  <div className="p-4 rounded-3xl bg-slate-900/90 border border-white/20 shadow-2xl backdrop-blur-xl shrink-0">
                    <CourseBrandIcon iconName={currentCourse.iconName} courseId={currentCourse.id} className="w-12 h-12 text-white" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-3 py-0.5 rounded-full bg-slate-900/80 backdrop-blur-md text-indigo-300 text-[10px] font-mono font-bold uppercase border border-indigo-400/30">
                        FRONTEND TRACK
                      </span>
                      <span className="px-3 py-0.5 rounded-full bg-slate-900/80 backdrop-blur-md text-amber-400 text-[10px] font-mono font-bold border border-amber-400/30">
                        {currentCourse.difficulty}
                      </span>
                      <span className="text-xs text-slate-300 font-mono flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-amber-400" />
                        {currentCourse.estimatedHours} Hours
                      </span>
                    </div>

                    <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                      {currentCourse.title[language] || currentCourse.title.en}
                    </h1>

                    <p className="text-slate-300 text-xs sm:text-sm max-w-2xl leading-relaxed">
                      {currentCourse.summary[language] || currentCourse.summary.en}
                    </p>
                  </div>
                </div>

                {/* Progress Metric Box */}
                <div className="bg-slate-900/90 border border-white/10 p-4 rounded-2xl w-full md:w-56 space-y-2 shrink-0 shadow-xl backdrop-blur-md">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-300">{language === 'en' ? 'Course Progress' : 'វឌ្ឍនភាព'}</span>
                    <span className="text-emerald-400 font-bold">
                      {Math.round((completedLessonIds.filter(id => id.startsWith(currentCourse.id)).length / (currentCourse.lessons.length || 1)) * 100)}%
                    </span>
                  </div>
                  <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-emerald-500 rounded-full transition-all duration-300"
                      style={{ width: `${Math.round((completedLessonIds.filter(id => id.startsWith(currentCourse.id)).length / (currentCourse.lessons.length || 1)) * 100)}%` }}
                    />
                  </div>
                  <div className="text-[11px] text-slate-400 text-right">
                    {completedLessonIds.filter(id => id.startsWith(currentCourse.id)).length} / {currentCourse.lessons.length} {language === 'en' ? 'lessons' : 'មេរៀន'}
                  </div>
                </div>
              </div>

              {/* Top Sub-Navigation Tabs */}
              <div className="flex items-center gap-2 pt-4 border-t border-white/10 overflow-x-auto no-scrollbar">
                <button
                  onClick={() => setActiveTab('lessons')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-2 ${
                    activeTab === 'lessons' ? 'bg-white text-slate-950 font-black shadow-md' : 'text-slate-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <BookOpen className="w-4 h-4" />
                  <span>{language === 'en' ? 'Curriculum & Lessons' : 'មាតិកាមេរៀន'} ({currentCourse.lessons.length})</span>
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
                  onClick={() => setActiveTab('quiz')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-2 ${
                    activeTab === 'quiz' ? 'bg-white text-slate-950 font-black shadow-md' : 'text-slate-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <HelpCircle className="w-4 h-4" />
                  <span>{language === 'en' ? 'Course Quiz' : 'សំណួរតេស្តសមត្ថភាព'}</span>
                </button>

                <button
                  onClick={() => setActiveTab('capstone')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-2 ${
                    activeTab === 'capstone' ? 'bg-white text-slate-950 font-black shadow-md' : 'text-slate-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Trophy className="w-4 h-4 text-amber-400" />
                  <span>{language === 'en' ? 'Capstone Build Project' : 'គម្រោង Capstone'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* TAB CONTENT 1: LESSONS & CURRICULUM */}
          {activeTab === 'lessons' && (
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Lesson Sidebar Tree */}
              <div className="lg:col-span-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-4 space-y-3 h-fit shadow-sm">
                <div className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider font-mono">
                  {language === 'en' ? 'Course Lessons' : 'មេរៀនក្នុងវគ្គសិក្សា'}
                </div>
                <div className="space-y-1.5">
                  {currentCourse.lessons.map((lesson, idx) => {
                    const isSelected = idx === selectedLessonIndex;
                    const isDone = completedLessonIds.includes(lesson.id);

                    return (
                      <button
                        key={lesson.id}
                        onClick={() => setSelectedLessonIndex(idx)}
                        className={`w-full text-left p-3 rounded-2xl text-xs transition flex items-center justify-between gap-2 cursor-pointer ${
                          isSelected
                            ? 'bg-indigo-100 dark:bg-indigo-600/20 text-indigo-900 dark:text-indigo-300 font-bold border border-indigo-300 dark:border-indigo-500/40 shadow-sm'
                            : 'bg-slate-50 dark:bg-slate-950/40 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                        }`}
                      >
                        <div className="flex items-center gap-2 overflow-hidden">
                          {isDone ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                          ) : (
                            <span className={`w-5 h-5 rounded-full border text-[10px] flex items-center justify-center font-mono shrink-0 ${
                              isSelected ? 'border-indigo-500 text-indigo-600 dark:text-indigo-300' : 'border-slate-300 dark:border-slate-700 text-slate-500'
                            }`}>
                              {idx + 1}
                            </span>
                          )}
                          <span className="line-clamp-1">{lesson.title[language] || lesson.title.en}</span>
                        </div>
                        <ChevronRight className={`w-3.5 h-3.5 shrink-0 ${isSelected ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-400 dark:text-slate-600'}`} />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Lesson Detail Area */}
              <div className="lg:col-span-3">
                {currentCourse.lessons[selectedLessonIndex] ? (
                  <FrontendClassLessonView
                    lesson={currentCourse.lessons[selectedLessonIndex]}
                    isCompleted={completedLessonIds.includes(currentCourse.lessons[selectedLessonIndex].id)}
                    onMarkComplete={handleToggleLessonComplete}
                    onNavigateNext={
                      selectedLessonIndex < currentCourse.lessons.length - 1
                        ? () => setSelectedLessonIndex(selectedLessonIndex + 1)
                        : undefined
                    }
                    onNavigatePrev={
                      selectedLessonIndex > 0
                        ? () => setSelectedLessonIndex(selectedLessonIndex - 1)
                        : undefined
                    }
                    onBackToOverview={() => setSelectedCourseId(null)}
                  />
                ) : (
                  <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 text-center text-slate-500 dark:text-slate-400 shadow-sm">
                    {language === 'en' ? 'Select a lesson to begin learning.' : 'សូមជ្រើសរើសមេរៀនដើមចាប់ផ្តើមរៀន។'}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB CONTENT 2: CHEAT SHEET */}
          {activeTab === 'cheatsheet' && (
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
              <div className="flex items-center gap-3">
                <FileText className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                <div>
                  <h2 className="text-xl font-extrabold text-slate-900 dark:text-white">
                    {currentCourse.title[language] || currentCourse.title.en} — {language === 'en' ? 'Quick Reference Cheat Sheet' : 'កែប្រែកូដសង្ខេប'}
                  </h2>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    {language === 'en' ? 'Essential syntax rules, snippets, and formulas for quick developer lookup.' : 'រូបមន្ត និង Snippets សំខាន់ៗសម្រាប់ស្វែងរកលឿនរហ័ស។'}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentCourse.cheatSheet.map((item, idx) => (
                  <div key={idx} className="p-4 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl space-y-2">
                    <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase font-mono tracking-wider">
                      #{idx + 1} {item.concept}
                    </div>
                    <pre className="p-3 bg-slate-900 border border-slate-800 rounded-xl font-mono text-xs text-sky-300 overflow-x-auto">
                      <code>{item.code}</code>
                    </pre>
                    <p className="text-xs text-slate-700 dark:text-slate-400">
                      {item.explanation[language] || item.explanation.en}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB CONTENT 3: QUIZ */}
          {activeTab === 'quiz' && (
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <HelpCircle className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                  <div>
                    <h2 className="text-xl font-extrabold text-slate-900 dark:text-white">
                      {currentCourse.title[language] || currentCourse.title.en} — {language === 'en' ? 'Self-Assessment Quiz' : 'សំណួរតេស្តសមត្ថភាព'}
                    </h2>
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      {language === 'en' ? 'Test your knowledge with instant auto-grading questions.' : 'តេស្តសមត្ថភាពរបស់អ្នកជាមួយសំណួរស្វ័យប្រវត្ត។'}
                    </p>
                  </div>
                </div>
                {quizSubmitted && (
                  <button
                    onClick={() => {
                      setQuizAnswers({});
                      setQuizSubmitted(false);
                    }}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-bold text-slate-700 dark:text-white rounded-xl transition cursor-pointer"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>{language === 'en' ? 'Retry Quiz' : 'ឆ្លើយម្តងទៀត'}</span>
                  </button>
                )}
              </div>

              <div className="space-y-4">
                {currentCourse.quiz.map((q, idx) => (
                  <div key={q.id} className="p-5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl space-y-3">
                    <div className="text-sm font-bold text-slate-900 dark:text-white">
                      {idx + 1}. {q.question[language] || q.question.en}
                    </div>
                    <div className="space-y-2">
                      {q.options.map((opt) => {
                        const isSelected = quizAnswers[q.id] === opt.id;
                        const isCorrect = opt.isCorrect;

                        let style = 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-850';
                        if (quizSubmitted) {
                          if (isCorrect) style = 'bg-emerald-100 dark:bg-emerald-950/80 border-emerald-500 text-emerald-900 dark:text-emerald-300 font-bold';
                          else if (isSelected) style = 'bg-rose-100 dark:bg-rose-950/80 border-rose-500 text-rose-900 dark:text-rose-300';
                        } else if (isSelected) {
                          style = 'bg-indigo-100 dark:bg-indigo-900/40 border-indigo-500 text-indigo-900 dark:text-white font-bold';
                        }

                        return (
                          <button
                            key={opt.id}
                            onClick={() => handleSelectQuizAnswer(q.id, opt.id)}
                            className={`w-full text-left p-3 rounded-xl border text-xs transition flex items-center justify-between cursor-pointer ${style}`}
                          >
                            <span>{opt.text[language] || opt.text.en}</span>
                            <div className={`w-4 h-4 rounded-full border ${isSelected ? 'border-indigo-500 bg-indigo-500' : 'border-slate-300 dark:border-slate-700'}`} />
                          </button>
                        );
                      })}
                    </div>
                    {quizSubmitted && (
                      <p className="text-xs text-slate-500 dark:text-slate-400 italic pt-1 border-t border-slate-200 dark:border-slate-800/60">
                        {q.explanation[language] || q.explanation.en}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              {!quizSubmitted && (
                <button
                  onClick={() => setQuizSubmitted(true)}
                  className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-xl transition shadow-lg shadow-indigo-600/30 cursor-pointer"
                >
                  {language === 'en' ? 'Submit & Grade Quiz' : 'ផ្ទៀងផ្ទាត់ចម្លើយ'}
                </button>
              )}
            </div>
          )}

          {/* TAB CONTENT 4: CAPSTONE PROJECT */}
          {activeTab === 'capstone' && (
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
              <div className="flex items-center gap-3">
                <Trophy className="w-6 h-6 text-amber-500 dark:text-amber-400" />
                <div>
                  <h2 className="text-xl font-extrabold text-slate-900 dark:text-white">
                    {currentCourse.capstoneProject.title[language] || currentCourse.capstoneProject.title.en}
                  </h2>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    {currentCourse.capstoneProject.description[language] || currentCourse.capstoneProject.description.en}
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase font-mono tracking-wider">
                  {language === 'en' ? 'Interactive Capstone Starter Code Sandbox' : 'កន្លែងសាកល្បងកូដ Capstone Project'}
                </div>
                <FrontendClassCodeSandbox
                  initialHtml={currentCourse.capstoneProject.starterCode.html || '<!DOCTYPE html>\n<html>\n<body>\n  <h2>Capstone Project</h2>\n</body>\n</html>'}
                  initialCss={currentCourse.capstoneProject.starterCode.css || ''}
                  initialJs={currentCourse.capstoneProject.starterCode.js || ''}
                />
              </div>
            </div>
          )}
        </div>
      ) : (
        /* TOP-LEVEL FRONTEND DEVELOPMENT HUB LANDING PAGE (MATCHING MOBILE HUB UI STYLE) */
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10 animate-fade-in">
          {/* 1. HERO HEADER BANNER */}
          <div className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 rounded-3xl p-8 sm:p-12 border border-slate-800/90 shadow-2xl overflow-hidden text-white">
            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-mono font-bold uppercase tracking-wider">
                <Code2 className="w-4 h-4 text-indigo-400" />
                <span>{language === 'en' ? 'Frontend Engineering Hub' : 'មជ្ឈមណ្ឌល Frontend Engineering'}</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
                {language === 'en' ? 'Master Modern Frontend & UI Engineering' : 'រៀនបង្កើត Web Apps & UI ជាមួយ Frontend Frameworks'}
              </h1>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {language === 'en'
                  ? 'Explore 20 self-contained courses from HTML5, CSS3, and JavaScript ES6+ fundamentals to React, Vue, Angular, Tailwind CSS, Next.js, TypeScript, and modern dev tooling.'
                  : 'ជ្រើសរើសភាសាសរសេរកូដ ឬ Framework សម្រាប់បង្កើត គេហទំព័រ និង Web Applications ពិតប្រាកដ។ មេរៀននីមួយៗដាច់ដោយឡែកពីគ្នាជាមួយគម្រោងអនុវត្តផ្ទាល់។'}
              </p>

              {/* Quick Stats Counter */}
              <div className="pt-2 flex flex-wrap items-center gap-6 text-xs font-mono text-slate-300">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-indigo-400" />
                  <span>20 {language === 'en' ? 'Independent Courses' : 'វគ្គសិក្សាដាច់ដោយឡែក'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-purple-400" />
                  <span>7 {language === 'en' ? 'Skill Categories' : 'ជំពូកបច្ចេកវិទ្យា'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>100% {language === 'en' ? 'Bilingual EN/KH' : 'ទ្វេភាសា អង់គ្លេស/ខ្មែរ'}</span>
                </div>
              </div>
            </div>
          </div>

          {/* 2. CATEGORY TABS & SEARCH BAR */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
            {/* Category Pills */}
            <div className="flex items-center gap-2 p-1.5 bg-slate-100 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 w-full md:w-auto overflow-x-auto no-scrollbar">
              <button
                onClick={() => setActiveCategoryFilter('all')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer shrink-0 ${
                  activeCategoryFilter === 'all'
                    ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-md'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {language === 'en' ? 'All 20 Courses' : 'វគ្គសិក្សាទាំងអស់ (២០)'}
              </button>
              {FRONTEND_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategoryFilter(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer shrink-0 ${
                    activeCategoryFilter === cat.id
                      ? 'bg-indigo-600 text-white shadow-md'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {cat.title[language] || cat.title.en}
                </button>
              ))}
            </div>

            {/* Search input */}
            <div className="relative w-full md:w-80 shrink-0">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={language === 'en' ? 'Search HTML, CSS, React, Tailwind...' : 'ស្វែងរក HTML, CSS, React, Tailwind...'}
                className="w-full pl-10 pr-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl text-xs text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
              />
            </div>
          </div>

          {/* 3. CATEGORIZED COURSE SECTIONS */}
          <div className="space-y-12">
            {FRONTEND_CATEGORIES.filter(cat => 
              activeCategoryFilter === 'all' || activeCategoryFilter === cat.id
            ).map(category => {
              const categoryCourses = filteredCourses.filter(c => c.categoryId === category.id);
              if (categoryCourses.length === 0) return null;

              return (
                <div key={category.id} className="space-y-6">
                  {/* Category Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[11px] font-mono font-bold uppercase tracking-wider inline-block mb-1">
                        {category.badge[language] || category.badge.en}
                      </span>
                      <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                        {category.title[language] || category.title.en}
                      </h2>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                        {category.description[language] || category.description.en}
                      </p>
                    </div>

                    <span className="text-xs font-mono font-bold text-slate-400">
                      {categoryCourses.length} {language === 'en' ? 'Courses Available' : 'វគ្គសិក្សា'}
                    </span>
                  </div>

                  {/* Course Cards Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categoryCourses.map(course => {
                      const bannerStyle = getCourseBannerStyle(course.id);

                      return (
                        <div
                          key={course.id}
                          onClick={() => {
                            setSelectedCourseId(course.id);
                            setSelectedLessonIndex(0);
                            setActiveTab('lessons');
                            setQuizSubmitted(false);
                          }}
                          className={`group relative flex flex-col justify-between bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl ${bannerStyle.borderHover} hover:-translate-y-1 transition-all duration-300 cursor-pointer text-left`}
                        >
                          {/* Top Banner Header */}
                          <div className="relative h-44 w-full overflow-hidden bg-slate-950 flex flex-col justify-between p-5">
                            {bannerStyle.bannerImage && (
                              <img
                                src={bannerStyle.bannerImage}
                                alt={course.title.en}
                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-25"
                                referrerPolicy="no-referrer"
                              />
                            )}
                            <div className={`absolute inset-0 bg-gradient-to-br ${bannerStyle.bannerGradient} opacity-75`} />

                            {/* Technology Brand Logo SVG Overlay */}
                            <div className="absolute -right-3 -bottom-5 z-0 pointer-events-none opacity-40 group-hover:opacity-80 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500">
                              <CourseBrandIcon iconName={course.iconName} courseId={course.id} className="w-36 h-36 object-contain filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.6)]" />
                            </div>

                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                            {/* Top Badges */}
                            <div className="relative z-10 flex items-center justify-between gap-2">
                              <span className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-white text-[10px] font-black font-mono uppercase tracking-wider border border-white/15 shadow-md flex items-center gap-1.5">
                                <span className={`w-2 h-2 rounded-full ${bannerStyle.badgeBg}`} />
                                <span>FRONTEND</span>
                              </span>

                              <span className="px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-amber-400 text-[10px] font-bold font-mono border border-white/15 shadow-md flex items-center gap-1">
                                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                                <span>{course.difficulty}</span>
                              </span>
                            </div>

                            {/* Icon & Title Row */}
                            <div className="relative z-10 flex items-center space-x-3 mt-auto">
                              <div className="p-3 rounded-2xl bg-slate-900/90 border border-white/20 shadow-xl backdrop-blur-xl group-hover:scale-110 transition-transform duration-300 flex items-center justify-center shrink-0">
                                <CourseBrandIcon iconName={course.iconName} courseId={course.id} className="w-7 h-7 shrink-0 text-white" />
                              </div>
                              <div className="min-w-0">
                                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-300/90 block">
                                  {course.lessonCount} {language === 'en' ? 'Lessons' : 'មេរៀន'} • {course.estimatedHours}h
                                </span>
                                <h3 className="text-lg font-black text-white tracking-tight leading-none drop-shadow-md truncate">
                                  {course.title[language] || course.title.en}
                                </h3>
                              </div>
                            </div>
                          </div>

                          {/* Card Body */}
                          <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
                            <div className="space-y-3">
                              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2">
                                {course.shortDescription[language] || course.shortDescription.en}
                              </p>
                            </div>

                            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] font-mono">
                              <span className="text-slate-400">
                                {language === 'en' ? 'Start Course' : 'ចាប់ផ្តើមវគ្គ'}
                              </span>
                              <span className={`font-extrabold flex items-center gap-1 group-hover:translate-x-1 transition-transform ${bannerStyle.accentColor}`}>
                                <span>{language === 'en' ? 'Explore' : 'ចូលរៀន'}</span>
                                <ChevronRight className="w-4 h-4" />
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

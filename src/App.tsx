/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { LearningPaths } from './components/LearningPaths';
import { LessonInterface } from './components/LessonInterface';
import { ProfilePanel } from './components/ProfilePanel';
import { ContactPage } from './components/ContactPage';
import { SupportPage } from './components/SupportPage';
import { AboutPage } from './components/AboutPage';
import { LoginPage } from './components/LoginPage';
import { RegisterPage } from './components/RegisterPage';
import { EmailVerificationPage } from './components/EmailVerificationPage';
import { StandalonePlayground } from './components/StandalonePlayground';
import { AdminDashboard } from './components/admin/AdminDashboard';
import { ClassesPage } from './components/ClassesPage';
import { FeaturedClassesSection } from './components/FeaturedClassesSection';
import { FrontendClassMainView } from './components/frontendClass/FrontendClassMainView';
import { BackendClassMainView } from './components/backendClass/BackendClassMainView';
import { MobileClassMainView } from './components/mobileClass/MobileClassMainView';
import { AIPromptClassMainView } from './components/aiPromptClass/AIPromptClassMainView';
import { DataAnalyticsClassMainView } from './components/dataAnalyticsClass/DataAnalyticsClassMainView';
import { DatabaseSqlMainView } from './components/dbSqlMastery/DatabaseSqlMainView';
import { CertificateGeneratorView } from './components/certificate/CertificateGeneratorView';
import { Footer } from './components/Footer';
import { AuthProvider, useAuth } from './context/AuthContext';
import { coursesData } from './data/coursesData';
import { CourseBrandIcon, getCourseBrandStyle, getCourseBannerStyle } from './components/CourseBrandIcon';
import { NavigationViewState } from './components/Header';
import { translations } from './translations';
import { 
  Terminal, Search, BookOpen, Flame, Trophy, Sparkles, ChevronRight, Layout, ArrowRight, GraduationCap, Star, Play
} from 'lucide-react';

function MainAppContent() {
  const { language, theme, sandboxData, setSandboxData } = useApp();
  const { currentUser } = useAuth();
  const [currentView, setCurrentView] = useState<NavigationViewState>('home');
  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null);
  const [selectedLessonId, setSelectedLessonId] = useState<string | null>(null);
  const [frontendClassLessonId, setFrontendClassLessonId] = useState<string | null>(null);
  const [backendClassCourseId, setBackendClassCourseId] = useState<string | null>(null);
  const [backendClassLessonId, setBackendClassLessonId] = useState<string | null>(null);
  const [mobileClassCourseId, setMobileClassCourseId] = useState<string | null>(null);
  const [mobileClassLessonId, setMobileClassLessonId] = useState<string | null>(null);
  const [aiPromptClassLessonId, setAiPromptClassLessonId] = useState<string | null>(null);
  const [dataAnalyticsClassLessonId, setDataAnalyticsClassLessonId] = useState<string | null>(null);
  const [dbSqlClassLessonId, setDbSqlClassLessonId] = useState<string | null>(null);

  useEffect(() => {
    const handleHashRouting = () => {
      const hash = window.location.hash.toLowerCase();

      if (hash.startsWith('#/classes/database-sql-mastery') || hash.startsWith('#classes/database-sql-mastery') || hash.startsWith('#/database-sql-mastery') || hash.startsWith('#/db-sql-mastery')) {
        const parts = hash.split('/');
        const lessonId = parts.length >= 4 ? parts[3] : null;
        setDbSqlClassLessonId(lessonId);
        setCurrentView('db-sql-class' as any);
      } else if (hash.startsWith('#/classes/data-analytics') || hash.startsWith('#classes/data-analytics') || hash.startsWith('#/data-analytics') || hash.startsWith('#/classes/data-analytics-python') || hash.startsWith('#classes/data-analytics-python')) {
        const parts = hash.split('/');
        const lessonId = parts.length >= 4 ? parts[3] : null;
        setDataAnalyticsClassLessonId(lessonId);
        setCurrentView('data-analytics-class');
      } else if (hash.startsWith('#/classes/ai-prompt-engineering') || hash.startsWith('#classes/ai-prompt-engineering') || hash.startsWith('#/ai-prompt-engineering')) {
        const parts = hash.split('/');
        const lessonId = parts.length >= 4 ? parts[3] : null;
        setAiPromptClassLessonId(lessonId);
        setCurrentView('ai-prompt-class');
      } else if (hash.startsWith('#/classes/frontend-development') || hash.startsWith('#classes/frontend-development')) {
        const parts = hash.split('/');
        const lessonId = parts.length >= 4 ? parts[3] : null;
        setFrontendClassLessonId(lessonId);
        setCurrentView('frontend-class');
      } else if (hash.startsWith('#/classes/backend-development') || hash.startsWith('#classes/backend-development')) {
        const parts = hash.split('/');
        const courseId = parts.length >= 4 ? parts[3] : null;
        const lessonId = parts.length >= 5 ? parts[4] : null;
        setBackendClassCourseId(courseId);
        setBackendClassLessonId(lessonId);
        setCurrentView('backend-class');
      } else if (hash.startsWith('#/classes/mobile-development') || hash.startsWith('#classes/mobile-development') || hash.startsWith('#/mobile-development')) {

        const parts = hash.split('/');
        const courseId = parts.length >= 4 ? parts[3] : null;
        const lessonId = parts.length >= 5 ? parts[4] : null;
        setMobileClassCourseId(courseId);
        setMobileClassLessonId(lessonId);
        setCurrentView('mobile-class');
      } else if (hash.startsWith('#/classes') || hash.startsWith('#classes')) {
        setCurrentView('classes');
      } else if (hash.startsWith('#/tryit') || hash.startsWith('#tryit')) {
        const queryPart = hash.includes('?') ? hash.split('?')[1] : '';
        const params = new URLSearchParams(queryPart);
        const courseId = params.get('course');
        const lessonId = params.get('lesson');
        
        if (courseId && lessonId) {
          const foundCourse = coursesData.find(c => c.id === courseId);
          if (foundCourse) {
            const foundLesson = foundCourse.topics
              .flatMap(t => t.lessons)
              .find(l => l.id === lessonId);
            if (foundLesson) {
              setSandboxData({
                code: foundLesson.starterCode,
                lang: courseId,
                title: `${foundCourse.title.en} > ${foundLesson.title.en}`,
                courseId,
                lessonId
              });
              setSelectedCourseId(courseId);
              setSelectedLessonId(lessonId);
            }
          }
        } else {
          setSandboxData(null);
        }
        setCurrentView('playground');
      } else if (hash === '#/login' || hash === '#login') {
        setCurrentView('login');
      } else if (hash === '#/register' || hash === '#register') {
        setCurrentView('register');
      } else if (hash === '#/verify-email' || hash === '#verify-email') {
        setCurrentView('verify-email');
      } else if (hash === '#/contact' || hash === '#contact') {
        setCurrentView('contact');
      } else if (hash === '#/donate' || hash === '#donate' || hash === '#/support' || hash === '#support') {
        setCurrentView('donate');
      } else if (hash.startsWith('#/courses/') || hash.startsWith('#courses/') || hash.startsWith('#/course/') || hash.startsWith('#course/')) {
        const parts = hash.split('/');
        const courseId = parts.length >= 3 ? parts[2] : parts.length >= 2 ? parts[1] : null;
        if (courseId) {
          handleSelectCourse(courseId);
        } else {
          setCurrentView('courses');
        }
      } else if (hash === '#/courses' || hash === '#courses') {
        setCurrentView('courses');
      } else if (hash === '#/certificate-generator' || hash === '#certificate-generator' || hash === '#/certificate' || hash === '#certificate') {
        setCurrentView('certificate-generator');
      } else if (hash === '#/about' || hash === '#about') {
        setCurrentView('about');
      } else if (hash === '#/profile' || hash === '#profile') {
        setCurrentView('profile');
      } else if (hash === '#/admin' || hash === '#admin') {
        setCurrentView('admin');
      } else if (hash === '#/playground' || hash === '#playground') {
        setCurrentView('playground');
      } else if (hash === '' || hash === '#') {
        setCurrentView('home');
      }
    };

    if (window.location.hash && window.location.hash !== '#' && window.location.hash !== '#/') {
      handleHashRouting();
    } else {
      setCurrentView('home');
    }

    window.addEventListener('hashchange', handleHashRouting);
    return () => window.removeEventListener('hashchange', handleHashRouting);
  }, [setSandboxData]);

  // Always scroll to top instantly on view navigation for smooth page switches
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [currentView]);

  const t = translations[language];

  const handleSelectCourse = (courseId: string) => {
    if (courseId === 'frontend-class' || courseId === 'frontend') {
      window.location.hash = '#/classes/frontend-development';
      setCurrentView('frontend-class');
      return;
    }
    if (courseId === 'backend-class' || courseId === 'backend') {
      window.location.hash = '#/classes/backend-development';
      setCurrentView('backend-class');
      return;
    }
    if (courseId === 'mobile-class' || courseId === 'mobile') {
      window.location.hash = '#/classes/mobile-development';
      setCurrentView('mobile-class');
      return;
    }
    if (courseId === 'ai-prompt-class' || courseId === 'ai-prompt') {
      window.location.hash = '#/classes/ai-prompt-engineering';
      setCurrentView('ai-prompt-class');
      return;
    }
    if (courseId === 'db-sql-class' || courseId === 'database-sql-mastery' || courseId === 'db-sql') {
      window.location.hash = '#/classes/database-sql-mastery';
      setCurrentView('db-sql-class' as any);
      return;
    }

    // Check backend hub courses
    if (['nodejs', 'express', 'django', 'laravel', 'sql', 'api-security'].includes(courseId)) {
      setBackendClassCourseId(courseId);
      setBackendClassLessonId(null);
      window.location.hash = `#/classes/backend-development/${courseId}`;
      setCurrentView('backend-class');
      return;
    }

    // Check mobile hub courses
    if (['react-native', 'jetpack-compose', 'swiftui', 'kmm', 'dotnet-maui'].includes(courseId)) {
      setMobileClassCourseId(courseId);
      setMobileClassLessonId(null);
      window.location.hash = `#/classes/mobile-development/${courseId}`;
      setCurrentView('mobile-class');
      return;
    }

    // Standard course lookup in coursesData
    const foundCourse = coursesData.find((c) => c.id.toLowerCase() === courseId.toLowerCase());
    if (foundCourse) {
      setSelectedCourseId(foundCourse.id);
      setSelectedLessonId(null);
      setCurrentView('lesson');
      return;
    }

    setSelectedCourseId(courseId);
    setSelectedLessonId(null);
    setCurrentView('lesson');
  };

  const allCoursesAndClasses = coursesData;
  const activeCourse = allCoursesAndClasses.find((c) => c.id === selectedCourseId) || coursesData[0];

  const showHeader = currentView !== 'frontend-class' && currentView !== 'backend-class' && currentView !== 'mobile-class' && currentView !== 'ai-prompt-class' && currentView !== 'data-analytics-class' && (currentView as any) !== 'db-sql-class' && !(currentView === 'profile' && !currentUser);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col transition-colors duration-200">
      {/* Top sticky Navigation header */}
      {showHeader && <Header currentView={currentView} setCurrentView={setCurrentView} selectedCourseId={selectedCourseId} />}

      {/* Main Container */}
      <main className="flex-1 flex flex-col min-h-0">
        {(currentView as any) === 'db-sql-class' && (
          <DatabaseSqlMainView
            initialLessonId={dbSqlClassLessonId || undefined}
            onNavigateHome={() => {
              window.location.hash = '';
              setCurrentView('home');
            }}
            onNavigateClasses={() => {
              window.location.hash = '#/classes';
              setCurrentView('classes');
            }}
          />
        )}
        {currentView === 'data-analytics-class' && (
          <DataAnalyticsClassMainView
            initialLessonId={dataAnalyticsClassLessonId}
            onNavigateHome={() => {
              window.location.hash = '';
              setCurrentView('home');
            }}
            onNavigateClasses={() => {
              window.location.hash = '#/classes';
              setCurrentView('classes');
            }}
          />
        )}
        {currentView === 'ai-prompt-class' && (
          <AIPromptClassMainView
            initialLessonId={aiPromptClassLessonId}
            onNavigateHome={() => {
              window.location.hash = '';
              setCurrentView('home');
            }}
            onNavigateClasses={() => {
              window.location.hash = '#/classes';
              setCurrentView('classes');
            }}
          />
        )}
        {currentView === 'frontend-class' && (
          <FrontendClassMainView
            initialLessonId={frontendClassLessonId}
            onNavigateHome={() => {
              window.location.hash = '';
              setCurrentView('home');
            }}
            onNavigateClasses={() => {
              window.location.hash = '#/classes';
              setCurrentView('classes');
            }}
          />
        )}
        {currentView === 'backend-class' && (
          <BackendClassMainView
            initialCourseId={backendClassCourseId}
            initialLessonId={backendClassLessonId}
            onNavigateHome={() => {
              window.location.hash = '';
              setCurrentView('home');
            }}
            onNavigateClasses={() => {
              window.location.hash = '#/classes';
              setCurrentView('classes');
            }}
          />
        )}
        {currentView === 'mobile-class' && (
          <MobileClassMainView
            initialCourseId={mobileClassCourseId}
            initialLessonId={mobileClassLessonId}
            onNavigateHome={() => {
              window.location.hash = '';
              setCurrentView('home');
            }}
            onNavigateClasses={() => {
              window.location.hash = '#/classes';
              setCurrentView('classes');
            }}
          />
        )}
        {currentView === 'home' && (
          <div className="animate-fade-in">
            {/* Animated Hero Section */}
            <Hero setCurrentView={setCurrentView} onSelectCourse={handleSelectCourse} />

            {/* Structured featured paths divider */}
            <section className="py-12 md:py-16 bg-slate-100/50 dark:bg-slate-900/30 border-t border-slate-200/40 dark:border-slate-900/40 text-left">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
                  <div>
                    <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                      {language === 'en' ? "Kickstart Your Coding Journey" : "ចាប់ផ្តើមវិថីសិក្សារបស់អ្នក"}
                    </h2>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      {language === 'en' 
                        ? "Curated entry tracks for complete beginners up to professional creators." 
                        : "វគ្គសិក្សាកម្រិតដំបូងរៀបចំឡើងសម្រាប់សិស្សនិស្សិតទូទៅ។"}
                    </p>
                  </div>
                  <button
                    onClick={() => setCurrentView('courses')}
                    className="inline-flex items-center space-x-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition"
                  >
                    <span>{language === 'en' ? `View All ${coursesData.length} Courses` : `មើលវគ្គសិក្សាទាំង${coursesData.length}`}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Popular featured course paths */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {coursesData.slice(0, 3).map((course) => {
                    const bannerStyle = getCourseBannerStyle(course.id);
                    const totalLessons = course.topics.flatMap(t => t.lessons).length;

                    return (
                      <div
                        key={course.id}
                        onClick={() => handleSelectCourse(course.id)}
                        className={`group relative flex flex-col justify-between bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl ${bannerStyle.borderHover} hover:-translate-y-1 transition-all duration-300 cursor-pointer text-left`}
                      >
                        {/* Top Image / Gradient Banner Header */}
                        <div className="relative h-44 w-full overflow-hidden bg-slate-900 flex flex-col justify-between p-5">
                          {/* Background Image */}
                          {bannerStyle.bannerImage && (
                            <img
                              src={bannerStyle.bannerImage}
                              alt={course.title.en}
                              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-25"
                              referrerPolicy="no-referrer"
                            />
                          )}
                          {/* Vibrant Brand Color Gradient */}
                          <div className={`absolute inset-0 bg-gradient-to-br ${bannerStyle.bannerGradient} opacity-65`} />

                          {/* Real Official Technology Logo Graphic in Background */}
                          {bannerStyle.techLogoSvg && (
                            <div className="absolute -right-3 -bottom-5 z-0 pointer-events-none opacity-40 group-hover:opacity-80 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500">
                              <img
                                src={bannerStyle.techLogoSvg}
                                alt=""
                                className="w-36 h-36 object-contain filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.6)]"
                                referrerPolicy="no-referrer"
                              />
                            </div>
                          )}

                          {/* Dark Gradient Overlay for text contrast */}
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                          <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />

                          {/* Top Badges */}
                          <div className="relative z-10 flex items-center justify-between gap-2">
                            <span className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-white text-[10px] font-black font-mono uppercase tracking-wider border border-white/15 shadow-md flex items-center gap-1.5">
                              <span className={`w-2 h-2 rounded-full ${bannerStyle.badgeBg}`} />
                              <span>{course.category}</span>
                            </span>

                            <span className="px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-amber-400 text-[10px] font-bold font-mono border border-white/15 shadow-md flex items-center gap-1">
                              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                              <span>{course.difficulty === 'beginner' ? (language === 'en' ? 'Beginner' : 'កម្រិតដំបូង') : course.difficulty === 'intermediate' ? (language === 'en' ? 'Intermediate' : 'កម្រិតមធ្យម') : (language === 'en' ? 'Advanced' : 'កម្រិតខ្ពស់')}</span>
                            </span>
                          </div>

                          {/* Brand Icon & Course Title */}
                          <div className="relative z-10 flex items-center space-x-3 mt-auto">
                            <div className="p-3 rounded-2xl bg-slate-900/90 border border-white/20 shadow-xl backdrop-blur-xl group-hover:scale-110 transition-transform duration-300 flex items-center justify-center shrink-0">
                              <CourseBrandIcon iconName={course.iconName} courseId={course.id} className="w-7 h-7 shrink-0 text-white" />
                            </div>
                            <div className="min-w-0">
                              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-300/90 block">
                                {totalLessons} {language === 'en' ? 'Lessons' : 'មេរៀន'}
                              </span>
                              <h4 className="text-xl font-black text-white tracking-tight leading-none drop-shadow-md truncate">
                                {course.title.en}
                              </h4>
                            </div>
                          </div>
                        </div>

                        {/* Card Main Content */}
                        <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
                          <div className="space-y-3">
                            {/* Title Row with Integrated Button */}
                            <div className="flex items-start justify-between gap-3 pb-3 border-b border-slate-100 dark:border-slate-800">
                              <div className="min-w-0 flex-1">
                                <h3 className="text-lg font-black text-slate-900 dark:text-white tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                  {course.title[language] || course.title.en}
                                </h3>
                                <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500 block mt-0.5">
                                  {totalLessons} {language === 'en' ? 'Lessons' : 'មេរៀន'}
                                </span>
                              </div>

                              {/* Button in Title Header */}
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleSelectCourse(course.id);
                                }}
                                className={`px-3.5 py-2 rounded-xl text-xs font-extrabold cursor-pointer transition shadow-md shrink-0 flex items-center gap-1.5 ${bannerStyle.buttonBg}`}
                              >
                                <GraduationCap className="w-4 h-4" />
                                <span>{language === 'en' ? "Start" : "ចាប់ផ្ដើមរៀន"}</span>
                              </button>
                            </div>

                            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans line-clamp-2">
                              {course.desc[language]}
                            </p>
                          </div>

                          <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                            <span>{language === 'en' ? "Interactive Track" : "វគ្គសិក្សាអន្តរកម្ម"}</span>
                            <span className="text-blue-500 font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                              <span>{language === 'en' ? "Explore" : "ស្វែងយល់"}</span>
                              <ChevronRight className="w-3.5 h-3.5" />
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* Live Classes & Bootcamps Section */}
            <FeaturedClassesSection
              onNavigateClasses={() => {
                window.location.hash = '#/classes';
                setCurrentView('classes');
              }}
            />
          </div>
        )}

        {currentView === 'classes' && (
          <div className="animate-fade-in">
            <ClassesPage 
              onNavigateHome={() => setCurrentView('home')} 
              onNavigateCourses={() => setCurrentView('courses')} 
            />
          </div>
        )}

        {currentView === 'courses' && (
          <div className="animate-fade-in">
            <LearningPaths onSelectCourse={handleSelectCourse} />
          </div>
        )}

        {currentView === 'certificate-generator' && (
          <div className="animate-fade-in">
            <CertificateGeneratorView 
              onBack={() => {
                window.location.hash = '';
                setCurrentView('home');
              }} 
            />
          </div>
        )}

        {currentView === 'playground' && (
          <div className="animate-fade-in">
            <StandalonePlayground 
              initialCode={sandboxData?.code}
              initialLang={sandboxData?.lang}
              initialTitle={sandboxData?.title}
              courseId={sandboxData?.courseId}
              lessonId={sandboxData?.lessonId}
              onBack={() => {
                window.location.hash = '';
                if (sandboxData?.lessonId && sandboxData?.courseId) {
                  setSelectedCourseId(sandboxData.courseId);
                  setSelectedLessonId(sandboxData.lessonId);
                  setCurrentView('lesson');
                } else {
                  setCurrentView('courses');
                }
              }}
            />
          </div>
        )}

        {currentView === 'lesson' && (
          <div className="animate-fade-in flex-1 flex flex-col min-h-0">
            <LessonInterface 
              course={activeCourse} 
              initialLessonId={selectedLessonId} 
              onGoBack={() => {
                window.location.hash = '#/courses';
                setCurrentView('courses');
              }} 
              onNavigateToEditor={(data) => {
                setSandboxData(data);
                setSelectedCourseId(data.courseId);
                setSelectedLessonId(data.lessonId);
                setCurrentView('playground');
              }}
            />
          </div>
        )}

        {currentView === 'profile' && (
          <div className="animate-fade-in">
            <ProfilePanel />
          </div>
        )}

        {currentView === 'admin' && (
          <div className="animate-fade-in">
            <AdminDashboard />
          </div>
        )}


        {currentView === 'about' && (
          <div className="animate-fade-in">
            <AboutPage onNavigate={(view) => setCurrentView(view as NavigationViewState)} />
          </div>
        )}

        {currentView === 'contact' && (
          <div className="animate-fade-in">
            <ContactPage onBackToHome={() => setCurrentView('home')} />
          </div>
        )}

        {currentView === 'donate' && (
          <div className="animate-fade-in">
            <SupportPage onBackToHome={() => setCurrentView('home')} />
          </div>
        )}

        {currentView === 'login' && (
          <div className="animate-fade-in">
            <LoginPage 
              onNavigateToRegister={() => setCurrentView('register')} 
              onNavigateToVerifyEmail={() => setCurrentView('courses')}
              onSuccess={() => setCurrentView('courses')} 
            />
          </div>
        )}

        {currentView === 'register' && (
          <div className="animate-fade-in">
            <RegisterPage 
              onNavigateToLogin={() => setCurrentView('login')} 
              onNavigateToVerifyEmail={() => setCurrentView('courses')}
              onSuccess={() => setCurrentView('courses')} 
            />
          </div>
        )}

        {currentView === 'verify-email' && (
          <div className="animate-fade-in">
            <EmailVerificationPage 
              onSuccess={() => setCurrentView('courses')} 
              onBackToLogin={() => setCurrentView('login')} 
            />
          </div>
        )}
      </main>

      {/* Redesigned Premium SaaS Footer */}
      {showHeader && <Footer onNavigate={(v) => setCurrentView(v)} />}
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AuthProvider>
        <MainAppContent />
      </AuthProvider>
    </AppProvider>
  );
}

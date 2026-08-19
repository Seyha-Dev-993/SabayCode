import React, { useState } from 'react';
import { 
  Smartphone, Search, Sparkles, BookOpen, Clock, Star, Code2, Layers, 
  ChevronRight, ArrowRight, CheckCircle2, Play, Trophy, ShieldCheck, Flame, Laptop
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { MOBILE_CATEGORIES, MOBILE_COURSES, MobileCourse } from '../../data/mobileCoursesHubData';
import { CourseBrandIcon, getCourseBrandStyle, getCourseBannerStyle } from '../CourseBrandIcon';

interface MobileHubViewProps {
  onSelectCourse: (courseId: string) => void;
  onNavigateHome: () => void;
}

export const MobileHubView: React.FC<MobileHubViewProps> = ({
  onSelectCourse,
  onNavigateHome,
}) => {
  const { language } = useApp();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<'all' | 'languages' | 'frameworks'>('all');

  // Filter courses
  const filteredCourses = MOBILE_COURSES.filter((course) => {
    const matchesCategory = activeCategory === 'all' || course.categoryId === activeCategory;
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch = 
      !query ||
      course.title.en.toLowerCase().includes(query) ||
      course.title.km.toLowerCase().includes(query) ||
      course.shortDescription.en.toLowerCase().includes(query) ||
      course.shortDescription.km.toLowerCase().includes(query) ||
      course.usedFor.toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10 font-sans text-slate-900 dark:text-slate-100 animate-fade-in">
      {/* 1. HERO HEADER BANNER */}
      <div className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 rounded-3xl p-8 sm:p-12 border border-slate-800/90 shadow-2xl overflow-hidden text-white">
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/20 border border-sky-400/30 text-sky-300 text-xs font-mono font-bold uppercase tracking-wider">
            <Smartphone className="w-4 h-4 text-sky-400" />
            <span>{language === 'en' ? 'Mobile Engineering Hub' : 'មជ្ឈមណ្ឌល Mobile Engineering'}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            {language === 'en' ? 'Master Native & Cross-Platform Mobile Apps' : 'រៀនបង្កើត Mobile Apps លើ iOS & Android'}
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {language === 'en'
              ? 'Choose a language or framework to build real-world iOS & Android apps. Complete independent tracks for Dart, Flutter, Kotlin, Jetpack Compose, Swift, SwiftUI, React Native, Java, KMM, and .NET MAUI.'
              : 'ជ្រើសរើសភាសាសរសេរកូដ ឬ Framework សម្រាប់បង្កើត កម្មវិធីទូរស័ព្ទដៃពិតប្រាកដ។ មេរៀននីមួយៗដាច់ដោយឡែកពីគ្នាជាមួយគម្រោងអនុវត្តផ្ទាល់។'}
          </p>

          {/* Quick Stats Counter */}
          <div className="pt-2 flex flex-wrap items-center gap-6 text-xs font-mono text-slate-300">
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-sky-400" />
              <span>10 {language === 'en' ? 'Independent Courses' : 'វគ្គសិក្សាដាច់ដោយឡែក'}</span>
            </div>
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-purple-400" />
              <span>{language === 'en' ? 'Core Languages vs Modern Frameworks' : 'ភាសាមូលដ្ឋាន វគ្គ Frameworks'}</span>
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
        <div className="flex items-center gap-2 p-1.5 bg-slate-100 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 w-full md:w-auto">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeCategory === 'all'
                ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-md'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            {language === 'en' ? 'All 10 Courses' : 'វគ្គសិក្សាទាំងអស់ (១០)'}
          </button>
          <button
            onClick={() => setActiveCategory('languages')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeCategory === 'languages'
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            {language === 'en' ? '1. Core Languages' : '១. ភាសាមូលដ្ឋាន'}
          </button>
          <button
            onClick={() => setActiveCategory('frameworks')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeCategory === 'frameworks'
                ? 'bg-purple-600 text-white shadow-md'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            {language === 'en' ? '2. Frameworks' : '២. Frameworks'}
          </button>
        </div>

        {/* Search input */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={language === 'en' ? 'Search Flutter, Swift, Kotlin...' : 'ស្វែងរក Flutter, Swift, Kotlin...'}
            className="w-full pl-10 pr-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl text-xs text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm"
          />
        </div>
      </div>

      {/* 3. CATEGORIZED COURSE SECTIONS */}
      {MOBILE_CATEGORIES.map((cat) => {
        if (activeCategory !== 'all' && activeCategory !== cat.id) return null;

        const categoryCourses = filteredCourses.filter((c) => c.categoryId === cat.id);
        if (categoryCourses.length === 0) return null;

        return (
          <div key={cat.id} className="space-y-6">
            {/* Category Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[11px] font-mono font-bold uppercase tracking-wider inline-block mb-1">
                  {cat.badge[language]}
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                  {cat.title[language]}
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  {cat.description[language]}
                </p>
              </div>

              <span className="text-xs font-mono font-bold text-slate-400">
                {categoryCourses.length} {language === 'en' ? 'Courses Available' : 'វគ្គសិក្សា'}
              </span>
            </div>

            {/* Course Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryCourses.map((course) => {
                const bannerStyle = getCourseBannerStyle(course.iconName || course.id);

                return (
                  <div
                    key={course.id}
                    onClick={() => onSelectCourse(course.id)}
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
                          <span>{course.type === 'language' ? 'LANGUAGE' : 'FRAMEWORK'}</span>
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
                            {course.title[language]}
                          </h3>
                        </div>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
                      <div className="space-y-3">
                        <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2">
                          {course.shortDescription[language]}
                        </p>

                        {/* Real-world app tags */}
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {course.realWorldApps.slice(0, 3).map((appName, idx) => (
                            <span key={idx} className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-[10px] font-mono text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700/60">
                              {appName}
                            </span>
                          ))}
                        </div>
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
  );
};

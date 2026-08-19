import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { coursesData } from '../data/coursesData';
import { translations } from '../translations';
import { Course, CourseCategory } from '../types';
import { CourseBrandIcon, getCourseBrandStyle, getCourseBannerStyle } from './CourseBrandIcon';
import { 
  Search, BookOpen, Star, Flame, Trophy, Award, 
  ShieldAlert, Play, GraduationCap, ChevronRight
} from 'lucide-react';

interface LearningPathsProps {
  onSelectCourse: (courseId: string) => void;
}

export const LearningPaths: React.FC<LearningPathsProps> = ({ onSelectCourse }) => {
  const { language, progress } = useApp();
  const t = translations[language];
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<CourseCategory | 'all'>('all');

  const categories: { id: CourseCategory | 'all'; label: { en: string; km: string } }[] = [
    { id: 'all', label: { en: "All Categories", km: "គ្រប់ប្រភេទ" } },
    { id: 'foundation', label: { en: "Foundation", km: "កូដគ្រឹះដំបូង" } },
    { id: 'programming', label: { en: "Programming", km: "ភាសាសរសេរកូដ" } },
    { id: 'database', label: { en: "Database", km: "មូលដ្ឋានទិន្នន័យ" } },
    { id: 'tooling', label: { en: "Tooling", km: "ឧបករណ៍ជំនួយ" } },
    { id: 'framework', label: { en: "Framework & Library", km: "ក្របខ័ណ្ឌការងារ" } },
  ];

  // Helper to calculate course completion percentage
  const getCourseProgress = (course: Course) => {
    // Collect all lesson ids of this course
    const courseLessonIds = course.topics.flatMap(topic => 
      topic.lessons.map(lesson => `${course.id}-${lesson.id}`)
    );
    if (courseLessonIds.length === 0) return 0;

    const completedInCourse = courseLessonIds.filter(id => 
      progress.completedLessons.includes(id)
    ).length;

    return Math.round((completedInCourse / courseLessonIds.length) * 100);
  };

  const getCourseTotalLessons = (course: Course) => {
    return course.topics.flatMap(t => t.lessons).length;
  };

  // Filter courses based on search & category tab selection
  const filteredCourses = coursesData.filter((course) => {
    const titleMatch = course.title.en.toLowerCase().includes(searchQuery.toLowerCase());
    const descMatch = course.desc[language].toLowerCase().includes(searchQuery.toLowerCase());
    const categoryMatch = activeCategory === 'all' || course.category === activeCategory;
    
    return (titleMatch || descMatch) && categoryMatch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10" id="catalog-page">
      {/* Blog-style Hero Header */}
      <div className="text-center md:text-left max-w-3xl mb-12 space-y-4">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          {t.learningPaths}
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
          {t.learningPathsSlogan}
        </p>
      </div>

      {/* Search & Filter bar Controls */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-[30px] pb-6 border-b border-slate-200/60 dark:border-slate-800/60">
        
        {/* Search input field */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3.5 top-3 w-4.5 h-4.5 text-slate-400" />
          <input
            type="text"
            placeholder={t.searchCourses}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
          />
        </div>

        {/* Categories Tab slider */}
        <div className="flex items-center space-x-1 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap cursor-pointer transition-all duration-150 ${
                activeCategory === cat.id
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/10'
                  : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {cat.label[language]}
            </button>
          ))}
        </div>

      </div>

      {/* Grid of Course Cards */}
      {filteredCourses.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredCourses.map((course) => {
            const coursePercent = getCourseProgress(course);
            const totalLessons = getCourseTotalLessons(course);
            const isCompleted = coursePercent === 100;
            const bannerStyle = getCourseBannerStyle(course.id);

            return (
              <div
                key={course.id}
                onClick={() => onSelectCourse(course.id)}
                className={`group relative flex flex-col justify-between bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl ${bannerStyle.borderHover} hover:-translate-y-1 transition-all duration-300 cursor-pointer text-left`}
              >
                {/* Top Banner Area (Image Top with Gradient & Badges) */}
                <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-slate-900 flex flex-col justify-between p-5">
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
                  {/* Tech Grid Pattern Overlay */}
                  <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />

                  {/* Top Floating Glass Badges */}
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

                  {/* Big Tech Emblem & Sub-Title Overlay */}
                  <div className="relative z-10 flex items-center space-x-3 mt-auto">
                    <div className="p-3 rounded-2xl bg-slate-900/90 border border-white/20 shadow-xl backdrop-blur-xl group-hover:scale-110 transition-transform duration-300 flex items-center justify-center shrink-0">
                      <CourseBrandIcon iconName={course.iconName} courseId={course.id} className="w-8 h-8 shrink-0 text-white" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-300/90 block">
                        {totalLessons} {language === 'en' ? 'Lessons' : 'មេរៀន'} • {course.estimatedHours || 4}h
                      </span>
                      <h4 className="text-xl font-black text-white tracking-tight leading-none drop-shadow-md truncate">
                        {course.title.en}
                      </h4>
                    </div>
                  </div>

                  {/* Completion Badge */}
                  {isCompleted && (
                    <div className="absolute bottom-4 right-4 z-10 px-2.5 py-1 rounded-lg bg-emerald-500/90 text-white text-[10px] font-black uppercase tracking-wider flex items-center gap-1 border border-emerald-300/30 shadow-md">
                      <Award className="w-3.5 h-3.5" />
                      <span>{language === 'en' ? 'Completed' : 'បានបញ្ចប់'}</span>
                    </div>
                  )}
                </div>

                {/* Card Main Body */}
                <div className="p-5 sm:p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    {/* Title Row + Button in Title */}
                    <div className="flex flex-wrap sm:flex-nowrap items-start justify-between gap-3 pb-3 border-b border-slate-100 dark:border-slate-800">
                      <div className="min-w-0 flex-1">
                        <h3 className="text-lg font-black text-slate-900 dark:text-white tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {course.title[language] || course.title.en}
                        </h3>
                        <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500 block mt-0.5">
                          {totalLessons} {language === 'en' ? 'Interactive Lessons' : 'មេរៀនអនុវត្តន៍'}
                        </span>
                      </div>

                      {/* Integrated Action Button right in the Title row */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectCourse(course.id);
                        }}
                        className={`px-3.5 py-2 rounded-xl text-xs font-extrabold cursor-pointer transition shadow-md shrink-0 flex items-center gap-1.5 ${bannerStyle.buttonBg}`}
                      >
                        {coursePercent > 0 ? (
                          <>
                            <Play className="w-3.5 h-3.5 fill-current" />
                            <span>{language === 'en' ? "Continue" : "បន្តរៀន"}</span>
                          </>
                        ) : (
                          <>
                            <GraduationCap className="w-4 h-4" />
                            <span>{language === 'en' ? "Start" : "ចាប់ផ្ដើមរៀន"}</span>
                          </>
                        )}
                      </button>
                    </div>

                    {/* Course Description */}
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans line-clamp-3">
                      {course.desc[language]}
                    </p>
                  </div>

                  {/* Progress Bar Footer */}
                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 space-y-1.5">
                    <div className="flex items-center justify-between text-[11px] font-bold">
                      <span className="text-slate-500 dark:text-slate-400">
                        {language === 'en' ? "Course Progress" : "វឌ្ឍនភាពសិក្សា"}
                      </span>
                      <span className={`font-mono ${bannerStyle.accentColor}`}>{coursePercent}%</span>
                    </div>
                    <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${bannerStyle.bannerGradient} transition-all duration-300 rounded-full`}
                        style={{ width: `${coursePercent}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-20 bg-white dark:bg-slate-900 rounded-3xl border border-dashed border-slate-200 dark:border-slate-800">
          <ShieldAlert className="w-12 h-12 text-slate-400 mx-auto mb-4" />
          <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200">
            {language === 'en' ? "No Courses Found" : "រកមិនឃើញវគ្គសិក្សាទេ"}
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-xs mx-auto">
            {language === 'en' 
              ? "We couldn't find any language matching your search. Try resetting your query!" 
              : "យើងមិនអាចរកឃើញភាសាកូដដែលត្រូវនឹងការស្វែងរករបស់អ្នកទេ។ សាកល្បងស្វែងរកម្តងទៀត!"}
          </p>
        </div>
      )}
    </div>
  );
};

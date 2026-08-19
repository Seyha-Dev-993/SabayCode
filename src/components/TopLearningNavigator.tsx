import React, { useRef } from 'react';
import { coursesData } from '../data/coursesData';
import { Course } from '../types';
import { 
  FolderTree, Search, ChevronLeft, ChevronRight, Code2, 
  Sparkles, Terminal, BookOpen 
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { translations } from '../translations';

interface TopLearningNavigatorProps {
  activeCourseId: string;
  onSelectCourse: (courseId: string) => void;
  onToggleDrawer: () => void;
  onOpenSearch: () => void;
}

export const TopLearningNavigator: React.FC<TopLearningNavigatorProps> = ({
  activeCourseId,
  onSelectCourse,
  onToggleDrawer,
  onOpenSearch,
}) => {
  const { language } = useApp();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -240 : 240;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Color badges map for developer feel
  const courseBadgeColors: Record<string, string> = {
    xml: 'hover:border-amber-500/50 hover:text-amber-500',
    html: 'hover:border-amber-500/50 hover:text-amber-500',
    css: 'hover:border-sky-500/50 hover:text-sky-500',
    javascript: 'hover:border-yellow-500/50 hover:text-yellow-500',
    typescript: 'hover:border-blue-500/50 hover:text-blue-500',
    react: 'hover:border-cyan-400/50 hover:text-cyan-400',
    nextjs: 'hover:border-slate-800 dark:hover:border-slate-200',
    vue: 'hover:border-emerald-500/50 hover:text-emerald-500',
    angular: 'hover:border-rose-600/50 hover:text-rose-600',
    python: 'hover:border-amber-400/50 hover:text-amber-400',
    java: 'hover:border-orange-500/50 hover:text-orange-500',
    csharp: 'hover:border-purple-500/50 hover:text-purple-500',
    cpp: 'hover:border-blue-600/50 hover:text-blue-600',
    git: 'hover:border-rose-500/50 hover:text-rose-500',
    mysql: 'hover:border-blue-500/50 hover:text-blue-500',
    php: 'hover:border-indigo-400/50 hover:text-indigo-400',
    kotlin: 'hover:border-purple-400/50 hover:text-purple-400',
    tailwind: 'hover:border-cyan-500/50 hover:text-cyan-500',
    bootstrap: 'hover:border-purple-600/50 hover:text-purple-600',
    flutter: 'hover:border-sky-400/50 hover:text-sky-400',
    c: 'hover:border-blue-400/50 hover:text-blue-400',
    'spring-boot': 'hover:border-emerald-500/50 hover:text-emerald-500',
  };

  return (
    <nav className="bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 sticky top-16 z-20 px-3 sm:px-6 py-2.5 transition-colors mb-[30px]">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        
        {/* Left: Course Explorer Toggle Button */}
        <button
          onClick={onToggleDrawer}
          className="flex items-center space-x-2 px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200/80 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200/60 dark:border-slate-800/80 font-bold text-xs tracking-tight transition cursor-pointer shrink-0 shadow-xs"
        >
          <FolderTree className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
          <span className="hidden sm:inline font-mono uppercase text-[11px] text-slate-500 dark:text-slate-400">
            Course Explorer
          </span>
          <span className="sm:hidden text-xs">Explorer</span>
        </button>

        {/* Scroll Left Trigger */}
        <button
          onClick={() => scroll('left')}
          className="hidden md:flex p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900 transition shrink-0 cursor-pointer"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Center: Scrollable Horizontal Language Bar */}
        <div
          ref={scrollRef}
          className="flex items-center space-x-2 overflow-x-auto no-scrollbar scroll-smooth py-0.5 flex-1 mx-1"
        >
          {coursesData.map((course) => {
            const isActive = course.id === activeCourseId;
            const extraHover = courseBadgeColors[course.id] || '';

            return (
              <button
                key={course.id}
                onClick={() => onSelectCourse(course.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold font-mono transition-all duration-150 shrink-0 flex items-center space-x-1.5 cursor-pointer border ${
                  isActive
                    ? 'bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-600/20 font-extrabold scale-[1.02]'
                    : `bg-slate-50 dark:bg-slate-900/60 text-slate-600 dark:text-slate-400 border-slate-200/60 dark:border-slate-800/80 ${extraHover}`
                }`}
              >
                <span className="whitespace-nowrap">{course.title.en}</span>
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse ml-1" />}
              </button>
            );
          })}
        </div>

        {/* Scroll Right Trigger */}
        <button
          onClick={() => scroll('right')}
          className="hidden md:flex p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900 transition shrink-0 cursor-pointer"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

        {/* Right: Quick Search Button with Ctrl + K */}
        <button
          onClick={onOpenSearch}
          className="flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200/80 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200/60 dark:border-slate-800/80 text-xs transition cursor-pointer shrink-0"
          title={language === 'en' ? 'Search lessons (Ctrl / ⌘ + K)' : 'ស្វែងរកមេរៀន (Ctrl / ⌘ + K)'}
        >
          <Search className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
          <span className="hidden md:inline font-sans text-xs font-medium text-slate-600 dark:text-slate-300">
            {translations[language].searchLessons}
          </span>
          <kbd className="hidden lg:inline-flex items-center px-1.5 py-0.5 rounded-md bg-white dark:bg-slate-800 text-[10px] font-sans font-semibold text-slate-400 dark:text-slate-500 border border-slate-200 dark:border-slate-700 leading-none shrink-0 shadow-2xs">
            {typeof window !== 'undefined' && /Mac|iPod|iPhone|iPad/i.test(navigator.userAgent) ? '⌘K' : 'Ctrl K'}
          </kbd>
        </button>

      </div>
    </nav>
  );
};

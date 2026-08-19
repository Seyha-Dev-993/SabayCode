import React, { useState } from 'react';
import { Course, Lesson } from '../types';
import { coursesData } from '../data/coursesData';
import { CourseBrandIcon } from './CourseBrandIcon';
import { 
  X, Search, ChevronRight, ChevronDown, CheckCircle2, 
  BookOpen, FolderTree, Sparkles, Layers, Code2 
} from 'lucide-react';
import { useApp } from '../context/AppContext';

interface CourseExplorerDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  activeCourseId: string;
  activeLessonId?: string | null;
  onSelectLesson: (courseId: string, lessonId: string) => void;
  onSelectCourse: (courseId: string) => void;
}

export const CourseExplorerDrawer: React.FC<CourseExplorerDrawerProps> = ({
  isOpen,
  onClose,
  activeCourseId,
  activeLessonId,
  onSelectLesson,
  onSelectCourse,
}) => {
  const { language, progress } = useApp();
  const [searchQuery, setSearchQuery] = useState('');
  
  // Track open course accordions. Default to active course open
  const [openCourses, setOpenCourses] = useState<Record<string, boolean>>({
    [activeCourseId]: true,
  });

  // Track collapsed topics within courses
  const [collapsedTopics, setCollapsedTopics] = useState<Record<string, boolean>>({});

  if (!isOpen) return null;

  const toggleCourse = (courseId: string) => {
    setOpenCourses((prev) => ({
      ...prev,
      [courseId]: !prev[courseId],
    }));
  };

  const toggleTopic = (topicId: string) => {
    setCollapsedTopics((prev) => ({
      ...prev,
      [topicId]: !prev[topicId],
    }));
  };

  const q = searchQuery.trim().toLowerCase();

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex animate-fade-in">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose} 
      />

      {/* Floating Slide-over Drawer */}
      <div className="relative w-full max-w-md bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 shadow-2xl z-10 flex flex-col h-full text-left">
        
        {/* Drawer Header */}
        <div className="p-4 border-b border-slate-200/80 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/80 flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <div className="p-2 rounded-xl bg-indigo-600 text-white shadow-sm">
              <FolderTree className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-sm font-extrabold text-slate-900 dark:text-white tracking-tight">
                Course Explorer
              </h2>
              <p className="text-[10px] font-mono text-slate-400">
                {coursesData.length} Tech Tracks • 500+ Interactive Lessons
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-200/50 dark:hover:bg-slate-800 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Search */}
        <div className="p-3 border-b border-slate-200/60 dark:border-slate-800/80 bg-white dark:bg-slate-900">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={language === 'en' ? "Search lessons in explorer..." : "ស្វែងរកមេរៀននៅក្នុង explorer..."}
              className="w-full pl-9 pr-4 py-2 bg-slate-100 dark:bg-slate-800/80 rounded-xl text-xs font-medium text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
            />
          </div>
        </div>

        {/* Accordion Content Tree */}
        <div className="flex-1 overflow-y-auto p-3 space-y-3">
          {coursesData.map((course) => {
            const isCourseActive = course.id === activeCourseId;
            const isCourseExpanded = openCourses[course.id] || (q.length > 0) || isCourseActive;

            // Total and completed count
            const allLessons = course.topics.flatMap((t) => t.lessons);
            const completedCount = allLessons.filter((l) =>
              progress.completedLessons.includes(`${course.id}-${l.id}`)
            ).length;

            return (
              <div 
                key={course.id}
                className={`rounded-2xl border transition-all ${
                  isCourseActive
                    ? 'border-indigo-200 dark:border-indigo-900/60 bg-indigo-50/30 dark:bg-indigo-950/20'
                    : 'border-slate-200/70 dark:border-slate-800/60 bg-white dark:bg-slate-900'
                }`}
              >
                {/* Course Main Accordion Header */}
                <button
                  onClick={() => toggleCourse(course.id)}
                  className="w-full p-3 flex items-center justify-between text-left cursor-pointer hover:bg-slate-50/50 dark:hover:bg-slate-800/40 rounded-2xl transition"
                >
                  <div className="flex items-center space-x-2.5 min-w-0 pr-2">
                    <CourseBrandIcon iconName={course.iconName} courseId={course.id} className="w-4 h-4 shrink-0" />
                    <div className="truncate">
                      <span className={`text-xs font-bold font-mono tracking-tight ${isCourseActive ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-900 dark:text-white'}`}>
                        {course.title.en}
                      </span>
                      <span className="text-[10px] font-mono text-slate-400 ml-2">
                        ({completedCount}/{allLessons.length})
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 shrink-0">
                    {completedCount === allLessons.length && allLessons.length > 0 && (
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    )}
                    {isCourseExpanded ? (
                      <ChevronDown className="w-4 h-4 text-slate-400" />
                    ) : (
                      <ChevronRight className="w-4 h-4 text-slate-400" />
                    )}
                  </div>
                </button>

                {/* Topics and Lessons list if expanded */}
                {isCourseExpanded && (
                  <div className="px-3 pb-3 space-y-3 pt-1 border-t border-slate-100 dark:border-slate-800/50">
                    {course.topics.map((topic) => {
                      const isTopicCollapsed = collapsedTopics[`${course.id}-${topic.id}`];

                      // Filter lessons if searching
                      const matchingLessons = topic.lessons.filter((l) =>
                        !q || l.title.en.toLowerCase().includes(q) || l.id.toLowerCase().includes(q)
                      );

                      if (q && matchingLessons.length === 0) return null;

                      return (
                        <div key={topic.id} className="space-y-1">
                          <button
                            onClick={() => toggleTopic(`${course.id}-${topic.id}`)}
                            className="w-full flex items-center justify-between text-[11px] font-bold text-slate-400 font-mono uppercase tracking-wider py-1 text-left cursor-pointer hover:text-slate-600 dark:hover:text-slate-300"
                          >
                            <span className="truncate pr-2">{topic.title.en}</span>
                            {isTopicCollapsed && !q ? (
                              <ChevronRight className="w-3 h-3 text-slate-400" />
                            ) : (
                              <ChevronDown className="w-3 h-3 text-slate-400" />
                            )}
                          </button>

                          {(!isTopicCollapsed || q) && (
                            <div className="space-y-0.5 pl-2 border-l border-slate-200/60 dark:border-slate-800">
                              {matchingLessons.map((lesson) => {
                                const isLessonActive =
                                  course.id === activeCourseId && lesson.id === activeLessonId;
                                const isDone = progress.completedLessons.includes(
                                  `${course.id}-${lesson.id}`
                                );

                                return (
                                  <button
                                    key={lesson.id}
                                    onClick={() => {
                                      onSelectLesson(course.id, lesson.id);
                                      onClose();
                                    }}
                                    className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs flex items-center justify-between transition cursor-pointer ${
                                      isLessonActive
                                        ? 'bg-indigo-600 text-white font-bold shadow-sm'
                                        : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/80'
                                    }`}
                                  >
                                    <div className="flex items-center min-w-0 pr-2 space-x-1.5">
                                      <span className="truncate">{lesson.title.en}</span>
                                      {lesson.isNew && (
                                        <span className={`px-1 py-0.2 text-[8px] font-bold rounded ${isLessonActive ? 'bg-white text-indigo-600' : 'bg-indigo-500 text-white'}`}>
                                          New
                                        </span>
                                      )}
                                    </div>
                                    {isDone && (
                                      <CheckCircle2
                                        className={`w-3.5 h-3.5 shrink-0 ${
                                          isLessonActive ? 'text-white' : 'text-emerald-500'
                                        }`}
                                      />
                                    )}
                                  </button>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Drawer Footer Status */}
        <div className="p-3 border-t border-slate-200/80 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/80 text-[11px] font-mono text-slate-400 flex items-center justify-between">
          <span>Active: <strong className="text-indigo-600 dark:text-indigo-400">{coursesData.find(c => c.id === activeCourseId)?.title.en}</strong></span>
          <button 
            onClick={() => onSelectCourse(activeCourseId)} 
            className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline cursor-pointer"
          >
            Jump to Track
          </button>
        </div>

      </div>
    </div>
  );
};

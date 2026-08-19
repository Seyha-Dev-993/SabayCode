import React, { useState, useEffect, useRef } from 'react';
import { Search, BookOpen, Command, ChevronRight, Sparkles, X, Code2, CheckCircle2 } from 'lucide-react';
import { Course, Lesson } from '../types';
import { coursesData } from '../data/coursesData';
import { useApp } from '../context/AppContext';

interface CommandPaletteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen?: () => void;
  onSelectLesson: (courseId: string, lessonId: string) => void;
  onSelectCourse: (courseId: string) => void;
}

export const CommandPaletteModal: React.FC<CommandPaletteModalProps> = ({
  isOpen,
  onClose,
  onOpen,
  onSelectLesson,
  onSelectCourse,
}) => {
  const { language, progress } = useApp();
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  // Handle keyboard ESC and Ctrl/Cmd+K shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          onOpen?.();
        }
      } else if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onOpen]);

  if (!isOpen) return null;

  // Flatten all searchable items (courses and lessons)
  const results: Array<
    | { type: 'course'; course: Course }
    | { type: 'lesson'; course: Course; lesson: Lesson; topicTitle: string }
  > = [];

  const q = query.trim().toLowerCase();

  coursesData.forEach((course) => {
    // Course match
    if (
      !q ||
      course.id.toLowerCase().includes(q) ||
      course.title.en.toLowerCase().includes(q) ||
      course.category.toLowerCase().includes(q)
    ) {
      results.push({ type: 'course', course });
    }

    // Lesson matches
    course.topics.forEach((topic) => {
      topic.lessons.forEach((lesson) => {
        if (
          q &&
          (lesson.title.en.toLowerCase().includes(q) ||
            lesson.id.toLowerCase().includes(q) ||
            topic.title.en.toLowerCase().includes(q))
        ) {
          results.push({
            type: 'lesson',
            course,
            lesson,
            topicTitle: topic.title.en,
          });
        }
      });
    });
  });

  // Limit results to top 20 for performance
  const filteredResults = results.slice(0, 20);

  const handleKeyDownInInput = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev < filteredResults.length - 1 ? prev + 1 : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : filteredResults.length - 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const item = filteredResults[selectedIndex];
      if (item) {
        if (item.type === 'course') {
          onSelectCourse(item.course.id);
        } else {
          onSelectLesson(item.course.id, item.lesson.id);
        }
        onClose();
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-10 sm:pt-20 px-2 sm:px-4 bg-slate-950/60 backdrop-blur-md animate-fade-in">
      <div 
        className="fixed inset-0" 
        onClick={onClose}
      />

      <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200/80 dark:border-slate-800 overflow-hidden z-10 flex flex-col text-left">
        {/* Search Header Input */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-200/70 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
          <Search className="w-5 h-5 text-indigo-500 mr-3 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleKeyDownInInput}
            placeholder={language === 'en' ? "Type a command or search courses & lessons..." : "ស្វែងរកវគ្គសិក្សា និងមេរៀន (ឧទាហរណ៍: TypeScript, Generics)..."}
            className="w-full bg-transparent text-sm font-medium text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-200/50 dark:hover:bg-slate-800 transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[380px] overflow-y-auto p-2 space-y-1">
          {filteredResults.length === 0 ? (
            <div className="py-12 text-center text-slate-400 text-xs">
              <Search className="w-8 h-8 mx-auto mb-2 opacity-30" />
              <p>{language === 'en' ? "No courses or lessons found." : "រកមិនឃើញវគ្គសិក្សា ឬមេរៀនដែលត្រូវគ្នាឡើយ។"}</p>
            </div>
          ) : (
            filteredResults.map((item, index) => {
              const isSelected = index === selectedIndex;

              if (item.type === 'course') {
                return (
                  <button
                    key={`c-${item.course.id}`}
                    onClick={() => {
                      onSelectCourse(item.course.id);
                      onClose();
                    }}
                    onMouseEnter={() => setSelectedIndex(index)}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left transition ${
                      isSelected
                        ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                        : 'hover:bg-slate-100 dark:hover:bg-slate-800/60 text-slate-800 dark:text-slate-200'
                    }`}
                  >
                    <div className="flex items-center space-x-3 min-w-0">
                      <div className={`p-2 rounded-lg font-bold font-mono text-xs ${isSelected ? 'bg-white/20 text-white' : 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400'}`}>
                        <Code2 className="w-4 h-4" />
                      </div>
                      <div className="truncate">
                        <div className="text-xs font-bold font-sans">
                          {item.course.title.en}
                        </div>
                        <div className={`text-[10px] uppercase font-mono tracking-wider ${isSelected ? 'text-indigo-100' : 'text-slate-400'}`}>
                          Course • {item.course.category} • {item.course.difficulty}
                        </div>
                      </div>
                    </div>
                    <ChevronRight className={`w-4 h-4 shrink-0 ${isSelected ? 'text-white' : 'text-slate-400'}`} />
                  </button>
                );
              }

              const isDone = progress.completedLessons.includes(`${item.course.id}-${item.lesson.id}`);

              return (
                <button
                  key={`l-${item.course.id}-${item.lesson.id}`}
                  onClick={() => {
                    onSelectLesson(item.course.id, item.lesson.id);
                    onClose();
                  }}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left transition ${
                    isSelected
                      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                      : 'hover:bg-slate-100 dark:hover:bg-slate-800/60 text-slate-800 dark:text-slate-200'
                  }`}
                >
                  <div className="flex items-center space-x-3 min-w-0">
                    <div className={`p-2 rounded-lg ${isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'}`}>
                      <BookOpen className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <div className="text-xs font-bold font-sans flex items-center space-x-2">
                        <span className="truncate">{item.lesson.title.en}</span>
                        {isDone && <CheckCircle2 className={`w-3.5 h-3.5 ${isSelected ? 'text-emerald-200' : 'text-emerald-500'}`} />}
                      </div>
                      <div className={`text-[10px] font-mono truncate ${isSelected ? 'text-indigo-100' : 'text-slate-400'}`}>
                        {item.course.title.en} › {item.topicTitle}
                      </div>
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 shrink-0 ${isSelected ? 'text-white' : 'text-slate-400'}`} />
                </button>
              );
            })
          )}
        </div>

        {/* Footer shortcuts hint */}
        <div className="px-4 py-2.5 border-t border-slate-200/70 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/80 flex items-center justify-between text-[11px] text-slate-400 font-mono">
          <div className="flex items-center space-x-3">
            <span className="flex items-center space-x-1">
              <kbd className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-[10px] font-bold">↑↓</kbd>
              <span>Navigate</span>
            </span>
            <span className="flex items-center space-x-1">
              <kbd className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-[10px] font-bold">↵</kbd>
              <span>Select</span>
            </span>
            <span className="flex items-center space-x-1">
              <kbd className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-[10px] font-bold">ESC</kbd>
              <span>Exit</span>
            </span>
          </div>
          <div className="hidden sm:flex items-center space-x-1 text-indigo-500 font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Sabaicode Navigator</span>
          </div>
        </div>
      </div>
    </div>
  );
};

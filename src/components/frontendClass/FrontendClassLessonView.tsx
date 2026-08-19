import React, { useState } from 'react';
import { 
  CheckCircle2, Clock, Award, ArrowLeft, ArrowRight, HelpCircle, 
  Sparkles, Code, BookOpen, Layers, Eye, RefreshCw, Volume2,
  Smartphone, Tablet, Monitor
} from 'lucide-react';
import { FrontendLesson } from '../../types/frontendClass';
import { useApp } from '../../context/AppContext';
import { FrontendClassCodeSandbox } from './FrontendClassCodeSandbox';

interface FrontendClassLessonViewProps {
  lesson: FrontendLesson;
  isCompleted: boolean;
  onMarkComplete: (lessonId: string) => void;
  onNavigateNext?: () => void;
  onNavigatePrev?: () => void;
  onBackToOverview: () => void;
}

export const FrontendClassLessonView: React.FC<FrontendClassLessonViewProps> = ({
  lesson,
  isCompleted,
  onMarkComplete,
  onNavigateNext,
  onNavigatePrev,
  onBackToOverview,
}) => {
  const { language } = useApp();
  const [showSolution, setShowSolution] = useState<boolean>(false);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);

  const handleSelectOption = (qId: string, optId: string) => {
    setSelectedAnswers(prev => ({ ...prev, [qId]: optId }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 space-y-8 font-sans animate-fade-in text-slate-900 dark:text-slate-100">
      {/* Top Header Navigation */}
      <div className="flex items-center justify-between bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-2xl shadow-sm">
        <button
          onClick={onBackToOverview}
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800 px-3.5 py-2 rounded-xl transition"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{language === 'en' ? 'Class Overview' : 'មាតិកាថ្នាក់រៀន'}</span>
        </button>

        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-500/30 text-xs font-bold">
            Module {lesson.moduleNumber}
          </span>
          <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium flex items-center gap-1 border border-slate-200 dark:border-slate-700">
            <Clock className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />
            {lesson.durationMinutes} mins
          </span>
        </div>
      </div>

      {/* Title & Metadata Banner */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 space-y-3 relative overflow-hidden shadow-sm">
        <div className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">
          {language === 'en' ? `Module ${lesson.moduleNumber} • Lesson ${lesson.lessonNumberInModule}` : `មេរៀនទី ${lesson.moduleNumber} • មេរៀនរង ${lesson.lessonNumberInModule}`}
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
          {lesson.title[language] || lesson.title.en}
        </h1>
        <div className="flex items-center gap-3 pt-2">
          <span className="text-xs px-2.5 py-1 bg-amber-100 dark:bg-amber-500/20 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-500/30 font-bold rounded-lg">
            {lesson.difficulty}
          </span>
          {isCompleted && (
            <span className="inline-flex items-center gap-1 text-xs text-emerald-700 dark:text-emerald-400 font-bold bg-emerald-100 dark:bg-emerald-500/20 px-2.5 py-1 rounded-lg border border-emerald-200 dark:border-emerald-500/30">
              <CheckCircle2 className="w-3.5 h-3.5" />
              {language === 'en' ? 'Completed' : 'បានរៀនរួចរាល់'}
            </span>
          )}
        </div>
      </div>

      {/* Concept Explanation (Why before How) */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />
          <span>{language === 'en' ? 'Core Concept Explanation' : 'ការពន្យល់អំពីសេចក្តីផ្តើមចម្បង'}</span>
        </h2>
        <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed whitespace-pre-line">
          {lesson.explanation[language] || lesson.explanation.en}
        </p>
      </div>

      {/* Tutorial Walkthrough */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />
          <span>{language === 'en' ? 'Step-by-Step Tutorial' : 'ការណែនាំជាជំហានៗ'}</span>
        </h2>
        <div className="p-4 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl font-mono text-xs text-slate-800 dark:text-slate-200 leading-relaxed whitespace-pre-line">
          {lesson.tutorial[language] || lesson.tutorial.en}
        </div>
      </div>

      {/* Embedded Live Code Sandbox */}
      <div className="space-y-3">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Code className="w-5 h-5 text-amber-500 dark:text-amber-400" />
          <span>{language === 'en' ? 'Try it Yourself — Live Code Sandbox' : 'អនុវត្តផ្ទាល់ — កន្លែងសាកល្បងកូដ'}</span>
        </h2>
        <FrontendClassCodeSandbox
          initialHtml={lesson.starterCode.html}
          initialCss={lesson.starterCode.css}
          initialJs={lesson.starterCode.js}
        />
      </div>

      {/* Viewport Width Breakdown Comparison */}
      {lesson.viewportComparison && (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4 text-white shadow-lg">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
            <h3 className="text-base font-bold text-teal-400 flex items-center gap-2">
              <Monitor className="w-5 h-5 text-teal-400" />
              <span>{language === 'en' ? 'Result at Different Viewport Widths' : 'លទ្ធផលនៅទំហំអេក្រង់ផ្សេងៗ'}</span>
            </h3>
            <span className="text-[10px] font-mono px-2.5 py-1 bg-teal-500/20 text-teal-300 rounded-full border border-teal-500/30">
              Responsive Breakpoint Breakdown
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
            {/* Mobile */}
            <div className="p-4 bg-slate-950/80 border border-slate-800 rounded-2xl space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-400">
                <Smartphone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Mobile ({lesson.viewportComparison.mobile.width})</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {lesson.viewportComparison.mobile.description[language] || lesson.viewportComparison.mobile.description.en}
              </p>
            </div>

            {/* Tablet */}
            <div className="p-4 bg-slate-950/80 border border-slate-800 rounded-2xl space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-sky-400">
                <Tablet className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Tablet ({lesson.viewportComparison.tablet.width})</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {lesson.viewportComparison.tablet.description[language] || lesson.viewportComparison.tablet.description.en}
              </p>
            </div>

            {/* Desktop */}
            <div className="p-4 bg-slate-950/80 border border-slate-800 rounded-2xl space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-400">
                <Monitor className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Desktop ({lesson.viewportComparison.desktop.width})</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {lesson.viewportComparison.desktop.description[language] || lesson.viewportComparison.desktop.description.en}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Screen Reader Announcement & Accessibility Tree Output */}
      {(lesson.screenReaderAnnouncement || lesson.accessibilityTree) && (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4 text-white shadow-lg">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
            <h3 className="text-base font-bold text-indigo-400 flex items-center gap-2">
              <Volume2 className="w-5 h-5 text-indigo-400" />
              <span>{language === 'en' ? 'Assistive Technology Output (VoiceOver / NVDA & DevTools)' : 'លទ្ធផល Output Assistive Technology (VoiceOver / NVDA & DevTools)'}</span>
            </h3>
            <span className="text-[10px] font-mono px-2.5 py-1 bg-indigo-500/20 text-indigo-300 rounded-full border border-indigo-500/30">
              Screen Reader & DevTools A11y Tree
            </span>
          </div>
          
          {lesson.screenReaderAnnouncement && (
            <div className="space-y-1.5">
              <div className="text-xs font-mono font-bold text-emerald-400 flex items-center gap-1.5">
                <span>🔊 {language === 'en' ? 'Screen Reader Announcement (Audio Speech):' : 'សំឡេង Screen Reader អាន (Screen Reader Announcement):'}</span>
              </div>
              <div className="p-3.5 bg-slate-950 border border-slate-800 rounded-2xl font-mono text-xs text-emerald-300 leading-relaxed shadow-inner">
                "{lesson.screenReaderAnnouncement}"
              </div>
            </div>
          )}

          {lesson.accessibilityTree && (
            <div className="space-y-1.5">
              <div className="text-xs font-mono font-bold text-sky-400 flex items-center gap-1.5">
                <span>🌳 {language === 'en' ? 'Browser Accessibility Tree (DevTools Computed Role & Name):' : 'Browser Accessibility Tree (DevTools Computed Role & Name):'}</span>
              </div>
              <pre className="p-3.5 bg-slate-950 border border-slate-800 rounded-2xl font-mono text-xs text-sky-300 overflow-x-auto shadow-inner">
                <code>{lesson.accessibilityTree}</code>
              </pre>
            </div>
          )}
        </div>
      )}

      {/* Real-World Practical Example */}
      {lesson.realWorldExample && (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Layers className="w-5 h-5 text-sky-500 dark:text-sky-400" />
            <span>{lesson.realWorldExample.title[language] || lesson.realWorldExample.title.en}</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            {lesson.realWorldExample.description[language] || lesson.realWorldExample.description.en}
          </p>
          {lesson.realWorldExample.code && (
            <pre className="p-4 bg-slate-900 dark:bg-slate-950 border border-slate-800 rounded-2xl font-mono text-xs text-sky-300 overflow-x-auto">
              <code>{lesson.realWorldExample.code}</code>
            </pre>
          )}
        </div>
      )}

      {/* Practice Challenge & Solution Reveal */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-500 dark:text-amber-400" />
            <span>{language === 'en' ? 'Practice Challenge' : 'លំហាត់អនុវត្តកូដ'}</span>
          </h2>
          <button
            onClick={() => setShowSolution(!showSolution)}
            className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            {showSolution ? (language === 'en' ? 'Hide Solution' : 'លាក់ចម្លើយ') : (language === 'en' ? 'Reveal Solution' : 'មើលចម្លើយ')}
          </button>
        </div>

        <p className="text-sm text-slate-700 dark:text-slate-300">
          {lesson.practiceExercise.question[language] || lesson.practiceExercise.question.en}
        </p>

        {showSolution && (
          <div className="p-4 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-500/30 rounded-2xl space-y-2">
            <div className="text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase font-mono">
              {language === 'en' ? 'Solution Explanation' : 'ចម្លើយត្រឹមត្រូវ'}
            </div>
            <pre className="font-mono text-xs text-emerald-900 dark:text-emerald-200 whitespace-pre-wrap">
              <code>{lesson.practiceExercise.solution}</code>
            </pre>
          </div>
        )}
      </div>

      {/* Lesson Quiz Section */}
      {lesson.quizQuestions && lesson.quizQuestions.length > 0 && (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />
            <span>{language === 'en' ? 'Lesson Quiz' : 'សំណួរសាកល្បងសមត្ថភាព'}</span>
          </h2>

          <div className="space-y-6">
            {lesson.quizQuestions.map((q, qIndex) => (
              <div key={q.id} className="p-4 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl space-y-3">
                <p className="text-sm font-bold text-slate-900 dark:text-white">
                  {qIndex + 1}. {q.question[language] || q.question.en}
                </p>

                <div className="space-y-2">
                  {q.options.map((opt) => {
                    const isSelected = selectedAnswers[q.id] === opt.id;
                    const isCorrect = opt.isCorrect;

                    let btnStyle = 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800';
                    if (quizSubmitted) {
                      if (isCorrect) {
                        btnStyle = 'bg-emerald-100 dark:bg-emerald-950/80 border-emerald-500 text-emerald-800 dark:text-emerald-300';
                      } else if (isSelected) {
                        btnStyle = 'bg-rose-100 dark:bg-rose-950/80 border-rose-500 text-rose-800 dark:text-rose-300';
                      }
                    } else if (isSelected) {
                      btnStyle = 'bg-indigo-100 dark:bg-indigo-600/30 border-indigo-500 text-indigo-900 dark:text-white font-bold';
                    }

                    return (
                      <button
                        key={opt.id}
                        onClick={() => !quizSubmitted && handleSelectOption(q.id, opt.id)}
                        className={`w-full text-left p-3 rounded-xl border text-xs font-medium transition flex items-center justify-between ${btnStyle}`}
                      >
                        <span>{opt.text[language] || opt.text.en}</span>
                        <div className={`w-4 h-4 rounded-full border ${isSelected ? 'border-indigo-500 bg-indigo-500' : 'border-slate-300 dark:border-slate-700'}`} />
                      </button>
                    );
                  })}
                </div>

                {quizSubmitted && (
                  <p className="text-xs text-slate-500 dark:text-slate-400 italic pt-1">
                    {q.explanation[language] || q.explanation.en}
                  </p>
                )}
              </div>
            ))}
          </div>

          {!quizSubmitted ? (
            <button
              onClick={() => setQuizSubmitted(true)}
              className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-xl transition"
            >
              {language === 'en' ? 'Check Quiz Answers' : 'ផ្ទៀងផ្ទាត់ចម្លើយ'}
            </button>
          ) : (
            <button
              onClick={() => {
                setQuizSubmitted(false);
                setSelectedAnswers({});
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-bold rounded-xl transition"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>{language === 'en' ? 'Retry Quiz' : 'ឆ្លើយម្តងទៀត'}</span>
            </button>
          )}
        </div>
      )}

      {/* Completion & Bottom Controls */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
        <button
          onClick={() => onMarkComplete(lesson.id)}
          className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl font-bold text-xs sm:text-sm transition shadow-lg ${
            isCompleted
              ? 'bg-emerald-100 dark:bg-emerald-600/20 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-500/40 hover:bg-emerald-200 dark:hover:bg-emerald-600/30'
              : 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-600/20'
          }`}
        >
          <CheckCircle2 className="w-5 h-5" />
          <span>
            {isCompleted
              ? (language === 'en' ? 'Marked Complete ✓' : 'រៀនរួចរាល់ហើយ ✓')
              : (language === 'en' ? 'Mark Lesson Complete' : 'កំណត់ថាបានរៀនចប់')}
          </span>
        </button>

        <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto">
          {onNavigatePrev && (
            <button
              onClick={onNavigatePrev}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold text-xs rounded-xl transition"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{language === 'en' ? 'Back lesson' : 'មេរៀនមុន'}</span>
            </button>
          )}

          {onNavigateNext && (
            <button
              onClick={onNavigateNext}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-xl transition shadow-md shadow-indigo-600/20"
            >
              <span>{language === 'en' ? 'Next Lesson' : 'មេរៀនបន្ទាប់'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

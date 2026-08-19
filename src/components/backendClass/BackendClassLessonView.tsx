import React, { useState, useEffect } from 'react';
import {
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock,
  Sparkles,
  HelpCircle,
  HelpCircle as QuestionIcon,
  Code2,
  BookOpen,
  Award,
  Eye,
  EyeOff,
  Terminal,
} from 'lucide-react';
import { BackendLesson } from '../../types/backendClass';
import { BackendClassCodeSandbox } from './BackendClassCodeSandbox';
import {
  markBackendLessonComplete,
  markBackendLessonIncomplete,
  saveBackendQuizScore,
} from '../../utils/backendClassStorage';

interface BackendClassLessonViewProps {
  lesson: BackendLesson;
  lang: 'en' | 'km';
  isCompleted: boolean;
  onNavigateNext: () => void;
  onNavigatePrev: () => void;
  hasNext: boolean;
  hasPrev: boolean;
  onLessonCompletedChange: () => void;
}

export const BackendClassLessonView: React.FC<BackendClassLessonViewProps> = ({
  lesson,
  lang,
  isCompleted,
  onNavigateNext,
  onNavigatePrev,
  hasNext,
  hasPrev,
  onLessonCompletedChange,
}) => {
  const [activeTab, setActiveTab] = useState<'concept' | 'tutorial' | 'sandbox' | 'practice' | 'quiz'>('concept');
  const [showSolution, setShowSolution] = useState<boolean>(false);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);
  const [quizScorePercent, setQuizScorePercent] = useState<number | null>(null);

  // Reset local state when switching lessons
  useEffect(() => {
    setActiveTab('concept');
    setShowSolution(false);
    setSelectedAnswers({});
    setQuizSubmitted(false);
    setQuizScorePercent(null);
  }, [lesson.id]);

  const handleToggleCompleted = () => {
    if (isCompleted) {
      markBackendLessonIncomplete(lesson.id);
    } else {
      markBackendLessonComplete(lesson.id);
    }
    onLessonCompletedChange();
  };

  const handleOptionSelect = (questionId: string, optionId: string) => {
    if (quizSubmitted) return;
    setSelectedAnswers((prev) => ({ ...prev, [questionId]: optionId }));
  };

  const handleSubmitQuiz = () => {
    if (lesson.quizQuestions.length === 0) return;
    let correctCount = 0;
    lesson.quizQuestions.forEach((q) => {
      const selectedOptId = selectedAnswers[q.id];
      const correctOpt = q.options.find((o) => o.isCorrect);
      if (correctOpt && selectedOptId === correctOpt.id) {
        correctCount++;
      }
    });

    const percent = Math.round((correctCount / lesson.quizQuestions.length) * 100);
    setQuizScorePercent(percent);
    setQuizSubmitted(true);
    saveBackendQuizScore(lesson.id, percent);

    // Auto mark complete if quiz score >= 60%
    if (percent >= 60 && !isCompleted) {
      markBackendLessonComplete(lesson.id);
      onLessonCompletedChange();
    }
  };

  return (
    <div className="flex-1 overflow-y-auto bg-slate-50 dark:bg-slate-950 p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Lesson Header Card */}
        <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
            <span className="px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-mono text-xs font-bold border border-emerald-300 dark:border-emerald-800">
              Module {lesson.moduleNumber} • Lesson {lesson.lessonNumberInModule}
            </span>

            <div className="flex items-center gap-3 text-xs font-mono text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-emerald-500" />
                {lesson.durationMinutes} {lang === 'km' ? 'នាទី' : 'mins'}
              </span>
              <span>•</span>
              <span className="text-amber-500 font-semibold">{lesson.difficulty}</span>
            </div>
          </div>

          <h1 className="text-xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-snug mb-4">
            {lesson.title[lang]}
          </h1>

          {/* Lesson Completion Action Button */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
            <button
              onClick={handleToggleCompleted}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition shadow-sm ${
                isCompleted
                  ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-emerald-500 hover:text-white'
              }`}
            >
              <CheckCircle2 className={`w-4 h-4 ${isCompleted ? 'text-white' : ''}`} />
              <span>
                {isCompleted
                  ? lang === 'km'
                    ? 'បានរៀនរួចរាល់ (Mark Incomplete)'
                    : 'Completed (Click to undo)'
                  : lang === 'km'
                  ? 'ចំណាំថាបានរៀន (Mark Complete)'
                  : 'Mark as Complete'}
              </span>
            </button>

            {/* Top Prev/Next quick buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={onNavigatePrev}
                disabled={!hasPrev}
                className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 disabled:opacity-30 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                title={lang === 'km' ? 'មេរៀនមុន' : 'Previous Lesson'}
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={onNavigateNext}
                disabled={!hasNext}
                className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 disabled:opacity-30 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                title={lang === 'km' ? 'មេរៀនបន្ទាប់' : 'Next Lesson'}
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Section Tabs Bar */}
        <div className="flex items-center gap-1 p-1 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-x-auto text-xs font-semibold">
          <button
            onClick={() => setActiveTab('concept')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-lg transition whitespace-nowrap ${
              activeTab === 'concept'
                ? 'bg-emerald-600 text-white shadow'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>{lang === 'km' ? 'ពន្យល់សញ្ញាណ' : '1. Explanation'}</span>
          </button>

          <button
            onClick={() => setActiveTab('tutorial')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-lg transition whitespace-nowrap ${
              activeTab === 'tutorial'
                ? 'bg-emerald-600 text-white shadow'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>{lang === 'km' ? 'ការអនុវត្ត Step-by-Step' : '2. Tutorial'}</span>
          </button>

          <button
            onClick={() => setActiveTab('sandbox')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-lg transition whitespace-nowrap ${
              activeTab === 'sandbox'
                ? 'bg-emerald-600 text-white shadow'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>{lang === 'km' ? 'សាករត់ Code ផ្ទាល់' : '3. Try it Yourself'}</span>
          </button>

          <button
            onClick={() => setActiveTab('practice')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-lg transition whitespace-nowrap ${
              activeTab === 'practice'
                ? 'bg-emerald-600 text-white shadow'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <QuestionIcon className="w-3.5 h-3.5" />
            <span>{lang === 'km' ? 'លំហាត់អនុវត្ត' : '4. Challenge'}</span>
          </button>

          <button
            onClick={() => setActiveTab('quiz')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-lg transition whitespace-nowrap ${
              activeTab === 'quiz'
                ? 'bg-emerald-600 text-white shadow'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{lang === 'km' ? 'តេស្តចំណេះដឹង Quiz' : '5. Quiz'}</span>
          </button>
        </div>

        {/* Tab 1: Concept Explanation */}
        {activeTab === 'concept' && (
          <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-6">
            <div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-emerald-500" />
                <span>{lang === 'km' ? 'សញ្ញាណ និងទ្រឹស្តីគ្រឹះ' : 'Concept Explanation'}</span>
              </h2>
              <div className="prose prose-slate dark:prose-invert text-sm leading-relaxed whitespace-pre-line text-slate-700 dark:text-slate-300">
                {lesson.explanation?.[lang] || lesson.explanation?.en || ''}
              </div>
            </div>

            {/* Real World Application Example */}
            {lesson.realWorldExample && (
              <div className="p-5 bg-slate-900 text-slate-200 rounded-xl border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider">
                  <Sparkles className="w-4 h-4" />
                  <span>{lang === 'km' ? 'ឧទាហរណ៍ប្រើប្រាស់ក្នុងពិភពពិត' : 'Real-World Scenario'}</span>
                </div>
                <h3 className="font-bold text-white text-sm">{lesson.realWorldExample.title[lang]}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {lesson.realWorldExample.description[lang]}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Tab 2: Tutorial Walkthrough */}
        {activeTab === 'tutorial' && (
          <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-6">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
              <Code2 className="w-5 h-5 text-emerald-500" />
              <span>{lang === 'km' ? 'មេរៀនអនុវត្ត Step-by-Step' : 'Tutorial Walkthrough'}</span>
            </h2>
            <div className="prose prose-slate dark:prose-invert text-sm leading-relaxed whitespace-pre-line text-slate-700 dark:text-slate-300">
              {lesson.tutorial?.[lang] || lesson.explanation?.[lang] || lesson.explanation?.en || ''}
            </div>
          </div>
        )}

        {/* Tab 3: Code Sandbox */}
        {activeTab === 'sandbox' && (
          <div className="space-y-4">
            <div className="p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
              <h2 className="text-base font-bold text-slate-900 dark:text-white mb-1 flex items-center gap-2">
                <Terminal className="w-5 h-5 text-emerald-500" />
                <span>{lang === 'km' ? 'សាកល្បងរត់ Code ផ្ទាល់' : 'Try it Yourself Sandbox'}</span>
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {lang === 'km'
                  ? 'អ្នកអាចកែប្រែ Code ខាងក្រោម រួចចុច "រត់ Code" ដើម្បីមើលលទ្ធផលរត់ក្នុង Terminal Simulator!'
                  : 'Modify the starter code below and click "Run Code" to inspect simulated output.'}
              </p>
            </div>

            <BackendClassCodeSandbox
              starterCode={lesson.starterCode}
              simulatedOutput={lesson.simulatedOutput}
              lang={lang}
            />
          </div>
        )}

        {/* Tab 4: Practice Challenge */}
        {activeTab === 'practice' && (
          <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-6">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
              <QuestionIcon className="w-5 h-5 text-emerald-500" />
              <span>{lang === 'km' ? 'លំហាត់ប្រឡងអនុវត្ត' : 'Practice Challenge'}</span>
            </h2>

            <div className="p-4 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 text-sm font-medium text-slate-800 dark:text-slate-200">
              {lesson.practiceExercise.question[lang]}
            </div>

            {/* Solution reveal */}
            <div className="space-y-3">
              <button
                onClick={() => setShowSolution(!showSolution)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition"
              >
                {showSolution ? <EyeOff className="w-4 h-4 text-emerald-400" /> : <Eye className="w-4 h-4 text-emerald-400" />}
                <span>
                  {showSolution
                    ? lang === 'km'
                      ? 'លាក់ចម្លើយ'
                      : 'Hide Solution'
                    : lang === 'km'
                    ? 'មើលចម្លើយគំរូ'
                    : 'Reveal Solution'}
                </span>
              </button>

              {showSolution && (
                <div className="p-4 bg-slate-950 text-emerald-300 rounded-xl font-mono text-xs overflow-x-auto border border-emerald-900/60 leading-relaxed">
                  <pre>{lesson.practiceExercise.solution}</pre>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Tab 5: Interactive Quiz */}
        {activeTab === 'quiz' && (
          <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-8">
            <div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-1 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-emerald-500" />
                <span>{lang === 'km' ? 'តេស្តស្ទង់ចំណេះដឹង Quiz' : 'Lesson Quiz'}</span>
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {lang === 'km'
                  ? 'ឆ្លើយសំណួរខាងក្រោម រួចចុច "បញ្ជូនចម្លើយ" ដើម្បីទទួលបានពិន្ទុ!'
                  : 'Answer the questions below to test your understanding.'}
              </p>
            </div>

            {/* Quiz Result banner if submitted */}
            {quizSubmitted && quizScorePercent !== null && (
              <div
                className={`p-4 rounded-xl border flex items-center justify-between text-xs font-bold ${
                  quizScorePercent >= 60
                    ? 'bg-emerald-50 dark:bg-emerald-950/80 border-emerald-300 text-emerald-800 dark:text-emerald-200'
                    : 'bg-rose-50 dark:bg-rose-950/80 border-rose-300 text-rose-800 dark:text-rose-200'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  <span>
                    {quizScorePercent >= 60
                      ? lang === 'km'
                        ? 'ជោគជ័យ! អ្នកទទួលបានពិន្ទុ៖ ' + quizScorePercent + '%'
                        : `Passed! You scored ${quizScorePercent}%`
                      : lang === 'km'
                      ? 'ព្យាយាមម្តងទៀត! ពិន្ទុរបស់អ្នក៖ ' + quizScorePercent + '%'
                      : `Try again! You scored ${quizScorePercent}%`}
                  </span>
                </div>
                <button
                  onClick={() => {
                    setQuizSubmitted(false);
                    setSelectedAnswers({});
                  }}
                  className="underline hover:opacity-80 font-normal"
                >
                  {lang === 'km' ? 'ធ្វើសាកថ្មី' : 'Retake Quiz'}
                </button>
              </div>
            )}

            {/* Questions List */}
            <div className="space-y-6">
              {lesson.quizQuestions.map((q, idx) => (
                <div key={q.id} className="space-y-3 p-4 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800">
                  <p className="text-sm font-bold text-slate-900 dark:text-white">
                    {idx + 1}. {q.question[lang]}
                  </p>

                  <div className="space-y-2">
                    {q.options.map((opt, optIdx) => {
                      const isSelected = selectedAnswers[q.id] === opt.id;
                      let optionStyle =
                        'border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800';

                      if (isSelected) {
                        optionStyle =
                          'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-900 dark:text-emerald-200 font-semibold';
                      }

                      if (quizSubmitted) {
                        if (opt.isCorrect) {
                          optionStyle =
                            'border-emerald-500 bg-emerald-100 dark:bg-emerald-900/80 text-emerald-950 dark:text-emerald-100 font-bold';
                        } else if (isSelected && !opt.isCorrect) {
                          optionStyle =
                            'border-rose-500 bg-rose-100 dark:bg-rose-950/80 text-rose-950 dark:text-rose-100';
                        }
                      }

                      const displayLabel = String.fromCharCode(65 + optIdx);

                      return (
                        <button
                          key={opt.id}
                          onClick={() => handleOptionSelect(q.id, opt.id)}
                          disabled={quizSubmitted}
                          className={`w-full text-left p-3 rounded-lg border text-xs transition flex items-center justify-between gap-3 ${optionStyle}`}
                        >
                          <div className="flex items-center gap-2.5 flex-1 min-w-0">
                            <span className={`w-6 h-6 rounded-full border text-[11px] font-mono font-bold flex items-center justify-center shrink-0 select-none ${
                              isSelected
                                ? 'bg-emerald-600 border-emerald-600 text-white'
                                : 'border-slate-300 dark:border-slate-700 text-slate-500'
                            }`}>
                              {displayLabel}
                            </span>
                            <span className="leading-snug flex-1">{opt.text[lang]}</span>
                          </div>
                          {quizSubmitted && opt.isCorrect && (
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {quizSubmitted && (
                    <p className="text-xs text-slate-500 dark:text-slate-400 italic pt-1 border-t border-slate-200 dark:border-slate-800">
                      {q.explanation[lang]}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {!quizSubmitted && (
              <button
                onClick={handleSubmitQuiz}
                disabled={Object.keys(selectedAnswers).length === 0}
                className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow disabled:opacity-40 transition"
              >
                {lang === 'km' ? 'បញ្ជូនចម្លើយ (Submit Quiz)' : 'Submit Quiz'}
              </button>
            )}
          </div>
        )}

        {/* Bottom Navigation Controls */}
        <div className="flex items-center justify-between pt-6 border-t border-slate-200 dark:border-slate-800 text-xs sm:text-sm font-medium">
          <button
            onClick={onNavigatePrev}
            disabled={!hasPrev}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 disabled:opacity-30 transition"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>{lang === 'km' ? 'មេរៀនមុន' : 'Previous Lesson'}</span>
          </button>

          <button
            onClick={onNavigateNext}
            disabled={!hasNext}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold disabled:opacity-30 transition shadow"
          >
            <span>{lang === 'km' ? 'មេរៀនបន្ទាប់' : 'Next Lesson'}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

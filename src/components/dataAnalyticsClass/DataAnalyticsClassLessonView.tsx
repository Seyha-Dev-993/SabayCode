import React, { useState } from 'react';
import {
  CheckCircle2,
  XCircle,
  HelpCircle,
  ArrowRight,
  ArrowLeft,
  Copy,
  Check,
  Play,
  RotateCcw,
  Code2,
  Award,
  Terminal,
  Database,
  Sparkles,
} from 'lucide-react';
import { DataAnalyticsLesson, DataAnalyticsClassEnrollment } from '../../types/dataAnalyticsClass';
import { executionService } from '../../utils/executionService';

interface Props {
  lesson: DataAnalyticsLesson;
  enrollment: DataAnalyticsClassEnrollment;
  onCompleteLesson: (lessonId: string) => void;
  onNavigateNext: () => void;
  onNavigatePrev: () => void;
  lang: 'en' | 'km';
}

export const DataAnalyticsClassLessonView: React.FC<Props> = ({
  lesson,
  enrollment,
  onCompleteLesson,
  onNavigateNext,
  onNavigatePrev,
  lang,
}) => {
  const isCompleted = enrollment.completedLessonIds.includes(lesson.id);

  // Try it Yourself Sandbox State
  const [sandboxCode, setSandboxCode] = useState(lesson.tryItYourself.starterCode);
  const [executionOutput, setExecutionOutput] = useState<string | null>(null);
  const [isExecuting, setIsExecuting] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);

  // Quiz State
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const handleCopyCode = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleRunCode = async () => {
    setIsExecuting(true);
    setExecutionOutput(null);

    try {
      const res = await executionService.executeCode(
        lesson.tryItYourself.language,
        sandboxCode
      );
      setExecutionOutput(res.output || res.error || (lang === 'km' ? 'បានដំណើរការកូដដោយជោគជ័យ' : 'Execution finished with no output.'));
    } catch (e: any) {
      setExecutionOutput(lesson.tryItYourself.expectedOutput);
    } finally {
      setIsExecuting(false);
    }
  };

  const handleResetSandbox = () => {
    setSandboxCode(lesson.tryItYourself.starterCode);
    setExecutionOutput(null);
  };

  const handleSelectAnswer = (questionId: string, optionId: string) => {
    if (quizSubmitted) return;
    setSelectedAnswers((prev) => ({ ...prev, [questionId]: optionId }));
  };

  const handleSubmitQuiz = () => {
    setQuizSubmitted(true);
  };

  const handleResetQuiz = () => {
    setSelectedAnswers({});
    setQuizSubmitted(false);
  };

  const handleMarkCompleteAndNext = () => {
    onCompleteLesson(lesson.id);
    onNavigateNext();
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-slate-900 dark:text-slate-100 font-sans space-y-10">
      {/* LESSON HEADER NAVIGATION */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
        <button
          onClick={onNavigatePrev}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 transition-colors cursor-pointer shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{lang === 'km' ? 'មេរៀនមុន' : 'Back lesson'}</span>
        </button>

        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800/60">
            {lang === 'km' ? `មូឌុលទី ${lesson.moduleNumber}` : `Module ${lesson.moduleNumber}`}
          </span>
          <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
            {lang === 'km' ? `មេរៀនទី ${lesson.lessonNumber}` : `Lesson ${lesson.lessonNumber}`}
          </span>
        </div>

        <button
          onClick={onNavigateNext}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white transition-colors cursor-pointer shadow-sm"
        >
          <span>{lang === 'km' ? 'មេរៀនបន្ទាប់' : 'Next Lesson'}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* LESSON TITLE & OVERVIEW */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
            {lesson.title[lang]}
          </h1>
          {isCompleted && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-500/40 shrink-0">
              <CheckCircle2 className="w-3.5 h-3.5" />
              {lang === 'km' ? 'បានបញ្ចប់' : 'Completed'}
            </span>
          )}
        </div>

        <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed bg-white dark:bg-slate-900/60 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
          {lesson.description[lang]}
        </p>
      </div>

      {/* SECTION 1: TUTORIAL MARKDOWN / EXPLANATION */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-sm font-bold uppercase tracking-wider">
          <Sparkles className="w-4 h-4" />
          <span>{lang === 'km' ? '១. មេរៀន និងទ្រឹស្តីអនុវត្ត' : '1. Tutorial & Concept'}</span>
        </div>

        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 leading-relaxed space-y-4 prose dark:prose-invert max-w-none text-sm shadow-sm">
          <div className="whitespace-pre-line">
            {lesson.tutorial[lang]}
          </div>
        </div>
      </section>

      {/* SECTION 2: CODE EXAMPLE & OUTPUT PREVIEW */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 text-teal-600 dark:text-teal-400 text-sm font-bold uppercase tracking-wider">
          <Code2 className="w-4 h-4" />
          <span>{lang === 'km' ? '២. កូដគំរូ និងលទ្ធផល (Code Example)' : '2. Code Example & Output'}</span>
        </div>

        <div className="rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden shadow-xl">
          {/* Code Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-slate-950 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-widest bg-emerald-950 text-emerald-400 border border-emerald-800/80">
                {lesson.codeExample.language}
              </span>
              <span className="text-xs font-bold text-slate-200">
                {lesson.codeExample.title[lang]}
              </span>
            </div>

            <button
              onClick={() => handleCopyCode(lesson.codeExample.code)}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium transition cursor-pointer"
            >
              {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedCode ? (lang === 'km' ? 'បានចម្លង' : 'Copied') : (lang === 'km' ? 'ចម្លងកូដ' : 'Copy')}</span>
            </button>
          </div>

          {/* Code Content */}
          <pre className="p-4 text-xs sm:text-sm font-mono text-emerald-300 bg-slate-950/80 overflow-x-auto leading-relaxed">
            <code>{lesson.codeExample.code}</code>
          </pre>

          {/* Output Preview */}
          <div className="p-4 bg-slate-900/90 border-t border-slate-800 space-y-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-amber-400" />
              {lang === 'km' ? 'លទ្ធផលនៃការរត់កូដ (Output Preview)' : 'Expected Execution Output'}
            </span>
            <pre className="p-3 rounded-lg bg-black/60 font-mono text-xs text-amber-300 overflow-x-auto border border-amber-500/20">
              {lesson.outputPreview.output}
            </pre>
            <p className="text-xs text-slate-400">
              {lesson.outputPreview.explanation[lang]}
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: TRY IT YOURSELF INTERACTIVE SANDBOX */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 text-sm font-bold uppercase tracking-wider">
            <Terminal className="w-4 h-4" />
            <span>{lang === 'km' ? '៣. សាកល្បងសរសេរកូដផ្ទាល់ (Try It Yourself)' : '3. Interactive Code Sandbox'}</span>
          </div>

          <button
            onClick={handleResetSandbox}
            className="flex items-center gap-1 text-xs text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>{lang === 'km' ? 'កំណត់ឡើងវិញ' : 'Reset Code'}</span>
          </button>
        </div>

        <div className="rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden shadow-2xl space-y-0">
          <div className="p-3 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
            <span className="text-xs font-mono text-slate-400">
              {lesson.tryItYourself.language.toUpperCase()} {lang === 'km' ? 'កន្លែងសាកល្បង' : 'Interactive Playground'}
            </span>

            <button
              onClick={handleRunCode}
              disabled={isExecuting}
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-xl text-xs font-extrabold bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-lg shadow-emerald-600/30 transition-all active:scale-95 cursor-pointer disabled:opacity-50"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>{isExecuting ? (lang === 'km' ? 'កំពុងរត់កូដ...' : 'Running...') : (lang === 'km' ? 'រត់កូដ (Run Code)' : 'Run Code')}</span>
            </button>
          </div>

          {/* Code Editor Area */}
          <textarea
            value={sandboxCode}
            onChange={(e) => setSandboxCode(e.target.value)}
            rows={8}
            className="w-full p-4 bg-slate-950 font-mono text-xs sm:text-sm text-emerald-200 border-none outline-none resize-y leading-relaxed focus:ring-1 focus:ring-emerald-500/50"
            spellCheck={false}
          />

          {/* Execution Result Box */}
          {executionOutput && (
            <div className="p-4 bg-black/80 border-t border-slate-800 space-y-2 animate-fade-in">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                {lang === 'km' ? 'លទ្ធផលកូដដែលបានរត់' : 'Execution Output'}
              </span>
              <pre className="p-3 rounded-lg bg-slate-950 font-mono text-xs text-slate-200 overflow-x-auto border border-emerald-500/30">
                {executionOutput}
              </pre>
            </div>
          )}
        </div>
      </section>

      {/* SECTION 4: LESSON QUIZ */}
      {lesson.quiz && lesson.quiz.length > 0 && (
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-sm font-bold uppercase tracking-wider">
              <HelpCircle className="w-4 h-4" />
              <span>{lang === 'km' ? '៤. លំហាត់តេស្តសមត្ថភាព (Quiz)' : '4. Lesson Assessment Quiz'}</span>
            </div>

            {quizSubmitted && (
              <button
                onClick={handleResetQuiz}
                className="text-xs text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1 cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" />
                <span>{lang === 'km' ? 'ធ្វើតេស្តឡើងវិញ' : 'Retake Quiz'}</span>
              </button>
            )}
          </div>

          <div className="space-y-6">
            {lesson.quiz.map((q, qIdx) => {
              const selectedOpt = selectedAnswers[q.id];

              return (
                <div
                  key={q.id}
                  className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 shadow-sm"
                >
                  <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 flex items-start gap-2">
                    <span className="text-emerald-600 dark:text-emerald-400">{qIdx + 1}.</span>
                    <span>{q.question[lang]}</span>
                  </h3>

                  <div className="space-y-2">
                    {q.options.map((opt) => {
                      const isSelected = selectedOpt === opt.id;
                      let btnStyle = "border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800";

                      if (quizSubmitted) {
                        if (opt.isCorrect) {
                          btnStyle = "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/80 text-emerald-900 dark:text-emerald-200 font-bold";
                        } else if (isSelected && !opt.isCorrect) {
                          btnStyle = "border-rose-500 bg-rose-50 dark:bg-rose-950/80 text-rose-900 dark:text-rose-200";
                        }
                      } else if (isSelected) {
                        btnStyle = "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/50 text-emerald-900 dark:text-emerald-200 font-bold";
                      }

                      return (
                        <button
                          key={opt.id}
                          onClick={() => handleSelectAnswer(q.id, opt.id)}
                          disabled={quizSubmitted}
                          className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm transition-all flex items-center justify-between cursor-pointer ${btnStyle}`}
                        >
                          <span>{opt.text[lang]}</span>
                          {quizSubmitted && opt.isCorrect && (
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                          )}
                          {quizSubmitted && isSelected && !opt.isCorrect && (
                            <XCircle className="w-4 h-4 text-rose-600 dark:text-rose-400 shrink-0" />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Explanation feedback */}
                  {quizSubmitted && (
                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 space-y-1">
                      <span className="font-bold text-emerald-600 dark:text-emerald-400 block">
                        {lang === 'km' ? 'ពន្យល់៖' : 'Explanation:'}
                      </span>
                      <p>{q.explanation[lang]}</p>
                    </div>
                  )}
                </div>
              );
            })}

            {!quizSubmitted && (
              <button
                onClick={handleSubmitQuiz}
                disabled={Object.keys(selectedAnswers).length === 0}
                className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition disabled:opacity-50 cursor-pointer shadow-md"
              >
                {lang === 'km' ? 'បញ្ជូនចម្លើយ (Submit Quiz)' : 'Submit Quiz Answers'}
              </button>
            )}
          </div>
        </section>
      )}

      {/* FOOTER ACTION: MARK COMPLETE & NEXT */}
      <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <button
          onClick={onNavigatePrev}
          className="w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs font-bold bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 transition cursor-pointer shadow-sm flex items-center justify-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{lang === 'km' ? 'មេរៀនមុន' : 'Back lesson'}</span>
        </button>

        <button
          onClick={handleMarkCompleteAndNext}
          className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-black bg-gradient-to-r from-emerald-600 via-teal-600 to-amber-500 hover:from-emerald-500 hover:to-amber-400 text-white shadow-lg shadow-emerald-600/30 transition transform hover:scale-105 active:scale-95 cursor-pointer flex items-center justify-center gap-2"
        >
          <Award className="w-4 h-4" />
          <span>
            {lang === 'km' ? 'បញ្ចប់មេរៀន និងទៅមេរៀនបន្ទាប់' : 'Mark Completed & Next Lesson'}
          </span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

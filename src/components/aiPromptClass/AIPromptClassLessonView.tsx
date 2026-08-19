import React, { useState } from 'react';
import {
  Sparkles,
  CheckCircle2,
  XCircle,
  HelpCircle,
  ArrowRight,
  ArrowLeft,
  Copy,
  Check,
  Play,
  RotateCcw,
  Building2,
  Code,
  Flame,
  Award,
} from 'lucide-react';
import { AIPromptLesson, AIPromptClassEnrollment } from '../../types/aiPromptClass';

interface Props {
  lesson: AIPromptLesson;
  enrollment: AIPromptClassEnrollment;
  onCompleteLesson: (lessonId: string) => void;
  onNavigateNext: () => void;
  onNavigatePrev: () => void;
  lang: 'en' | 'km';
}

export const AIPromptClassLessonView: React.FC<Props> = ({
  lesson,
  enrollment,
  onCompleteLesson,
  onNavigateNext,
  onNavigatePrev,
  lang,
}) => {
  const isCompleted = enrollment.completedLessonIds.includes(lesson.id);

  // Practice Playground State
  const [userPracticePrompt, setUserPracticePrompt] = useState('');
  const [showHint, setShowHint] = useState(false);
  const [showSamplePrompt, setShowSamplePrompt] = useState(false);
  const [copiedPrompt, setCopiedPrompt] = useState(false);

  // Quiz State
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 2000);
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
    <div className="max-w-4xl mx-auto px-4 py-8 text-slate-100 font-sans space-y-10">
      {/* LESSON HEADER NAVIGATION */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <button
          onClick={onNavigatePrev}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{lang === 'km' ? 'មេរៀនមុន' : 'Previous Lesson'}</span>
        </button>

        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-purple-950/80 text-purple-300 border border-purple-800/60">
            {lang === 'km' ? `មូឌុលទី ${lesson.moduleNumber}` : `Module ${lesson.moduleNumber}`}
          </span>
          <span className="text-xs text-slate-400 font-medium">
            {lang === 'km' ? `មេរៀនទី ${lesson.lessonNumber}` : `Lesson ${lesson.lessonNumber}`}
          </span>
        </div>

        <button
          onClick={onNavigateNext}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-purple-600 hover:bg-purple-500 text-white transition-colors"
        >
          <span>{lang === 'km' ? 'មេរៀនបន្ទាប់' : 'Next Lesson'}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* LESSON TITLE & DESCRIPTION */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
            {lesson.title[lang]}
          </h1>
          {isCompleted && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-950 text-emerald-400 border border-emerald-500/40">
              <CheckCircle2 className="w-3.5 h-3.5" />
              {lang === 'km' ? 'បានបញ្ចប់' : 'Completed'}
            </span>
          )}
        </div>

        <p className="text-sm text-slate-300 leading-relaxed bg-slate-900/60 p-4 rounded-xl border border-slate-800">
          {lesson.description[lang]}
        </p>
      </div>

      {/* TUTORIAL CONTENT */}
      {lesson.tutorial && (
        <section className="space-y-4">
          <h2 className="text-lg font-bold text-slate-100 flex items-center gap-2">
            <Code className="w-5 h-5 text-purple-400" />
            <span>{lang === 'km' ? 'ខ្លឹមសារមេរៀន និងបច្ចេកទេស' : 'Core Concept & Tutorial'}</span>
          </h2>

          <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 text-sm text-slate-200 leading-relaxed whitespace-pre-line font-mono">
            {lesson.tutorial[lang]}
          </div>
        </section>
      )}

      {/* BEFORE & AFTER PROMPT COMPARISON CARD */}
      {lesson.beforeAfter && (
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-100 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-400" />
              <span>{lang === 'km' ? 'ការប្រៀបធៀប Prompt Before & After' : 'Prompt Comparison: Before vs After'}</span>
            </h2>
            <span className="text-xs font-semibold text-slate-400">
              {lesson.beforeAfter.scenario[lang]}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* WEAK PROMPT CARD */}
            <div className="rounded-2xl bg-red-950/20 border border-red-900/40 p-4 space-y-3">
              <div className="flex items-center justify-between border-b border-red-900/30 pb-2">
                <span className="text-xs font-bold text-red-400 flex items-center gap-1.5">
                  <XCircle className="w-4 h-4" />
                  {lang === 'km' ? 'Weak Prompt ( Prompt ធម្មតា)' : 'Weak / Generic Prompt'}
                </span>
              </div>

              <div>
                <label className="text-[11px] font-semibold text-slate-400 block mb-1">
                  {lang === 'km' ? 'Prompt បញ្ជា AI៖' : 'Prompt Input:'}
                </label>
                <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 font-mono text-xs text-slate-300">
                  {lesson.beforeAfter.weakPrompt}
                </div>
              </div>

              <div>
                <label className="text-[11px] font-semibold text-slate-400 block mb-1">
                  {lang === 'km' ? 'ចម្លើយដែលចេញពី AI (Weak Output)៖' : 'AI Output:'}
                </label>
                <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800 text-xs text-slate-400 italic">
                  {lesson.beforeAfter.weakOutput[lang]}
                </div>
              </div>
            </div>

            {/* IMPROVED PROMPT CARD */}
            <div className="rounded-2xl bg-emerald-950/20 border border-emerald-900/40 p-4 space-y-3">
              <div className="flex items-center justify-between border-b border-emerald-900/30 pb-2">
                <span className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  {lang === 'km' ? 'Improved Prompt ( Prompt កម្រិតអាជីព)' : 'Improved Master Prompt'}
                </span>
                <button
                  onClick={() => handleCopy(lesson.beforeAfter.improvedPrompt)}
                  className="p-1 rounded hover:bg-emerald-900/40 text-emerald-400 text-xs flex items-center gap-1"
                  title="Copy Prompt"
                >
                  {copiedPrompt ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span className="text-[10px]">{copiedPrompt ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <div>
                <label className="text-[11px] font-semibold text-slate-400 block mb-1">
                  {lang === 'km' ? 'Master Prompt បញ្ជា AI៖' : 'Master Prompt Input:'}
                </label>
                <div className="bg-slate-950 p-3 rounded-xl border border-emerald-900/50 font-mono text-xs text-emerald-200">
                  {lesson.beforeAfter.improvedPrompt}
                </div>
              </div>

              <div>
                <label className="text-[11px] font-semibold text-slate-400 block mb-1">
                  {lang === 'km' ? 'ចម្លើយដែលចេញពី AI (High-Quality Output)៖' : 'AI Output:'}
                </label>
                <div className="bg-slate-950/80 p-3 rounded-xl border border-emerald-900/30 text-xs text-slate-200 font-sans">
                  {lesson.beforeAfter.improvedOutput[lang]}
                </div>
              </div>
            </div>
          </div>

          {/* KEY IMPROVEMENTS BULLETS */}
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
            <span className="text-xs font-bold text-purple-300 block mb-2">
              {lang === 'km' ? 'ចំណុចកែលម្អសំខាន់ៗ (Key Improvements):' : 'Key Improvements Made:'}
            </span>
            <ul className="space-y-1">
              {lesson.beforeAfter.keyImprovements.map((imp, idx) => (
                <li key={idx} className="text-xs text-slate-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                  <span>{imp[lang]}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* REAL-WORLD INDUSTRY CASE STUDY */}
      {lesson.realWorldExample && (
        <section className="p-5 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-indigo-900/40 space-y-3">
          <div className="flex items-center gap-2 text-indigo-400">
            <Building2 className="w-5 h-5" />
            <h3 className="text-sm font-bold uppercase tracking-wider">
              {lang === 'km' ? 'ករណីសិក្សាអនុវត្តក្នុងឧស្សាហកម្មជាក់ស្តែង' : 'Real-World Industry Case Study'}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
              <span className="font-semibold text-slate-400 block mb-1">
                {lang === 'km' ? 'បរិបទអាជីវកម្ម (Context):' : 'Business Context:'}
              </span>
              <p className="text-slate-200">{lesson.realWorldExample.context[lang]}</p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
              <span className="font-semibold text-indigo-300 block mb-1">
                {lang === 'km' ? 'ដំណោះស្រាយ និងលទ្ធផល (Impact):' : 'Solution & Impact:'}
              </span>
              <p className="text-slate-200">{lesson.realWorldExample.solution[lang]}</p>
            </div>
          </div>
        </section>
      )}

      {/* INTERACTIVE PROMPT PLAYGROUND EXERCISE */}
      <section className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Flame className="w-5 h-5 text-orange-400" />
            <h3 className="text-base font-bold text-slate-100">
              {lang === 'km' ? 'លំហាត់អនុវត្តសរសេរ Prompt ផ្ទាល់' : 'Interactive Prompt Playground'}
            </h3>
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-purple-950 text-purple-300 border border-purple-800">
            {lesson.exercise.targetDomain}
          </span>
        </div>

        <p className="text-xs text-slate-300 bg-slate-950 p-3 rounded-xl border border-slate-800">
          <span className="font-bold text-slate-200 block mb-0.5">
            {lang === 'km' ? 'ភារកិច្ចលំហាត់៖' : 'Practice Challenge:'}
          </span>
          {lesson.exercise.scenario[lang]}
        </p>

        {/* Text Area for Student Input */}
        <div>
          <label className="text-xs font-medium text-slate-400 block mb-1">
            {lang === 'km' ? 'សរសេរ Prompt របស់អ្នកនៅទីនេះ៖' : 'Draft Your Prompt Below:'}
          </label>
          <textarea
            value={userPracticePrompt}
            onChange={(e) => setUserPracticePrompt(e.target.value)}
            rows={4}
            placeholder={
              lang === 'km'
                ? 'បញ្ចូល Prompt របស់អ្នក (ឧទាហរណ៍៖ Act as a Senior Engineer. System Context:...)'
                : 'Write your structured prompt here using role, context, task, and constraints...'
            }
            className="w-full bg-slate-950 border border-slate-700/80 rounded-xl p-3 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-purple-500 font-mono transition-colors"
          />
        </div>

        {/* Action Buttons for Hints & Strong Prompt */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowHint(!showHint)}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700"
            >
              <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
              <span>{showHint ? 'Hide Hint' : 'Show Hint'}</span>
            </button>

            <button
              onClick={() => setShowSamplePrompt(!showSamplePrompt)}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium bg-purple-950/60 hover:bg-purple-900/60 text-purple-300 border border-purple-800/60"
            >
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span>{showSamplePrompt ? 'Hide Strong Prompt' : 'View Sample Strong Prompt'}</span>
            </button>
          </div>
        </div>

        {/* HINT BOX */}
        {showHint && (
          <div className="p-3.5 rounded-xl bg-amber-950/30 border border-amber-900/50 text-xs text-amber-200">
            <span className="font-bold block mb-1">💡 Hint:</span>
            {lesson.exercise.hints.map((h, idx) => (
              <p key={idx}>{h[lang]}</p>
            ))}
          </div>
        )}

        {/* SAMPLE STRONG PROMPT BOX */}
        {showSamplePrompt && (
          <div className="p-3.5 rounded-xl bg-purple-950/30 border border-purple-800/50 text-xs text-purple-200 font-mono">
            <span className="font-bold block mb-1 text-purple-300">✅ Sample Strong Prompt:</span>
            <p>{lesson.exercise.sampleStrongPrompt}</p>
          </div>
        )}
      </section>

      {/* INTERACTIVE QUIZ SECTION */}
      {lesson.quiz && lesson.quiz.length > 0 && (
        <section className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h3 className="text-base font-bold text-slate-100 flex items-center gap-2">
              <Award className="w-5 h-5 text-indigo-400" />
              <span>{lang === 'km' ? 'តេស្តស្ទង់ប្រឆាំងការចងចាំមេរៀន (Lesson Quiz)' : 'Lesson Knowledge Check'}</span>
            </h3>
            {quizSubmitted && (
              <button
                onClick={handleResetQuiz}
                className="flex items-center gap-1 text-xs text-slate-400 hover:text-white"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            )}
          </div>

          <div className="space-y-6">
            {lesson.quiz.map((q, qIdx) => {
              const selectedOpt = selectedAnswers[q.id];
              const isCorrectOptSelected = q.options.find((o) => o.id === selectedOpt)?.isCorrect;

              return (
                <div key={q.id} className="space-y-3">
                  <p className="text-sm font-semibold text-slate-200">
                    {qIdx + 1}. {q.question[lang]}
                  </p>

                  <div className="space-y-2">
                    {q.options.map((opt) => {
                      const isSelected = selectedOpt === opt.id;
                      let btnStyle = 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700';

                      if (quizSubmitted) {
                        if (opt.isCorrect) {
                          btnStyle = 'bg-emerald-950/60 border-emerald-500/80 text-emerald-200 font-bold';
                        } else if (isSelected && !opt.isCorrect) {
                          btnStyle = 'bg-red-950/60 border-red-500/80 text-red-200';
                        }
                      } else if (isSelected) {
                        btnStyle = 'bg-purple-950/80 border-purple-500 text-purple-200 font-semibold';
                      }

                      return (
                        <button
                          key={opt.id}
                          onClick={() => handleSelectAnswer(q.id, opt.id)}
                          className={`w-full text-left p-3 rounded-xl border text-xs transition-all flex items-center justify-between ${btnStyle}`}
                        >
                          <span>{opt.text[lang]}</span>
                          {quizSubmitted && opt.isCorrect && (
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                          )}
                          {quizSubmitted && isSelected && !opt.isCorrect && (
                            <XCircle className="w-4 h-4 text-red-400 shrink-0" />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {quizSubmitted && (
                    <div className="p-3 rounded-xl bg-slate-950 text-xs text-slate-400 border border-slate-800">
                      <span className="font-bold text-slate-300">Explanation: </span>
                      {q.explanation[lang]}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {!quizSubmitted && (
            <button
              onClick={handleSubmitQuiz}
              disabled={Object.keys(selectedAnswers).length === 0}
              className="w-full py-3 rounded-xl font-bold text-xs bg-purple-600 hover:bg-purple-500 text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              {lang === 'km' ? 'បញ្ជូនចម្លើយ (Submit Quiz)' : 'Check Answers'}
            </button>
          )}
        </section>
      )}

      {/* MARK COMPLETE & NEXT ACTION */}
      <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <button
          onClick={onNavigatePrev}
          className="px-5 py-2.5 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors flex items-center justify-center gap-2 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{lang === 'km' ? 'មេរៀនមុន' : 'Back lesson'}</span>
        </button>

        <div className="flex items-center gap-2">
          {isCompleted ? (
            <span className="text-xs font-bold text-emerald-400 flex items-center gap-1.5 bg-emerald-950/60 px-3 py-1.5 rounded-xl border border-emerald-800/40">
              <CheckCircle2 className="w-4 h-4" />
              {lang === 'km' ? 'អ្នកបានបញ្ចប់មេរៀននេះរួចរាល់' : 'Lesson Completed'}
            </span>
          ) : (
            <button
              onClick={() => onCompleteLesson(lesson.id)}
              className="px-5 py-2.5 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors cursor-pointer"
            >
              {lang === 'km' ? 'កត់ត្រាថាបានបញ្ចប់ (Mark Complete)' : 'Mark as Complete'}
            </button>
          )}
        </div>

        <button
          onClick={handleMarkCompleteAndNext}
          className="w-full sm:w-auto px-8 py-3 rounded-xl font-extrabold text-sm bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-lg shadow-purple-600/30 flex items-center justify-center gap-2 cursor-pointer"
        >
          <span>{lang === 'km' ? 'មេរៀនបន្ទាប់' : 'Next Lesson'}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

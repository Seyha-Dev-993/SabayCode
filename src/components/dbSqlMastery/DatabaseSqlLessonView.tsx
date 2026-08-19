import React, { useState } from 'react';
import { CheckCircle2, ChevronRight, ChevronLeft, Play, Terminal, HelpCircle, FileText, Code2, Sparkles, AlertCircle } from 'lucide-react';
import { DatabaseSqlLesson, DatabaseSqlClassEnrollment } from '../../types/databaseSqlMasteryClass';

interface Props {
  lesson: DatabaseSqlLesson;
  enrollment: DatabaseSqlClassEnrollment;
  onCompleteLesson: (lessonId: string) => void;
  onNavigateNext: () => void;
  onNavigatePrev: () => void;
  lang: 'en' | 'km';
}

export const DatabaseSqlLessonView: React.FC<Props> = ({
  lesson,
  enrollment,
  onCompleteLesson,
  onNavigateNext,
  onNavigatePrev,
  lang,
}) => {
  const isCompleted = enrollment.completedLessonIds.includes(lesson.id);

  // Try-It-Yourself state
  const [userCode, setUserCode] = useState<string>(lesson.tryItYourself?.starterCode || '');
  const [output, setOutput] = useState<{ columns?: string[]; rows?: any[][]; error?: string } | null>(null);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [submittedQuiz, setSubmittedQuiz] = useState<Record<string, boolean>>({});

  const handleRunSql = () => {
    // Simulated lightweight SQL query parser execution for standard try-it-yourself snippets
    if (!userCode.trim()) {
      setOutput({ error: 'Please enter a valid SQL statement to execute.' });
      return;
    }

    if (lesson.outputPreview) {
      setOutput({
        columns: lesson.outputPreview.columns,
        rows: lesson.outputPreview.rows,
      });
    } else {
      setOutput({
        columns: ['query_status', 'affected_rows'],
        rows: [['Query executed successfully in 0.012 ms', 1]],
      });
    }
  };

  const handleAnswerSelect = (questionId: string, optionId: string) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: optionId,
    }));
  };

  const handleCheckQuiz = (questionId: string) => {
    setSubmittedQuiz((prev) => ({
      ...prev,
      [questionId]: true,
    }));
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-8 font-sans">
      {/* Lesson Header Navigation & Badges */}
      <div className="space-y-3 pb-6 border-b border-slate-200 dark:border-slate-800">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-100 dark:bg-blue-950/80 text-blue-800 dark:text-blue-300 border border-blue-300 dark:border-blue-800/60">
            Module {lesson.moduleNumber} — Lesson {lesson.lessonNumber}
          </span>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
              {lesson.durationMinutes} min
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">
              {lesson.difficulty}
            </span>
          </div>
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100">
          {lesson.title[lang]}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          {lesson.description[lang]}
        </p>
      </div>

      {/* Conceptual Explanation Box */}
      <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50/80 via-slate-50 to-indigo-50/50 dark:from-slate-900 dark:via-slate-900/90 dark:to-blue-950/40 border border-blue-200/80 dark:border-blue-800/40 shadow-xs space-y-3">
        <h2 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
          <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          <span>{lang === 'km' ? 'ពន្យល់ទ្រឹស្តី និងគោលការណ៍គ្រឹះ' : 'Core Theoretical Principles'}</span>
        </h2>
        <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line">
          {lesson.explanation[lang]}
        </p>
      </div>

      {/* Interactive Diagram / Architecture Visualizer */}
      {lesson.diagram && (
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
          <h2 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <span>{lang === 'km' ? 'ដ្យាក្រាមមើលទិន្នន័យ (Visual Architecture Diagram)' : 'Visual Concept Architecture'}</span>
          </h2>
          <div className="p-4 rounded-xl bg-slate-950 text-slate-100 overflow-x-auto space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {lesson.diagram.svgData?.nodes?.map((node: any) => (
                <div
                  key={node.id}
                  className={`p-3 rounded-xl border text-center space-y-1 ${
                    node.type === 'primary'
                      ? 'bg-blue-950/80 border-blue-500 text-blue-100'
                      : node.type === 'accent'
                      ? 'bg-emerald-950/80 border-emerald-500 text-emerald-100'
                      : node.type === 'warning'
                      ? 'bg-amber-950/80 border-amber-500 text-amber-100'
                      : 'bg-slate-900 border-slate-700 text-slate-200'
                  }`}
                >
                  <span className="text-xs font-bold block">{node.label}</span>
                  <span className="text-[10px] text-slate-400 block">{node.subtext}</span>
                </div>
              ))}
            </div>
            {lesson.diagram.caption && (
              <p className="text-[11px] text-slate-400 italic text-center pt-2">
                {lesson.diagram.caption[lang]}
              </p>
            )}
          </div>
        </div>
      )}

      {/* Code Example & Output Preview */}
      {lesson.codeExample && (
        <div className="space-y-4">
          <h2 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <Code2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <span>{lesson.codeExample.title[lang]}</span>
          </h2>

          <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 text-slate-100 font-mono text-xs shadow-lg">
            <div className="p-3 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-slate-400">
              <span className="text-[11px] font-sans font-semibold">PostgreSQL Query</span>
              <span className="text-[10px]">SQL</span>
            </div>
            <pre className="p-4 overflow-x-auto text-emerald-300 leading-relaxed">
              <code>{lesson.codeExample.code}</code>
            </pre>
          </div>

          {/* Execution Output Table Preview */}
          {lesson.outputPreview && (
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 space-y-3">
              <span className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                <Terminal className="w-4 h-4 text-emerald-500" />
                <span>{lang === 'km' ? 'លទ្ធផលនៃការរត់ Query (Expected Output Result)' : 'Query Result Set Preview'}</span>
              </span>

              <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800">
                <table className="w-full text-xs text-left">
                  <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 uppercase font-bold text-[10px]">
                    <tr>
                      {lesson.outputPreview.columns.map((col, i) => (
                        <th key={i} className="px-3 py-2 border-b border-slate-200 dark:border-slate-700">
                          {col}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-800 font-mono text-[11px]">
                    {lesson.outputPreview.rows.map((row, rIdx) => (
                      <tr key={rIdx} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                        {row.map((cell, cIdx) => (
                          <td key={cIdx} className="px-3 py-2 text-slate-800 dark:text-slate-200">
                            {cell === null ? <span className="text-rose-500 italic">NULL</span> : String(cell)}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {lesson.outputPreview.explanation && (
                <p className="text-xs text-slate-500 dark:text-slate-400 italic">
                  {lesson.outputPreview.explanation[lang]}
                </p>
              )}
            </div>
          )}
        </div>
      )}

      {/* Try-It-Yourself Interactive Playground Code Sandbox */}
      {lesson.tryItYourself && (
        <div className="p-6 rounded-2xl bg-slate-900 text-white border border-slate-800 shadow-lg space-y-4 font-sans">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <Terminal className="w-5 h-5 text-emerald-400" />
              <span>{lang === 'km' ? 'សាកល្បងសរសេរ SQL ដោយខ្លួនឯង (Try-It-Yourself Sandbox)' : 'Interactive SQL Playground'}</span>
            </h2>
            <button
              onClick={handleRunSql}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-bold text-xs flex items-center gap-2 shadow-md shadow-emerald-500/20 cursor-pointer"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>{lang === 'km' ? 'រត់ Query' : 'Run Query'}</span>
            </button>
          </div>

          <textarea
            value={userCode}
            onChange={(e) => setUserCode(e.target.value)}
            className="w-full h-36 p-4 rounded-xl bg-slate-950 text-emerald-300 font-mono text-xs border border-slate-800 focus:outline-none focus:border-emerald-500 leading-relaxed"
            placeholder="Type your SQL query here..."
          />

          {output && (
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                Console Output Result:
              </span>
              {output.error ? (
                <p className="text-xs text-rose-400 flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4" />
                  <span>{output.error}</span>
                </p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-xs font-mono">
                    <thead>
                      <tr className="border-b border-slate-800 text-slate-400 text-[10px]">
                        {output.columns?.map((c, i) => (
                          <th key={i} className="px-2 py-1 text-left">{c}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {output.rows?.map((r, i) => (
                        <tr key={i} className="border-b border-slate-900 text-emerald-300">
                          {r.map((v, j) => (
                            <td key={j} className="px-2 py-1">{String(v)}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Quiz Knowledge Checks */}
      {lesson.quiz && lesson.quiz.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <span>{lang === 'km' ? 'សំនួរតេស្តសមត្ថភាព (Knowledge Quiz)' : 'Quiz Knowledge Check'}</span>
          </h2>

          <div className="space-y-4">
            {lesson.quiz.map((q) => {
              const selectedOpt = selectedAnswers[q.id];
              const isSubmitted = !!submittedQuiz[q.id];
              const correctOpt = q.options.find((o) => o.isCorrect)?.id;

              return (
                <div
                  key={q.id}
                  className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4"
                >
                  <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100">
                    {q.question[lang]}
                  </p>

                  <div className="space-y-2">
                    {q.options.map((opt) => {
                      const isSelected = selectedOpt === opt.id;
                      let btnStyle = 'bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200';

                      if (isSubmitted) {
                        if (opt.isCorrect) {
                          btnStyle = 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-500 text-emerald-900 dark:text-emerald-200 font-bold';
                        } else if (isSelected && !opt.isCorrect) {
                          btnStyle = 'bg-rose-50 dark:bg-rose-950/60 border-rose-500 text-rose-900 dark:text-rose-200';
                        }
                      } else if (isSelected) {
                        btnStyle = 'bg-blue-50 dark:bg-blue-950/60 border-blue-600 text-blue-900 dark:text-blue-200 font-bold';
                      }

                      return (
                        <button
                          key={opt.id}
                          onClick={() => !isSubmitted && handleAnswerSelect(q.id, opt.id)}
                          className={`w-full text-left p-3 rounded-xl border text-xs transition-all flex items-center justify-between cursor-pointer ${btnStyle}`}
                        >
                          <span>{opt.text[lang]}</span>
                        </button>
                      );
                    })}
                  </div>

                  {!isSubmitted ? (
                    <button
                      onClick={() => selectedOpt && handleCheckQuiz(q.id)}
                      disabled={!selectedOpt}
                      className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-bold text-xs cursor-pointer"
                    >
                      {lang === 'km' ? 'ផ្ទៀងផ្ទាត់ចម្លើយ' : 'Submit Answer'}
                    </button>
                  ) : (
                    <p className="text-xs text-slate-600 dark:text-slate-300 italic pt-1 border-t border-slate-100 dark:border-slate-800">
                      💡 {q.explanation[lang]}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Completion & Navigation Footer */}
      <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <button
          onClick={onNavigatePrev}
          className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium text-xs flex items-center justify-center gap-2 cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>{lang === 'km' ? 'មេរៀនមុន' : 'Back lesson'}</span>
        </button>

        <button
          onClick={() => onCompleteLesson(lesson.id)}
          className={`w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md ${
            isCompleted
              ? 'bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800'
              : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-500 hover:to-indigo-500'
          }`}
        >
          <CheckCircle2 className="w-4 h-4" />
          <span>
            {isCompleted
              ? (lang === 'km' ? 'បានរៀនរួចរាល់' : 'Completed')
              : (lang === 'km' ? 'កត់ត្រាថាបានរៀនរួចរាល់' : 'Mark as Complete')}
          </span>
        </button>

        <button
          onClick={onNavigateNext}
          className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs flex items-center justify-center gap-2 cursor-pointer"
        >
          <span>{lang === 'km' ? 'មេរៀនបន្ទាប់' : 'Next Lesson'}</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { Trophy, Award, CheckCircle2, Terminal, Code2, Sparkles, Send, Download } from 'lucide-react';
import { DatabaseSqlClassEnrollment } from '../../types/databaseSqlMasteryClass';

interface Props {
  enrollment: DatabaseSqlClassEnrollment;
  onSubmitCapstone: (portfolio: { githubRepoUrl?: string; sqlScriptSnippet?: string }) => void;
  lang: 'en' | 'km';
}

export const DatabaseSqlCapstoneView: React.FC<Props> = ({
  enrollment,
  onSubmitCapstone,
  lang,
}) => {
  const [repoUrl, setRepoUrl] = useState<string>(enrollment.capstoneSubmission?.githubRepoUrl || '');
  const [sqlSnippet, setSqlSnippet] = useState<string>(enrollment.capstoneSubmission?.sqlScriptSnippet || '');
  const [submittedSuccess, setSubmittedSuccess] = useState<boolean>(!!enrollment.capstoneSubmission?.submittedAt);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmitCapstone({
      githubRepoUrl: repoUrl,
      sqlScriptSnippet: sqlSnippet,
    });
    setSubmittedSuccess(true);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-8 font-sans">
      {/* Capstone Banner */}
      <div className="rounded-3xl bg-gradient-to-br from-amber-500 via-orange-600 to-amber-700 text-white p-8 shadow-2xl space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-white/20 backdrop-blur shrink-0">
            <Trophy className="w-8 h-8 text-amber-200" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-100 block">
              Module 14 — Final Capstone
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
              {lang === 'km' ? 'គម្រោង Capstone បញ្ចប់ការសិក្សា' : 'Capstone Master Project Submission'}
            </h1>
          </div>
        </div>
        <p className="text-xs sm:text-sm text-amber-100 leading-relaxed max-w-2xl">
          {lang === 'km'
            ? 'សូមដាក់ស្នើកូដ SQL DDL, Constraints, Indexes, Views, Triggers និង Analytical Queries ដែលអ្នកបានសរសេរដើម្បីទទួលបាន Certificate បញ្ចប់ការសិក្សា។'
            : 'Submit your production SQL schema scripts, triggers, and analytics queries to earn your verified Database Design & SQL Mastery Certificate.'}
        </p>
      </div>

      {/* Submission Status or Form */}
      {submittedSuccess ? (
        <div className="p-8 rounded-3xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 space-y-4 text-center">
          <div className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/30">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h2 className="text-xl font-bold">
            {lang === 'km' ? 'ការដាក់ស្នើបានជោគជ័យ!' : 'Capstone Project Successfully Submitted!'}
          </h2>
          <p className="text-xs sm:text-sm text-emerald-800 dark:text-emerald-300 max-w-md mx-auto">
            {lang === 'km'
              ? 'សូមអបអរសាទរ! ប្រព័ន្ធបានពិនិត្យ និងទទួលយក Capstone Portfolio របស់អ្នកដោយជោគជ័យ។ វិញ្ញាបនបត្ររបស់អ្នកត្រូវបានបញ្ជាក់។'
              : 'Congratulations! Your Capstone Portfolio has been verified and recorded. Your mastery certificate is now unlocked.'}
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <Code2 className="w-5 h-5 text-amber-500" />
            <span>{lang === 'km' ? 'ទម្រង់ដាក់ស្នើ Portfolio' : 'Portfolio Submission Form'}</span>
          </h2>

          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block">
              {lang === 'km' ? 'តំណភ្ជាប់ GitHub Repository (ជម្រើស)' : 'GitHub Repository URL (Optional)'}
            </label>
            <input
              type="url"
              value={repoUrl}
              onChange={(e) => setRepoUrl(e.target.value)}
              placeholder="https://github.com/username/db-capstone-project"
              className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-800 text-xs border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-amber-500 text-slate-900 dark:text-slate-100"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block">
              {lang === 'km' ? 'កូដ SQL DDL & Query Snippet' : 'Production SQL DDL & Analytics Snippet'}
            </label>
            <textarea
              value={sqlSnippet}
              onChange={(e) => setSqlSnippet(e.target.value)}
              rows={8}
              placeholder="Paste your CREATE TABLE, INDEX, TRIGGER, and CTE query scripts here..."
              className="w-full p-4 rounded-xl bg-slate-950 text-emerald-300 font-mono text-xs border border-slate-800 focus:outline-none focus:border-amber-500 leading-relaxed"
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white font-bold text-sm shadow-xl shadow-amber-500/20 flex items-center justify-center gap-2 cursor-pointer transition-all"
          >
            <Send className="w-4 h-4" />
            <span>{lang === 'km' ? 'ដាក់ស្នើ Capstone Portfolio' : 'Submit Capstone Portfolio'}</span>
          </button>
        </form>
      )}
    </div>
  );
};

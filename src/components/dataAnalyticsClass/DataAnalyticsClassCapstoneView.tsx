import React, { useState } from 'react';
import {
  Award,
  BarChart2,
  CheckCircle2,
  Code2,
  FileText,
  Plus,
  Trash2,
  Send,
  Database,
  LineChart,
} from 'lucide-react';
import { DataAnalyticsClassEnrollment } from '../../types/dataAnalyticsClass';

interface Props {
  enrollment: DataAnalyticsClassEnrollment;
  onSubmitCapstone: (portfolio: any) => void;
  lang: 'en' | 'km';
}

interface AnalyticsProjectItem {
  id: string;
  domain: string;
  title: string;
  pythonSqlSnippet: string;
  insightSummary: string;
}

export const DataAnalyticsClassCapstoneView: React.FC<Props> = ({
  enrollment,
  onSubmitCapstone,
  lang,
}) => {
  const [projects, setProjects] = useState<AnalyticsProjectItem[]>([
    {
      id: '1',
      domain: 'E-Commerce Analytics',
      title: 'Monthly Revenue Trend & Customer Retention SQL Analysis',
      pythonSqlSnippet: `SELECT strftime('%Y-%m', created_at) AS month, COUNT(DISTINCT customer_id) AS active_users, SUM(amount) AS revenue FROM orders GROUP BY month ORDER BY month;`,
      insightSummary: 'Identified a 28% MoM growth in active purchasing customers in Q3, driven primarily by recurring electronics sales.',
    },
    {
      id: '2',
      domain: 'Banking & Financial Risk',
      title: 'Customer Churn & Loan Default Risk Profiling (Pandas)',
      pythonSqlSnippet: `import pandas as pd\ndf = pd.read_csv('banking_data.csv')\nchurn_rate = df.groupby('account_type')['is_churned'].mean()\nprint(churn_rate)`,
      insightSummary: 'Discovered that customers with low mobile app activity have a 3.2x higher likelihood of closing accounts within 6 months.',
    },
  ]);

  const [newTitle, setNewTitle] = useState('');
  const [newDomain, setNewDomain] = useState('Retail Analytics');
  const [newSnippet, setNewSnippet] = useState('');
  const [newInsight, setNewInsight] = useState('');
  const [submitted, setSubmitted] = useState(enrollment.capstoneSubmitted);

  const handleAddProject = () => {
    if (!newTitle.trim() || !newSnippet.trim()) return;
    const item: AnalyticsProjectItem = {
      id: Date.now().toString(),
      domain: newDomain,
      title: newTitle,
      pythonSqlSnippet: newSnippet,
      insightSummary: newInsight,
    };
    setProjects((prev) => [...prev, item]);
    setNewTitle('');
    setNewSnippet('');
    setNewInsight('');
  };

  const handleDelete = (id: string) => {
    setProjects((prev) => prev.filter((p) => p.id !== id));
  };

  const handleSubmitPortfolio = () => {
    setSubmitted(true);
    onSubmitCapstone({
      projectsCount: projects.length,
      submittedAt: new Date().toISOString(),
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-slate-900 dark:text-slate-100 font-sans space-y-10">
      {/* CAPSTONE HEADER */}
      <div className="p-8 rounded-3xl bg-gradient-to-br from-emerald-900 via-slate-900 to-slate-950 dark:from-emerald-950 dark:via-slate-900 dark:to-slate-950 border border-emerald-700/60 dark:border-emerald-800/60 shadow-xl relative overflow-hidden text-white">
        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 relative z-10">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-emerald-900 text-emerald-200 border border-emerald-700/60 mb-3">
              <BarChart2 className="w-3.5 h-3.5 text-emerald-300" />
              {lang === 'km' ? 'មូឌុលទី ១២៖ គម្រោងបញ្ចប់ថ្នាក់រៀន' : 'Module 12 Capstone'}
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-white leading-tight">
              {lang === 'km'
                ? 'គម្រោងវិភាគទិន្នន័យជាក់ស្តែង (End-to-End Analytics Portfolio)'
                : 'Data Analytics Capstone Portfolio'}
            </h1>
            <p className="text-sm text-slate-300 mt-2 max-w-xl">
              {lang === 'km'
                ? 'បង្កើត និងបញ្ជូនផលប័ត្រវិភាគទិន្នន័យ (Data Portfolio) ដោយប្រើប្រាស់ Python, SQL, និង Data Visualization ដើម្បីទទួលបានវិញ្ញាបនប័ត្របញ្ជាក់ការសិក្សា។'
                : 'Build and submit your real-world Python & SQL data analytics portfolio to earn your official Course Completion Certificate.'}
            </p>
          </div>

          <div className="shrink-0">
            {submitted ? (
              <div className="p-4 rounded-2xl bg-emerald-950/80 border border-emerald-500/50 text-center space-y-1">
                <Award className="w-8 h-8 text-emerald-400 mx-auto" />
                <span className="text-xs font-black text-emerald-300 block uppercase tracking-wider">
                  {lang === 'km' ? 'បានទទួលបានវិញ្ញាបនប័ត្រ' : 'Certificate Awarded'}
                </span>
                <span className="text-[10px] text-slate-400">
                  {lang === 'km' ? 'បានបញ្ជូនរួចរាល់' : 'Portfolio Verified'}
                </span>
              </div>
            ) : (
              <button
                onClick={handleSubmitPortfolio}
                className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-extrabold text-sm shadow-lg shadow-emerald-600/30 transition hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>{lang === 'km' ? 'បញ្ជូនគម្រោង (Submit Portfolio)' : 'Submit Final Portfolio'}</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* PORTFOLIO PROJECT BUILDER */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Database className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            <span>
              {lang === 'km' ? 'បញ្ជីគម្រោងវិភាគរបស់អ្នក (Submitted Queries & Scripts)' : 'Analytics Project Entries'}
            </span>
          </h2>
          <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
            {projects.length} {lang === 'km' ? 'គម្រោង' : 'projects'}
          </span>
        </div>

        {/* Existing Projects List */}
        <div className="space-y-4">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 relative group shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-md text-[10px] font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-800">
                    {proj.domain}
                  </span>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">{proj.title}</h3>
                </div>

                {!submitted && (
                  <button
                    onClick={() => handleDelete(proj.id)}
                    className="text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 transition cursor-pointer"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
              </div>

              <pre className="p-3 rounded-xl bg-slate-950 text-xs font-mono text-emerald-300 border border-slate-800 overflow-x-auto">
                <code>{proj.pythonSqlSnippet}</code>
              </pre>

              {proj.insightSummary && (
                <p className="text-xs text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-950/40 p-2.5 rounded-lg border border-slate-200 dark:border-slate-800">
                  <span className="font-bold text-teal-600 dark:text-teal-400">Key Insight: </span>
                  {proj.insightSummary}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Add New Project Form */}
        {!submitted && (
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 space-y-4 shadow-sm">
            <h3 className="text-sm font-bold text-emerald-700 dark:text-emerald-300 flex items-center gap-2">
              <Plus className="w-4 h-4" />
              <span>{lang === 'km' ? 'បន្ថែមគម្រោងថ្មីក្នុង Portfolio' : 'Add New Project Query/Script'}</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                type="text"
                placeholder={lang === 'km' ? 'ឈ្មោះគម្រោង (ឧ. Retail Sales Trend Analysis)' : 'Project Title'}
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-slate-200 outline-none focus:border-emerald-500"
              />
              <input
                type="text"
                placeholder={lang === 'km' ? 'វិស័យ (ឧ. Banking, E-Commerce, Healthcare)' : 'Domain / Industry'}
                value={newDomain}
                onChange={(e) => setNewDomain(e.target.value)}
                className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-slate-200 outline-none focus:border-emerald-500"
              />
            </div>

            <textarea
              rows={3}
              placeholder={lang === 'km' ? 'កូដ SQL ឬ Python Script សម្រាប់វិភាគ...' : 'Python / SQL Script code...'}
              value={newSnippet}
              onChange={(e) => setNewSnippet(e.target.value)}
              className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-emerald-300 outline-none focus:border-emerald-500"
            />

            <input
              type="text"
              placeholder={lang === 'km' ? 'សេចក្តីសន្និដ្ឋានទិន្នន័យ (Business Insight Summary)...' : 'Business Insight Summary...'}
              value={newInsight}
              onChange={(e) => setNewInsight(e.target.value)}
              className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-slate-200 outline-none focus:border-emerald-500"
            />

            <button
              onClick={handleAddProject}
              className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold text-xs transition cursor-pointer"
            >
              {lang === 'km' ? '+ បន្ថែមគម្រោងនេះ' : '+ Add Project Entry'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import {
  Award,
  Sparkles,
  CheckCircle2,
  Code2,
  Globe,
  FileText,
  BarChart3,
  Plus,
  Trash2,
  Send,
  Download,
  Share2,
} from 'lucide-react';
import { AIPromptClassEnrollment } from '../../types/aiPromptClass';

interface Props {
  enrollment: AIPromptClassEnrollment;
  onSubmitCapstone: (portfolio: any) => void;
  lang: 'en' | 'km';
}

interface PromptTemplate {
  id: string;
  domain: 'Web Building' | 'Software Engineering' | 'Copywriting' | 'Business Analysis';
  title: string;
  xmlPrompt: string;
}

export const AIPromptClassCapstoneView: React.FC<Props> = ({
  enrollment,
  onSubmitCapstone,
  lang,
}) => {
  const [templates, setTemplates] = useState<PromptTemplate[]>([
    {
      id: '1',
      domain: 'Web Building',
      title: 'Responsive SaaS Landing Page Master Prompt',
      xmlPrompt: `<system_role> You are a Principal Front-End Developer. </system_role>\n<context> Stack: React 18, Tailwind CSS, Lucide Icons. </context>\n<task> Build interactive pricing calculator with annual billing toggle. </task>\n<constraints> Strict TypeScript interfaces, clean light mode. </constraints>`,
    },
    {
      id: '2',
      domain: 'Software Engineering',
      title: 'TypeScript Refactoring & Security Audit Prompt',
      xmlPrompt: `<system_role> You are a Senior Security Auditor. </system_role>\n<task> Audit submitted Node.js Express handler for SQL injection and XSS vulnerabilities. </task>\n<constraints> Output severity matrix and patch diff code blocks. </constraints>`,
    },
    {
      id: '3',
      domain: 'Copywriting',
      title: 'PAS Framework Cold Email Campaign Prompt',
      xmlPrompt: `<system_role> You are an Apple-level Copywriter. </system_role>\n<task> Write 3 email subject lines using PAS (Problem-Agitate-Solve). </task>\n<constraints> Banned words: supercharge, unleash, delve, game-changer. </constraints>`,
    },
    {
      id: '4',
      domain: 'Business Analysis',
      title: 'Executive Meeting Briefing Extraction Prompt',
      xmlPrompt: `<system_role> You are Chief of Staff. </system_role>\n<task> Process raw meeting call transcript into Action Items table. </task>\n<constraints> Columns: Owner, Action, Due Date. Max 200 words total. </constraints>`,
    },
  ]);

  const [newTitle, setNewTitle] = useState('');
  const [newDomain, setNewDomain] = useState<PromptTemplate['domain']>('Web Building');
  const [newXml, setNewXml] = useState('');
  const [submitted, setSubmitted] = useState(enrollment.capstoneSubmitted);

  const handleAddTemplate = () => {
    if (!newTitle.trim() || !newXml.trim()) return;
    const item: PromptTemplate = {
      id: Date.now().toString(),
      domain: newDomain,
      title: newTitle,
      xmlPrompt: newXml,
    };
    setTemplates((prev) => [...prev, item]);
    setNewTitle('');
    setNewXml('');
  };

  const handleDelete = (id: string) => {
    setTemplates((prev) => prev.filter((t) => t.id !== id));
  };

  const handleSubmitPortfolio = () => {
    setSubmitted(true);
    onSubmitCapstone({ templatesCount: templates.length, submittedAt: new Date().toISOString() });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-slate-100 font-sans space-y-10">
      {/* CAPSTONE HEADER */}
      <div className="p-8 rounded-3xl bg-gradient-to-br from-purple-950 via-slate-900 to-slate-950 border border-purple-800/60 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 relative z-10">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-purple-900 text-purple-200 border border-purple-700/60 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-purple-300" />
              {lang === 'km' ? 'មូឌុលទី ៩៖ គម្រោងបញ្ចប់' : 'Module 9 Capstone'}
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
              {lang === 'km' ? 'Master Prompt Library Portfolio' : 'Master Prompt Library Portfolio'}
            </h1>
            <p className="text-sm text-slate-300">
              {lang === 'km'
                ? 'រៀបចំ និងបញ្ជូន Master Prompt Library របស់អ្នកលើ ៤ ជំនាញ ដើម្បីទទួលបានវិញ្ញាបនប័ត្របញ្ចប់ថ្នាក់អាជីព Flagship!'
                : 'Compile and submit your production Master Prompt Library across 4 domains to earn your Flagship Certification.'}
            </p>
          </div>

          <Award className="w-16 h-16 text-purple-400 shrink-0 animate-pulse" />
        </div>
      </div>

      {/* CERTIFICATE COMPLETED BANNER IF SUBMITTED */}
      {submitted && (
        <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-950/80 to-slate-900 border border-emerald-500/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-10 h-10 text-emerald-400 shrink-0" />
            <div>
              <h3 className="font-bold text-base text-emerald-200">
                {lang === 'km' ? 'អបអរសាទរ! គម្រោងត្រូវបានបញ្ជូនរួចរាល់' : 'Congratulations! Capstone Submitted & Certified'}
              </h3>
              <p className="text-xs text-emerald-300/80">
                {lang === 'km'
                  ? 'អ្នកបានបញ្ចប់ថ្នាក់រៀន AI Prompt Engineering & Generative AI ១០០%'
                  : 'You have achieved 100% completion in the AI Prompt Engineering Flagship Class.'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => alert('Certificate downloaded!')}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white flex items-center gap-1.5 shadow-md"
            >
              <Download className="w-4 h-4" />
              <span>{lang === 'km' ? 'ទាញយកវិញ្ញាបនប័ត្រ' : 'Download Certificate'}</span>
            </button>
          </div>
        </div>
      )}

      {/* PORTFOLIO BUILDER SECTION */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Code2 className="w-5 h-5 text-purple-400" />
            <span>{lang === 'km' ? 'បញ្ជី Master Prompts ( Portfolio Items)' : 'Your Master Prompt Templates'}</span>
          </h2>
          <span className="text-xs font-semibold text-slate-400">
            {templates.length} {lang === 'km' ? 'Templates ត្រូវបានបន្ថែម' : 'templates compiled'}
          </span>
        </div>

        {/* Templates Grid */}
        <div className="space-y-4">
          {templates.map((tpl) => (
            <div
              key={tpl.id}
              className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-3 relative group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-purple-950 text-purple-300 border border-purple-800">
                    {tpl.domain}
                  </span>
                  <h3 className="text-sm font-bold text-slate-100">{tpl.title}</h3>
                </div>

                {!submitted && (
                  <button
                    onClick={() => handleDelete(tpl.id)}
                    className="p-1.5 rounded hover:bg-red-950 text-slate-500 hover:text-red-400 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
              </div>

              <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 font-mono text-xs text-purple-200/90 whitespace-pre-line">
                {tpl.xmlPrompt}
              </div>
            </div>
          ))}
        </div>

        {/* ADD NEW TEMPLATE FORM */}
        {!submitted && (
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
            <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
              <Plus className="w-4 h-4 text-purple-400" />
              {lang === 'km' ? 'បន្ថែម Master Prompt ថ្មីចូល Portfolio' : 'Add New Master Template'}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-[11px] font-semibold text-slate-400 block mb-1">
                  {lang === 'km' ? 'ចំណងជើង Template' : 'Template Title:'}
                </label>
                <input
                  type="text"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="e.g. Full-Stack React Hook Prompt"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="text-[11px] font-semibold text-slate-400 block mb-1">
                  {lang === 'km' ? 'ជំនាញ (Domain)' : 'Domain:'}
                </label>
                <select
                  value={newDomain}
                  onChange={(e) => setNewDomain(e.target.value as any)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-xs text-slate-100 focus:outline-none focus:border-purple-500"
                >
                  <option value="Web Building">Web Building</option>
                  <option value="Software Engineering">Software Engineering</option>
                  <option value="Copywriting">Copywriting</option>
                  <option value="Business Analysis">Business Analysis</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-[11px] font-semibold text-slate-400 block mb-1">
                {lang === 'km' ? 'កូដ Prompt (XML Delimited Format)' : 'XML Delimited Master Prompt Code:'}
              </label>
              <textarea
                value={newXml}
                onChange={(e) => setNewXml(e.target.value)}
                rows={3}
                placeholder="<system_role>...</system_role>\n<context>...</context>"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-xs font-mono text-slate-100 placeholder-slate-500 focus:outline-none focus:border-purple-500"
              />
            </div>

            <button
              onClick={handleAddTemplate}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 flex items-center gap-1.5"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>{lang === 'km' ? 'បន្ថែមចូលបញ្ជី' : 'Add Template'}</span>
            </button>
          </div>
        )}

        {/* FINAL SUBMIT BUTTON */}
        {!submitted && (
          <div className="pt-4 text-center">
            <button
              onClick={handleSubmitPortfolio}
              disabled={templates.length === 0}
              className="px-8 py-4 rounded-xl font-extrabold text-sm bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white shadow-xl shadow-purple-600/30 flex items-center justify-center gap-2 mx-auto"
            >
              <Send className="w-4 h-4" />
              <span>
                {lang === 'km'
                  ? 'បញ្ជូន Capstone Portfolio & ទទួលវិញ្ញាបនប័ត្រ'
                  : 'Submit Capstone Portfolio & Claim Flagship Certification'}
              </span>
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

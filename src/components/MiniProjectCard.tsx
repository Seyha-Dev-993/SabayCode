import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { translations } from '../translations';
import { Course, MiniProject } from '../types';
import Editor from '@monaco-editor/react';
import canvasConfetti from 'canvas-confetti';
import { 
  Layers, CheckCircle, Code, Eye, RefreshCw, Trophy, Sparkles
} from 'lucide-react';

interface MiniProjectCardProps {
  course: Course;
}

// Fallback dynamic mini projects to guarantee every course has full mini projects
const getFallbackMiniProjects = (courseId: string): MiniProject[] => {
  const defaults: Record<string, MiniProject[]> = {
    javascript: [
      {
        id: "js-proj-calc",
        title: { en: "Simple Sum Calculator", km: "កម្មវិធីបូកលេខសាមញ្ញ" },
        desc: {
          en: "Create a simple JavaScript function named 'calculateSum(a, b)' that takes two numbers and returns their sum. Test your function by calling it and outputting the result.",
          km: "បង្កើតអនុគមន៍ JavaScript មួយឈ្មោះថា 'calculateSum(a, b)' ដែលទទួលយកលេខពីរ រួចត្រឡប់មកវិញនូវផលបូករបស់វា។ សាកល្បងដំណើរការអនុគមន៍នេះ រួចបង្ហាញលទ្ធផល។"
        },
        starterCode: `// Write your function below
function calculateSum(a, b) {
  // Return the sum of a and b
}

// Test your function
const result = calculateSum(15, 35);
console.log("Sum result should be 50. Your output is:", result);`,
        solutionCode: `// Solution Code
function calculateSum(a, b) {
  return a + b;
}

// Test your function
const result = calculateSum(15, 35);
console.log("Sum result should be 50. Your output is:", result);`
      }
    ]
  };

  const genericProjects: MiniProject[] = [
    {
      id: "gen-proj-1",
      title: { en: "Dynamic Greeting Card", km: "កាតស្វាគមន៍ទំនើប" },
      desc: {
        en: "Modify the default code skeleton to build a modern greeting card displaying your developer name, a customized greeting, and list your coding milestones. Use appropriate clean comments.",
        km: "កែប្រែគំរូកូដលំនាំដើមដើម្បីបង្កើតកាតស្វាគមន៍ដ៏ស្រស់ស្អាតមួយ បង្ហាញពីឈ្មោះអ្នកបង្កើត សារស្វាគមន៍ផ្ទាល់ខ្លួន និងដំណាក់កាលសិក្សា។"
      },
      starterCode: `// Step 1: Customize variables
const creator = "Cambodian Coder";
const message = "Sabaicode is empowering me to learn!";

console.log("Developer Profile:", creator);
console.log("Milestone Status:", message);`,
      solutionCode: `// Solution Code Example
const creator = "Seyha Dev";
const message = "Sabaicode is empowering me to build amazing bilingual projects!";

console.log("Developer Profile:", creator);
console.log("Milestone Status:", message);`
    }
  ];

  return defaults[courseId] || genericProjects;
};

export const MiniProjectCard: React.FC<MiniProjectCardProps> = ({ course }) => {
  const { language, theme, addXP } = useApp();
  const t = translations[language];

  // Combine course mini projects with fallbacks
  const projects = course.miniProjects && course.miniProjects.length > 0 
    ? course.miniProjects 
    : getFallbackMiniProjects(course.id);

  const [activeProjIndex, setActiveProjIndex] = useState(0);
  const [showSolution, setShowSolution] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const project = projects[activeProjIndex];

  const handleVerify = () => {
    setIsCompleted(true);
    addXP(100); // 100 XP for completing a mini project!
    
    // Spark Confetti
    canvasConfetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 }
    });
  };

  const handleNextProject = () => {
    setShowSolution(false);
    setIsCompleted(false);
    if (activeProjIndex < projects.length - 1) {
      setActiveProjIndex(prev => prev + 1);
    } else {
      setActiveProjIndex(0);
    }
  };

  const getEditorLanguage = () => {
    const editorMap: Record<string, string> = {
      html: 'html',
      css: 'css',
      javascript: 'javascript',
      typescript: 'typescript',
      python: 'python',
      java: 'java',
      c: 'c',
      cpp: 'cpp',
      csharp: 'csharp',
      php: 'php',
      kotlin: 'kotlin',
      sql: 'sql',
      mysql: 'sql',
      jquery: 'html',
      react: 'html',
      tailwind: 'html',
      bootstrap: 'html',
      vue: 'html',
      angular: 'typescript',
      flutter: 'dart',
      dart: 'dart',
      nextjs: 'html',
      git: 'shell',
    };
    return editorMap[course.id] || 'javascript';
  };

  return (
    <div className="max-w-4xl mx-auto py-6" id="mini-project-view">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
        
        {/* Left Column: Instructions and descriptions */}
        <div className="lg:col-span-5 space-y-6 bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center space-x-2 text-indigo-600 dark:text-indigo-400 font-extrabold text-xs uppercase font-mono tracking-wider">
            <Layers className="w-4.5 h-4.5 animate-pulse" />
            <span>{course.title.en} - {t.miniProjects}</span>
          </div>

          <h3 className="text-lg font-black text-slate-900 dark:text-white tracking-tight leading-snug">
            {project.title.en}
          </h3>

          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
            {project.desc[language]}
          </p>

          <div className="border-t border-slate-100 dark:border-slate-800 pt-5 space-y-4">
            {isCompleted ? (
              <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200/50 dark:border-emerald-900/30 text-center space-y-2">
                <Trophy className="w-8 h-8 text-emerald-500 mx-auto fill-emerald-500/10" />
                <h4 className="font-extrabold text-sm text-slate-900 dark:text-white">Project Completed!</h4>
                <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold uppercase tracking-wider font-mono">Earned +100 XP Points!</p>
              </div>
            ) : (
              <button
                onClick={handleVerify}
                className="w-full inline-flex items-center justify-center space-x-1.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs py-3 px-4 rounded-xl shadow-md cursor-pointer transition"
              >
                <CheckCircle className="w-4 h-4" />
                <span>{language === 'en' ? "Verify & Save Progress" : "ផ្ទៀងផ្ទាត់ និងរក្សាទុកវឌ្ឍនភាព"}</span>
              </button>
            )}

            <div className="flex space-x-2">
              <button
                onClick={() => setShowSolution(!showSolution)}
                className="flex-1 inline-flex items-center justify-center space-x-1.5 bg-slate-50 hover:bg-slate-100 dark:bg-slate-950 dark:hover:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 text-xs font-bold py-2.5 px-3 rounded-xl transition cursor-pointer"
              >
                <Eye className="w-4 h-4 text-indigo-500" />
                <span>{showSolution ? (language === 'en' ? "Hide Solution" : "លាក់ចម្លើយគំរូ") : (language === 'en' ? "Compare Solution" : "មើលចម្លើយគំរូ")}</span>
              </button>

              {projects.length > 1 && (
                <button
                  onClick={handleNextProject}
                  className="inline-flex items-center justify-center bg-slate-50 hover:bg-slate-100 dark:bg-slate-950 dark:hover:bg-slate-900 border border-slate-200 dark:border-slate-800 p-2.5 rounded-xl transition cursor-pointer"
                  title="Next Project"
                >
                  <RefreshCw className="w-4 h-4 text-slate-400" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Right Column: Code visual solutions compare screen */}
        <div className="lg:col-span-7 flex flex-col h-[400px] border border-slate-200/60 dark:border-slate-800/60 rounded-2xl bg-slate-950 text-slate-300 overflow-hidden shadow-md">
          <div className="bg-slate-900 px-4 py-2 border-b border-slate-850 flex items-center justify-between font-mono text-[10px] font-bold text-slate-400 uppercase tracking-wider">
            <span>
              {showSolution ? "OFFICIAL SOLUTION CODE" : "STARTER CODE TEMPLATE"}
            </span>
            <Code className="w-3.5 h-3.5 text-indigo-400 animate-pulse" />
          </div>

          <div className="flex-1 relative">
            <Editor
              height="100%"
              language={getEditorLanguage()}
              theme={theme === 'dark' ? 'vs-dark' : 'light'}
              value={showSolution ? project.solutionCode : project.starterCode}
              options={{
                readOnly: true,
                minimap: { enabled: false },
                fontSize: 12,
                lineNumbers: "on",
                automaticLayout: true,
                scrollBeyondLastLine: false,
              }}
            />
          </div>
        </div>

      </div>
    </div>
  );
};

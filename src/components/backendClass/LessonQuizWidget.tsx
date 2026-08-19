import React, { useState, useEffect } from 'react';
import { HelpCircle, CheckCircle2, AlertTriangle, Sparkles, RefreshCw, Award, ArrowRight } from 'lucide-react';
import { BackendLesson } from '../../data/backendCoursesHubData';

interface LessonQuizWidgetProps {
  lesson: BackendLesson;
  courseId: string;
  lang: 'en' | 'km';
  isCompleted?: boolean;
  onMarkComplete?: () => void;
}

interface QuizItem {
  id: string;
  question: { en: string; km: string };
  options: Array<{
    id: string;
    text: { en: string; km: string };
    isCorrect: boolean;
  }>;
  explanation: { en: string; km: string };
}

export const LessonQuizWidget: React.FC<LessonQuizWidgetProps> = ({
  lesson,
  courseId,
  lang,
  isCompleted = false,
  onMarkComplete,
}) => {
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  // Reset quiz state whenever lesson changes
  useEffect(() => {
    setSelectedOptionId(null);
    setIsSubmitted(false);
    setIsCorrect(null);
  }, [lesson.id]);

  // Determine quiz question: use custom quizQuestions if provided, or generate high quality default
  const getQuizData = (): QuizItem => {
    if (lesson.quizQuestions && lesson.quizQuestions.length > 0) {
      return lesson.quizQuestions[0];
    }

    // Default practice question fallback if present
    if (lesson.practiceExercise) {
      return {
        id: `${lesson.id}-quiz`,
        question: lesson.practiceExercise.question,
        options: [
          {
            id: 'opt-a',
            text: {
              en: lesson.practiceExercise.solution,
              km: lesson.practiceExercise.solution,
            },
            isCorrect: true,
          },
          {
            id: 'opt-b',
            text: {
              en: `// Alternative unoptimized approach without ${lesson.starterCode.language}`,
              km: `// វិធីសាស្ត្រផ្សេងដែលមិនមានប្រសិទ្ធភាព`,
            },
            isCorrect: false,
          },
          {
            id: 'opt-c',
            text: {
              en: `// Syntax error: Missing backend parameter or route definition`,
              km: `// កូដមានកំហុស Syntax៖ ខ្វះ Parameter ឬ Route`,
            },
            isCorrect: false,
          },
          {
            id: 'opt-d',
            text: {
              en: `// Client-side HTML tag instead of backend code`,
              km: `// កូដ HTML ខាង Client បែបសាមញ្ញ`,
            },
            isCorrect: false,
          },
        ],
        explanation: {
          en: `Correct! The solution "${lesson.practiceExercise.solution}" accurately solves the lesson challenge.`,
          km: `ត្រឹមត្រូវ! ចម្លើយ "${lesson.practiceExercise.solution}" គឺជាដំណោះស្រាយត្រឹមត្រូវសម្រាប់មេរៀននេះ។`,
        },
      };
    }

    // Domain specific quiz generation based on courseId / starterCode language
    const langLower = (lesson.starterCode?.language || courseId).toLowerCase();

    if (langLower.includes('sql') || courseId.includes('sql') || courseId.includes('database')) {
      return {
        id: `${lesson.id}-quiz-sql`,
        question: {
          en: `In SQL & Database design, what is the main purpose of the query in "${lesson.title.en}"?`,
          km: `ក្នុង SQL & Database Design តើគោលបំណងចម្បងនៃ Query ក្នុងមេរៀន "${lesson.title.km}" គឺអ្វី?`,
        },
        options: [
          {
            id: 'a',
            text: {
              en: 'Query, filter, or manipulate structured relational records efficiently on the database server.',
              km: 'ទាញយក ចម្រាញ់ ឬកែប្រែទិន្នន័យ Relational Records លើ Database Server ដោយមានប្រសិទ្ធភាព។',
            },
            isCorrect: true,
          },
          {
            id: 'b',
            text: {
              en: 'Style CSS layout colors directly on the browser screen.',
              km: 'កំណត់ពណ៌ និង Styling CSS នៅលើអេក្រង់ Browser។',
            },
            isCorrect: false,
          },
          {
            id: 'c',
            text: {
              en: 'Compile native binary firmware for microcontroller chips.',
              km: 'បម្លែងកូដទៅជា Firmware សម្រាប់ Microcontroller Chips។',
            },
            isCorrect: false,
          },
          {
            id: 'd',
            text: {
              en: 'Store transient browser session cookies on the client device.',
              km: 'រក្សាទុក Session Cookies លើ Device របស់ Client។',
            },
            isCorrect: false,
          },
        ],
        explanation: {
          en: 'SQL is the standard query language engineered specifically to query, filter, and structure data within relational databases.',
          km: 'SQL គឺជាភាសាស្តង់ដារដែលត្រូវបានបង្កើតឡើងយ៉ាងពិសេសសម្រាប់ទាញយក ចម្រាញ់ និងរៀបចំទិន្នន័យក្នុង Relational Database។',
        },
      };
    }

    if (langLower.includes('php') || langLower.includes('laravel') || courseId.includes('php') || courseId.includes('laravel')) {
      return {
        id: `${lesson.id}-quiz-php`,
        question: {
          en: `How does the PHP / Laravel code pattern in "${lesson.title.en}" function on the server?`,
          km: `តើកូដ PHP / Laravel ក្នុងមេរៀន "${lesson.title.km}" ដំណើរការយ៉ាងដូចម្តេចលើ Server?`,
        },
        options: [
          {
            id: 'a',
            text: {
              en: 'Executes server-side controller, route logic, or database operations before returning a response.',
              km: 'ប្រតិបត្តិការ Server-side Controller, Route Logic ឬ Database Operations មុនពេលបញ្ជូន Response។',
            },
            isCorrect: true,
          },
          {
            id: 'b',
            text: {
              en: 'Runs exclusively inside the user client browser DOM tree.',
              km: 'ដំណើរការតែក្នុង DOM Tree របស់ Client Browser ប៉ុណ្ណោះ។',
            },
            isCorrect: false,
          },
          {
            id: 'c',
            text: {
              en: 'Formats client-side CSS flexbox elements.',
              km: 'រៀបចំ Layout CSS Flexbox នៅខាង Client។',
            },
            isCorrect: false,
          },
          {
            id: 'd',
            text: {
              en: 'Generates mobile Bluetooth wireless connections.',
              km: 'បង្កើតការភ្ជាប់ Bluetooth លើទូរស័ព្ទដៃ។',
            },
            isCorrect: false,
          },
        ],
        explanation: {
          en: 'PHP and Laravel process business logic, database models, and response payloads entirely on the backend server.',
          km: 'PHP និង Laravel ដំណើរការ Business Logic, Database Models និង Response Payloads ទាំងអស់នៅលើ Backend Server។',
        },
      };
    }

    if (langLower.includes('python') || langLower.includes('django') || courseId.includes('python') || courseId.includes('django')) {
      return {
        id: `${lesson.id}-quiz-python`,
        question: {
          en: `What is the core principle demonstrated in this Python / Django lesson "${lesson.title.en}"?`,
          km: `តើគោលការណ៍គ្រឹះអ្វីដែលត្រូវបានបង្ហាញក្នុងមេរៀន Python / Django "${lesson.title.km}" នេះ?`,
        },
        options: [
          {
            id: 'a',
            text: {
              en: 'Utilizing clean Python backend models, views, or functions to handle data & logic.',
              km: 'ប្រើប្រាស់ Python Backend Models, Views ឬ Functions សម្រាប់គ្រប់គ្រងទិន្នន័យ និង Logic។',
            },
            isCorrect: true,
          },
          {
            id: 'b',
            text: {
              en: 'Building mobile iOS Swift UI view controllers.',
              km: 'បង្កើត Mobile iOS Swift UI View Controllers។',
            },
            isCorrect: false,
          },
          {
            id: 'c',
            text: {
              en: 'Creating raster image assets inside Photoshop.',
              km: 'រចនាប្រភេទទិន្នន័យរូបភាពក្នុង Photoshop។',
            },
            isCorrect: false,
          },
          {
            id: 'd',
            text: {
              en: 'Compiling C++ GPU shaders for 3D games.',
              km: 'បម្លែង C++ Graphics Shaders សម្រាប់ 3D Games។',
            },
            isCorrect: false,
          },
        ],
        explanation: {
          en: 'Python and Django emphasize clear, readable code structure for handling server data processing and routing.',
          km: 'Python និង Django ផ្តោតលើរចនាសម្ព័ន្ធកូដច្បាស់លាស់សម្រាប់រៀបចំការទាញយកទិន្នន័យ និង Routing លើ Server។',
        },
      };
    }

    if (langLower.includes('java') || langLower.includes('spring') || courseId.includes('java') || courseId.includes('spring')) {
      return {
        id: `${lesson.id}-quiz-java`,
        question: {
          en: `In enterprise Java / Spring Boot architecture, what is the role of the concept in "${lesson.title.en}"?`,
          km: `ក្នុងស្ថាបត្យកម្ម Java / Spring Boot តើតួនាទីនៃមេរៀន "${lesson.title.km}" គឺអ្វី?`,
        },
        options: [
          {
            id: 'a',
            text: {
              en: 'Delivering robust, strongly typed, enterprise-grade REST APIs or backend services.',
              km: 'ផ្តល់នូវ REST APIs ឬ Backend Services ដែលមានសុវត្ថិភាពខ្ពស់ និង Strongly Typed សម្រាប់ប្រព័ន្ធធំៗ។',
            },
            isCorrect: true,
          },
          {
            id: 'b',
            text: {
              en: 'Animating client-side HTML canvas buttons.',
              km: 'ធ្វើចលនា Button នៅលើ HTML Canvas ខាង Client។',
            },
            isCorrect: false,
          },
          {
            id: 'c',
            text: {
              en: 'Parsing client browser local storage strings.',
              km: 'បម្លែង String ក្នុង Local Storage របស់ Browser។',
            },
            isCorrect: false,
          },
          {
            id: 'd',
            text: {
              en: 'Rendering SVG vector icons in client browsers.',
              km: 'បង្ហាញរូបភាព SVG Vector Icons លើ Browser។',
            },
            isCorrect: false,
          },
        ],
        explanation: {
          en: 'Java and Spring Boot provide strongly typed, enterprise-grade backend infrastructure for high-scale microservices.',
          km: 'Java និង Spring Boot ផ្តល់នូវហេដ្ឋារចនាសម្ព័ន្ធ Backend កម្រិត Enterprise សម្រាប់ Microservices ទ្រង់ទ្រាយធំ។',
        },
      };
    }

    // Default Node / Express / Backend General Question
    return {
      id: `${lesson.id}-quiz-general`,
      question: {
        en: `In backend software architecture, what key lesson insight is highlighted in "${lesson.title.en}"?`,
        km: `ក្នុងស្ថាបត្យកម្ម Backend Software តើចំណុចសំខាន់អ្វីដែលត្រូវបានរៀបរាប់ក្នុងមេរៀន "${lesson.title.km}"?`,
      },
      options: [
        {
          id: 'a',
          text: {
            en: 'Structuring server routes, APIs, data handlers, or security middleware correctly.',
            km: 'ការរៀបចំរចនាសម្ព័ន្ធ Server Routes, APIs, Data Handlers ឬ Security Middleware ឲ្យបានត្រឹមត្រូវ។',
          },
          isCorrect: true,
        },
        {
          id: 'b',
          text: {
            en: 'Designing front-end UI animations and hover states.',
            km: 'ការរចនា UI Animations និង Hover States នៅខាង Front-end។',
          },
          isCorrect: false,
        },
        {
          id: 'c',
          text: {
            en: 'Managing physical hardware cables in data centers.',
            km: 'ការគ្រប់គ្រងខ្សែ Hardware ក្នុង Data Center។',
          },
          isCorrect: false,
        },
        {
          id: 'd',
          text: {
            en: 'Editing audio frequencies for sound effects.',
            km: 'ការកែសម្រួលប្រេកង់សំឡេង Sound Effects។',
          },
          isCorrect: false,
        },
      ],
      explanation: {
        en: 'Backend engineering centers on reliable data processing, server architecture, endpoint routing, and system security.',
        km: 'វិស្វកម្ម Backend ផ្តោតសំខាន់លើការរៀបចំទិន្នន័យប្រកបដោយទំនុកចិត្ត ស្ថាបត្យកម្ម Server, Endpoint Routing និងសុវត្ថិភាពប្រព័ន្ធ។',
      },
    };
  };

  const currentQuiz = getQuizData();

  const handleSubmit = () => {
    if (!selectedOptionId) return;
    const chosen = currentQuiz.options.find(o => o.id === selectedOptionId);
    const correct = chosen?.isCorrect || false;
    setIsCorrect(correct);
    setIsSubmitted(true);

    if (correct && onMarkComplete && !isCompleted) {
      onMarkComplete();
    }
  };

  const handleReset = () => {
    setSelectedOptionId(null);
    setIsSubmitted(false);
    setIsCorrect(null);
  };

  return (
    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/90 p-5 sm:p-6 space-y-4 shadow-md my-6 transition-all">
      {/* Quiz Header Bar */}
      <div className="flex items-center justify-between gap-3 border-b border-slate-200 dark:border-slate-800 pb-3">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-blue-600/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
            <HelpCircle className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-xs sm:text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider font-mono flex items-center gap-2">
              <span>{lang === 'km' ? 'លំហាត់តេស្តការយល់ដឹង (Lesson Knowledge Check)' : 'Lesson Knowledge Check & Quiz'}</span>
            </h3>
            <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400">
              {lang === 'km' ? 'តេស្តសមត្ថភាពក្រោយពីរៀនមេរៀននេះ' : 'Verify your understanding of this lesson'}
            </span>
          </div>
        </div>

        <span className="px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-[10px] font-mono font-bold border border-blue-500/20 shrink-0">
          Question 1 of 1
        </span>
      </div>

      {/* Question Text */}
      <div className="space-y-1">
        <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100 leading-relaxed font-sans">
          {currentQuiz.question[lang]}
        </p>
      </div>

      {/* Options List */}
      <div className="space-y-2 pt-1">
        {currentQuiz.options.map((option, optIndex) => {
          const isSelected = selectedOptionId === option.id;
          let optionStyle = 'bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 text-slate-800 dark:text-slate-200';

          if (isSubmitted) {
            if (option.isCorrect) {
              optionStyle = 'bg-emerald-500/15 border-emerald-500 text-emerald-900 dark:text-emerald-200 font-bold';
            } else if (isSelected && !option.isCorrect) {
              optionStyle = 'bg-rose-500/15 border-rose-500 text-rose-900 dark:text-rose-200';
            }
          } else if (isSelected) {
            optionStyle = 'bg-blue-600/10 border-blue-500 text-blue-900 dark:text-blue-300 font-bold ring-1 ring-blue-500/50';
          }

          const displayLabel = String.fromCharCode(65 + optIndex);

          return (
            <button
              key={option.id}
              disabled={isSubmitted}
              onClick={() => setSelectedOptionId(option.id)}
              className={`w-full p-3.5 rounded-xl border text-left text-xs sm:text-sm transition-all flex items-start gap-3 cursor-pointer disabled:cursor-default ${optionStyle}`}
            >
              <div className={`w-6 h-6 rounded-full border text-[11px] font-mono font-bold flex items-center justify-center shrink-0 mt-0.5 select-none ${
                isSelected 
                  ? 'bg-blue-600 border-blue-600 text-white' 
                  : 'border-slate-300 dark:border-slate-700 text-slate-500'
              }`}>
                {displayLabel}
              </div>

              <span className="leading-snug flex-1">
                {option.text[lang]}
              </span>
            </button>
          );
        })}
      </div>

      {/* Action Row */}
      {!isSubmitted ? (
        <div className="pt-2 flex items-center justify-between gap-3">
          <span className="text-[11px] font-mono text-slate-400">
            {lang === 'km' ? 'ជ្រើសរើសចម្លើយត្រឹមត្រូវ រួចចុច "ផ្ទៀងផ្ទាត់ចម្លើយ"' : 'Select an answer above and click Submit'}
          </span>

          <button
            disabled={!selectedOptionId}
            onClick={handleSubmit}
            className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 active:scale-95 disabled:opacity-40 disabled:scale-100 text-white font-mono text-xs font-bold shadow-md transition flex items-center gap-1.5 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{lang === 'km' ? 'ផ្ទៀងផ្ទាត់ចម្លើយ' : 'Submit Answer'}</span>
          </button>
        </div>
      ) : (
        <div className="space-y-3 pt-2">
          {/* Result Alert Box */}
          <div className={`p-4 rounded-xl border flex items-start gap-3 text-xs sm:text-sm ${
            isCorrect 
              ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-900 dark:text-emerald-200' 
              : 'bg-rose-500/10 border-rose-500/30 text-rose-900 dark:text-rose-200'
          }`}>
            {isCorrect ? (
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
            ) : (
              <AlertTriangle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
            )}

            <div className="space-y-1 flex-1">
              <span className="font-mono font-black uppercase tracking-wide block">
                {isCorrect 
                  ? (lang === 'km' ? '🎉 ត្រឹមត្រូវប្រាកដមែន! (Correct Answer!)' : '🎉 Excellent! Correct Answer!') 
                  : (lang === 'km' ? '❌ មិនទាន់ត្រឹមត្រូវទេ (Incorrect)' : '❌ Incorrect Answer')}
              </span>
              <p className="leading-relaxed opacity-90 text-xs">
                {currentQuiz.explanation[lang]}
              </p>
            </div>
          </div>

          {/* Post Submission Buttons */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
            <button
              onClick={handleReset}
              className="px-3.5 py-1.5 rounded-xl bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-mono text-xs font-bold transition flex items-center gap-1.5 cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>{lang === 'km' ? 'សាកល្បងឡើងវិញ' : 'Try Again'}</span>
            </button>

            {isCorrect && onMarkComplete && (
              <button
                onClick={onMarkComplete}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-black transition flex items-center gap-2 shadow-md cursor-pointer ${
                  isCompleted 
                    ? 'bg-emerald-600 text-white' 
                    : 'bg-emerald-600 hover:bg-emerald-500 text-white active:scale-95'
                }`}
              >
                <Award className="w-4 h-4" />
                <span>
                  {isCompleted 
                    ? (lang === 'km' ? '✓ បានបញ្ចប់មេរៀននេះហើយ' : '✓ Lesson Marked Complete') 
                    : (lang === 'km' ? 'សញ្ញាសម្គាល់បញ្ចប់មេរៀន (Mark Complete)' : 'Mark Lesson as Completed')}
                </span>
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

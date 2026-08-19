import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { translations } from '../translations';
import { Course, Quiz } from '../types';
import canvasConfetti from 'canvas-confetti';
import { 
  HelpCircle, CheckCircle, XCircle, Award, Trophy, RotateCcw, ArrowRight 
} from 'lucide-react';
import { CertificateModal } from './CertificateModal';

interface QuizCardProps {
  course: Course;
}

// Fallback dynamic quiz generator if the course quizzes array is blank to guarantee every language has a full functional quiz
const getFallbackQuizzes = (courseId: string): Quiz[] => {
  const defaults: Record<string, Quiz[]> = {
    javascript: [
      {
        id: "js-f1",
        question: { en: "Which statement is used to declare a constant variable in JavaScript?", km: "តើពាក្យបញ្ជាមួយណាប្រើដើម្បីប្រកាសអថេរថេរនៅក្នុង JavaScript?" },
        options: {
          en: ["let", "var", "const", "def"],
          km: ["let", "var", "const", "def"]
        },
        correctIndex: 2,
        explanation: {
          en: "const declares a block-scoped variable whose value cannot be reassigned.",
          km: "const ប្រើសម្រាប់ប្រកាសអថេរថេរដែលមិនអាចផ្លាស់ប្តូរតម្លៃ ឬប្រគល់តម្លៃថ្មីបានឡើយ។"
        }
      },
      {
        id: "js-f2",
        question: { en: "How do you write a comment in JavaScript?", km: "តើអ្នកសរសេរមតិយោបល់ (Comment) ក្នុង JavaScript ដោយរបៀបណា?" },
        options: {
          en: ["// comment", "<!-- comment -->", "/* comment", "# comment"],
          km: ["// comment", "<!-- comment -->", "/* comment", "# comment"]
        },
        correctIndex: 0,
        explanation: {
          en: "// is used for single-line comments in JavaScript.",
          km: "សញ្ញា // ត្រូវបានប្រើសម្រាប់សរសេរមតិយោបល់ទោលតែមួយបន្ទាត់ក្នុង JavaScript។"
        }
      }
    ],
    typescript: [
      {
        id: "ts-f1",
        question: { en: "What does TypeScript do?", km: "តើ TypeScript ជួយធ្វើអ្វីខ្លះ?" },
        options: {
          en: ["Adds static typing to JS", "Runs on browsers directly", "Replaces standard JS engine", "Compiles directly to binary"],
          km: ["បន្ថែមការកំណត់ប្រភេទ جامد ដល់ JS", "ដំណើរការលើ Browser ដោយផ្ទាល់", "ជំនួសម៉ាស៊ីន JS ធម្មតា", "បកប្រែផ្ទាល់ទៅជាកូដម៉ាស៊ីន (Binary)"]
        },
        correctIndex: 0,
        explanation: {
          en: "TypeScript adds static typing to JavaScript to prevent compile-time bugs.",
          km: "TypeScript បន្ថែមប្រភេទ جامد (Static typing) ដល់ JavaScript ដើម្បីការពារកំហុសឆ្គងកូដក្នុងពេល compile។"
        }
      }
    ],
    python: [
      {
        id: "py-f1",
        question: { en: "How do you define a function in Python?", km: "តើអ្នកកំណត់បង្កើតអនុគមន៍ (Function) ក្នុង Python យ៉ាងដូចម្តេច?" },
        options: {
          en: ["function name():", "def name():", "fun name():", "void name()"],
          km: ["function name():", "def name():", "fun name():", "void name()"]
        },
        correctIndex: 1,
        explanation: {
          en: "The 'def' keyword is used to declare a function in Python.",
          km: "ពាក្យគន្លឹះ 'def' ត្រូវបានប្រើដើម្បីកំណត់បង្កើតអនុគមន៍ (Function) ក្នុង Python។"
        }
      }
    ]
  };

  const genericQuizzes: Quiz[] = [
    {
      id: "gen-q1",
      question: { en: "What is the primary purpose of this coding language?", km: "តើគោលបំណងចម្បងនៃភាសាសរសេរកូដមួយនេះជាអ្វី?" },
      options: {
        en: ["Building structured applications", "Operating hardware directly", "Parsing local database tables", "Running visual styles only"],
        km: ["ការកសាងកម្មវិធីដែលមានរចនាសម្ព័ន្ធ", "បញ្ជាឧបករណ៍ Hardware ដោយផ្ទាល់", "វិភាគតារាងមូលដ្ឋានទិន្នន័យ", "ដំណើរការស្បែកបង្ហាញកូដតែប៉ុណ្ណោះ"]
      },
      correctIndex: 0,
      explanation: {
        en: "Every programming language has core syntax rules to structure instructions.",
        km: "ភាសាសរសេរកូដនីមួយៗមានសំណុំច្បាប់រចនាសម្ព័ន្ធផ្ទាល់ខ្លួន ដើម្បីបង្កើតសេចក្តីណែនាំបញ្ជា។"
      }
    },
    {
      id: "gen-q2",
      question: { en: "Why is structured documentation and coding reference critical for developers?", km: "ហេតុអ្វីការអានឯកសារណែនាំ និងសន្លឹកជំនួយមានសារៈសំខាន់ខ្លាំងសម្រាប់អ្នកអភិវឌ្ឍន៍?" },
      options: {
        en: ["Speeds up workflow and prevents logic errors", "Avoids compilation requirements", "Ensures zero internet usage", "Deletes redundant backup files"],
        km: ["ជួយបង្កើនល្បឿនការងារ និងការពារបញ្ហាកូដ", "ជៀសវាងការ Compile កូដ", "ធានាថាគ្មានការប្រើប្រាស់អ៊ីនធឺណិត", "លុបឯកសារចម្លងដែលលើស"]
      },
      correctIndex: 0,
      explanation: {
        en: "Good references speed up lookups and optimize application architecture.",
        km: "សន្លឹកជំនួយរហ័សជួយសម្រួលការស្វែងរកពាក្យបញ្ជាកូដ និងបង្កើនប្រសិទ្ធភាពកម្មវិធី។"
      }
    }
  ];

  return defaults[courseId] || genericQuizzes;
};

export const QuizCard: React.FC<QuizCardProps> = ({ course }) => {
  const { language, setQuizScore } = useApp();
  const t = translations[language];

  // Combine course quizzes with fallbacks
  const quizzes = course.quizzes.length > 0 ? course.quizzes : getFallbackQuizzes(course.id);

  // States
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [isCertOpen, setIsCertOpen] = useState(false);

  const activeQuiz = quizzes[currentIndex];

  useEffect(() => {
    // Reset state on course changes
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsSubmitted(false);
    setScore(0);
    setQuizFinished(false);
  }, [course.id]);

  const handleSubmit = () => {
    if (selectedOption === null || isSubmitted) return;

    setIsSubmitted(true);
    const isCorrect = selectedOption === activeQuiz.correctIndex;
    if (isCorrect) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    setSelectedOption(null);
    setIsSubmitted(false);

    if (currentIndex < quizzes.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      // Calculate final score percentage
      const finalPercentage = Math.round((score / quizzes.length) * 100);
      setQuizScore(course.id, `course-quiz-${course.id}`, finalPercentage);
      setQuizFinished(true);

      // Spark Confetti for nice scores
      if (finalPercentage >= 70) {
        canvasConfetti({
          particleCount: 150,
          spread: 80,
          colors: ['#3b82f6', '#a855f7', '#ec4899']
        });
      }
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsSubmitted(false);
    setScore(0);
    setQuizFinished(false);
  };

  return (
    <div className="max-w-xl mx-auto py-8 text-left" id="quiz-card-container">
      {!quizFinished ? (
        <div className="bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 rounded-2xl p-6 sm:p-8 shadow-md">
          {/* Quiz count specs */}
          <div className="flex items-center justify-between text-xs font-bold text-slate-400 font-mono uppercase tracking-wider mb-6">
            <span className="flex items-center space-x-1">
              <HelpCircle className="w-4 h-4 text-blue-500" />
              <span>{course.title.en} {t.quiz}</span>
            </span>
            <span>Question {currentIndex + 1} of {quizzes.length}</span>
          </div>

          {/* Question Text */}
          <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-relaxed mb-6 font-sans">
            {activeQuiz.question[language]}
          </h3>

          {/* Answer Options Grid */}
          <div className="space-y-3 mb-6">
            {activeQuiz.options[language].map((option, i) => {
              const isSelected = selectedOption === i;
              
              let optionStyle = "border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-900 hover:bg-slate-50 dark:hover:bg-slate-900/40 text-slate-700 dark:text-slate-300";
              if (isSelected && !isSubmitted) {
                optionStyle = "border-blue-500 dark:border-blue-500 bg-blue-50/50 dark:bg-blue-950/20 text-blue-600 dark:text-blue-400 font-bold";
              } else if (isSubmitted) {
                if (i === activeQuiz.correctIndex) {
                  optionStyle = "border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-400 font-bold";
                } else if (isSelected) {
                  optionStyle = "border-rose-500 bg-rose-50/50 dark:bg-rose-950/20 text-rose-600 dark:text-rose-400 font-bold";
                } else {
                  optionStyle = "border-slate-100 dark:border-slate-900 opacity-60 text-slate-400";
                }
              }

              return (
                <button
                  key={i}
                  disabled={isSubmitted}
                  onClick={() => setSelectedOption(i)}
                  className={`w-full text-left p-4 rounded-xl border-2 text-sm transition-all duration-150 flex items-center justify-between cursor-pointer ${optionStyle}`}
                >
                  <span>{option}</span>
                  {isSubmitted && i === activeQuiz.correctIndex && (
                    <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
                  )}
                  {isSubmitted && isSelected && i !== activeQuiz.correctIndex && (
                    <XCircle className="w-5 h-5 text-rose-500 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Feedback Explanation Sheet */}
          {isSubmitted && (
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/50 border border-slate-200/50 dark:border-slate-800/50 mb-6 animate-fade-in text-left">
              <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-blue-500 mb-1">
                {t.explanation}
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-normal font-sans">
                {activeQuiz.explanation[language]}
              </p>
            </div>
          )}

          {/* Actions Bottom Buttons */}
          <div className="flex justify-end pt-2">
            {!isSubmitted ? (
              <button
                onClick={handleSubmit}
                disabled={selectedOption === null}
                className="inline-flex items-center justify-center space-x-1 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-200 dark:disabled:bg-slate-800 disabled:text-slate-400 text-white font-bold text-xs px-6 py-3 rounded-xl shadow-md cursor-pointer transition"
              >
                <span>{t.submitAnswer}</span>
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="inline-flex items-center justify-center space-x-1 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-6 py-3 rounded-xl shadow-md cursor-pointer transition"
              >
                <span>{currentIndex === quizzes.length - 1 ? (language === 'en' ? "Finish" : "មើលលទ្ធផល") : (language === 'en' ? "Next Question" : "សំណួរបន្ទាប់")}</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </button>
            )}
          </div>
        </div>
      ) : (
        /* Final Score Board card panel */
        <div className="bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 rounded-2xl p-8 text-center shadow-lg animate-fade-in">
          <div className="w-16 h-16 bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-blue-100 dark:border-blue-900/30">
            <Trophy className="w-8 h-8" />
          </div>

          <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight mb-2">
            {t.congratulations}
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 font-sans max-w-xs mx-auto mb-6">
            {language === 'en' 
              ? "You have completed the structural quiz for this course! Let's check your performance score." 
              : "អ្នកបានបញ្ចប់កម្រងសំណួរស្ដង់ដារសម្រាប់វគ្គសិក្សានេះហើយ! មកមើលពិន្ទុរបស់អ្នកទាំងអស់គ្នា។"}
          </p>

          {/* Score Counter Visual */}
          <div className="bg-slate-50 dark:bg-slate-950/40 rounded-2xl p-5 border border-slate-200/50 dark:border-slate-800/50 max-w-xs mx-auto mb-8">
            <div className="text-sm font-semibold text-slate-400 font-mono uppercase tracking-wider mb-1">
              {t.score}
            </div>
            <div className="text-4xl font-extrabold text-blue-600 dark:text-blue-400 font-mono">
              {score} / {quizzes.length}
            </div>
            <div className="text-[10px] font-bold font-mono text-emerald-500 uppercase tracking-wider mt-2">
              Earned {score * 15} XP Points!
            </div>
          </div>

          {/* Actions CTA */}
          <div className="flex justify-center space-x-3">
            <button
              onClick={handleRestart}
              className="inline-flex items-center justify-center space-x-1 px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold transition cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5 mr-1" />
              <span>{language === 'en' ? "Retry Quiz" : "សាកល្បងឡើងវិញ"}</span>
            </button>
            
            {score / quizzes.length >= 0.7 && (
              <button
                onClick={() => setIsCertOpen(true)}
                className="inline-flex items-center justify-center space-x-1.5 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition shadow-md cursor-pointer"
              >
                <Award className="w-4 h-4" />
                <span>{language === 'en' ? "Claim Certificate" : "ទាញយកវិញ្ញាបនបត្រ"}</span>
              </button>
            )}
          </div>

          <CertificateModal 
            courseTitle={course.title.en} 
            isOpen={isCertOpen} 
            onClose={() => setIsCertOpen(false)} 
          />
        </div>
      )}
    </div>
  );
};

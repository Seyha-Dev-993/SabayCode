import React from 'react';
import { useApp } from '../context/AppContext';
import { translations } from '../translations';
import { coursesData } from '../data/coursesData';
import { ArrowRight, Terminal, Sparkles, BookOpenCheck, ShieldCheck, Zap } from 'lucide-react';
import { TechMarquee } from './TechMarquee';

interface HeroProps {
  setCurrentView: (view: 'home' | 'courses' | 'playground' | 'reference' | 'profile' | 'lesson') => void;
  onSelectCourse?: (courseId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ setCurrentView, onSelectCourse }) => {
  const { language } = useApp();
  const t = translations[language];

  return (
    <section className="relative overflow-hidden py-12 md:py-20 lg:py-24" id="hero-section">
      {/* Background Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 w-96 h-96 bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 -z-10 w-[30rem] h-[30rem] bg-sky-500/5 dark:bg-sky-600/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Content Centered */}
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-6">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/50 border border-blue-100 dark:border-blue-900/30 text-xs font-semibold text-blue-600 dark:text-blue-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>
              {language === 'en' 
                ? "100% Free Interactive Learning" 
                : "ការរៀនភាសាកូដដោយឥតគិតថ្លៃ ១០០%"}
            </span>
          </div>

          <h1 className="text-2xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight max-w-3xl">
            {language === 'en' ? (
              <>
                <span className="text-slate-900 dark:text-white">
                  Start learning to code with SabayCode — where language is no barrier
                </span>
                <br />
                <span className="text-blue-600 dark:text-blue-400">
                  Khmer and English Language
                </span>
              </>
            ) : (
              <>
                <span className="text-slate-900 dark:text-white">
                  ចាប់ផ្តើមរៀនកូដជាមួយ SabayCode ដោយភាសាមិនមែនជាឧបសគ្គ
                </span>
                <br />
                <span className="text-blue-600 dark:text-blue-400">
                  ភាសា ខ្មែរ និង ភាសា អង់គ្លេស
                </span>
              </>
            )}
          </h1>

          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed font-sans">
            {t.appSlogan} {language === 'en' 
              ? "Gain industry-ready skills with structural lessons matching standard documentation, paired with a full-screen code workspace and real-time outputs." 
              : "ទទួលបានជំនាញកូដកម្រិតស្ដង់ដារតាមរយៈមេរៀនលម្អិត ភ្ជាប់ជាមួយឧបករណ៍សាកល្បងកូដដ៏ទំនើប និងលទ្ធផលដំណើរការភ្លាមៗ។"}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 w-full sm:w-auto">
            <button
              onClick={() => setCurrentView('courses')}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-7 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30 transition-all duration-200 cursor-pointer"
            >
              <span>{t.startCourse}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => setCurrentView('playground')}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-7 py-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 font-bold hover:bg-slate-50 dark:hover:bg-slate-850 shadow-sm transition-all duration-200 cursor-pointer"
            >
              <span>{t.playground}</span>
              <Terminal className="w-4 h-4 text-blue-500" />
            </button>
          </div>
        </div>

        {/* Full-width Infinite Tech Marquee Section */}
        <TechMarquee onSelectCourse={onSelectCourse} />

        {/* Micro Badges / Stats Row */}
        <div className="pt-2 pb-4 max-w-xl mx-auto">
          <div className="grid grid-cols-3 gap-4 py-3.5 px-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-xs text-center">
            <div className="flex flex-col items-center">
              <span className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white font-mono">{coursesData.length}</span>
              <span className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium">
                {language === 'en' ? "Courses" : "វគ្គសិក្សា"}
              </span>
            </div>
            <div className="flex flex-col items-center border-x border-slate-200/80 dark:border-slate-800/80 px-2">
              <span className="text-xl sm:text-2xl font-extrabold text-blue-600 dark:text-blue-400 font-mono">100%</span>
              <span className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium">
                {language === 'en' ? "Bilingual" : "ទ្វេភាសា"}
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white font-mono">Real</span>
              <span className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium">
                {language === 'en' ? "Compilers" : "ម៉ាស៊ីនដំណើរការ"}
              </span>
            </div>
          </div>
        </div>


        {/* Feature Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mt-12 md:mt-20 border-t border-slate-200 dark:border-slate-900 pt-12 md:pt-16">
          <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-slate-900 flex space-x-4 items-start shadow-2xs">
            <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 shrink-0">
              <BookOpenCheck className="w-6 h-6" />
            </div>
            <div className="space-y-1 min-w-0">
              <h3 className="font-bold text-slate-900 dark:text-slate-100">
                {language === 'en' ? "Full Curriculum" : "មាតិកាសិក្សាពេញលេញ"}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-normal">
                {language === 'en' 
                  ? "Explore over 20 languages and modern frameworks from HTML/CSS to React, SQL, and C++." 
                  : "ស្វែងរកមេរៀនចំនួន២០+ ភាសាកូដ និងក្របខ័ណ្ឌការងារចាប់ពី HTML/CSS រហូតដល់ React, SQL, និង C++។"}
              </p>
            </div>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-slate-900 flex space-x-4 items-start shadow-2xs">
            <div className="p-3 rounded-xl bg-sky-50 dark:bg-sky-950/40 text-sky-600 dark:text-sky-400 shrink-0">
              <Zap className="w-6 h-6" />
            </div>
            <div className="space-y-1 min-w-0">
              <h3 className="font-bold text-slate-900 dark:text-slate-100">
                {language === 'en' ? "Immediate Compiler" : "ម៉ាស៊ីនចងក្រងភ្លាមៗ"}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-normal">
                {language === 'en' 
                  ? "Run code instantly inside your browser! Experience HTML/CSS iframe builders and real backend server compilers." 
                  : "ដំណើរការកូដភ្លាមៗក្នុងកម្មវិធីរុករករបស់អ្នក! ទទួលបានការឆ្លុះបញ្ចាំងលទ្ធផលរហ័សទាន់ចិត្ត និងត្រឹមត្រូវ។"}
              </p>
            </div>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-slate-900 flex space-x-4 items-start shadow-2xs sm:col-span-2 lg:col-span-1">
            <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="space-y-1 min-w-0">
              <h3 className="font-bold text-slate-900 dark:text-slate-100">
                {language === 'en' ? "Dual-Language UI" : "ចំណុចប្រទាក់ពីរភាសា"}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-normal">
                {language === 'en' 
                  ? "Read documentation, explanations, guidelines and solve quizzes seamlessly in Khmer or English." 
                  : "អានឯកសារពន្យល់ មេរៀន សេចក្តីណែនាំ និងឆ្លើយកម្រងសំណួរជាភាសាខ្មែរ ឬអង់គ្លេសដោយងាយស្រួល។"}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

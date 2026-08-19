import React from 'react';
import { Server, ArrowLeft, Sun, Moon, Globe, Code } from 'lucide-react';
import { useApp } from '../../context/AppContext';

interface BackendClassHeaderProps {
  onNavigateClasses: () => void;
}

export const BackendClassHeader: React.FC<BackendClassHeaderProps> = ({ onNavigateClasses }) => {
  const { language, setLanguage, theme, setTheme } = useApp();

  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo and title */}
        <div className="flex items-center space-x-3 cursor-pointer" onClick={onNavigateClasses}>
          <div className="p-2 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 text-white shadow-md shadow-emerald-500/20">
            <Server className="w-5 h-5" />
          </div>
          <div>
            <span className="font-extrabold text-base tracking-tight text-slate-900 dark:text-white flex items-center gap-1.5">
              <span>{language === 'en' ? 'Backend Engineering' : 'ថ្នាក់រៀន Backend Engineering'}</span>
              <span className="px-2 py-0.5 text-[10px] font-mono font-bold rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 uppercase">
                {language === 'en' ? 'Catalog' : 'កាតាឡុក'}
              </span>
            </span>
            <p className="text-[10px] text-slate-500 font-mono hidden sm:block">
              {language === 'en' ? 'PHP • Node.js • Python • Java • SQL • NoSQL • APIs' : 'PHP • Node.js • Python • Java • SQL • NoSQL • APIs'}
            </p>
          </div>
        </div>

        {/* Right side controls: Language toggle, theme toggle, back button */}
        <div className="flex items-center space-x-3">
          {/* Language Toggle */}
          <button
            onClick={() => setLanguage(language === 'en' ? 'km' : 'en')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-mono font-bold transition cursor-pointer border border-slate-200 dark:border-slate-700"
            title={language === 'en' ? 'Switch to Khmer' : 'ដូរទៅភាសាអង់គ្លេស'}
          >
            <Globe className="w-3.5 h-3.5 text-emerald-500" />
            <span>{language === 'en' ? 'ខ្មែរ (KM)' : 'English (EN)'}</span>
          </button>

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs transition cursor-pointer border border-slate-200 dark:border-slate-700"
            title={theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
          </button>

          {/* Return to classes portal */}
          <button
            onClick={onNavigateClasses}
            className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition cursor-pointer shadow-sm"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{language === 'en' ? 'All Classes' : 'ថ្នាក់ទាំងអស់'}</span>
          </button>
        </div>
      </div>
    </header>
  );
};

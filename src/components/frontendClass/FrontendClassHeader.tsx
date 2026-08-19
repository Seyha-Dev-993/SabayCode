import React from 'react';
import { Menu, Sun, Moon, ArrowLeft, Globe } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { SabayCodeLogo } from '../SabayCodeLogo';

interface FrontendClassHeaderProps {
  onToggleMobileSidebar?: () => void;
  onNavigateHome: () => void;
  onNavigateClasses: () => void;
}

export const FrontendClassHeader: React.FC<FrontendClassHeaderProps> = ({
  onToggleMobileSidebar,
  onNavigateHome,
  onNavigateClasses,
}) => {
  const { language, setLanguage, theme, setTheme } = useApp();

  return (
    <header className="h-16 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 px-4 sm:px-6 lg:px-8 flex items-center justify-between sticky top-0 z-30 text-slate-900 dark:text-slate-100 transition-colors shadow-2xs">
      <div className="flex items-center gap-3 min-w-0">
        {onToggleMobileSidebar && (
          <button
            onClick={onToggleMobileSidebar}
            className="lg:hidden p-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer shrink-0"
            title="Toggle Sidebar"
          >
            <Menu className="w-5 h-5" />
          </button>
        )}

        <button
          onClick={onNavigateClasses}
          className="flex items-center gap-3 group text-left focus:outline-none min-w-0 cursor-pointer"
        >
          <SabayCodeLogo size={36} showText={false} variant="icon-only" />
          <div className="min-w-0 flex flex-col justify-center">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-base sm:text-lg font-black tracking-tight text-slate-900 dark:text-white leading-none group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                SabayCode
              </span>
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 border border-indigo-200/80 dark:border-indigo-800/80 leading-none">
                Frontend Academy
              </span>
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 font-medium leading-tight mt-1 truncate">
              {language === 'km' ? 'ថ្នាក់រៀនឯករាជ្យ • Frontend Master' : 'Standalone Master Class'}
            </div>
          </div>
        </button>
      </div>

      <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
        {/* Language Switcher */}
        <button
          onClick={() => setLanguage(language === 'en' ? 'km' : 'en')}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/80 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs sm:text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:border-indigo-300 dark:hover:border-indigo-700 transition-all cursor-pointer"
        >
          <Globe className="w-4 h-4 text-indigo-500" />
          <span>{language === 'en' ? 'ខ្មែរ' : 'English'}</span>
        </button>

        {/* Theme Switcher */}
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="p-2 sm:p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/80 hover:bg-slate-100 dark:hover:bg-slate-800 text-amber-500 dark:text-amber-400 hover:border-slate-300 dark:hover:border-slate-700 transition-all cursor-pointer"
          title="Toggle Theme"
        >
          {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
        </button>
      </div>
    </header>
  );
};


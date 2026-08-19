import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { FrontendClassHeader } from './FrontendClassHeader';
import { FrontendHubView } from './FrontendHubView';

interface FrontendClassMainViewProps {
  initialLessonId?: string | null;
  onNavigateHome: () => void;
  onNavigateClasses: () => void;
}

export const FrontendClassMainView: React.FC<FrontendClassMainViewProps> = ({
  onNavigateHome,
  onNavigateClasses,
}) => {
  const { language } = useApp();

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 font-sans text-slate-900 dark:text-slate-100 transition-colors">
      <FrontendClassHeader
        onNavigateHome={onNavigateHome}
        onNavigateClasses={onNavigateClasses}
      />

      {/* Navigation Sub-Bar below Header */}
      <div className="border-b border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
          <button
            onClick={onNavigateClasses}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{language === 'en' ? 'Back to All Classes' : 'ត្រឡប់ទៅថ្នាក់រៀនទាំងអស់'}</span>
          </button>
        </div>
      </div>

      <main className="flex-1">
        <FrontendHubView />
      </main>
    </div>
  );
};

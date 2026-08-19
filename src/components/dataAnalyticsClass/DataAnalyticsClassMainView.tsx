import React, { useState, useEffect } from 'react';
import { DATA_ANALYTICS_MODULES, getAllDataAnalyticsLessons } from '../../data/dataAnalyticsClassData';
import {
  loadDataAnalyticsClassEnrollment,
  enrollInDataAnalyticsClass,
  completeDataAnalyticsLesson,
  submitDataAnalyticsCapstonePortfolio,
  updateLastVisitedDataAnalyticsLesson,
} from '../../utils/dataAnalyticsClassStorage';
import { DataAnalyticsClassHeader } from './DataAnalyticsClassHeader';
import { DataAnalyticsClassSidebar } from './DataAnalyticsClassSidebar';
import { DataAnalyticsClassOverview } from './DataAnalyticsClassOverview';
import { DataAnalyticsClassLessonView } from './DataAnalyticsClassLessonView';
import { DataAnalyticsClassCapstoneView } from './DataAnalyticsClassCapstoneView';
import { DataAnalyticsClassEnrollment } from '../../types/dataAnalyticsClass';

interface Props {
  initialLessonId?: string;
  onBackToClasses?: () => void;
  onNavigateClasses?: () => void;
  onNavigateHome?: () => void;
}

export const DataAnalyticsClassMainView: React.FC<Props> = ({
  initialLessonId,
  onBackToClasses,
  onNavigateClasses,
  onNavigateHome,
}) => {
  const [lang, setLang] = useState<'en' | 'km'>('km');
  const [enrollment, setEnrollment] = useState<DataAnalyticsClassEnrollment>(() =>
    loadDataAnalyticsClassEnrollment()
  );

  const allLessons = getAllDataAnalyticsLessons();

  const [currentLessonId, setCurrentLessonId] = useState<string>(() => {
    if (initialLessonId && allLessons.some((l) => l.id === initialLessonId)) {
      return initialLessonId;
    }
    return enrollment.lastVisitedLessonId || 'm1-l1';
  });

  const [viewMode, setViewMode] = useState<'overview' | 'lesson' | 'capstone'>(() => {
    if (initialLessonId) return 'lesson';
    return enrollment.enrolled ? 'lesson' : 'overview';
  });

  // Sync last visited lesson to storage whenever currentLessonId changes
  useEffect(() => {
    if (enrollment.enrolled && currentLessonId) {
      const updated = updateLastVisitedDataAnalyticsLesson(currentLessonId);
      setEnrollment(updated);
    }
  }, [currentLessonId, enrollment.enrolled]);

  const handleEnroll = () => {
    const updated = enrollInDataAnalyticsClass();
    setEnrollment(updated);
    setViewMode('lesson');
  };

  const handleCompleteLesson = (lessonId: string) => {
    const updated = completeDataAnalyticsLesson(lessonId);
    setEnrollment(updated);
  };

  const handleSubmitCapstone = (portfolio: any) => {
    const updated = submitDataAnalyticsCapstonePortfolio(portfolio);
    setEnrollment(updated);
  };

  const handleSelectLesson = (lessonId: string) => {
    if (lessonId === 'm12-l3' || lessonId === 'da-m12-l1' || lessonId === 'capstone') {
      setViewMode('capstone');
    } else {
      setCurrentLessonId(lessonId);
      setViewMode('lesson');
    }
  };

  const handleNavigateNextLesson = () => {
    const currentIndex = allLessons.findIndex((l) => l.id === currentLessonId);
    if (currentIndex >= 0 && currentIndex < allLessons.length - 1) {
      const nextLesson = allLessons[currentIndex + 1];
      if (nextLesson.id === 'm12-l3' || nextLesson.id === 'da-m12-l1' || nextLesson.id === 'capstone') {
        setViewMode('capstone');
      } else {
        setCurrentLessonId(nextLesson.id);
      }
    } else {
      setViewMode('capstone');
    }
  };

  const handleNavigatePrevLesson = () => {
    const currentIndex = allLessons.findIndex((l) => l.id === currentLessonId);
    if (currentIndex > 0) {
      setCurrentLessonId(allLessons[currentIndex - 1].id);
      setViewMode('lesson');
    } else {
      setViewMode('overview');
    }
  };

  const currentLesson = allLessons.find((l) => l.id === currentLessonId) || allLessons[0];

  const handleBackToClasses = () => {
    if (onBackToClasses) {
      onBackToClasses();
    } else if (onNavigateClasses) {
      onNavigateClasses();
    } else {
      window.location.hash = '#/classes';
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-200">
      <DataAnalyticsClassHeader
        enrollment={enrollment}
        currentLessonTitle={viewMode === 'lesson' ? currentLesson?.title[lang] : undefined}
        onNavigateOverview={() => setViewMode('overview')}
        onBackToClasses={handleBackToClasses}
        lang={lang}
        setLang={setLang}
      />

      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        {/* Sidebar only visible in lesson or capstone mode when enrolled */}
        {viewMode !== 'overview' && (
          <DataAnalyticsClassSidebar
            modules={DATA_ANALYTICS_MODULES}
            currentLessonId={viewMode === 'capstone' ? 'da-m12-l1' : currentLessonId}
            enrollment={enrollment}
            onSelectLesson={handleSelectLesson}
            lang={lang}
          />
        )}

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto">
          {viewMode === 'overview' && (
            <DataAnalyticsClassOverview
              modules={DATA_ANALYTICS_MODULES}
              enrollment={enrollment}
              onEnrollOrContinue={() => {
                if (!enrollment.enrolled) {
                  handleEnroll();
                } else {
                  setViewMode('lesson');
                }
              }}
              lang={lang}
            />
          )}

          {viewMode === 'lesson' && currentLesson && (
            <DataAnalyticsClassLessonView
              lesson={currentLesson}
              enrollment={enrollment}
              onCompleteLesson={handleCompleteLesson}
              onNavigateNext={handleNavigateNextLesson}
              onNavigatePrev={handleNavigatePrevLesson}
              lang={lang}
            />
          )}

          {viewMode === 'capstone' && (
            <DataAnalyticsClassCapstoneView
              enrollment={enrollment}
              onSubmitCapstone={handleSubmitCapstone}
              lang={lang}
            />
          )}
        </main>
      </div>
    </div>
  );
};

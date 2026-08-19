import React, { useState, useEffect } from 'react';
import { DATABASE_SQL_MODULES, getAllDatabaseSqlLessons } from '../../data/dbSqlMasteryClassData';
import {
  loadDatabaseSqlClassEnrollment,
  enrollInDatabaseSqlClass,
  completeDatabaseSqlLesson,
  submitDatabaseSqlCapstonePortfolio,
  updateLastVisitedDatabaseSqlLesson,
} from '../../utils/databaseSqlMasteryClassStorage';
import { DatabaseSqlHeader } from './DatabaseSqlHeader';
import { DatabaseSqlSidebar } from './DatabaseSqlSidebar';
import { DatabaseSqlOverview } from './DatabaseSqlOverview';
import { DatabaseSqlLessonView } from './DatabaseSqlLessonView';
import { DatabaseSqlCapstoneView } from './DatabaseSqlCapstoneView';
import { DatabaseSqlClassEnrollment } from '../../types/databaseSqlMasteryClass';

interface Props {
  initialLessonId?: string;
  onBackToClasses?: () => void;
  onNavigateClasses?: () => void;
  onNavigateHome?: () => void;
}

export const DatabaseSqlMainView: React.FC<Props> = ({
  initialLessonId,
  onBackToClasses,
  onNavigateClasses,
  onNavigateHome,
}) => {
  const [lang, setLang] = useState<'en' | 'km'>('km');
  const [enrollment, setEnrollment] = useState<DatabaseSqlClassEnrollment>(() =>
    loadDatabaseSqlClassEnrollment()
  );

  const allLessons = getAllDatabaseSqlLessons();

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

  // Listen for storage update custom events
  useEffect(() => {
    const handleStorageUpdate = () => {
      setEnrollment(loadDatabaseSqlClassEnrollment());
    };
    window.addEventListener('db-sql-mastery-enrollment-updated', handleStorageUpdate);
    return () => {
      window.removeEventListener('db-sql-mastery-enrollment-updated', handleStorageUpdate);
    };
  }, []);

  // Sync last visited lesson to storage whenever currentLessonId changes
  useEffect(() => {
    if (enrollment.enrolled && currentLessonId && currentLessonId !== 'capstone') {
      const updated = updateLastVisitedDatabaseSqlLesson(currentLessonId);
      setEnrollment(updated);
    }
  }, [currentLessonId, enrollment.enrolled]);

  const handleEnroll = () => {
    const updated = enrollInDatabaseSqlClass();
    setEnrollment(updated);
    setViewMode('lesson');
  };

  const handleCompleteLesson = (lessonId: string) => {
    const updated = completeDatabaseSqlLesson(lessonId);
    setEnrollment(updated);
  };

  const handleSubmitCapstone = (portfolio: any) => {
    const updated = submitDatabaseSqlCapstonePortfolio(portfolio);
    setEnrollment(updated);
  };

  const handleSelectLesson = (lessonId: string) => {
    if (lessonId === 'capstone' || lessonId === 'm14-l2') {
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
      if (nextLesson.id === 'capstone' || nextLesson.id === 'm14-l2') {
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
      <DatabaseSqlHeader
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
          <DatabaseSqlSidebar
            modules={DATABASE_SQL_MODULES}
            currentLessonId={viewMode === 'capstone' ? 'capstone' : currentLessonId}
            enrollment={enrollment}
            onSelectLesson={handleSelectLesson}
            lang={lang}
          />
        )}

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto">
          {viewMode === 'overview' && (
            <DatabaseSqlOverview
              modules={DATABASE_SQL_MODULES}
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
            <DatabaseSqlLessonView
              lesson={currentLesson}
              enrollment={enrollment}
              onCompleteLesson={handleCompleteLesson}
              onNavigateNext={handleNavigateNextLesson}
              onNavigatePrev={handleNavigatePrevLesson}
              lang={lang}
            />
          )}

          {viewMode === 'capstone' && (
            <DatabaseSqlCapstoneView
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

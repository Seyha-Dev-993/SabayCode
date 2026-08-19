import React, { useState, useEffect } from 'react';
import { AI_PROMPT_MODULES, getAllAIPromptLessons } from '../../data/aiPromptClassData';
import {
  loadAIPromptClassEnrollment,
  enrollInAIPromptClass,
  completeAIPromptLesson,
  submitCapstonePortfolio,
  updateLastVisitedLesson,
} from '../../utils/aiPromptClassStorage';
import { AIPromptClassHeader } from './AIPromptClassHeader';
import { AIPromptClassSidebar } from './AIPromptClassSidebar';
import { AIPromptClassOverview } from './AIPromptClassOverview';
import { AIPromptClassLessonView } from './AIPromptClassLessonView';
import { AIPromptClassCapstoneView } from './AIPromptClassCapstoneView';
import { AIPromptClassEnrollment } from '../../types/aiPromptClass';

interface Props {
  initialLessonId?: string;
  onBackToClasses?: () => void;
  onNavigateClasses?: () => void;
  onNavigateHome?: () => void;
}

export const AIPromptClassMainView: React.FC<Props> = ({
  initialLessonId,
  onBackToClasses,
  onNavigateClasses,
  onNavigateHome,
}) => {
  const [lang, setLang] = useState<'en' | 'km'>('km');
  const [enrollment, setEnrollment] = useState<AIPromptClassEnrollment>(() =>
    loadAIPromptClassEnrollment()
  );

  const allLessons = getAllAIPromptLessons();

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
      const updated = updateLastVisitedLesson(currentLessonId);
      setEnrollment(updated);
    }
  }, [currentLessonId, enrollment.enrolled]);

  const handleEnroll = () => {
    const updated = enrollInAIPromptClass();
    setEnrollment(updated);
    setViewMode('lesson');
  };

  const handleCompleteLesson = (lessonId: string) => {
    const updated = completeAIPromptLesson(lessonId);
    setEnrollment(updated);
  };

  const handleSubmitCapstone = (portfolio: any) => {
    const updated = submitCapstonePortfolio(portfolio);
    setEnrollment(updated);
  };

  const handleSelectLesson = (lessonId: string) => {
    if (lessonId === 'm9-l1') {
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
      if (nextLesson.id === 'm9-l1') {
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

  const currentLessonObj = allLessons.find((l) => l.id === currentLessonId);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* Sticky Header */}
      <AIPromptClassHeader
        enrollment={enrollment}
        currentLessonTitle={currentLessonObj?.title[lang]}
        onNavigateOverview={() => setViewMode('overview')}
        onBackToClasses={onBackToClasses || onNavigateClasses || (() => window.location.hash = '#/classes')}
        lang={lang}
        setLang={setLang}
      />

      {/* Main Body Layout */}
      {viewMode === 'overview' ? (
        <AIPromptClassOverview
          modules={AI_PROMPT_MODULES}
          enrollment={enrollment}
          onEnrollOrContinue={handleEnroll}
          lang={lang}
        />
      ) : (
        <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
          {/* Left Sidebar Navigation */}
          <AIPromptClassSidebar
            modules={AI_PROMPT_MODULES}
            currentLessonId={currentLessonId}
            enrollment={enrollment}
            onSelectLesson={handleSelectLesson}
            lang={lang}
          />

          {/* Right Main Content Area */}
          <main className="flex-1 overflow-y-auto bg-slate-950 p-4 sm:p-6 lg:p-8">
            {viewMode === 'capstone' ? (
              <AIPromptClassCapstoneView
                enrollment={enrollment}
                onSubmitCapstone={handleSubmitCapstone}
                lang={lang}
              />
            ) : (
              currentLessonObj && (
                <AIPromptClassLessonView
                  lesson={currentLessonObj}
                  enrollment={enrollment}
                  onCompleteLesson={handleCompleteLesson}
                  onNavigateNext={handleNavigateNextLesson}
                  onNavigatePrev={handleNavigatePrevLesson}
                  lang={lang}
                />
              )
            )}
          </main>
        </div>
      )}
    </div>
  );
};

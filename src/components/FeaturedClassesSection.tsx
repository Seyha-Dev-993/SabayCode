import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { FRONTEND_CLASS_INFO, FRONTEND_MODULES } from '../data/frontendClassData';
import { getFrontendClassEnrollment, enrollInFrontendClass } from '../utils/frontendClassStorage';
import { backendModulesData, getAllBackendLessons } from '../data/backendClassData';
import { getBackendEnrollment, enrollInBackendClass } from '../utils/backendClassStorage';
import { AI_PROMPT_CLASS_INFO, AI_PROMPT_MODULES, getAllAIPromptLessons } from '../data/aiPromptClassData';
import { loadAIPromptClassEnrollment, enrollInAIPromptClass } from '../utils/aiPromptClassStorage';
import { CourseCard } from './CourseCard';

import frontendCoverImg from '../assets/images/Frontend_Cover.jpg';
import backendCoverImg from '../assets/images/Backend_Cover.jpg';
import mobileCoverImg from '../assets/images/Mobile_Cover.jpg';
import aiPromptCoverImg from '../assets/images/AI_Prompt.jpg';

interface FeaturedClassesSectionProps {
  onNavigateClasses: () => void;
}

export const FeaturedClassesSection: React.FC<FeaturedClassesSectionProps> = ({ onNavigateClasses }) => {
  const { language } = useApp();
  const [frontendEnrollment, setFrontendEnrollment] = useState(getFrontendClassEnrollment());
  const [backendEnrollment, setBackendEnrollment] = useState(getBackendEnrollment());
  const [aiPromptEnrollment, setAiPromptEnrollment] = useState(loadAIPromptClassEnrollment());

  useEffect(() => {
    setFrontendEnrollment(getFrontendClassEnrollment());
    setBackendEnrollment(getBackendEnrollment());
    setAiPromptEnrollment(loadAIPromptClassEnrollment());

    const handleBackendUpdate = () => {
      setBackendEnrollment(getBackendEnrollment());
    };
    const handleAiPromptUpdate = () => {
      setAiPromptEnrollment(loadAIPromptClassEnrollment());
    };
    window.addEventListener('backend-enrollment-updated', handleBackendUpdate);
    window.addEventListener('ai-prompt-enrollment-updated', handleAiPromptUpdate);
    return () => {
      window.removeEventListener('backend-enrollment-updated', handleBackendUpdate);
      window.removeEventListener('ai-prompt-enrollment-updated', handleAiPromptUpdate);
    };
  }, []);

  // Frontend stats
  const allFrontendLessons = FRONTEND_MODULES.flatMap(m => m.lessons);
  const frontendTotalCount = allFrontendLessons.length;

  // AI Prompt stats
  const allAiLessons = getAllAIPromptLessons();
  const aiTotalCount = allAiLessons.length;

  // Frontend actions
  const handleFrontendEnroll = () => {
    enrollInFrontendClass();
    window.location.hash = '#/classes/frontend-development';
  };

  const handleFrontendContinue = () => {
    const target = frontendEnrollment.lastVisitedLessonId || 'm1-l1';
    window.location.hash = `#/classes/frontend-development/${target}`;
  };

  // AI Prompt actions
  const handleAiPromptEnroll = () => {
    enrollInAIPromptClass();
    window.location.hash = '#/classes/ai-prompt-engineering';
  };

  const handleAiPromptContinue = () => {
    window.location.hash = '#/classes/ai-prompt-engineering';
  };

  // Backend stats
  const allBackendLessons = getAllBackendLessons();
  const backendTotalCount = allBackendLessons.length;

  // Backend actions
  const handleBackendEnroll = () => {
    enrollInBackendClass();
    window.location.hash = '#/classes/backend-development';
  };

  const handleBackendContinue = () => {
    const target = backendEnrollment.lastVisitedLessonId || 'm1-l1';
    window.location.hash = `#/classes/backend-development/${target}`;
  };

  return (
    <section className="py-12 md:py-16 bg-white dark:bg-slate-950/80 border-t border-slate-200/40 dark:border-slate-900/40 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-100 dark:border-indigo-900/40 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
              <span>{language === 'en' ? 'Live Classes & Bootcamps' : 'ថ្នាក់រៀន និងវគ្គសិក្សាផ្ទាល់'}</span>
            </div>
            <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
              {language === 'en' ? 'Join a Live Class' : 'រៀនជាមួយថ្នាក់ផ្ទាល់'}
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              {language === 'en'
                ? 'Live cohort-based classes with real instructors, structured modules, and classmates.'
                : 'ថ្នាក់សិក្សាផ្ទាល់ជាមួយគ្រូបង្រៀនអាជីព មេរៀនរៀបចំយ៉ាងល្អ និងមិត្តភក្តិរួមថ្នាក់។'}
            </p>
          </div>
          <button
            onClick={onNavigateClasses}
            className="inline-flex items-center space-x-1.5 text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition cursor-pointer"
          >
            <span>{language === 'en' ? 'View All Classes' : 'មើលថ្នាក់រៀនទាំងអស់'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 items-stretch">
          {/* AI Prompt Engineering Flagship Class Card */}
          <CourseCard
            id="ai-prompt-engineering"
            category="ai-prompt-engineering"
            coverImage={aiPromptCoverImg}
            levelBadge={language === 'en' ? 'Beginner to Master' : 'កម្រិតដំបូង ដល់ Master'}
            rating={4.98}
            learnerCount="24,800+"
            formatOverlayTag={language === 'en' ? 'FLAGSHIP AI BOOTCAMP' : 'វគ្គសិក្សា FLAGSHIP AI'}
            eyebrowLabel={language === 'en' ? 'Flagship Bootcamp • Certified' : 'ថ្នាក់រៀន Flagship Bootcamp • មានវិញ្ញាបនបត្រ'}
            titleKhmer="ថ្នាក់រៀន AI Prompt Engineering & Generative AI"
            titleEnglish="AI Prompt Engineering & Generative AI"
            description={
              language === 'en'
                ? 'Master prompt architecture, Chain-of-Thought reasoning, RAG pipeline design, and multi-step agentic workflows in 9 practical modules.'
                : 'ស្ទាត់ជំនាញ Prompt Architecture, Chain-of-Thought, RAG Pipelines និង Agentic Workflows ក្នុង ៩ មូឌុលអនុវត្តផ្ទាល់។'
            }
            skills={['Prompt Architecture', 'System Prompts', 'CoT Reasoning', 'RAG Pipelines', 'Agentic AI', 'Function Calling', 'Visual Prompting', 'Ethics']}
            maxVisibleSkills={4}
            durationWeeks={AI_PROMPT_CLASS_INFO.durationWeeks}
            durationHours={AI_PROMPT_CLASS_INFO.durationHours}
            totalModules={AI_PROMPT_MODULES.length}
            totalLessons={aiTotalCount}
            isEnrolled={aiPromptEnrollment.enrolled}
            onEnrollOrContinue={aiPromptEnrollment.enrolled ? handleAiPromptContinue : handleAiPromptEnroll}
            onViewOverview={() => window.location.hash = '#/classes/ai-prompt-engineering'}
          />

          {/* Frontend Web Development Class Card */}
          <CourseCard
            id="frontend-bootcamp"
            category="frontend"
            coverImage={frontendCoverImg}
            levelBadge={language === 'en' ? 'Beginner to Professional' : 'កម្រិតដំបូង ដល់ អាជីព'}
            rating={FRONTEND_CLASS_INFO.rating}
            learnerCount={`${FRONTEND_CLASS_INFO.enrolledStudents.toLocaleString()}+`}
            formatOverlayTag={language === 'en' ? 'FRONTEND MASTER BOOTCAMP' : 'វគ្គសិក្សា FRONTEND MASTER'}
            eyebrowLabel={language === 'en' ? 'Master Bootcamp • Certified' : 'ថ្នាក់រៀន Master Bootcamp • មានវិញ្ញាបនបត្រ'}
            titleKhmer={FRONTEND_CLASS_INFO.title.km}
            titleEnglish={FRONTEND_CLASS_INFO.title.en}
            description={FRONTEND_CLASS_INFO.subtitle[language] || FRONTEND_CLASS_INFO.subtitle.en}
            skills={['HTML5', 'CSS3', 'JavaScript ES6+', 'TypeScript', 'Tailwind CSS', 'React.js', 'Vue.js', 'SCSS']}
            maxVisibleSkills={4}
            durationWeeks={FRONTEND_CLASS_INFO.durationWeeks}
            durationHours={FRONTEND_CLASS_INFO.durationHours}
            totalModules={FRONTEND_MODULES.length}
            totalLessons={frontendTotalCount}
            isEnrolled={frontendEnrollment.enrolled}
            onEnrollOrContinue={frontendEnrollment.enrolled ? handleFrontendContinue : handleFrontendEnroll}
            onViewOverview={() => window.location.hash = '#/classes/frontend-development'}
          />

          {/* Backend Engineering Class Card */}
          <CourseCard
            id="backend-bootcamp"
            category="backend"
            coverImage={backendCoverImg}
            levelBadge={language === 'en' ? 'Core Languages & Frameworks' : 'ភាសាមូលដ្ឋាន, Frameworks & DBs'}
            rating={4.9}
            learnerCount="11,800+"
            formatOverlayTag={language === 'en' ? 'BACKEND ENGINEERING HUB' : 'វគ្គសិក្សា BACKEND ENGINEERING'}
            eyebrowLabel={language === 'en' ? 'Specialized Track • Certified' : 'ថ្នាក់រៀន Backend Engineering • មានវិញ្ញាបនបត្រ'}
            titleKhmer="វគ្គសិក្សា Backend Engineering ពេញលេញ"
            titleEnglish="Backend Engineering Master Track"
            description={
              language === 'en'
                ? '11 independent specialized courses covering PHP, SQL, Node.js, Express, Python, Django, Java, Spring Boot, MongoDB, and API Security.'
                : 'វគ្គសិក្សាដាច់ដោយឡែកចំនួន ១១ គ្របដណ្តប់លើ PHP, SQL, Node.js, Express, Python, Django, Java, Spring Boot, MongoDB និង API Security។'
            }
            skills={['PHP', 'SQL', 'Node.js', 'Express', 'Python', 'Django', 'Java', 'Spring Boot', 'MongoDB', 'API Security']}
            maxVisibleSkills={4}
            durationWeeks={18}
            durationHours={130}
            totalModules={11}
            totalLessons={120}
            isEnrolled={false}
            onEnrollOrContinue={() => window.location.hash = '#/classes/backend-development'}
            onViewOverview={() => window.location.hash = '#/classes/backend-development'}
          />

          {/* Mobile Engineering Class Card */}
          <CourseCard
            id="mobile-bootcamp"
            category="mobile"
            coverImage={mobileCoverImg}
            levelBadge={language === 'en' ? 'Cross-Platform & Native' : 'ពហុប្រព័ន្ធ & Native'}
            rating={5.0}
            learnerCount="9,400+"
            formatOverlayTag={language === 'en' ? 'MOBILE ENGINEERING HUB' : 'វគ្គសិក្សា MOBILE ENGINEERING'}
            eyebrowLabel={language === 'en' ? 'Specialized Track • Certified' : 'ថ្នាក់រៀន Mobile Engineering • មានវិញ្ញាបនបត្រ'}
            titleKhmer="វគ្គសិក្សា Mobile App Development ពេញលេញ"
            titleEnglish="Mobile App Development Master Track"
            description={
              language === 'en'
                ? '10 independent specialized courses covering Dart, Flutter, Kotlin, Jetpack Compose, Swift, SwiftUI, React Native, Java, KMM, and .NET MAUI.'
                : 'វគ្គសិក្សាដាច់ដោយឡែកចំនួន ១០ គ្របដណ្តប់លើ Flutter, Kotlin, SwiftUI, React Native, Dart, KMM និង .NET MAUI។'
            }
            skills={['Dart', 'Flutter', 'Kotlin', 'Compose', 'Swift', 'SwiftUI', 'React Native', 'KMM', 'MAUI', 'Java']}
            maxVisibleSkills={4}
            durationWeeks={18}
            durationHours={120}
            totalModules={10}
            totalLessons={100}
            isEnrolled={false}
            onEnrollOrContinue={() => window.location.hash = '#/classes/mobile-development'}
            onViewOverview={() => window.location.hash = '#/classes/mobile-development'}
          />
        </div>
      </div>
    </section>
  );
};

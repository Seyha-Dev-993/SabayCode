import React, { useState, useEffect } from 'react';
import { 
  GraduationCap, Star, Clock, BookOpen, Users, CheckCircle2, 
  Play, ArrowRight, Award, FolderCheck, Sparkles, Server, Code2, Zap, Smartphone, BrainCircuit 
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { FRONTEND_CLASS_INFO, FRONTEND_MODULES } from '../data/frontendClassData';
import { 
  getFrontendClassEnrollment, 
  enrollInFrontendClass 
} from '../utils/frontendClassStorage';
import { backendModulesData, getAllBackendLessons } from '../data/backendClassData';
import { getBackendEnrollment, enrollInBackendClass } from '../utils/backendClassStorage';
import { AI_PROMPT_CLASS_INFO, AI_PROMPT_MODULES, getAllAIPromptLessons } from '../data/aiPromptClassData';
import { loadAIPromptClassEnrollment, enrollInAIPromptClass } from '../utils/aiPromptClassStorage';
import { DATA_ANALYTICS_CLASS_INFO, DATA_ANALYTICS_MODULES, getAllDataAnalyticsLessons } from '../data/dataAnalyticsClassData';
import { loadDataAnalyticsClassEnrollment, enrollInDataAnalyticsClass } from '../utils/dataAnalyticsClassStorage';
import { DATABASE_SQL_CLASS_INFO, DATABASE_SQL_MODULES, getAllDatabaseSqlLessons } from '../data/dbSqlMasteryClassData';
import { loadDatabaseSqlClassEnrollment, enrollInDatabaseSqlClass } from '../utils/databaseSqlMasteryClassStorage';
import { BarChart2, Database } from 'lucide-react';

import frontendCoverImg from '../assets/images/Frontend_Cover.jpg';
import backendCoverImg from '../assets/images/Backend_Cover.jpg';
import mobileCoverImg from '../assets/images/Mobile_Cover.jpg';
import aiPromptCoverImg from '../assets/images/AI_Prompt.jpg';
import dataAnalyticsCoverImg from '../assets/images/data_analytics_cover_1785766877701.jpg';
import dbSqlCoverImg from '../assets/images/db_sql_mastery_cover_1785902819490.jpg';
import { CourseCard } from './CourseCard';

interface ClassesPageProps {
  onNavigateHome?: () => void;
  onNavigateCourses?: () => void;
}

export const ClassesPage: React.FC<ClassesPageProps> = () => {
  const { language } = useApp();
  const [frontendEnrollment, setFrontendEnrollment] = useState(getFrontendClassEnrollment());
  const [backendEnrollment, setBackendEnrollment] = useState(getBackendEnrollment());
  const [aiPromptEnrollment, setAiPromptEnrollment] = useState(loadAIPromptClassEnrollment());
  const [dataAnalyticsEnrollment, setDataAnalyticsEnrollment] = useState(loadDataAnalyticsClassEnrollment());
  const [dbSqlEnrollment, setDbSqlEnrollment] = useState(loadDatabaseSqlClassEnrollment());

  useEffect(() => {
    setFrontendEnrollment(getFrontendClassEnrollment());
    setBackendEnrollment(getBackendEnrollment());
    setAiPromptEnrollment(loadAIPromptClassEnrollment());
    setDataAnalyticsEnrollment(loadDataAnalyticsClassEnrollment());
    setDbSqlEnrollment(loadDatabaseSqlClassEnrollment());

    const handleBackendUpdate = () => {
      setBackendEnrollment(getBackendEnrollment());
    };
    const handleAiPromptUpdate = () => {
      setAiPromptEnrollment(loadAIPromptClassEnrollment());
    };
    const handleDataAnalyticsUpdate = () => {
      setDataAnalyticsEnrollment(loadDataAnalyticsClassEnrollment());
    };
    const handleDbSqlUpdate = () => {
      setDbSqlEnrollment(loadDatabaseSqlClassEnrollment());
    };
    window.addEventListener('backend-enrollment-updated', handleBackendUpdate);
    window.addEventListener('ai-prompt-enrollment-updated', handleAiPromptUpdate);
    window.addEventListener('data-analytics-enrollment-updated', handleDataAnalyticsUpdate);
    window.addEventListener('db-sql-mastery-enrollment-updated', handleDbSqlUpdate);
    return () => {
      window.removeEventListener('backend-enrollment-updated', handleBackendUpdate);
      window.removeEventListener('ai-prompt-enrollment-updated', handleAiPromptUpdate);
      window.removeEventListener('data-analytics-enrollment-updated', handleDataAnalyticsUpdate);
      window.removeEventListener('db-sql-mastery-enrollment-updated', handleDbSqlUpdate);
    };
  }, []);

  // Frontend stats
  const allFrontendLessons = FRONTEND_MODULES.flatMap(m => m.lessons);
  const frontendCompletedCount = frontendEnrollment.completedLessonIds.length;
  const frontendTotalCount = allFrontendLessons.length;
  const frontendPercent = Math.round((frontendCompletedCount / (frontendTotalCount || 1)) * 100);
  const frontendLastLesson = allFrontendLessons.find(l => l.id === (frontendEnrollment.lastVisitedLessonId || 'm1-l1')) || allFrontendLessons[0];

  // Backend stats
  const allBackendLessons = getAllBackendLessons();
  const backendCompletedCount = backendEnrollment.completedLessonIds.length;
  const backendTotalCount = allBackendLessons.length;
  const backendPercent = Math.round((backendCompletedCount / (backendTotalCount || 1)) * 100);
  const backendLastLesson = allBackendLessons.find(l => l.id === (backendEnrollment.lastVisitedLessonId || 'm1-l1')) || allBackendLessons[0];

  // AI Prompt stats
  const allAiLessons = getAllAIPromptLessons();
  const aiCompletedCount = aiPromptEnrollment.completedLessonIds.length;
  const aiTotalCount = allAiLessons.length;
  const aiPercent = Math.round((aiCompletedCount / (aiTotalCount || 1)) * 100);
  const aiLastLesson = allAiLessons.find(l => l.id === (aiPromptEnrollment.lastVisitedLessonId || 'm1-l1')) || allAiLessons[0];

  // Data Analytics stats
  const allDataAnalyticsLessons = getAllDataAnalyticsLessons();
  const dataAnalyticsCompletedCount = dataAnalyticsEnrollment.completedLessonIds.length;
  const dataAnalyticsTotalCount = allDataAnalyticsLessons.length;
  const dataAnalyticsPercent = Math.round((dataAnalyticsCompletedCount / (dataAnalyticsTotalCount || 1)) * 100);
  const dataAnalyticsLastLesson = allDataAnalyticsLessons.find(l => l.id === (dataAnalyticsEnrollment.lastVisitedLessonId || 'm1-l1')) || allDataAnalyticsLessons[0];

  // Database Design & SQL Mastery stats
  const allDbSqlLessons = getAllDatabaseSqlLessons();
  const dbSqlCompletedCount = dbSqlEnrollment.completedLessonIds.length;
  const dbSqlTotalCount = allDbSqlLessons.length;
  const dbSqlPercent = Math.round((dbSqlCompletedCount / (dbSqlTotalCount || 1)) * 100);
  const dbSqlLastLesson = allDbSqlLessons.find(l => l.id === (dbSqlEnrollment.lastVisitedLessonId || 'm1-l1')) || allDbSqlLessons[0];

  // Frontend actions
  const handleFrontendEnroll = () => {
    enrollInFrontendClass();
    window.location.hash = '#/classes/frontend-development';
  };

  const handleFrontendContinue = () => {
    const target = frontendEnrollment.lastVisitedLessonId || 'm1-l1';
    window.location.hash = `#/classes/frontend-development/${target}`;
  };

  // Backend actions
  const handleBackendEnroll = () => {
    enrollInBackendClass();
    window.location.hash = '#/classes/backend-development';
  };

  const handleBackendContinue = () => {
    const target = backendEnrollment.lastVisitedLessonId || 'm1-l1';
    window.location.hash = `#/classes/backend-development/${target}`;
  };

  // AI Prompt actions
  const handleAiPromptEnroll = () => {
    enrollInAIPromptClass();
    window.location.hash = '#/classes/ai-prompt-engineering';
  };

  const handleAiPromptContinue = () => {
    window.location.hash = '#/classes/ai-prompt-engineering';
  };

  // Data Analytics actions
  const handleDataAnalyticsEnroll = () => {
    enrollInDataAnalyticsClass();
    window.location.hash = '#/classes/data-analytics';
  };

  const handleDataAnalyticsContinue = () => {
    const target = dataAnalyticsEnrollment.lastVisitedLessonId || 'm1-l1';
    window.location.hash = `#/classes/data-analytics/${target}`;
  };

  // Database SQL Mastery actions
  const handleDbSqlEnroll = () => {
    enrollInDatabaseSqlClass();
    window.location.hash = '#/classes/database-sql-mastery';
  };

  const handleDbSqlContinue = () => {
    const target = dbSqlEnrollment.lastVisitedLessonId || 'm1-l1';
    window.location.hash = `#/classes/database-sql-mastery/${target}`;
  };

  const hasAnyEnrollment = frontendEnrollment.enrolled || backendEnrollment.enrolled || aiPromptEnrollment.enrolled || dataAnalyticsEnrollment.enrolled || dbSqlEnrollment.enrolled;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10 font-sans animate-fade-in text-slate-900 dark:text-slate-100">
      {/* Header Portal Banner */}
      <div className="bg-gradient-to-r from-[#0b1739] via-[#11245a] to-[#1e3a8a] border border-blue-700/50 rounded-3xl p-8 sm:p-10 relative overflow-hidden text-white shadow-xl shadow-blue-950/30">
        <div className="absolute -top-12 -right-12 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-xs font-bold uppercase tracking-wider">
            <GraduationCap className="w-4 h-4 text-blue-300" />
            <span>{language === 'en' ? 'Classes & Bootcamps Dashboard' : 'ទំព័រថ្នាក់រៀន និងវគ្គសិក្សា'}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            {language === 'en' ? 'Interactive Class Portal' : 'ទំព័រដើមថ្នាក់រៀន'}
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            {language === 'en'
              ? 'Enroll in standalone multi-page professional coding bootcamps with interactive lessons, quizzes, and live code sandboxes.'
              : 'ចូលរៀនក្នុងថ្នាក់រៀនអាជីពដែលមានមេរៀនអន្តរកម្ម លំហាត់អនុវត្ត និងកន្លែងសរសេរកូដផ្ទាល់។'}
          </p>
        </div>
      </div>

      {/* SECTION 1: My Enrolled Classes Dashboard */}
      {hasAnyEnrollment && (
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <FolderCheck className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              {language === 'en' ? 'My Enrolled Classes' : 'ថ្នាក់រៀនរបស់ខ្ញុំ'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Frontend Enrolled Card */}
            {frontendEnrollment.enrolled && (
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 space-y-5 relative overflow-hidden shadow-xl flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-500/30 text-xs font-bold">
                      <Code2 className="w-3.5 h-3.5" />
                      <span>{language === 'en' ? 'Frontend Track' : 'ផ្នែក Frontend'}</span>
                    </span>
                    <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">{frontendPercent}%</span>
                  </div>

                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                    {FRONTEND_CLASS_INFO.title[language] || FRONTEND_CLASS_INFO.title.en}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2">
                    {language === 'en'
                      ? `Current Lesson: ${frontendLastLesson ? (frontendLastLesson.title[language] || frontendLastLesson.title.en) : 'Module 1'}`
                      : `មេរៀនបច្ចុប្បន្ន៖ ${frontendLastLesson ? (frontendLastLesson.title[language] || frontendLastLesson.title.en) : 'មេរៀនទី ១'}`}
                  </p>
                </div>

                <div className="space-y-3 pt-3 border-t border-slate-100 dark:border-slate-800">
                  <div className="w-full h-2.5 bg-slate-100 dark:bg-slate-950 rounded-full overflow-hidden border border-slate-200 dark:border-slate-800">
                    <div
                      className="h-full bg-indigo-500 rounded-full transition-all duration-500"
                      style={{ width: `${frontendPercent}%` }}
                    />
                  </div>

                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                      {frontendCompletedCount} / {frontendTotalCount} {language === 'en' ? 'Lessons' : 'មេរៀន'}
                    </span>

                    <button
                      onClick={handleFrontendContinue}
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold text-xs rounded-xl transition shadow-md"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>{language === 'en' ? 'Continue' : 'បន្តរៀន'}</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Backend Enrolled Card */}
            {backendEnrollment.enrolled && (
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 space-y-5 relative overflow-hidden shadow-xl flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-500/30 text-xs font-bold">
                      <Server className="w-3.5 h-3.5" />
                      <span>{language === 'en' ? 'Backend Track' : 'ផ្នែក Backend'}</span>
                    </span>
                    <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">{backendPercent}%</span>
                  </div>

                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                    {language === 'en'
                      ? 'Backend Engineering & RESTful APIs'
                      : 'វគ្គសិក្សា Backend Engineering & RESTful APIs ពេញលេញ'}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2">
                    {language === 'en'
                      ? `Current Lesson: ${backendLastLesson ? (backendLastLesson.title[language] || backendLastLesson.title.en) : 'Module 1'}`
                      : `មេរៀនបច្ចុប្បន្ន៖ ${backendLastLesson ? (backendLastLesson.title[language] || backendLastLesson.title.en) : 'មេរៀនទី ១'}`}
                  </p>
                </div>

                <div className="space-y-3 pt-3 border-t border-slate-100 dark:border-slate-800">
                  <div className="w-full h-2.5 bg-slate-100 dark:bg-slate-950 rounded-full overflow-hidden border border-slate-200 dark:border-slate-800">
                    <div
                      className="h-full bg-emerald-500 rounded-full transition-all duration-500"
                      style={{ width: `${backendPercent}%` }}
                    />
                  </div>

                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                      {backendCompletedCount} / {backendTotalCount} {language === 'en' ? 'Lessons' : 'មេរៀន'}
                    </span>

                    <button
                      onClick={handleBackendContinue}
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs rounded-xl transition shadow-md"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>{language === 'en' ? 'Continue' : 'បន្តរៀន'}</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* AI Prompt Engineering Enrolled Card */}
            {aiPromptEnrollment.enrolled && (
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 space-y-5 relative overflow-hidden shadow-xl flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-500/20 text-purple-800 dark:text-purple-300 border border-purple-200 dark:border-purple-500/30 text-xs font-bold">
                      <BrainCircuit className="w-3.5 h-3.5" />
                      <span>{language === 'en' ? 'Flagship AI Track' : 'ផ្នែក Flagship AI'}</span>
                    </span>
                    <span className="text-xs font-bold text-purple-600 dark:text-purple-400">{aiPercent}%</span>
                  </div>

                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                    {language === 'en'
                      ? 'AI Prompt Engineering & Generative AI'
                      : 'ថ្នាក់រៀន AI Prompt Engineering & Generative AI'}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2">
                    {language === 'en'
                      ? `Current Lesson: ${aiLastLesson ? (aiLastLesson.title[language] || aiLastLesson.title.en) : 'Module 1'}`
                      : `មេរៀនបច្ចុប្បន្ន៖ ${aiLastLesson ? (aiLastLesson.title[language] || aiLastLesson.title.en) : 'មេរៀនទី ១'}`}
                  </p>
                </div>

                <div className="space-y-3 pt-3 border-t border-slate-100 dark:border-slate-800">
                  <div className="w-full h-2.5 bg-slate-100 dark:bg-slate-950 rounded-full overflow-hidden border border-slate-200 dark:border-slate-800">
                    <div
                      className="h-full bg-purple-600 rounded-full transition-all duration-500"
                      style={{ width: `${aiPercent}%` }}
                    />
                  </div>

                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                      {aiCompletedCount} / {aiTotalCount} {language === 'en' ? 'Lessons' : 'មេរៀន'}
                    </span>

                    <button
                      onClick={handleAiPromptContinue}
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white font-extrabold text-xs rounded-xl transition shadow-md"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>{language === 'en' ? 'Continue' : 'បន្តរៀន'}</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
            {/* Data Analytics Enrolled Card */}
            {dataAnalyticsEnrollment.enrolled && (
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 space-y-5 relative overflow-hidden shadow-xl flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-500/30 text-xs font-bold">
                      <BarChart2 className="w-3.5 h-3.5" />
                      <span>{language === 'en' ? 'Data Analytics Track' : 'ផ្នែក Data Analytics'}</span>
                    </span>
                    <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">{dataAnalyticsPercent}%</span>
                  </div>

                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                    {language === 'en'
                      ? 'Data Analytics with Python & SQL'
                      : 'ថ្នាក់រៀនវិភាគទិន្នន័យ Data Analytics (Python & SQL)'}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2">
                    {language === 'en'
                      ? `Current Lesson: ${dataAnalyticsLastLesson ? (dataAnalyticsLastLesson.title[language] || dataAnalyticsLastLesson.title.en) : 'Module 1'}`
                      : `មេរៀនបច្ចុប្បន្ន៖ ${dataAnalyticsLastLesson ? (dataAnalyticsLastLesson.title[language] || dataAnalyticsLastLesson.title.en) : 'មេរៀនទី ១'}`}
                  </p>
                </div>

                <div className="space-y-3 pt-3 border-t border-slate-100 dark:border-slate-800">
                  <div className="w-full h-2.5 bg-slate-100 dark:bg-slate-950 rounded-full overflow-hidden border border-slate-200 dark:border-slate-800">
                    <div
                      className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full transition-all duration-500"
                      style={{ width: `${dataAnalyticsPercent}%` }}
                    />
                  </div>

                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                      {dataAnalyticsCompletedCount} / {dataAnalyticsTotalCount} {language === 'en' ? 'Lessons' : 'មេរៀន'}
                    </span>

                    <button
                      onClick={handleDataAnalyticsContinue}
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs rounded-xl transition shadow-md"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>{language === 'en' ? 'Continue' : 'បន្តរៀន'}</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Database Design & SQL Mastery Enrolled Card */}
            {dbSqlEnrollment.enrolled && (
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 space-y-5 relative overflow-hidden shadow-xl flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-500/20 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-500/30 text-xs font-bold">
                      <Database className="w-3.5 h-3.5" />
                      <span>{language === 'en' ? 'Database & SQL Track' : 'ផ្នែក Database & SQL'}</span>
                    </span>
                    <span className="text-xs font-bold text-blue-600 dark:text-blue-400">{dbSqlPercent}%</span>
                  </div>

                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                    {DATABASE_SQL_CLASS_INFO.title[language]}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2">
                    {language === 'en'
                      ? `Current Lesson: ${dbSqlLastLesson ? (dbSqlLastLesson.title[language] || dbSqlLastLesson.title.en) : 'Module 1'}`
                      : `មេរៀនបច្ចុប្បន្ន៖ ${dbSqlLastLesson ? (dbSqlLastLesson.title[language] || dbSqlLastLesson.title.en) : 'មេរៀនទី ១'}`}
                  </p>
                </div>

                <div className="space-y-3 pt-3 border-t border-slate-100 dark:border-slate-800">
                  <div className="w-full h-2.5 bg-slate-100 dark:bg-slate-950 rounded-full overflow-hidden border border-slate-200 dark:border-slate-800">
                    <div
                      className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full transition-all duration-500"
                      style={{ width: `${dbSqlPercent}%` }}
                    />
                  </div>

                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                      {dbSqlCompletedCount} / {dbSqlTotalCount} {language === 'en' ? 'Lessons' : 'មេរៀន'}
                    </span>

                    <button
                      onClick={handleDbSqlContinue}
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs rounded-xl transition shadow-md"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>{language === 'en' ? 'Continue' : 'បន្តរៀន'}</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* SECTION 2: Available Master Classes */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              {language === 'en' ? 'Available Master Classes & Bootcamps' : 'ថ្នាក់រៀនដែលបើកដំណើរការ'}
            </h2>
          </div>
          <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
            {language === 'en' ? '6 Master Bootcamps Active' : '៦ ថ្នាក់រៀនសកម្ម'}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-[1120px] mx-auto">
          {/* Database Design & SQL Mastery Master Card */}
          <CourseCard
            id="database-sql-mastery"
            category="database-sql"
            coverImage={dbSqlCoverImg}
            levelBadge={language === 'en' ? 'Intermediate' : 'កម្រិតមធ្យម'}
            rating={DATABASE_SQL_CLASS_INFO.rating}
            learnerCount={`${DATABASE_SQL_CLASS_INFO.enrolledCount.toLocaleString()}+`}
            formatOverlayTag={language === 'en' ? 'DATABASE & SQL MASTER BOOTCAMP' : 'វគ្គសិក្សា DATABASE & SQL'}
            eyebrowLabel={language === 'en' ? 'Database Track • Certified' : 'ថ្នាក់រៀន Database & SQL • មានវិញ្ញាបនបត្រ'}
            titleKhmer={DATABASE_SQL_CLASS_INFO.title.km}
            titleEnglish={DATABASE_SQL_CLASS_INFO.title.en}
            description={DATABASE_SQL_CLASS_INFO.shortDescription[language]}
            skills={DATABASE_SQL_CLASS_INFO.skillsAcquired}
            maxVisibleSkills={5}
            durationWeeks={DATABASE_SQL_CLASS_INFO.durationWeeks}
            durationHours={DATABASE_SQL_CLASS_INFO.durationHours}
            totalModules={DATABASE_SQL_MODULES.length}
            totalLessons={dbSqlTotalCount}
            isEnrolled={dbSqlEnrollment.enrolled}
            onEnrollOrContinue={dbSqlEnrollment.enrolled ? handleDbSqlContinue : handleDbSqlEnroll}
            onViewOverview={() => window.location.hash = '#/classes/database-sql-mastery'}
          />
          {/* Data Analytics with Python & SQL Master Card */}
          <CourseCard
            id="data-analytics"
            category="data-analytics"
            coverImage={dataAnalyticsCoverImg}
            levelBadge={language === 'en' ? 'Beginner-to-Intermediate' : 'កម្រិតដំបូង ដល់ មធ្យម'}
            rating={4.97}
            learnerCount="16,200+"
            formatOverlayTag={language === 'en' ? 'DATA ANALYTICS BOOTCAMP' : 'វគ្គសិក្សា DATA ANALYTICS'}
            eyebrowLabel={language === 'en' ? 'Analytics Track • Certified' : 'ថ្នាក់រៀន Data Analytics • មានវិញ្ញាបនបត្រ'}
            titleKhmer="ថ្នាក់រៀនវិភាគទិន្នន័យ Data Analytics (Python & SQL)"
            titleEnglish="Data Analytics with Python & SQL"
            description={
              language === 'en'
                ? 'Covers data cleaning, statistical analysis, SQL database queries, Pandas, NumPy, and interactive visualization — real skills for modern data analysts.'
                : 'គ្របដណ្តប់លើ Data Cleaning, Statistical Analysis, SQL Database Queries, Pandas, NumPy និង Data Visualization សម្រាប់ Data Analyst អាជីព។'
            }
            skills={['Python', 'SQL', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Data Cleaning', 'EDA', 'Business Intelligence']}
            maxVisibleSkills={5}
            durationWeeks={DATA_ANALYTICS_CLASS_INFO.durationWeeks}
            durationHours={DATA_ANALYTICS_CLASS_INFO.durationHours}
            totalModules={DATA_ANALYTICS_MODULES.length}
            totalLessons={dataAnalyticsTotalCount}
            isEnrolled={dataAnalyticsEnrollment.enrolled}
            onEnrollOrContinue={dataAnalyticsEnrollment.enrolled ? handleDataAnalyticsContinue : handleDataAnalyticsEnroll}
            onViewOverview={() => window.location.hash = '#/classes/data-analytics'}
          />
          {/* AI Prompt Engineering & Generative AI Flagship Card */}
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
            maxVisibleSkills={5}
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
            maxVisibleSkills={5}
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
            maxVisibleSkills={5}
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
            maxVisibleSkills={5}
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
    </div>
  );
};

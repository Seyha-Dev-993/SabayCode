import React from 'react';
import { 
  Sparkles, Star, GraduationCap, Play, ArrowRight, Clock, BookOpen, 
  Award, Code2, Server, Smartphone, Zap, Layout, Database
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { CourseHeaderIllustration } from './CourseHeaderIllustration';

export type CourseCardCategory = 'frontend' | 'backend' | 'mobile' | 'general' | 'ai-prompt-engineering' | 'aiprompt' | 'prompt-engineering' | 'uxui' | 'ux-ui' | 'ux-ui-design' | 'data-analytics' | 'dataanalytics' | 'database-sql' | 'database' | 'it-support' | 'itsupport';

export interface CourseCardProps {
  id: string;
  category: CourseCardCategory;
  coverImage?: string;
  levelBadge: string; // e.g. "Beginner to Professional", "Intermediate", "Cross-Platform"
  rating: number; // e.g. 4.9, 5.0
  learnerCount: string; // e.g. "14,200+"
  formatOverlayTag: string; // e.g. "FRONTEND MASTER BOOTCAMP"
  eyebrowLabel?: string; // e.g. "រៀនសិក្សា • វគ្គពិសេស"
  titleKhmer: string;
  titleEnglish: string;
  description: string;
  skills: string[]; // Tech tags
  maxVisibleSkills?: number;
  durationWeeks?: number;
  durationHours?: number;
  totalModules?: number;
  totalLessons?: number;
  isEnrolled?: boolean;
  onEnrollOrContinue: () => void;
  onViewOverview: () => void;
}

export const CourseCard: React.FC<CourseCardProps> = ({
  id,
  category,
  coverImage,
  levelBadge,
  rating,
  learnerCount,
  formatOverlayTag,
  eyebrowLabel,
  titleKhmer,
  titleEnglish,
  description,
  skills,
  maxVisibleSkills = 5,
  durationWeeks,
  durationHours,
  totalModules,
  totalLessons,
  isEnrolled = false,
  onEnrollOrContinue,
  onViewOverview,
}) => {
  const { language } = useApp();

  // Color theme definitions based on category token system
  const theme = React.useMemo(() => {
    switch (category) {
      case 'frontend':
        return {
          badgeBg: 'bg-blue-600/90 text-white border-blue-400/40',
          badgeText: 'text-blue-200',
          badgeIcon: Sparkles,
          trackTagText: 'text-blue-300 border-blue-500/40 bg-slate-950/80',
          trackTagIcon: Code2,
          hoverBorder: 'hover:border-blue-500/60 hover:shadow-blue-500/10',
          englishTitleColor: 'text-blue-600 dark:text-blue-400',
          primaryBtnBg: 'bg-blue-600 hover:bg-blue-500 active:bg-blue-700 shadow-blue-600/25 text-white',
          skillTagBg: 'bg-blue-50 dark:bg-blue-950/40 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-900/40',
          statIconColor: 'text-blue-500',
          accentColor: '#3B82F6',
        };
      case 'backend':
        return {
          badgeBg: 'bg-emerald-600/90 text-white border-emerald-400/40',
          badgeText: 'text-emerald-200',
          badgeIcon: Zap,
          trackTagText: 'text-emerald-300 border-emerald-500/40 bg-slate-950/80',
          trackTagIcon: Server,
          hoverBorder: 'hover:border-emerald-500/60 hover:shadow-emerald-500/10',
          englishTitleColor: 'text-emerald-600 dark:text-emerald-400',
          primaryBtnBg: 'bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 shadow-emerald-600/25 text-white',
          skillTagBg: 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-300 border-emerald-200 dark:border-emerald-900/40',
          statIconColor: 'text-emerald-500',
          accentColor: '#10B981',
        };
      case 'mobile':
        return {
          badgeBg: 'bg-sky-600/90 text-white border-sky-400/40',
          badgeText: 'text-sky-200',
          badgeIcon: Smartphone,
          trackTagText: 'text-sky-300 border-sky-500/40 bg-slate-950/80',
          trackTagIcon: Smartphone,
          hoverBorder: 'hover:border-sky-500/60 hover:shadow-sky-500/10',
          englishTitleColor: 'text-sky-600 dark:text-sky-400',
          primaryBtnBg: 'bg-sky-600 hover:bg-sky-500 active:bg-sky-700 shadow-sky-600/25 text-white',
          skillTagBg: 'bg-sky-50 dark:bg-sky-950/40 text-sky-900 dark:text-sky-300 border-sky-200 dark:border-sky-900/40',
          statIconColor: 'text-sky-500',
          accentColor: '#0EA5E9',
        };
      case 'uxui':
      case 'ux-ui':
      case 'ux-ui-design':
        return {
          badgeBg: 'bg-rose-600/90 text-white border-rose-400/40',
          badgeText: 'text-rose-200',
          badgeIcon: Layout,
          trackTagText: 'text-pink-300 border-pink-500/40 bg-slate-950/80',
          trackTagIcon: Layout,
          hoverBorder: 'hover:border-rose-500/60 hover:shadow-rose-500/10',
          englishTitleColor: 'text-pink-600 dark:text-pink-400',
          primaryBtnBg: 'bg-rose-600 hover:bg-rose-500 active:bg-rose-700 shadow-rose-600/25 text-white',
          skillTagBg: 'bg-rose-50 dark:bg-rose-950/40 text-rose-900 dark:text-rose-300 border-rose-200 dark:border-rose-900/40',
          statIconColor: 'text-rose-500',
          accentColor: '#F43F5E',
        };
      case 'data-analytics':
      case 'dataanalytics':
        return {
          badgeBg: 'bg-teal-600/90 text-white border-teal-400/40',
          badgeText: 'text-teal-200',
          badgeIcon: Zap,
          trackTagText: 'text-emerald-300 border-emerald-500/40 bg-slate-950/80',
          trackTagIcon: Code2,
          hoverBorder: 'hover:border-emerald-500/60 hover:shadow-emerald-500/10',
          englishTitleColor: 'text-emerald-600 dark:text-emerald-400',
          primaryBtnBg: 'bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 shadow-emerald-600/25 text-white',
          skillTagBg: 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border-emerald-200 dark:border-emerald-900/40',
          statIconColor: 'text-emerald-500',
          accentColor: '#10B981',
        };
      case 'database-sql':
      case 'database':
        return {
          badgeBg: 'bg-cyan-600/90 text-white border-cyan-400/40',
          badgeText: 'text-cyan-200',
          badgeIcon: Database,
          trackTagText: 'text-cyan-300 border-cyan-500/40 bg-slate-950/80',
          trackTagIcon: Database,
          hoverBorder: 'hover:border-cyan-500/60 hover:shadow-cyan-500/10',
          englishTitleColor: 'text-cyan-600 dark:text-cyan-400',
          primaryBtnBg: 'bg-cyan-600 hover:bg-cyan-500 active:bg-cyan-700 shadow-cyan-600/25 text-white',
          skillTagBg: 'bg-cyan-50 dark:bg-cyan-950/40 text-cyan-900 dark:text-cyan-300 border-cyan-200 dark:border-cyan-900/40',
          statIconColor: 'text-cyan-500',
          accentColor: '#06B6D4',
        };
      case 'it-support':
      case 'itsupport':
        return {
          badgeBg: 'bg-cyan-600/90 text-white border-cyan-400/40',
          badgeText: 'text-cyan-200',
          badgeIcon: Sparkles,
          trackTagText: 'text-cyan-300 border-cyan-500/40 bg-slate-950/80',
          trackTagIcon: BookOpen,
          hoverBorder: 'hover:border-cyan-500/60 hover:shadow-cyan-500/10',
          englishTitleColor: 'text-cyan-600 dark:text-cyan-400',
          primaryBtnBg: 'bg-cyan-600 hover:bg-cyan-500 active:bg-cyan-700 shadow-cyan-600/25 text-white',
          skillTagBg: 'bg-cyan-50 dark:bg-cyan-950/40 text-cyan-900 dark:text-cyan-300 border-cyan-200 dark:border-cyan-900/40',
          statIconColor: 'text-cyan-500',
          accentColor: '#06B6D4',
        };
      default:
        return {
          badgeBg: 'bg-indigo-600/90 text-white border-indigo-400/40',
          badgeText: 'text-indigo-200',
          badgeIcon: Sparkles,
          trackTagText: 'text-indigo-300 border-indigo-500/40 bg-slate-950/80',
          trackTagIcon: BookOpen,
          hoverBorder: 'hover:border-indigo-500/60 hover:shadow-indigo-500/10',
          englishTitleColor: 'text-indigo-600 dark:text-indigo-400',
          primaryBtnBg: 'bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 shadow-indigo-600/25 text-white',
          skillTagBg: 'bg-indigo-50 dark:bg-indigo-950/40 text-indigo-800 dark:text-indigo-300 border-indigo-200 dark:border-indigo-900/40',
          statIconColor: 'text-indigo-500',
          accentColor: '#6366F1',
        };
    }
  }, [category]);

  const BadgeIcon = theme.badgeIcon;
  const TrackTagIcon = theme.trackTagIcon;

  // Skills slicing (capped to 5 by default for 2-col wide card)
  const visibleSkills = skills.slice(0, maxVisibleSkills);
  const remainingSkillsCount = skills.length - maxVisibleSkills;

  return (
    <div 
      className={`group relative flex flex-col justify-between bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1 motion-reduce:hover:translate-y-0 transition-all duration-300 ${theme.hoverBorder} w-full min-h-[480px] sm:min-h-[500px] h-full text-left`}
    >
      {/* 1. HEADER BANNER WITH SUBJECT-SPECIFIC VECTOR ILLUSTRATION / IMAGE */}
      <div className="relative w-full aspect-[16/9] min-h-[210px] sm:min-h-[250px] overflow-hidden bg-slate-950 shrink-0">
        {coverImage ? (
          <img 
            src={coverImage} 
            alt={titleEnglish}
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <CourseHeaderIllustration category={category} titleEnglish={titleEnglish} />
        )}

        {/* Dark Gradient Scrim Overlay for crisp overlay readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-slate-950/30 opacity-60 group-hover:opacity-45 transition-opacity" />
        
        {/* Top Badges Row */}
        <div className="absolute top-3 left-3.5 right-3.5 flex items-center justify-between z-10 gap-2">
          {/* Top-Left Level Badge */}
          <span className={`px-3 py-1 rounded-full backdrop-blur-md text-white text-xs font-black shadow-lg border flex items-center gap-1.5 tracking-wide ${theme.badgeBg}`}>
            <BadgeIcon className={`w-3.5 h-3.5 ${theme.badgeText}`} />
            <span className="truncate max-w-[150px] sm:max-w-none">{levelBadge}</span>
          </span>

          {/* Top-Right Rating Pill */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/85 backdrop-blur-md text-amber-400 border border-white/15 text-xs font-black shadow-lg shrink-0">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>{rating.toFixed(1)}</span>
            <span className="text-slate-400 font-mono font-normal text-xs">
              ({learnerCount})
            </span>
          </div>
        </div>

        {/* Bottom-Left Overlay Format Tag */}
        <div className="absolute bottom-3 left-3.5 z-10">
          <span className={`px-3 py-1 rounded-lg border text-xs font-bold font-mono uppercase tracking-wider flex items-center gap-1.5 shadow-md ${theme.trackTagText}`}>
            <TrackTagIcon className="w-3.5 h-3.5" />
            <span className="truncate">{formatOverlayTag}</span>
          </span>
        </div>
      </div>

      {/* 2. CARD BODY ANATOMY */}
      <div className="p-5 sm:p-6 space-y-4 flex-1 flex flex-col justify-between">
        <div className="space-y-3">
          {/* Eyebrow Label Row */}
          <div className="flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
            <GraduationCap className="w-4 h-4 text-slate-400 shrink-0" />
            <span className="truncate">{eyebrowLabel || (language === 'en' ? 'Master Bootcamp • Certified' : 'ថ្នាក់រៀន Master Bootcamp • មានវិញ្ញាបនបត្រ')}</span>
          </div>

          {/* Title Block (Language responsive: English primary in EN mode, Khmer primary in KM mode) */}
          <div className="space-y-1">
            <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white leading-snug tracking-tight line-clamp-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {language === 'en' ? titleEnglish : titleKhmer}
            </h3>
            <p className={`text-xs sm:text-sm font-bold font-mono tracking-wide ${theme.englishTitleColor} truncate`}>
              {language === 'en' ? titleKhmer : titleEnglish}
            </p>
          </div>

          {/* Description (2-3 lines with breathing room) */}
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2 sm:line-clamp-3 min-h-[3rem] sm:min-h-[3.6rem]">
            {description}
          </p>

          {/* Skills / Tech Stack Section */}
          <div className="space-y-2 pt-1">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
              {language === 'en' ? 'Core Skills Mastered:' : 'ជំនាញដែលនឹងទទួលបាន៖'}
            </span>
            <div className="flex flex-wrap items-center gap-1.5 min-h-[34px]">
              {visibleSkills.map((tech) => (
                <span 
                  key={tech} 
                  className={`px-3 py-1 border rounded-lg text-xs font-bold font-mono transition-colors ${theme.skillTagBg}`}
                >
                  {tech}
                </span>
              ))}
              {remainingSkillsCount > 0 && (
                <span className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700 rounded-lg text-xs font-bold font-mono">
                  +{remainingSkillsCount} {language === 'en' ? 'more' : 'ទៀត'}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* 3. FOOTER / STATS & DUAL CTA BUTTONS ROW */}
        <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 space-y-4 mt-auto">
          {/* Quick Stats Bar */}
          <div className="flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400 gap-2">
            {durationWeeks && (
              <span className="flex items-center gap-1.5 font-semibold text-slate-700 dark:text-slate-300 truncate">
                <Clock className="w-4 h-4 text-amber-500 shrink-0" />
                <span>{durationWeeks} {language === 'en' ? 'Wks' : 'សប្តាហ៍'} ({durationHours}+ hrs)</span>
              </span>
            )}
            {totalModules !== undefined && (
              <span className="flex items-center gap-1.5 font-semibold text-slate-700 dark:text-slate-300 truncate">
                <BookOpen className={`w-4 h-4 ${theme.statIconColor} shrink-0`} />
                <span>{totalModules} {language === 'en' ? 'Modules' : 'ម៉ូឌុល'}</span>
              </span>
            )}
            <span className="flex items-center gap-1.5 font-semibold text-emerald-600 dark:text-emerald-400 shrink-0">
              <Award className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>{language === 'en' ? 'Certificate' : 'វិញ្ញាបនបត្រ'}</span>
            </span>
          </div>

          {/* Action Buttons Grid */}
          <div className="grid grid-cols-2 gap-3 pt-0.5">
            <button
              onClick={onEnrollOrContinue}
              className={`w-full inline-flex items-center justify-center gap-2 h-11 sm:h-12 px-4 rounded-xl font-extrabold text-xs sm:text-sm tracking-wide transition shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 cursor-pointer ${theme.primaryBtnBg}`}
            >
              {isEnrolled ? (
                <>
                  <Play className="w-4 h-4 fill-current shrink-0" />
                  <span className="truncate">{language === 'en' ? 'Continue' : 'បន្តរៀន'}</span>
                </>
              ) : (
                <>
                  <GraduationCap className="w-4 h-4 shrink-0" />
                  <span className="truncate">{language === 'en' ? 'Enroll Now' : 'ចូលរៀនឥឡូវនេះ'}</span>
                </>
              )}
            </button>

            <button
              onClick={onViewOverview}
              className="w-full inline-flex items-center justify-center gap-1.5 h-11 sm:h-12 px-4 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold text-xs sm:text-sm rounded-xl transition cursor-pointer border border-slate-200/60 dark:border-slate-700/60"
              title={language === 'en' ? 'View Curriculum & Overview' : 'មើលព័ត៌មានលម្អិត'}
            >
              <span className="truncate">{language === 'en' ? 'Curriculum' : 'មើលព័ត៌មាន'}</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


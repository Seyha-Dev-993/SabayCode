import React from 'react';
import { useApp } from '../context/AppContext';

interface TechItem {
  name: string;
  icon: string;
  courseId: string;
}

interface TechMarqueeProps {
  onSelectCourse?: (courseId: string) => void;
}

const row1Techs: TechItem[] = [
  {
    name: 'React',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
    courseId: 'react',
  },
  {
    name: 'Node.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
    courseId: 'nodejs',
  },
  {
    name: 'Python',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
    courseId: 'python',
  },
  {
    name: 'TypeScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
    courseId: 'typescript',
  },
  {
    name: 'JavaScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
    courseId: 'javascript',
  },
  {
    name: 'CSS3',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
    courseId: 'css',
  },
  {
    name: 'HTML5',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
    courseId: 'html',
  },
];

const row2Techs: TechItem[] = [
  {
    name: 'C++',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg',
    courseId: 'cpp',
  },
  {
    name: 'Java',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
    courseId: 'java',
  },
  {
    name: 'PHP',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg',
    courseId: 'php',
  },
  {
    name: 'Swift',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg',
    courseId: 'swift',
  },
  {
    name: 'Kotlin',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg',
    courseId: 'kotlin',
  },
  {
    name: 'Go',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg',
    courseId: 'backend-class',
  },
  {
    name: 'Dart',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg',
    courseId: 'dart',
  },
];

// Quadruple arrays for a smooth seamless loop across all viewport widths
const row1Repeated = [...row1Techs, ...row1Techs, ...row1Techs, ...row1Techs];
const row2Repeated = [...row2Techs, ...row2Techs, ...row2Techs, ...row2Techs];

export const TechMarquee: React.FC<TechMarqueeProps> = ({ onSelectCourse }) => {
  const { language } = useApp();

  const handleTechClick = (courseId: string) => {
    if (onSelectCourse) {
      onSelectCourse(courseId);
    } else {
      window.location.hash = `#/courses?id=${courseId}`;
    }
  };

  return (
    <div className="w-full py-4 my-4 sm:my-6 overflow-hidden relative" id="tech-marquee-section">
      {/* Optional Eyebrow Header */}
      <div className="text-center mb-4 sm:mb-6">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[11px] sm:text-xs font-semibold tracking-wide text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 border border-blue-100 dark:border-blue-900/40">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
          {language === 'en'
            ? "Technologies & Frameworks You'll Learn (Click any logo to start course)"
            : 'ភាសាសរសេរកូដ និងបច្ចេកវិទ្យាដែលអ្នកនឹងរៀន (ចុចលើ Logo ដើម្បីចូលរៀន)'}
        </span>
      </div>

      {/* Marquee Wrapper with Edge Gradients */}
      <div className="relative w-full overflow-hidden">
        {/* Soft Left Gradient Fade-out Mask */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-slate-50 dark:from-slate-950 to-transparent z-10" />

        {/* Soft Right Gradient Fade-out Mask */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-slate-50 dark:from-slate-950 to-transparent z-10" />

        {/* Row 1: Right -> Left */}
        <div className="flex w-max space-x-3 sm:space-x-4 animate-marquee-left hover:[animation-play-state:paused] mb-3 sm:mb-4">
          {row1Repeated.map((tech, idx) => (
            <button
              type="button"
              key={`row1-${tech.name}-${idx}`}
              onClick={() => handleTechClick(tech.courseId)}
              title={language === 'en' ? `Start ${tech.name} course` : `ចូលរៀនវគ្គ ${tech.name}`}
              className="group/card bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-2xl p-2.5 sm:p-3.5 w-24 sm:w-28 h-24 sm:h-28 shrink-0 flex flex-col items-center justify-center gap-1.5 sm:gap-2 shadow-xs hover:shadow-md hover:border-blue-400/50 dark:hover:border-blue-500/50 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer select-none text-center"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center group-hover/card:scale-110 transition-transform duration-200">
                <img
                  src={tech.icon}
                  alt={`${tech.name} brand icon`}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-[11px] sm:text-xs font-semibold text-slate-700 dark:text-slate-300 tracking-tight truncate max-w-full group-hover/card:text-blue-600 dark:group-hover/card:text-blue-400 transition-colors">
                {tech.name}
              </span>
            </button>
          ))}
        </div>

        {/* Row 2: Left -> Right */}
        <div className="flex w-max space-x-3 sm:space-x-4 animate-marquee-right hover:[animation-play-state:paused]">
          {row2Repeated.map((tech, idx) => (
            <button
              type="button"
              key={`row2-${tech.name}-${idx}`}
              onClick={() => handleTechClick(tech.courseId)}
              title={language === 'en' ? `Start ${tech.name} course` : `ចូលរៀនវគ្គ ${tech.name}`}
              className="group/card bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-2xl p-2.5 sm:p-3.5 w-24 sm:w-28 h-24 sm:h-28 shrink-0 flex flex-col items-center justify-center gap-1.5 sm:gap-2 shadow-xs hover:shadow-md hover:border-blue-400/50 dark:hover:border-blue-500/50 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer select-none text-center"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center group-hover/card:scale-110 transition-transform duration-200">
                <img
                  src={tech.icon}
                  alt={`${tech.name} brand icon`}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-[11px] sm:text-xs font-semibold text-slate-700 dark:text-slate-300 tracking-tight truncate max-w-full group-hover/card:text-blue-600 dark:group-hover/card:text-blue-400 transition-colors">
                {tech.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import aiPromptCoverImg from '../assets/images/AI_Prompt.jpg';

interface CourseBrandIconProps {
  iconName?: string;
  courseId?: string;
  className?: string;
}

export const getCourseBrandStyle = (courseId?: string, iconName?: string) => {
  const key = (courseId || iconName || '').toLowerCase().trim();
  switch (key) {
    case 'xml':
    case 'filexml':
      return {
        badgeBg: 'bg-amber-500/10 dark:bg-amber-500/20',
        badgeBorder: 'border-amber-200/80 dark:border-amber-900/40',
        categoryText: 'text-amber-600 dark:text-amber-400',
        accentBorder: 'group-hover:border-amber-300 dark:group-hover:border-amber-700',
      };
    case 'html':
    case 'html5':
    case 'filehtml':
      return {
        badgeBg: 'bg-orange-500/10 dark:bg-orange-500/20',
        badgeBorder: 'border-orange-200/80 dark:border-orange-900/40',
        categoryText: 'text-orange-600 dark:text-orange-400',
        accentBorder: 'group-hover:border-orange-300 dark:group-hover:border-orange-700',
      };
    case 'css':
    case 'css3':
    case 'filecode':
      return {
        badgeBg: 'bg-sky-500/10 dark:bg-sky-500/20',
        badgeBorder: 'border-sky-200/80 dark:border-sky-900/40',
        categoryText: 'text-sky-600 dark:text-sky-400',
        accentBorder: 'group-hover:border-sky-300 dark:group-hover:border-sky-700',
      };
    case 'javascript':
    case 'js':
    case 'braces':
      return {
        badgeBg: 'bg-amber-400/15 dark:bg-amber-400/20',
        badgeBorder: 'border-amber-300/80 dark:border-amber-700/50',
        categoryText: 'text-amber-600 dark:text-amber-400',
        accentBorder: 'group-hover:border-amber-300 dark:group-hover:border-amber-700',
      };
    case 'typescript':
    case 'ts':
    case 'filecode2':
      return {
        badgeBg: 'bg-blue-500/10 dark:bg-blue-500/20',
        badgeBorder: 'border-blue-200/80 dark:border-blue-900/40',
        categoryText: 'text-blue-600 dark:text-blue-400',
        accentBorder: 'group-hover:border-blue-300 dark:group-hover:border-blue-700',
      };
    case 'python':
    case 'py':
    case 'filesymlink':
      return {
        badgeBg: 'bg-emerald-500/10 dark:bg-emerald-500/20',
        badgeBorder: 'border-emerald-200/80 dark:border-emerald-900/40',
        categoryText: 'text-emerald-600 dark:text-emerald-400',
        accentBorder: 'group-hover:border-emerald-300 dark:group-hover:border-emerald-700',
      };
    case 'react':
    case 'reactjs':
    case 'component':
      return {
        badgeBg: 'bg-cyan-500/10 dark:bg-cyan-500/20',
        badgeBorder: 'border-cyan-200/80 dark:border-cyan-900/40',
        categoryText: 'text-cyan-600 dark:text-cyan-400',
        accentBorder: 'group-hover:border-cyan-300 dark:group-hover:border-cyan-700',
      };
    case 'nextjs':
    case 'next':
    case 'monitor':
      return {
        badgeBg: 'bg-slate-900/10 dark:bg-slate-100/10',
        badgeBorder: 'border-slate-300 dark:border-slate-700',
        categoryText: 'text-slate-800 dark:text-slate-200',
        accentBorder: 'group-hover:border-slate-400 dark:group-hover:border-slate-600',
      };
    case 'java':
    case 'fajava':
      return {
        badgeBg: 'bg-rose-500/10 dark:bg-rose-500/20',
        badgeBorder: 'border-rose-200/80 dark:border-rose-900/40',
        categoryText: 'text-rose-600 dark:text-rose-400',
        accentBorder: 'group-hover:border-rose-300 dark:group-hover:border-rose-700',
      };
    case 'cpp':
    case 'c++':
    case 'cpu':
    case 'csharp':
    case 'c#':
    case 'hash':
    case 'c':
    case 'code2':
      return {
        badgeBg: 'bg-indigo-500/10 dark:bg-indigo-500/20',
        badgeBorder: 'border-indigo-200/80 dark:border-indigo-900/40',
        categoryText: 'text-indigo-600 dark:text-indigo-400',
        accentBorder: 'group-hover:border-indigo-300 dark:group-hover:border-indigo-700',
      };
    case 'git':
    case 'gitbranch':
      return {
        badgeBg: 'bg-rose-500/10 dark:bg-rose-500/20',
        badgeBorder: 'border-rose-200/80 dark:border-rose-900/40',
        categoryText: 'text-rose-600 dark:text-rose-400',
        accentBorder: 'group-hover:border-rose-300 dark:group-hover:border-rose-700',
      };
    case 'tailwind':
    case 'tailwindcss':
    case 'palette':
      return {
        badgeBg: 'bg-teal-500/10 dark:bg-teal-500/20',
        badgeBorder: 'border-teal-200/80 dark:border-teal-900/40',
        categoryText: 'text-teal-600 dark:text-teal-400',
        accentBorder: 'group-hover:border-teal-300 dark:group-hover:border-teal-700',
      };
    case 'sass':
    case 'scss':
      return {
        badgeBg: 'bg-pink-500/10 dark:bg-pink-500/20',
        badgeBorder: 'border-pink-200/80 dark:border-pink-900/40',
        categoryText: 'text-pink-600 dark:text-pink-400',
        accentBorder: 'group-hover:border-pink-300 dark:group-hover:border-pink-700',
      };
    case 'svelte':
      return {
        badgeBg: 'bg-orange-500/10 dark:bg-orange-500/20',
        badgeBorder: 'border-orange-200/80 dark:border-orange-900/40',
        categoryText: 'text-orange-600 dark:text-orange-400',
        accentBorder: 'group-hover:border-orange-300 dark:group-hover:border-orange-700',
      };
    case 'npm':
      return {
        badgeBg: 'bg-red-500/10 dark:bg-red-500/20',
        badgeBorder: 'border-red-200/80 dark:border-red-900/40',
        categoryText: 'text-red-600 dark:text-red-400',
        accentBorder: 'group-hover:border-red-300 dark:group-hover:border-red-700',
      };
    case 'vite':
    case 'ux-ui-design':
    case 'uxui':
    case 'ux-ui':
    case 'design':
      return {
        badgeBg: 'bg-purple-500/10 dark:bg-purple-500/20',
        badgeBorder: 'border-purple-200/80 dark:border-purple-900/40',
        categoryText: 'text-purple-600 dark:text-purple-400',
        accentBorder: 'group-hover:border-purple-300 dark:group-hover:border-purple-700',
      };
    case 'webpack':
      return {
        badgeBg: 'bg-sky-500/10 dark:bg-sky-500/20',
        badgeBorder: 'border-sky-200/80 dark:border-sky-900/40',
        categoryText: 'text-sky-600 dark:text-sky-400',
        accentBorder: 'group-hover:border-sky-300 dark:group-hover:border-sky-700',
      };
    case 'it-support':
    case 'it_support':
    case 'laptop':
    case 'devtools':
    case 'debugging':
      return {
        badgeBg: 'bg-cyan-500/10 dark:bg-cyan-500/20',
        badgeBorder: 'border-cyan-200/80 dark:border-cyan-900/40',
        categoryText: 'text-cyan-600 dark:text-cyan-400',
        accentBorder: 'group-hover:border-cyan-300 dark:group-hover:border-cyan-700',
      };
    case 'a11y':
    case 'accessibility':
      return {
        badgeBg: 'bg-indigo-500/10 dark:bg-indigo-500/20',
        badgeBorder: 'border-indigo-200/80 dark:border-indigo-900/40',
        categoryText: 'text-indigo-600 dark:text-indigo-400',
        accentBorder: 'group-hover:border-indigo-300 dark:group-hover:border-indigo-700',
      };
    case 'responsive':
      return {
        badgeBg: 'bg-emerald-500/10 dark:bg-emerald-500/20',
        badgeBorder: 'border-emerald-200/80 dark:border-emerald-900/40',
        categoryText: 'text-emerald-600 dark:text-emerald-400',
        accentBorder: 'group-hover:border-emerald-300 dark:group-hover:border-emerald-700',
      };
    case 'testing':
    case 'jest':
      return {
        badgeBg: 'bg-rose-500/10 dark:bg-rose-500/20',
        badgeBorder: 'border-rose-200/80 dark:border-rose-900/40',
        categoryText: 'text-rose-600 dark:text-rose-400',
        accentBorder: 'group-hover:border-rose-300 dark:group-hover:border-rose-700',
      };
    case 'swift':
    case 'swiftui':
      return {
        badgeBg: 'bg-orange-500/10 dark:bg-orange-500/20',
        badgeBorder: 'border-orange-200/80 dark:border-orange-900/40',
        categoryText: 'text-orange-600 dark:text-orange-400',
        accentBorder: 'group-hover:border-orange-300 dark:group-hover:border-orange-700',
      };
    case 'react-native':
    case 'reactnative':
      return {
        badgeBg: 'bg-cyan-500/10 dark:bg-cyan-500/20',
        badgeBorder: 'border-cyan-200/80 dark:border-cyan-900/40',
        categoryText: 'text-cyan-600 dark:text-cyan-400',
        accentBorder: 'group-hover:border-cyan-300 dark:group-hover:border-cyan-700',
      };
    case 'jetpack-compose':
    case 'compose':
    case 'kmm':
    case 'kotlin-multiplatform':
    case 'kotlin':
    case 'bootstrap':
    case 'grid':
      return {
        badgeBg: 'bg-purple-500/10 dark:bg-purple-500/20',
        badgeBorder: 'border-purple-200/80 dark:border-purple-900/40',
        categoryText: 'text-purple-600 dark:text-purple-400',
        accentBorder: 'group-hover:border-purple-300 dark:group-hover:border-purple-700',
      };
    case 'dotnet-maui':
    case 'maui':
      return {
        badgeBg: 'bg-violet-500/10 dark:bg-violet-500/20',
        badgeBorder: 'border-violet-200/80 dark:border-violet-900/40',
        categoryText: 'text-violet-600 dark:text-violet-400',
        accentBorder: 'group-hover:border-violet-300 dark:group-hover:border-violet-700',
      };
    case 'java-android':
    case 'android':
      return {
        badgeBg: 'bg-emerald-500/10 dark:bg-emerald-500/20',
        badgeBorder: 'border-emerald-200/80 dark:border-emerald-900/40',
        categoryText: 'text-emerald-600 dark:text-emerald-400',
        accentBorder: 'group-hover:border-emerald-300 dark:group-hover:border-emerald-700',
      };
    case 'dart':
    case 'sidart':
      return {
        badgeBg: 'bg-[#0175C2]/10 dark:bg-[#0175C2]/20',
        badgeBorder: 'border-[#0175C2]/80 dark:border-[#0175C2]/40',
        categoryText: 'text-[#0175C2] dark:text-sky-400',
        accentBorder: 'group-hover:border-[#0175C2] dark:group-hover:border-[#0175C2]',
      };
    case 'flutter':
      return {
        badgeBg: 'bg-sky-500/10 dark:bg-sky-500/20',
        badgeBorder: 'border-sky-200/80 dark:border-sky-900/40',
        categoryText: 'text-sky-600 dark:text-sky-400',
        accentBorder: 'group-hover:border-sky-300 dark:group-hover:border-sky-700',
      };
    case 'spring':
    case 'spring-boot':
    case 'springboot':
      return {
        badgeBg: 'bg-emerald-500/10 dark:bg-emerald-500/20',
        badgeBorder: 'border-emerald-200/80 dark:border-emerald-900/40',
        categoryText: 'text-emerald-600 dark:text-emerald-400',
        accentBorder: 'group-hover:border-emerald-300 dark:group-hover:border-emerald-700',
      };
    case 'mongodb':
    case 'mongo':
    case 'simongodb':
      return {
        badgeBg: 'bg-[#00ED64]/10 dark:bg-[#00ED64]/20',
        badgeBorder: 'border-[#00ED64]/30 dark:border-[#00ED64]/40',
        categoryText: 'text-[#00ED64] dark:text-[#00ED64]',
        accentBorder: 'group-hover:border-[#00ED64] dark:group-hover:border-[#00ED64]',
      };
    case 'vue':
    case 'vuejs':
      return {
        badgeBg: 'bg-emerald-500/10 dark:bg-emerald-500/20',
        badgeBorder: 'border-emerald-200/80 dark:border-emerald-900/40',
        categoryText: 'text-emerald-600 dark:text-emerald-400',
        accentBorder: 'group-hover:border-emerald-300 dark:group-hover:border-emerald-700',
      };
    case 'ai-prompt-engineering':
    case 'aiprompt':
    case 'prompt-engineering':
    case 'ai_prompt_class':
      return {
        badgeBg: 'bg-purple-500/10 dark:bg-purple-500/20',
        badgeBorder: 'border-purple-200/80 dark:border-purple-900/40',
        categoryText: 'text-purple-600 dark:text-purple-400',
        accentBorder: 'group-hover:border-purple-300 dark:group-hover:border-purple-700',
      };
    case 'data-analytics':
    case 'dataanalytics':
    case 'data_analytics':
    case 'pandas':
      return {
        badgeBg: 'bg-emerald-500/10 dark:bg-emerald-500/20',
        badgeBorder: 'border-emerald-200/80 dark:border-emerald-900/40',
        categoryText: 'text-emerald-600 dark:text-emerald-400',
        accentBorder: 'group-hover:border-emerald-300 dark:group-hover:border-emerald-700',
      };

    default:
      return {
        badgeBg: 'bg-indigo-500/10 dark:bg-indigo-500/20',
        badgeBorder: 'border-indigo-200/80 dark:border-indigo-900/40',
        categoryText: 'text-indigo-600 dark:text-indigo-400',
        accentBorder: 'group-hover:border-indigo-300 dark:group-hover:border-indigo-700',
      };
  }
};

export const getCourseBannerStyle = (courseId?: string) => {
  const key = (courseId || '').toLowerCase().trim();
  switch (key) {
    case 'xml':
    case 'filexml':
      return {
        techLogoSvg: '',
        bannerImage: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=800&auto=format&fit=crop',
        bannerGradient: 'from-amber-600/90 via-amber-800/80 to-slate-950',
        badgeBg: 'bg-amber-500',
        accentColor: 'text-amber-500 dark:text-amber-400',
        buttonBg: 'bg-amber-600 hover:bg-amber-500 active:bg-amber-700 text-white shadow-amber-600/20',
        borderHover: 'hover:border-amber-500/50',
      };
    case 'html':
    case 'html5':
    case 'filehtml':
      return {
        techLogoSvg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
        bannerImage: 'https://images.unsplash.com/photo-1621839673705-6617adf9e890?q=80&w=800&auto=format&fit=crop',
        bannerGradient: 'from-orange-600/90 via-red-700/80 to-slate-950',
        badgeBg: 'bg-orange-500',
        accentColor: 'text-orange-500 dark:text-orange-400',
        buttonBg: 'bg-orange-600 hover:bg-orange-500 active:bg-orange-700 text-white shadow-orange-600/20',
        borderHover: 'hover:border-orange-500/50',
      };
    case 'css':
    case 'css3':
    case 'filecode':
      return {
        techLogoSvg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
        bannerImage: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop',
        bannerGradient: 'from-blue-600/90 via-sky-700/80 to-slate-950',
        badgeBg: 'bg-sky-500',
        accentColor: 'text-sky-500 dark:text-sky-400',
        buttonBg: 'bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white shadow-blue-600/20',
        borderHover: 'hover:border-sky-500/50',
      };
    case 'javascript':
    case 'js':
    case 'braces':
      return {
        techLogoSvg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        bannerImage: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?q=80&w=800&auto=format&fit=crop',
        bannerGradient: 'from-amber-500/90 via-amber-700/80 to-slate-950',
        badgeBg: 'bg-amber-400',
        accentColor: 'text-amber-500 dark:text-amber-400',
        buttonBg: 'bg-amber-500 hover:bg-amber-400 active:bg-amber-600 text-slate-950 font-black shadow-amber-500/20',
        borderHover: 'hover:border-amber-400/50',
      };
    case 'typescript':
    case 'ts':
    case 'filecode2':
      return {
        techLogoSvg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
        bannerImage: 'https://images.unsplash.com/photo-1516116211223-4c71412030f0?q=80&w=800&auto=format&fit=crop',
        bannerGradient: 'from-blue-600/90 via-indigo-800/80 to-slate-950',
        badgeBg: 'bg-blue-500',
        accentColor: 'text-blue-500 dark:text-blue-400',
        buttonBg: 'bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white shadow-blue-600/20',
        borderHover: 'hover:border-blue-500/50',
      };
    case 'python':
    case 'py':
    case 'filesymlink':
      return {
        techLogoSvg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
        bannerImage: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop',
        bannerGradient: 'from-emerald-600/90 via-teal-800/80 to-slate-950',
        badgeBg: 'bg-emerald-500',
        accentColor: 'text-emerald-500 dark:text-emerald-400',
        buttonBg: 'bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white shadow-emerald-600/20',
        borderHover: 'hover:border-emerald-500/50',
      };
    case 'react':
    case 'reactjs':
    case 'component':
      return {
        techLogoSvg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        bannerImage: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop',
        bannerGradient: 'from-cyan-600/90 via-blue-900/80 to-slate-950',
        badgeBg: 'bg-cyan-400',
        accentColor: 'text-cyan-500 dark:text-cyan-400',
        buttonBg: 'bg-cyan-600 hover:bg-cyan-500 active:bg-cyan-700 text-white shadow-cyan-600/20',
        borderHover: 'hover:border-cyan-500/50',
      };
    case 'nextjs':
    case 'next':
    case 'monitor':
      return {
        techLogoSvg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
        bannerImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop',
        bannerGradient: 'from-slate-800/90 via-slate-900/90 to-black',
        badgeBg: 'bg-slate-500',
        accentColor: 'text-slate-700 dark:text-slate-300',
        buttonBg: 'bg-slate-900 dark:bg-slate-100 hover:bg-slate-800 dark:hover:bg-white text-white dark:text-slate-900 shadow-slate-900/20',
        borderHover: 'hover:border-slate-500/50',
      };
    case 'vue':
      return {
        techLogoSvg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
        bannerImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
        bannerGradient: 'from-emerald-500/90 via-teal-800/80 to-slate-950',
        badgeBg: 'bg-emerald-400',
        accentColor: 'text-emerald-500 dark:text-emerald-400',
        buttonBg: 'bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white shadow-emerald-600/20',
        borderHover: 'hover:border-emerald-500/50',
      };
    case 'angular':
      return {
        techLogoSvg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
        bannerImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop',
        bannerGradient: 'from-red-600/90 via-rose-800/80 to-slate-950',
        badgeBg: 'bg-red-500',
        accentColor: 'text-red-500 dark:text-red-400',
        buttonBg: 'bg-red-600 hover:bg-red-500 active:bg-red-700 text-white shadow-red-600/20',
        borderHover: 'hover:border-red-500/50',
      };
    case 'sass':
    case 'scss':
      return {
        techLogoSvg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg',
        bannerImage: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop',
        bannerGradient: 'from-pink-600/90 via-rose-800/80 to-slate-950',
        badgeBg: 'bg-pink-500',
        accentColor: 'text-pink-500 dark:text-pink-400',
        buttonBg: 'bg-pink-600 hover:bg-pink-500 active:bg-pink-700 text-white shadow-pink-600/20',
        borderHover: 'hover:border-pink-500/50',
      };
    case 'svelte':
      return {
        techLogoSvg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg',
        bannerImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop',
        bannerGradient: 'from-orange-600/90 via-red-800/80 to-slate-950',
        badgeBg: 'bg-orange-500',
        accentColor: 'text-orange-500 dark:text-orange-400',
        buttonBg: 'bg-orange-600 hover:bg-orange-500 active:bg-orange-700 text-white shadow-orange-600/20',
        borderHover: 'hover:border-orange-500/50',
      };
    case 'bootstrap':
      return {
        techLogoSvg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
        bannerImage: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop',
        bannerGradient: 'from-purple-600/90 via-indigo-800/80 to-slate-950',
        badgeBg: 'bg-purple-500',
        accentColor: 'text-purple-500 dark:text-purple-400',
        buttonBg: 'bg-purple-600 hover:bg-purple-500 active:bg-purple-700 text-white shadow-purple-600/20',
        borderHover: 'hover:border-purple-500/50',
      };
    case 'java':
    case 'fajava':
      return {
        techLogoSvg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
        bannerImage: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop',
        bannerGradient: 'from-rose-600/90 via-orange-800/80 to-slate-950',
        badgeBg: 'bg-rose-500',
        accentColor: 'text-rose-500 dark:text-rose-400',
        buttonBg: 'bg-rose-600 hover:bg-rose-500 active:bg-rose-700 text-white shadow-rose-600/20',
        borderHover: 'hover:border-rose-500/50',
      };
    case 'spring':
    case 'spring-boot':
    case 'springboot':
      return {
        techLogoSvg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
        bannerImage: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop',
        bannerGradient: 'from-emerald-600/90 via-teal-800/80 to-slate-950',
        badgeBg: 'bg-[#6DB33F]',
        accentColor: 'text-emerald-500 dark:text-emerald-400',
        buttonBg: 'bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white shadow-emerald-600/20',
        borderHover: 'hover:border-emerald-500/50',
      };
    case 'cpp':
    case 'c++':
      return {
        techLogoSvg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
        bannerImage: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=800&auto=format&fit=crop',
        bannerGradient: 'from-indigo-600/90 via-blue-900/80 to-slate-950',
        badgeBg: 'bg-indigo-500',
        accentColor: 'text-indigo-500 dark:text-indigo-400',
        buttonBg: 'bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white shadow-indigo-600/20',
        borderHover: 'hover:border-indigo-500/50',
      };
    case 'csharp':
    case 'c#':
      return {
        techLogoSvg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
        bannerImage: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=800&auto=format&fit=crop',
        bannerGradient: 'from-purple-600/90 via-indigo-900/80 to-slate-950',
        badgeBg: 'bg-purple-500',
        accentColor: 'text-purple-500 dark:text-purple-400',
        buttonBg: 'bg-purple-600 hover:bg-purple-500 active:bg-purple-700 text-white shadow-purple-600/20',
        borderHover: 'hover:border-purple-500/50',
      };
    case 'c':
      return {
        techLogoSvg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
        bannerImage: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=800&auto=format&fit=crop',
        bannerGradient: 'from-blue-600/90 via-sky-900/80 to-slate-950',
        badgeBg: 'bg-blue-500',
        accentColor: 'text-blue-500 dark:text-blue-400',
        buttonBg: 'bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white shadow-blue-600/20',
        borderHover: 'hover:border-blue-500/50',
      };
    case 'php':
      return {
        techLogoSvg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
        bannerImage: 'https://images.unsplash.com/photo-1599507593499-a3f7d7d97667?q=80&w=800&auto=format&fit=crop',
        bannerGradient: 'from-indigo-600/90 via-purple-800/80 to-slate-950',
        badgeBg: 'bg-purple-500',
        accentColor: 'text-purple-500 dark:text-purple-400',
        buttonBg: 'bg-purple-600 hover:bg-purple-500 active:bg-purple-700 text-white shadow-purple-600/20',
        borderHover: 'hover:border-purple-500/50',
      };
    case 'mysql':
    case 'sql':
      return {
        techLogoSvg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
        bannerImage: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=800&auto=format&fit=crop',
        bannerGradient: 'from-blue-600/90 via-sky-800/80 to-slate-950',
        badgeBg: 'bg-sky-500',
        accentColor: 'text-sky-500 dark:text-sky-400',
        buttonBg: 'bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white shadow-blue-600/20',
        borderHover: 'hover:border-sky-500/50',
      };
    case 'git':
    case 'gitbranch':
      return {
        techLogoSvg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
        bannerImage: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?q=80&w=800&auto=format&fit=crop',
        bannerGradient: 'from-rose-600/90 via-orange-800/80 to-slate-950',
        badgeBg: 'bg-rose-500',
        accentColor: 'text-rose-500 dark:text-rose-400',
        buttonBg: 'bg-rose-600 hover:bg-rose-500 active:bg-rose-700 text-white shadow-rose-600/20',
        borderHover: 'hover:border-rose-500/50',
      };
    case 'kotlin':
    case 'jetpack-compose':
    case 'kmm':
    case 'kotlin-multiplatform':
      return {
        techLogoSvg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg',
        bannerImage: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop',
        bannerGradient: 'from-purple-600/90 via-indigo-800/80 to-slate-950',
        badgeBg: 'bg-purple-500',
        accentColor: 'text-purple-500 dark:text-purple-400',
        buttonBg: 'bg-purple-600 hover:bg-purple-500 active:bg-purple-700 text-white shadow-purple-600/20',
        borderHover: 'hover:border-purple-500/50',
      };
    case 'swift':
    case 'swiftui':
      return {
        techLogoSvg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg',
        bannerImage: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop',
        bannerGradient: 'from-orange-600/90 via-rose-800/80 to-slate-950',
        badgeBg: 'bg-orange-500',
        accentColor: 'text-orange-500 dark:text-orange-400',
        buttonBg: 'bg-orange-600 hover:bg-orange-500 active:bg-orange-700 text-white shadow-orange-600/20',
        borderHover: 'hover:border-orange-500/50',
      };
    case 'react-native':
    case 'reactnative':
      return {
        techLogoSvg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        bannerImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
        bannerGradient: 'from-cyan-600/90 via-blue-800/80 to-slate-950',
        badgeBg: 'bg-cyan-400',
        accentColor: 'text-cyan-500 dark:text-cyan-400',
        buttonBg: 'bg-cyan-600 hover:bg-cyan-500 active:bg-cyan-700 text-white shadow-cyan-600/20',
        borderHover: 'hover:border-cyan-500/50',
      };
    case 'dotnet-maui':
    case 'maui':
      return {
        techLogoSvg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg',
        bannerImage: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop',
        bannerGradient: 'from-violet-600/90 via-purple-900/80 to-slate-950',
        badgeBg: 'bg-violet-500',
        accentColor: 'text-violet-500 dark:text-violet-400',
        buttonBg: 'bg-violet-600 hover:bg-violet-500 active:bg-violet-700 text-white shadow-violet-600/20',
        borderHover: 'hover:border-violet-500/50',
      };
    case 'java-android':
    case 'android':
      return {
        techLogoSvg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg',
        bannerImage: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?q=80&w=800&auto=format&fit=crop',
        bannerGradient: 'from-emerald-600/90 via-teal-800/80 to-slate-950',
        badgeBg: 'bg-emerald-500',
        accentColor: 'text-emerald-500 dark:text-emerald-400',
        buttonBg: 'bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white shadow-emerald-600/20',
        borderHover: 'hover:border-emerald-500/50',
      };
    case 'tailwind':
    case 'tailwindcss':
      return {
        techLogoSvg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
        bannerImage: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop',
        bannerGradient: 'from-teal-500/90 via-sky-700/80 to-slate-950',
        badgeBg: 'bg-teal-400',
        accentColor: 'text-teal-500 dark:text-teal-400',
        buttonBg: 'bg-teal-600 hover:bg-teal-500 active:bg-teal-700 text-white shadow-teal-600/20',
        borderHover: 'hover:border-teal-500/50',
      };
    case 'flutter':
      return {
        techLogoSvg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
        bannerImage: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop',
        bannerGradient: 'from-sky-500/90 via-blue-700/80 to-slate-950',
        badgeBg: 'bg-sky-400',
        accentColor: 'text-sky-500 dark:text-sky-400',
        buttonBg: 'bg-sky-600 hover:bg-sky-500 active:bg-sky-700 text-white shadow-sky-600/20',
        borderHover: 'hover:border-sky-500/50',
      };
    case 'dart':
      return {
        techLogoSvg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg',
        bannerImage: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop',
        bannerGradient: 'from-[#0175C2]/90 via-sky-800/80 to-slate-950',
        badgeBg: 'bg-[#0175C2]',
        accentColor: 'text-[#0175C2] dark:text-sky-400',
        buttonBg: 'bg-[#0175C2] hover:bg-[#0175C2]/90 active:bg-[#0175C2]/80 text-white shadow-[#0175C2]/20',
        borderHover: 'hover:border-[#0175C2]/50',
      };
    case 'jquery':
      return {
        techLogoSvg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg',
        bannerImage: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?q=80&w=800&auto=format&fit=crop',
        bannerGradient: 'from-blue-600/90 via-indigo-800/80 to-slate-950',
        badgeBg: 'bg-blue-500',
        accentColor: 'text-blue-500 dark:text-blue-400',
        buttonBg: 'bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white shadow-blue-600/20',
        borderHover: 'hover:border-blue-500/50',
      };
    case 'mongodb':
    case 'mongo':
      return {
        techLogoSvg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
        bannerImage: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=800&auto=format&fit=crop',
        bannerGradient: 'from-[#001E2B]/95 via-emerald-950/90 to-slate-950',
        badgeBg: 'bg-[#00ED64]',
        accentColor: 'text-[#00ED64]',
        buttonBg: 'bg-[#00ED64] hover:bg-[#00ED64]/90 active:bg-[#00ED64]/80 text-[#001E2B] font-bold shadow-[#00ED64]/20',
        borderHover: 'hover:border-[#00ED64]/50',
      };
    case 'a11y':
    case 'accessibility':
      return {
        techLogoSvg: '',
        bannerImage: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=800&auto=format&fit=crop',
        bannerGradient: 'from-indigo-600/90 via-purple-800/80 to-slate-950',
        badgeBg: 'bg-indigo-500',
        accentColor: 'text-indigo-500 dark:text-indigo-400',
        buttonBg: 'bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white shadow-indigo-600/20',
        borderHover: 'hover:border-indigo-500/50',
      };
    case 'ai-prompt-engineering':
    case 'aiprompt':
    case 'prompt-engineering':
    case 'ai_prompt_class':
      return {
        techLogoSvg: '',
        bannerImage: aiPromptCoverImg,
        bannerGradient: 'from-purple-600/90 via-indigo-900/80 to-slate-950',
        badgeBg: 'bg-purple-500',
        accentColor: 'text-purple-500 dark:text-purple-400',
        buttonBg: 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-purple-600/20',
        borderHover: 'hover:border-purple-500/50',
      };
    default:
      return {
        techLogoSvg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        bannerImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop',
        bannerGradient: 'from-blue-600/90 via-indigo-800/80 to-slate-950',
        badgeBg: 'bg-blue-500',
        accentColor: 'text-blue-500 dark:text-blue-400',
        buttonBg: 'bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white shadow-blue-600/20',
        borderHover: 'hover:border-blue-500/50',
      };
  }
};

export const CourseBrandIcon: React.FC<CourseBrandIconProps> = ({
  iconName,
  courseId,
  className = "w-5 h-5",
}) => {
  const key = (courseId || iconName || '').toLowerCase().trim();

  switch (key) {
    case 'xml':
    case 'filexml':
    case 'sixml':
      return (
        <svg className={className} viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="XML Logo">
          {/* File Document shape with fold */}
          <rect width="400" height="460" x="56" y="26" rx="48" fill="#F5A623"/>
          <path d="M336 26v120h120L336 26z" fill="#E88214" />
          {/* < / > Tag symbol */}
          <path d="M160 210l-50 46 50 46M352 210l50 46-50 46M280 190l-48 132" stroke="#FFFFFF" strokeWidth="28" strokeLinecap="round" strokeLinejoin="round"/>
          {/* XML Text */}
          <text x="256" y="395" textAnchor="middle" fill="#FFFFFF" fontSize="72" fontWeight="900" fontFamily="system-ui, sans-serif" letterSpacing="4">XML</text>
        </svg>
      );

    case 'html':
    case 'html5':
    case 'filehtml':
    case 'sihtml5':
      return (
        <svg className={className} viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="HTML5 Logo">
          {/* Shield background */}
          <path d="M107.6 470.9L74.6 30h181.4v441z" fill="#E34F26"/>
          <path d="M256 471l148.3-40.1L437.4 30H256v441z" fill="#EF652A"/>
          {/* White 5 Emblem */}
          <path d="M256 206.3h-82.3l-5.7-64h88v-48h-136l15.7 176h120.3v-64zm0 148.6l-78.6-21.2-5-56h-48.1l9.6 108 122.1 33.9v-64.7z" fill="#EBEBEB"/>
          <path d="M256 206.3v64h82.3l-7.8 87.1-74.5 20.1v64.7l122.2-33.9 1.4-15.6 14.8-166.4H256zm0-112v48h136l4.3-48H256z" fill="#FFFFFF"/>
        </svg>
      );

    case 'css':
    case 'css3':
    case 'filecode':
    case 'sicss3':
      return (
        <svg className={className} viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="CSS3 Shield Logo">
          {/* Shield background */}
          <path d="M107.6 470.9L74.6 30h181.4v441z" fill="#1572B6"/>
          <path d="M256 471l148.3-40.1L437.4 30H256v441z" fill="#33A9DC"/>
          {/* White 3 Emblem */}
          <path d="M256 238h-74l-5.2-58h79.2v-48H122l15.2 170h118.8v-64zm0 148.6l-78.6-21.2-5-56h-48.1l9.6 108 122.1 33.9v-64.7z" fill="#EBEBEB"/>
          <path d="M256 238v64h78.8l-7.4 82.6-71.4 19.4v64.7l122.2-33.9 14.8-166.4H256zm0-106v48h136l4.3-48H256z" fill="#FFFFFF"/>
        </svg>
      );

    case 'javascript':
    case 'js':
    case 'braces':
    case 'sijavascript':
      return (
        <svg className={className} viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="JavaScript Logo">
          <rect width="512" height="512" rx="64" fill="#F7DF1E"/>
          <path d="M320 376c18 29 42 46 76 46 32 0 53-15 53-37 0-26-21-36-57-51l-19-8c-55-23-81-51-81-105 0-59 46-102 118-102 52 0 90 19 114 62l-49 32c-14-25-33-37-64-37-29 0-47 15-47 34 0 24 16 34 52 49l19 8c63 27 88 53 88 107 0 68-52 106-126 106-69 0-111-32-135-82l58-22zM182 383c12 21 27 38 56 38 28 0 46-12 46-44V122h70v258c0 70-40 102-108 102-58 0-95-29-116-72l52-27z" fill="#000000"/>
        </svg>
      );

    case 'typescript':
    case 'ts':
    case 'filecode2':
    case 'sitypescript':
      return (
        <svg className={className} viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="TypeScript Logo">
          <rect width="512" height="512" rx="64" fill="#3178C6"/>
          <path d="M305 380c16 26 38 41 68 41 29 0 47-13 47-33 0-23-19-32-51-45l-17-7c-49-21-72-46-72-94 0-53 41-92 106-92 47 0 81 17 102 56l-44 29c-12-22-30-33-58-33-26 0-42 13-42 30 0 21 14 30 46 44l17 7c57 24 79 47 79 96 0 61-47 95-113 95-62 0-100-29-121-74l53-20zM128 152h140v44h-46v234h-48V196h-46v-44z" fill="#FFFFFF"/>
        </svg>
      );

    case 'python':
    case 'py':
    case 'filesymlink':
    case 'sipython':
      return (
        <svg className={className} viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Python Logo">
          <path d="M251 18c-112 0-105 48-105 48v50h107v15H102S18 120 18 232c0 113 73 109 73 109h43v-61s-2-73 72-73h123s69 1 69-67V72s10-54-147-54zm-42 33a20 20 0 1 1 0 40 20 20 0 0 1 0-40z" fill="#3776AB"/>
          <path d="M261 494c112 0 105-48 105-48v-50H259v-15h151s84 11 84-101c0-113-73-109-73-109h-43v61s2 73-72 73H183s-69-1-69 67v68s-10 54 147 54zm42-33a20 20 0 1 1 0-40 z" fill="#FFD43B"/>
        </svg>
      );

    case 'java':
    case 'fajava':
      return (
        <svg className={className} viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Java Coffee Cup Logo">
          <path d="M228 116c0 0-21 21 16 57 32 30 11 51-18 80-28 28-11 48 16 80 0 0 35-22 1-57-36-37-14-53 14-80 30-31 7-49-29-80z" fill="#E76F00"/>
          <path d="M290 54c0 0-27 27 20 62 42 32 15 57-23 90-37 32-13 54 22 90 0 0 45-28 2-63-45-38-17-59 18-90 38-34 9-54-39-89z" fill="#F8981D"/>
          <path d="M148 376c0 0 13 18 78 18 73 0 104-18 104-18s-12 12-58 16c-52 5-102-2-124-16zM138 412s12 13 58 13c54 0 102-13 102-13s-14 8-48 10c-43 3-90 0-112-10zM120 448s17 9 76 9c68 0 112-9 112-9s-18 6-56 7c-47 2-102-1-132-7z" fill="#5382A1"/>
          <path d="M128 322c0 45 36 60 128 60s128-15 128-60c0-10-8-18-20-22 0 0 7 12-28 18-42 8-124 8-160 0-35-6-28-18-28-18-12 4-20 12-20 22z" fill="#5382A1"/>
        </svg>
      );

    case 'cpp':
    case 'c++':
    case 'cpu':
    case 'sicplusplus':
      return (
        <svg className={className} viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="ISO C++ Logo">
          <path d="M256 32L64 128v256l192 96 192-96V128L256 32zm128 322l-128 64-128-64V158l128-64 128 64v196z" fill="#00599C"/>
          <path d="M220 212c-12-12-28-18-48-18-36 0-60 26-60 62s24 62 60 62c20 0 36-6 48-18l18 20c-18 18-42 26-66 26-52 0-90-36-90-90s38-90 90-90c24 0 48 8 66 26l-18 20zm90 12h20v24h24v20h-24v24h-20v-24h-24v-20h24v-24zm64 0h20v24h24v20h-24v24h-20v-24h-24v-20h24v-24z" fill="#00599C"/>
        </svg>
      );

    case 'csharp':
    case 'c#':
    case 'hash':
    case 'sicsharp':
      return (
        <svg className={className} viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="C# Logo">
          <path d="M256 32L64 128v256l192 96 192-96V128L256 32zm128 322l-128 64-128-64V158l128-64 128 64v196z" fill="#512BD4"/>
          <path d="M208 212c-12-12-28-18-48-18-36 0-60 26-60 62s24 62 60 62c20 0 36-6 48-18l18 20c-18 18-42 26-66 26-52 0-90-36-90-90s38-90 90-90c24 0 48 8 66 26l-18 20zm84-28h18l-8 32h28l8-32h18l-8 32h24v16h-28l-8 32h28v16h-32l-8 32h-18l8-32h-28l-8 32h-18l8-32h-24v-16h28l8-32h-28v-16h32l8-32zm10 48l-8 32h28l8-32h-28z" fill="#512BD4"/>
        </svg>
      );

    case 'c':
    case 'code2':
    case 'sic':
      return (
        <svg className={className} viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="C Programming Logo">
          <path d="M256 32L64 128v256l192 96 192-96V128L256 32zm128 322l-128 64-128-64V158l128-64 128 64v196z" fill="#283593"/>
          <path d="M280 200c-16-16-36-24-64-24-48 0-80 34-80 80s32 80 80 80c28 0 48-8 64-24l24 24c-24 24-54 36-88 36-68 0-116-48-116-116s48-116 116-116c34 0 64 12 88 36l-24 24z" fill="#283593"/>
        </svg>
      );

    case 'sql':
      return (
        <svg className={className} viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="SQL Database Logo">
          <path d="M256 32c-106 0-192 29-192 64v320c0 35 86 64 192 64s192-29 192-64V96c0-35-86-64-192-64zm0 64c88 0 144 22 144 32s-56 32-144 32-144-22-144-32 56-32 144-32zm0 128c-88 0-144-22-144-32v-44c32 20 84 32 144 32s112-12 144-32v44c0 10-56 32-144 32zm0 128c-88 0-144-22-144-32v-44c32 20 84 32 144 32s112-12 144-32v44c0 10-56 32-144 32z" fill="#336791"/>
        </svg>
      );

    case 'mysql':
      return (
        <svg className={className} viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="MySQL Dolphin Logo">
          <path d="M482 232c-12-18-38-34-62-38-32-6-68 2-96 16-36 18-68 46-108 58-36 10-76 4-110-12-28-14-52-36-70-62 16 46 48 84 90 106 42 22 92 26 138 12 40-12 74-38 108-58 32-18 68-28 104-20 22 5 44 16 56 34 8-12 8-26 0-36z" fill="#E48E00"/>
          <path d="M438 132c-38-38-92-60-146-60-64 0-126 30-166 80-26 32-44 72-52 112 18-32 44-58 76-76 38-22 84-28 126-18 42 10 80 34 116 56 38 22 80 38 124 38 12 0 24-2 36-6-8-44-38-88-74-112-12-8-26-12-40-14z" fill="#00618A"/>
        </svg>
      );

    case 'git':
    case 'gitbranch':
    case 'sigit':
      return (
        <svg className={className} viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Git Branch Logo">
          <path d="M501 228L284 11c-15-15-39-15-54 0l-43 43 55 55c15-5 32-1 43 10 11 11 15 28 10 43l53 53c15-5 32-1 43 10 15 15 15 39 0 54s-39 15-54 0c-11-11-15-28-10-43l-49-49v120c3 2 6 5 8 8 15 15 15 39 0 54s-39 15-54 0-15-39 0-54c4-4 10-7 16-9V166c-6-2-12-5-16-9-12-12-15-29-9-44l-53-53L11 228c-15 15-15 39 0 54l217 217c15 15 39 15 54 0l219-217c15-15 15-39 0-54z" fill="#F05032"/>
        </svg>
      );

    case 'jquery':
    case 'layers':
    case 'sijquery':
      return (
        <svg className={className} viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="jQuery Logo">
          <path d="M256 32c-124 0-224 100-224 224s100 224 224 224 224-100 224-224S380 32 256 32zm108 280c-36 28-84 40-132 32-48-8-90-36-114-78l28-16c18 32 50 54 88 60 38 6 76-3 104-26l26 28zm-8-92c-12 18-32 30-54 30-32 0-58-24-62-56h138c2-32-8-64-30-86-24-24-58-36-92-32-48 6-88 42-96 90-8 54 28 104 82 116 26 6 54 2 78-8l-14-26c-18 8-38 10-58 6-38-8-66-42-62-80 4-34 32-60 66-62 24-2 48 8 62 26 12 14 18 34 16 52h-94c2 18 16 32 34 32 14 0 26-8 32-20l26 18z" fill="#0769AD"/>
        </svg>
      );

    case 'react':
    case 'reactjs':
    case 'component':
    case 'sireact':
      return (
        <svg className={className} viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="React Atom Logo">
          <ellipse cx="256" cy="256" rx="200" ry="76" stroke="#61DAFB" strokeWidth="24" transform="rotate(0 256 256)"/>
          <ellipse cx="256" cy="256" rx="200" ry="76" stroke="#61DAFB" strokeWidth="24" transform="rotate(60 256 256)"/>
          <ellipse cx="256" cy="256" rx="200" ry="76" stroke="#61DAFB" strokeWidth="24" transform="rotate(120 256 256)"/>
          <circle cx="256" cy="256" r="36" fill="#61DAFB"/>
        </svg>
      );

    case 'tailwind':
    case 'tailwindcss':
    case 'palette':
    case 'sitailwindcss':
      return (
        <svg className={className} viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Tailwind CSS Wave Logo">
          <path d="M256 128c-64 0-107 32-128 96 32-32 75-43 107-32 18 6 31 19 45 34 23 23 50 50 104 50 64 0 107-32 128-96-32 32-75 43-107 32-18-6-31-19-45-34-23-23-50-50-104-50zm-128 128c-64 0-107 32-128 96 32-32 75-43 107-32 18 6 31 19 45 34 23 23 50 50 104 50 64 0 107-32 128-96-32 32-75 43-107 32-18-6-31-19-45-34-23-23-50-50-104-50z" fill="#06B6D4"/>
        </svg>
      );

    case 'bootstrap':
    case 'grid':
    case 'sibootstrap':
      return (
        <svg className={className} viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Bootstrap B Logo">
          <rect width="512" height="512" rx="96" fill="#7952B3"/>
          <path d="M180 128h110c40 0 68 20 68 54 0 24-14 42-36 50 28 8 46 28 46 58 0 38-32 60-76 60H180V128zm60 88h42c16 0 26-8 26-20 0-12-10-18-26-18h-42v38zm0 94h48c18 0 30-8 30-22 0-14-12-22-30-22h-48v44z" fill="#FFFFFF"/>
        </svg>
      );

    case 'php':
    case 'globe':
    case 'siphp':
      return (
        <svg className={className} viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="PHP Logo">
          <ellipse cx="256" cy="256" rx="230" ry="130" fill="#777BB4"/>
          <path d="M128 192h48c24 0 38 10 34 32-4 22-22 32-46 32h-22l-12 64H96l32-128zm30 42h16c8 0 14-4 16-12 2-8-2-12-10-12h-16l-6 24zm84-42h34l-8 40h28l8-40h34l-26 128h-34l10-48h-28l-10 48h-34l26-128zm140 0h48c24 0 38 10 34 32-4 22-22 32-46 32h-22l-12 64h-34l32-128zm30 42h16c8 0 14-4 16-12 2-8-2-12-10-12h-16l-6 24z" fill="#FFFFFF"/>
        </svg>
      );

    case 'angular':
    case 'compass':
    case 'siangular':
      return (
        <svg className={className} viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Angular Shield Logo">
          <path d="M256 32L40 108l32 280 184 92 184-92 32-280L256 32z" fill="#DD0031"/>
          <path d="M256 32v448l184-92 32-280L256 32z" fill="#C3002F"/>
          <path d="M256 120L152 352h44l21-52h78l21 52h44L256 120zm-24 144l24-60 24 60h-48z" fill="#FFFFFF"/>
        </svg>
      );

    case 'kotlin':
    case 'smartphone':
    case 'sikotlin':
      return (
        <svg className={className} viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Kotlin Logo">
          <defs>
            <linearGradient id="kt-grad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7F52FF"/>
              <stop offset="50%" stopColor="#E44857"/>
              <stop offset="100%" stopColor="#F88909"/>
            </linearGradient>
          </defs>
          <path d="M512 512H0V0h512L256 256 512 512zM0 512l256-256L0 0v512z" fill="url(#kt-grad)"/>
        </svg>
      );

    case 'swift':
    case 'swiftui':
    case 'siswift':
      return (
        <svg className={className} viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Swift Logo">
          <rect width="512" height="512" rx="64" fill="#F05138"/>
          <path d="M380 380c-70 60-180 70-260 20 80 10 170-10 220-70-60 30-130 30-180 0 70-30 110-80 130-140-50 20-100 20-140 0 80-60 180-80 230-190-20 40-50 70-90 90 90 20 150 90 90 290z" fill="#FFFFFF"/>
        </svg>
      );

    case 'react-native':
    case 'reactnative':
      return (
        <svg className={className} viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="React Native Logo">
          <circle cx="256" cy="256" r="240" fill="#0A192F"/>
          <ellipse cx="256" cy="256" rx="180" ry="70" stroke="#61DAFB" strokeWidth="20" transform="rotate(30 256 256)"/>
          <ellipse cx="256" cy="256" rx="180" ry="70" stroke="#61DAFB" strokeWidth="20" transform="rotate(90 256 256)"/>
          <ellipse cx="256" cy="256" rx="180" ry="70" stroke="#61DAFB" strokeWidth="20" transform="rotate(150 256 256)"/>
          <circle cx="256" cy="256" r="32" fill="#61DAFB"/>
        </svg>
      );

    case 'jetpack-compose':
    case 'compose':
      return (
        <svg className={className} viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Jetpack Compose Logo">
          <rect width="512" height="512" rx="64" fill="#1A237E"/>
          <path d="M120 160l136-80 136 80v160l-136 80-136-80V160z" fill="#42A5F5" opacity="0.8"/>
          <path d="M256 80l136 80-136 80-136-80 136-80z" fill="#3DDC84"/>
          <path d="M256 240l136-80v160l-136 80V240z" fill="#00897B"/>
        </svg>
      );

    case 'kmm':
    case 'kotlin-multiplatform':
      return (
        <svg className={className} viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="KMM Logo">
          <rect width="512" height="512" rx="64" fill="#1B1B1B"/>
          <path d="M100 100h312L256 256l156 156H100V100z" fill="url(#kmm-grad)"/>
          <defs>
            <linearGradient id="kmm-grad" x1="0" y1="0" x2="512" y2="512" gradientUnits="userSpaceOnUse">
              <stop stopColor="#7F52FF"/>
              <stop offset="0.5" stopColor="#C811E2"/>
              <stop offset="1" stopColor="#E44857"/>
            </linearGradient>
          </defs>
        </svg>
      );

    case 'dotnet-maui':
    case 'maui':
      return (
        <svg className={className} viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label=".NET MAUI Logo">
          <rect width="512" height="512" rx="64" fill="#512BD4"/>
          <circle cx="256" cy="256" r="160" stroke="#FFFFFF" strokeWidth="28"/>
          <path d="M160 256h192M256 160v192" stroke="#FFFFFF" strokeWidth="28" strokeLinecap="round"/>
        </svg>
      );

    case 'java-android':
    case 'android':
      return (
        <svg className={className} viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Android Java Logo">
          <rect width="512" height="512" rx="64" fill="#3DDC84"/>
          <path d="M160 220a96 96 0 01192 0v80H160v-80z" fill="#FFFFFF"/>
          <circle cx="200" cy="180" r="12" fill="#3DDC84"/>
          <circle cx="312" cy="180" r="12" fill="#3DDC84"/>
          <path d="M180 120l-28-40M332 120l28-40" stroke="#FFFFFF" strokeWidth="16" strokeLinecap="round"/>
        </svg>
      );

    case 'spring':
    case 'spring-boot':
    case 'springboot':
    case 'sispring':
      return (
        <svg className={className} viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Spring Boot Logo">
          <rect width="512" height="512" rx="64" fill="#6DB33F"/>
          <path d="M380 130c-110 10-210 100-230 220-20 0-40-10-50-20 30-90 120-170 230-200h50z" fill="#FFFFFF" opacity="0.35"/>
          <path d="M130 360c130-10 220-120 240-230-120 30-200 110-240 230z" fill="#FFFFFF"/>
          <path d="M220 290c60-10 110-60 120-120-60 10-110 60-120 120z" fill="#6DB33F"/>
        </svg>
      );

    case 'nextjs':
    case 'next':
    case 'monitor':
    case 'sinextdotjs':
      return (
        <svg className={className} viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Next.js Logo">
          <circle cx="256" cy="256" r="240" fill="#000000" className="dark:fill-white"/>
          <path d="M362 376L222 188v188h-36V136h38l136 186V136h36v240h-34z" fill="#FFFFFF" className="dark:fill-black"/>
          <path d="M326 136h36v120h-36z" fill="#FFFFFF" className="dark:fill-black"/>
        </svg>
      );

    case 'vue':
    case 'vuejs':
    case 'fileheart':
    case 'sivuedotjs':
      return (
        <svg className={className} viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Vue.js V Logo">
          <path d="M310 32l-54 94-54-94H32l224 388L480 32H310z" fill="#4FC08D"/>
          <path d="M310 32l-54 94-54-94h-82l136 236L392 32h-82z" fill="#35495E"/>
        </svg>
      );

    case 'dart':
    case 'sidart':
      return (
        <svg className={className} viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Dart Logo">
          <path d="M261 32L120 173l128 128 171-171H261z" fill="#00B4AB"/>
          <path d="M120 173L32 261l141 141 88-88-141-141z" fill="#0075BA"/>
          <path d="M261 314l-88 88 88 88h128l88-88H349l-88-88z" fill="#01579B"/>
          <path d="M261 32L120 173l141 141 128-128H261z" fill="#00A8E8"/>
        </svg>
      );

    case 'flutter':
    case 'siflutter':
      return (
        <svg className={className} viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Flutter Logo">
          <path d="M290 32L116 206l64 64 238-238H290z" fill="#39CEFD"/>
          <path d="M290 280l-92 92 92 92h128L326 372l92-92H290z" fill="#0175C2"/>
          <path d="M198 372l64-64 64 64-64 64-64-64z" fill="#02569B"/>
        </svg>
      );

    case 'sass':
    case 'scss':
    case 'sisass':
      return (
        <svg className={className} viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Sass SCSS Logo">
          <rect width="512" height="512" rx="64" fill="#CC6699"/>
          <path d="M380 270c-18 64-80 94-136 94-72 0-112-42-112-92 0-78 98-84 140-108 14-8 22-18 22-30 0-22-20-34-44-34-36 0-66 22-78 48l-36-22c22-48 70-76 118-76 56 0 92 30 92 72 0 68-96 74-138 98-14 8-22 18-22 30 0 24 20 38 52 38 42 0 84-24 98-58l44 40z" fill="#FFFFFF"/>
        </svg>
      );

    case 'svelte':
    case 'sisvelte':
      return (
        <svg className={className} viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Svelte Logo">
          <path d="M430 114c-28-48-90-68-148-48L112 124C58 142 28 198 44 252c10 32 34 58 66 70l-22 62c-14 38 6 82 44 98 40 18 86 0 106-38l38-72c12-22 36-34 60-30l32 6c44 8 88-18 100-60 12-44-12-88-54-100l-34-8 50-64c24-30 20-74-8-102z" fill="#FF3E00"/>
        </svg>
      );

    case 'npm':
    case 'sinpm':
      return (
        <svg className={className} viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="npm Logo">
          <rect width="512" height="512" rx="64" fill="#CB3837"/>
          <path d="M96 96v320h320V96H96zm224 224h-64V160h64v160zm-128 0h-32V160h32v160z" fill="#FFFFFF"/>
        </svg>
      );

    case 'vite':
    case 'sivite':
      return (
        <svg className={className} viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Vite Logo">
          <path d="M410 32L260 480 32 108l88-28 140 260L382 32h28z" fill="url(#vite-g1)"/>
          <path d="M256 128l-40 80h50l-30 90 70-110h-50l40-60z" fill="#FFD859"/>
          <defs>
            <linearGradient id="vite-g1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#41D1FF"/>
              <stop offset="100%" stopColor="#BD34FE"/>
            </linearGradient>
          </defs>
        </svg>
      );

    case 'webpack':
    case 'siwebpack':
      return (
        <svg className={className} viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Webpack Logo">
          <rect width="512" height="512" rx="64" fill="#1C78C0"/>
          <path d="M256 64l160 92v184l-160 92-160-92V156l160-92zm0 40l-124 72v144l124 72 124-72V176l-124-72z" fill="#8ED6FB"/>
        </svg>
      );

    case 'devtools':
    case 'debugging':
      return (
        <svg className={className} viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="DevTools Logo">
          <rect width="512" height="512" rx="64" fill="#0F172A"/>
          <path d="M120 160l100 96-100 96M260 352h132" stroke="#38BDF8" strokeWidth="40" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );

    case 'a11y':
    case 'accessibility':
      return (
        <svg className={className} viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Web Accessibility Logo">
          <circle cx="256" cy="256" r="224" fill="#4F46E5"/>
          <circle cx="256" cy="140" r="36" fill="#FFFFFF"/>
          <path d="M140 210h232M256 210v200M256 270l-70 120M256 270l70 120" stroke="#FFFFFF" strokeWidth="36" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );

    case 'responsive':
      return (
        <svg className={className} viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Responsive Design Logo">
          <rect width="512" height="512" rx="64" fill="#0D9488"/>
          <rect x="80" y="90" width="352" height="230" rx="16" fill="#FFFFFF" stroke="#0F766E" strokeWidth="20"/>
          <rect x="280" y="200" width="130" height="220" rx="16" fill="#0284C7" stroke="#FFFFFF" strokeWidth="16"/>
          <circle cx="345" cy="390" r="12" fill="#FFFFFF"/>
        </svg>
      );

    case 'testing':
    case 'jest':
    case 'sijest':
      return (
        <svg className={className} viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Testing Jest Logo">
          <rect width="512" height="512" rx="64" fill="#C21325"/>
          <path d="M160 380l-60-120 70-140 170 30 70 140-100 110-150-20z" fill="#FFFFFF" opacity="0.9"/>
          <path d="M220 220l60-60 60 60-60 60z" fill="#C21325"/>
        </svg>
      );

    case 'mongodb':
    case 'mongo':
    case 'simongodb':
      return (
        <svg className={className} viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="MongoDB Leaf Logo">
          <rect width="512" height="512" rx="64" fill="#001E2B"/>
          <path d="M256 64c-3.2 0-6.4.8-9.3 2.5C186.2 101.4 128 179.8 128 266c0 78.4 53.6 144.3 126 163.5v22.5c0 4.4 3.6 8 8 8s8-3.6 8-8v-22.5c72.4-19.2 126-85.1 126-163.5 0-86.2-58.2-164.6-118.7-200.5-2.9-1.7-6.1-2.5-9.3-2.5zm-8 44.5c4.4 0 8 3.6 8 8v303c-58.8-17-102-71-102-133.5 0-70 47.8-135 94-177.5zm24 0c46.2 42.5 94 107.5 94 177.5 0 62.5-43.2 116.5-102 133.5v-303c0-4.4 3.6-8 8-8z" fill="#00ED64"/>
        </svg>
      );

    case 'ai-prompt-engineering':
    case 'aiprompt':
    case 'prompt-engineering':
    case 'ai_prompt_class':
    case 'sparkles':
    case 'bot':
      return (
        <svg className={className} viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="AI Prompt Icon">
          <rect width="512" height="512" rx="64" fill="#581C87"/>
          <path d="M256 96l32 96 96 32-96 32-32 96-32-96-96-32 96-32 32-96zM384 320l16 48 48 16-48 16-16 48-16-48-48-16 48-16 16-48zM128 320l16 48 48 16-48 16-16 48-16-48-48-16 48-16 16-48z" fill="#FFFFFF"/>
        </svg>
      );

    case 'ux-ui-design':
    case 'uxui':
    case 'ux-ui':
    case 'design':
    case 'pentool':
    case 'layoutgrid':
      return (
        <svg className={className} viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="UX/UI Design Pen Tool and Grid Symbol">
          <rect width="512" height="512" rx="64" fill="#6B21A8"/>
          <path d="M120 120h120v120H120zM272 120h120v120H272zM120 272h120v120H120z" fill="#FFFFFF" opacity="0.25"/>
          <path d="M360 220l-120 160h-40l20-80-60-60 160-40z" fill="#FFFFFF"/>
          <path d="M360 220l-50 50-40-40 90-10z" fill="#E9D5FF"/>
          <circle cx="360" cy="220" r="16" fill="#A855F7"/>
        </svg>
      );

    default:
      return (
        <svg className={className} viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Code Logo">
          <path d="M160 128L32 256l128 128M352 128l128 128-128 128M288 96l-64 320" stroke="#61DAFB" strokeWidth="40" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
  }
};

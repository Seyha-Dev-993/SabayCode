import React from 'react';

export interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
  showSubtitle?: boolean;
  textColor?: 'default' | 'white' | 'dark';
  subtitle?: string;
  title?: string;
  responsiveText?: boolean;
  variant?: 'standard' | 'compact' | 'icon-only' | 'monochrome';
}

export const SabayCodeLogo: React.FC<LogoProps> = ({
  className = '',
  size = 36,
  showText = true,
  showSubtitle = true,
  textColor = 'default',
  subtitle = 'BILINGUAL DEV',
  title,
  responsiveText = false,
  variant = 'standard',
}) => {
  // Dynamic color lockups for website light and dark modes
  const sabayColorClass = textColor === 'white' 
    ? 'text-white' 
    : textColor === 'dark' 
    ? 'text-[#0F172A]' 
    : 'text-[#0F172A] dark:text-white';

  const codeColorClass = textColor === 'white'
    ? 'text-[#38BDF8]'
    : textColor === 'dark'
    ? 'text-[#2563EB]'
    : 'text-[#2563EB] dark:text-[#38BDF8]';

  const subtitleColorClass = textColor === 'white'
    ? 'text-[#93C5FD]'
    : textColor === 'dark'
    ? 'text-[#2563EB]'
    : 'text-[#2563EB] dark:text-[#93C5FD]';

  const isMonochrome = variant === 'monochrome';
  const isIconOnly = variant === 'icon-only';
  const isCompact = variant === 'compact';

  return (
    <div className={`inline-flex items-center gap-2.5 select-none leading-none ${className}`}>
      {/* Exact 3D Ribbon 'S' Squircle Logo Mark matching User Attachment */}
      <div 
        style={{ width: size, height: size }} 
        className="relative flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-105"
      >
        <svg 
          viewBox="0 0 100 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-full h-full object-contain overflow-visible"
        >
          {isMonochrome ? (
            <>
              <rect x="2" y="2" width="96" height="96" rx="26" fill="currentColor" />
              {/* Monochrome Ribbon 'S' Vector */}
              <path d="M 38 27 L 62 27 L 48 38 L 24 38 Z" fill="#FFFFFF" opacity={0.9} />
              <path d="M 62 27 C 42 27 20 34 20 50 C 20 62 30 67 42 67 L 48 56 C 36 56 31 52 31 46 C 31 40 42 38 52 38 Z" fill="#FFFFFF" />
              <path d="M 62 73 L 38 73 L 52 62 L 76 62 Z" fill="#FFFFFF" opacity={0.9} />
              <path d="M 38 73 C 58 73 80 66 80 50 C 80 38 70 33 58 33 L 52 44 C 64 44 69 48 69 54 C 69 60 58 62 48 62 Z" fill="#FFFFFF" />
            </>
          ) : (
            <>
              <defs>
                {/* Dark Blue Squircle Background Gradient matching user image */}
                <linearGradient id="badgeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#123B8A" />
                  <stop offset="45%" stopColor="#0B2564" />
                  <stop offset="100%" stopColor="#05153B" />
                </linearGradient>

                {/* Top Sky Cyan Ribbon Main Gradient */}
                <linearGradient id="topRibbonMain" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#38BDF8" />
                  <stop offset="60%" stopColor="#0284C7" />
                  <stop offset="100%" stopColor="#1D4ED8" />
                </linearGradient>

                {/* Top Ribbon Upper Highlight Face */}
                <linearGradient id="topRibbonFace" x1="0%" y1="0%" x2="100%" y2="50%">
                  <stop offset="0%" stopColor="#7DD3FC" />
                  <stop offset="100%" stopColor="#38BDF8" />
                </linearGradient>

                {/* Bottom Royal Blue Ribbon Main Gradient */}
                <linearGradient id="bottomRibbonMain" x1="100%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="#1E40AF" />
                  <stop offset="50%" stopColor="#2563EB" />
                  <stop offset="100%" stopColor="#3B82F6" />
                </linearGradient>

                {/* Bottom Ribbon Lower Highlight Face */}
                <linearGradient id="bottomRibbonFace" x1="100%" y1="100%" x2="0%" y2="50%">
                  <stop offset="0%" stopColor="#60A5FA" />
                  <stop offset="100%" stopColor="#2563EB" />
                </linearGradient>

                {/* Inner Glow Rim */}
                <linearGradient id="badgeRimGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#38BDF8" stopOpacity={0.4} />
                  <stop offset="100%" stopColor="#1D4ED8" stopOpacity={0.08} />
                </linearGradient>
              </defs>

              {/* Squircle Dark Blue App Badge Container */}
              <rect x="2" y="2" width="96" height="96" rx="26" fill="url(#badgeGradient)" />
              <rect x="2" y="2" width="96" height="96" rx="26" stroke="url(#badgeRimGlow)" strokeWidth="1.2" fill="none" />

              {/* TOP CYAN 3D RIBBON LOOP */}
              <g id="top-cyan-ribbon">
                {/* Top Flat Highlight Surface */}
                <path 
                  d="M 38 27 L 62 27 L 48 38 L 24 38 Z" 
                  fill="url(#topRibbonFace)" 
                />
                {/* Outer Curved Loop & Fold */}
                <path 
                  d="M 62 27 C 42 27 20 34 20 50 C 20 62 30 67 42 67 L 48 56 C 36 56 31 52 31 46 C 31 40 42 38 52 38 L 48 38 Z" 
                  fill="url(#topRibbonMain)" 
                />
              </g>

              {/* BOTTOM ROYAL BLUE 3D RIBBON LOOP */}
              <g id="bottom-blue-ribbon">
                {/* Bottom Flat Highlight Surface */}
                <path 
                  d="M 62 73 L 38 73 L 52 62 L 76 62 Z" 
                  fill="url(#bottomRibbonFace)" 
                />
                {/* Outer Curved Loop & Fold */}
                <path 
                  d="M 38 73 C 58 73 80 66 80 50 C 80 38 70 33 58 33 L 52 44 C 64 44 69 48 69 54 C 69 60 58 62 48 62 L 52 62 Z" 
                  fill="url(#bottomRibbonMain)" 
                />
              </g>
            </>
          )}
        </svg>
      </div>

      {/* Wordmark Lockup: One continuous word with no gap */}
      {showText && !isIconOnly && (
        <div className={`${responsiveText ? 'hidden sm:flex' : 'flex'} flex-col text-left justify-center shrink-0`}>
          {title ? (
            <span 
              style={{ fontFamily: "'Poppins', sans-serif" }}
              className={`text-[17px] font-extrabold tracking-tight leading-none ${sabayColorClass}`}
            >
              {title}
            </span>
          ) : (
            <div 
              style={{ fontFamily: "'Poppins', sans-serif" }}
              className="flex items-center tracking-tight leading-none text-[19px] font-extrabold"
            >
              <span className={sabayColorClass}>Sabay</span>
              <span className={codeColorClass}>Code</span>
            </div>
          )}

          {showSubtitle && !isCompact && subtitle && (
            <div
              style={{
                fontFamily: /[\u1780-\u17FF]/.test(subtitle)
                  ? "'Kantumruy Pro', sans-serif"
                  : "'Poppins', sans-serif",
              }}
              className={`mt-1 flex items-center justify-start gap-1 font-bold ${
                /[\u1780-\u17FF]/.test(subtitle)
                  ? 'text-[9.5px] tracking-normal'
                  : 'text-[8.5px] tracking-[0.08em] uppercase'
              } ${subtitleColorClass}`}
            >
              {subtitle.includes('•') ? (
                subtitle.split('•').map((part, idx, arr) => (
                  <React.Fragment key={idx}>
                    <span>{part.trim()}</span>
                    {idx < arr.length - 1 && (
                      <span className="text-[7px] leading-none opacity-80 select-none px-0.5">•</span>
                    )}
                  </React.Fragment>
                ))
              ) : (
                <span>{subtitle}</span>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SabayCodeLogo;

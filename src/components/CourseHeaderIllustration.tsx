import React from 'react';
import { CourseCardCategory } from './CourseCard';
import uxuiCoverImg from '../assets/images/UX_UI.jpg';

interface HeaderIllustrationProps {
  category: CourseCardCategory;
  titleEnglish: string;
}

/* ==========================================================================
   OFFICIAL TECH LOGO SVG PATHS & COMPONENTS (Clean, Accurate Vector Icons)
   ========================================================================== */

// 1. HTML5
const HTML5Logo = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
    <path fill="#E34F26" d="M1.5 0h21l-1.91 21.563L11.97 24 2.41 21.563z" />
    <path fill="#EF652A" d="M12 2.18v19.53l7.63-2.126 1.58-17.404z" />
    <path fill="#FFF" d="M12 8.28H8.16l.27 3.03H12v3.02H8.43l.26 3.03 3.31.92v3.18l-6.32-1.76-.78-8.72h11.23z" />
  </svg>
);

// 2. CSS3
const CSS3Logo = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
    <path fill="#1572B6" d="M1.5 0h21l-1.91 21.563L11.97 24 2.41 21.563z" />
    <path fill="#33A9DC" d="M12 2.18v19.53l7.63-2.126 1.58-17.404z" />
    <path fill="#FFF" d="M12 8.28H7.07l.27 3.03H12v3.02H7.34l.26 3.03 4.4 1.22v3.08l-7.41-2.06-.78-8.72H16.2l.27-3.03z" />
  </svg>
);

// 3. JavaScript
const JSLogo = () => (
  <svg className="w-3.5 h-3.5 rounded-sm overflow-hidden" viewBox="0 0 24 24">
    <rect width="24" height="24" fill="#F7DF1E" />
    <path fill="#000" d="M6.4 19.8c1.2 0 2.1-.6 2.6-1.5l-1.4-.9c-.3.5-.7.8-1.2.8-.7 0-1.1-.4-1.1-1.2V11H3.6v6.1c0 1.7 1 2.7 2.8 2.7zm6.7 0c1.8 0 2.9-.9 2.9-2.4 0-1.4-.8-2.1-2.2-2.6l-.7-.3c-.6-.2-.9-.4-.9-.8 0-.4.4-.7.9-.7.6 0 1 .3 1.2.8l1.4-.8c-.4-1-1.3-1.5-2.6-1.5-1.7 0-2.7.9-2.7 2.2 0 1.3.8 2 2.1 2.5l.7.3c.7.2 1 .5 1 .9 0 .5-.5.8-1.1.8-.8 0-1.3-.4-1.6-1l-1.4.8c.5 1.1 1.6 1.8 3 1.8z" />
  </svg>
);

// 4. React
const ReactLogo = () => (
  <svg className="w-3.5 h-3.5 animate-[spin_10s_linear_infinite]" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="2.2" fill="#61DAFB" />
    <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" strokeWidth="1.2" />
    <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(120 12 12)" />
  </svg>
);

// 5. TypeScript
const TSLogo = () => (
  <svg className="w-3.5 h-3.5 rounded-sm overflow-hidden" viewBox="0 0 24 24">
    <rect width="24" height="24" fill="#3178C6" />
    <path fill="#FFF" d="M12.2 18.2V10h2.4v1.7h.1c.4-.7 1.2-1.3 2.4-1.3 2.1 0 3 1.4 3 3.5v4.3h-2.4v-3.8c0-1.1-.4-1.8-1.3-1.8-.8 0-1.4.6-1.4 1.7v3.9h-2.8zM4.5 18.2V10h2.5v1.2h.1c.4-.8 1.1-1.4 2.2-1.4.3 0 .5 0 .7.1v2.3c-.3-.1-.6-.1-.9-.1-1.1 0-1.8.8-1.8 2.1v4h-2.8z" />
  </svg>
);

// 6. Node.js
const NodeLogo = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
    <path fill="#339933" d="M12 1.8l10.2 5.9v11.8L12 25.4 1.8 19.5V7.7L12 1.8zm0 2.8L4.2 8.9v8.2l7.8 4.5 7.8-4.5V8.9L12 4.6z" />
  </svg>
);

// 7. PostgreSQL
const PostgresLogo = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="#4169E1">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-3.5H9.5v-2H11V9c0-1.1.9-2 2-2h2v2h-2v2h2v2h-2v3.5h-2z" />
  </svg>
);

// 8. MongoDB
const MongoLogo = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
    <path fill="#47A248" d="M12 1.5s-4.5 4-4.5 10c0 4.2 2.8 7.3 4.5 8.5 1.7-1.2 4.5-4.3 4.5-8.5 0-6-4.5-10-4.5-10zm0 15.5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z" />
  </svg>
);

// 9. Flutter
const FlutterLogo = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
    <path fill="#02569B" d="M14.3 2.2L6 10.5l4.2 4.2 12.5-12.5z" />
    <path fill="#0175C2" d="M14.3 12.2l-4.2 4.2 4.2 4.2 8.4-8.4z" />
    <path fill="#02569B" d="M10.1 16.4l4.2 4.2h8.4l-8.4-8.4z" />
    <path fill="#29B6F6" d="M14.3 20.6l4.2-4.2 4.2 4.2z" />
  </svg>
);

// 10. Kotlin
const KotlinLogo = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
    <path fill="url(#kotlin-grad)" d="M24 24H0V0h24L12 12z" />
    <defs>
      <linearGradient id="kotlin-grad" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#7F52FF" />
        <stop offset="50%" stopColor="#C711E1" />
        <stop offset="100%" stopColor="#E44857" />
      </linearGradient>
    </defs>
  </svg>
);

// 11. Swift
const SwiftLogo = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
    <path fill="#F05138" d="M21.5 13.2c-.1 0-3.5-2.2-7.8-1.5 4.8 2.8 6.5 7.1 6.3 7.8-.1.2-.4.4-.7.2-2.8-2.1-6.1-3.6-9.8-3.1 5.3 4 10.1 2.2 10.3 2.1.2-.1.3-.4.1-.6-.2-.3-.6-.6-.9-.8M2.5 19.8C6.9 14 12.3 8 18.5 4.8c-2.4 2.8-4.2 6.1-5.1 9.8-3.1-2.1-6.7-3.1-10.9-2.3 3.9 3.1 7.8 4.7 11.8 5 0 0-7.8.2-11.8 2.5z" />
  </svg>
);

// 12. Tailwind
const TailwindLogo = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="#38BDF8">
    <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19 12.001 19c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
  </svg>
);

// 13. Docker
const DockerLogo = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="#2496ED">
    <path d="M13.98 11.08h1.83v1.78h-1.83zm-2.26 0h1.83v1.78h-1.83zm-2.25 0h1.83v1.78H9.47zm-2.26 0h1.83v1.78H7.21zm2.26-2.2h1.83v1.78H9.47zm2.25 0h1.83v1.78h-1.83zm2.26 0h1.83v1.78h-1.83zm0-2.21h1.83v1.78h-1.83zM2.4 13.84c.3 2.12 1.7 4.14 3.9 5 3.3 1.3 7.2.7 10.1-1.3 2.8-2 3.8-5.3 2.8-8.4-.2-.5-.5-.8-.9-1.1-.3-.2-.7-.3-1.1-.3-.8 0-1.5.5-1.8 1.2-.5 1-1.5 1.7-2.7 1.7H2.4z" />
  </svg>
);


/* ==========================================================================
   MAIN COMPONENT IMPLEMENTATION
   ========================================================================== */

export const CourseHeaderIllustration: React.FC<HeaderIllustrationProps> = ({ category }) => {
  switch (category) {
    /* ----------------------------------------------------------------------
       FRONTEND DEVELOPMENT BANNER ILLUSTRATION
       ---------------------------------------------------------------------- */
    case 'frontend':
      return (
        <div className="absolute inset-0 w-full h-full bg-slate-950 overflow-hidden flex items-center justify-center select-none pointer-events-none">
          {/* Background Radial Glow & Code Circuit Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-600/25 via-slate-950/90 to-slate-950" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f610_1px,transparent_1px),linear-gradient(to_bottom,#3b82f610_1px,transparent_1px)] bg-[size:14px_14px]" />

          {/* Floating Technology Logo Badges Constellation */}
          {/* Top Center-Right: React */}
          <div className="absolute top-2.5 right-14 z-10 px-2 py-0.5 rounded-full bg-slate-900/90 border border-sky-400/40 text-[10px] font-mono text-sky-300 font-extrabold flex items-center gap-1 shadow-lg shadow-sky-500/10 backdrop-blur-md animate-pulse">
            <ReactLogo />
            <span>React.js</span>
          </div>

          {/* Top Center-Left: TypeScript */}
          <div className="absolute top-3 left-28 z-10 px-2 py-0.5 rounded-full bg-slate-900/90 border border-blue-500/40 text-[10px] font-mono text-blue-300 font-extrabold flex items-center gap-1 shadow-lg shadow-blue-500/10 backdrop-blur-md">
            <TSLogo />
            <span>TypeScript</span>
          </div>

          {/* Right Mid: Tailwind */}
          <div className="absolute right-3 top-16 z-10 px-2 py-0.5 rounded-full bg-slate-900/90 border border-cyan-400/40 text-[10px] font-mono text-cyan-300 font-extrabold flex items-center gap-1 shadow-lg shadow-cyan-500/10 backdrop-blur-md">
            <TailwindLogo />
            <span>Tailwind</span>
          </div>

          {/* Left Mid: HTML5 / CSS3 */}
          <div className="absolute left-2.5 top-16 z-10 px-2 py-0.5 rounded-full bg-slate-900/90 border border-orange-500/40 text-[10px] font-mono text-orange-300 font-extrabold flex items-center gap-1 shadow-lg shadow-orange-500/10 backdrop-blur-md">
            <HTML5Logo />
            <CSS3Logo />
            <span>HTML5/CSS3</span>
          </div>

          {/* Bottom Right: JS ES6+ */}
          <div className="absolute bottom-2.5 right-4 z-10 px-2 py-0.5 rounded-full bg-slate-900/90 border border-yellow-400/40 text-[10px] font-mono text-yellow-300 font-extrabold flex items-center gap-1 shadow-lg shadow-yellow-500/10 backdrop-blur-md">
            <JSLogo />
            <span>JS ES6+</span>
          </div>

          {/* CENTERPIECE: Isometric Editor / Laptop Frame */}
          <div className="relative w-[78%] h-[82%] bg-slate-900/95 border border-blue-500/40 rounded-xl shadow-2xl flex flex-col overflow-hidden backdrop-blur-md transition-transform duration-500 group-hover:scale-105 group-hover:border-blue-400/60 mt-1">
            {/* Editor Window Header */}
            <div className="px-3 py-1.5 bg-slate-950/90 border-b border-blue-500/20 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
              </div>
              <div className="px-2.5 py-0.5 rounded bg-slate-900 border border-blue-500/30 text-[9px] font-mono text-blue-300 font-bold flex items-center gap-1">
                <span className="text-sky-400">⚛</span> App.tsx
              </div>
              <span className="text-[9px] font-mono text-blue-400/60 font-bold">UTF-8</span>
            </div>

            {/* Editor Syntax Code Canvas */}
            <div className="p-2.5 flex-1 font-mono text-[9px] leading-relaxed space-y-1 bg-slate-950/80">
              <div className="flex gap-2">
                <span className="text-slate-600 select-none w-3 text-right">1</span>
                <span className="text-purple-400 font-bold">import</span>{' '}
                <span className="text-blue-300">React</span>{' '}
                <span className="text-purple-400">from</span>{' '}
                <span className="text-emerald-300">'react'</span>;
              </div>

              <div className="flex gap-2">
                <span className="text-slate-600 select-none w-3 text-right">2</span>
                <span className="text-purple-400 font-bold">export const</span>{' '}
                <span className="text-yellow-300 font-bold">FrontendApp</span> = () =&gt; &#123;
              </div>

              <div className="flex gap-2 pl-3">
                <span className="text-slate-600 select-none w-3 text-right">3</span>
                <span className="text-purple-400">return</span> (
              </div>

              <div className="flex gap-2 pl-6">
                <span className="text-slate-600 select-none w-3 text-right">4</span>
                <span className="text-blue-400">&lt;div</span> <span className="text-sky-300">className</span>=<span className="text-emerald-300">"flex items-center bg-blue-600"</span>&gt;
              </div>

              <div className="flex gap-2 pl-9">
                <span className="text-slate-600 select-none w-3 text-right">5</span>
                <span className="text-blue-400">&lt;HeroSection</span> <span className="text-sky-300">title</span>=<span className="text-amber-300">"Frontend Master"</span> /&gt;
              </div>

              <div className="flex gap-2 pl-6">
                <span className="text-slate-600 select-none w-3 text-right">6</span>
                <span className="text-blue-400">&lt;/div&gt;</span>
              </div>

              <div className="flex gap-2 pl-3">
                <span className="text-slate-600 select-none w-3 text-right">7</span>
                );
              </div>

              <div className="flex gap-2">
                <span className="text-slate-600 select-none w-3 text-right">8</span>
                &#125;;
              </div>
            </div>
          </div>
        </div>
      );

    /* ----------------------------------------------------------------------
       BACKEND ENGINEERING BANNER ILLUSTRATION
       ---------------------------------------------------------------------- */
    case 'backend':
      return (
        <div className="absolute inset-0 w-full h-full bg-slate-950 overflow-hidden flex items-center justify-center select-none pointer-events-none">
          {/* Background Emerald Glow & Grid */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-600/25 via-slate-950/90 to-slate-950" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98110_1px,transparent_1px),linear-gradient(to_bottom,#10b98110_1px,transparent_1px)] bg-[size:14px_14px]" />

          {/* Floating Technology Logo Badges Constellation */}
          {/* Top Center-Right: Node.js */}
          <div className="absolute top-2.5 right-14 z-10 px-2 py-0.5 rounded-full bg-slate-900/90 border border-emerald-400/40 text-[10px] font-mono text-emerald-300 font-extrabold flex items-center gap-1 shadow-lg shadow-emerald-500/10 backdrop-blur-md animate-pulse">
            <NodeLogo />
            <span>Node.js</span>
          </div>

          {/* Top Center-Left: PostgreSQL */}
          <div className="absolute top-3 left-28 z-10 px-2 py-0.5 rounded-full bg-slate-900/90 border border-blue-500/40 text-[10px] font-mono text-blue-300 font-extrabold flex items-center gap-1 shadow-lg shadow-blue-500/10 backdrop-blur-md">
            <PostgresLogo />
            <span>PostgreSQL</span>
          </div>

          {/* Right Mid: MongoDB */}
          <div className="absolute right-3 top-16 z-10 px-2 py-0.5 rounded-full bg-slate-900/90 border border-green-500/40 text-[10px] font-mono text-green-300 font-extrabold flex items-center gap-1 shadow-lg shadow-green-500/10 backdrop-blur-md">
            <MongoLogo />
            <span>MongoDB</span>
          </div>

          {/* Left Mid: Docker */}
          <div className="absolute left-2.5 top-16 z-10 px-2 py-0.5 rounded-full bg-slate-900/90 border border-cyan-500/40 text-[10px] font-mono text-cyan-300 font-extrabold flex items-center gap-1 shadow-lg shadow-cyan-500/10 backdrop-blur-md">
            <DockerLogo />
            <span>Docker</span>
          </div>

          {/* Bottom Right: Express JWT */}
          <div className="absolute bottom-2.5 right-4 z-10 px-2 py-0.5 rounded-full bg-slate-900/90 border border-teal-400/40 text-[10px] font-mono text-teal-300 font-extrabold flex items-center gap-1 shadow-lg shadow-teal-500/10 backdrop-blur-md">
            <span className="text-emerald-400 font-bold">⚡</span>
            <span>REST API + JWT</span>
          </div>

          {/* CENTERPIECE: Backend Server / Code Editor Frame */}
          <div className="relative w-[78%] h-[82%] bg-slate-900/95 border border-emerald-500/40 rounded-xl shadow-2xl flex flex-col overflow-hidden backdrop-blur-md transition-transform duration-500 group-hover:scale-105 group-hover:border-emerald-400/60 mt-1">
            {/* Editor Header */}
            <div className="px-3 py-1.5 bg-slate-950/90 border-b border-emerald-500/20 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
              </div>
              <div className="px-2.5 py-0.5 rounded bg-slate-900 border border-emerald-500/30 text-[9px] font-mono text-emerald-300 font-bold flex items-center gap-1">
                <span className="text-emerald-400">⬢</span> server.ts
              </div>
              <span className="px-1.5 py-0.2 rounded bg-emerald-500/20 text-[8px] font-mono text-emerald-400 font-bold">200 OK</span>
            </div>

            {/* Code Syntax Area */}
            <div className="p-2.5 flex-1 font-mono text-[9px] leading-relaxed space-y-1 bg-slate-950/80">
              <div className="flex gap-2">
                <span className="text-slate-600 select-none w-3 text-right">1</span>
                <span className="text-purple-400 font-bold">app.post</span>(
                <span className="text-emerald-300">'/api/v1/auth'</span>, <span className="text-purple-400">async</span> (req, res) =&gt; &#123;
              </div>

              <div className="flex gap-2 pl-3">
                <span className="text-slate-600 select-none w-3 text-right">2</span>
                <span className="text-purple-400 font-bold">const</span> user = <span className="text-purple-400">await</span> <span className="text-blue-300">db</span>.<span className="text-yellow-300">query</span>(
              </div>

              <div className="flex gap-2 pl-6">
                <span className="text-slate-600 select-none w-3 text-right">3</span>
                <span className="text-emerald-300">'SELECT * FROM users WHERE email = $1'</span>
              </div>

              <div className="flex gap-2 pl-3">
                <span className="text-slate-600 select-none w-3 text-right">4</span>
                );
              </div>

              <div className="flex gap-2 pl-3">
                <span className="text-slate-600 select-none w-3 text-right">5</span>
                <span className="text-purple-400">const</span> token = <span className="text-sky-300">jwt</span>.<span className="text-yellow-300">sign</span>(&#123; id: user.id &#125;);
              </div>

              <div className="flex gap-2 pl-3">
                <span className="text-slate-600 select-none w-3 text-right">6</span>
                res.<span className="text-yellow-300">json</span>(&#123; status: <span className="text-emerald-300">'success'</span>, token &#125;);
              </div>

              <div className="flex gap-2">
                <span className="text-slate-600 select-none w-3 text-right">7</span>
                &#125;);
              </div>
            </div>
          </div>
        </div>
      );

    /* ----------------------------------------------------------------------
       MOBILE APP DEVELOPMENT BANNER ILLUSTRATION
       ---------------------------------------------------------------------- */
    case 'mobile':
      return (
        <div className="absolute inset-0 w-full h-full bg-slate-950 overflow-hidden flex items-center justify-center select-none pointer-events-none">
          {/* Background Sky/Teal Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-sky-600/25 via-slate-950/90 to-slate-950" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#06b6d410_1px,transparent_1px),linear-gradient(to_bottom,#06b6d410_1px,transparent_1px)] bg-[size:14px_14px]" />

          {/* Floating Technology Logo Badges Constellation */}
          {/* Top Center-Right: Flutter */}
          <div className="absolute top-2.5 right-14 z-10 px-2 py-0.5 rounded-full bg-slate-900/90 border border-sky-400/40 text-[10px] font-mono text-sky-300 font-extrabold flex items-center gap-1 shadow-lg shadow-sky-500/10 backdrop-blur-md animate-pulse">
            <FlutterLogo />
            <span>Flutter</span>
          </div>

          {/* Top Center-Left: Kotlin */}
          <div className="absolute top-3 left-28 z-10 px-2 py-0.5 rounded-full bg-slate-900/90 border border-purple-500/40 text-[10px] font-mono text-purple-300 font-extrabold flex items-center gap-1 shadow-lg shadow-purple-500/10 backdrop-blur-md">
            <KotlinLogo />
            <span>Kotlin</span>
          </div>

          {/* Right Mid: Swift */}
          <div className="absolute right-3 top-16 z-10 px-2 py-0.5 rounded-full bg-slate-900/90 border border-orange-500/40 text-[10px] font-mono text-orange-300 font-extrabold flex items-center gap-1 shadow-lg shadow-orange-500/10 backdrop-blur-md">
            <SwiftLogo />
            <span>SwiftUI</span>
          </div>

          {/* Left Mid: React Native */}
          <div className="absolute left-2.5 top-16 z-10 px-2 py-0.5 rounded-full bg-slate-900/90 border border-cyan-400/40 text-[10px] font-mono text-cyan-300 font-extrabold flex items-center gap-1 shadow-lg shadow-cyan-500/10 backdrop-blur-md">
            <ReactLogo />
            <span>React Native</span>
          </div>

          {/* Bottom Right: iOS / Android */}
          <div className="absolute bottom-2.5 right-4 z-10 px-2 py-0.5 rounded-full bg-slate-900/90 border border-sky-400/40 text-[10px] font-mono text-sky-300 font-extrabold flex items-center gap-1 shadow-lg shadow-sky-500/10 backdrop-blur-md">
            <span className="text-sky-400 font-bold">📱</span>
            <span>iOS & Android</span>
          </div>

          {/* CENTERPIECE: Mobile IDE Frame */}
          <div className="relative w-[78%] h-[82%] bg-slate-900/95 border border-sky-500/40 rounded-xl shadow-2xl flex flex-col overflow-hidden backdrop-blur-md transition-transform duration-500 group-hover:scale-105 group-hover:border-sky-400/60 mt-1">
            {/* Editor Header */}
            <div className="px-3 py-1.5 bg-slate-950/90 border-b border-sky-500/20 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
              </div>
              <div className="px-2.5 py-0.5 rounded bg-slate-900 border border-sky-500/30 text-[9px] font-mono text-sky-300 font-bold flex items-center gap-1">
                <span className="text-sky-400">🎯</span> main.dart
              </div>
              <span className="text-[9px] font-mono text-sky-400/60 font-bold">Dart 3.0</span>
            </div>

            {/* Code Syntax Area */}
            <div className="p-2.5 flex-1 font-mono text-[9px] leading-relaxed space-y-1 bg-slate-950/80">
              <div className="flex gap-2">
                <span className="text-slate-600 select-none w-3 text-right">1</span>
                <span className="text-purple-400 font-bold">class</span> <span className="text-yellow-300 font-bold">MobileApp</span> <span className="text-purple-400">extends</span> <span className="text-blue-300">StatelessWidget</span> &#123;
              </div>

              <div className="flex gap-2 pl-3">
                <span className="text-slate-600 select-none w-3 text-right">2</span>
                <span className="text-sky-300">@override</span>
              </div>

              <div className="flex gap-2 pl-3">
                <span className="text-slate-600 select-none w-3 text-right">3</span>
                <span className="text-blue-300">Widget</span> <span className="text-yellow-300">build</span>(<span className="text-blue-300">BuildContext</span> context) &#123;
              </div>

              <div className="flex gap-2 pl-6">
                <span className="text-slate-600 select-none w-3 text-right">4</span>
                <span className="text-purple-400">return</span> <span className="text-sky-300 font-bold">MaterialApp</span>(
              </div>

              <div className="flex gap-2 pl-9">
                <span className="text-slate-600 select-none w-3 text-right">5</span>
                home: <span className="text-amber-300 font-bold">CrossPlatformHub</span>(),
              </div>

              <div className="flex gap-2 pl-6">
                <span className="text-slate-600 select-none w-3 text-right">6</span>
                );
              </div>

              <div className="flex gap-2">
                <span className="text-slate-600 select-none w-3 text-right">7</span>
                &#125; &#125;
              </div>
            </div>
          </div>
        </div>
      );

    case 'database-sql':
    case 'database':
      return (
        <div className="absolute inset-0 w-full h-full bg-slate-950 overflow-hidden flex items-center justify-center select-none pointer-events-none">
          {/* Background Cyan Glow & Grid */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-600/25 via-slate-950/90 to-slate-950" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#06b6d410_1px,transparent_1px),linear-gradient(to_bottom,#06b6d410_1px,transparent_1px)] bg-[size:14px_14px]" />

          {/* Floating Technology Logo Badges Constellation */}
          <div className="absolute top-2.5 right-14 z-10 px-2 py-0.5 rounded-full bg-slate-900/90 border border-cyan-400/40 text-[10px] font-mono text-cyan-300 font-extrabold flex items-center gap-1 shadow-lg shadow-cyan-500/10 backdrop-blur-md animate-pulse">
            <PostgresLogo />
            <span>PostgreSQL</span>
          </div>

          <div className="absolute top-3 left-28 z-10 px-2 py-0.5 rounded-full bg-slate-900/90 border border-blue-500/40 text-[10px] font-mono text-blue-300 font-extrabold flex items-center gap-1 shadow-lg shadow-blue-500/10 backdrop-blur-md">
            <span className="text-amber-400">🐬</span>
            <span>MySQL</span>
          </div>

          <div className="absolute right-3 top-16 z-10 px-2 py-0.5 rounded-full bg-slate-900/90 border border-emerald-500/40 text-[10px] font-mono text-emerald-300 font-extrabold flex items-center gap-1 shadow-lg shadow-emerald-500/10 backdrop-blur-md">
            <MongoLogo />
            <span>Redis & NoSQL</span>
          </div>

          <div className="absolute left-2.5 top-16 z-10 px-2 py-0.5 rounded-full bg-slate-900/90 border border-sky-500/40 text-[10px] font-mono text-sky-300 font-extrabold flex items-center gap-1 shadow-lg shadow-sky-500/10 backdrop-blur-md">
            <DockerLogo />
            <span>ERD & Schema</span>
          </div>

          <div className="absolute bottom-2.5 right-4 z-10 px-2 py-0.5 rounded-full bg-slate-900/90 border border-cyan-400/40 text-[10px] font-mono text-cyan-300 font-extrabold flex items-center gap-1 shadow-lg shadow-cyan-500/10 backdrop-blur-md">
            <span className="text-cyan-400 font-bold">🗄️</span>
            <span>SQL Mastery</span>
          </div>

          {/* CENTERPIECE: SQL Studio Frame */}
          <div className="relative w-[78%] h-[82%] bg-slate-900/95 border border-cyan-500/40 rounded-xl shadow-2xl flex flex-col overflow-hidden backdrop-blur-md transition-transform duration-500 group-hover:scale-105 group-hover:border-cyan-400/60 mt-1">
            <div className="px-3 py-1.5 bg-slate-950/90 border-b border-cyan-500/20 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
              </div>
              <div className="px-2.5 py-0.5 rounded bg-slate-900 border border-cyan-500/30 text-[9px] font-mono text-cyan-300 font-bold flex items-center gap-1">
                <span className="text-cyan-400">🗄️</span> schema_design.sql
              </div>
              <span className="px-1.5 py-0.2 rounded bg-cyan-500/20 text-[8px] font-mono text-cyan-400 font-bold">EXPLAIN ANALYZE</span>
            </div>

            <div className="p-2.5 flex-1 font-mono text-[9px] leading-relaxed space-y-1 bg-slate-950/80">
              <div className="flex gap-2">
                <span className="text-slate-600 select-none w-3 text-right">1</span>
                <span className="text-purple-400 font-bold">SELECT</span> <span className="text-cyan-300">u.id, u.name, COUNT(o.id)</span>
              </div>
              <div className="flex gap-2">
                <span className="text-slate-600 select-none w-3 text-right">2</span>
                <span className="text-purple-400 font-bold">FROM</span> <span className="text-blue-300">users u</span>
              </div>
              <div className="flex gap-2">
                <span className="text-slate-600 select-none w-3 text-right">3</span>
                <span className="text-purple-400 font-bold">JOIN</span> <span className="text-blue-300">orders o</span> <span className="text-purple-400 font-bold">ON</span> <span className="text-cyan-300">u.id = o.user_id</span>
              </div>
              <div className="flex gap-2">
                <span className="text-slate-600 select-none w-3 text-right">4</span>
                <span className="text-purple-400 font-bold">WHERE</span> <span className="text-cyan-300">o.status = </span><span className="text-emerald-300">'COMPLETED'</span>
              </div>
              <div className="flex gap-2">
                <span className="text-slate-600 select-none w-3 text-right">5</span>
                <span className="text-purple-400 font-bold">GROUP BY</span> <span className="text-cyan-300">u.id, u.name</span>
              </div>
              <div className="flex gap-2">
                <span className="text-slate-600 select-none w-3 text-right">6</span>
                <span className="text-purple-400 font-bold">ORDER BY</span> <span className="text-cyan-300">total DESC LIMIT 10;</span>
              </div>
            </div>
          </div>
        </div>
      );

    case 'uxui':
    case 'ux-ui':
    case 'ux-ui-design':
      return (
        <div className="absolute inset-0 w-full h-full bg-slate-950 overflow-hidden flex items-center justify-center">
          <img
            src={uxuiCoverImg}
            alt="UX/UI Design Course Cover"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      );

    /* DEFAULT FALLBACK */
    default:
      return (
        <div className="absolute inset-0 w-full h-full bg-slate-950 overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-600/25 via-slate-950 to-slate-950" />
        </div>
      );
  }
};

import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { useAuth } from '../context/AuthContext';
import { UserAvatar } from './UserAvatar';
import { translations } from '../translations';
import { Flame, Trophy, Sun, Moon, Menu, X, LogIn, LogOut, UserCheck, ShieldCheck } from 'lucide-react';
import { SabayCodeLogo } from './SabayCodeLogo';

export type NavigationViewState = 'home' | 'classes' | 'frontend-class' | 'backend-class' | 'mobile-class' | 'ai-prompt-class' | 'uxui-class' | 'data-analytics-class' | 'courses' | 'certificate-generator' | 'about' | 'playground' | 'reference' | 'profile' | 'lesson' | 'contact' | 'donate' | 'login' | 'register' | 'verify-email' | 'admin';

interface HeaderProps {
  currentView: NavigationViewState;
  setCurrentView: (view: NavigationViewState) => void;
  selectedCourseId?: string;
}

export const Header: React.FC<HeaderProps> = ({ currentView, setCurrentView, selectedCourseId }) => {
  const { language, setLanguage, theme, setTheme, progress } = useApp();
  const { currentUser, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[language];

  const handleNavClick = (view: NavigationViewState) => {
    if (view === 'classes') {
      window.location.hash = '#/classes';
    } else if (view === 'courses') {
      window.location.hash = '#/courses';
    } else if (view === 'certificate-generator') {
      window.location.hash = '#/certificate-generator';
    } else if (view === 'home') {
      window.location.hash = '';
    } else if (view === 'about') {
      window.location.hash = '#/about';
    } else if (view === 'profile') {
      window.location.hash = '#/profile';
    } else if (view === 'admin') {
      window.location.hash = '#/admin';
    } else if (view === 'contact') {
      window.location.hash = '#/contact';
    } else if (view === 'donate') {
      window.location.hash = '#/donate';
    } else if (view === 'playground') {
      window.location.hash = '#/playground';
    }
    setCurrentView(view);
    setMobileMenuOpen(false);
  };

  const isAdminUser = currentUser?.role === 'admin' || currentUser?.email?.toLowerCase() === 'nanseyha4@gmail.com';

  const isClassesActive = currentView === 'classes' || 
                          currentView === 'frontend-class' || 
                          currentView === 'backend-class' || 
                          currentView === 'mobile-class' || 
                          currentView === 'ai-prompt-class' || 
                          currentView === 'uxui-class' || 
                          currentView === 'data-analytics-class' || 
                          (currentView as any) === 'db-sql-class' ||
                          (currentView === 'lesson' && selectedCourseId === 'it-support');

  const isCoursesActive = currentView === 'courses' || 
                          (currentView === 'lesson' && selectedCourseId !== 'it-support');

  const navItems = [
    { id: 'home', label: language === 'en' ? 'Home' : 'ទំព័រដើម' },
    { id: 'classes', label: language === 'en' ? 'Classes' : 'ថ្នាក់រៀន' },
    { id: 'courses', label: language === 'en' ? 'Learning Paths' : t.learningPaths },
    { id: 'certificate-generator', label: language === 'en' ? 'Certificates' : 'វិញ្ញាបនបត្រ' },
    { id: 'about', label: language === 'en' ? 'About' : 'អំពីយើង' },
    ...(currentUser ? [{ id: 'profile', label: language === 'en' ? 'Profile' : t.profile }] : []),
    ...(isAdminUser ? [{ id: 'admin', label: language === 'en' ? 'Admin' : 'គ្រប់គ្រង Admin' }] : []),
    { id: 'contact', label: language === 'en' ? 'Contact' : 'ទំនាក់ទំនង' },
    { id: 'donate', label: language === 'en' ? 'Donate' : 'គាំទ្រ និងបរិច្ចាគ' },
  ] as { id: NavigationViewState; label: string }[];


  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md transition-colors duration-200">
      <div className="max-w-[1600px] mx-auto px-3 sm:px-5 lg:px-6 h-16 w-full flex items-center justify-between gap-2">
        {/* Logo */}
        <div 
          onClick={() => handleNavClick('home')} 
          className="cursor-pointer group hover:opacity-90 active:scale-95 transition-all duration-150 shrink-0"
          id="nav-logo"
        >
          <SabayCodeLogo 
            size={38} 
            showText={true} 
            showSubtitle={true}
            responsiveText={false}
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-0.5 xl:space-x-1" id="desktop-nav">
          {navItems.map((item) => {
            const isActive = item.id === 'classes' ? isClassesActive : item.id === 'courses' ? isCoursesActive : currentView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-2.5 xl:px-3 py-1.5 rounded-xl text-xs xl:text-[13.5px] tracking-tight transition-all duration-200 whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'bg-blue-50/90 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 font-bold shadow-xs border border-blue-100/80 dark:border-blue-900/40'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white font-medium hover:bg-slate-100/70 dark:hover:bg-slate-850'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Top-Right Control Buttons */}
        <div className="flex items-center space-x-1.5 xl:space-x-2.5 shrink-0" id="nav-controls">
          {/* Active Streak Badge */}
          <div 
            onClick={() => currentUser ? setCurrentView('profile') : setCurrentView('login')}
            className="flex items-center space-x-1 px-2 py-1.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 border border-amber-100 dark:border-amber-900/30 text-xs font-semibold cursor-pointer hover:scale-[1.02] transition-transform duration-150"
            title={`${t.streak}: ${progress.streakCount} ${t.daysStreak}`}
          >
            <Flame className="w-4 h-4 fill-amber-500 animate-pulse" />
            <span className="font-mono">{progress.streakCount}</span>
            <span className="hidden sm:inline text-[10px] font-normal">{t.daysStreak}</span>
          </div>

          {/* XP Badge */}
          <div 
            onClick={() => currentUser ? setCurrentView('profile') : setCurrentView('login')}
            className="flex items-center space-x-1 px-2 py-1.5 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-900/30 text-xs font-semibold cursor-pointer hover:scale-[1.02] transition-transform duration-150"
            title={`Total Points: ${progress.points} XP`}
          >
            <Trophy className="w-4 h-4 text-blue-500" />
            <span className="font-mono">{progress.points}</span>
            <span className="hidden sm:inline text-[10px] font-normal">XP</span>
          </div>

          <div className="hidden lg:flex items-center space-x-2 border-l border-slate-200 dark:border-slate-850 pl-3">
            {currentUser ? (
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setCurrentView('profile')}
                  className="flex items-center space-x-2 px-2.5 py-1.5 rounded-xl bg-blue-50/50 dark:bg-blue-950/30 border border-blue-100/40 dark:border-blue-900/20 text-xs text-slate-700 dark:text-slate-200 font-bold hover:bg-blue-50 dark:hover:bg-blue-950/50 transition cursor-pointer"
                >
                  <UserAvatar 
                    avatarUrl={progress.profileAvatarImage || currentUser.avatarImage || (currentUser as any).avatar_url || currentUser.progress?.profileAvatarImage || progress.profileAvatar || currentUser.progress?.profileAvatar || "🦊"} 
                    fallbackEmoji={progress.profileAvatar || currentUser.progress?.profileAvatar || "🦊"}
                    name={progress.profileName || currentUser.name}
                    className="w-5 h-5 rounded-full"
                    textClassName="text-sm"
                  />
                  <span className="max-w-[80px] truncate">{progress.profileName || currentUser.name}</span>
                </button>
                <button
                  onClick={() => { logout(); handleNavClick('home'); }}
                  className="p-2 rounded-xl text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/30 transition cursor-pointer"
                  title={language === 'en' ? "Log Out" : "ចាកចេញ"}
                >
                  <LogOut className="w-4.5 h-4.5" />
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-1.5">
                <button
                  onClick={() => handleNavClick('login')}
                  className="px-3 py-1.5 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-xl transition cursor-pointer"
                >
                  {language === 'en' ? "Log In" : "ចូលគណនី"}
                </button>
                <button
                  onClick={() => handleNavClick('register')}
                  className="px-3 py-1.5 text-xs font-extrabold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition shadow-sm shadow-blue-600/10 cursor-pointer"
                >
                  {language === 'en' ? "Sign Up" : "ចុះឈ្មោះ"}
                </button>
              </div>
            )}
          </div>

          {/* Language Switcher */}
          <div className="hidden sm:flex items-center bg-slate-100 dark:bg-slate-900 rounded-xl p-0.5 border border-slate-200/50 dark:border-slate-800/50">
            <button
              onClick={() => setLanguage('en')}
              className={`px-1.5 py-1 text-[10px] lg:text-xs font-bold rounded-lg transition-all duration-150 ${
                language === 'en'
                  ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-sm'
                  : 'text-slate-400 dark:text-slate-500 hover:text-slate-600'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('km')}
              className={`px-1.5 py-1 text-[10px] lg:text-xs font-bold rounded-lg transition-all duration-150 ${
                language === 'km'
                  ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-sm'
                  : 'text-slate-400 dark:text-slate-500 hover:text-slate-600'
              }`}
            >
              KM
            </button>
          </div>

          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="hidden sm:block p-2 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900 transition-all duration-200 cursor-pointer"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-4.5 h-4.5 text-amber-500" />
            ) : (
              <Moon className="w-4.5 h-4.5 text-blue-600" />
            )}
          </button>

          {/* Mobile Hamburger Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900"
            aria-label="Open menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 w-full border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 py-3 space-y-1 shadow-2xl z-50 animate-fade-in text-left">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                currentView === item.id || (item.id === 'courses' && currentView === 'lesson')
                  ? 'bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 font-bold'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900/50'
              }`}
            >
              {item.label}
            </button>
          ))}

          {/* Auth options for mobile */}
          <div className="border-t border-slate-150 dark:border-slate-850 pt-2.5 mt-2.5 space-y-2">
            {currentUser ? (
              <div className="space-y-2">
                <div 
                  onClick={() => { setCurrentView('profile'); setMobileMenuOpen(false); }}
                  className="flex items-center justify-between px-4 py-2.5 bg-blue-50/50 dark:bg-blue-950/20 rounded-xl cursor-pointer hover:bg-blue-100/50 dark:hover:bg-blue-900/40 transition"
                >
                  <div className="flex items-center space-x-2.5 min-w-0">
                    <UserAvatar 
                      avatarUrl={progress.profileAvatarImage || currentUser.avatarImage || (currentUser as any).avatar_url || currentUser.progress?.profileAvatarImage || progress.profileAvatar || currentUser.progress?.profileAvatar || "🦊"} 
                      fallbackEmoji={progress.profileAvatar || currentUser.progress?.profileAvatar || "🦊"}
                      name={progress.profileName || currentUser.name}
                      className="w-7 h-7 rounded-full"
                      textClassName="text-lg"
                    />
                    <span className="text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300 truncate">{progress.profileName || currentUser.name}</span>
                  </div>
                  <span className="text-[10px] font-bold text-blue-500 uppercase shrink-0">Active Session</span>
                </div>
                <button
                  onClick={() => { logout(); handleNavClick('home'); }}
                  className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 text-sm font-bold text-rose-500 bg-rose-50 dark:bg-rose-950/20 hover:bg-rose-100 rounded-xl transition cursor-pointer"
                >
                  <LogOut className="w-4 h-4" />
                  <span>{language === 'en' ? "Log Out" : "ចាកចេញ"}</span>
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-2 px-2">
                <button
                  onClick={() => handleNavClick('login')}
                  className="py-2 text-center text-xs font-bold text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-900 rounded-xl transition cursor-pointer"
                >
                  {language === 'en' ? "Log In" : "ចូលគណនី"}
                </button>
                <button
                  onClick={() => handleNavClick('register')}
                  className="py-2 text-center text-xs font-bold text-white bg-blue-600 rounded-xl transition cursor-pointer"
                >
                  {language === 'en' ? "Sign Up" : "ចុះឈ្មោះ"}
                </button>
              </div>
            )}

            {/* Mobile-Only Language & Theme Drawer Row */}
            <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800/80 pt-3 mt-2 px-2">
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
                {language === 'en' ? "Theme & Language" : "រចនាបថ និងភាសា"}
              </span>
              <div className="flex items-center space-x-2">
                {/* Theme toggle inside drawer */}
                <button
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="p-1.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900 transition-all duration-200 cursor-pointer"
                  aria-label="Toggle theme"
                >
                  {theme === 'dark' ? (
                    <Sun className="w-4 h-4 text-amber-500" />
                  ) : (
                    <Moon className="w-4 h-4 text-blue-600" />
                  )}
                </button>

                {/* Language switcher inside drawer */}
                <div className="flex items-center bg-slate-100 dark:bg-slate-900 rounded-xl p-0.5 border border-slate-200/50 dark:border-slate-800/50">
                  <button
                    onClick={() => setLanguage('en')}
                    className={`px-2 py-0.5 text-[10px] font-bold rounded-lg transition-all duration-150 ${
                      language === 'en'
                        ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-sm'
                        : 'text-slate-400 dark:text-slate-500 hover:text-slate-600'
                    }`}
                  >
                    EN
                  </button>
                  <button
                    onClick={() => setLanguage('km')}
                    className={`px-2 py-0.5 text-[10px] font-bold rounded-lg transition-all duration-150 ${
                      language === 'km'
                        ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-sm'
                        : 'text-slate-400 dark:text-slate-500 hover:text-slate-600'
                    }`}
                  >
                    KM
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

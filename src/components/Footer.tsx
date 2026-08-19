import React, { useState } from 'react';
import { 
  Mail, Send, Facebook, Github, Heart, Sparkles, ExternalLink, 
  BookOpen, GraduationCap, Code2, ShieldCheck, UserCheck, HelpCircle, Info, ChevronRight, MessageSquare 
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { SabayCodeLogo } from './SabayCodeLogo';
import { AboutFaqModal } from './AboutFaqModal';

interface FooterProps {
  onNavigate?: (view: any) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { language, setLanguage } = useApp();
  const [isFaqOpen, setIsFaqOpen] = useState(false);
  const [faqInitialTab, setFaqInitialTab] = useState<'about' | 'faq'>('about');

  const handleLinkClick = (hash: string, view?: string) => {
    if (view && onNavigate) {
      onNavigate(view);
    }
    window.location.hash = hash;
  };

  const openAboutModal = (tab: 'about' | 'faq' = 'about') => {
    setFaqInitialTab(tab);
    setIsFaqOpen(true);
  };

  return (
    <>
      <footer className="relative bg-slate-100/90 dark:bg-slate-950 text-slate-700 dark:text-slate-300 font-sans transition-colors duration-200 overflow-hidden">
        {/* Ambient Radial Background Glows for Depth */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-tr from-blue-600/10 via-indigo-600/10 to-purple-600/10 dark:from-blue-600/15 dark:via-indigo-500/10 dark:to-purple-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 dark:bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

        {/* Main Footer Content Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10 relative z-10">
          
          {/* 4-Column SaaS Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
            
            {/* Column 1 — Brand & Mission */}
            <div className="space-y-5">
              <div className="cursor-pointer inline-block" onClick={() => handleLinkClick('#', 'home')}>
                <SabayCodeLogo 
                  size={38} 
                  textColor="default" 
                  subtitle={language === 'en' ? 'BILINGUAL DEV PLATFORM' : 'វេទិកាអប់រំបច្ចេកវិទ្យា'} 
                />
              </div>

              <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                {language === 'en'
                  ? 'Empowering Cambodian students and developers with high-quality, bilingual tech education, interactive bootcamps, and modern hands-on coding skills.'
                  : 'ផ្តល់ចំណេះដឹងបច្ចេកវិទ្យាកម្រិតខ្ពស់ ពីរភាសា (ខ្មែរ-អង់គ្លេស) សម្រាប់សិស្ស-និស្សិតកម្ពុជា តាមរយៈការអនុវត្តជាក់ស្តែង និងថ្នាក់រៀន Master Bootcamps។'}
              </p>

              {/* Social / Contact Row */}
              <div className="pt-2 flex items-center gap-3">
                <a
                  href="mailto:nanseyha4@gmail.com"
                  className="w-9 h-9 rounded-xl bg-white/80 dark:bg-slate-900/80 hover:bg-blue-50 dark:hover:bg-blue-600/20 hover:border-blue-500/50 border border-slate-200 dark:border-slate-800/80 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 shadow-xs backdrop-blur-sm transition-all duration-200 group"
                  title={language === 'en' ? 'Email Support' : 'អ៊ីមែលទាក់ទង'}
                >
                  <Mail className="w-4 h-4 transition-transform group-hover:scale-110" />
                </a>

                <a
                  href="https://t.me/SabayCode"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white/80 dark:bg-slate-900/80 hover:bg-sky-50 dark:hover:bg-sky-600/20 hover:border-sky-500/50 border border-slate-200 dark:border-slate-800/80 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 shadow-xs backdrop-blur-sm transition-all duration-200 group"
                  title="Telegram Community"
                >
                  <Send className="w-4 h-4 transition-transform group-hover:scale-110" />
                </a>

                <a
                  href="https://www.facebook.com/nan.seyha.2006"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white/80 dark:bg-slate-900/80 hover:bg-blue-50 dark:hover:bg-blue-600/20 hover:border-blue-500/50 border border-slate-200 dark:border-slate-800/80 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 shadow-xs backdrop-blur-sm transition-all duration-200 group"
                  title="Facebook Page"
                >
                  <Facebook className="w-4 h-4 transition-transform group-hover:scale-110" />
                </a>

                <a
                  href="https://github.com/Seyha-993-701"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white/80 dark:bg-slate-900/80 hover:bg-purple-50 dark:hover:bg-purple-600/20 hover:border-purple-500/50 border border-slate-200 dark:border-slate-800/80 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 shadow-xs backdrop-blur-sm transition-all duration-200 group"
                  title="GitHub Profile"
                >
                  <Github className="w-4 h-4 transition-transform group-hover:scale-110" />
                </a>
              </div>
            </div>

            {/* Column 2 — Learning Paths */}
            <div className="space-y-4">
              <div className="pb-2.5 border-b border-slate-200/80 dark:border-slate-800/80">
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 dark:text-slate-100 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                  <span>{language === 'en' ? 'Learning Paths' : 'ផ្លូវសិក្សាដំបូង'}</span>
                </h3>
              </div>

              <ul className="space-y-3 text-xs md:text-sm">
                {[
                  { nameEn: 'HTML5 & Web Fundamentals', nameKm: 'មូលដ្ឋានគ្រឹះ HTML5', hash: '#/courses' },
                  { nameEn: 'CSS3 & Responsive Layouts', nameKm: 'ការឌីសាញ CSS3 & Layout', hash: '#/courses' },
                  { nameEn: 'JavaScript (ES6+) Core', nameKm: 'កូដអភិវឌ្ឍន៍ JavaScript', hash: '#/courses' },
                  { nameEn: 'React.js Frontend Architecture', nameKm: 'ការសរសេរ React.js', hash: '#/courses' },
                  { nameEn: 'Node.js & Express REST API', nameKm: 'ការបង្កើត Node.js API', hash: '#/courses' },
                  { nameEn: 'Java Spring Boot Enterprise', nameKm: 'អភិវឌ្ឍន៍ Java Spring Boot', hash: '#/courses' },
                ].map((track, idx) => (
                  <li key={idx}>
                    <button
                      onClick={() => handleLinkClick(track.hash, 'courses')}
                      className="text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-white transition-all duration-200 flex items-center gap-2 hover:translate-x-1 group text-left cursor-pointer"
                    >
                      <ChevronRight className="w-3.5 h-3.5 text-slate-400 dark:text-slate-600 group-hover:text-blue-600 dark:group-hover:text-blue-400 shrink-0 transition-colors" />
                      <span className="group-hover:underline underline-offset-4">{language === 'en' ? track.nameEn : track.nameKm}</span>
                    </button>
                  </li>
                ))}
              </ul>

              <div className="pt-2">
                <button
                  onClick={() => handleLinkClick('#/courses', 'courses')}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors group cursor-pointer"
                >
                  <span>{language === 'en' ? 'View All Courses' : 'មើលវគ្គសិក្សាទាំងអស់'}</span>
                  <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* Column 3 — Flagship Classes */}
            <div className="space-y-4">
              <div className="pb-2.5 border-b border-slate-200/80 dark:border-slate-800/80">
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 dark:text-slate-100 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0" />
                  <span>{language === 'en' ? 'Flagship Classes' : 'ថ្នាក់រៀន Master Bootcamps'}</span>
                </h3>
              </div>

              <ul className="space-y-3 text-xs md:text-sm">
                {[
                  { nameEn: 'IT Support Fundamentals', nameKm: 'ថ្នាក់រៀន IT Support', hash: '#/classes/it-support' },
                  { nameEn: 'AI Prompt & Generative AI', nameKm: 'AI Prompt Engineering', hash: '#/classes/ai-prompt-engineering' },
                  { nameEn: 'Frontend Web Development', nameKm: 'ថ្នាក់រៀន Frontend Web', hash: '#/classes/frontend-development' },
                  { nameEn: 'Backend Web Development', nameKm: 'ថ្នាក់រៀន Backend Web', hash: '#/classes/backend-development' },
                  { nameEn: 'Mobile App Development', nameKm: 'ថ្នាក់រៀន Mobile App', hash: '#/classes/mobile-development' },
                  { nameEn: 'React.js + Tailwind Masterclass', nameKm: 'ថ្នាក់រៀន React & Tailwind', hash: '#/classes/frontend-development/m3-l1' },
                ].map((cls, idx) => (
                  <li key={idx}>
                    <button
                      onClick={() => handleLinkClick(cls.hash, 'classes')}
                      className="text-slate-600 hover:text-purple-600 dark:text-slate-400 dark:hover:text-white transition-all duration-200 flex items-center gap-2 hover:translate-x-1 group text-left cursor-pointer"
                    >
                      <ChevronRight className="w-3.5 h-3.5 text-slate-400 dark:text-slate-600 group-hover:text-purple-600 dark:group-hover:text-purple-400 shrink-0 transition-colors" />
                      <span className="group-hover:underline underline-offset-4">{language === 'en' ? cls.nameEn : cls.nameKm}</span>
                    </button>
                  </li>
                ))}
              </ul>

              <div className="pt-2">
                <button
                  onClick={() => handleLinkClick('#/classes', 'classes')}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors group cursor-pointer"
                >
                  <span>{language === 'en' ? 'View All Classes' : 'មើលថ្នាក់រៀនទាំងអស់'}</span>
                  <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* Column 4 — Company / Support & Founder Card */}
            <div className="space-y-4">
              <div className="pb-2.5 border-b border-slate-200/80 dark:border-slate-800/80">
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 dark:text-slate-100 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>{language === 'en' ? 'Company & Support' : 'អំពីយើង និងការគាំទ្រ'}</span>
                </h3>
              </div>

              <ul className="space-y-3 text-xs md:text-sm">
                <li>
                  <button
                    onClick={() => handleLinkClick('#/contact', 'contact')}
                    className="text-slate-600 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-white transition-all duration-200 flex items-center gap-2 hover:translate-x-1 group text-left cursor-pointer"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400 dark:text-slate-600 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 shrink-0 transition-colors" />
                    <span className="group-hover:underline underline-offset-4">{language === 'en' ? 'Contact Us' : 'ទាក់ទងមកយើង'}</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleLinkClick('#/donate', 'donate')}
                    className="text-slate-600 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-white transition-all duration-200 flex items-center gap-2 hover:translate-x-1 group text-left cursor-pointer"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400 dark:text-slate-600 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 shrink-0 transition-colors" />
                    <span className="group-hover:underline underline-offset-4">{language === 'en' ? 'Support & Donate' : 'ឧបត្ថម្ភ និងគាំទ្រ'}</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleLinkClick('#/about', 'about')}
                    className="text-slate-600 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-white transition-all duration-200 flex items-center gap-2 hover:translate-x-1 group text-left cursor-pointer font-semibold"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span className="group-hover:underline underline-offset-4">{language === 'en' ? 'About SabayCode Page' : 'អំពី SabayCode (ទំព័រពេញ)'}</span>
                  </button>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom Bar Divider & Redesign */}
          <div className="mt-14 pt-8 border-t border-slate-200/90 dark:border-slate-800/90 flex flex-col md:flex-row items-center justify-between gap-5 text-xs text-slate-600 dark:text-slate-400">
            
            {/* Left side copyright */}
            <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
              <span className="font-medium">
                © 2026 <span className="font-extrabold text-slate-900 dark:text-slate-100">SabayCode</span>. {language === 'en' ? 'Founded by' : 'បង្កើតឡើងដោយ'} <span className="font-extrabold text-blue-600 dark:text-blue-400">Nan Seyha (សីហា)</span>.
              </span>
              <span className="hidden sm:inline text-slate-300 dark:text-slate-700">•</span>
              <span className="text-slate-500 dark:text-slate-400 text-[11px]">
                {language === 'en' ? 'All rights reserved.' : 'រក្សាសិទ្ធិគ្រប់យ៉ាង។'}
              </span>
            </div>

            {/* Right side badges & Language Switcher */}
            <div className="flex items-center gap-3 shrink-0 flex-wrap justify-center">
              {/* Heart Badge */}
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800/90 text-[11px] font-semibold text-slate-700 dark:text-slate-300 shadow-xs backdrop-blur-sm">
                <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 animate-pulse shrink-0" />
                <span>{language === 'en' ? 'Made for Cambodian students' : 'សម្រាប់សិស្សកម្ពុជា'}</span>
                <span className="text-xs ml-0.5">🇰🇭</span>
              </span>

              {/* Language Indicator Button */}
              <button
                onClick={() => setLanguage(language === 'en' ? 'km' : 'en')}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/90 dark:bg-blue-500/10 border border-blue-200/80 dark:border-blue-500/30 text-[11px] font-bold text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-500/20 transition-all duration-200 shadow-xs backdrop-blur-sm cursor-pointer"
                title={language === 'en' ? 'Switch to Khmer' : 'ប្តូរទៅអង់គ្លេស'}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 shrink-0" />
                <span>{language === 'en' ? 'English (EN)' : 'ភាសាខ្មែរ (KM)'}</span>
              </button>
            </div>

          </div>
        </div>
      </footer>

      {/* About & FAQ Modal */}
      <AboutFaqModal
        isOpen={isFaqOpen}
        onClose={() => setIsFaqOpen(false)}
        initialTab={faqInitialTab}
      />
    </>
  );
};


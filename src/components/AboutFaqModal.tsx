import React, { useState } from 'react';
import { 
  X, HelpCircle, Info, Sparkles, Heart, Award, Code2, BookOpen, 
  UserCheck, ShieldCheck, Mail, Send, CheckCircle2, Globe, Users, ChevronRight 
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { SabayCodeLogo } from './SabayCodeLogo';
import founderPhoto from '../assets/images/Founder.jpg';

interface AboutFaqModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: 'about' | 'faq';
}

export const AboutFaqModal: React.FC<AboutFaqModalProps> = ({
  isOpen,
  onClose,
  initialTab = 'about',
}) => {
  const { language } = useApp();
  const [activeTab, setActiveTab] = useState<'about' | 'faq'>(initialTab);
  const [imgIndex, setImgIndex] = useState(0);

  const founderImageCandidates = [
    founderPhoto,
    '/assets/images/Founder.jpg',
    '/images/nan_seyha.jpg',
    '/assets/nan-seyha-profile.jpg'
  ];

  if (!isOpen) return null;

  const faqItems = [
    {
      qEn: 'Is SabayCode free for Cambodian students?',
      qKm: 'តើ SabayCode ឥតគិតថ្លៃសម្រាប់សិស្ស-និស្សិតកម្ពុជាឬ?',
      aEn: 'Yes! SabayCode is built as a community-driven, bilingual technology learning platform dedicated to empowering Cambodian youth with practical, modern software engineering skills free of charge.',
      aKm: 'បាទ/ចាស! SabayCode ត្រូវ​បាន​បង្កើត​ឡើង​ជា​វេទិកា​សិក្សា​បច្ចេកវិទ្យា​ពីរ​ភាសា (ខ្មែរ-អង់គ្លេស) សម្រាប់​សហគមន៍ ដើម្បី​ជួយ​ជ្រោមជ្រែង​យុវជន​កម្ពុជា​ឲ្យ​ចេះ​ជំនាញ​សរសេរ​កូដ​ពិតប្រាកដ ដោយ​ឥតគិតថ្លៃ។',
    },
    {
      qEn: 'How does the bilingual learning mode work?',
      qKm: 'តើ​របៀប​រៀន​ពីរ​ភាសា (Bilingual Mode) ដំណើរការ​យ៉ាងដូចម្តេច?',
      aEn: 'All course lessons, interactive code playgrounds, quizzes, and documentation feature seamless language toggling between English and Khmer (ភាសាខ្មែរ), allowing students to master international tech jargon while understanding concepts deeply in Khmer.',
      aKm: 'រាល់​មេរៀន ឧបករណ៍​អនុវត្ត​កូដ សំណួរ​តេស្ត និង​ឯកសារ​យោង អាច​ផ្លាស់ប្តូរ​រវាង​ភាសា​អង់គ្លេស និង​ភាសាខ្មែរ​បាន​ភ្លាមៗ ដែល​ជួយ​ឲ្យ​សិស្ស​យល់​ដឹង​ស៊ីជម្រៅ និង​ស្ទាត់ជំនាញ​ពាក្យ​បច្ចេកទេស​អន្តរជាតិ។',
    },
    {
      qEn: 'Do I get a verified certificate upon completion?',
      qKm: 'តើ​ខ្ញុំ​នឹង​ទទួលបាន​វិញ្ញាបនបត្រ​បញ្ជាក់​ការសិក្សា​ដែរ​ឬទេ?',
      aEn: 'Yes! Completing any of our flagship bootcamps (e.g. AI Prompt Engineering, Frontend Development, Backend, Mobile App) grants a verifiable digital certificate with a unique credential ID and QR code verification.',
      aKm: 'បាទ/ចាស! ពេល​រៀន​ចប់​វគ្គ Master Bootcamp នីមួយៗ (ដូចជា AI Prompt Engineering, Frontend, Backend, Mobile) អ្នក​នឹង​ទទួលបាន​វិញ្ញាបនបត្រ​ឌីជីថល ដែល​មាន QR Code និង Credential ID សម្រាប់​ផ្ទៀងផ្ទាត់​ផ្លូវការ។',
    },
    {
      qEn: 'Who is the founder and developer behind SabayCode?',
      qKm: 'តើ​នរណា​ជា​ស្ថាបនិក និង​អ្នកអភិវឌ្ឍន៍ SabayCode?',
      aEn: 'SabayCode was created and is actively engineered by Nan Seyha (សីហា), a passionate software engineer dedicated to elevating technological literacy and access across Cambodia.',
      aKm: 'SabayCode ត្រូវបានបង្កើតឡើង និងអភិវឌ្ឍដោយលោក ណាន សីហា (Nan Seyha) ដែលជាវិស្វករសូហ្វវែរ និងជាអ្នកបង្កើតដែលប្តេជ្ញាចិត្តពង្រឹងសមត្ថភាពបច្ចេកវិទ្យារបស់យុវជនកម្ពុជា។',
    },
    {
      qEn: 'How can I support or contribute to SabayCode?',
      qKm: 'តើ​ខ្ញុំ​អាច​គាំទ្រ ឬ​បរិច្ចាគ​ដល់ SabayCode ដោយ​របៀបណា?',
      aEn: 'You can support us by sharing SabayCode with fellow students, providing feedback, or contributing via our Support & Donate page to help cover server hosting and content development costs.',
      aKm: 'អ្នក​អាច​គាំទ្រ​យើង​បាន​តាមរយៈ​ការចែករំលែក SabayCode ទៅកាន់​មិត្តភក្តិ ផ្តល់​មតិកែលម្អ ឬ​ចូលរួម​ឧបត្ថម្ភ​តាម​ទំព័រ Support & Donate ដើម្បី​ទ្រទ្រង់​ថ្លៃ Server និង​ការផលិត​មេរៀន​ថ្មីៗ។',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div 
        className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200/90 dark:border-slate-800 rounded-3xl max-w-3xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden font-sans text-slate-900 dark:text-slate-100 transition-all transform animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar with Subtle Gradient Glow */}
        <div className="relative px-6 py-5 border-b border-slate-200/80 dark:border-slate-800 flex items-center justify-between bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white overflow-hidden">
          {/* Ambient Header Glows */}
          <div className="absolute -top-12 -left-12 w-48 h-48 bg-blue-500/20 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-purple-500/20 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 flex items-center gap-3">
            <SabayCodeLogo size={34} textColor="white" />
            <div>
              <h2 className="text-lg font-black tracking-tight leading-snug">
                {language === 'en' ? 'About SabayCode & FAQ' : 'អំពី SabayCode និងសំណួរញឹកញាប់'}
              </h2>
              <p className="text-xs text-slate-300 font-medium">
                {language === 'en' ? 'Bilingual Tech Education Platform for Cambodia 🇰🇭' : 'វេទិកាសិក្សាបច្ចេកវិទ្យាពីរភាសាសម្រាប់កម្ពុជា 🇰🇭'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="relative z-10 p-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher - Styled Pill Container */}
        <div className="px-6 py-3.5 border-b border-slate-200/80 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/60 backdrop-blur-md flex items-center justify-between">
          <div className="inline-flex p-1 bg-slate-200/70 dark:bg-slate-800/80 rounded-2xl gap-1">
            <button
              onClick={() => setActiveTab('about')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
                activeTab === 'about'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-300/40 dark:hover:bg-slate-700/50'
              }`}
            >
              <Info className="w-4 h-4" />
              <span>{language === 'en' ? 'About Platform' : 'អំពីវេទិកា'}</span>
            </button>

            <button
              onClick={() => setActiveTab('faq')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
                activeTab === 'faq'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-300/40 dark:hover:bg-slate-700/50'
              }`}
            >
              <HelpCircle className="w-4 h-4" />
              <span>{language === 'en' ? 'FAQ' : 'សំណួរញឹកញាប់'}</span>
            </button>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/30 text-[11px] font-bold text-blue-700 dark:text-blue-300">
            <Sparkles className="w-3.5 h-3.5 text-blue-500" />
            <span>{language === 'en' ? 'Free Community Platform' : 'វេទិកាសហគមន៍ឥតគិតថ្លៃ'}</span>
          </div>
        </div>

        {/* Modal Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {activeTab === 'about' ? (
            <div className="space-y-6 animate-fade-in">
              {/* Mission Glassmorphism Card */}
              <div className="relative overflow-hidden bg-gradient-to-br from-blue-500/10 via-indigo-500/5 to-purple-500/10 dark:from-blue-950/40 dark:via-indigo-950/30 dark:to-purple-950/40 border border-blue-200 dark:border-blue-800/60 rounded-3xl p-6 space-y-3 backdrop-blur-md shadow-sm">
                <div className="absolute -right-8 -bottom-8 opacity-10 pointer-events-none text-blue-600 dark:text-blue-400">
                  <Code2 className="w-48 h-48" />
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300 border border-blue-500/20 text-xs font-black uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{language === 'en' ? 'Our Core Mission' : 'បេសកកម្មចម្បងរបស់យើង'}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white leading-snug">
                  {language === 'en'
                    ? 'Empowering Cambodian Developers with World-Class Tech Education'
                    : 'ពង្រឹងសមត្ថភាពអ្នកអភិវឌ្ឍន៍សូហ្វវែរកម្ពុជាជាមួយការអប់រំបច្ចេកវិទ្យាកម្រិតពិភពលោក'}
                </h3>

                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                  {language === 'en'
                    ? 'SabayCode is an interactive, bilingual technology learning platform designed specifically for Cambodian students and engineers. By combining hands-on code playgrounds, structured Master Bootcamps, verified digital certificates, and instant Khmer/English toggling, SabayCode bridges the gap between local talent and global tech standards.'
                    : 'SabayCode ជាវេទិកាសិក្សាបច្ចេកវិទ្យាអន្តរកម្មពីរភាសាដែលបានឌីសាញឡើងយ៉ាងសម្រិតសម្រាំងសម្រាប់សិស្ស-និស្សិត និងវិស្វករកម្ពុជា។ តាមរយៈការរួមបញ្ចូលគ្នារវាងការសរសេរកូដអនុវត្តផ្ទាល់ ថ្នាក់រៀន Master Bootcamps វិញ្ញាបនបត្រឌីជីថល និងការផ្លាស់ប្តូរភាសាខ្មែរ-អង់គ្លេសភ្លាមៗ SabayCode ជួយលើកកម្ពស់សមត្ថភាពយុវជនកម្ពុជាឲ្យទាន់ស្តង់ដារអន្តរជាតិ។'}
                </p>
              </div>

              {/* Founder Section — Real Profile Image */}
              <div className="bg-slate-50 dark:bg-slate-800/60 border border-slate-200/90 dark:border-slate-800 rounded-3xl p-5 sm:p-6 flex flex-col sm:flex-row items-center gap-6 shadow-sm hover:border-slate-300 dark:hover:border-slate-700 transition">
                
                {/* Founder Photo Avatar with Verified Ring */}
                <div className="relative shrink-0">
                  {imgIndex < founderImageCandidates.length ? (
                    <img
                      src={founderImageCandidates[imgIndex]}
                      alt="Nan Seyha (ណាន សីហា)"
                      referrerPolicy="no-referrer"
                      onError={() => setImgIndex((prev) => prev + 1)}
                      className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover bg-slate-900 border-2 border-slate-700/80 shadow-md"
                    />
                  ) : (
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-blue-600 flex flex-col items-center justify-center text-white font-black text-2xl shadow-inner">
                      <span>NS</span>
                      <span className="text-[10px] font-medium opacity-80">Nan Seyha</span>
                    </div>
                  )}

                  {/* Verified Founder Badge */}
                  <div 
                    className="absolute bottom-0 right-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center ring-2 ring-white dark:ring-slate-900 shadow-md"
                    title="Verified Founder & Creator"
                  >
                    <CheckCircle2 className="w-5 h-5 fill-blue-600 text-white" />
                  </div>
                </div>

                {/* Founder Info */}
                <div className="space-y-2 text-center sm:text-left flex-1">
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/20 border border-blue-200 dark:border-blue-500/30 text-blue-700 dark:text-blue-300 text-xs font-bold">
                      <UserCheck className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                      <span>{language === 'en' ? 'Founder & Lead Engineer' : 'ស្ថាបនិក និងវិស្វករដឹកនាំ'}</span>
                    </span>

                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-slate-200/80 dark:bg-slate-700/80 border border-slate-300 dark:border-slate-600 text-xs font-bold text-slate-700 dark:text-slate-200">
                      <span>🇰🇭</span>
                      <span>Cambodia</span>
                    </span>
                  </div>

                  <h4 className="text-xl font-extrabold text-slate-900 dark:text-white">
                    Nan Seyha (ណាន សីហា)
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {language === 'en'
                      ? 'Engineered independently with love and dedication to provide free, accessible, and high-impact technology education for the next generation of Cambodian developers.'
                      : 'បង្កើតឡើងដោយក្ដីស្រឡាញ់ និងការប្តេជ្ញាចិត្តខ្ពស់ ដើម្បីផ្តល់នូវការអប់រំបច្ចេកវិទ្យាដោយសេរី និងមានគុណភាពខ្ពស់បំផុតសម្រាប់សិស្ស-និស្សិតកម្ពុជា។'}
                  </p>

                  <div className="pt-1 flex items-center justify-center sm:justify-start gap-3 text-xs font-bold">
                    <a
                      href="https://facebook.com/nan.seyha.2006"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                    >
                      <span>Facebook</span>
                      <ChevronRight className="w-3 h-3" />
                    </a>
                    <span className="text-slate-300 dark:text-slate-700">•</span>
                    <a
                      href="https://t.me/SabayCode"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sky-600 dark:text-sky-400 hover:underline flex items-center gap-1"
                    >
                      <span>Telegram</span>
                      <ChevronRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>

              </div>

              {/* 4 Feature Highlight Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
                {/* Card 1 */}
                <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-2xl p-4 space-y-2 shadow-sm hover:-translate-y-1 hover:shadow-lg hover:border-amber-400/50 transition-all duration-200">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-500 border border-amber-500/20 flex items-center justify-center">
                    <Award className="w-5 h-5" />
                  </div>
                  <h5 className="text-xs font-extrabold text-slate-900 dark:text-white">
                    {language === 'en' ? 'Verified Certificates' : 'វិញ្ញាបនបត្រផ្លូវការ'}
                  </h5>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug">
                    {language === 'en' ? 'Verifiable QR code credentials' : 'មាន QR Code ផ្ទៀងផ្ទាត់'}
                  </p>
                </div>

                {/* Card 2 */}
                <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-2xl p-4 space-y-2 shadow-sm hover:-translate-y-1 hover:shadow-lg hover:border-blue-400/50 transition-all duration-200">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-500 border border-blue-500/20 flex items-center justify-center">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <h5 className="text-xs font-extrabold text-slate-900 dark:text-white">
                    {language === 'en' ? 'Live Playgrounds' : 'ឧបករណ៍សរសេរកូដ'}
                  </h5>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug">
                    {language === 'en' ? 'Real-time code execution' : 'ដំណើរការកូដរហ័សទាន់ចិត្ត'}
                  </p>
                </div>

                {/* Card 3 */}
                <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-2xl p-4 space-y-2 shadow-sm hover:-translate-y-1 hover:shadow-lg hover:border-purple-400/50 transition-all duration-200">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-500 border border-purple-500/20 flex items-center justify-center">
                    <Globe className="w-5 h-5" />
                  </div>
                  <h5 className="text-xs font-extrabold text-slate-900 dark:text-white">
                    {language === 'en' ? 'Bilingual System' : 'ប្រព័ន្ធពីរភាសា'}
                  </h5>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug">
                    {language === 'en' ? 'Instant Khmer & English switch' : 'ខ្មែរ និងអង់គ្លេស'}
                  </p>
                </div>

                {/* Card 4 */}
                <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-2xl p-4 space-y-2 shadow-sm hover:-translate-y-1 hover:shadow-lg hover:border-emerald-400/50 transition-all duration-200">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 flex items-center justify-center">
                    <Users className="w-5 h-5" />
                  </div>
                  <h5 className="text-xs font-extrabold text-slate-900 dark:text-white">
                    {language === 'en' ? '100% Free Access' : 'រៀនដោយឥតគិតថ្លៃ'}
                  </h5>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug">
                    {language === 'en' ? 'Built for Cambodian students' : 'សម្រាប់សិស្សកម្ពុជាគ្រប់រូប'}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4 animate-fade-in">
              {faqItems.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 dark:bg-slate-800/40 border border-slate-200/90 dark:border-slate-800 rounded-2xl p-4 space-y-2.5 transition hover:border-blue-400/50 dark:hover:border-slate-700 shadow-sm"
                >
                  <h4 className="text-sm font-extrabold text-slate-900 dark:text-white flex items-start gap-2.5">
                    <span className="w-6 h-6 rounded-lg bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 font-mono text-xs flex items-center justify-center shrink-0 font-bold">
                      Q{idx + 1}
                    </span>
                    <span className="pt-0.5">{language === 'en' ? item.qEn : item.qKm}</span>
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pl-8 border-l-2 border-blue-500/30 dark:border-blue-400/30">
                    {language === 'en' ? item.aEn : item.aKm}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Modal Footer Bar */}
        <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50/90 dark:bg-slate-900/90 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <span className="text-slate-500 dark:text-slate-400 font-mono text-[11px] text-center sm:text-left">
            SabayCode v2.6 • {language === 'en' ? 'Founded by' : 'បង្កើតដោយ'} {' '}
            <a 
              href="https://facebook.com/nan.seyha.2006" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-bold text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 underline transition"
            >
              Nan Seyha (ណាន សីហា)
            </a>
          </span>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                onClose();
                window.location.hash = '#/contact';
              }}
              className="px-4 py-2 bg-slate-200/80 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold rounded-xl border border-slate-300/60 dark:border-slate-700 transition flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              <span>{language === 'en' ? 'Contact Support' : 'ទាក់ទងជំនួយ'}</span>
            </button>

            <button
              onClick={onClose}
              className="px-5 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold rounded-xl shadow-md shadow-blue-500/20 transition"
            >
              {language === 'en' ? 'Close' : 'បិទ'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


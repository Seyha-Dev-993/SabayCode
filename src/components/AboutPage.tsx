import React, { useState } from 'react';
import { 
  Sparkles, ShieldCheck, Award, Code2, Globe, Users, CheckCircle2, 
  Send, Facebook, Github, Mail, BookOpen, GraduationCap, ArrowRight, Heart,
  Terminal, Laptop, Cpu, Check
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { SabayCodeLogo } from './SabayCodeLogo';
import founderPhoto from '../assets/images/Founder.jpg';

interface AboutPageProps {
  onNavigate?: (view: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const { language } = useApp();
  const [imgIndex, setImgIndex] = useState(0);

  const founderImageCandidates = [
    founderPhoto,
    '/assets/images/Founder.jpg',
    '/images/nan_seyha.jpg',
    '/assets/nan-seyha-profile.jpg'
  ];

  const handleNavigate = (view: string) => {
    if (onNavigate) {
      onNavigate(view);
    } else {
      window.location.hash = `#/${view}`;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans text-slate-900 dark:text-slate-100 transition-colors duration-200">
      
      {/* 1. Hero Section */}
      <section className="relative bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white pt-16 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-slate-200 dark:border-slate-800 transition-colors duration-200">

        {/* Background Radial Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 w-96 h-96 bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-3xl animate-pulse" />

        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-6">
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 dark:bg-blue-500/20 border border-blue-500/30 text-blue-700 dark:text-blue-300 text-xs font-black uppercase tracking-wider backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span>{language === 'en' ? 'Bilingual Tech Education Platform' : 'វេទិកាសិក្សាបច្ចេកវិទ្យាពីរភាសា'}</span>
            <span>🇰🇭</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-slate-900 dark:text-white">
            {language === 'en' ? (
              <span>About <span className="text-blue-600 dark:text-blue-400">SabayCode</span></span>
            ) : (
              <span>អំពី <span className="text-blue-600 dark:text-blue-400">SabayCode</span></span>
            )}
          </h1>

          {/* Subtitle / Tagline */}
          <p className="text-base sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
            {language === 'en'
              ? 'Empowering Cambodian students and engineers with high-quality, hands-on tech education, interactive playgrounds, and verified certifications.'
              : 'ផ្តល់នូវការអប់រំបច្ចេកវិទ្យាកម្រិតខ្ពស់ ពីរភាសា (ខ្មែរ-អង់គ្លេស) សម្រាប់សិស្ស-និស្សិតកម្ពុជា តាមរយៈការអនុវត្តផ្ទាល់ និងថ្នាក់រៀន Master Bootcamps។'}
          </p>

          {/* Quick Stats Banner */}
          <div className="pt-4 flex flex-wrap justify-center gap-4 text-xs font-bold text-slate-700 dark:text-slate-300">
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm dark:shadow-none">
              <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>{language === 'en' ? '100% Free Community Platform' : 'វេទិកាសហគមន៍ឥតគិតថ្លៃ'}</span>
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm dark:shadow-none">
              <Check className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>{language === 'en' ? 'Khmer & English Bilingual' : 'ពីរភាសា (ខ្មែរ-អង់គ្លេស)'}</span>
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm dark:shadow-none">
              <Check className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              <span>{language === 'en' ? 'Verified QR Certificates' : 'វិញ្ញាបនបត្រមាន QR Code'}</span>
            </span>
          </div>
        </div>
      </section>

      {/* Main Page Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">

        {/* 2. Our Core Mission Section */}
        <section className="relative overflow-hidden bg-white/90 dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-xl backdrop-blur-xl transition-colors duration-200">
          <div className="absolute top-0 right-0 p-8 opacity-5 dark:opacity-10 pointer-events-none text-blue-600 dark:text-blue-400">
            <Code2 className="w-64 h-64" />
          </div>

          <div className="relative z-10 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300 border border-blue-500/20 text-xs font-black uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{language === 'en' ? 'Our Mission & Vision' : 'បេសកកម្ម និងចក្ខុវិស័យ'}</span>
            </div>

            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed max-w-4xl font-normal">
              {language === 'en'
                ? 'SabayCode was created to solve a fundamental challenge in Cambodia: the lack of accessible, high-quality, practical technology learning materials in both Khmer and English. Traditional education often focuses heavily on theory without interactive coding practice. SabayCode flips this model by providing live interactive playgrounds, real-world project builds, step-by-step Master Bootcamps, and verifiable digital certificates — all completely free for Cambodian learners.'
                : 'SabayCode ត្រូវបានបង្កើតឡើងដើម្បីដោះស្រាយបញ្ហាប្រឈមចម្បងនៅកម្ពុជា គឺការខ្វះខាតសម្ភារៈសិក្សាបច្ចេកវិទ្យាដែលមានគុណភាព អាចអនុវត្តផ្ទាល់បាន និងមានពីរភាសា (ខ្មែរ-អង់គ្លេស)។ SabayCode ផ្តល់ជូននូវឧបករណ៍សរសេរកូដអន្តរកម្ម ការអនុវត្តគម្រោងជាក់ស្តែង ថ្នាក់រៀន Master Bootcamps តាមលំដាប់លំដោយ និងវិញ្ញាបនបត្រឌីជីថលដែលអាចផ្ទៀងផ្ទាត់បាន ដោយឥតគិតថ្លៃសម្រាប់សិស្ស-និស្សិតកម្ពុជាគ្រប់រូប។'}
            </p>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {[
                {
                  titleEn: 'Interactive Code Playgrounds',
                  titleKm: 'ឧបករណ៍សរសេរកូដអន្តរកម្ម',
                  descEn: 'Write and run code directly in the browser with instant execution feedback.',
                  descKm: 'សរសេរ និងដំណើរកូដភ្លាមៗនៅក្នុង Browser ដោយមិនបាច់ Install ឧបករណ៍។',
                  icon: Terminal,
                  color: 'text-blue-600 dark:text-blue-400 bg-blue-500/10 border-blue-500/20'
                },
                {
                  titleEn: 'Dual Khmer & English Toggle',
                  titleKm: 'ប្រព័ន្ធពីរភាសា (ខ្មែរ-អង់គ្លេស)',
                  descEn: 'Seamlessly switch languages at any moment to learn technical terms in context.',
                  descKm: 'ប្តូរភាសាបានភ្លាមៗគ្រប់ពេលវេលា ដើម្បីងាយស្រួលយល់ពាក្យបច្ចេកទេស។',
                  icon: Globe,
                  color: 'text-purple-600 dark:text-purple-400 bg-purple-500/10 border-purple-500/20'
                },
                {
                  titleEn: 'Structured Master Bootcamps',
                  titleKm: 'ថ្នាក់រៀន Master Bootcamps',
                  descEn: 'Curated learning paths from beginner HTML/CSS to advanced Fullstack & Generative AI.',
                  descKm: 'ផ្លូវសិក្សារៀបចំជាប្រព័ន្ធ ចាប់ពីកម្រិតដំបូង រហូតដល់ Fullstack & AI។',
                  icon: GraduationCap,
                  color: 'text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border-emerald-500/20'
                },
                {
                  titleEn: 'Verifiable Digital Credentials',
                  titleKm: 'វិញ្ញាបនបត្រឌីជីថលអាចផ្ទៀងផ្ទាត់បាន',
                  descEn: 'Earn official certificates with QR code verification upon course completion.',
                  descKm: 'ទទួលបានវិញ្ញាបនបត្រផ្លូវការមាន QR Code ផ្ទៀងផ្ទាត់សម្រាប់ CV & LinkedIn។',
                  icon: Award,
                  color: 'text-amber-600 dark:text-amber-400 bg-amber-500/10 border-amber-500/20'
                }
              ].map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div key={idx} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800 space-y-2">
                    <div className="flex items-center gap-2.5">
                      <div className={`p-2 rounded-xl border ${item.color}`}>
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <h3 className="text-sm font-extrabold text-slate-900 dark:text-white">
                        {language === 'en' ? item.titleEn : item.titleKm}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 font-normal leading-relaxed">
                      {language === 'en' ? item.descEn : item.descKm}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 3. Founder Spotlight Section */}
        <section className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200/90 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-xl dark:shadow-2xl relative overflow-hidden transition-colors duration-200">

          <div className="relative z-10 flex flex-col md:flex-row items-center lg:items-start gap-8 lg:gap-12">
            
            {/* Founder Profile Photo (Exact 200px x 250px with object-fit: cover) */}
            <div className="relative shrink-0 flex flex-col items-center">
              {imgIndex < founderImageCandidates.length ? (
                <img
                  src={founderImageCandidates[imgIndex]}
                  alt="Nan Seyha (ណាន សីហា)"
                  referrerPolicy="no-referrer"
                  onError={() => setImgIndex((prev) => prev + 1)}
                  className="w-[200px] h-[250px] rounded-2xl object-cover bg-slate-100 dark:bg-slate-950 shadow-xl dark:shadow-2xl border border-slate-200 dark:border-slate-700/80"
                />
              ) : (
                <div className="w-[200px] h-[250px] rounded-2xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center text-center p-4">
                  <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center text-white text-2xl font-black mb-2 shadow-lg">
                    NS
                  </div>
                  <h4 className="text-sm font-extrabold text-slate-900 dark:text-white">Nan Seyha</h4>
                  <p className="text-[11px] text-blue-600 dark:text-blue-300">ណាន សីហា</p>
                </div>
              )}

              {/* Verified Badge Icon Overlapping Corner */}
              <div 
                className="absolute -bottom-3 right-2 bg-blue-600 text-white px-3 py-1 rounded-full flex items-center gap-1.5 ring-4 ring-white dark:ring-slate-900 shadow-xl text-xs font-black"
                title="Verified Founder & Creator"
              >
                <CheckCircle2 className="w-4 h-4 fill-blue-600 text-white" />
                <span>Verified</span>
              </div>
            </div>

            {/* Founder Bio Text */}
            <div className="space-y-4 text-center md:text-left flex-1">
              
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-500/10 dark:bg-blue-500/20 border border-blue-500/30 dark:border-blue-500/40 text-blue-700 dark:text-blue-300 text-xs font-bold">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                  <span>{language === 'en' ? 'Founder & Lead Engineer' : 'ស្ថាបនិក និងវិស្វករដឹកនាំ'}</span>
                </span>

                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold">
                  <span>🇰🇭 Cambodia</span>
                </span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-white">
                Nan Seyha (ណាន សីហា)
              </h2>

              <div className="space-y-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                <p>
                  {language === 'en'
                    ? 'Hello! I am Nan Seyha, creator and platform architect of SabayCode. Growing up as a passion-driven developer in Cambodia, I faced many hurdles finding clear, structured, and easy-to-understand learning resources in Khmer.'
                    : 'សួស្តី! ខ្ញុំបាទ ណាន សីហា ជាស្ថាបនិក និងជាអ្នកអភិវឌ្ឍន៍ប្រព័ន្ធ SabayCode។ ក្នុងនាមជាអ្នកសរសេរកូដមួយរូបនៅកម្ពុជា ខ្ញុំបានឆ្លងកាត់ការលំបាកជាច្រើនក្នុងការស្វែងរកប្រភពសិក្សាដែលមានរចនាសម្ព័ន្ធច្បាស់លាស់ និងងាយយល់ជាភាសាខ្មែរ។'}
                </p>

                <p>
                  {language === 'en'
                    ? 'I engineered SabayCode to change that narrative. My vision is to build a modern, high-grade educational platform that empowers any student in Phnom Penh or rural provinces to master Web Development, Mobile Development, Backend Systems, and Generative AI completely free of charge.'
                    : 'ខ្ញុំបានបង្កើត SabayCode ឡើងដើម្បីផ្លាស់ប្តូរការអប់រំបច្ចេកវិទ្យានៅកម្ពុជា។ គោលបំណងរបស់ខ្ញុំ គឺផ្តល់ឱកាសស្មើៗគ្នាដល់សិស្ស-និស្សិតទាំងអស់នៅតាមរាជធានី និងបណ្តាខេត្ត ឲ្យអាចរៀនសរសេរកូដ Frontend, Backend, Mobile App និង Generative AI ដោយសេរី និងឥតគិតថ្លៃ។'}
                </p>

                <p>
                  {language === 'en'
                    ? 'Every line of code on SabayCode is built with care for Cambodian youth. Thank you for being part of this movement!'
                    : 'រាល់កូដ និងមេរៀនទាំងអស់នៅក្នុង SabayCode ត្រូវបានរៀបចំឡើងដោយក្តីស្រឡាញ់ និងការយកចិត្តទុកដាក់ខ្ពស់បំផុតសម្រាប់យុវជនកម្ពុជា។ សូមអរគុណសម្រាប់ការគាំទ្រ SabayCode!'}
                </p>
              </div>

              {/* Social Contacts Row */}
              <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-3">
                <a
                  href="mailto:nanseyha4@gmail.com"
                  className="px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-800/90 hover:bg-blue-50 dark:hover:bg-blue-600/30 border border-slate-200 dark:border-slate-700/80 hover:border-blue-500/60 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white transition flex items-center gap-2 text-xs font-bold shadow-xs dark:shadow-none"
                >
                  <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span>nanseyha4@gmail.com</span>
                </a>

                <a
                  href="https://t.me/SabayCode"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-800/90 hover:bg-sky-50 dark:hover:bg-sky-600/30 border border-slate-200 dark:border-slate-700/80 hover:border-sky-500/60 text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-white transition flex items-center gap-2 text-xs font-bold shadow-xs dark:shadow-none"
                >
                  <Send className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                  <span>Telegram</span>
                </a>

                <a
                  href="https://www.facebook.com/nan.seyha.2006"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-800/90 hover:bg-blue-50 dark:hover:bg-blue-600/30 border border-slate-200 dark:border-slate-700/80 hover:border-blue-500/60 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white transition flex items-center gap-2 text-xs font-bold shadow-xs dark:shadow-none"
                >
                  <Facebook className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span>Facebook</span>
                </a>

                <a
                  href="https://github.com/Seyha-993-701"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-800/90 hover:bg-purple-50 dark:hover:bg-purple-600/30 border border-slate-200 dark:border-slate-700/80 hover:border-purple-500/60 text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-white transition flex items-center gap-2 text-xs font-bold shadow-xs dark:shadow-none"
                >
                  <Github className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  <span>GitHub</span>
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* 4. What Makes SabayCode Different Cards */}
        <section className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
              {language === 'en' ? 'What Makes SabayCode Stand Out?' : 'ចំណុចពិសេសរបស់ SabayCode'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              {language === 'en'
                ? 'Engineered specifically for optimal learning retention and career readiness.'
                : 'រៀបចំឡើងយ៉ាងពិសេសសម្រាប់ការចងចាំបានល្អ និងការត្រៀមខ្លួនសម្រាប់ទីផ្សារការងារ។'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Card 1 */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-3xl p-6 space-y-3 shadow-sm hover:-translate-y-1.5 hover:shadow-xl hover:border-amber-400/60 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-500 border border-amber-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-base font-extrabold text-slate-900 dark:text-white">
                {language === 'en' ? 'QR Verifiable Certificates' : 'វិញ្ញាបនបត្រមាន QR Code'}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                {language === 'en'
                  ? 'Complete courses to earn official certificates with instant QR verification for LinkedIn & CVs.'
                  : 'បញ្ចប់វគ្គសិក្សាដើម្បីទទួលបានវិញ្ញាបនបត្រផ្លូវការ អាចស្កេន QR Code ផ្ទៀងផ្ទាត់បានភ្លាមៗ។'}
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-3xl p-6 space-y-3 shadow-sm hover:-translate-y-1.5 hover:shadow-xl hover:border-blue-400/60 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-500 border border-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="text-base font-extrabold text-slate-900 dark:text-white">
                {language === 'en' ? 'Live Interactive Playgrounds' : 'ឧបករណ៍សរសេរកូដផ្សាយផ្ទាល់'}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                {language === 'en'
                  ? 'Practice HTML, CSS, JS, and React directly in your browser with real-time preview.'
                  : 'អនុវត្តសរសេរកូដ HTML, CSS, JS និង React ផ្ទាល់នៅលើ Browser ដោយឃើញលទ្ធផលភ្លាមៗ។'}
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-3xl p-6 space-y-3 shadow-sm hover:-translate-y-1.5 hover:shadow-xl hover:border-purple-400/60 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 text-purple-500 border border-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-base font-extrabold text-slate-900 dark:text-white">
                {language === 'en' ? 'Instant Bilingual Switch' : 'ប្តូរភាសាខ្មែរ-អង់គ្លេសភ្លាមៗ'}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                {language === 'en'
                  ? 'One-click toggle between Khmer and English to master English technical jargon easily.'
                  : 'ចុចតែមួយឃ្លីកដើម្បីប្តូររវាងភាសាខ្មែរ និងអង់គ្លេស ងាយស្រួលយល់ពាក្យបច្ចេកទេស។'}
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-3xl p-6 space-y-3 shadow-sm hover:-translate-y-1.5 hover:shadow-xl hover:border-emerald-400/60 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-base font-extrabold text-slate-900 dark:text-white">
                {language === 'en' ? '100% Free & Community First' : 'ឥតគិតថ្លៃ ១០០% សម្រាប់សិស្ស'}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                {language === 'en'
                  ? 'Free access to high-impact education without hidden paywalls or subscription barriers.'
                  : 'រៀនដោយឥតគិតថ្លៃ គ្មានការទាមទារបង់ប្រាក់ ឬការជាវប្រចាំខែឡើយ។'}
              </p>
            </div>
          </div>
        </section>

        {/* 5. Platform Stats Section */}
        <section className="bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 sm:p-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-black text-blue-600 dark:text-blue-400">
                5,000+
              </div>
              <div className="text-xs font-extrabold text-slate-900 dark:text-white uppercase tracking-wider">
                {language === 'en' ? 'Active Students' : 'សិស្សកំពុងសិក្សា'}
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400">
                {language === 'en' ? 'Across Cambodia' : 'នៅទូទាំងប្រទេសកម្ពុជា'}
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-black text-indigo-600 dark:text-indigo-400">
                12+
              </div>
              <div className="text-xs font-extrabold text-slate-900 dark:text-white uppercase tracking-wider">
                {language === 'en' ? 'Learning Tracks' : 'ផ្លូវសិក្សាសំខាន់ៗ'}
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400">
                {language === 'en' ? 'Frontend, Backend, Mobile & AI' : 'Frontend, Backend, Mobile & AI'}
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-black text-purple-600 dark:text-purple-400">
                150+
              </div>
              <div className="text-xs font-extrabold text-slate-900 dark:text-white uppercase tracking-wider">
                {language === 'en' ? 'Interactive Lessons' : 'មេរៀនអនុវត្តជាក់ស្តែង'}
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400">
                {language === 'en' ? 'Hands-on Code Practice' : 'មានការសរសេរកូដផ្ទាល់'}
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-black text-emerald-600 dark:text-emerald-400">
                100%
              </div>
              <div className="text-xs font-extrabold text-slate-900 dark:text-white uppercase tracking-wider">
                {language === 'en' ? 'Free Community' : 'ឥតគិតថ្លៃ ១០០%'}
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400">
                {language === 'en' ? 'No Subscription Fees' : 'គ្មានការបង់ប្រាក់'}
              </div>
            </div>

          </div>
        </section>

        {/* 6. Call to Action (CTA) Section */}
        <section className="bg-blue-600 dark:bg-blue-700 rounded-3xl p-8 sm:p-12 text-white text-center space-y-6 shadow-2xl relative overflow-hidden">
          
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <h2 className="text-2xl sm:text-4xl font-black leading-tight">
              {language === 'en'
                ? 'Ready to Start Your Coding Journey?'
                : 'ត្រៀមខ្លួនរៀនសរសេរកូដជាមួយ SabayCode ហើយឬនៅ?'}
            </h2>

            <p className="text-sm sm:text-base text-blue-100 font-normal">
              {language === 'en'
                ? 'Explore our flagship Master Bootcamps or jump straight into interactive learning paths today.'
                : 'ចូលរួមរៀនសរសេរកូដជាមួយថ្នាក់រៀន Master Bootcamps ឬផ្លូវសិក្សាដំបូងដោយឥតគិតថ្លៃឥឡូវនេះ។'}
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => handleNavigate('courses')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-white text-blue-700 hover:bg-slate-100 font-black text-sm shadow-xl hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <BookOpen className="w-4 h-4" />
                <span>{language === 'en' ? 'Browse Learning Paths' : 'មើលផ្លូវសិក្សាដំបូង'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => handleNavigate('classes')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-blue-900/40 hover:bg-blue-900/60 border border-white/30 text-white font-extrabold text-sm backdrop-blur-md transition-all duration-200 flex items-center justify-center gap-2"
              >
                <GraduationCap className="w-4 h-4 text-purple-300" />
                <span>{language === 'en' ? 'View Master Bootcamps' : 'មើលថ្នាក់រៀន Master Bootcamps'}</span>
              </button>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

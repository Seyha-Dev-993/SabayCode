import React, { useRef, useState } from 'react';
import { 
  Check, Sparkles, ArrowLeft, Heart, 
  ExternalLink, Download, Copy, QrCode, X, ZoomIn
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { SabayCodeLogo } from './SabayCodeLogo';

import localKhqrImage from '../assets/images/KHQR.jpg';

// Use the bundled local ACLEDA KHQR image asset
const qrCodeImage = localKhqrImage;

export function SupportPage({ onBackToHome }: { onBackToHome: () => void }) {
  const { language } = useApp();
  const qrCardRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);

  // Scroll to QR Card smoothly
  const handleScrollToQR = () => {
    if (qrCardRef.current) {
      qrCardRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleCopyLink = () => {
    const absoluteUrl = qrCodeImage.startsWith('http') 
      ? qrCodeImage 
      : `${window.location.origin}${qrCodeImage.startsWith('/') ? '' : '/'}${qrCodeImage}`;
    navigator.clipboard.writeText(absoluteUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleOpenImage = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setShowImageModal(true);
  };

  const handleDownloadImage = async () => {
    try {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.src = qrCodeImage;

      await new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = reject;
      });

      const canvas = document.createElement('canvas');
      canvas.width = img.naturalWidth || img.width || 600;
      canvas.height = img.naturalHeight || img.height || 800;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0);
      }

      canvas.toBlob((blob) => {
        if (!blob) {
          const dataUrl = canvas.toDataURL('image/jpeg', 0.95);
          const link = document.createElement('a');
          link.href = dataUrl;
          link.download = 'NAN_SEYHA_ACLEDA_KHQR.jpg';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          return;
        }
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'NAN_SEYHA_ACLEDA_KHQR.jpg';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setTimeout(() => URL.revokeObjectURL(url), 5000);
      }, 'image/jpeg', 0.95);
    } catch {
      try {
        const response = await fetch(qrCodeImage);
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'NAN_SEYHA_ACLEDA_KHQR.jpg';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setTimeout(() => URL.revokeObjectURL(url), 5000);
      } catch (e) {
        console.error('Download KHQR failed', e);
      }
    }
  };

  // Translations
  const t = {
    en: {
      communityProject: "COMMUNITY PROJECT",
      supportTitle: "Support SabayCode Learning",
      platformDesc: "Sabaicode is operated entirely as a free educational initiative for Cambodian students and youth. Your contributions directly cover server hosting costs, domain renewals, and the creation of new bilingual coding tutorials.",
      benefitsTitle: "Benefits & What Your Donation Funds",
      
      benefit1Title: "Hosting Server & Compiler Costs",
      benefit1Desc: "keeps the in-browser code compiler and interactive sandboxes running 24/7",
      benefit2Title: "Domain Name Renewal",
      benefit2Desc: "ensures uninterrupted access to the learning portal for students every month",
      benefit3Title: "Creating New Lessons Faster",
      benefit3Desc: "accelerates production of high-quality bilingual tutorials across all courses",
      benefit4Title: "Keeping the Platform 100% Free",
      benefit4Desc: "removes financial barriers and ads, keeping a clean, distraction-free learning environment",

      backToHome: "BACK TO HOME",
      donateNow: "DONATE NOW",
      scanDonate: "Scan to Donate: NAN SEYHA",
      acledaBank: "ACLEDA BANK",
      scanPayDone: "Scan. Pay Done.",
      acctHolder: "NAN SEYHA",
      memberKhqr: "Member of KHQR",
      bankHotline: "Bank hotline: 023 994 444 | 015 999 233",
      scanInstruct: "Scan with ABA, ACLEDA, Sathapana, or any Bakong mobile app.",
    },
    km: {
      communityProject: "គម្រោងសហគមន៍",
      supportTitle: "គាំទ្រការសិក្សា SabayCode",
      platformDesc: "សប្បាយកូដ (Khmer Coding Learning) ត្រូវបានដំណើរការទាំងស្រុងជាគំនិតផ្តួចផ្តើមអប់រំឥតគិតថ្លៃសម្រាប់សិស្សានុសិស្ស និងយុវជនកម្ពុជា។ ការចូលរួមចំណែករបស់អ្នកនឹងជួយសម្រួលដល់ថ្លៃសេវាហោះស្ទីងម៉ាស៊ីនមេ ការបន្តដែនគេហទំព័រ និងការបង្កើតមេរៀនថ្មីៗទ្វេភាសា។",
      benefitsTitle: "អត្ថប្រយោជន៍ និងការប្រើប្រាស់ថវិការបស់អ្នក",

      benefit1Title: "ថ្លៃម៉ាស៊ីនមេ និងកម្មវិធីចងក្រងកូដ",
      benefit1Desc: "ធានាដំណើរការប្រព័ន្ធសាកល្បងកូដ និងម៉ាស៊ីនមេដំណើរការលឿន ២៤ម៉ោង/៧ថ្ងៃ",
      benefit2Title: "ការបន្តសុពលភាពដែនគេហទំព័រ",
      benefit2Desc: "ធានាការចូលប្រើប្រាស់គេហទំព័ររៀនកូដសម្រាប់សិស្សានុសិស្សរៀងរាល់ខែ",
      benefit3Title: "បង្កើតមេរៀនថ្មីៗបានកាន់តែរហ័ស",
      benefit3Desc: "បង្កើនល្បឿននៃការផលិតមេរៀនទ្វេភាសាដែលមានគុណភាពខ្ពស់គ្រប់វគ្គសិក្សា",
      benefit4Title: "រក្សាប្រព័ន្ធសិក្សាឥតគិតថ្លៃ ១០០%",
      benefit4Desc: "លុបបំបាត់រាល់របាំងហិរញ្ញវត្ថុ និងការផ្សាយពាណិជ្ជកម្ម ដើម្បីធានាបរិយាកាសសិក្សាស្អាតស្អំ",

      backToHome: "ត្រឡប់ទៅទំព័រដើម",
      donateNow: "បរិច្ចាគឥឡូវនេះ",
      scanDonate: "ស្កែនដើម្បីបរិច្ចាគ៖ NAN SEYHA",
      acledaBank: "អេស៊ីលីដា ACLEDA BANK",
      scanPayDone: "ស្កែន។ ទូទាត់។ រួចរាល់។",
      acctHolder: "NAN SEYHA",
      memberKhqr: "សមាជិក KHQR",
      bankHotline: "ទូរស័ព្ទបន្ទាន់ធនាគារ៖ 023 994 444 | 015 999 233",
      scanInstruct: "ស្កែនជាមួយកម្មវិធី ABA, ACLEDA, Sathapana ឬកម្មវិធីទូរស័ព្ទបាគងណាមួយ។",
    }
  }[language];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 animate-fade-in text-left">
      
      {/* Back to top row */}
      <button
        onClick={onBackToHome}
        className="inline-flex items-center space-x-2 text-xs font-bold text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 mb-6 transition cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>{language === 'en' ? "Back to Dashboard" : "ត្រឡប់ទៅកាន់ផ្ទាំងគ្រប់គ្រង"}</span>
      </button>

      {/* Two column grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Benefits & description */}
        <div className="lg:col-span-7 bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 rounded-3xl p-6 md:p-8 shadow-sm">
          
          <div className="flex items-center space-x-3 mb-4">
            <SabayCodeLogo size={40} showText={false} />
            <div>
              <span className="inline-block bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-900/30 px-2.5 py-0.5 rounded-full text-[10px] font-black font-mono tracking-wider">
                {t.communityProject}
              </span>
            </div>
          </div>

          <h1 className="text-2xl md:text-3.5xl font-black text-slate-900 dark:text-white tracking-tight mb-4">
            {t.supportTitle}
          </h1>

          <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6 font-sans">
            {t.platformDesc}
          </p>

          <hr className="border-slate-100 dark:border-slate-800 mb-6" />

          {/* Benefits section heading */}
          <div className="flex items-center space-x-2 text-slate-900 dark:text-white mb-5 font-bold text-sm">
            <Sparkles className="w-4.5 h-4.5 text-amber-500" />
            <span>{t.benefitsTitle}</span>
          </div>

          {/* Checklist items */}
          <div className="space-y-3.5 mb-8">
            {/* Hosting server & compiler */}
            <div className="flex items-start space-x-3.5 p-4 bg-slate-50 dark:bg-slate-950/40 border border-slate-100 dark:border-slate-900 rounded-2xl">
              <div className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-blue-50 dark:bg-blue-950/50 text-blue-500 flex items-center justify-center">
                <Check className="w-3.5 h-3.5 font-bold" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200">{t.benefit1Title}</h4>
                <p className="text-[11px] text-slate-400 dark:text-slate-500 mt-1 leading-normal">{t.benefit1Desc}</p>
              </div>
            </div>

            {/* Domain Name */}
            <div className="flex items-start space-x-3.5 p-4 bg-slate-50 dark:bg-slate-950/40 border border-slate-100 dark:border-slate-900 rounded-2xl">
              <div className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-blue-50 dark:bg-blue-950/50 text-blue-500 flex items-center justify-center">
                <Check className="w-3.5 h-3.5 font-bold" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200">{t.benefit2Title}</h4>
                <p className="text-[11px] text-slate-400 dark:text-slate-500 mt-1 leading-normal">{t.benefit2Desc}</p>
              </div>
            </div>

            {/* Creating lessons */}
            <div className="flex items-start space-x-3.5 p-4 bg-slate-50 dark:bg-slate-950/40 border border-slate-100 dark:border-slate-900 rounded-2xl">
              <div className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-blue-50 dark:bg-blue-950/50 text-blue-500 flex items-center justify-center">
                <Check className="w-3.5 h-3.5 font-bold" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200">{t.benefit3Title}</h4>
                <p className="text-[11px] text-slate-400 dark:text-slate-500 mt-1 leading-normal">{t.benefit3Desc}</p>
              </div>
            </div>

            {/* Platform free */}
            <div className="flex items-start space-x-3.5 p-4 bg-slate-50 dark:bg-slate-950/40 border border-slate-100 dark:border-slate-900 rounded-2xl">
              <div className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-blue-50 dark:bg-blue-950/50 text-blue-500 flex items-center justify-center">
                <Check className="w-3.5 h-3.5 font-bold" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200">{t.benefit4Title}</h4>
                <p className="text-[11px] text-slate-400 dark:text-slate-500 mt-1 leading-normal">{t.benefit4Desc}</p>
              </div>
            </div>
          </div>

          {/* Buttons row */}
          <div className="flex flex-col sm:flex-row items-center gap-4 border-t border-slate-100 dark:border-slate-800 pt-6">
            <button
              onClick={onBackToHome}
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-950 text-xs font-black uppercase tracking-wider transition cursor-pointer"
            >
              {t.backToHome}
            </button>
            <button
              onClick={handleScrollToQR}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-black uppercase tracking-wider shadow-sm transition hover:shadow duration-150 cursor-pointer"
            >
              <Heart className="w-4 h-4 mr-2 text-rose-300 fill-rose-300" />
              <span>{t.donateNow}</span>
            </button>
          </div>

        </div>

        {/* Right Column: Donation KHQR card slip */}
        <div ref={qrCardRef} className="lg:col-span-5 flex flex-col items-center">
          
          {/* Small pill label above card */}
          <div className="mb-4 bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-900/30 px-4 py-2 rounded-xl text-xs font-bold flex items-center space-x-2">
            <Sparkles className="w-3.5 h-3.5 text-blue-500" />
            <span>{t.scanDonate}</span>
          </div>

          {/* The Bank Slip Card container */}
          <div className="w-full max-w-sm bg-white dark:bg-slate-900 border border-blue-100 dark:border-blue-950/40 rounded-3xl p-4 md:p-5 shadow-lg flex flex-col items-center relative overflow-hidden transition-all">
            {/* Decorative background grids */}
            <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_0.5px,transparent_0.5px)] [background-size:16px_16px] opacity-10 dark:opacity-5"></div>
            
            {/* Real ACLEDA bank card slip image */}
            <div 
              onClick={handleOpenImage}
              className="relative z-10 w-full overflow-hidden rounded-2xl bg-white border border-slate-100 shadow-sm hover:opacity-95 transition block cursor-pointer group"
              title="Click to view full KHQR image"
            >
              <img 
                src={qrCodeImage} 
                alt="NAN SEYHA ACLEDA KHQR Slip" 
                referrerPolicy="no-referrer"
                className="w-full h-auto object-contain block select-none group-hover:scale-[1.01] transition-transform duration-200"
              />
              <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="bg-white/90 dark:bg-slate-900/90 text-slate-800 dark:text-white text-[11px] font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center space-x-1">
                  <ZoomIn className="w-3.5 h-3.5" />
                  <span>{language === 'en' ? 'Click to Enlarge' : 'ចុចដើម្បីពង្រីក'}</span>
                </span>
              </div>
            </div>

            {/* Quick Actions Row */}
            <div className="relative z-10 mt-3.5 w-full grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={handleOpenImage}
                className="py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-[11px] font-bold flex items-center justify-center space-x-1.5 transition cursor-pointer shadow-xs"
              >
                <ZoomIn className="w-3.5 h-3.5 shrink-0" />
                <span>{language === 'en' ? 'Open Image' : 'មើលរូបភាព'}</span>
              </button>

              <button
                type="button"
                onClick={handleDownloadImage}
                className="py-2.5 px-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-[11px] font-bold flex items-center justify-center space-x-1.5 transition cursor-pointer"
              >
                <Download className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                <span>{language === 'en' ? 'Download' : 'ទាញយក'}</span>
              </button>
            </div>

            {/* Display account holder badge */}
            <div className="relative z-10 mt-2.5 w-full py-1.5 px-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60 text-[10px] font-mono text-slate-500 dark:text-slate-400 text-center truncate">
              ACLEDA BANK KHQR • NAN SEYHA
            </div>
          </div>

          {/* Interoperability message below card */}
          <p className="text-[10px] md:text-xs text-slate-400 dark:text-slate-500 text-center mt-4 max-w-sm leading-relaxed leading-normal px-2">
            {t.scanInstruct}
          </p>

        </div>

      </div>

      {/* Lightbox Modal for Crisp Image Viewing */}
      {showImageModal && (
        <div 
          className="fixed inset-0 z-50 flex items-start justify-center p-2 sm:p-4 pt-10 sm:pt-16 bg-slate-950/80 backdrop-blur-md animate-fade-in overflow-y-auto"
          onClick={() => setShowImageModal(false)}
        >
          <div 
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl sm:rounded-3xl max-w-lg w-full p-4 sm:p-5 md:p-6 shadow-2xl relative flex flex-col items-center animate-scale-up my-auto sm:my-0 max-h-[calc(100vh-3.5rem)] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button 
              onClick={() => setShowImageModal(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400 transition cursor-pointer z-10"
              title="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 font-bold text-xs sm:text-sm mb-4 pr-8">
              <Sparkles className="w-4 h-4 shrink-0" />
              <span>NAN SEYHA • ACLEDA BANK KHQR</span>
            </div>

            <div className="w-full bg-slate-50 dark:bg-slate-950 p-2 rounded-2xl border border-slate-100 dark:border-slate-800 mb-5 flex justify-center overflow-hidden">
              <img 
                src={qrCodeImage} 
                alt="NAN SEYHA ACLEDA KHQR Slip" 
                className="max-h-[60vh] w-auto object-contain rounded-xl shadow-md"
              />
            </div>

            <div className="grid grid-cols-2 gap-2.5 w-full">
              <button
                onClick={handleDownloadImage}
                className="py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center justify-center space-x-2 transition shadow-sm cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>{language === 'en' ? 'Download KHQR' : 'ទាញយក KHQR'}</span>
              </button>

              <button
                onClick={handleCopyLink}
                className="py-3 px-4 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold text-xs flex items-center justify-center space-x-2 transition cursor-pointer"
              >
                {copied ? <Check className="w-4 h-4 text-blue-500" /> : <Copy className="w-4 h-4 text-slate-500" />}
                <span>{copied ? (language === 'en' ? 'Copied!' : 'បានចម្លង!') : (language === 'en' ? 'Copy Link' : 'ចម្លងតំណ')}</span>
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

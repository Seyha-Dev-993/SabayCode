import React, { useState, useRef, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { useAuth } from '../context/AuthContext';
import { Award, Printer, X, Check, Sparkles, Download, FileImage, ShieldCheck, AlertCircle, ZoomIn, ZoomOut, Maximize2 } from 'lucide-react';
import { CertificateContent } from './certificate/CertificateContent';
import { certificateStyles } from './certificate/certificateStyles';
import { ExportManager } from '../utils/certificate/ExportManager';
import { LayoutValidator } from '../utils/certificate/LayoutValidator';

interface CertificateModalProps {
  courseTitle: string;
  isOpen: boolean;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ courseTitle, isOpen, onClose }) => {
  const { language, progress } = useApp();
  const { currentUser, student } = useAuth();

  const [studentName, setStudentName] = useState(
    student?.full_name || currentUser?.name || progress.profileName || 'Student'
  );
  const [isSaved, setIsSaved] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [exportError, setExportError] = useState<string | null>(null);
  const [isLoadingModal, setIsLoadingModal] = useState(true);
  const [containerWidth, setContainerWidth] = useState<number>(850);
  const [zoomMode, setZoomMode] = useState<'fit' | 'full' | 'custom'>('fit');
  const [customScale, setCustomScale] = useState<number>(1.0);
  const [validationStatus, setValidationStatus] = useState<string>('Validating assets...');

  const exportRef = useRef<HTMLDivElement>(null);
  const previewContainerRef = useRef<HTMLDivElement>(null);

  // Unique Certificate Verification ID
  const certIdRef = useRef<string>(
    `SABAY-CERT-2026-${Math.floor(100000 + Math.random() * 900000)}`
  );

  // Initialize modal environment & pre-warm fonts
  useEffect(() => {
    if (isOpen) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setIsLoadingModal(true);
      setExportError(null);

      ExportManager.prepareEnvironment()
        .then(() => {
          setValidationStatus('✓ Fonts & Vector Assets Verified');
        })
        .catch(() => {
          setValidationStatus('Using system typography fallback');
        })
        .finally(() => {
          setTimeout(() => setIsLoadingModal(false), 300);
        });
    }
  }, [isOpen]);

  // Responsive scaling factor for modal preview window
  useEffect(() => {
    if (isOpen && !isLoadingModal) {
      const updateWidth = () => {
        if (previewContainerRef.current) {
          setContainerWidth(previewContainerRef.current.clientWidth);
        }
      };
      updateWidth();
      window.addEventListener('resize', updateWidth);
      return () => window.removeEventListener('resize', updateWidth);
    }
  }, [isOpen, isLoadingModal]);

  if (!isOpen) return null;

  const getFormattedDate = () => {
    const date = new Date();
    if (language === 'en') {
      return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    } else {
      const khmerMonths = ["មករា", "កុម្ភៈ", "មីនា", "មេសា", "ឧសភា", "មិថុនា", "កក្កដា", "សីហា", "កញ្ញា", "តុលា", "វិច្ឆិកា", "ធ្នូ"];
      const day = date.getDate();
      const month = khmerMonths[date.getMonth()];
      const year = date.getFullYear();
      return `${day} ${month} ${year}`;
    }
  };

  // Execute High Precision Export Pipeline
  const handleExport = async (format: 'png' | 'jpeg' | 'pdf' | 'print') => {
    if (!exportRef.current) return;
    setIsExporting(true);
    setExportError(null);

    // 1. Run Automated Validation Check
    const validation = LayoutValidator.validate(exportRef.current);
    if (!validation.valid) {
      console.warn('Certificate export validation warning:', validation.errors);
    }

    // 2. Perform Export using ExportManager
    const result = await ExportManager.export(exportRef.current, format, {
      studentName,
      courseTitle,
      certId: certIdRef.current,
      language: language as 'en' | 'kh' | 'km',
      scale: 4, // Ultra-HD 4x output
    });

    if (result.success) {
      setIsSaved(true);
    } else {
      setExportError(result.error || 'Export failed. Please try again or use Print option.');
    }

    setIsExporting(false);
  };

  return (
    <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm flex items-start justify-center p-2 sm:p-4 md:p-6 pt-10 sm:pt-16 z-50 animate-fade-in text-left overflow-y-auto">
      <style id="cert-styles" dangerouslySetInnerHTML={{ __html: certificateStyles }} />

      {/* OFF-SCREEN UNTOUCHED CANVAS WRAPPER FOR EXACT 1400x990 DOM CAPTURE */}
      <div
        ref={exportRef}
        style={{
          position: 'fixed',
          left: '0px',
          top: '0px',
          width: '1400px',
          height: '990px',
          opacity: 0.001,
          transform: 'none',
          pointerEvents: 'none',
          zIndex: -99999,
          background: '#ffffff',
        }}
      >
        <CertificateContent
          studentName={studentName}
          courseTitle={courseTitle}
          language={language}
          getFormattedDate={getFormattedDate}
          certId={certIdRef.current}
        />
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-2xl max-w-5xl w-full border border-slate-200 dark:border-slate-800 flex flex-col shadow-2xl max-h-[calc(100vh-3.5rem)] my-auto sm:my-0 overflow-hidden">
        {/* Modal Header */}
        <div className="px-6 py-4 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800/80 flex items-center justify-between shrink-0">
          <div className="flex items-center space-x-2.5">
            <div className="p-2 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900 text-blue-600 dark:text-blue-400">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-sm text-slate-900 dark:text-white leading-none flex items-center gap-2">
                <span>{language === 'en' ? "SabayCode Official Certificate" : "វិញ្ញាបនបត្រផ្លូវការសាបាយកូដ"}</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 font-bold">
                  Pixel-Perfect 4x HD
                </span>
              </h3>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                {language === 'en' ? "Verified digital credential - 100% preview & export parity" : "លិខិតបញ្ជាក់សមិទ្ធផលសិក្សាសម្រាប់ប្រវត្តិរូបរបស់អ្នក"}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 dark:hover:text-white transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Error Alert Banner if Export Fails */}
        {exportError && (
          <div className="px-6 py-3 bg-rose-50 dark:bg-rose-950/50 border-b border-rose-200 dark:border-rose-900 flex items-center justify-between text-rose-700 dark:text-rose-300 text-xs font-semibold">
            <div className="flex items-center space-x-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{exportError}</span>
            </div>
            <button onClick={() => setExportError(null)} className="underline hover:no-underline">Dismiss</button>
          </div>
        )}

        {isLoadingModal ? (
          /* Loading State into Certificate Page */
          <div className="p-12 flex flex-col items-center justify-center space-y-4 text-center my-auto">
            <div className="relative">
              <div className="w-16 h-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-xl animate-bounce">
                <Award className="w-8 h-8" />
              </div>
              <div className="absolute -inset-2 border-2 border-blue-500/40 rounded-3xl animate-ping"></div>
            </div>
            <div>
              <h4 className="font-extrabold text-base text-slate-900 dark:text-white">
                {language === 'en' ? "Initializing High-Precision Certificate Canvas..." : "កំពុងដំណើរការរៀបចំវិញ្ញាបនបត្រ..."}
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                {language === 'en' ? "Loading typography vectors and locking pixel metrics" : "កំពុងផ្ទៀងផ្ទាត់ពុម្ពអក្សរ និងទម្រង់វិញ្ញាបនបត្រ"}
              </p>
            </div>
          </div>
        ) : (
          <>
            {/* Recipient Name Input Controls */}
            <div className="p-4 border-b border-slate-100 dark:border-slate-800 bg-blue-50/20 dark:bg-blue-950/10 space-y-2 shrink-0">
              <div className="flex items-center justify-between">
                <label htmlFor="certificate-student-name" className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                  {language === 'en' ? "Recipient Full Name (English or Khmer)" : "ឈ្មោះពេញរបស់អ្នកទទួល (អង់គ្លេស ឬ ខ្មែរ)"}
                </label>
                <span className="text-[10px] text-slate-400 font-mono">{validationStatus}</span>
              </div>
              <div className="flex gap-2">
                <input
                  id="certificate-student-name"
                  type="text"
                  value={studentName}
                  onChange={(e) => {
                    setStudentName(e.target.value);
                    setIsSaved(false);
                  }}
                  placeholder="e.g. Nan Seyha"
                  className="flex-1 px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-blue-500 font-semibold"
                />
                <button
                  onClick={() => setIsSaved(true)}
                  className="px-4 py-2 rounded-xl bg-slate-900 dark:bg-slate-100 hover:bg-slate-800 dark:hover:bg-white text-white dark:text-slate-900 font-bold text-xs flex items-center space-x-1.5 transition cursor-pointer shrink-0"
                >
                  {isSaved ? <Check className="w-4 h-4 text-emerald-400 dark:text-emerald-600" /> : <Sparkles className="w-4 h-4" />}
                  <span>{isSaved ? (language === 'en' ? "Updated" : "បានធ្វើបច្ចុប្បន្នភាព") : (language === 'en' ? "Update Name" : "បច្ចុប្បន្នភាពឈ្មោះ")}</span>
                </button>
              </div>
            </div>

            {/* Certificate Preview Frame with Full Zoom & Scroll Controls */}
            {(() => {
              const fitScale = Math.min(Math.max((containerWidth - 32) / 1400, 0.25), 0.75);
              const activeScale =
                zoomMode === 'full'
                  ? 1.0
                  : zoomMode === 'fit'
                  ? fitScale
                  : customScale;

              const scaledWidth = Math.ceil(1400 * activeScale);
              const scaledHeight = Math.ceil(990 * activeScale);
              const displayPercentage = Math.round(activeScale * 100);

              const handleZoomIn = () => {
                setZoomMode('custom');
                setCustomScale((prev) => Math.min(+(prev + 0.1).toFixed(2), 1.5));
              };

              const handleZoomOut = () => {
                setZoomMode('custom');
                setCustomScale((prev) => Math.max(+(prev - 0.1).toFixed(2), 0.3));
              };

              return (
                <div className="flex-1 flex flex-col min-h-[360px] bg-slate-950 overflow-hidden">
                  {/* Viewport Control Bar */}
                  <div className="px-4 py-2 bg-slate-900/90 border-b border-slate-800 flex flex-wrap items-center justify-between gap-2 text-xs shrink-0">
                    <div className="flex items-center space-x-2 text-slate-400 font-mono text-[11px]">
                      <span className="font-bold text-slate-300">
                        {language === 'en' ? "Preview Zoom:" : "ទំហំមើលកម្រិត:"} {displayPercentage}%
                      </span>
                      <span className="hidden sm:inline text-slate-500">|</span>
                      <span className="hidden sm:inline text-slate-400">
                        {language === 'en'
                          ? "Scroll in any direction to view full certificate"
                          : "អាចអូសចុះឡើងដើម្បីមើលទម្រង់ពេញលេញ"}
                      </span>
                    </div>

                    <div className="flex items-center space-x-1.5">
                      <button
                        onClick={handleZoomOut}
                        title="Zoom Out"
                        className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition cursor-pointer"
                      >
                        <ZoomOut className="w-3.5 h-3.5" />
                      </button>

                      <button
                        onClick={handleZoomIn}
                        title="Zoom In"
                        className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition cursor-pointer"
                      >
                        <ZoomIn className="w-3.5 h-3.5" />
                      </button>

                      <button
                        onClick={() => setZoomMode('fit')}
                        className={`px-2.5 py-1 rounded-lg font-bold text-[11px] transition cursor-pointer ${
                          zoomMode === 'fit'
                            ? 'bg-blue-600 text-white'
                            : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
                        }`}
                      >
                        {language === 'en' ? "Fit View" : "ល្មមអេក្រង់"}
                      </button>

                      <button
                        onClick={() => {
                          setZoomMode('full');
                          setCustomScale(1.0);
                        }}
                        className={`px-2.5 py-1 rounded-lg font-bold text-[11px] transition cursor-pointer ${
                          zoomMode === 'full'
                            ? 'bg-blue-600 text-white'
                            : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
                        }`}
                      >
                        {language === 'en' ? "100% Full Size" : "ទំហំពេញ 100%"}
                      </button>
                    </div>
                  </div>

                  {/* Scrollable Certificate Viewport */}
                  <div
                    ref={previewContainerRef}
                    className="flex-1 p-4 sm:p-6 bg-slate-950 overflow-auto max-h-[560px] flex items-start justify-center"
                    style={{
                      scrollbarWidth: 'thin',
                      scrollbarColor: '#334155 #020617',
                    }}
                  >
                    <div
                      className="relative shadow-2xl rounded-xl border border-slate-800 bg-white shrink-0 m-auto overflow-hidden transition-all duration-150"
                      style={{
                        width: `${scaledWidth}px`,
                        height: `${scaledHeight}px`,
                      }}
                    >
                      <div
                        style={{
                          width: '1400px',
                          height: '990px',
                          transform: `scale(${activeScale})`,
                          transformOrigin: 'top left',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                        }}
                      >
                        <CertificateContent
                          studentName={studentName}
                          courseTitle={courseTitle}
                          language={language}
                          getFormattedDate={getFormattedDate}
                          certId={certIdRef.current}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}

            {/* Footer Export Actions */}
            <div className="px-6 py-4 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-3 shrink-0">
              <div className="flex items-center space-x-3 text-xs text-slate-500 dark:text-slate-400 font-mono">
                <ShieldCheck className="w-4 h-4 text-blue-500" />
                <span>ID: {certIdRef.current}</span>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={onClose}
                  className="px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-700 dark:text-slate-300 font-bold text-xs transition cursor-pointer"
                >
                  {language === 'en' ? "Close" : "បិទ"}
                </button>

                {/* PNG Download */}
                <button
                  onClick={() => handleExport('png')}
                  disabled={isExporting}
                  className="px-3.5 py-2 rounded-xl border border-blue-200 dark:border-blue-900 bg-blue-50 dark:bg-blue-950/40 hover:bg-blue-100 dark:hover:bg-blue-900/60 text-blue-700 dark:text-blue-300 font-bold text-xs flex items-center space-x-1.5 transition cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>{language === 'en' ? "PNG (4x HD)" : "ទាញយក PNG"}</span>
                </button>

                {/* JPEG Download */}
                <button
                  onClick={() => handleExport('jpeg')}
                  disabled={isExporting}
                  className="px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs flex items-center space-x-1.5 transition cursor-pointer"
                >
                  <FileImage className="w-4 h-4" />
                  <span>{language === 'en' ? "JPEG" : "ទាញយក JPEG"}</span>
                </button>

                {/* PDF Export */}
                <button
                  onClick={() => handleExport('pdf')}
                  disabled={isExporting}
                  className={`px-4 py-2 rounded-xl text-white font-bold text-xs flex items-center space-x-1.5 shadow-md transition cursor-pointer ${
                    isExporting ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
                  }`}
                >
                  {isExporting ? (
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <Printer className="w-4 h-4" />
                  )}
                  <span>
                    {isExporting
                      ? (language === 'en' ? "Capturing HD Canvas..." : "កំពុងបង្កើត...")
                      : (language === 'en' ? "Download PDF / Print" : "ទាញយក PDF / បោះពុម្ព")}
                  </span>
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

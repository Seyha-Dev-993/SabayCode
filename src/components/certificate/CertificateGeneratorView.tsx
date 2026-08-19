import React, { useState, useRef, useEffect, useMemo } from 'react';
import { useApp } from '../../context/AppContext';
import { useAuth } from '../../context/AuthContext';
import { 
  Award, Download, Printer, RefreshCw, ZoomIn, ZoomOut, Maximize2, 
  Sparkles, Check, ShieldCheck, Upload, FileText, Share2, Copy, Eye,
  Sliders, Layers, HelpCircle, ArrowLeft, Sun, Moon, Lock, CheckCircle2, AlertTriangle
} from 'lucide-react';
import { CertificateContent } from './CertificateContent';
import { certificateStyles } from './certificateStyles';
import { ExportManager } from '../../utils/certificate/ExportManager';
import { LayoutValidator } from '../../utils/certificate/LayoutValidator';
import { coursesData } from '../../data/coursesData';

interface CertificateGeneratorViewProps {
  onBack?: () => void;
}

const PRESET_COURSES = [
  { id: 'web-dev', name: 'Full-Stack Web Development & React', targetId: 'react' },
  { id: 'mobile-dev', name: 'Mobile App Development with Flutter', targetId: 'flutter' },
  { id: 'db-sql', name: 'Database Architecture & SQL Mastery', targetId: 'mysql' },
  { id: 'frontend-ux', name: 'Frontend Engineering & Modern UI', targetId: 'html' },
  { id: 'gen-ai', name: 'Generative AI & Prompt Engineering', targetId: 'python' },
  { id: 'backend-api', name: 'Backend Systems & Cloud API Architecture', targetId: 'php' },
];

export const CertificateGeneratorView: React.FC<CertificateGeneratorViewProps> = ({ onBack }) => {
  const { language, progress, theme, setTheme } = useApp();
  const { currentUser, student } = useAuth();

  const isAdmin = currentUser?.role === 'admin' || student?.role === 'admin';

  // Calculate completion status for all unique courses
  const allCoursesAndClasses = useMemo(() => {
    const seenIds = new Set<string>();
    return coursesData.filter((course) => {
      if (!course || !course.id || seenIds.has(course.id)) return false;
      seenIds.add(course.id);
      return true;
    });
  }, []);

  const coursesWithCompletion = useMemo(() => {
    return allCoursesAndClasses.map((course) => {
      if (!course) return { id: '', title: '', totalLessons: 0, completedCount: 0, progressPercent: 0, isCompleted: false };
      const title = typeof course.title === 'string'
        ? course.title
        : (course.title?.en || course.title?.km || 'Course');

      const topics = course.topics || (course as any).modules || [];
      const lessonIds = topics.flatMap((t: any) => (t?.lessons || []).map((l: any) => `${course.id}-${l.id}`));
      const completedCount = lessonIds.length > 0
        ? lessonIds.filter((id: string) => (progress?.completedLessons || []).includes(id)).length
        : 0;
      const totalLessons = lessonIds.length;
      const progressPercent = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;
      const isCompleted = totalLessons > 0 && completedCount === totalLessons;

      return {
        id: course.id || '',
        title,
        totalLessons,
        completedCount,
        progressPercent,
        isCompleted,
      };
    });
  }, [allCoursesAndClasses, progress?.completedLessons]);

  const completedCoursesList = useMemo(() => {
    return coursesWithCompletion.filter((c) => c.isCompleted);
  }, [coursesWithCompletion]);

  // Initial Course Name set to first completed course if available
  const [studentName, setStudentName] = useState(
    student?.full_name || currentUser?.name || progress?.profileName || 'Seyha Nan'
  );
  const [courseName, setCourseName] = useState<string>(() => {
    if (completedCoursesList.length > 0) {
      return completedCoursesList[0].title;
    }
    return 'Full-Stack Web Development & React';
  });

  const [issueDate, setIssueDate] = useState(() => {
    const today = new Date();
    return today.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  });
  const [instructorName, setInstructorName] = useState('Seyha Nan');
  const [instructorTitle, setInstructorTitle] = useState('Lead Instructor & Founder');
  const [certificateId, setCertificateId] = useState(
    `SC-${new Date().getFullYear()}-${Math.floor(100000 + Math.random() * 900000)}`
  );
  const [badgeText, setBadgeText] = useState('OF ACHIEVEMENT');
  const [tagline, setTagline] = useState('Learn • Build • Grow');
  const [recognitionMessage, setRecognitionMessage] = useState('');
  const [customLogoUrl, setCustomLogoUrl] = useState<string>('');
  const [verificationUrl, setVerificationUrl] = useState('');

  // UI / Export States
  const [isExporting, setIsExporting] = useState(false);
  const [exportFormat, setExportFormat] = useState<'png' | 'pdf' | 'print' | null>(null);
  const [exportError, setExportError] = useState<string | null>(null);
  const [isCopied, setIsCopied] = useState(false);
  const [zoomLevel, setZoomLevel] = useState<number>(0.65);
  const [isFullscreenPreview, setIsFullscreenPreview] = useState(false);
  const [validationMsg, setValidationMsg] = useState<string>('✓ Pixel-Perfect A4 Landscape (300 DPI)');

  const exportRef = useRef<HTMLDivElement>(null);
  const previewContainerRef = useRef<HTMLDivElement>(null);

  // Helper to check if a selected courseName/preset is completed
  const selectedCourseStatus = useMemo(() => {
    if (!courseName) {
      return { isCompleted: false, progressPercent: 0, completedCount: 0, totalLessons: 0, title: '' };
    }

    // Direct match by title or id
    const directMatch = coursesWithCompletion.find(
      (c) => (c.title || '').toLowerCase() === courseName.toLowerCase() || (c.id || '').toLowerCase() === courseName.toLowerCase()
    );
    if (directMatch) return directMatch;

    // Check preset mappings
    const preset = PRESET_COURSES.find((p) => (p.name || '').toLowerCase() === courseName.toLowerCase() || (p.id || '').toLowerCase() === courseName.toLowerCase());
    if (preset) {
      const mapped = coursesWithCompletion.find((c) => c.id === preset.targetId);
      if (mapped) return mapped;
    }

    // Partial match
    const partial = coursesWithCompletion.find(
      (c) => c.title && (courseName.toLowerCase().includes(c.title.toLowerCase()) || c.title.toLowerCase().includes(courseName.toLowerCase()))
    );
    if (partial) return partial;

    return { isCompleted: false, progressPercent: 0, completedCount: 0, totalLessons: 0, title: courseName };
  }, [courseName, coursesWithCompletion]);

  // Auto-update verification URL when cert ID changes
  useEffect(() => {
    setVerificationUrl(`https://sabaycode.com/certificate/${certificateId}`);
  }, [certificateId]);

  // Adjust preview scaling based on container size
  useEffect(() => {
    const updateContainerScale = () => {
      if (previewContainerRef.current) {
        const containerWidth = previewContainerRef.current.clientWidth - 48; // padding
        const calculatedScale = Math.min(Math.max(containerWidth / 1400, 0.4), 1.1);
        setZoomLevel(calculatedScale);
      }
    };
    updateContainerScale();
    window.addEventListener('resize', updateContainerScale);
    return () => window.removeEventListener('resize', updateContainerScale);
  }, []);

  const generateNewCertId = () => {
    setCertificateId(`SC-${new Date().getFullYear()}-${Math.floor(100000 + Math.random() * 900000)}`);
  };

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setCustomLogoUrl(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleReset = () => {
    setStudentName(student?.full_name || currentUser?.name || 'Seyha Nan');
    setCourseName('Full-Stack Web Development & React');
    setIssueDate(new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }));
    setInstructorName('Seyha Nan');
    setInstructorTitle('Lead Instructor & Founder');
    setBadgeText('OF ACHIEVEMENT');
    setTagline('Learn • Build • Grow');
    setRecognitionMessage('');
    setCustomLogoUrl('');
    generateNewCertId();
  };

  const handleCopyVerificationUrl = () => {
    navigator.clipboard.writeText(verificationUrl);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleExport = async (format: 'png' | 'pdf' | 'print') => {
    if (!exportRef.current) return;

    // Enforce 100% course completion check for non-admins
    if (!isAdmin && !selectedCourseStatus.isCompleted) {
      setExportError(
        `🔒 Certificate Locked: You have not completed 100% of "${courseName || 'this course'}". Finish all course lessons to unlock download.`
      );
      return;
    }

    setIsExporting(true);
    setExportFormat(format);
    setExportError(null);

    try {
      const result = await ExportManager.export(exportRef.current, format, {
        studentName,
        courseTitle: courseName,
        certId: certificateId,
        language: language as 'en' | 'kh' | 'km',
        scale: 4, // 300 DPI HD
      });

      if (!result.success) {
        setExportError(result.error || 'Export failed. Please check parameters and try again.');
      }
    } catch (err: any) {
      setExportError(err?.message || 'An error occurred during certificate export.');
    } finally {
      setIsExporting(false);
      setExportFormat(null);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-100 flex flex-col font-sans transition-colors duration-200">
      <style id="cert-styles" dangerouslySetInnerHTML={{ __html: certificateStyles }} />

      {/* OFF-SCREEN CAPTURE CONTAINER (Locked at exactly 1400px x 990px) */}
      <div
        ref={exportRef}
        style={{
          position: 'fixed',
          left: '0px',
          top: '0px',
          width: '1400px',
          height: '990px',
          opacity: 0.001,
          pointerEvents: 'none',
          zIndex: -99999,
          background: '#ffffff',
        }}
      >
        <CertificateContent
          studentName={studentName}
          courseName={courseName}
          issueDate={issueDate}
          certificateId={certificateId}
          instructorName={instructorName}
          instructorTitle={instructorTitle}
          tagline={tagline}
          badgeText={badgeText}
          logoUrl={customLogoUrl}
          recognitionText={recognitionMessage}
          verificationUrl={verificationUrl}
          language={language}
        />
      </div>

      {/* Top Header Navigation */}
      <div className="bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 px-4 sm:px-8 py-3.5 flex items-center justify-between shrink-0 transition-colors">
        <div className="flex items-center space-x-3">
          {onBack && (
            <button
              onClick={onBack}
              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition cursor-pointer"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
          )}
          <div className="p-2 rounded-xl bg-blue-600/10 dark:bg-blue-600/20 border border-blue-500/20 dark:border-blue-500/30 text-blue-600 dark:text-blue-400">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <h1 className="font-extrabold text-base text-slate-900 dark:text-white flex items-center gap-2">
              <span>SabayCode Certificate Studio</span>
              <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 dark:border-blue-500/30 font-bold">
                A4 Landscape 300 DPI
              </span>
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Interactive corporate certificate generator with custom dynamic parameters & PDF/PNG export
            </p>
          </div>
        </div>

        {/* Quick Action Export Buttons & Theme Switcher */}
        <div className="flex items-center space-x-2.5">
          {/* Theme Toggle Button */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 transition cursor-pointer"
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
          </button>

          <button
            onClick={() => handleExport('png')}
            disabled={isExporting}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs flex items-center gap-2 shadow-md shadow-blue-500/20 transition cursor-pointer disabled:opacity-50"
          >
            {isExporting && exportFormat === 'png' ? (
              <RefreshCw className="w-4 h-4 animate-spin" />
            ) : (
              <Download className="w-4 h-4" />
            )}
            <span>Download High-Res PNG</span>
          </button>

          <button
            onClick={() => handleExport('pdf')}
            disabled={isExporting}
            className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 font-bold text-xs flex items-center gap-2 transition cursor-pointer disabled:opacity-50"
          >
            {isExporting && exportFormat === 'pdf' ? (
              <RefreshCw className="w-4 h-4 animate-spin" />
            ) : (
              <FileText className="w-4 h-4" />
            )}
            <span>Export PDF</span>
          </button>

          <button
            onClick={() => handleExport('print')}
            disabled={isExporting}
            className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700 transition cursor-pointer"
            title="Print Certificate"
          >
            <Printer className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Studio Workspace: Left Editor Sidebar + Right Live Canvas */}
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        {/* Left Interactive Control Panel */}
        <div className="w-full lg:w-[420px] bg-white dark:bg-slate-950 border-r border-slate-200 dark:border-slate-800 flex flex-col overflow-y-auto shrink-0 p-5 space-y-6 transition-colors">
          {/* Header section */}
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
            <div className="flex items-center gap-2 text-sm font-extrabold text-slate-900 dark:text-white uppercase tracking-wider">
              <Sliders className="w-4 h-4 text-blue-500 dark:text-blue-400" />
              <span>Certificate Parameters</span>
            </div>
            <button
              onClick={handleReset}
              className="text-xs text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white flex items-center gap-1 transition cursor-pointer"
              title="Reset to defaults"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          </div>

          {/* Preset Selection & Completion Enforcement */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <label className="text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Select Preset Course
              </label>
              {!isAdmin && (
                <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 rounded-full border border-blue-200 dark:border-blue-900">
                  {completedCoursesList.length} / {coursesWithCompletion.length} Finished
                </span>
              )}
            </div>

            <select
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-xs font-medium focus:border-blue-500 focus:outline-none transition"
            >
              {completedCoursesList.length > 0 && (
                <optgroup label="✓ COMPLETED COURSES (Unlocked)">
                  {completedCoursesList.map((c, idx) => (
                    <option key={`comp-${c.id || idx}-${idx}`} value={c.title}>
                      ✓ {c.title} (100% Completed)
                    </option>
                  ))}
                </optgroup>
              )}

              <optgroup label="🔒 INCOMPLETE COURSES (Finish 100% to Unlock)">
                {coursesWithCompletion
                  .filter((c) => !c.isCompleted)
                  .map((c, idx) => (
                    <option key={`incomp-${c.id || idx}-${idx}`} value={c.title} disabled={!isAdmin}>
                      {isAdmin ? '👑' : '🔒'} {c.title} ({c.progressPercent}% - {isAdmin ? 'Admin Allowed' : 'Incomplete'})
                    </option>
                  ))}
              </optgroup>

              {isAdmin && (
                <optgroup label="👑 Admin Custom Option">
                  <option value="Custom Course Title">-- Custom Course Title --</option>
                </optgroup>
              )}
            </select>

            {/* Selected Course Completion Status Badge */}
            {selectedCourseStatus.isCompleted ? (
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 text-xs flex items-center gap-2.5">
                <CheckCircle2 className="w-4.5 h-4.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <div>
                  <p className="font-extrabold text-xs">✓ Course Completed (100%)</p>
                  <p className="text-[11px] opacity-90">Official SabayCode Certificate unlocked & ready to export.</p>
                </div>
              </div>
            ) : (
              <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-800 dark:text-amber-300 text-xs flex items-center gap-2.5">
                <Lock className="w-4.5 h-4.5 text-amber-600 dark:text-amber-400 shrink-0" />
                <div>
                  <p className="font-extrabold text-xs">
                    🔒 Certificate Locked ({selectedCourseStatus.progressPercent}% Completed)
                  </p>
                  <p className="text-[11px] opacity-90">
                    {isAdmin
                      ? 'Admin Override Active: You can preview and issue certificates for testing.'
                      : 'You must complete 100% of all lessons in this course to earn its certificate.'}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Form Inputs Grid */}
          <div className="space-y-4">
            {/* Student Name */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                Recipient Name
              </label>
              <input
                type="text"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                placeholder="Enter recipient full name"
                className="w-full px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:border-blue-500 focus:outline-none transition shadow-2xs"
              />
            </div>

            {/* Custom Course Name */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                Course Name
              </label>
              <input
                type="text"
                value={courseName}
                onChange={(e) => setCourseName(e.target.value)}
                placeholder="Enter course name"
                className="w-full px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-xs focus:border-blue-500 focus:outline-none transition shadow-2xs"
              />
            </div>

            {/* Badge & Tagline Row */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Badge Title
                </label>
                <select
                  value={badgeText}
                  onChange={(e) => setBadgeText(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-xs focus:border-blue-500 focus:outline-none transition shadow-2xs"
                >
                  <option value="OF ACHIEVEMENT">OF ACHIEVEMENT</option>
                  <option value="OF COMPLETION">OF COMPLETION</option>
                  <option value="OF EXCELLENCE">OF EXCELLENCE</option>
                  <option value="OF MASTERY">OF MASTERY</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Tagline
                </label>
                <input
                  type="text"
                  value={tagline}
                  onChange={(e) => setTagline(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-xs focus:border-blue-500 focus:outline-none transition shadow-2xs"
                />
              </div>
            </div>

            {/* Date & Cert ID Row */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Issue Date
                </label>
                <input
                  type="text"
                  value={issueDate}
                  onChange={(e) => setIssueDate(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-xs focus:border-blue-500 focus:outline-none transition shadow-2xs"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                    Certificate ID
                  </label>
                  <button
                    onClick={generateNewCertId}
                    className="text-[10px] text-blue-600 dark:text-blue-400 hover:underline cursor-pointer flex items-center gap-0.5 font-bold"
                  >
                    <RefreshCw className="w-2.5 h-2.5" />
                    <span>Randomize</span>
                  </button>
                </div>
                <input
                  type="text"
                  value={certificateId}
                  onChange={(e) => setCertificateId(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-blue-600 dark:text-blue-400 font-mono text-xs focus:border-blue-500 focus:outline-none transition shadow-2xs"
                />
              </div>
            </div>

            {/* Instructor Name & Position */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Instructor Name
                </label>
                <input
                  type="text"
                  value={instructorName}
                  onChange={(e) => setInstructorName(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-xs focus:border-blue-500 focus:outline-none transition shadow-2xs"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Instructor Title
                </label>
                <input
                  type="text"
                  value={instructorTitle}
                  onChange={(e) => setInstructorTitle(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-xs focus:border-blue-500 focus:outline-none transition shadow-2xs"
                />
              </div>
            </div>

            {/* Custom Recognition Message */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                Custom Recognition Message (Optional)
              </label>
              <textarea
                value={recognitionMessage}
                onChange={(e) => setRecognitionMessage(e.target.value)}
                placeholder="Enter custom recognition message to override default text..."
                rows={2}
                className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-xs focus:border-blue-500 focus:outline-none transition resize-none shadow-2xs placeholder-slate-400 dark:placeholder-slate-600 font-sans"
              />
            </div>

            {/* Custom Logo Upload */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  Custom Brand Logo
                </label>
                {customLogoUrl && (
                  <button
                    onClick={() => setCustomLogoUrl('')}
                    className="text-[10px] text-red-500 hover:underline cursor-pointer"
                  >
                    Remove Logo
                  </button>
                )}
              </div>
              <div className="flex items-center gap-3">
                <label className="flex-1 px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-dashed border-slate-300 dark:border-slate-700 hover:border-blue-500 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-xs flex items-center justify-center gap-2 cursor-pointer transition">
                  <Upload className="w-3.5 h-3.5 text-blue-500 dark:text-blue-400" />
                  <span>{customLogoUrl ? 'Change Logo Image' : 'Upload Custom Logo'}</span>
                  <input type="file" accept="image/*" onChange={handleLogoUpload} className="hidden" />
                </label>
              </div>
            </div>

            {/* Verification Link Chip */}
            <div className="bg-slate-100 dark:bg-slate-900/80 p-3 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1.5 transition-colors">
              <div className="flex items-center justify-between text-[11px]">
                <span className="font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-wider flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
                  <span>Verification URL</span>
                </span>
                <button
                  onClick={handleCopyVerificationUrl}
                  className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 font-bold cursor-pointer"
                >
                  {isCopied ? <Check className="w-3 h-3 text-emerald-500 dark:text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{isCopied ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>
              <p className="text-xs font-mono text-slate-700 dark:text-slate-300 truncate" title={verificationUrl}>
                {verificationUrl}
              </p>
            </div>
          </div>
        </div>

        {/* Right Studio Canvas Viewport */}
        <div className="flex-1 bg-slate-200/50 dark:bg-slate-900/60 flex flex-col overflow-hidden relative p-4 sm:p-6 transition-colors">
          {/* Zoom & Viewport Controls Toolbar */}
          <div className="flex items-center justify-between mb-3 bg-white dark:bg-slate-950/80 px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800 transition-colors shadow-xs">
            <div className="flex items-center space-x-2 text-xs font-mono text-slate-600 dark:text-slate-400">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse"></span>
              <span>{validationMsg}</span>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => setZoomLevel((z) => Math.max(0.35, z - 0.05))}
                className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition cursor-pointer border border-slate-200 dark:border-slate-700"
                title="Zoom Out"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <span className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 min-w-[45px] text-center">
                {Math.round(zoomLevel * 100)}%
              </span>
              <button
                onClick={() => setZoomLevel((z) => Math.min(1.2, z + 0.05))}
                className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition cursor-pointer border border-slate-200 dark:border-slate-700"
                title="Zoom In"
              >
                <ZoomIn className="w-4 h-4" />
              </button>

              <button
                onClick={() => setIsFullscreenPreview(true)}
                className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition cursor-pointer border border-slate-200 dark:border-slate-700 ml-2"
                title="Fullscreen Preview"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Error Banner */}
          {exportError && (
            <div className="mb-3 px-4 py-2.5 rounded-xl bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-700 text-red-800 dark:text-red-200 text-xs flex items-center justify-between">
              <span>{exportError}</span>
              <button onClick={() => setExportError(null)} className="text-red-600 dark:text-red-300 font-bold ml-2">✕</button>
            </div>
          )}

          {/* Interactive Live Canvas Container */}
          <div
            ref={previewContainerRef}
            className="flex-1 flex items-center justify-center overflow-auto rounded-2xl border border-slate-300 dark:border-slate-800 bg-slate-100 dark:bg-slate-950/40 p-4 relative shadow-inner transition-colors"
          >
            <div
              style={{
                width: '1400px',
                height: '990px',
                transform: `scale(${zoomLevel})`,
                transformOrigin: 'center center',
                transition: 'transform 0.15s ease-out',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              }}
              className="shrink-0 rounded-lg overflow-hidden bg-white"
            >
              <CertificateContent
                studentName={studentName}
                courseName={courseName}
                issueDate={issueDate}
                certificateId={certificateId}
                instructorName={instructorName}
                instructorTitle={instructorTitle}
                tagline={tagline}
                badgeText={badgeText}
                logoUrl={customLogoUrl}
                recognitionText={recognitionMessage}
                verificationUrl={verificationUrl}
                language={language}
              />
            </div>
          </div>
        </div>
      </div>

      {/* FULLSCREEN ZOOM MODAL */}
      {isFullscreenPreview && (
        <div className="fixed inset-0 z-50 bg-slate-900/90 dark:bg-slate-950/90 backdrop-blur-md flex flex-col p-4 sm:p-8 animate-fade-in">
          <div className="flex items-center justify-between mb-4 px-2">
            <div className="flex items-center space-x-3 text-white">
              <Award className="w-6 h-6 text-blue-400" />
              <span className="font-extrabold text-base">Full-Screen Pixel-Perfect Preview</span>
            </div>
            <button
              onClick={() => setIsFullscreenPreview(false)}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold transition cursor-pointer"
            >
              Close Preview (Esc)
            </button>
          </div>

          <div className="flex-1 flex items-center justify-center overflow-auto">
            <div className="max-w-full max-h-full overflow-auto p-4">
              <div
                style={{
                  width: '1400px',
                  height: '990px',
                  transform: 'scale(0.85)',
                  transformOrigin: 'center center',
                }}
                className="shadow-2xl rounded-lg overflow-hidden bg-white"
              >
                <CertificateContent
                  studentName={studentName}
                  courseName={courseName}
                  issueDate={issueDate}
                  certificateId={certificateId}
                  instructorName={instructorName}
                  instructorTitle={instructorTitle}
                  tagline={tagline}
                  badgeText={badgeText}
                  logoUrl={customLogoUrl}
                  recognitionText={recognitionMessage}
                  verificationUrl={verificationUrl}
                  language={language}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

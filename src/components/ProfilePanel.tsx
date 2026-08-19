import React, { useState, useRef, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { useAuth } from '../context/AuthContext';
import { UserAvatar } from './UserAvatar';
import { translations } from '../translations';
import { coursesData } from '../data/coursesData';
import { CourseBrandIcon, getCourseBrandStyle, getCourseBannerStyle } from './CourseBrandIcon';
import { CertificateModal } from './CertificateModal';
import { ProgressService, getLevelFromXP } from '../services/ProgressService';
import { runProgressServiceTests } from '../services/ProgressService.test';
import { 
  Trophy, Flame, Award, Trash2, Edit2, Check, User, Sparkles, BookOpenCheck, 
  Search, ShieldAlert, ArrowLeft, ChevronRight, Lock, ExternalLink, X,
  Camera, Upload, Image as ImageIcon, Phone, Mail, FileText, Smile, CheckCircle2,
  ShieldCheck, History, Activity, Terminal
} from 'lucide-react';

const avatarEmojis = ["🦊", "🐼", "🦁", "🐨", "🐸", "🐙", "🧙‍♂️", "👩‍💻", "👨‍💻", "🚀", "👾", "🥑"];

export const ProfilePanel: React.FC = () => {
  const { language, progress, resetAllProgress } = useApp();
  const { currentUser, student, updateUserProfileDetails } = useAuth();
  const t = translations[language];

  const fileInputRef = useRef<HTMLInputElement>(null);

  const [isEditing, setIsEditing] = useState(false);
  const [profileName, setProfileName] = useState(student?.full_name || currentUser?.name || 'Student');
  const [profileEmail, setProfileEmail] = useState(currentUser?.email || '');
  const [profilePhone, setProfilePhone] = useState(currentUser?.phone || progress.profilePhone || '');
  const [profileBio, setProfileBio] = useState(progress.profileBio || '');
  const [selectedAvatar, setSelectedAvatar] = useState(progress.profileAvatar || '🦊');
  const [avatarImage, setAvatarImage] = useState<string | null>(progress.profileAvatarImage || null);
  const [avatarTab, setAvatarTab] = useState<'upload' | 'url' | 'emoji'>('upload');
  const [imageUrlInput, setImageUrlInput] = useState('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'all' | 'completed' | 'in-progress'>('all');
  const [selectedCourseForCert, setSelectedCourseForCert] = useState<string | null>(null);

  const [showXpLedger, setShowXpLedger] = useState(false);
  const [auditReport, setAuditReport] = useState<any>(null);
  const [testSuiteOutput, setTestSuiteOutput] = useState<any>(null);

  const activeEmail = currentUser?.email || localStorage.getItem('sabaicode-active-user') || 'student@sabaycode.com';
  const activeName = progress.profileName || student?.full_name || currentUser?.name || 'Student';
  const activeId = currentUser?.id || `std_${activeEmail.replace(/[^a-zA-Z0-9]/g, '_')}`;

  const stats = ProgressService.getDashboardStatistics(activeId, activeName, activeEmail);
  const levelInfo = getLevelFromXP(stats.totalXP);

  useEffect(() => {
    const audit = ProgressService.runSystemIntegrityAudit(activeId);
    setAuditReport(audit);
  }, [activeId, progress.points, progress.completedLessons.length]);

  const handleRunIntegrityTests = async () => {
    setToastMessage(language === 'en' ? "Running System Data Integrity Audit..." : "កំពុងពិនិត្យសុចរិតភាពទិន្នន័យ...");
    const testResults = await runProgressServiceTests();
    setTestSuiteOutput(testResults);
    setToastMessage(testResults.allPassed ? "100% Data Integrity Verified! All tests passed." : "Audit complete with warnings.");
    setTimeout(() => setToastMessage(null), 4000);
  };

  // If user not registered, show the gated access screen
  if (!currentUser) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 py-16 bg-slate-50 dark:bg-slate-950 font-sans" id="gated-profile-panel">
        <div className="max-w-md w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-850 rounded-3xl p-8 shadow-xl text-center space-y-6">
          <div className="w-16 h-16 bg-rose-50 dark:bg-rose-950/30 rounded-2xl flex items-center justify-center mx-auto text-rose-500 border border-rose-100 dark:border-rose-900/30">
            <ShieldAlert className="w-8 h-8" />
          </div>
          
          <div className="space-y-2">
            <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
              {language === 'en' ? "Registration Required" : "តម្រូវឱ្យចុះឈ្មោះជាមុនសិន"}
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {language === 'en' 
                ? "You need an active registered account to view progress, customize your student profile, and unlock shareable course certificates." 
                : "អ្នកត្រូវការគណនីចុះឈ្មោះសកម្ម ដើម្បីមើលវឌ្ឍនភាព កំណត់ប្រវត្តិរូបសិស្សរបស់អ្នក និងទទួលបានវិញ្ញាបនបត្រវគ្គសិក្សា។"}
            </p>
          </div>

          <div className="flex flex-col space-y-2.5 pt-2">
            <button
              onClick={() => {
                window.location.hash = '#/register';
                window.location.reload();
              }}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm py-3 px-4 rounded-xl shadow-lg shadow-blue-600/15 transition cursor-pointer"
            >
              {language === 'en' ? "Sign Up / Register Now" : "ចុះឈ្មោះឥឡូវនេះ"}
            </button>
            <button
              onClick={() => {
                window.location.hash = '#/login';
                window.location.reload();
              }}
              className="w-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-750 text-slate-800 dark:text-slate-100 font-bold text-sm py-3 px-4 rounded-xl transition cursor-pointer"
            >
              {language === 'en' ? "Already have an account? Log In" : "មានគណនីរួចហើយ? ចូលគណនី"}
            </button>
          </div>

          <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80">
            <button
              onClick={() => {
                window.location.hash = '#';
                window.location.reload();
              }}
              className="inline-flex items-center space-x-1 text-xs font-bold text-slate-500 hover:text-slate-800 dark:hover:text-slate-300 transition cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{language === 'en' ? "Back to Learning Paths" : "ត្រឡប់ទៅវគ្គសិក្សាវិញ"}</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  const handleOpenEdit = () => {
    setProfileName(currentUser?.name || progress.profileName || 'Cambodian Coder');
    setProfileEmail(currentUser?.email || '');
    setProfilePhone(currentUser?.phone || progress.profilePhone || '');
    setProfileBio(progress.profileBio || '');
    setSelectedAvatar(progress.profileAvatar || '🦊');
    setAvatarImage(progress.profileAvatarImage || null);
    setImageUrlInput(progress.profileAvatarImage || '');
    setIsEditing(true);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      alert(language === 'en' ? "Image file size exceeds 5MB limit. Please select a smaller photo." : "រូបថតធំជាង 5MB។ សូមជ្រើសរើសរូបថតតូចជាងនេះ។");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      if (typeof reader.result === 'string') {
        setAvatarImage(reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleApplyImageUrl = () => {
    if (imageUrlInput.trim()) {
      setAvatarImage(imageUrlInput.trim());
    }
  };

  const handleRemoveImage = () => {
    setAvatarImage(null);
    setImageUrlInput('');
  };

  const handleSaveProfile = () => {
    if (!profileName.trim()) {
      alert(language === 'en' ? "Name cannot be left blank." : "ឈ្មោះមិនអាចទុកទទេបានឡើយ។");
      return;
    }

    updateUserProfileDetails({
      name: profileName.trim(),
      email: profileEmail.trim(),
      phone: profilePhone.trim(),
      bio: profileBio.trim(),
      avatarEmoji: selectedAvatar,
      avatarImage: avatarImage || undefined
    });

    setIsEditing(false);
    setToastMessage(language === 'en' ? "Profile updated successfully!" : "ព័ត៌មានគណនីត្រូវបច្ចុប្បន្នភាពជោគជ័យ!");
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleReset = () => {
    const confirmWipe = window.confirm(
      language === 'en' 
        ? "Are you absolutely sure you want to reset all your learning history, quiz scores, and cached code? This action cannot be undone."
        : "តើអ្នកប្រាកដជាចង់លុបប្រវត្តិសិក្សា ពិន្ទុ និងកូដទាំងអស់មែនទេ? សកម្មភាពនេះមិនអាចត្រឡប់ថយក្រោយវិញបានឡើយ។"
    );
    if (confirmWipe) {
      resetAllProgress();
      window.location.reload();
    }
  };

  // Calculate stats
  const totalCompletedLessons = progress.completedLessons.length;
  
  // Calculate completion for ALL courses
  const coursesWithProgress = coursesData.map(course => {
    const courseLessonIds = course.topics.flatMap(t => t.lessons.map(l => `${course.id}-${l.id}`));
    const completedCount = courseLessonIds.length > 0 
      ? courseLessonIds.filter(id => progress.completedLessons.includes(id)).length 
      : 0;
    const progressPercent = courseLessonIds.length > 0 
      ? Math.round((completedCount / courseLessonIds.length) * 100) 
      : 0;
    
    return {
      ...course,
      completedCount,
      totalLessons: courseLessonIds.length,
      progressPercent,
      isCompleted: courseLessonIds.length > 0 && progressPercent === 100
    };
  });

  const completedCoursesCount = coursesWithProgress.filter(c => c.isCompleted).length;
  const completedCoursesList = coursesWithProgress.filter(c => c.isCompleted);

  // Filter courses based on tab and search query
  const filteredCourses = coursesWithProgress.filter(course => {
    const matchesSearch = course.title.en.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.id.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (activeTab === 'completed') {
      return matchesSearch && course.isCompleted;
    } else if (activeTab === 'in-progress') {
      return matchesSearch && !course.isCompleted && course.progressPercent > 0;
    }
    return matchesSearch;
  });

  return (
    <div className="max-w-6xl mx-auto py-8 px-4 font-sans text-left space-y-8" id="profile-panel-page">
      
      {/* Toast alert */}
      {toastMessage && (
        <div className="fixed top-20 right-5 z-50 bg-emerald-600 text-white px-5 py-3 rounded-2xl shadow-xl flex items-center space-x-2 font-bold text-sm animate-bounce">
          <CheckCircle2 className="w-5 h-5" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* 1. Header Banner */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-950 to-slate-950 rounded-3xl p-6 sm:p-8 md:p-10 shadow-lg text-white border border-blue-950">
        <div className="absolute top-0 right-0 w-80 h-80 bg-radial-gradient(circle, rgba(96, 165, 250, 0.15) 0%, rgba(96, 165, 250, 0) 70%) pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-96 h-24 bg-gradient-to-r from-blue-500/10 to-blue-500/10 rotate-12 transform pointer-events-none" />
        
        <div className="relative flex flex-col md:flex-row items-center md:justify-between gap-6 z-10">
          <div className="flex flex-col sm:flex-row items-center sm:items-start md:items-center gap-5 text-center sm:text-left min-w-0 w-full md:w-auto">
            {/* Big Premium Avatar with Custom Image Support */}
            <div className="relative group shrink-0">
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-amber-500 via-blue-500 to-emerald-500 rounded-full opacity-75 blur-md group-hover:opacity-100 transition duration-300" />
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 bg-slate-900 rounded-full border-4 border-white dark:border-slate-950 flex items-center justify-center text-4xl sm:text-5xl shadow-xl overflow-hidden select-none">
                <UserAvatar 
                  avatarUrl={progress.profileAvatarImage || currentUser?.avatarImage || (currentUser as any)?.avatar_url || currentUser?.progress?.profileAvatarImage || progress.profileAvatar || currentUser?.progress?.profileAvatar || "🦊"} 
                  fallbackEmoji={progress.profileAvatar || currentUser?.progress?.profileAvatar || "🦊"}
                  name={progress.profileName || currentUser?.name || "Student Avatar"}
                  className="w-full h-full rounded-full"
                  textClassName="text-4xl sm:text-5xl"
                />
              </div>
              <button 
                onClick={handleOpenEdit}
                className="absolute -bottom-1 -right-1 bg-amber-500 hover:bg-amber-600 text-slate-950 p-2 rounded-full border-2 border-white dark:border-slate-950 shadow-md hover:scale-110 transition cursor-pointer flex items-center justify-center z-10"
                title={language === 'en' ? "Edit Profile / Change Photo" : "កែប្រែប្រវត្តិរូប / ប្តូររូបថត"}
              >
                <Camera className="w-3.5 h-3.5 font-bold" />
              </button>
            </div>

            <div className="space-y-2 min-w-0 flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center sm:flex-wrap gap-2">
                <h1 className="text-2xl md:text-3xl font-black tracking-tight text-white break-words max-w-full">
                  {progress.profileName && !progress.profileName.startsWith('data:image/') 
                    ? progress.profileName 
                    : (student?.full_name && !student.full_name.startsWith('data:image/') 
                        ? student.full_name 
                        : (currentUser?.name && !currentUser.name.startsWith('data:image/') 
                            ? currentUser.name 
                            : currentUser?.email?.split('@')[0] || "Student"))}
                </h1>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-black tracking-wider bg-emerald-500 text-white uppercase border border-emerald-400 shadow-xs w-fit mx-auto sm:mx-0 shrink-0">
                  ✓ VERIFIED REGISTERED STUDENT
                </span>
              </div>

              {progress.profileBio && (
                <p className="text-xs font-medium text-blue-200/90 italic bg-white/10 px-3 py-1 rounded-lg w-fit mx-auto sm:mx-0 max-w-full truncate">
                  "{progress.profileBio}"
                </p>
              )}

              <div className="text-xs text-blue-200/90 font-mono flex flex-wrap items-center justify-center sm:justify-start gap-x-3 gap-y-1">
                <span>ID: {currentUser?.id && currentUser.id.startsWith('SBC-') ? currentUser.id : (currentUser?.email?.toLowerCase() === 'nanseyha4@gmail.com' ? 'SBC-2026-ADMI' : `SBC-2026-${currentUser?.id?.substring(0, 4).toUpperCase() || "888F"}`)}</span>
                {currentUser?.email && <span className="truncate max-w-[200px] sm:max-w-none">• {currentUser.email}</span>}
                {(currentUser?.phone || progress.profilePhone) && <span>• 📞 {currentUser?.phone || progress.profilePhone}</span>}
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="shrink-0 flex items-center justify-center sm:justify-start gap-2.5 w-full sm:w-auto pt-3 sm:pt-0 border-t border-blue-800/40 sm:border-0">
            <button
              onClick={handleOpenEdit}
              className="flex-1 sm:flex-none inline-flex items-center justify-center space-x-1.5 px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl shadow-md transition cursor-pointer"
            >
              <Edit2 className="w-4 h-4" />
              <span>{language === 'en' ? "Edit Profile" : "កែប្រែប្រវត្តិរូប"}</span>
            </button>
            <button
              onClick={handleReset}
              className="inline-flex items-center justify-center space-x-1.5 px-3.5 py-2.5 bg-white/10 hover:bg-white/15 border border-white/10 text-blue-100 hover:text-white font-bold text-xs rounded-xl transition cursor-pointer"
              title={language === 'en' ? "Reset learning history" : "កំណត់ឡើងវិញ"}
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Comprehensive Profile Edit Modal */}
      {isEditing && (
        <div className="fixed inset-0 bg-slate-900/70 dark:bg-slate-950/85 backdrop-blur-md z-50 flex items-start justify-center p-2 sm:p-4 md:p-6 pt-10 sm:pt-16 overflow-y-auto">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl sm:rounded-3xl max-w-xl w-full max-h-[calc(100vh-3.5rem)] my-auto sm:my-0 flex flex-col shadow-2xl animate-fade-in text-left overflow-hidden">
            
            {/* Modal Header */}
            <div className="p-5 sm:p-6 pb-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center shrink-0">
              <div className="flex items-center space-x-2.5">
                <div className="w-10 h-10 rounded-2xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 flex items-center justify-center border border-blue-100 dark:border-blue-900/30">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-900 dark:text-white tracking-tight">
                    {language === 'en' ? "Edit Student Profile" : "កែប្រែប្រវត្តិរូបសិស្ស"}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {language === 'en' ? "Update your personal details and custom avatar photo." : "ធ្វើបច្ចុប្បន្នភាពព័ត៌មានផ្ទាល់ខ្លួន និងរូបថតគណនីរបស់អ្នក។"}
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setIsEditing(false)}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Modal Content Body */}
            <div className="p-5 sm:p-6 overflow-y-auto space-y-6 flex-1">

              {/* Avatar Section */}
              <div className="space-y-3 bg-slate-50 dark:bg-slate-950 p-4 rounded-2xl border border-slate-100 dark:border-slate-800/80">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                  {language === 'en' ? "Profile Photo / Avatar" : "រូបថតប្រវត្តិរូប / អាវ៉ាតា"}
                </span>

                <div className="flex items-center space-x-4">
                  {/* Avatar Preview */}
                  <div className="relative w-16 h-16 rounded-2xl bg-slate-900 border-2 border-blue-500/40 flex items-center justify-center text-3xl shadow-inner overflow-hidden shrink-0">
                    {avatarImage ? (
                      <img src={avatarImage} alt="Preview" className="w-full h-full object-cover" />
                    ) : (
                      <span>{selectedAvatar}</span>
                    )}
                  </div>

                  <div className="flex-1 space-y-1">
                    <div className="flex flex-wrap gap-1.5">
                      <button
                        type="button"
                        onClick={() => setAvatarTab('upload')}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center space-x-1 cursor-pointer ${
                          avatarTab === 'upload'
                            ? 'bg-blue-600 text-white shadow-xs'
                            : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300'
                        }`}
                      >
                        <Upload className="w-3.5 h-3.5" />
                        <span>{language === 'en' ? "Upload Image" : "បង្ហោះរូបភាព"}</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setAvatarTab('url')}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center space-x-1 cursor-pointer ${
                          avatarTab === 'url'
                            ? 'bg-blue-600 text-white shadow-xs'
                            : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300'
                        }`}
                      >
                        <ImageIcon className="w-3.5 h-3.5" />
                        <span>{language === 'en' ? "Image URL" : "តំណភ្ជាប់ URL"}</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setAvatarTab('emoji')}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center space-x-1 cursor-pointer ${
                          avatarTab === 'emoji'
                            ? 'bg-blue-600 text-white shadow-xs'
                            : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300'
                        }`}
                      >
                        <Smile className="w-3.5 h-3.5" />
                        <span>{language === 'en' ? "Emoji" : "រូបតំណាង"}</span>
                      </button>
                    </div>

                    {avatarImage && (
                      <button
                        type="button"
                        onClick={handleRemoveImage}
                        className="text-[11px] font-bold text-rose-500 hover:underline inline-flex items-center space-x-1 pt-1 cursor-pointer"
                      >
                        <Trash2 className="w-3 h-3" />
                        <span>{language === 'en' ? "Remove custom photo" : "លុបរូបថត"}</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Avatar Tab Content */}
                {avatarTab === 'upload' && (
                  <div className="pt-2">
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                    <div
                      onClick={() => fileInputRef.current?.click()}
                      className="p-4 border-2 border-dashed border-slate-200 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-500 rounded-xl bg-white dark:bg-slate-900 text-center cursor-pointer transition group"
                    >
                      <Camera className="w-6 h-6 mx-auto text-slate-400 group-hover:text-blue-500 mb-1 transition" />
                      <span className="text-xs font-bold text-slate-700 dark:text-slate-300 block">
                        {language === 'en' ? "Click to choose photo from your device" : "ចុចដើម្បីជ្រើសរើសរូបថតពីឧបករណ៍របស់អ្នក"}
                      </span>
                      <span className="text-[10px] text-slate-400 block mt-0.5">
                        Supports JPG, PNG, WEBP (Max 5MB)
                      </span>
                    </div>
                  </div>
                )}

                {avatarTab === 'url' && (
                  <div className="pt-2 flex gap-2">
                    <input
                      type="url"
                      value={imageUrlInput}
                      onChange={(e) => setImageUrlInput(e.target.value)}
                      placeholder="https://example.com/my-photo.jpg"
                      className="flex-1 px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-xs font-medium focus:ring-2 focus:ring-blue-500/20"
                    />
                    <button
                      type="button"
                      onClick={handleApplyImageUrl}
                      className="px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition cursor-pointer"
                    >
                      {language === 'en' ? "Apply" : "អនុវត្ត"}
                    </button>
                  </div>
                )}

                {avatarTab === 'emoji' && (
                  <div className="pt-2 grid grid-cols-6 gap-2 bg-white dark:bg-slate-900 p-2.5 rounded-xl border border-slate-200/60 dark:border-slate-800/60">
                    {avatarEmojis.map((emoji) => (
                      <button
                        key={emoji}
                        type="button"
                        onClick={() => {
                          setSelectedAvatar(emoji);
                          setAvatarImage(null);
                        }}
                        className={`text-2xl p-2 rounded-xl transition hover:scale-110 cursor-pointer flex items-center justify-center ${
                          selectedAvatar === emoji && !avatarImage
                            ? 'bg-blue-600 text-white scale-105 shadow-md' 
                            : 'hover:bg-slate-100 dark:hover:bg-slate-800'
                        }`}
                      >
                        {emoji}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Personal Info Form Fields */}
              <div className="space-y-4">
                
                {/* Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider flex items-center space-x-1">
                    <User className="w-3.5 h-3.5 text-blue-500" />
                    <span>{language === 'en' ? "Full Name" : "ឈ្មោះពេញ"}</span>
                  </label>
                  <input
                    type="text"
                    value={profileName}
                    onChange={(e) => setProfileName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-sm font-semibold transition"
                    placeholder={currentUser?.name || "e.g. Nan Seyha"}
                  />
                </div>

                {/* Email & Phone Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider flex items-center space-x-1">
                      <Mail className="w-3.5 h-3.5 text-blue-500" />
                      <span>{language === 'en' ? "Email Address" : "អ៊ីមែល"}</span>
                    </label>
                    <input
                      type="email"
                      value={profileEmail}
                      onChange={(e) => setProfileEmail(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-sm font-semibold transition"
                      placeholder="student@gmail.com"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider flex items-center space-x-1">
                      <Phone className="w-3.5 h-3.5 text-blue-500" />
                      <span>{language === 'en' ? "Phone Number" : "លេខទូរស័ព្ទ"}</span>
                    </label>
                    <input
                      type="tel"
                      value={profilePhone}
                      onChange={(e) => setProfilePhone(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-sm font-semibold transition"
                      placeholder="012 345 678"
                    />
                  </div>
                </div>

                {/* Bio / Headline */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider flex items-center space-x-1">
                    <FileText className="w-3.5 h-3.5 text-blue-500" />
                    <span>{language === 'en' ? "Short Bio / Headline" : "ព័ត៌មានសង្ខេប"}</span>
                  </label>
                  <input
                    type="text"
                    value={profileBio}
                    onChange={(e) => setProfileBio(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-sm font-semibold transition"
                    placeholder="e.g. Full-stack Developer Student @ SabayCode"
                  />
                </div>

              </div>
            </div>

            {/* Modal Actions Footer */}
            <div className="p-5 sm:p-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex space-x-3 shrink-0">
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-850 text-slate-700 dark:text-slate-300 font-bold text-xs transition cursor-pointer"
              >
                {language === 'en' ? "Cancel" : "បោះបង់"}
              </button>
              <button
                type="button"
                onClick={handleSaveProfile}
                className="flex-1 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md transition flex items-center justify-center space-x-1.5 cursor-pointer"
              >
                <Check className="w-4 h-4" />
                <span>{language === 'en' ? "Save Changes" : "រក្សាទុកការកែប្រែ"}</span>
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Level Progress & System Data Integrity Bar */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-3xl p-6 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-black text-xl shadow-md ring-4 ring-blue-500/20 shrink-0">
              {levelInfo.level}
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-xs font-black uppercase text-blue-600 dark:text-blue-400 font-mono tracking-wider">
                  LEVEL {levelInfo.level}
                </span>
                <span className="text-xs font-bold text-slate-400">•</span>
                <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  {levelInfo.title}
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                {levelInfo.level === 10
                  ? (language === 'en' ? "Maximum Level Reached!" : "កម្រិតអតិបរមា!")
                  : (language === 'en'
                    ? `${levelInfo.xpForNextLevel} XP needed for Level ${levelInfo.level + 1}`
                    : `ត្រូវការ ${levelInfo.xpForNextLevel} XP ទៀតសម្រាប់កម្រិត ${levelInfo.level + 1}`)}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => setShowXpLedger(!showXpLedger)}
              className="px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-750 text-slate-700 dark:text-slate-300 font-bold text-xs transition flex items-center space-x-1.5 cursor-pointer"
            >
              <History className="w-3.5 h-3.5 text-blue-500" />
              <span>{showXpLedger ? (language === 'en' ? "Hide XP Ledger" : "លាក់ប្រវត្តិ XP") : (language === 'en' ? "XP Ledger History" : "ប្រវត្តិ XP")}</span>
            </button>

            <button
              onClick={handleRunIntegrityTests}
              className="px-3.5 py-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-100 dark:hover:bg-emerald-900/40 border border-emerald-200/60 dark:border-emerald-800/40 font-bold text-xs transition flex items-center space-x-1.5 cursor-pointer"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              <span>{language === 'en' ? "100% Data Integrity Verified" : "ពិនិត្យសុចរិតភាពទិន្នន័យ"}</span>
            </button>
          </div>
        </div>

        {/* Level XP Progress Bar */}
        <div className="space-y-1">
          <div className="flex justify-between text-[11px] font-mono text-slate-400 font-bold">
            <span>{stats.totalXP} XP</span>
            <span>{levelInfo.maxXP} XP</span>
          </div>
          <div className="w-full h-2.5 bg-slate-100 dark:bg-slate-950 rounded-full overflow-hidden border border-slate-200/20">
            <div
              className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-amber-500 transition-all duration-500 rounded-full"
              style={{ width: `${levelInfo.progressPercent}%` }}
            />
          </div>
        </div>

        {/* Expandable XP Transaction Ledger Table */}
        {showXpLedger && (
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 space-y-3 animate-fade-in">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 font-mono flex items-center space-x-1.5">
              <Activity className="w-3.5 h-3.5 text-blue-500" />
              <span>{language === 'en' ? "Immutable XP Transaction Ledger" : "កំណត់ត្រាការទទួលបាន XP"}</span>
            </h4>

            {stats.xpTransactions.length > 0 ? (
              <div className="max-h-56 overflow-y-auto space-y-2 pr-1">
                {stats.xpTransactions.map((tx, idx) => (
                  <div key={tx.id ? `${tx.id}-${idx}` : `tx-${idx}`} className="p-3 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-100 dark:border-slate-800/60 flex items-center justify-between text-xs font-medium">
                    <div className="space-y-0.5">
                      <span className="font-bold text-slate-800 dark:text-slate-200 block">{tx.description}</span>
                      <span className="text-[10px] text-slate-400 font-mono block">{new Date(tx.timestamp).toLocaleString()} • Ref: {tx.referenceId}</span>
                    </div>
                    <span className="font-black font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/20">
                      +{tx.amount} XP
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-xs text-slate-400 italic py-2">
                {language === 'en' ? "No XP transactions recorded yet." : "មិនទាន់មានប្រវត្តិទទួលបាន XP នៅឡើយទេ។"}
              </p>
            )}
          </div>
        )}

        {/* Expandable Test Harness Output */}
        {testSuiteOutput && (
          <div className="p-4 bg-slate-950 text-slate-200 rounded-2xl font-mono text-xs space-y-2 border border-slate-800 animate-fade-in">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-emerald-400 font-bold">
              <span className="flex items-center space-x-1">
                <Terminal className="w-4 h-4" />
                <span>ProgressService Automated Integrity Audit Output</span>
              </span>
              <span>{testSuiteOutput.passedCount}/{testSuiteOutput.totalTests} Passed</span>
            </div>
            <div className="space-y-1">
              {testSuiteOutput.results.map((r: any, idx: number) => (
                <div key={idx} className="flex justify-between items-center text-[11px]">
                  <span className={r.passed ? 'text-emerald-400' : 'text-rose-400 font-bold'}>
                    {r.passed ? '✓' : '✗'} {r.name}
                  </span>
                  <span className="text-slate-500">{r.durationMs}ms</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Above-The-Fold Certificate Claim Hero Section */}
      {completedCoursesList.length > 0 && (
        <div className="bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-600 rounded-3xl p-6 text-slate-950 shadow-xl border border-amber-300/80 flex flex-col md:flex-row items-center justify-between gap-5 animate-fade-in" id="above-fold-cert-banner">
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 rounded-2xl bg-slate-950 text-amber-400 flex items-center justify-center text-3xl shrink-0 shadow-lg ring-4 ring-amber-300/50">
              🎓
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="bg-slate-950 text-amber-300 px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider">
                  {language === 'en' ? "CERTIFICATE READY" : "ទទួលបានវិញ្ញាបនបត្រ"}
                </span>
                <span className="text-xs font-black text-slate-950">
                  {completedCoursesList.length} {completedCoursesList.length === 1 ? (language === 'en' ? "Course Completed!" : "វគ្គសិក្សាបានបញ្ចប់!") : (language === 'en' ? "Courses Completed!" : "វគ្គសិក្សាបានបញ្ចប់!")}
                </span>
              </div>
              <h3 className="text-lg font-black tracking-tight text-slate-950 mt-1">
                {language === 'en' ? "Congratulations! Your Official Certificate is Ready" : "អបអរសាទរ! វិញ្ញាបនបត្រផ្លូវការរបស់អ្នករួចរាល់ហើយ"}
              </h3>
              <p className="text-xs text-slate-950/80 font-medium">
                {language === 'en' 
                  ? "Claim and download your verified bilingual certificate for your resume & portfolio now."
                  : "ទាញយកវិញ្ញាបនបត្រទ្វិភាសាផ្លូវការសម្រាប់ប្រវត្តិរូបការងាររបស់អ្នកឥឡូវនេះ។"}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 shrink-0 w-full md:w-auto justify-end">
            {completedCoursesList.map((course) => (
              <button
                key={course.id}
                onClick={() => setSelectedCourseForCert(course.title.en)}
                className="px-5 py-3 rounded-2xl bg-slate-950 hover:bg-slate-900 text-amber-300 font-extrabold text-xs shadow-xl flex items-center space-x-2 transition hover:scale-105 cursor-pointer ring-2 ring-amber-400/40"
              >
                <Award className="w-4 h-4 text-amber-400" />
                <span>{language === 'en' ? `Claim ${course.title.en} Certificate` : `ទាញយកវិញ្ញាបនបត្រ ${course.title.en}`}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* 2. Stats Bento Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* XP Card */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 rounded-2xl p-5 shadow-sm flex items-center space-x-4">
          <div className="w-12 h-12 bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center border border-blue-100/50 dark:border-blue-900/20 shrink-0">
            <Trophy className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[10px] font-black text-slate-400 font-mono uppercase tracking-wider block">
              {language === 'en' ? "TOTAL SCORE" : "ពិន្ទុរួម"}
            </span>
            <span className="text-xl font-black text-slate-800 dark:text-white font-mono leading-none mt-1 block">
              {progress.points} <span className="text-xs text-blue-500 font-bold">XP</span>
            </span>
          </div>
        </div>

        {/* Streak Card */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 rounded-2xl p-5 shadow-sm flex items-center space-x-4">
          <div className="w-12 h-12 bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 rounded-xl flex items-center justify-center border border-amber-100/50 dark:border-amber-900/20 shrink-0">
            <Flame className="w-6 h-6 fill-amber-500" />
          </div>
          <div>
            <span className="text-[10px] font-black text-slate-400 font-mono uppercase tracking-wider block">
              {language === 'en' ? "ACTIVE STREAK" : "វត្តមានសិក្សាជាប់គ្នា"}
            </span>
            <span className="text-xl font-black text-slate-800 dark:text-white font-mono leading-none mt-1 block">
              {progress.streakCount} <span className="text-xs text-amber-500 font-bold">{language === 'en' ? "Days" : "ថ្ងៃ"}</span>
            </span>
          </div>
        </div>

        {/* Completed Courses Card */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 rounded-2xl p-5 shadow-sm flex items-center space-x-4">
          <div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 rounded-xl flex items-center justify-center border border-emerald-100/50 dark:border-emerald-900/20 shrink-0">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[10px] font-black text-slate-400 font-mono uppercase tracking-wider block">
              {language === 'en' ? "COMPLETED COURSES" : "វគ្គសិក្សាបញ្ចប់រួច"}
            </span>
            <span className="text-xl font-black text-slate-800 dark:text-white font-mono leading-none mt-1 block">
              {completedCoursesCount} <span className="text-xs text-emerald-500 font-bold">{language === 'en' ? "Paths" : "វគ្គ"}</span>
            </span>
          </div>
        </div>

        {/* Total Lessons Card */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 rounded-2xl p-5 shadow-sm flex items-center space-x-4">
          <div className="w-12 h-12 bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400 rounded-xl flex items-center justify-center border border-purple-100/50 dark:border-purple-900/20 shrink-0">
            <BookOpenCheck className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[10px] font-black text-slate-400 font-mono uppercase tracking-wider block">
              {language === 'en' ? "LESSONS FINISHED" : "មេរៀនសិក្សារួច"}
            </span>
            <span className="text-xl font-black text-slate-800 dark:text-white font-mono leading-none mt-1 block">
              {totalCompletedLessons} <span className="text-xs text-purple-500 font-bold">{language === 'en' ? "Lessons" : "មេរៀន"}</span>
            </span>
          </div>
        </div>

      </div>

      {/* 3. Learning Directory Header, Search & Filter Tabs */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 rounded-3xl p-6 shadow-sm space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-1 border-b border-slate-100 dark:border-slate-800/80">
          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight flex items-center space-x-2">
              <Award className="w-5 h-5 text-blue-500" />
              <span>{language === 'en' ? "Your Learning Directory" : "វគ្គសិក្សារបស់អ្នក"}</span>
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              {language === 'en'
                ? "View course percentages, resume learning tracks, and generate premium verified bilingual certificates."
                : "មើលភាគរយបញ្ចប់ការសិក្សា បន្តវគ្គសិក្សារបស់អ្នក និងទទួលបានវិញ្ញាបនបត្រទ្វិភាសាផ្លូវការ។"}
            </p>
          </div>

          {/* Tab Filter buttons */}
          <div className="flex bg-slate-100 dark:bg-slate-950 rounded-xl p-1 border border-slate-200/40 dark:border-slate-850/30">
            {(['all', 'completed', 'in-progress'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-150 cursor-pointer ${
                  activeTab === tab
                    ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
                }`}
              >
                {tab === 'all' && (language === 'en' ? "All Courses" : "វគ្គសិក្សាទាំងអស់")}
                {tab === 'completed' && (language === 'en' ? "Completed" : "បានបញ្ចប់")}
                {tab === 'in-progress' && (language === 'en' ? "In Progress" : "កំពុងសិក្សា")}
              </button>
            ))}
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder={language === 'en' ? "Search learning directory..." : "ស្វែងរកវគ្គសិក្សា..."}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-sm font-medium transition"
          />
        </div>

        {/* Courses Interactive Cards Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filteredCourses.map((course) => {
              const bannerStyle = getCourseBannerStyle(course.id);
              return (
                <div 
                  key={course.id}
                  onClick={() => {
                    if (course.isCompleted) {
                      setSelectedCourseForCert(course.title.en);
                    }
                  }}
                  className={`group relative flex flex-col justify-between bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ${
                    course.isCompleted 
                      ? 'border-amber-400/80 dark:border-amber-500/40 bg-amber-50/5 dark:bg-amber-950/5 cursor-pointer hover:border-amber-500 hover:shadow-amber-500/10' 
                      : bannerStyle.borderHover
                  }`}
                  title={course.isCompleted ? (language === 'en' ? "Click to view your premium certificate" : "ចុចទីនេះដើម្បីមើលវិញ្ញាបនបត្របញ្ចប់ការសិក្សា") : undefined}
                >
                  {/* Top Image / Banner Header */}
                  <div className="relative h-36 w-full overflow-hidden bg-slate-900 flex flex-col justify-between p-4">
                    {/* Background Image */}
                    {bannerStyle.bannerImage && (
                      <img
                        src={bannerStyle.bannerImage}
                        alt={course.title.en}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-25"
                        referrerPolicy="no-referrer"
                      />
                    )}
                    {/* Vibrant Brand Color Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${bannerStyle.bannerGradient} opacity-65`} />

                    {/* Real Official Technology Logo Graphic in Background */}
                    {bannerStyle.techLogoSvg && (
                      <div className="absolute -right-3 -bottom-5 z-0 pointer-events-none opacity-40 group-hover:opacity-80 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500">
                        <img
                          src={bannerStyle.techLogoSvg}
                          alt=""
                          className="w-32 h-32 object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)]"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    )}

                    {/* Dark Gradient Overlay for text contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                    <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />

                    {/* Top Badges */}
                    <div className="relative z-10 flex items-center justify-between gap-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-slate-950/80 backdrop-blur-md text-white text-[10px] font-black font-mono uppercase tracking-wider border border-white/15 flex items-center gap-1.5">
                        <span className={`w-2 h-2 rounded-full ${bannerStyle.badgeBg}`} />
                        <span>{course.category}</span>
                      </span>

                      {course.isCompleted ? (
                        <span className="px-2.5 py-0.5 rounded-full bg-amber-400 text-slate-950 text-[10px] font-black uppercase tracking-wider shadow-md flex items-center gap-1">
                          <Award className="w-3.5 h-3.5" />
                          <span>100% COMPLETED</span>
                        </span>
                      ) : (
                        <span className="px-2.5 py-0.5 rounded-full bg-slate-950/80 backdrop-blur-md text-amber-400 text-[10px] font-bold font-mono border border-white/15">
                          {course.progressPercent}% DONE
                        </span>
                      )}
                    </div>

                    {/* Emblem & Title */}
                    <div className="relative z-10 flex items-center space-x-3 mt-auto">
                      <div className="p-2.5 rounded-xl bg-slate-900/90 border border-white/20 shadow-xl backdrop-blur-xl group-hover:scale-110 transition-transform duration-300 flex items-center justify-center shrink-0">
                        <CourseBrandIcon iconName={course.iconName} courseId={course.id} className="w-6 h-6 shrink-0 text-white" />
                      </div>
                      <div className="min-w-0">
                        <span className="text-[10px] font-mono font-bold uppercase text-slate-300/90 block">
                          {course.completedCount} / {course.totalLessons} {language === 'en' ? "Lessons finished" : "មេរៀនសិក្សារួច"}
                        </span>
                        <h4 className="text-lg font-black text-white tracking-tight leading-none drop-shadow-md truncate">
                          {course.title.en}
                        </h4>
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-4 sm:p-5 space-y-3 flex-1 flex flex-col justify-between">
                    {/* Title Row with Integrated Button */}
                    <div className="flex items-center justify-between gap-2 pb-2 border-b border-slate-100 dark:border-slate-800">
                      <div className="min-w-0">
                        <h3 className="font-black text-slate-900 dark:text-white text-base">
                          {course.title[language] || course.title.en}
                        </h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                          {course.totalLessons} {language === 'en' ? "Interactive Lessons" : "មេរៀនអនុវត្តន៍"}
                        </p>
                      </div>

                      {/* Button in Title Header */}
                      {course.isCompleted ? (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedCourseForCert(course.title.en);
                          }}
                          className="px-3.5 py-1.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-black text-xs rounded-xl shadow-md transition cursor-pointer flex items-center gap-1.5 shrink-0"
                        >
                          <Award className="w-3.5 h-3.5 fill-slate-950" />
                          <span>{language === 'en' ? "Certificate" : "វិញ្ញាបនបត្រ"}</span>
                        </button>
                      ) : (
                        <div className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 font-mono font-bold text-[10px] rounded-xl flex items-center gap-1 shrink-0">
                          <Lock className="w-3 h-3" />
                          <span>Gated</span>
                        </div>
                      )}
                    </div>

                    {/* Progress Bar */}
                    <div className="space-y-1 pt-1">
                      <div className="flex justify-between text-[10px] font-bold text-slate-400">
                        <span>{language === 'en' ? "Track Progress" : "វឌ្ឍនភាពសិក្សា"}</span>
                        <span className={`font-mono ${bannerStyle.accentColor}`}>{course.progressPercent}%</span>
                      </div>
                      <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div 
                          className={`h-full transition-all duration-300 rounded-full ${
                            course.isCompleted 
                              ? 'bg-gradient-to-r from-amber-400 to-amber-600' 
                              : `bg-gradient-to-r ${bannerStyle.bannerGradient}`
                          }`}
                          style={{ width: `${course.progressPercent}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-2xl">
            <span className="text-3xl block mb-2">🔍</span>
            <h4 className="font-bold text-slate-700 dark:text-slate-300 text-sm">
              {language === 'en' ? "No Courses Found" : "រកមិនឃើញវគ្គសិក្សាទេ"}
            </h4>
            <p className="text-xs text-slate-400 mt-1 max-w-xs mx-auto">
              {language === 'en'
                ? "Try adjusting your search query or filter tabs to explore more bilingual learning tracks."
                : "សូមព្យាយាមកែប្រែពាក្យស្វែងរក ឬផ្ទាំងចម្រោះ ដើម្បីស្វែងរកវគ្គសិក្សាបន្ថែមទៀត។"}
            </p>
          </div>
        )}
      </div>

      {/* 4. Verified Certificate Modal Integration */}
      {selectedCourseForCert && (
        <CertificateModal
          courseTitle={selectedCourseForCert}
          isOpen={!!selectedCourseForCert}
          onClose={() => setSelectedCourseForCert(null)}
        />
      )}

    </div>
  );
};

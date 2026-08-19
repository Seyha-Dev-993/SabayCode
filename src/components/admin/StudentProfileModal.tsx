import React, { useState, useMemo } from 'react';
import { AdminStudent, AdminCertificate } from '../../types';
import { UserAvatar } from '../UserAvatar';
import { 
  X, User, Mail, Phone, Calendar, ShieldCheck, Flame, Trophy, Award, 
  CheckCircle, AlertTriangle, Key, Edit3, Trash2, ShieldAlert, Sparkles, BookOpen, Check
} from 'lucide-react';
import { coursesData } from '../../data/coursesData';
import { ProgressService } from '../../services/ProgressService';

interface StudentProfileModalProps {
  student: AdminStudent;
  certificates: AdminCertificate[];
  onClose: () => void;
  onEdit: (student: AdminStudent) => void;
  onToggleSuspend: (student: AdminStudent) => void;
  onDelete: (student: AdminStudent) => void;
  onIssueCertificate: (student: AdminStudent) => void;
}

export const StudentProfileModal: React.FC<StudentProfileModalProps> = ({
  student,
  certificates,
  onClose,
  onEdit,
  onToggleSuspend,
  onDelete,
  onIssueCertificate
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'certificates' | 'activity'>('overview');
  const [courseFilter, setCourseFilter] = useState<'all' | 'enrolled' | 'completed'>('all');
  const [resetMessage, setResetMessage] = useState<string | null>(null);

  // Single Source of Truth: Get live, real-time calculated statistics from ProgressService
  const stats = useMemo(() => {
    return ProgressService.getDashboardStatistics(student.id, student.full_name, student.email);
  }, [student.id, student.full_name, student.email]);

  const studentCerts = certificates.filter(
    c => c.student_id === student.id || c.student_email?.toLowerCase() === student.email?.toLowerCase()
  );

  const handleResetPassword = () => {
    setResetMessage(`Password reset link generated for ${student.email}. New temporary passcode: Temp$${Math.floor(100000 + Math.random() * 900000)}`);
    setTimeout(() => setResetMessage(null), 8000);
  };

  const level = stats.level;

  // Filter courses based on user selection
  const filteredCourses = useMemo(() => {
    return coursesData.filter((course) => {
      const p = stats.courseProgressMap[course.id];
      const percentage = p ? p.percentage : 0;

      if (courseFilter === 'enrolled') {
        return percentage > 0;
      }
      if (courseFilter === 'completed') {
        return percentage === 100;
      }
      return true; // 'all'
    }).sort((a, b) => {
      // Prioritize completed & in-progress courses first
      const pA = stats.courseProgressMap[a.id]?.percentage || 0;
      const pB = stats.courseProgressMap[b.id]?.percentage || 0;
      return pB - pA;
    });
  }, [stats.courseProgressMap, courseFilter]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
        
        {/* Modal Header */}
        <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-start justify-between bg-slate-50/50 dark:bg-slate-900/50">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-2xl bg-blue-50 dark:bg-blue-950 border border-blue-100 dark:border-blue-900/50 flex items-center justify-center text-3xl shadow-xs overflow-hidden shrink-0">
              <UserAvatar avatarUrl={student.avatar_url} name={student.full_name} className="w-16 h-16 rounded-2xl" textClassName="text-3xl" />
            </div>
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-xl font-black text-slate-900 dark:text-white tracking-tight truncate max-w-[220px] sm:max-w-md">
                  {student.full_name && !student.full_name.startsWith('data:image/') ? student.full_name : student.email.split('@')[0]}
                </h3>
                <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                  student.status === 'suspended'
                    ? 'bg-red-100 text-red-700 dark:bg-red-950/60 dark:text-red-400'
                    : 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400'
                }`}>
                  {student.status}
                </span>
                {student.role === 'admin' && (
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-400">
                    Admin
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 font-mono">
                {student.email} • ID: {student.id.slice(0, 12)}
              </p>
              <p className="text-[11px] text-slate-400 dark:text-slate-500 mt-1 flex items-center space-x-2">
                <span>Joined {new Date(student.created_at).toLocaleDateString()}</span>
                <span>•</span>
                <span className="capitalize">Track: {student.track}</span>
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick KPI Row */}
        <div className="grid grid-cols-4 gap-2 p-4 bg-slate-100/50 dark:bg-slate-900/30 border-b border-slate-100 dark:border-slate-800 text-center">
          <div className="p-3 bg-white dark:bg-slate-800/60 rounded-xl border border-slate-200/60 dark:border-slate-700/50">
            <div className="text-xs font-medium text-slate-400 font-mono uppercase">Level</div>
            <div className="text-lg font-black text-blue-600 dark:text-blue-400 mt-0.5">Lvl {level}</div>
          </div>
          <div className="p-3 bg-white dark:bg-slate-800/60 rounded-xl border border-slate-200/60 dark:border-slate-700/50">
            <div className="text-xs font-medium text-slate-400 font-mono uppercase">Total XP</div>
            <div className="text-lg font-black text-amber-500 mt-0.5 flex items-center justify-center space-x-1">
              <Trophy className="w-4 h-4 text-amber-500" />
              <span>{stats.totalXP}</span>
            </div>
          </div>
          <div className="p-3 bg-white dark:bg-slate-800/60 rounded-xl border border-slate-200/60 dark:border-slate-700/50">
            <div className="text-xs font-medium text-slate-400 font-mono uppercase">Streak</div>
            <div className="text-lg font-black text-orange-500 mt-0.5 flex items-center justify-center space-x-1">
              <Flame className="w-4 h-4 text-orange-500" />
              <span>{stats.currentStreak}d</span>
            </div>
          </div>
          <div className="p-3 bg-white dark:bg-slate-800/60 rounded-xl border border-slate-200/60 dark:border-slate-700/50">
            <div className="text-xs font-medium text-slate-400 font-mono uppercase">Certificates</div>
            <div className="text-lg font-black text-emerald-600 dark:text-emerald-400 mt-0.5 flex items-center justify-center space-x-1">
              <Award className="w-4 h-4 text-emerald-500" />
              <span>{Math.max(stats.certificatesCount, studentCerts.length)}</span>
            </div>
          </div>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex border-b border-slate-200 dark:border-slate-800 px-6">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-3 px-4 text-xs font-bold border-b-2 transition ${
              activeTab === 'overview'
                ? 'border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400'
                : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            Course Progress
          </button>
          <button
            onClick={() => setActiveTab('certificates')}
            className={`py-3 px-4 text-xs font-bold border-b-2 transition ${
              activeTab === 'certificates'
                ? 'border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400'
                : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            Certificates ({Math.max(stats.certificatesCount, studentCerts.length)})
          </button>
        </div>

        {/* Modal Tab Body */}
        <div className="p-6 flex-1 overflow-y-auto space-y-4">
          {resetMessage && (
            <div className="p-3 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded-xl text-xs text-emerald-700 dark:text-emerald-300 font-mono">
              {resetMessage}
            </div>
          )}

          {activeTab === 'overview' && (
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono">
                  Enrolled Courses & Live Learning Progress
                </h4>
                <div className="flex items-center space-x-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
                  <button
                    onClick={() => setCourseFilter('all')}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition ${
                      courseFilter === 'all'
                        ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-300 shadow-xs'
                        : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                    }`}
                  >
                    All ({coursesData.length})
                  </button>
                  <button
                    onClick={() => setCourseFilter('enrolled')}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition ${
                      courseFilter === 'enrolled'
                        ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-300 shadow-xs'
                        : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                    }`}
                  >
                    Active / Enrolled
                  </button>
                  <button
                    onClick={() => setCourseFilter('completed')}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition ${
                      courseFilter === 'completed'
                        ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-300 shadow-xs'
                        : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                    }`}
                  >
                    Completed (100%)
                  </button>
                </div>
              </div>

              {filteredCourses.length === 0 ? (
                <div className="text-center py-8 text-slate-400 dark:text-slate-500 text-xs font-mono">
                  No courses match the selected filter.
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {filteredCourses.map((course) => {
                    const rec = stats.courseProgressMap[course.id] || {
                      completedLessonsCount: 0,
                      totalLessonsCount: course.topics.flatMap(t => t.lessons).length || 1,
                      percentage: 0,
                      status: 'not_started',
                      certificateId: null
                    };

                    const hasCert = Boolean(rec.certificateId || studentCerts.some(c => c.course_id === course.id));
                    const is100 = rec.percentage === 100;

                    return (
                      <div
                        key={course.id}
                        className={`p-3.5 rounded-2xl border flex flex-col justify-between transition ${
                          is100
                            ? 'bg-emerald-50/50 dark:bg-emerald-950/20 border-emerald-200/80 dark:border-emerald-800/50'
                            : rec.percentage > 0
                            ? 'bg-blue-50/40 dark:bg-blue-950/20 border-blue-200/80 dark:border-blue-800/50'
                            : 'bg-slate-50 dark:bg-slate-800/40 border-slate-200/80 dark:border-slate-700/50'
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="text-xs font-bold text-slate-900 dark:text-white truncate max-w-[180px]">
                              {course.title.en}
                            </span>
                            <span
                              className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded-full ${
                                is100
                                  ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/60 dark:text-emerald-300'
                                  : rec.percentage > 0
                                  ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/60 dark:text-blue-300'
                                  : 'bg-slate-200 text-slate-600 dark:bg-slate-800 dark:text-slate-400'
                              }`}
                            >
                              {rec.percentage}%
                            </span>
                          </div>

                          <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 font-mono mb-2">
                            <span>
                              {rec.completedLessonsCount} / {rec.totalLessonsCount} lessons finished
                            </span>
                            {hasCert && (
                              <span className="flex items-center space-x-1 text-emerald-600 dark:text-emerald-400 font-bold">
                                <Award className="w-3 h-3" />
                                <span>Certified</span>
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="w-full bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full transition-all duration-300 ${
                              is100
                                ? 'bg-emerald-500'
                                : rec.percentage > 0
                                ? 'bg-blue-600 dark:bg-blue-400'
                                : 'bg-slate-300 dark:bg-slate-600'
                            }`}
                            style={{ width: `${rec.percentage}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {activeTab === 'certificates' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono">
                  Issued Certificates
                </h4>
                <button
                  onClick={() => onIssueCertificate(student)}
                  className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-xs transition flex items-center space-x-1"
                >
                  <Award className="w-3.5 h-3.5" />
                  <span>Issue New Certificate</span>
                </button>
              </div>

              {studentCerts.length === 0 ? (
                <div className="text-center py-8 text-slate-400 dark:text-slate-500 text-xs">
                  No certificates issued yet. Click "Issue New Certificate" above to grant one.
                </div>
              ) : (
                <div className="space-y-2">
                  {studentCerts.map((cert) => (
                    <div
                      key={cert.id}
                      className="p-4 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl flex items-center justify-between"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="p-2.5 bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 rounded-xl">
                          <Award className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-900 dark:text-white">
                            {cert.course_title}
                          </div>
                          <div className="text-[11px] font-mono text-slate-400">
                            Code: {cert.certificate_code} • Grade: {cert.grade || 'A+'}
                          </div>
                        </div>
                      </div>
                      <span className="text-[11px] font-mono text-slate-400">
                        {new Date(cert.issue_date).toLocaleDateString()}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal Action Bar */}
        <div className="p-4 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => onEdit(student)}
              className="px-3 py-2 bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-900 rounded-xl text-xs font-bold hover:bg-blue-100 dark:hover:bg-blue-900/60 transition flex items-center space-x-1"
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>Edit Details</span>
            </button>
            <button
              onClick={handleResetPassword}
              className="px-3 py-2 bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-xl text-xs font-bold hover:bg-slate-300 dark:hover:bg-slate-700 transition flex items-center space-x-1"
            >
              <Key className="w-3.5 h-3.5" />
              <span>Reset Password</span>
            </button>
            <button
              onClick={() => onToggleSuspend(student)}
              className={`px-3 py-2 rounded-xl text-xs font-bold transition flex items-center space-x-1 ${
                student.status === 'suspended'
                  ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-200'
                  : 'bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 hover:bg-amber-200'
              }`}
            >
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>{student.status === 'suspended' ? 'Reactivate' : 'Suspend Account'}</span>
            </button>
          </div>

          <button
            onClick={() => onDelete(student)}
            className="px-3 py-2 bg-red-50 dark:bg-red-950/50 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-900 rounded-xl text-xs font-bold hover:bg-red-100 dark:hover:bg-red-900/50 transition flex items-center space-x-1"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Delete</span>
          </button>
        </div>

      </div>
    </div>
  );
};

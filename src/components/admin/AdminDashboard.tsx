import React, { useState, useEffect, useMemo } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useApp } from '../../context/AppContext';
import { AdminStudent, AdminCertificate, AdminActivityLog, AdminNotification } from '../../types';
import { 
  fetchAllStudentsFromSupabase, 
  updateAdminStudentInSupabase, 
  toggleSuspendStudentInSupabase, 
  deleteStudentFromSupabase,
  fetchCertificatesFromSupabase,
  issueCertificateInSupabase,
  fetchActivityLogsFromSupabase,
  subscribeToAllAdminRealtime
} from '../../services/adminSupabaseService';
import { isSupabaseConfigured } from '../../lib/supabase';
import { AdminLoginGate } from './AdminLoginGate';
import { StudentProfileModal } from './StudentProfileModal';
import { StudentEditModal } from './StudentEditModal';
import { CertificateIssuerModal } from './CertificateIssuerModal';
import { coursesData } from '../../data/coursesData';
import { UserAvatar } from '../UserAvatar';
import { 
  Users, UserCheck, Flame, Trophy, Award, Search, Filter, Download, Plus, 
  RefreshCw, ShieldCheck, Activity, Bell, FileSpreadsheet, Printer, 
  ChevronLeft, ChevronRight, Eye, Edit3, Trash2, ShieldAlert, Sparkles, 
  BarChart2, PieChart, Layers, CheckCircle2, AlertCircle, Clock, Check, X,
  Key, Radio
} from 'lucide-react';
import { 
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart as RePie, Pie, Cell, AreaChart, Area 
} from 'recharts';

export function getSafeStudentName(name?: string, email?: string): string {
  if (!name) return email ? email.split('@')[0] : 'Student';
  const trimmed = name.trim();
  if (trimmed.startsWith('data:image/') || trimmed.startsWith('http://') || trimmed.startsWith('https://')) {
    return email ? email.split('@')[0] : 'Student';
  }
  return trimmed;
}

export const AdminDashboard: React.FC = () => {
  const { currentUser, logout } = useAuth();
  const { language } = useApp();

  // Admin Security Authentication Check
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState<boolean>(() => {
    const adminSession = sessionStorage.getItem('sabaycode_admin_auth');
    const isUserAdmin = currentUser?.role === 'admin' || currentUser?.email?.toLowerCase() === 'nanseyha4@gmail.com';
    return adminSession === 'true' || isUserAdmin;
  });

  // Core Data States
  const [students, setStudents] = useState<AdminStudent[]>([]);
  const [certificates, setCertificates] = useState<AdminCertificate[]>([]);
  const [activityLogs, setActivityLogs] = useState<AdminActivityLog[]>([]);
  const [loading, setLoading] = useState(true);
  const [realtimePulse, setRealtimePulse] = useState(false);
  const [realtimeCount, setRealtimeCount] = useState(0);

  // UI Active View Tabs
  const [activeTab, setActiveTab] = useState<'overview' | 'students' | 'certificates' | 'logs'>('overview');

  // Search, Filter, Sort & Pagination
  const [searchTerm, setSearchTerm] = useState('');
  const [filterTrack, setFilterTrack] = useState<string>('all');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [filterDate, setFilterDate] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'date' | 'name' | 'xp'>('date');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  // Modals State
  const [selectedStudentForView, setSelectedStudentForView] = useState<AdminStudent | null>(null);
  const [selectedStudentForEdit, setSelectedStudentForEdit] = useState<AdminStudent | null>(null);
  const [isIssuerOpen, setIsIssuerOpen] = useState(false);
  const [issueForStudent, setIssueForStudent] = useState<AdminStudent | null>(null);
  const [printableReportOpen, setPrintableReportOpen] = useState(false);

  // Realtime Toast Notifications
  const [notifications, setNotifications] = useState<AdminNotification[]>([]);

  // Load Initial Data from Supabase
  const loadDashboardData = async () => {
    setLoading(true);
    try {
      const [stdData, certData, logData] = await Promise.all([
        fetchAllStudentsFromSupabase(),
        fetchCertificatesFromSupabase(),
        fetchActivityLogsFromSupabase()
      ]);

      setStudents(stdData);
      setCertificates(certData);
      setActivityLogs(logData);
    } catch (err) {
      console.error('Error loading admin dashboard data:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAdminAuthenticated) {
      loadDashboardData();
    }
  }, [isAdminAuthenticated]);

  // Subscribe to Supabase Realtime Channels
  useEffect(() => {
    if (!isAdminAuthenticated) return;

    // 1. Subscribe to Supabase Postgres Realtime Changes
    const channel = subscribeToAllAdminRealtime((payload) => {
      setRealtimePulse(true);
      setRealtimeCount(prev => prev + 1);
      setTimeout(() => setRealtimePulse(false), 2000);

      // Reload data instantly
      loadDashboardData();

      // Push Live Toast Notification
      const newNotif: AdminNotification = {
        id: `notif_${Date.now()}`,
        title: `Realtime Update (${payload.table.toUpperCase()})`,
        message: `${payload.eventType} event on ${payload.table} by ${payload.record?.full_name || payload.record?.email || 'Student'}`,
        type: 'info',
        timestamp: new Date().toLocaleTimeString(),
        read: false
      };
      setNotifications(prev => [newNotif, ...prev.slice(0, 5)]);
    });

    // 2. Global Event Listener for instant student registration triggers
    const handleStudentRegEvent = () => {
      setRealtimePulse(true);
      setRealtimeCount(prev => prev + 1);
      setTimeout(() => setRealtimePulse(false), 2000);
      loadDashboardData();
      
      const newNotif: AdminNotification = {
        id: `notif_reg_${Date.now()}`,
        title: '🎉 New Student Registered!',
        message: 'A new student account was just saved to Supabase Postgres database.',
        type: 'success',
        timestamp: new Date().toLocaleTimeString(),
        read: false
      };
      setNotifications(prev => [newNotif, ...prev.slice(0, 5)]);
    };

    window.addEventListener('sabaicode-user-registered', handleStudentRegEvent);

    return () => {
      if (channel) channel.unsubscribe();
      window.removeEventListener('sabaicode-user-registered', handleStudentRegEvent);
    };
  }, [isAdminAuthenticated]);

  // Derived Analytics Metrics
  const metrics = useMemo(() => {
    const totalStudents = students.length;
    const now = new Date();
    const todayStr = now.toISOString().split('T')[0];

    const newToday = students.filter(s => s.created_at?.startsWith(todayStr)).length;
    const activeStudents = students.filter(s => s.status === 'active').length;
    const totalXp = students.reduce((acc, s) => acc + (s.xp || 0), 0);
    const totalCerts = certificates.length;

    return {
      totalStudents,
      newToday,
      activeStudents,
      totalXp,
      totalCerts,
      avgXp: totalStudents > 0 ? Math.round(totalXp / totalStudents) : 0
    };
  }, [students, certificates]);

  // Chart Data Preparation
  const chartData = useMemo(() => {
    // 1. Daily Registrations (Last 7 Days)
    const daysMap: Record<string, number> = {};
    for (let i = 6; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      const label = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
      daysMap[label] = 0;
    }

    students.forEach(s => {
      if (s.created_at) {
        const d = new Date(s.created_at);
        const label = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        if (daysMap[label] !== undefined) {
          daysMap[label] += 1;
        }
      }
    });

    const dailyRegistrations = Object.entries(daysMap).map(([day, count]) => ({ day, count }));

    // 2. Track Distribution
    const trackCounts: Record<string, number> = {};
    students.forEach(s => {
      const t = s.track || 'foundation';
      trackCounts[t] = (trackCounts[t] || 0) + 1;
    });

    const trackDistribution = Object.entries(trackCounts).map(([name, value]) => ({ name: name.toUpperCase(), value }));

    // 3. XP Tier Breakdown
    const xpTiers = [
      { name: 'Beginner (0-200 XP)', count: students.filter(s => (s.xp || 0) < 200).length },
      { name: 'Intermediate (200-500 XP)', count: students.filter(s => (s.xp || 0) >= 200 && (s.xp || 0) < 500).length },
      { name: 'Advanced (500+ XP)', count: students.filter(s => (s.xp || 0) >= 500).length },
    ];

    return {
      dailyRegistrations,
      trackDistribution,
      xpTiers
    };
  }, [students]);

  // Filtered & Sorted Student Directory List
  const filteredStudents = useMemo(() => {
    return students
      .filter(student => {
        // Search Term
        const searchLower = searchTerm.toLowerCase();
        const matchesSearch = 
          !searchTerm ||
          student.full_name.toLowerCase().includes(searchLower) ||
          student.email.toLowerCase().includes(searchLower) ||
          (student.phone && student.phone.includes(searchLower)) ||
          student.id.toLowerCase().includes(searchLower);

        // Filter Track
        const matchesTrack = filterTrack === 'all' || student.track === filterTrack;

        // Filter Status
        const matchesStatus = filterStatus === 'all' || student.status === filterStatus;

        return matchesSearch && matchesTrack && matchesStatus;
      })
      .sort((a, b) => {
        if (sortBy === 'name') {
          return sortOrder === 'asc' 
            ? a.full_name.localeCompare(b.full_name) 
            : b.full_name.localeCompare(a.full_name);
        }
        if (sortBy === 'xp') {
          return sortOrder === 'asc' ? a.xp - b.xp : b.xp - a.xp;
        }
        // Date
        return sortOrder === 'asc'
          ? new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
          : new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
      });
  }, [students, searchTerm, filterTrack, filterStatus, sortBy, sortOrder]);

  // Paginated Student Items
  const totalPages = Math.ceil(filteredStudents.length / pageSize) || 1;
  const paginatedStudents = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filteredStudents.slice(start, start + pageSize);
  }, [filteredStudents, currentPage, pageSize]);

  // Student Actions Handlers
  const handleToggleSuspend = async (student: AdminStudent) => {
    const res = await toggleSuspendStudentInSupabase(
      student.id, 
      student.status, 
      student.full_name, 
      currentUser?.email || 'nanseyha4@gmail.com'
    );
    if (res.success) {
      loadDashboardData();
    }
  };

  const handleDeleteStudent = async (student: AdminStudent) => {
    if (window.confirm(`Are you sure you want to permanently delete student ${student.full_name}? This will remove the record from Supabase Postgres.`)) {
      const res = await deleteStudentFromSupabase(
        student.id, 
        student.full_name, 
        currentUser?.email || 'nanseyha4@gmail.com'
      );
      if (res.success) {
        if (selectedStudentForView?.id === student.id) setSelectedStudentForView(null);
        loadDashboardData();
      }
    }
  };

  const handleSaveStudentEdit = async (updates: Partial<AdminStudent>) => {
    if (!selectedStudentForEdit) return;
    const res = await updateAdminStudentInSupabase(
      selectedStudentForEdit.id,
      updates,
      currentUser?.email || 'nanseyha4@gmail.com'
    );
    if (res.success) {
      setSelectedStudentForEdit(null);
      loadDashboardData();
    }
  };

  const handleIssueCertificate = async (certData: any) => {
    await issueCertificateInSupabase(certData, currentUser?.email || 'nanseyha4@gmail.com');
    setIsIssuerOpen(false);
    setIssueForStudent(null);
    loadDashboardData();
  };

  // Export CSV Handler
  const handleExportCSV = () => {
    const headers = ['ID', 'Full Name', 'Email', 'Phone', 'Track', 'XP', 'Status', 'Registered Date'];
    const rows = filteredStudents.map(s => [
      s.id,
      `"${s.full_name}"`,
      s.email,
      s.phone || '',
      s.track,
      s.xp,
      s.status,
      new Date(s.created_at).toLocaleDateString()
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `SabayCode_Students_Report_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!isAdminAuthenticated) {
    return <AdminLoginGate onSuccess={() => setIsAdminAuthenticated(true)} />;
  }

  const COLORS = ['#2563eb', '#10b981', '#f59e0b', '#ec4899', '#8b5cf6'];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-200">
      
      {/* Top Admin Sticky Header */}
      <header className="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 border-b border-slate-200/80 dark:border-slate-800 backdrop-blur-md px-4 sm:px-6 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-blue-600 text-white rounded-xl shadow-md">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h1 className="text-base font-black tracking-tight text-slate-900 dark:text-white">
                SabayCode Admin Console
              </h1>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-400 border border-blue-200/60 dark:border-blue-900/50">
                PROD
              </span>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center space-x-1.5 font-mono">
              <span className={`w-2 h-2 rounded-full ${isSupabaseConfigured ? 'bg-emerald-500' : 'bg-amber-500'} ${realtimePulse ? 'animate-ping' : ''}`} />
              <span>{isSupabaseConfigured ? 'Supabase Realtime Active' : 'Supabase Local Storage Mode'}</span>
              {realtimeCount > 0 && <span className="text-blue-500">({realtimeCount} syncs)</span>}
            </p>
          </div>
        </div>

        {/* Top Header Actions */}
        <div className="flex items-center space-x-2">
          <button
            onClick={loadDashboardData}
            className="p-2 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-blue-600 rounded-xl text-xs font-bold transition flex items-center space-x-1"
            title="Refresh Supabase Data"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
          </button>

          <button
            onClick={() => setPrintableReportOpen(true)}
            className="px-3 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl text-xs font-bold transition flex items-center space-x-1.5"
          >
            <Printer className="w-4 h-4 text-slate-500" />
            <span className="hidden sm:inline">Print Report</span>
          </button>

          <button
            onClick={() => {
              sessionStorage.removeItem('sabaycode_admin_auth');
              setIsAdminAuthenticated(false);
            }}
            className="px-3 py-2 bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400 border border-red-200/80 dark:border-red-900/50 rounded-xl text-xs font-bold hover:bg-red-100 dark:hover:bg-red-900/50 transition flex items-center space-x-1"
          >
            <X className="w-4 h-4" />
            <span className="hidden sm:inline">Exit Console</span>
          </button>
        </div>
      </header>

      {/* Floating Realtime Toasts */}
      {notifications.length > 0 && (
        <div className="fixed top-16 right-4 z-50 max-w-sm w-full space-y-2 pointer-events-none">
          {notifications.slice(0, 2).map((n) => (
            <div
              key={n.id}
              className="pointer-events-auto p-3.5 bg-slate-900/90 text-white border border-slate-700 rounded-2xl shadow-xl backdrop-blur-md text-xs flex items-start justify-between animate-fade-in"
            >
              <div className="flex items-start space-x-2.5">
                <div className="p-1.5 bg-blue-500/20 text-blue-400 rounded-lg mt-0.5">
                  <Radio className="w-4 h-4 animate-pulse" />
                </div>
                <div>
                  <div className="font-bold text-slate-100">{n.title}</div>
                  <div className="text-[11px] text-slate-300 mt-0.5">{n.message}</div>
                  <div className="text-[10px] text-slate-400 mt-1 font-mono">{n.timestamp}</div>
                </div>
              </div>
              <button
                onClick={() => setNotifications(prev => prev.filter(item => item.id !== n.id))}
                className="text-slate-400 hover:text-white p-1"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Main Dashboard Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex-1 w-full space-y-6">

        {/* Tab Navigation Controls */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 dark:border-slate-800 pb-2 overflow-x-auto">
          <nav className="flex items-center space-x-1 sm:space-x-2 overflow-x-auto max-w-full pb-1 shrink-0">
            <button
              onClick={() => setActiveTab('overview')}
              className={`py-2 px-3 sm:py-2.5 sm:px-4 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 sm:space-x-2 shrink-0 whitespace-nowrap ${
                activeTab === 'overview'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <BarChart2 className="w-4 h-4" />
              <span>Overview & Analytics</span>
            </button>
            <button
              onClick={() => setActiveTab('students')}
              className={`py-2 px-3 sm:py-2.5 sm:px-4 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 sm:space-x-2 shrink-0 whitespace-nowrap ${
                activeTab === 'students'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>Students Directory ({filteredStudents.length})</span>
            </button>
            <button
              onClick={() => setActiveTab('certificates')}
              className={`py-2 px-3 sm:py-2.5 sm:px-4 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 sm:space-x-2 shrink-0 whitespace-nowrap ${
                activeTab === 'certificates'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <Award className="w-4 h-4" />
              <span>Certificates ({certificates.length})</span>
            </button>
            <button
              onClick={() => setActiveTab('logs')}
              className={`py-2 px-3 sm:py-2.5 sm:px-4 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 sm:space-x-2 shrink-0 whitespace-nowrap ${
                activeTab === 'logs'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <Activity className="w-4 h-4" />
              <span>Activity Logs</span>
            </button>
          </nav>

          <button
            onClick={() => setIsIssuerOpen(true)}
            className="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl shadow-md transition flex items-center space-x-1.5 shrink-0"
          >
            <Award className="w-4 h-4" />
            <span>Issue Certificate</span>
          </button>
        </div>

        {/* ----------------- TAB 1: OVERVIEW & ANALYTICS ----------------- */}
        {activeTab === 'overview' && (
          <div className="space-y-6 animate-fade-in">
            {/* Top Stat Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-5 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl shadow-xs relative overflow-hidden">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono">Total Students</p>
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-1">{metrics.totalStudents}</h3>
                    <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-bold mt-1">
                      +{metrics.newToday} registered today
                    </p>
                  </div>
                  <div className="p-3 bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 rounded-xl border border-blue-100 dark:border-blue-900/50">
                    <Users className="w-6 h-6" />
                  </div>
                </div>
              </div>

              <div className="p-5 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl shadow-xs relative overflow-hidden">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono">Active Accounts</p>
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-1">{metrics.activeStudents}</h3>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                      {Math.round((metrics.activeStudents / (metrics.totalStudents || 1)) * 100)}% of userbase
                    </p>
                  </div>
                  <div className="p-3 bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 rounded-xl border border-emerald-100 dark:border-emerald-900/50">
                    <UserCheck className="w-6 h-6" />
                  </div>
                </div>
              </div>

              <div className="p-5 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl shadow-xs relative overflow-hidden">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono">Total XP Earned</p>
                    <h3 className="text-2xl font-black text-amber-500 mt-1">{metrics.totalXp}</h3>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                      Avg {metrics.avgXp} XP per student
                    </p>
                  </div>
                  <div className="p-3 bg-amber-50 dark:bg-amber-950 text-amber-600 dark:text-amber-400 rounded-xl border border-amber-100 dark:border-amber-900/50">
                    <Trophy className="w-6 h-6" />
                  </div>
                </div>
              </div>

              <div className="p-5 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl shadow-xs relative overflow-hidden">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono">Certificates Issued</p>
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-1">{metrics.totalCerts}</h3>
                    <p className="text-[11px] text-blue-600 dark:text-blue-400 font-bold mt-1">
                      Verified on Supabase
                    </p>
                  </div>
                  <div className="p-3 bg-purple-50 dark:bg-purple-950 text-purple-600 dark:text-purple-400 rounded-xl border border-purple-100 dark:border-purple-900/50">
                    <Award className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </div>

            {/* Real-time Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Daily Registrations Chart */}
              <div className="lg:col-span-2 p-6 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl shadow-xs">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">
                      Daily Student Registrations
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Live enrollment velocity over the past 7 days
                    </p>
                  </div>
                  <span className="text-[11px] font-mono font-bold text-blue-500 bg-blue-50 dark:bg-blue-950 px-2.5 py-1 rounded-full border border-blue-100 dark:border-blue-900">
                    Realtime Feed
                  </span>
                </div>
                <div className="h-64 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartData.dailyRegistrations}>
                      <XAxis dataKey="day" stroke="#94a3b8" fontSize={11} tickLine={false} />
                      <YAxis stroke="#94a3b8" fontSize={11} tickLine={false} allowDecimals={false} />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#0f172a', 
                          borderColor: '#334155', 
                          borderRadius: '12px',
                          color: '#fff',
                          fontSize: '12px'
                        }} 
                      />
                      <Bar dataKey="count" fill="#2563eb" radius={[8, 8, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* XP Distribution Donut Chart */}
              <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl shadow-xs flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                    Track Distribution
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
                    Student count by learning track
                  </p>
                  <div className="h-48 w-full flex items-center justify-center">
                    <ResponsiveContainer width="100%" height="100%">
                      <RePie>
                        <Pie
                          data={chartData.trackDistribution}
                          cx="50%"
                          cy="50%"
                          innerRadius={45}
                          outerRadius={75}
                          paddingAngle={5}
                          dataKey="value"
                        >
                          {chartData.trackDistribution.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </RePie>
                    </ResponsiveContainer>
                  </div>
                </div>
                <div className="space-y-1.5 pt-4 border-t border-slate-100 dark:border-slate-800">
                  {chartData.trackDistribution.map((t, idx) => (
                    <div key={t.name} className="flex items-center justify-between text-xs">
                      <span className="flex items-center space-x-2">
                        <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: COLORS[idx % COLORS.length] }} />
                        <span className="text-slate-600 dark:text-slate-400 font-mono">{t.name}</span>
                      </span>
                      <span className="font-bold text-slate-900 dark:text-white">{t.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Top Active Leaderboard */}
            <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl shadow-xs">
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4">
                Top Student Leaderboard
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {students
                  .slice()
                  .sort((a, b) => (b.xp || 0) - (a.xp || 0))
                  .slice(0, 6)
                  .map((student, rank) => (
                    <div
                      key={student.id ? `${student.id}-leaderboard-${rank}` : `leaderboard-${rank}`}
                      onClick={() => setSelectedStudentForView(student)}
                      className="p-4 bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-700/50 rounded-2xl hover:border-blue-500 cursor-pointer transition flex items-center justify-between"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-7 h-7 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-400 font-black text-xs flex items-center justify-center shrink-0">
                          #{rank + 1}
                        </div>
                        <div className="w-8 h-8 rounded-full overflow-hidden shrink-0 flex items-center justify-center">
                          <UserAvatar avatarUrl={student.avatar_url} name={student.full_name} className="w-8 h-8 rounded-full" textClassName="text-xl" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="font-bold text-xs text-slate-900 dark:text-white truncate max-w-[140px] sm:max-w-xs">
                            {getSafeStudentName(student.full_name, student.email)}
                          </div>
                          <div className="text-[11px] text-slate-400 font-mono truncate max-w-[140px] sm:max-w-xs">
                            {student.email}
                          </div>
                        </div>
                      </div>
                      <div className="text-right shrink-0">
                        <div className="text-xs font-black text-amber-500 flex items-center space-x-0.5">
                          <Trophy className="w-3.5 h-3.5" />
                          <span>{student.xp} XP</span>
                        </div>
                        <div className="text-[10px] text-slate-400 font-mono">
                          Lvl {Math.floor(student.xp / 100) + 1}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}

        {/* ----------------- TAB 2: STUDENTS DIRECTORY ----------------- */}
        {activeTab === 'students' && (
          <div className="space-y-4 animate-fade-in">
            {/* Search, Filter & Export Bar */}
            <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl shadow-xs flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2 flex-1 min-w-[280px]">
                {/* Search Input */}
                <div className="relative flex-1 min-w-[200px]">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => {
                      setSearchTerm(e.target.value);
                      setCurrentPage(1);
                    }}
                    placeholder="Search by name, email, or phone..."
                    className="w-full pl-9 pr-4 py-2 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 dark:text-white"
                  />
                </div>

                {/* Track Filter */}
                <select
                  value={filterTrack}
                  onChange={(e) => {
                    setFilterTrack(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="px-3 py-2 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 dark:text-white capitalize"
                >
                  <option value="all">All Tracks</option>
                  <option value="foundation">Foundation</option>
                  <option value="programming">Programming</option>
                  <option value="framework">Frameworks</option>
                  <option value="database">Database</option>
                </select>

                {/* Status Filter */}
                <select
                  value={filterStatus}
                  onChange={(e) => {
                    setFilterStatus(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="px-3 py-2 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 dark:text-white capitalize"
                >
                  <option value="all">All Statuses</option>
                  <option value="active">Active Only</option>
                  <option value="suspended">Suspended Only</option>
                </select>
              </div>

              {/* CSV Export Button */}
              <button
                onClick={handleExportCSV}
                className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-bold rounded-xl transition flex items-center space-x-1.5"
              >
                <Download className="w-4 h-4" />
                <span>Export CSV</span>
              </button>
            </div>

            {/* Students Data Table */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl shadow-xs overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 text-[11px] font-bold uppercase font-mono text-slate-400">
                    <th className="py-3 px-4">Student</th>
                    <th className="py-3 px-4">Phone</th>
                    <th className="py-3 px-4">Track</th>
                    <th className="py-3 px-4">XP / Level</th>
                    <th className="py-3 px-4">Status</th>
                    <th className="py-3 px-4">Joined</th>
                    <th className="py-3 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-xs">
                  {paginatedStudents.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="py-12 text-center text-slate-400 dark:text-slate-500 font-sans">
                        No students found matching your filters.
                      </td>
                    </tr>
                  ) : (
                    paginatedStudents.map((student, idx) => {
                      const lvl = Math.floor(student.xp / 100) + 1;
                      return (
                        <tr key={student.id ? `${student.id}-dir-${idx}` : `dir-${idx}`} className="hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition">
                          <td className="py-3 px-4">
                            <div className="flex items-center space-x-3">
                              <div className="w-8 h-8 rounded-full overflow-hidden shrink-0 flex items-center justify-center">
                                <UserAvatar avatarUrl={student.avatar_url} name={getSafeStudentName(student.full_name, student.email)} className="w-8 h-8 rounded-full" textClassName="text-lg" />
                              </div>
                              <div className="min-w-0 max-w-[160px] sm:max-w-xs">
                                <div className="font-bold text-slate-900 dark:text-white flex items-center space-x-1.5 truncate">
                                  <span className="truncate">{getSafeStudentName(student.full_name, student.email)}</span>
                                  {student.role === 'admin' && (
                                    <span className="px-1.5 py-0.2 rounded text-[9px] bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-400 font-mono shrink-0">
                                      ADMIN
                                    </span>
                                  )}
                                </div>
                                <div className="text-[11px] text-slate-400 font-mono truncate">
                                  {student.email}
                                </div>
                              </div>
                            </div>
                          </td>

                          <td className="py-3 px-4 font-mono text-slate-600 dark:text-slate-400">
                            {student.phone || '—'}
                          </td>

                          <td className="py-3 px-4 capitalize font-medium text-slate-700 dark:text-slate-300">
                            {student.track}
                          </td>

                          <td className="py-3 px-4">
                            <div className="font-bold text-amber-500 flex items-center space-x-1">
                              <Trophy className="w-3.5 h-3.5" />
                              <span>{student.xp} XP</span>
                            </div>
                            <div className="text-[10px] text-slate-400 font-mono">
                              Level {lvl}
                            </div>
                          </td>

                          <td className="py-3 px-4">
                            <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                              student.status === 'suspended'
                                ? 'bg-red-100 text-red-700 dark:bg-red-950/60 dark:text-red-400'
                                : 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400'
                            }`}>
                              {student.status}
                            </span>
                          </td>

                          <td className="py-3 px-4 font-mono text-slate-400">
                            {new Date(student.created_at).toLocaleDateString()}
                          </td>

                          <td className="py-3 px-4 text-right space-x-1">
                            <button
                              onClick={() => setSelectedStudentForView(student)}
                              className="p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-500 hover:text-blue-600 transition"
                              title="View Student Profile"
                            >
                              <Eye className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => setSelectedStudentForEdit(student)}
                              className="p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-500 hover:text-blue-600 transition"
                              title="Edit Record"
                            >
                              <Edit3 className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => {
                                setIssueForStudent(student);
                                setIsIssuerOpen(true);
                              }}
                              className="p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-500 hover:text-emerald-600 transition"
                              title="Issue Certificate"
                            >
                              <Award className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleToggleSuspend(student)}
                              className="p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-500 hover:text-amber-600 transition"
                              title="Suspend/Reactivate"
                            >
                              <ShieldAlert className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleDeleteStudent(student)}
                              className="p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-500 hover:text-red-600 transition"
                              title="Delete Record"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>

              {/* Table Pagination Controls */}
              <div className="p-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 font-mono">
                <div>
                  Showing {Math.min(filteredStudents.length, (currentPage - 1) * pageSize + 1)} to {Math.min(filteredStudents.length, currentPage * pageSize)} of {filteredStudents.length} students
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                    className="p-1.5 bg-slate-100 dark:bg-slate-800 rounded-lg disabled:opacity-40 transition"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <span>Page {currentPage} of {totalPages}</span>
                  <button
                    disabled={currentPage >= totalPages}
                    onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                    className="p-1.5 bg-slate-100 dark:bg-slate-800 rounded-lg disabled:opacity-40 transition"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ----------------- TAB 3: CERTIFICATES MANAGEMENT ----------------- */}
        {activeTab === 'certificates' && (
          <div className="space-y-4 animate-fade-in">
            <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl shadow-xs p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    Issued Certificates Registry
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Real-time authenticated certificates stored in Supabase
                  </p>
                </div>
                <button
                  onClick={() => setIsIssuerOpen(true)}
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl shadow-md transition flex items-center space-x-1.5"
                >
                  <Award className="w-4 h-4" />
                  <span>Issue New Certificate</span>
                </button>
              </div>

              {certificates.length === 0 ? (
                <div className="text-center py-12 text-slate-400 dark:text-slate-500 text-xs">
                  No certificates issued yet. Click "Issue New Certificate" above to generate one.
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {certificates.map((cert, idx) => (
                    <div
                      key={cert.id ? `${cert.id}-${idx}` : `cert-${idx}`}
                      className="p-5 bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-700/50 rounded-2xl flex flex-col justify-between space-y-3"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="p-3 bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 rounded-xl">
                            <Award className="w-6 h-6" />
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                              {cert.course_title}
                            </h4>
                            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                              {cert.student_name} ({cert.student_email})
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200/60 dark:border-slate-800 flex items-center justify-between text-xs font-mono">
                        <span className="text-slate-400">Code: <strong className="text-blue-600 dark:text-blue-400">{cert.certificate_code}</strong></span>
                        <span className="text-emerald-600 dark:text-emerald-400 font-bold">{cert.grade || 'Excellence'}</span>
                      </div>

                      <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-1">
                        <span>Issued: {new Date(cert.issue_date).toLocaleDateString()}</span>
                        <span className="text-emerald-500 font-bold flex items-center space-x-1">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Supabase Verified</span>
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* ----------------- TAB 4: ACTIVITY AUDIT LOGS ----------------- */}
        {activeTab === 'logs' && (
          <div className="space-y-4 animate-fade-in">
            <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl shadow-xs p-6">
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                Real-Time System & Security Logs
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
                Live audit log of all student registrations, profile updates, and admin operations
              </p>

              <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2">
                {activityLogs.map((log, idx) => (
                  <div
                    key={log.id ? `${log.id}-${idx}` : `log-${idx}`}
                    className="p-3.5 bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-700/50 rounded-xl flex items-center justify-between text-xs"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 rounded-lg">
                        <Activity className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 dark:text-white">
                          {log.action}
                        </div>
                        <div className="text-[11px] text-slate-400 font-mono">
                          By: {log.user_name || log.user_email}
                        </div>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono text-slate-400 shrink-0">
                      {new Date(log.created_at).toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Modals */}
      {selectedStudentForView && (
        <StudentProfileModal
          student={selectedStudentForView}
          certificates={certificates}
          onClose={() => setSelectedStudentForView(null)}
          onEdit={(s) => {
            setSelectedStudentForView(null);
            setSelectedStudentForEdit(s);
          }}
          onToggleSuspend={handleToggleSuspend}
          onDelete={handleDeleteStudent}
          onIssueCertificate={(s) => {
            setSelectedStudentForView(null);
            setIssueForStudent(s);
            setIsIssuerOpen(true);
          }}
        />
      )}

      {selectedStudentForEdit && (
        <StudentEditModal
          student={selectedStudentForEdit}
          onClose={() => setSelectedStudentForEdit(null)}
          onSave={handleSaveStudentEdit}
        />
      )}

      {isIssuerOpen && (
        <CertificateIssuerModal
          students={students}
          initialStudent={issueForStudent}
          onClose={() => {
            setIsIssuerOpen(false);
            setIssueForStudent(null);
          }}
          onIssue={handleIssueCertificate}
        />
      )}

      {/* Executive Printable Summary Report Modal */}
      {printableReportOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
          <div className="bg-white text-slate-900 rounded-3xl max-w-3xl w-full p-8 space-y-6 shadow-2xl max-h-[90vh] overflow-y-auto font-sans">
            <div className="flex items-center justify-between border-b pb-4">
              <div>
                <h2 className="text-xl font-black text-slate-900">SabayCode Executive Platform Summary</h2>
                <p className="text-xs text-slate-500 font-mono">Generated: {new Date().toLocaleString()}</p>
              </div>
              <button
                onClick={() => setPrintableReportOpen(false)}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-4 gap-4 text-center">
              <div className="p-3 bg-slate-50 rounded-xl border">
                <div className="text-xs font-mono text-slate-500">Total Students</div>
                <div className="text-lg font-bold">{metrics.totalStudents}</div>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border">
                <div className="text-xs font-mono text-slate-500">New Today</div>
                <div className="text-lg font-bold text-emerald-600">+{metrics.newToday}</div>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border">
                <div className="text-xs font-mono text-slate-500">Total XP</div>
                <div className="text-lg font-bold text-amber-500">{metrics.totalXp}</div>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border">
                <div className="text-xs font-mono text-slate-500">Certificates</div>
                <div className="text-lg font-bold text-blue-600">{metrics.totalCerts}</div>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-bold text-slate-500 uppercase font-mono">Student Directory Snapshot</h4>
              <div className="border rounded-xl overflow-hidden">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-100 font-bold font-mono text-slate-500">
                    <tr>
                      <th className="p-2">Name</th>
                      <th className="p-2">Email</th>
                      <th className="p-2">Track</th>
                      <th className="p-2">XP</th>
                      <th className="p-2">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {students.slice(0, 15).map((s, idx) => (
                      <tr key={s.id ? `${s.id}-report-${idx}` : `report-${idx}`}>
                        <td className="p-2 font-bold">{s.full_name}</td>
                        <td className="p-2 font-mono text-slate-600">{s.email}</td>
                        <td className="p-2 capitalize">{s.track}</td>
                        <td className="p-2 font-mono font-bold text-amber-600">{s.xp}</td>
                        <td className="p-2 capitalize font-bold">{s.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="pt-4 flex justify-end space-x-2">
              <button
                onClick={() => window.print()}
                className="px-5 py-2.5 bg-blue-600 text-white font-bold text-xs rounded-xl shadow-md flex items-center space-x-2"
              >
                <Printer className="w-4 h-4" />
                <span>Print Document</span>
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

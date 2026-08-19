import React, { useState } from 'react';
import { AdminStudent, AdminCertificate } from '../../types';
import { X, Award, CheckCircle, Sparkles } from 'lucide-react';
import { coursesData } from '../../data/coursesData';

interface CertificateIssuerModalProps {
  students: AdminStudent[];
  initialStudent?: AdminStudent | null;
  onClose: () => void;
  onIssue: (certData: Omit<AdminCertificate, 'id' | 'issue_date' | 'certificate_code'>) => void;
}

export const CertificateIssuerModal: React.FC<CertificateIssuerModalProps> = ({
  students,
  initialStudent,
  onClose,
  onIssue,
}) => {
  const [selectedStudentId, setSelectedStudentId] = useState(
    initialStudent?.id || (students[0]?.id || '')
  );
  const [selectedCourseId, setSelectedCourseId] = useState(coursesData[0]?.id || 'html');
  const [grade, setGrade] = useState('High Distinction (A+)');

  const selectedStudent = students.find(s => s.id === selectedStudentId) || initialStudent;
  const selectedCourse = coursesData.find(c => c.id === selectedCourseId) || coursesData[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedStudent || !selectedCourse) return;

    onIssue({
      student_id: selectedStudent.id,
      student_name: selectedStudent.full_name,
      student_email: selectedStudent.email,
      course_id: selectedCourse.id,
      course_title: selectedCourse.title.en,
      grade
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-md w-full flex flex-col shadow-2xl overflow-hidden">
        
        <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 rounded-xl">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-black text-slate-900 dark:text-white tracking-tight">
                Issue Official Certificate
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Grant authenticated certificate in Supabase
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

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
              Select Recipient Student
            </label>
            <select
              value={selectedStudentId}
              onChange={(e) => setSelectedStudentId(e.target.value)}
              className="w-full px-3.5 py-2.5 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/50 dark:text-white"
            >
              {students.map((s, idx) => (
                <option key={s.id ? `${s.id}-${idx}` : `option-std-${idx}`} value={s.id}>
                  {s.full_name} ({s.email})
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
              Course / Curriculum Title
            </label>
            <select
              value={selectedCourseId}
              onChange={(e) => setSelectedCourseId(e.target.value)}
              className="w-full px-3.5 py-2.5 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/50 dark:text-white"
            >
              {coursesData.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.title.en} ({c.category.toUpperCase()})
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
              Achievement Grade
            </label>
            <select
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
              className="w-full px-3.5 py-2.5 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/50 dark:text-white"
            >
              <option value="High Distinction (A+)">High Distinction (A+)</option>
              <option value="Distinction (A)">Distinction (A)</option>
              <option value="Merit (B+)">Merit (B+)</option>
              <option value="Pass with Honors">Pass with Honors</option>
            </select>
          </div>

          <div className="pt-4 flex items-center justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 text-xs font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl shadow-md transition flex items-center space-x-1.5"
            >
              <Award className="w-4 h-4" />
              <span>Issue Certificate</span>
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};

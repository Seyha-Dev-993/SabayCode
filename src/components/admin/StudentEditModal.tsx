import React, { useState, useRef } from 'react';
import { AdminStudent } from '../../types';
import { UserAvatar } from '../UserAvatar';
import { X, Save, User, Mail, Phone, Trophy, Award, Shield, Camera, Upload, Image as ImageIcon, Smile, Trash2 } from 'lucide-react';

const avatarEmojis = ["🦊", "🐼", "🦁", "🐨", "🐸", "🐙", "🧙‍♂️", "👩‍💻", "👨‍💻", "🚀", "👾", "🥑"];

interface StudentEditModalProps {
  student: AdminStudent;
  onClose: () => void;
  onSave: (updatedStudent: Partial<AdminStudent>) => void;
}

export const StudentEditModal: React.FC<StudentEditModalProps> = ({
  student,
  onClose,
  onSave,
}) => {
  const [fullName, setFullName] = useState(student.full_name);
  const [email, setEmail] = useState(student.email);
  const [phone, setPhone] = useState(student.phone || '');
  const [track, setTrack] = useState(student.track || 'foundation');
  const [xp, setXp] = useState(student.xp || 0);
  const [role, setRole] = useState(student.role || 'student');
  const [status, setStatus] = useState<'active' | 'suspended'>(student.status || 'active');
  
  const [avatarUrl, setAvatarUrl] = useState(student.avatar_url || '🦊');
  const [avatarTab, setAvatarTab] = useState<'upload' | 'url' | 'emoji'>('upload');
  const [imageUrlInput, setImageUrlInput] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      alert("Image file size exceeds 5MB limit.");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      if (typeof reader.result === 'string') {
        setAvatarUrl(reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      full_name: fullName,
      email: email.toLowerCase(),
      phone,
      track,
      xp: Number(xp),
      role,
      status,
      avatar_url: avatarUrl
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-lg w-full flex flex-col shadow-2xl overflow-hidden">
        
        <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-black text-slate-900 dark:text-white tracking-tight">
              Edit Student Record
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Update details in Supabase PostgreSQL
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[80vh] overflow-y-auto">
          {/* Avatar / Profile Image Selector */}
          <div className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/60 dark:border-slate-700/60 space-y-2">
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300">
              Student Profile Picture / Avatar
            </label>
            <div className="flex items-center space-x-3">
              <div className="w-14 h-14 rounded-2xl bg-indigo-50 dark:bg-indigo-950 border border-indigo-200 dark:border-indigo-800 flex items-center justify-center shrink-0 overflow-hidden shadow-xs">
                <UserAvatar avatarUrl={avatarUrl} name={fullName} className="w-14 h-14 rounded-2xl" textClassName="text-2xl" />
              </div>
              <div className="flex-1 space-y-1.5">
                <div className="flex flex-wrap gap-1">
                  <button
                    type="button"
                    onClick={() => setAvatarTab('upload')}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition flex items-center space-x-1 cursor-pointer ${
                      avatarTab === 'upload' ? 'bg-indigo-600 text-white' : 'bg-white dark:bg-slate-800 border text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    <Upload className="w-3 h-3" />
                    <span>Upload</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setAvatarTab('url')}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition flex items-center space-x-1 cursor-pointer ${
                      avatarTab === 'url' ? 'bg-indigo-600 text-white' : 'bg-white dark:bg-slate-800 border text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    <ImageIcon className="w-3 h-3" />
                    <span>URL</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setAvatarTab('emoji')}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition flex items-center space-x-1 cursor-pointer ${
                      avatarTab === 'emoji' ? 'bg-indigo-600 text-white' : 'bg-white dark:bg-slate-800 border text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    <Smile className="w-3 h-3" />
                    <span>Emoji</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Avatar Tab Inputs */}
            {avatarTab === 'upload' && (
              <div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="hidden"
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full py-2 px-3 border border-dashed border-slate-300 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-900 text-xs text-slate-600 dark:text-slate-300 hover:border-indigo-500 flex items-center justify-center space-x-1.5 cursor-pointer"
                >
                  <Camera className="w-3.5 h-3.5 text-indigo-500" />
                  <span>Choose Photo File (Max 5MB)</span>
                </button>
              </div>
            )}

            {avatarTab === 'url' && (
              <div className="flex gap-2">
                <input
                  type="url"
                  value={imageUrlInput}
                  onChange={(e) => setImageUrlInput(e.target.value)}
                  placeholder="https://example.com/photo.jpg"
                  className="flex-1 px-3 py-1.5 text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/50 dark:text-white"
                />
                <button
                  type="button"
                  onClick={() => { if (imageUrlInput.trim()) setAvatarUrl(imageUrlInput.trim()); }}
                  className="px-3 py-1.5 bg-indigo-600 text-white text-xs font-bold rounded-xl hover:bg-indigo-700 cursor-pointer"
                >
                  Apply
                </button>
              </div>
            )}

            {avatarTab === 'emoji' && (
              <div className="grid grid-cols-6 gap-1 bg-white dark:bg-slate-900 p-2 rounded-xl border border-slate-200 dark:border-slate-800">
                {avatarEmojis.map((emoji) => (
                  <button
                    key={emoji}
                    type="button"
                    onClick={() => setAvatarUrl(emoji)}
                    className={`text-xl p-1 rounded-lg transition hover:scale-110 cursor-pointer flex items-center justify-center ${
                      avatarUrl === emoji ? 'bg-indigo-600 text-white shadow-xs' : 'hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    {emoji}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
              Full Name
            </label>
            <input
              type="text"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full px-3.5 py-2.5 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/50 dark:text-white"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3.5 py-2.5 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/50 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                Phone
              </label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+855 12 345 678"
                className="w-full px-3.5 py-2.5 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/50 dark:text-white"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                Learning Track
              </label>
              <select
                value={track}
                onChange={(e) => setTrack(e.target.value)}
                className="w-full px-3.5 py-2.5 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/50 dark:text-white capitalize"
              >
                <option value="foundation">Foundation</option>
                <option value="programming">Programming</option>
                <option value="framework">Frameworks & Web</option>
                <option value="database">Database</option>
                <option value="mobile">Mobile Apps</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                XP Points
              </label>
              <input
                type="number"
                min="0"
                value={xp}
                onChange={(e) => setXp(Number(e.target.value))}
                className="w-full px-3.5 py-2.5 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/50 dark:text-white"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                System Role
              </label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full px-3.5 py-2.5 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/50 dark:text-white capitalize"
              >
                <option value="student">Student</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                Account Status
              </label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value as 'active' | 'suspended')}
                className="w-full px-3.5 py-2.5 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/50 dark:text-white capitalize"
              >
                <option value="active">Active</option>
                <option value="suspended">Suspended</option>
              </select>
            </div>
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
              className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl shadow-md transition flex items-center space-x-1.5"
            >
              <Save className="w-4 h-4" />
              <span>Save to Supabase</span>
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};

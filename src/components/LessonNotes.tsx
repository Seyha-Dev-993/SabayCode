import React, { useState, useEffect } from 'react';
import { Save, Check, FileText, Sparkles, Trash2 } from 'lucide-react';
import { useApp } from '../context/AppContext';

interface LessonNotesProps {
  courseId: string;
  lessonId: string;
}

export const LessonNotes: React.FC<LessonNotesProps> = ({ courseId, lessonId }) => {
  const { language } = useApp();
  const storageKey = `sabaicode-notes-${courseId}-${lessonId}`;
  
  const [note, setNote] = useState<string>('');
  const [savedStatus, setSavedStatus] = useState<boolean>(false);

  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      setNote(saved);
    } else {
      setNote('');
    }
  }, [courseId, lessonId, storageKey]);

  const handleNoteChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    setNote(text);
    localStorage.setItem(storageKey, text);
    setSavedStatus(true);
    setTimeout(() => setSavedStatus(false), 2000);
  };

  const handleClear = () => {
    if (window.confirm(language === 'en' ? "Clear your notes for this lesson?" : "តើអ្នកពិតជាចង់លុបចំណាំមេរៀននេះមែនទេ?")) {
      setNote('');
      localStorage.removeItem(storageKey);
    }
  };

  return (
    <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl shadow-sm text-left space-y-4">
      <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
        <div className="flex items-center space-x-2 text-indigo-600 dark:text-indigo-400 font-bold text-sm">
          <FileText className="w-4 h-4" />
          <span>{language === 'en' ? 'Personal Lesson Notes' : 'ចំណាំផ្ទាល់ខ្លួនសម្រាប់មេរៀននេះ'}</span>
        </div>

        <div className="flex items-center space-x-3 text-xs">
          {savedStatus ? (
            <span className="flex items-center space-x-1 text-emerald-500 font-medium font-mono text-[11px]">
              <Check className="w-3.5 h-3.5" />
              <span>Saved</span>
            </span>
          ) : (
            <span className="text-[11px] font-mono text-slate-400">Auto-saved to device</span>
          )}

          {note && (
            <button
              onClick={handleClear}
              className="text-slate-400 hover:text-rose-500 p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
              title="Clear notes"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      <textarea
        value={note}
        onChange={handleNoteChange}
        rows={8}
        placeholder={
          language === 'en'
            ? "Jot down key concepts, function syntax, syntax reminders, or personal ideas..."
            : "កត់ត្រាគំនិតសំខាន់ៗ រូបមន្តកូដ ឬការចងចាំផ្ទាល់ខ្លួនសម្រាប់មេរៀននេះ..."
        }
        className="w-full p-4 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-xs font-mono text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 leading-relaxed resize-y"
      />
    </div>
  );
};

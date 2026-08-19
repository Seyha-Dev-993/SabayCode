import React, { useState } from 'react';
import { Sparkles, Copy, Check, FileImage, Wand2, Info } from 'lucide-react';

interface IllustrationPlaceholderProps {
  title: string;
  prompt: string;
  imagePath: string;
  description?: string;
}

export const IllustrationPlaceholder: React.FC<IllustrationPlaceholderProps> = ({
  title,
  prompt,
  imagePath,
  description,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(prompt.trim());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="illustration-instruction-card my-6 border-2 border-dashed border-indigo-500/50 dark:border-indigo-500/40 rounded-2xl p-5 sm:p-6 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-indigo-500/10 dark:from-indigo-950/30 dark:via-purple-900/15 dark:to-slate-900/90 shadow-xs text-left relative overflow-hidden transition-all duration-200">
      <div className="flex items-start space-x-3 sm:space-x-4">
        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0 shadow-xs">
          <Wand2 className="w-5 h-5 sm:w-6 sm:h-6" />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-2 mb-1.5 flex-wrap gap-y-1">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-indigo-500/20 text-indigo-800 dark:text-indigo-300 border border-indigo-500/30 font-mono">
              ILLUSTRATION NEEDED
            </span>
            <span className="text-[11px] font-mono text-indigo-700/80 dark:text-indigo-400/80 font-medium">
              AI Image Generation Pending
            </span>
          </div>

          <h4 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-slate-100 tracking-tight mb-1">
            {title}
          </h4>

          {description && (
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
              {description}
            </p>
          )}

          <div className="my-3 p-3.5 sm:p-4 rounded-xl bg-slate-900/95 dark:bg-slate-950 border border-indigo-900/60 font-mono text-xs text-indigo-100 leading-relaxed shadow-sm relative group">
            <div className="flex items-center justify-between mb-2 pb-2 border-b border-slate-800 text-[11px] font-sans">
              <span className="uppercase tracking-wider font-bold text-indigo-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-indigo-400" /> AI Image Prompt (Midjourney / DALL·E / Imagen):
              </span>
              <button
                onClick={handleCopy}
                type="button"
                className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-indigo-600/30 hover:bg-indigo-600/50 text-indigo-200 border border-indigo-500/40 text-[11px] font-mono font-bold transition cursor-pointer shrink-0"
                title="Copy prompt to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Prompt</span>
                  </>
                )}
              </button>
            </div>

            <pre className="whitespace-pre-wrap font-mono text-[11px] sm:text-xs text-indigo-200/90 leading-relaxed overflow-x-auto select-text font-normal">
              {prompt.trim()}
            </pre>
          </div>

          <div className="text-xs text-slate-500 dark:text-slate-400 font-mono flex items-center gap-1.5 mt-2 bg-indigo-100/50 dark:bg-indigo-950/40 px-3 py-1.5 rounded-lg border border-indigo-200/60 dark:border-indigo-900/40 overflow-x-auto">
            <FileImage className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400 shrink-0" />
            <span className="font-semibold text-indigo-900 dark:text-indigo-300 shrink-0">Replace at:</span>
            <code className="text-indigo-900 dark:text-indigo-200 bg-indigo-200/60 dark:bg-indigo-900/60 px-1.5 py-0.5 rounded text-[11px] font-bold truncate">
              {imagePath}
            </code>
          </div>
        </div>
      </div>
    </div>
  );
};

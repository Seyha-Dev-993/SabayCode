import React from 'react';
import { Camera, MonitorCheck, Info, FileImage } from 'lucide-react';

interface ScreenshotPlaceholderProps {
  title: string;
  instructions: string | string[];
  imagePath: string;
  iconType?: 'camera' | 'monitor';
}

export const ScreenshotPlaceholder: React.FC<ScreenshotPlaceholderProps> = ({
  title,
  instructions,
  imagePath,
  iconType = 'camera',
}) => {
  const formattedInstructions = Array.isArray(instructions)
    ? instructions
    : instructions.split('\n').filter((line) => line.trim().length > 0);

  return (
    <div className="screenshot-instruction-card my-6 border-2 border-dashed border-amber-500/50 dark:border-amber-500/40 rounded-2xl p-5 sm:p-6 bg-gradient-to-br from-amber-500/5 via-orange-500/5 to-amber-500/10 dark:from-amber-950/30 dark:via-amber-900/15 dark:to-slate-900/90 shadow-xs text-left relative overflow-hidden transition-all duration-200">
      <div className="flex items-start space-x-3 sm:space-x-4">
        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-600 dark:text-amber-400 shrink-0 shadow-xs">
          {iconType === 'monitor' ? (
            <MonitorCheck className="w-5 h-5 sm:w-6 sm:h-6" />
          ) : (
            <Camera className="w-5 h-5 sm:w-6 sm:h-6" />
          )}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-2 mb-1.5 flex-wrap gap-y-1">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-amber-500/20 text-amber-800 dark:text-amber-300 border border-amber-500/30 font-mono">
              SCREENSHOT NEEDED
            </span>
            <span className="text-[11px] font-mono text-amber-700/80 dark:text-amber-400/80 font-medium">
              Real OS/Software Capture Pending
            </span>
          </div>

          <h4 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-slate-100 tracking-tight mb-2">
            {title}
          </h4>

          {formattedInstructions.length > 0 && (
            <div className="my-3 p-3.5 sm:p-4 rounded-xl bg-white/90 dark:bg-slate-950/80 border border-amber-200 dark:border-amber-900/50 font-mono text-xs text-slate-700 dark:text-slate-300 leading-relaxed shadow-2xs">
              <div className="text-[11px] uppercase tracking-wider font-bold text-amber-600 dark:text-amber-400 mb-2 font-sans flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5 text-amber-500" /> Step-by-Step Capture Instructions:
              </div>
              <ol className="list-none space-y-1.5">
                {formattedInstructions.map((step, idx) => {
                  const cleanedStep = step.replace(/^\d+\.\s*/, '');
                  return (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-amber-500/20 text-amber-700 dark:text-amber-300 text-[10px] font-bold shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span>{cleanedStep}</span>
                    </li>
                  );
                })}
              </ol>
            </div>
          )}

          <div className="text-xs text-slate-500 dark:text-slate-400 font-mono flex items-center gap-1.5 mt-2 bg-amber-100/50 dark:bg-amber-950/40 px-3 py-1.5 rounded-lg border border-amber-200/60 dark:border-amber-900/40 overflow-x-auto">
            <FileImage className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 shrink-0" />
            <span className="font-semibold text-amber-800 dark:text-amber-300 shrink-0">Replace at:</span>
            <code className="text-amber-900 dark:text-amber-200 bg-amber-200/60 dark:bg-amber-900/60 px-1.5 py-0.5 rounded text-[11px] font-bold truncate">
              {imagePath}
            </code>
          </div>
        </div>
      </div>
    </div>
  );
};

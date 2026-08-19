import React, { useState, useEffect, useRef } from 'react';
import { Play, RotateCcw, Code2, Eye, Terminal, Trash2 } from 'lucide-react';
import { useApp } from '../../context/AppContext';

interface FrontendClassCodeSandboxProps {
  initialHtml?: string;
  initialCss?: string;
  initialJs?: string;
}

interface ConsoleLogItem {
  id: string;
  type: 'log' | 'warn' | 'error' | 'info';
  message: string;
}

export const FrontendClassCodeSandbox: React.FC<FrontendClassCodeSandboxProps> = ({
  initialHtml = '<h2>Hello World</h2>',
  initialCss = 'body { font-family: sans-serif; padding: 1rem; color: #0f172a; background: #ffffff; }',
  initialJs = '',
}) => {
  const { language } = useApp();
  const [activeTab, setActiveTab] = useState<'html' | 'css' | 'js'>('html');
  const [htmlCode, setHtmlCode] = useState<string>(initialHtml);
  const [cssCode, setCssCode] = useState<string>(initialCss);
  const [jsCode, setJsCode] = useState<string>(initialJs);
  const [srcDoc, setSrcDoc] = useState<string>('');
  const [consoleLogs, setConsoleLogs] = useState<ConsoleLogItem[]>([]);
  const [activeOutputTab, setActiveOutputTab] = useState<'preview' | 'console'>('preview');

  const instanceId = useRef(`sandbox-${Math.random().toString(36).substring(2, 9)}`);

  useEffect(() => {
    setHtmlCode(initialHtml);
    setCssCode(initialCss);
    setJsCode(initialJs);
    setConsoleLogs([]);
    updatePreview(initialHtml, initialCss, initialJs);
  }, [initialHtml, initialCss, initialJs]);

  // Listen for console messages from iframe
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data && event.data.source === instanceId.current) {
        if (event.data.type === 'CONSOLE_LOG') {
          const newLog: ConsoleLogItem = {
            id: Math.random().toString(36).substring(2, 9),
            type: event.data.level || 'log',
            message: event.data.args.join(' '),
          };
          setConsoleLogs((prev) => [...prev, newLog]);
        }
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  const updatePreview = (h: string, c: string, j: string) => {
    setConsoleLogs([]);

    const needsReact = j.includes('React.') || j.includes('useState') || j.includes('useEffect') || h.includes('root') || j.includes('ReactDOM');
    const needsTailwind = h.includes('class=') || c.includes('@apply') || h.includes('flex') || h.includes('grid') || h.includes('bg-') || h.includes('text-');
    const needsBootstrap = h.includes('btn-') || h.includes('container') || h.includes('row') || h.includes('col-');

    const isFullHtml = h.trim().toLowerCase().startsWith('<!doctype') || h.trim().toLowerCase().startsWith('<html');

    // Prepare JSX / Babel wrapper if needed
    let finalScript = j;
    if (needsReact && !j.includes('ReactDOM.createRoot') && !j.includes('ReactDOM.render')) {
      if (j.includes('function App') || j.includes('const App')) {
        finalScript = `
          ${j}
          try {
            if (document.getElementById('root') && typeof App !== 'undefined') {
              const root = ReactDOM.createRoot(document.getElementById('root'));
              root.render(React.createElement(App));
            }
          } catch(e) { console.error(e.message); }
        `;
      }
    }

    let bodyHtml = h;
    if (needsReact && !h.includes('id="root"')) {
      bodyHtml = `${h}\n<div id="root"></div>`;
    }

    const consoleCaptureScript = `
      <script>
        (function() {
          const originalLog = console.log;
          const originalWarn = console.warn;
          const originalError = console.error;
          const originalInfo = console.info;

          function sendToParent(level, args) {
            try {
              const formattedArgs = Array.from(args).map(a => {
                if (typeof a === 'object') {
                  try { return JSON.stringify(a, null, 2); } catch(e) { return String(a); }
                }
                return String(a);
              });
              window.parent.postMessage({
                source: '${instanceId.current}',
                type: 'CONSOLE_LOG',
                level: level,
                args: formattedArgs
              }, '*');
            } catch(e) {}
          }

          console.log = function(...args) { sendToParent('log', args); originalLog.apply(console, args); };
          console.warn = function(...args) { sendToParent('warn', args); originalWarn.apply(console, args); };
          console.error = function(...args) { sendToParent('error', args); originalError.apply(console, args); };
          console.info = function(...args) { sendToParent('info', args); originalInfo.apply(console, args); };

          window.onerror = function(msg, url, line) {
            sendToParent('error', ['Runtime Error: ' + msg + ' (Line ' + line + ')']);
            return false;
          };
        })();
      </script>
    `;

    const cdnHeader = `
      <script src="https://cdn.tailwindcss.com"></script>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
      <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
      <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
      <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    `;

    let doc = '';
    if (isFullHtml) {
      doc = h.replace('<head>', `<head>${cdnHeader}<style>${c}</style>${consoleCaptureScript}`) + `<script type="text/babel">${finalScript}</script>`;
    } else {
      doc = `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            ${cdnHeader}
            <style>
              body { font-family: system-ui, -apple-system, sans-serif; padding: 1rem; }
              ${c}
            </style>
            ${consoleCaptureScript}
          </head>
          <body>
            ${bodyHtml}
            <script type="text/babel" data-presets="react,typescript">
              ${finalScript}
            </script>
          </body>
        </html>
      `;
    }

    setSrcDoc(doc);
  };

  const handleRun = () => {
    updatePreview(htmlCode, cssCode, jsCode);
  };

  const handleReset = () => {
    setHtmlCode(initialHtml);
    setCssCode(initialCss);
    setJsCode(initialJs);
    setConsoleLogs([]);
    updatePreview(initialHtml, initialCss, initialJs);
  };

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-lg font-sans transition-colors">
      {/* Sandbox Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-2 p-3 bg-slate-100 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-1">
          <button
            onClick={() => setActiveTab('html')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold font-mono transition ${
              activeTab === 'html'
                ? 'bg-amber-500/20 text-amber-700 dark:text-amber-300 border border-amber-500/30'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
            }`}
          >
            HTML
          </button>
          <button
            onClick={() => setActiveTab('css')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold font-mono transition ${
              activeTab === 'css'
                ? 'bg-sky-500/20 text-sky-700 dark:text-sky-300 border border-sky-500/30'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
            }`}
          >
            CSS
          </button>
          <button
            onClick={() => setActiveTab('js')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold font-mono transition ${
              activeTab === 'js'
                ? 'bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 border border-indigo-500/30'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
            }`}
          >
            JS / TS
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleReset}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-bold rounded-lg transition"
            title="Reset Code"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>{language === 'en' ? 'Reset' : 'កំណត់ឡើងវិញ'}</span>
          </button>
          <button
            onClick={handleRun}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-lg transition shadow-md shadow-emerald-600/20"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>{language === 'en' ? 'Run Code' : 'សារល្បងកូដ'}</span>
          </button>
        </div>
      </div>

      {/* Main Sandbox Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-slate-200 dark:divide-slate-800">
        {/* Code Editor Panel */}
        <div className="p-3 bg-slate-50 dark:bg-slate-950 flex flex-col min-h-[280px]">
          <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400 mb-2 px-1">
            <span className="uppercase font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
              <Code2 className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
              {activeTab.toUpperCase()} Editor
            </span>
            <span>Interactive Sandbox</span>
          </div>

          {activeTab === 'html' && (
            <textarea
              value={htmlCode}
              onChange={(e) => setHtmlCode(e.target.value)}
              className="w-full flex-1 p-3 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-mono text-xs rounded-xl border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-indigo-500 resize-none leading-relaxed"
              spellCheck={false}
            />
          )}

          {activeTab === 'css' && (
            <textarea
              value={cssCode}
              onChange={(e) => setCssCode(e.target.value)}
              className="w-full flex-1 p-3 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-mono text-xs rounded-xl border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-indigo-500 resize-none leading-relaxed"
              spellCheck={false}
            />
          )}

          {activeTab === 'js' && (
            <textarea
              value={jsCode}
              onChange={(e) => setJsCode(e.target.value)}
              className="w-full flex-1 p-3 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-mono text-xs rounded-xl border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-indigo-500 resize-none leading-relaxed"
              spellCheck={false}
            />
          )}
        </div>

        {/* Output Panel: Live Preview & Console Output */}
        <div className="p-3 bg-slate-100 dark:bg-slate-900 flex flex-col min-h-[280px]">
          <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400 mb-2 px-1">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveOutputTab('preview')}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-md transition ${
                  activeOutputTab === 'preview'
                    ? 'bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 font-bold'
                    : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Preview</span>
              </button>
              <button
                onClick={() => setActiveOutputTab('console')}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-md transition ${
                  activeOutputTab === 'console'
                    ? 'bg-indigo-500/20 text-indigo-700 dark:text-indigo-400 font-bold'
                    : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                }`}
              >
                <Terminal className="w-3.5 h-3.5" />
                <span>Console ({consoleLogs.length})</span>
              </button>
            </div>
            {activeOutputTab === 'console' && consoleLogs.length > 0 && (
              <button
                onClick={() => setConsoleLogs([])}
                className="flex items-center gap-1 text-[10px] text-rose-500 hover:underline"
              >
                <Trash2 className="w-3 h-3" />
                <span>Clear</span>
              </button>
            )}
          </div>

          {activeOutputTab === 'preview' ? (
            <div className="w-full flex-1 bg-white rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-inner">
              <iframe
                title="Live Code Preview"
                srcDoc={srcDoc}
                className="w-full h-full min-h-[220px] border-none"
                sandbox="allow-scripts"
              />
            </div>
          ) : (
            <div className="w-full flex-1 bg-slate-950 rounded-xl p-3 font-mono text-xs text-slate-200 border border-slate-800 overflow-y-auto max-h-[260px] space-y-1.5">
              {consoleLogs.length === 0 ? (
                <div className="text-slate-500 italic py-4 text-center">
                  {language === 'en' ? 'Console is empty. Run code to see logs.' : 'ពុំទាន់មាន Console log ទេ។ ចុច Run Code...'}
                </div>
              ) : (
                consoleLogs.map((log) => (
                  <div
                    key={log.id}
                    className={`py-1 border-b border-slate-800/60 font-mono text-[11px] whitespace-pre-wrap leading-relaxed ${
                      log.type === 'error'
                        ? 'text-rose-400 bg-rose-950/20 px-2 rounded'
                        : log.type === 'warn'
                        ? 'text-amber-300'
                        : 'text-emerald-400'
                    }`}
                  >
                    <span className="text-slate-500 select-none mr-2">›</span>
                    {log.message}
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};


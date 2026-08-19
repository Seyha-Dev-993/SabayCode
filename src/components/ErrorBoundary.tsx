import React, { Component, ErrorInfo, ReactNode } from 'react';
import { RefreshCw, Home, AlertTriangle } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public override state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    if (
      error?.message?.includes('ResizeObserver loop completed with undelivered notifications') ||
      error?.message?.includes('ResizeObserver loop limit exceeded') ||
      error?.message?.includes('ResizeObserver')
    ) {
      return { hasError: false, error: null };
    }
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    if (
      error?.message?.includes('ResizeObserver loop completed with undelivered notifications') ||
      error?.message?.includes('ResizeObserver loop limit exceeded') ||
      error?.message?.includes('ResizeObserver')
    ) {
      return;
    }
    console.error('Uncaught error caught by ErrorBoundary:', error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.hash = '';
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center p-6">
          <div className="max-w-md w-full bg-slate-800 border border-slate-700/80 rounded-2xl p-6 shadow-2xl text-center space-y-4">
            <div className="w-12 h-12 bg-amber-500/10 border border-amber-500/20 text-amber-400 rounded-full flex items-center justify-center mx-auto">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold tracking-tight">Something went wrong</h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              An unexpected error occurred while rendering the page. You can reload or return home.
            </p>
            {this.state.error && (
              <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800 text-left overflow-auto text-[11px] font-mono text-red-400 max-h-32">
                {this.state.error.message || 'Unknown error'}
              </div>
            )}
            <div className="pt-2 flex items-center justify-center gap-3">
              <button
                onClick={this.handleReset}
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs rounded-xl flex items-center gap-2 transition"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                Reload App
              </button>
              <button
                onClick={() => {
                  window.location.hash = '';
                  this.setState({ hasError: false, error: null });
                }}
                className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white font-semibold text-xs rounded-xl flex items-center gap-2 transition"
              >
                <Home className="w-3.5 h-3.5" />
                Go Home
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}





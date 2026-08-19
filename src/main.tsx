import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import { ErrorBoundary } from './components/ErrorBoundary.tsx';
import './index.css';

// Prevent benign ResizeObserver loop errors from breaking UI or bubbling up
if (typeof window !== 'undefined') {
  const isResizeObserverError = (msg?: string) => {
    if (!msg) return false;
    return (
      msg.includes('ResizeObserver loop completed with undelivered notifications') ||
      msg.includes('ResizeObserver loop limit exceeded') ||
      msg.includes('ResizeObserver')
    );
  };

  window.addEventListener('error', (event) => {
    if (isResizeObserverError(event.message)) {
      event.stopImmediatePropagation();
      event.preventDefault();
      return true;
    }
  });

  window.addEventListener('unhandledrejection', (event) => {
    if (isResizeObserverError(event.reason?.message)) {
      event.stopImmediatePropagation();
      event.preventDefault();
      return true;
    }
  });

  const OriginalResizeObserver = window.ResizeObserver;
  if (OriginalResizeObserver) {
    window.ResizeObserver = class ResizeObserver extends OriginalResizeObserver {
      constructor(callback: ResizeObserverCallback) {
        super((entries, observer) => {
          window.requestAnimationFrame(() => {
            try {
              callback(entries, observer);
            } catch (error) {
              if (error instanceof Error && isResizeObserverError(error.message)) {
                return;
              }
              // Ignore ResizeObserver non-fatal delivery anomalies
            }
          });
        });
      }
    };
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>,
);



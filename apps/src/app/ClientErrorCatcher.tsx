"use client";

import { useEffect } from 'react';

export default function ClientErrorCatcher() {
  useEffect(() => {
    const send = async (payload: any) => {
      try {
        await fetch('/api/client-error', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
      } catch (e) {
        // ignore
      }
    };

    const onError = (e: ErrorEvent) => {
      send({ type: 'error', message: e.message, filename: e.filename, lineno: e.lineno, colno: e.colno, stack: e.error && e.error.stack });
    };

    const onRejection = (e: PromiseRejectionEvent) => {
      const r = e.reason;
      send({ type: 'unhandledrejection', message: (r && r.message) || String(r), stack: (r && r.stack) || null });
    };

    window.addEventListener('error', onError);
    window.addEventListener('unhandledrejection', onRejection as EventListener);

    return () => {
      window.removeEventListener('error', onError);
      window.removeEventListener('unhandledrejection', onRejection as EventListener);
    };
  }, []);

  return null;
}

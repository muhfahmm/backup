/**
 * Simple logging utility that logs to browser console and server logs
 */

export const logger = {
  log: (tag: string, message: string, data?: any) => {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${tag}] ${message}`;
    
    // Log to browser console
    console.log(logMessage, data || '');
    
    // Log to server (optional - for debugging)
    if (typeof window !== 'undefined') {
      try {
        // Store in sessionStorage for visibility
        const logs = sessionStorage.getItem('app_logs') || '';
        const newLog = `${logMessage} ${data ? JSON.stringify(data) : ''}\n`;
        sessionStorage.setItem('app_logs', (logs + newLog).slice(-5000)); // Keep last 5000 chars
      } catch (e) {
        // Silently fail
      }
    }
  },

  warn: (tag: string, message: string, data?: any) => {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [WARN] [${tag}] ${message}`;
    console.warn(logMessage, data || '');
  },

  error: (tag: string, message: string, data?: any) => {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [ERROR] [${tag}] ${message}`;
    console.error(logMessage, data || '');
  },

  // Get all logs from session
  getLogs: () => {
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem('app_logs') || 'No logs';
    }
    return 'Not in browser';
  },

  // Clear logs
  clearLogs: () => {
    if (typeof window !== 'undefined') {
      sessionStorage.removeItem('app_logs');
    }
  }
};

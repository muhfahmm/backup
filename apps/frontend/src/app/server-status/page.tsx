'use client';

import MapServerMonitor from '@/server/MapServerMonitor';

/**
 * ServerMonitorPage
 * Halaman khusus untuk memantau "Jantung Aplikasi" (Backend Orchestrator)
 * Diakses melalui URL: /server-status
 */
export default function ServerMonitorPage() {
    return (
        <main className="bg-black min-h-screen">
            <MapServerMonitor />
        </main>
    );
}

import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

/**
 * handleExit
 * Memproses logika keluar dari simulasi dan kembali ke menu awal permainan.
 * @param router Instance dari Next.js useRouter()
 */
export const handleExit = (router: AppRouterInstance) => {
    console.log('[System] Exiting simulation and returning to main menu...');
    
    // Redirect ke halaman menu utama (awal game)
    router.push('/pages');
};

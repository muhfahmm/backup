import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

/**
 * handleLogout
 * Memproses logika keluar dari simulasi dan kembali ke halaman pemilihan negara.
 * @param router Instance dari Next.js useRouter()
 */
export const handleLogout = (router: AppRouterInstance) => {
    console.log('[Security] Initiating session logout...');
    
    // Optional: Bersihkan session storage atau local storage jika diperlukan
    // localStorage.removeItem('active_simulation_id');
    // sessionStorage.clear();

    // Redirect ke halaman pilih negara
    router.push('/pages/pilih-negara');
};

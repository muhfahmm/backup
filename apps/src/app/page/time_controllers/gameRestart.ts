import { SimulationTimeManager } from './timeManager';

export interface RestartOptions {
    timeManager: SimulationTimeManager | null;
    setIsPaused: (paused: boolean) => void;
    setSpeed: (speed: number) => void;
    reloadStats: () => Promise<void>;
    setCountryDetail?: (detail: any) => void; // For resetting production data
    skipConfirm?: boolean;
}

/**
 * Handles resetting the game calendar and country statistics back to their initial values.
 */
export function handleGameRestart(options: RestartOptions): void {
    if (!options.skipConfirm) {
        const confirmRestart = window.confirm(
            "Apakah Anda yakin ingin mengatur ulang progres simulasi? Semua kemajuan waktu dan perubahan data akan dikembalikan ke awal."
        );
        if (!confirmRestart) return;
    }

    // 1. Reset Simulation Time Manager (Date, Pause, and Speed)
    if (options.timeManager) {
        options.timeManager.setPaused(true);
        options.timeManager.setSpeed(1);
        options.timeManager.resetDate();
    }
    options.setIsPaused(true);
    options.setSpeed(1);

    // 2. Reset production data (accumulated production, build dates)
    if (options.setCountryDetail) {
        options.setCountryDetail((prev: any) => {
            if (!prev) return prev;
            
            // Create a new object without any accumulated_* or build_date_* fields
            const reset: any = { ...prev };
            
            // Remove all production-related fields
            Object.keys(reset).forEach(key => {
                if (key.startsWith('accumulated_') || key.startsWith('build_date_') || key.startsWith('last_prod_date_')) {
                    delete reset[key];
                }
            });
            
            // Also reset all building counts to 0
            // Buildings keys that can have count > 0
            const buildingKeys = [
                // Agrikultur
                'padi', 'gandum', 'jagung', 'sayur', 'umbi', 'kedelai', 'kelapa_sawit', 'kopi', 'teh', 'kakao', 'tebu', 'karet', 'kapas', 'tembakau',
                // Peternakan
                'ayam_unggas', 'sapi_perah', 'sapi_potong', 'domba_kambing',
                // Perikanan
                'udang', 'mutiara', 'ikan',
                // Olahan Pangan
                'air_mineral', 'gula', 'roti', 'pengolahan_daging', 'mie_instan', 'minyak_goreng', 'susu', 'pakan_ternak', 'ikan_kaleng', 'kopi_teh',
                // Kelistrikan
                'pembangkit_listrik_tenaga_nuklir', 'pembangkit_listrik_tenaga_air', 'pembangkit_listrik_tenaga_surya', 'pembangkit_listrik_tenaga_uap', 'pembangkit_listrik_tenaga_gas', 'pembangkit_listrik_tenaga_angin',
                // Mineral & Energi
                'emas', 'uranium', 'batu_bara', 'minyak_bumi', 'gas_alam', 'garam', 'nikel', 'litium', 'tembaga', 'aluminium', 'logam_tanah_jarang', 'bijih_besi',
                // Manufaktur
                'semikonduktor', 'mobil', 'sepeda_motor', 'smelter', 'semen_beton', 'kayu', 'pupuk',
                // Farmasi
                'farmasi'
            ];
            
            buildingKeys.forEach(key => {
                reset[key] = 0;
            });
            
            console.log('[gameRestart] Production data and building counts cleared');
            return reset;
        });
    }

    // 3. Re-fetch baseline default statistics from the profile backend API
    options.reloadStats()
        .then(() => {
            console.log("Game progress restarted successfully.");
        })
        .catch((err) => {
            console.error("Failed to reload country default stats on restart:", err);
        });
}

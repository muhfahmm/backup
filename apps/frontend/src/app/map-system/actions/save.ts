import { Country } from '../types/country';

/**
 * handleSave
 * Memproses penyimpanan progres simulasi saat ini ke localStorage.
 * agar dapat diakses kembali di halaman Load Game.
 * @param selectedCountry Negara yang sedang dimainkan
 * @param simDate Tanggal simulasi saat ini
 * @param stability Tingkat stabilitas saat ini
 */
export const handleSave = (
    selectedCountry: Country | null,
    simDate: string,
    stability: number
) => {
    if (!selectedCountry) return;

    const formatNumber = (num: string | number) => {
        return new Intl.NumberFormat('id-ID').format(Number(num));
    };

    const timestamp = new Date().toLocaleString('sv-SE').replace('T', ' ').substring(0, 16);
    const saveId = `save_${Date.now()}`;

    const newSave = {
        id: saveId,
        country: selectedCountry.nama_negara,
        flag: selectedCountry.kode_negara,
        simDate: simDate,
        realTime: timestamp,
        stats: {
            population: formatNumber(selectedCountry.jumlah_penduduk),
            stability: stability,
            budget: `$${formatNumber(selectedCountry.anggaran)}`
        }
    };

    try {
        const existingSavesRaw = localStorage.getItem('president_simulator_saves');
        const existingSaves = existingSavesRaw ? JSON.parse(existingSavesRaw) : [];
        
        // Tambahkan penyimpanan baru ke posisi teratas (terbaru)
        const updatedSaves = [newSave, ...existingSaves];
        localStorage.setItem('president_simulator_saves', JSON.stringify(updatedSaves));
        
        alert(`[SYSTEM] Progress Terenkripsi: Data negara ${selectedCountry.nama_negara} berhasil diamankan di Slot ${saveId}.`);
    } catch (error) {
        console.error('[Error] Gagal menyimpan progres:', error);
        alert('[ERROR] Gagal mengamankan data: Uplink terputus.');
    }
};

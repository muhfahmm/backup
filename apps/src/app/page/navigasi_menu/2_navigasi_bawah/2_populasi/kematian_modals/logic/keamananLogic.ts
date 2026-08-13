/**
 * logic Keamanan
 * Menghitung rincian keamanan negara berdasarkan jumlah bangunan penegakan hukum.
 * Semakin banyak bangunan penegakan hukum, nilai/rasio keamanannya semakin kecil (misal mengurangi risiko ketidakamanan)
 * atau sebaliknya disesuaikan dengan logika "semakin banyak bangunan maka nilai atau rasionya semakin kecil".
 */

export interface KeamananCalculationResult {
  populasi: number;
  tingkatKeamanan: number; // Persentase keamanan asli dari data
  totalBangunanHukum: number;
  idealHukum: number;
  hukumRatio: number; // jumlahBangunan / idealBangunan
  securityFactor: number; // Semakin banyak bangunan, rasionya semakin besar, pengali (faktor risiko ke tingkat kematian) semakin kecil.
}

export function calculateKeamananLogic(
  countryDetail: any,
  populasi: number
): KeamananCalculationResult {
  const tingkatKeamanan = countryDetail?.tingkat_keamanan ?? 80;

  // Bangunan penegakan hukum yang ada di Tempat Umum & Layanan Publik (SERVICE_GROUPS: penegakan_hukum)
  const posPolisi = Number(countryDetail?.pos_polisi ?? 0);
  const pengadilan = Number(countryDetail?.pengadilan ?? 0);
  const kejaksaan = Number(countryDetail?.kejaksaan ?? 0);
  const akademiPolisi = Number(countryDetail?.akademi_polisi ?? 0);
  const pusatBantuanHukum = Number(countryDetail?.pusat_bantuan_hukum ?? 0);

  const totalBangunanHukum = posPolisi + pengadilan + kejaksaan + akademiPolisi + pusatBantuanHukum;

  // Kebutuhan ideal bangunan penegakan hukum berdasarkan populasi (misal 1 bangunan per 50.000 jiwa)
  const idealHukum = Math.ceil(populasi / 50000) || 1;

  // Rasio ketersediaan bangunan penegakan hukum terhadap ideal (maksimal 1)
  const hukumRatio = Math.min(1, totalBangunanHukum / idealHukum);

  // Sesuai request: "jika semakin banyak maka nilai atau rasionya semakin kecil"
  // Di sini kita menghitung faktor pengali kematian dari faktor keamanan.
  // Jika rasio ketersediaan bangunan hukum semakin besar (mendekati 1),
  // maka sisa ketidakamanan (1 - hukumRatio) semakin kecil.
  // Faktor pengali keamanan terhadap kematian:
  // Base factor keamanan aslinya: Math.max(0.75, 1.0 - (0.005 * (tingkatKeamanan - 50)))
  // Kita modifikasi dengan menggabungkannya dengan hukumRatio:
  const baseSecurityFactor = Math.max(0.75, 1.0 - (0.005 * (tingkatKeamanan - 50)));
  
  // Jika rasio bangunan penuh (1.0), faktor keamanan tetap base. Jika kurang, faktor keamanan bertambah buruk (meningkat).
  // Sisa ketidakamanan = (1 - hukumRatio). Semakin banyak bangunan -> hukumRatio naik -> sisa ketidakamanan turun/kecil.
  const securityFactor = baseSecurityFactor * (1.0 + 0.25 * (1 - hukumRatio));

  return {
    populasi,
    tingkatKeamanan,
    totalBangunanHukum,
    idealHukum,
    hukumRatio,
    securityFactor,
  };
}

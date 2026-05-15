export interface HunianData {
  rumah_subsidi?: number;
  apartemen?: number;
  mansion?: number;
}

export const hunianRate = {
  rumah_subsidi: {
    biaya_pembangunan: 500,
    waktu_pembangunan: 4,

    konsumsi_listrik: 45,
    kapasitas: 5,
    label: "Perumahan Subsidi Rakyat",
    deskripsi: "Hunian Terpadu Masyarakat Terjangkau"
  },
  apartemen: {
    biaya_pembangunan: 2500, // Reduced by 50% (orig. 85M)
    waktu_pembangunan: 7,

    konsumsi_listrik: 350,
    kapasitas: 6000,
    label: "Apartemen Modern & High-Rise",
    deskripsi: "Hunian Vertikal Kepadatan Tinggi"
  },
  mansion: {
    biaya_pembangunan: 5000, // Reduced by 50% (orig. 125M)
    waktu_pembangunan: 14,

    konsumsi_listrik: 400,
    kapasitas: 10,
    label: "Kompleks Mansion Mewah",
    deskripsi: "Hunian Eksklusif Kelas Atas"
  }
};

export * from "./afrika";
export * from "./asia";
export * from "./eropa";
export * from "./na";
export * from "./sa";
export * from "./oceania";

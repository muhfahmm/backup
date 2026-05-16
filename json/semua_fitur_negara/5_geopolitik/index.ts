// @ts-nocheck
  un_vote: number;
  sikap: "Globalis" | "Isolasionis" | "Netral";
  pengaruh_internasional: {
    kekuatan_lunak: number;
    kekuatan_keras: number;
    prestise_diplomatik: number;
  };

    mitra: string;
    jenis: "Perdagangan" | "Militer" | "Penelitian" | "Politik";
    status: "Aktif" | "Tertunda" | "Pendinginan";
  }[];
  reputasi_diplomatik: "Unggul" | "Baik" | "Netral" | "Buruk" | "Terisolasi";
  aliansi_aktif: readonly string[];
  pengaruh_global: number;
  peringkat_diplomasi: number;
}

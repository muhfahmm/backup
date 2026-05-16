// @ts-nocheck


}

}

// Helper to enforce minimum 1 MW per building, but allow 0 for disabled sectors

// Konsumsi Ekstraksi (Mining) - Dynamic based on mineralKritisRate

}

// Konsumsi Produksi & Manufaktur - Sinkronisasi Otomatis dengan Database Rate
const KONSUMSI_PRODUKSI = {
  // Manufaktur
  semikonduktor: manufakturRate["1_pabrik_elektronik"].konsumsi_listrik,
  mobil: manufakturRate["2_pabrik_mobil"].konsumsi_listrik,
  sepeda_motor: manufakturRate["3_pabrik_motor"].konsumsi_listrik,
  smelter: manufakturRate["4_smelter"].konsumsi_listrik,
  semen_beton: manufakturRate["5_pabrik_semen"].konsumsi_listrik,
  kayu: manufakturRate["6_penggergajian_kayu"].konsumsi_listrik,
  pupuk: manufakturRate["7_pabrik_pupuk"].konsumsi_listrik,

  // Olahan Pangan
  air_mineral: olahanPanganRate["1_pabrik_air_mineral"].konsumsi_listrik,
  gula: olahanPanganRate["2_pabrik_gula"].konsumsi_listrik,
  roti: olahanPanganRate["3_pabrik_roti"].konsumsi_listrik,
  pengolahan_daging: olahanPanganRate["4_pabrik_pengolahan_daging"].konsumsi_listrik,
  mie_instan: olahanPanganRate["5_pabrik_mie_instan"].konsumsi_listrik,
  minyak_goreng: olahanPanganRate["6_pabrik_minyak_goreng"].konsumsi_listrik,
  susu: olahanPanganRate["7_pabrik_pengolahan_susu"].konsumsi_listrik,
  pakan_ternak: olahanPanganRate["8_pabrik_pakan_ternak"].konsumsi_listrik,
  ikan_kaleng: olahanPanganRate["9_pabrik_pengalengan_ikan"].konsumsi_listrik,
  kopi_teh: olahanPanganRate["10_pabrik_pengolahan_kopi_teh"].konsumsi_listrik,

  // Farmasi
  farmasi: farmasiRate["1_pabrik_farmasi"].konsumsi_listrik
};

}

}

}

// Konsumsi Pangan (Tani & Ternak)
const KONSUMSI_PANGAN = {
  ayam_unggas: 0.05, sapi_perah: 0.5, sapi_potong: 0.2, domba_kambing: 0.1,
  udang: 0.65, ikan: 0.5, mutiara: 0.8,
  padi: 0.2, gandum: 0.3, jagung: 0.1,
  sayur: 0.15, umbi: 0.1, kedelai: 0.1, kelapa_sawit: 1, 
  teh: 0.2, kopi: 0.2, kakao: 0.2, tebu: 0.2, karet: 0.3, kapas: 0.15, tembakau: 0.25
};

  }, 0);
}

  }, 0);
}

  }, 0);
}

}

// Konsumsi Pertahanan (Defense)
const KONSUMSI_PERTAHANAN = {
  penjara: pertahananRate["1_penjara"].konsumsi_listrik,
  barakRate["1_barak"].konsumsi_listrik || 1,
  gudang_senjata: pertahananRate["2_gudang_senjata"].konsumsi_listrik,
  hangar_tank: pertahananRate["3_hangar_tank"].konsumsi_listrik
};

const KONSUMSI_STRATEGIC = {
  pusat_komando: pertahananRate["5_pusat_komando"].konsumsi_listrik,
  pangkalan_udara: pertahananRate["6_pangkalan_udara"].konsumsi_listrik,
  pangkalan_laut: pertahananRate["7_pangkalan_laut"].konsumsi_listrik,
  arms_factory: 0, // Not explicitly defined in pertahananRate, using 0 for safety
  program_luar_angkasa: pertahananRate["8_program_luar_angkasa"].konsumsi_listrik,
  pertahanan_siber: pertahananRate["9_pertahanan_siber"].konsumsi_listrik
};

const KONSUMSI_PABRIK_MILITER = {
  pabrik_amunisiRate["2_pabrik_amunisi"].konsumsi_listrik
};

// 5. Konsumsi Unit Intelijen & Strategis ditangani secara dinamis dari intelijenRate

  management,
  fleet,
  strategisStrategis,
  police: SektorArmadaKepolisian,
  pabrik





}

  management,
  barak: number,
  status_nuklir: boolean
}

}

  }, 0);
}

  }, 0);
}

// Konsumsi Sosial
const KONSUMSI_SOSIAL = {
  pendidikan: {
    prasekolah: 1, dasar: 2, menengah: 5, lanjutan: 8,
    universitas: 25, lembaga_pendidikan: 15, laboratorium: 30, observatorium: 10,
    pusat_penelitian: 45, pusat_pengembangan: 20
  },
  kesehatan: { rumah_sakit_besar: 100, rumah_sakit_kecil: 25, pusat_diagnostik: 15 },
  olahraga: { kolam_renang: 10, sirkuit_balap: 80, stadion: 150, stadion_internasional: 150, gym: 15, golf: 40, esports: 120, gokart: 25 },
  hukum: { akademi_polisi: 10, pos_polisi: 3, armada_mobil_polisi: 0.1, kejaksaan: 20, pengadilan: 20, pusat_bantuan_hukum: 5 },
  komersial: { pusat_belanja: 50, hotel: 40, pusat_grosir_tekstil: 25 },
  hiburan: { bioskop: 15, teater: 12 }
};





}

}

}

}

// Konsumsi Hunian & Pemukiman - Sinkronisasi Otomatis dengan Database Rate
const KONSUMSI_HUNIAN = {
  rumah_subsidi: hunianRate.rumah_subsidi.konsumsi_listrik, 
  apartemen: hunianRate.apartemen.konsumsi_listrik, 
  mansion: hunianRate.mansion.konsumsi_listrik
};

}

// Konsumsi Transportasi
const KONSUMSI_TRANSPORTASI = {
  jalur_sepeda: 0, jalan_raya: 3, terminal_bus: 5, stasiun_kereta_api: 15,
  kereta_bawah_tanah: 20, pelabuhan: 25, bandara: 30, helipad: 2
};

}

  
  
  // Hanya Barak yang mengonsumsi listrik nasional (Penerangan, Fasilitas, dll)
  // Transportasi tempur (tank, kapal, pesawat) dianggap menggunakan bahan bakar sendiri/internal
  
}


  // Taoisme Efficiency Bonus (Harmony with Nature)
  }

}

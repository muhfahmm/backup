import { guiana_prancis_intelijen } from "../../2_intelijen/sa/200_guiana_prancis";

export const guiana_prancis_strategis = {
    "waktu_respon": 4,
    "intelijen": 16,
    "status_nuklir": false,
    "intel_radar": guiana_prancis_intelijen,
    "operasi_strategis": {
      "misi_serangan": 5,
      "agen_mata_mata": 15,
      "misi_sabotase": 0,
      "manajemen_wilayah": 0,
      "program_nuklir": 0,
      "misil_nuklir": 0
    }
  } as const;

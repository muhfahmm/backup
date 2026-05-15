import { selandia_baru_intelijen } from "../../2_intelijen/oceania/190_selandia_baru";

export const selandia_baru_strategis = {
    "waktu_respon": 29,
    "intelijen": 40,
    "status_nuklir": false,
    "intel_radar": selandia_baru_intelijen,
    "operasi_strategis": {
      "misi_serangan": 25,
      "agen_mata_mata": 32,
      "misi_sabotase": 0,
      "manajemen_wilayah": 0,
      "program_nuklir": 0,
      "misil_nuklir": 0
    }
  } as const;

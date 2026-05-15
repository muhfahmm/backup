export * from "./1_Layanan Publik";
export * from "./2_hunian_permukiman";

export interface SektorSosial {
  pendidikan?: import("./1_Layanan Publik/2_pendidikan").PendidikanData;
  kesehatan?: import("./1_Layanan Publik/3_kesehatan").KesehatanData;
  olahraga?: import("./1_Layanan Publik/5_olahraga").OlahragaData;
  hukum?: import("./1_Layanan Publik/4_hukum").HukumData;
  komersial?: import("./1_Layanan Publik/6_komersial").SektorKomersial;
  hiburan?: import("./1_Layanan Publik/7_hiburan").SektorHiburan;
  hunian?: import("./2_hunian_permukiman").HunianData;
}

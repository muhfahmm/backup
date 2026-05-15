import { pendidikanRate } from "./2_pendidikan";
import { kesehatanRate } from "./3_kesehatan";
import { hukumRate } from "./4_hukum";
import { olahragaRate } from "./5_olahraga";
import { komersialRate } from "./6_komersial";
import { hiburanRate } from "./7_hiburan";
import { infrastrukturRate as infraRate } from "./1_infrastruktur";

export * from "./1_infrastruktur";
export * from "./2_pendidikan";
export * from "./3_kesehatan";
export * from "./4_hukum";
export * from "./5_olahraga";
export * from "./6_komersial";
export * from "./7_hiburan";

export interface SektorSosial {
  pendidikan?: import("./2_pendidikan").PendidikanData;
  kesehatan?: import("./3_kesehatan").KesehatanData;
  olahraga?: import("./5_olahraga").OlahragaData;
  hukum?: import("./4_hukum").HukumData;
  komersial?: import("./6_komersial").SektorKomersial;
  hiburan?: import("./7_hiburan").SektorHiburan;
}

export const sosialRate = {
  ...pendidikanRate,
  ...kesehatanRate,
  ...hukumRate,
  ...olahragaRate,
  ...komersialRate,
  ...hiburanRate
};

export const infrastrukturRate = infraRate;

// country_static_data.ts
// Data diambil dari: json/database_index_kepuasan/index.ts
// Aggregator untuk semua 207 country kepuasan data

export interface CountryStaticData {
  id: number;                       // 🔥 ID negara
  livingCostIndex: number;
  baseLifeExpectancy?: number;      // Opsional, untuk pengembangan selanjutnya
  baseSecurityLevel?: number;       // Opsional
}

export interface CountryKepuasan {
  id: number;
  name: string;
  livingCostIndex: number;
  region: string;
}

// Import semua data dari index file
import { ALL_COUNTRIES_KEPUASAN, COUNTRY_KEPUASAN_BY_NAME } from '../../../../../json/database_index_kepuasan/index';

// Build the record by country name
export const COUNTRY_STATIC_DATA: Record<string, CountryStaticData> = ALL_COUNTRIES_KEPUASAN.reduce(
  (acc: Record<string, CountryStaticData>, country: CountryKepuasan) => {
    acc[country.name] = {
      id: country.id,
      livingCostIndex: country.livingCostIndex,
    };
    return acc;
  },
  {} as Record<string, CountryStaticData>
);
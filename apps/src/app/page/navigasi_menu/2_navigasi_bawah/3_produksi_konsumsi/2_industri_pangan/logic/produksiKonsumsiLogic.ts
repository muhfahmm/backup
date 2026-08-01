const parsePopulationText = (value: any): number => {
  if (value === null || value === undefined || value === '') return 0;

  if (typeof value === 'number') {
    return Number.isFinite(value) ? value : 0;
  }

  if (typeof value === 'string') {
    const trimmed = value.trim();
    const compact = trimmed.replace(/\s+/g, '').replace(/,/g, '.');

    const millionMatch = compact.match(/^([0-9]+(?:\.[0-9]+)?)\s*M$/i);
    if (millionMatch) {
      return Number(millionMatch[1]) * 1000000;
    }

    const thousandMatch = compact.match(/^([0-9]+(?:\.[0-9]+)?)\s*K$/i);
    if (thousandMatch) {
      return Number(thousandMatch[1]) * 1000;
    }

    const normalized = compact.replace(/[^0-9.\-]/g, '');
    if (normalized === '' || normalized === '-' || normalized === '.') return 0;
    const parsed = Number(normalized);
    return Number.isFinite(parsed) ? parsed : 0;
  }

  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : 0;
};

const safeNumber = (value: any): number => parsePopulationText(value);

// Data konsumsi per 1.000 penduduk per hari.
export const FOOD_CONSUMPTION_PER_CAPITA: Record<string, number> = {
  // Peternakan
  ayam_unggas: 0.15,
  sapi_potong: 0.08,
  sapi_perah: 0.12,
  domba_kambing: 0.05,
  // Agrikultur
  padi: 0.35,
  gandum: 0.24,
  jagung: 0.18,
  sayur: 0.30,
  umbi: 0.20,
  kedelai: 0.15,
  kelapa_sawit: 0.10,
  kopi: 0.05,
  teh: 0.06,
  kakao: 0.04,
  tebu: 0.15,
  karet: 0.02,
  // Perikanan
  udang: 0.08,
  ikan: 0.25,
  mutiara: 0.01,
  // Olahan Pangan
  air_mineral: 0.35,
  gula: 0.20,
  roti: 0.18,
  pengolahan_daging: 0.10,
  mie_instan: 0.25,
  minyak_goreng: 0.10,
  susu: 0.15,
};

// Helper to find building metadata
export const findMeta = (key: string, metadata: any) => {
  if (!metadata) return undefined;
  if (metadata[key]) return metadata[key];
  for (const k of Object.keys(metadata)) {
    const entry = metadata[k];
    if (!entry) continue;
    if (entry.dataKey === key) return entry;
    if (k.endsWith(`_${key}`) || k === `1_${key}`) return entry;
  }
  return undefined;
};

// Calculate production based on building count and metadata
export const calculateProduction = (buildingKey: string, countryDetail: any, metadata: any) => {
  const count = safeNumber(countryDetail?.[buildingKey]);
  const bMeta = findMeta(buildingKey, metadata);
  const baseProd = safeNumber(bMeta?.produksi);
  return baseProd * count;
};

// Calculate consumption based on population and consumption per capita
export const calculateConsumption = (population: number, consumptionPerCapita: number) => {
  const safePopulation = safeNumber(population);
  const safePerCapita = safeNumber(consumptionPerCapita);
  return Math.round((safePopulation / 1000) * safePerCapita);
};

// Calculate total production, consumption and balance for a country (Flat list)
export const calculateCountryFoodAggregate = (country: any, metadata: any) => {
  let totalProduction = 0;
  let totalConsumption = 0;
  
  const population = safeNumber(
    country?.jumlah_penduduk ?? 
    country?.population ?? 
    country?.pop ?? 
    country?.penduduk ?? 
    country?.total_population ?? 
    0
  );

  Object.entries(FOOD_CONSUMPTION_PER_CAPITA).forEach(([key, consumptionPerCapita]) => {
    const prod = calculateProduction(key, country, metadata);
    const cons = calculateConsumption(population, consumptionPerCapita);
    totalProduction += prod;
    totalConsumption += cons;
  });

  return {
    totalProduction: Number.isFinite(totalProduction) ? totalProduction : 0,
    totalConsumption: Number.isFinite(totalConsumption) ? totalConsumption : 0,
    balance: Number.isFinite(totalProduction - totalConsumption) ? (totalProduction - totalConsumption) : 0,
  };
};

// Calculate detailed commodity food info for a country (Flat list)
export const calculateCountryFoodDetails = (country: any, metadata: any) => {
  const population = safeNumber(
    country?.jumlah_penduduk ?? 
    country?.population ?? 
    country?.pop ?? 
    country?.penduduk ?? 
    country?.total_population ?? 
    0
  );

  return Object.entries(FOOD_CONSUMPTION_PER_CAPITA).map(([key, consumptionPerCapita]) => {
    const production = calculateProduction(key, country, metadata);
    const consumption = calculateConsumption(population, consumptionPerCapita);
    return {
      key,
      label: metadata?.[key]?.label || key.replace(/_/g, ' ').replace(/\b\w/g, (ch) => ch.toUpperCase()),
      production: isNaN(production) ? 0 : production,
      consumption: isNaN(consumption) ? 0 : consumption,
      balance: isNaN(production - consumption) ? 0 : (production - consumption)
    };
  });
};
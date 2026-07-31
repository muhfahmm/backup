// Data konsumsi per 1.000 penduduk per hari.
// Nilai prodPerUnit TIDAK ada di sini — produksi diambil langsung dari metadata JSON bangunan.
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

// Calculate production based on building count and metadata or fallback prodPerUnit
export const calculateProduction = (buildingKey: string, prodPerUnit: number, countryDetail: any, metadata: any) => {
  const count = Number(countryDetail?.[buildingKey]) || 0;
  const bMeta = findMeta(buildingKey, metadata);
  const baseProd = Number(bMeta?.produksi) || prodPerUnit;
  return baseProd * count;
};

// Calculate consumption based on population and consumption per capita
export const calculateConsumption = (population: number, consumptionPerCapita: number) => {
  return Math.round((population / 1000) * consumptionPerCapita);
};

// Calculate total production, consumption and balance for a country
export const calculateCountryFoodAggregate = (country: any, foodSectors: any[], metadata: any) => {
  let totalProduction = 0;
  let totalConsumption = 0;
  
  // Extract population
  const population = Number(
    country?.jumlah_penduduk ?? 
    country?.population ?? 
    country?.pop ?? 
    country?.penduduk ?? 
    country?.total_population ?? 
    0
  );

  foodSectors.forEach(sektor => {
    sektor.items.forEach((item: any) => {
      const prod = calculateProduction(item.buildingKey, item.prodPerUnit, country, metadata);
      const cons = calculateConsumption(population, item.consumptionPerCapita);
      totalProduction += prod;
      totalConsumption += cons;
    });
  });

  return {
    totalProduction: isNaN(totalProduction) ? 0 : totalProduction,
    totalConsumption: isNaN(totalConsumption) ? 0 : totalConsumption,
    balance: isNaN(totalProduction - totalConsumption) ? 0 : (totalProduction - totalConsumption),
  };
};

// Calculate detailed sector and commodity food info for a country
export const calculateCountryFoodDetails = (country: any, foodSectors: any[], metadata: any) => {
  const population = Number(
    country?.jumlah_penduduk ?? 
    country?.population ?? 
    country?.pop ?? 
    country?.penduduk ?? 
    country?.total_population ?? 
    0
  );

  return foodSectors.map(sektor => ({
    ...sektor,
    items: sektor.items.map((item: any) => {
      const production = calculateProduction(item.buildingKey, item.prodPerUnit, country, metadata);
      const consumption = calculateConsumption(population, item.consumptionPerCapita);
      return {
        ...item,
        production: isNaN(production) ? 0 : production,
        consumption: isNaN(consumption) ? 0 : consumption,
        balance: isNaN(production - consumption) ? 0 : (production - consumption)
      };
    })
  }));
};
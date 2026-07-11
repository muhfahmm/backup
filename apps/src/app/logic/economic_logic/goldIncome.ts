export const GOLD_MINING_PRODUCTION_PER_BUILDING = 50;
export const GOLD_MINING_PRICE_PER_UNIT = 150;
export const GOLD_MINING_DAYS_PER_MONTH = 30;

export const calculateGoldMiningDailyProduction = (countryDetail: any) => {
  const buildingCount = Number(countryDetail?.emas) || 0;
  return buildingCount * GOLD_MINING_PRODUCTION_PER_BUILDING;
};

export const calculateGoldMiningMonthlyIncome = (countryDetail: any) => {
  const dailyProduction = calculateGoldMiningDailyProduction(countryDetail);
  if (dailyProduction <= 0) {
    return 0;
  }

  return Math.round(
    dailyProduction * GOLD_MINING_PRICE_PER_UNIT * GOLD_MINING_DAYS_PER_MONTH
  );
};

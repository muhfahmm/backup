export const GOLD_MINING_PRODUCTION_PER_BUILDING = 50;
export const GOLD_MINING_PRICE_PER_UNIT = 150;
export const GOLD_MINING_DAYS_PER_MONTH = 30;

export const calculateGoldMiningMonthlyIncome = (countryDetail: any) => {
  if (typeof countryDetail?.gold_income === 'number') {
    return countryDetail.gold_income;
  }

  const buildingCount = Number(countryDetail?.emas) || 0;
  if (buildingCount <= 0) {
    return 60000;
  }

  return Math.round(
    buildingCount *
      GOLD_MINING_PRODUCTION_PER_BUILDING *
      GOLD_MINING_PRICE_PER_UNIT *
      GOLD_MINING_DAYS_PER_MONTH
  );
};

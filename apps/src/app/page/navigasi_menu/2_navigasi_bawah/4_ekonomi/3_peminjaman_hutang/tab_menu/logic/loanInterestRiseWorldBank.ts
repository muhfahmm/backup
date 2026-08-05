export const getDelayedInterestRateForMultilateralLoan = (missedMonths: number): number => {
  return 0.015 * missedMonths;
};

export const calculateDelayedInterestAmountForMultilateralLoan = (
  outstandingAmount: number,
  missedMonths: number
): number => {
  const rate = getDelayedInterestRateForMultilateralLoan(missedMonths);
  return outstandingAmount * rate;
};

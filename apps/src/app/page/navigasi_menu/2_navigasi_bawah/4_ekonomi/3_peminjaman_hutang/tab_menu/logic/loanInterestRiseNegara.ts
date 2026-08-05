export const getDelayedInterestRateForBilateralLoan = (missedMonths: number): number => {
  return 0.015 * missedMonths;
};

export const calculateDelayedInterestAmountForBilateralLoan = (
  outstandingAmount: number,
  missedMonths: number
): number => {
  const rate = getDelayedInterestRateForBilateralLoan(missedMonths);
  return outstandingAmount * rate;
};

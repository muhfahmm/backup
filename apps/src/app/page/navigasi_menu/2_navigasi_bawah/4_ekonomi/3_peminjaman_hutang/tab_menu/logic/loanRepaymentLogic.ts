import { LoanRecord } from "../utils";

interface ProcessDueLoansResult {
  nextLoanList: LoanRecord[];
  availableCash: number;
  updatedTotalHutang: number;
  updated: boolean;
}

const parseIdDate = (dateString: string) => {
  const parts = String(dateString).split("/").map((part) => Number(part));
  if (parts.length !== 3 || parts.some((part) => Number.isNaN(part))) {
    return new Date(dateString);
  }
  const [day, month, year] = parts;
  return new Date(year, month - 1, day, 0, 0, 0, 0);
};

const formatIdDate = (date: Date) => {
  return date.toLocaleDateString("id-ID");
};

const addDays = (date: Date, days: number) => {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
};

export const processDueLoans = (
  loans: LoanRecord[],
  currentDate: Date,
  availableCash: number
): ProcessDueLoansResult => {
  const dueDate = new Date(currentDate);
  dueDate.setHours(0, 0, 0, 0);

  let updated = false;

  const nextLoanList = loans.map((entry) => {
    if (!entry?.returnDate) return entry;

    const entryDueDate = parseIdDate(entry.returnDate);
    entryDueDate.setHours(0, 0, 0, 0);

    if (entryDueDate > dueDate) return entry;

    let {
      totalRepayment,
      paidAmount = 0,
      amount,
      interest,
      missedMonths = 0,
      accumulatedPenalty = 0,
      status = "Aktif",
    } = entry;

    totalRepayment = Number(totalRepayment) || 0;
    paidAmount = Number(paidAmount) || 0;
    amount = Number(amount) || 0;
    interest = Number(interest) || 0;

    if (totalRepayment <= 0) return entry;

    const payment = Math.min(availableCash, totalRepayment);
    updated = true;

    if (payment > 0) {
      availableCash -= payment;
      totalRepayment -= payment;
      paidAmount += payment;
    }

    if (totalRepayment > 0) {
      missedMonths += 1;
      const penaltyRate = 0.05 * missedMonths;
      const penaltyAmount = totalRepayment * penaltyRate;

      totalRepayment += penaltyAmount;
      accumulatedPenalty += penaltyAmount;

      // 🔥 PERBAIKAN: Tambahkan 'as const' agar TypeScript tidak menganggapnya sebagai 'string' biasa
      return {
        ...entry,
        status: "Aktif" as const, 
        totalRepayment,
        paidAmount,
        accumulatedPenalty,
        missedMonths,
        returnDate: formatIdDate(addDays(dueDate, 30)),
      };
    }

    // 🔥 PERBAIKAN: Tambahkan 'as const' pada status Lunas
    return {
      ...entry,
      status: "Lunas" as const,
      totalRepayment: 0,
      paidAmount: paidAmount + payment,
      accumulatedPenalty,
    };
  });

  const finalTotalHutang = nextLoanList
    .filter((loan) => loan.status === "Aktif")
    .reduce((sum, loan) => sum + (loan.totalRepayment || 0), 0);

  return {
    nextLoanList,
    availableCash,
    updatedTotalHutang: Math.max(0, finalTotalHutang),
    updated,
  };
};
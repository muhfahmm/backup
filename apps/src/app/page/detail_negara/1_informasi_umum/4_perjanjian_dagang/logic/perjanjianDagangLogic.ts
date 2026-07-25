// Logic helper for Perjanjian Dagang card in Detail Negara
import getTradeAgreementsForCountry from '../../../../../../../../json/database_mitra_perdagangan/tradeAgreementRegistry';

export type TradeAgreement = {
  no: number;
  mitra: string;
  type: string;
  status: string;
};

const normalizeName = (value?: string | null): string => {
  return String(value || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '');
};

export const playerHasTradeWith = (viewedCountryName?: string | null, playerCountryName?: string | null): boolean => {
  if (!viewedCountryName || !playerCountryName) return false;
  try {
    const playerAgreements: TradeAgreement[] = getTradeAgreementsForCountry(playerCountryName);
    if (!Array.isArray(playerAgreements) || playerAgreements.length === 0) return false;
    const normViewed = normalizeName(viewedCountryName);
    return playerAgreements.some(a => normalizeName(a.mitra) === normViewed);
  } catch (e) {
    console.error('perjanjianDagangLogic: failed to check trade partners', e);
    return false;
  }
};

export const getTradeButtonClass = (viewedCountryName?: string | null, playerCountryName?: string | null): string => {
  if (playerHasTradeWith(viewedCountryName, playerCountryName)) {
    return 'bg-emerald-50 hover:bg-emerald-100 active:bg-emerald-200 border border-emerald-600 text-emerald-700';
  }
  return 'bg-white/70 border border-[#C4B49C]/30';
};

export const getTradeButtonLabel = (viewedCountryName?: string | null, playerCountryName?: string | null): string => {
  return playerHasTradeWith(viewedCountryName, playerCountryName) ? 'Putus Hubungan Dagang' : 'Perjanjian Dagang';
};

export default {
  playerHasTradeWith,
  getTradeButtonClass,
  getTradeButtonLabel,
};

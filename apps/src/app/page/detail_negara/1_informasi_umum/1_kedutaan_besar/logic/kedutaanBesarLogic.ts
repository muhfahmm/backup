// Logic helper for Kedutaan Besar actions
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

/**
 * Check whether playerCountry has a trade agreement with viewedCountry.
 * If playerCountryName is not provided, falls back to checking whether viewedCountry
 * has any agreements at all (legacy behavior).
 */
export const countryHasTradePartners = (viewedCountryName?: string | null, playerCountryName?: string | null): boolean => {
  if (!viewedCountryName) return false;

  try {
    // If player country provided, check player's agreements for a matching mitra
    if (playerCountryName) {
      const playerAgreements: TradeAgreement[] = getTradeAgreementsForCountry(playerCountryName);
      if (!Array.isArray(playerAgreements) || playerAgreements.length === 0) return false;

      const normViewed = normalizeName(viewedCountryName);
      return playerAgreements.some(a => normalizeName(a.mitra) === normViewed);
    }

    // Fallback: check whether the viewed country has any agreements at all
    const agreements: TradeAgreement[] = getTradeAgreementsForCountry(viewedCountryName);
    return Array.isArray(agreements) && agreements.length > 0;
  } catch (e) {
    console.error('kedutaanBesarLogic: failed to check trade partners', e);
    return false;
  }
};

export const getEmbassyButtonLabel = (viewedCountryName?: string | null, playerCountryName?: string | null): string => {
  return countryHasTradePartners(viewedCountryName, playerCountryName) ? 'Hancurkan Kedutaan' : 'Bangun Kedutaan';
};

export const getEmbassyButtonClass = (viewedCountryName?: string | null, playerCountryName?: string | null): string => {
  if (countryHasTradePartners(viewedCountryName, playerCountryName)) {
    // Use pale green background with green border to match UI style in Mitra list
    return 'bg-emerald-50 hover:bg-emerald-100 active:bg-emerald-200 border border-emerald-600 text-emerald-700';
  }
  return 'bg-white/70 border border-[#C4B49C]/30';
};

export default {
  countryHasTradePartners,
  getEmbassyButtonLabel,
  getEmbassyButtonClass,
};

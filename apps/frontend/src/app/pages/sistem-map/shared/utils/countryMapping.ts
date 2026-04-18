/**
 * ISO 3166-1 Alpha-3 to Alpha-2 Mapping
 * Used for fetching flags from flagcdn.com
 */
export const alpha3ToAlpha2: Record<string, string> = {
  'AFG': 'af', 'ZAF': 'za', 'ALB': 'al', 'DZA': 'dz', 'USA': 'us', 'AND': 'ad', 'AGO': 'ao', 'ATG': 'ag',
  'SAU': 'sa', 'ARG': 'ar', 'ARM': 'am', 'AUS': 'au', 'AUT': 'at', 'AZE': 'az', 'BHS': 'bs', 'BHR': 'bh',
  'BGD': 'bd', 'BRB': 'bb', 'NLD': 'nl', 'BLR': 'by', 'BEL': 'be', 'BLZ': 'bz', 'BEN': 'bj', 'BMU': 'bm',
  'BTN': 'bt', 'BOL': 'bo', 'BWA': 'bw', 'BRA': 'br', 'BRN': 'bn', 'BGR': 'bg', 'BFA': 'bf', 'BDI': 'bi',
  'CZE': 'cz', 'TCD': 'td', 'CHL': 'cl', 'CHN': 'cn', 'CRI': 'cr', 'DNK': 'dk', 'DJI': 'dj', 'DMA': 'dm',
  'ECU': 'ec', 'SLV': 'sv', 'ERI': 'er', 'EST': 'ee', 'SWZ': 'sz', 'ETH': 'et', 'FJI': 'fj', 'PHL': 'ph',
  'FIN': 'fi', 'GAB': 'ga', 'GMB': 'gm', 'GEO': 'ge', 'GHA': 'gh', 'GRL': 'gl', 'GRD': 'gd', 'GUM': 'gu',
  'GTM': 'gt', 'GIN': 'gn', 'GUY': 'gy', 'HTI': 'ht', 'HND': 'hn', 'HKG': 'hk', 'HUN': 'hu', 'IND': 'in',
  'IDN': 'id', 'GBR': 'gb', 'IRQ': 'iq', 'IRN': 'ir', 'ISL': 'is', 'ISR': 'il', 'ITA': 'it', 'JAM': 'jm',
  'JPN': 'jp', 'DEU': 'de', 'KHM': 'kh', 'CMR': 'cm', 'CAN': 'ca', 'KAZ': 'kz', 'KEN': 'ke', 'FRO': 'fo',
  'KGZ': 'kg', 'KIR': 'ki', 'COL': 'co', 'COM': 'km', 'COG': 'cg', 'KOR': 'kr', 'PRK': 'kp', 'HRV': 'hr',
  'CUB': 'cu', 'KWT': 'kw', 'LAO': 'la', 'LVA': 'lv', 'LBN': 'lb', 'LSO': 'ls', 'LBR': 'lr', 'LBY': 'ly',
  'LIE': 'li', 'LTU': 'lt', 'LUX': 'lu', 'MDG': 'mg', 'MAC': 'mo', 'MWI': 'mw', 'MYS': 'my', 'MDV': 'mv',
  'MLI': 'ml', 'MLT': 'mt', 'MAR': 'ma', 'MRT': 'mr', 'MUS': 'mu', 'MEX': 'mx', 'EGY': 'eg', 'FSM': 'fm',
  'MDA': 'md', 'MCO': 'mc', 'MNG': 'mn', 'MNE': 'me', 'MOZ': 'mz', 'MMR': 'mm', 'NAM': 'na', 'NRU': 'nr',
  'NPL': 'np', 'NER': 'ne', 'NGA': 'ng', 'NIC': 'ni', 'OMN': 'om', 'PAK': 'pk', 'PLW': 'pw', 'PSE': 'ps',
  'PAN': 'pa', 'CIV': 'ci', 'PNG': 'pg', 'PRY': 'py', 'PER': 'pe', 'POL': 'pl', 'PRT': 'pt', 'FRA': 'fr',
  'PRI': 'pr', 'QAT': 'qa', 'CAF': 'cf', 'COD': 'cd', 'DOM': 'do', 'ROU': 'ro', 'SRB': 'rs', 'SDN': 'sd',
  'TZA': 'tz', 'TLS': 'tl', 'UGA': 'ug', 'ZMB': 'zm', 'ZWE': 'zw', 'RUS': 'ru', 'RWA': 'rw', 'KNA': 'kn',
  'LCA': 'lc', 'VCT': 'vc', 'WSM': 'ws', 'ASM': 'as', 'SMR': 'sm', 'STP': 'st', 'NZL': 'nz', 'SEN': 'sn',
  'SYC': 'sc', 'SLE': 'sl', 'SGP': 'sg', 'CYP': 'cy', 'SVN': 'si', 'SVK': 'sk', 'SOM': 'so', 'ESP': 'es',
  'LKA': 'lk', 'SSD': 'ss', 'SYR': 'sy', 'SUR': 'sr', 'SWE': 'se', 'CHE': 'ch', 'TWN': 'tw', 'TJK': 'tj',
  'CPV': 'cv', 'THA': 'th', 'TGO': 'tg', 'TON': 'to', 'TTO': 'tt', 'TUN': 'tn', 'TUR': 'tr', 'TKM': 'tm',
  'TUV': 'tv', 'UKR': 'ua', 'ARE': 'ae', 'URY': 'uy', 'UZB': 'uz', 'VUT': 'vu', 'VAT': 'va', 'VEN': 've',
  'VNM': 'vn', 'YEM': 'ye', 'JOR': 'jo', 'GRC': 'gr',
  // Missing Mappings Fix
  'BIH': 'ba', 'CUW': 'cw', 'GIB': 'gi', 'GNB': 'gw', 'GUF': 'gf', 'IRL': 'ie', 'MHL': 'mh', 'NOR': 'no', 'PYF': 'pf', 'XKK': 'xk'
};

export const getFlagUrl = (alpha3: string) => {
  const alpha2 = alpha3ToAlpha2[alpha3.toUpperCase()];
  if (!alpha2) return null; // Fallback handled in component
  return `https://flagcdn.com/w160/${alpha2.toLowerCase()}.png`;
};

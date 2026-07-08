/**
 * Country Geography Database
 * Complete mapping of countries to their maritime access status
 * Based on geopolitical data and Indonesian country names from db_negara.txt
 */

/**
 * Comprehensive list of countries with their maritime status
 * Format: indonesian_name -> { hasSeaAccess: boolean, englishName: string }
 */
export const COUNTRY_GEOGRAPHY_DATABASE: Record<string, { hasSeaAccess: boolean; englishName: string }> = {
  // Landlocked countries (NO maritime access)
  'afganistan': { hasSeaAccess: false, englishName: 'Afghanistan' },
  'andorra': { hasSeaAccess: false, englishName: 'Andorra' },
  'armenia': { hasSeaAccess: false, englishName: 'Armenia' },
  'austria': { hasSeaAccess: false, englishName: 'Austria' },
  'azerbaijan': { hasSeaAccess: false, englishName: 'Azerbaijan' },
  'belarus': { hasSeaAccess: false, englishName: 'Belarus' },
  'belgia': { hasSeaAccess: false, englishName: 'Belgium' },
  'bhutan': { hasSeaAccess: false, englishName: 'Bhutan' },
  'bolivia': { hasSeaAccess: false, englishName: 'Bolivia' },
  'botswana': { hasSeaAccess: false, englishName: 'Botswana' },
  'burkina faso': { hasSeaAccess: false, englishName: 'Burkina Faso' },
  'burundi': { hasSeaAccess: false, englishName: 'Burundi' },
  'ceko': { hasSeaAccess: false, englishName: 'Czech Republic' },
  'chad': { hasSeaAccess: false, englishName: 'Chad' },
  'eswatini': { hasSeaAccess: false, englishName: 'Eswatini' },
  'ethiopia': { hasSeaAccess: false, englishName: 'Ethiopia' },
  'hongaria': { hasSeaAccess: false, englishName: 'Hungary' },
  'hungaria': { hasSeaAccess: false, englishName: 'Hungary' },
  'kosovo': { hasSeaAccess: false, englishName: 'Kosovo' },
  'kyrgyzstan': { hasSeaAccess: false, englishName: 'Kyrgyzstan' },
  'kirgizstan': { hasSeaAccess: false, englishName: 'Kyrgyzstan' },
  'laos': { hasSeaAccess: false, englishName: 'Laos' },
  'lesotho': { hasSeaAccess: false, englishName: 'Lesotho' },
  'liechtenstein': { hasSeaAccess: false, englishName: 'Liechtenstein' },
  'luksemburg': { hasSeaAccess: false, englishName: 'Luxembourg' },
  'luksemburh': { hasSeaAccess: false, englishName: 'Luxembourg' },
  'made donia utara': { hasSeaAccess: false, englishName: 'North Macedonia' },
  'makedonia utara': { hasSeaAccess: false, englishName: 'North Macedonia' },
  'mali': { hasSeaAccess: false, englishName: 'Mali' },
  'moldova': { hasSeaAccess: false, englishName: 'Moldova' },
  'mongolia': { hasSeaAccess: false, englishName: 'Mongolia' },
  'nepal': { hasSeaAccess: false, englishName: 'Nepal' },
  'niger': { hasSeaAccess: false, englishName: 'Niger' },
  'palestina': { hasSeaAccess: false, englishName: 'Palestine' },
  'paraguay': { hasSeaAccess: false, englishName: 'Paraguay' },
  'polandia': { hasSeaAccess: false, englishName: 'Poland' },
  'republik afrika tengah': { hasSeaAccess: false, englishName: 'Central African Republic' },
  'republik serbia': { hasSeaAccess: false, englishName: 'Serbia' },
  'republik sudan': { hasSeaAccess: false, englishName: 'Sudan' },
  'rwanda': { hasSeaAccess: false, englishName: 'Rwanda' },
  'san marino': { hasSeaAccess: false, englishName: 'San Marino' },
  'slowakia': { hasSeaAccess: false, englishName: 'Slovakia' },
  'swiss': { hasSeaAccess: false, englishName: 'Switzerland' },
  'tajikistan': { hasSeaAccess: false, englishName: 'Tajikistan' },
  'tajikstan': { hasSeaAccess: false, englishName: 'Tajikistan' },
  'turkmenistan': { hasSeaAccess: false, englishName: 'Turkmenistan' },
  'uganda': { hasSeaAccess: false, englishName: 'Uganda' },
  'republik uganda': { hasSeaAccess: false, englishName: 'Uganda' },
  'uzbekistan': { hasSeaAccess: false, englishName: 'Uzbekistan' },
  'vatikan': { hasSeaAccess: false, englishName: 'Vatican City' },
  'zambia': { hasSeaAccess: false, englishName: 'Zambia' },
  'republik zambia': { hasSeaAccess: false, englishName: 'Zambia' },
  'zimbabwe': { hasSeaAccess: false, englishName: 'Zimbabwe' },
  'republik zimbabwe': { hasSeaAccess: false, englishName: 'Zimbabwe' },

  // Countries WITH maritime access (sea access)
  'afrika selatan': { hasSeaAccess: true, englishName: 'South Africa' },
  'albania': { hasSeaAccess: true, englishName: 'Albania' },
  'aljazair': { hasSeaAccess: true, englishName: 'Algeria' },
  'amerika serikat': { hasSeaAccess: true, englishName: 'United States' },
  'angola': { hasSeaAccess: true, englishName: 'Angola' },
  'antigua dan barbuda': { hasSeaAccess: true, englishName: 'Antigua and Barbuda' },
  'arab saudi': { hasSeaAccess: true, englishName: 'Saudi Arabia' },
  'argentina': { hasSeaAccess: true, englishName: 'Argentina' },
  'australia': { hasSeaAccess: true, englishName: 'Australia' },
  'bahama': { hasSeaAccess: true, englishName: 'Bahamas' },
  'bahrain': { hasSeaAccess: true, englishName: 'Bahrain' },
  'bangladesh': { hasSeaAccess: true, englishName: 'Bangladesh' },
  'barbados': { hasSeaAccess: true, englishName: 'Barbados' },
  'belanda': { hasSeaAccess: true, englishName: 'Netherlands' },
  'belize': { hasSeaAccess: true, englishName: 'Belize' },
  'benin': { hasSeaAccess: true, englishName: 'Benin' },
  'bermuda': { hasSeaAccess: true, englishName: 'Bermuda' },
  'brazil': { hasSeaAccess: true, englishName: 'Brazil' },
  'brunei': { hasSeaAccess: true, englishName: 'Brunei' },
  'bulgaria': { hasSeaAccess: true, englishName: 'Bulgaria' },
  'chile': { hasSeaAccess: true, englishName: 'Chile' },
  'china': { hasSeaAccess: true, englishName: 'China' },
  'costa rica': { hasSeaAccess: true, englishName: 'Costa Rica' },
  'curacao': { hasSeaAccess: true, englishName: 'Curacao' },
  'denmark': { hasSeaAccess: true, englishName: 'Denmark' },
  'djibouti': { hasSeaAccess: true, englishName: 'Djibouti' },
  'dominika': { hasSeaAccess: true, englishName: 'Dominica' },
  'ekuador': { hasSeaAccess: true, englishName: 'Ecuador' },
  'el salvador': { hasSeaAccess: true, englishName: 'El Salvador' },
  'eritrea': { hasSeaAccess: true, englishName: 'Eritrea' },
  'estonia': { hasSeaAccess: true, englishName: 'Estonia' },
  'fiji': { hasSeaAccess: true, englishName: 'Fiji' },
  'filipina': { hasSeaAccess: true, englishName: 'Philippines' },
  'finlandia': { hasSeaAccess: true, englishName: 'Finland' },
  'gabon': { hasSeaAccess: true, englishName: 'Gabon' },
  'gambia': { hasSeaAccess: true, englishName: 'Gambia' },
  'georgia': { hasSeaAccess: true, englishName: 'Georgia' },
  'ghana': { hasSeaAccess: true, englishName: 'Ghana' },
  'gibraltar': { hasSeaAccess: true, englishName: 'Gibraltar' },
  'greenland': { hasSeaAccess: true, englishName: 'Greenland' },
  'grenada': { hasSeaAccess: true, englishName: 'Grenada' },
  'guam': { hasSeaAccess: true, englishName: 'Guam' },
  'guatemala': { hasSeaAccess: true, englishName: 'Guatemala' },
  'guiana prancis': { hasSeaAccess: true, englishName: 'French Guiana' },
  'guinea': { hasSeaAccess: true, englishName: 'Guinea' },
  'guinea bissau': { hasSeaAccess: true, englishName: 'Guinea-Bissau' },
  'guyana': { hasSeaAccess: true, englishName: 'Guyana' },
  'haiti': { hasSeaAccess: true, englishName: 'Haiti' },
  'honduras': { hasSeaAccess: true, englishName: 'Honduras' },
  'india': { hasSeaAccess: true, englishName: 'India' },
  'indonesia': { hasSeaAccess: true, englishName: 'Indonesia' },
  'inggris': { hasSeaAccess: true, englishName: 'England' },
  'irak': { hasSeaAccess: true, englishName: 'Iraq' },
  'iran': { hasSeaAccess: true, englishName: 'Iran' },
  'irlandia': { hasSeaAccess: true, englishName: 'Ireland' },
  'islandia': { hasSeaAccess: true, englishName: 'Iceland' },
  'israel': { hasSeaAccess: true, englishName: 'Israel' },
  'italia': { hasSeaAccess: true, englishName: 'Italy' },
  'jamaika': { hasSeaAccess: true, englishName: 'Jamaica' },
  'jepang': { hasSeaAccess: true, englishName: 'Japan' },
  'jerman': { hasSeaAccess: true, englishName: 'Germany' },
  'kamboja': { hasSeaAccess: true, englishName: 'Cambodia' },
  'kamerun': { hasSeaAccess: true, englishName: 'Cameroon' },
  'kanada': { hasSeaAccess: true, englishName: 'Canada' },
  'kazakhstan': { hasSeaAccess: true, englishName: 'Kazakhstan' },
  'kenya': { hasSeaAccess: true, englishName: 'Kenya' },
  'kepulauan faroe': { hasSeaAccess: true, englishName: 'Faroe Islands' },
  'kiribati': { hasSeaAccess: true, englishName: 'Kiribati' },
  'kolombia': { hasSeaAccess: true, englishName: 'Colombia' },
  'komoro': { hasSeaAccess: true, englishName: 'Comoros' },
  'kongo': { hasSeaAccess: true, englishName: 'Congo' },
  'korea selatan': { hasSeaAccess: true, englishName: 'South Korea' },
  'korea utara': { hasSeaAccess: true, englishName: 'North Korea' },
  'kroasia': { hasSeaAccess: true, englishName: 'Croatia' },
  'kuba': { hasSeaAccess: true, englishName: 'Cuba' },
  'kuwait': { hasSeaAccess: true, englishName: 'Kuwait' },
  'latvia': { hasSeaAccess: true, englishName: 'Latvia' },
  'lebanon': { hasSeaAccess: true, englishName: 'Lebanon' },
  'liberia': { hasSeaAccess: true, englishName: 'Liberia' },
  'libya': { hasSeaAccess: true, englishName: 'Libya' },
  'lithuania': { hasSeaAccess: true, englishName: 'Lithuania' },
  'madagaskar': { hasSeaAccess: true, englishName: 'Madagascar' },
  'makau': { hasSeaAccess: true, englishName: 'Macau' },
  'malawi': { hasSeaAccess: true, englishName: 'Malawi' },
  'malaysia': { hasSeaAccess: true, englishName: 'Malaysia' },
  'maldives': { hasSeaAccess: true, englishName: 'Maldives' },
  'malta': { hasSeaAccess: true, englishName: 'Malta' },
  'maroko': { hasSeaAccess: true, englishName: 'Morocco' },
  'marshall': { hasSeaAccess: true, englishName: 'Marshall Islands' },
  'mauritania': { hasSeaAccess: true, englishName: 'Mauritania' },
  'mauritius': { hasSeaAccess: true, englishName: 'Mauritius' },
  'meksiko': { hasSeaAccess: true, englishName: 'Mexico' },
  'mesir': { hasSeaAccess: true, englishName: 'Egypt' },
  'mikronesia': { hasSeaAccess: true, englishName: 'Micronesia' },
  'monako': { hasSeaAccess: true, englishName: 'Monaco' },
  'montenegro': { hasSeaAccess: true, englishName: 'Montenegro' },
  'mozambik': { hasSeaAccess: true, englishName: 'Mozambique' },
  'myanmar': { hasSeaAccess: true, englishName: 'Myanmar' },
  'namibia': { hasSeaAccess: true, englishName: 'Namibia' },
  'nauru': { hasSeaAccess: true, englishName: 'Nauru' },
  'nigeria': { hasSeaAccess: true, englishName: 'Nigeria' },
  'nikaragua': { hasSeaAccess: true, englishName: 'Nicaragua' },
  'norwegia': { hasSeaAccess: true, englishName: 'Norway' },
  'oman': { hasSeaAccess: true, englishName: 'Oman' },
  'pakistan': { hasSeaAccess: true, englishName: 'Pakistan' },
  'palau': { hasSeaAccess: true, englishName: 'Palau' },
  'panama': { hasSeaAccess: true, englishName: 'Panama' },
  'pantai gading': { hasSeaAccess: true, englishName: 'Ivory Coast' },
  'papua nugini': { hasSeaAccess: true, englishName: 'Papua New Guinea' },
  'peru': { hasSeaAccess: true, englishName: 'Peru' },
  'portugal': { hasSeaAccess: true, englishName: 'Portugal' },
  'prancis': { hasSeaAccess: true, englishName: 'France' },
  'puerto rico': { hasSeaAccess: true, englishName: 'Puerto Rico' },
  'qatar': { hasSeaAccess: true, englishName: 'Qatar' },
  'republik demokratik kongo': { hasSeaAccess: true, englishName: 'Democratic Republic of the Congo' },
  'republik dominika': { hasSeaAccess: true, englishName: 'Dominican Republic' },
  'republik rumania': { hasSeaAccess: true, englishName: 'Romania' },
  'republik tanzania': { hasSeaAccess: true, englishName: 'Tanzania' },
  'republik timor leste': { hasSeaAccess: true, englishName: 'East Timor' },
  'rusia': { hasSeaAccess: true, englishName: 'Russia' },
  'saint kitts dan nevis': { hasSeaAccess: true, englishName: 'Saint Kitts and Nevis' },
  'saint lucia': { hasSeaAccess: true, englishName: 'Saint Lucia' },
  'saint vincent dan grenadine': { hasSeaAccess: true, englishName: 'Saint Vincent and the Grenadines' },
  'samoa': { hasSeaAccess: true, englishName: 'Samoa' },
  'samoa amerika': { hasSeaAccess: true, englishName: 'American Samoa' },
  'sao tome dan principe': { hasSeaAccess: true, englishName: 'Sao Tome and Principe' },
  'selandia baru': { hasSeaAccess: true, englishName: 'New Zealand' },
  'senegal': { hasSeaAccess: true, englishName: 'Senegal' },
  'seychelles': { hasSeaAccess: true, englishName: 'Seychelles' },
  'sierra leone': { hasSeaAccess: true, englishName: 'Sierra Leone' },
  'singapura': { hasSeaAccess: true, englishName: 'Singapore' },
  'siprus': { hasSeaAccess: true, englishName: 'Cyprus' },
  'slovenia': { hasSeaAccess: true, englishName: 'Slovenia' },
  'somalia': { hasSeaAccess: true, englishName: 'Somalia' },
  'spanyol': { hasSeaAccess: true, englishName: 'Spain' },
  'sri lanka': { hasSeaAccess: true, englishName: 'Sri Lanka' },
  'sudan selatan': { hasSeaAccess: true, englishName: 'South Sudan' },
  'suriah': { hasSeaAccess: true, englishName: 'Syria' },
  'suriname': { hasSeaAccess: true, englishName: 'Suriname' },
  'swedia': { hasSeaAccess: true, englishName: 'Sweden' },
  'tahiti': { hasSeaAccess: true, englishName: 'Tahiti' },
  'taiwan': { hasSeaAccess: true, englishName: 'Taiwan' },
  'tanjung verde': { hasSeaAccess: true, englishName: 'Cape Verde' },
  'thailand': { hasSeaAccess: true, englishName: 'Thailand' },
  'togo': { hasSeaAccess: true, englishName: 'Togo' },
  'tonga': { hasSeaAccess: true, englishName: 'Tonga' },
  'trinidad dan tobago': { hasSeaAccess: true, englishName: 'Trinidad and Tobago' },
  'tunisia': { hasSeaAccess: true, englishName: 'Tunisia' },
  'turki': { hasSeaAccess: true, englishName: 'Turkey' },
  'tuvalu': { hasSeaAccess: true, englishName: 'Tuvalu' },
  'ukraina': { hasSeaAccess: true, englishName: 'Ukraine' },
  'uni emirat arab': { hasSeaAccess: true, englishName: 'United Arab Emirates' },
  'uruguay': { hasSeaAccess: true, englishName: 'Uruguay' },
  'vanuatu': { hasSeaAccess: true, englishName: 'Vanuatu' },
  'venezuela': { hasSeaAccess: true, englishName: 'Venezuela' },
  'vietnam': { hasSeaAccess: true, englishName: 'Vietnam' },
  'yaman': { hasSeaAccess: true, englishName: 'Yemen' },
  'yordania': { hasSeaAccess: true, englishName: 'Jordan' },
  'yunani': { hasSeaAccess: true, englishName: 'Greece' },
};

/**
 * Get maritime status untuk country
 * @param countryName - Indonesian country name atau English name
 * @returns { hasSeaAccess: boolean, englishName: string } atau undefined jika tidak found
 */
export function getCountryMaritimeStatus(countryName: string) {
  const normalized = countryName.toLowerCase().trim();
  return COUNTRY_GEOGRAPHY_DATABASE[normalized];
}

/**
 * Check if country has maritime access
 * @param countryName - Country name
 * @returns true jika country punya sea access, false jika landlocked, undefined jika tidak found
 */
export function hasMaritimeAccessFromDB(countryName: string): boolean | undefined {
  const status = getCountryMaritimeStatus(countryName);
  return status?.hasSeaAccess;
}

/**
 * Get list of all landlocked countries
 */
export function getAllLandlockedCountries(): string[] {
  return Object.entries(COUNTRY_GEOGRAPHY_DATABASE)
    .filter(([, data]) => !data.hasSeaAccess)
    .map(([name]) => name);
}

/**
 * Get list of all maritime countries
 */
export function getAllMaritimeCountries(): string[] {
  return Object.entries(COUNTRY_GEOGRAPHY_DATABASE)
    .filter(([, data]) => data.hasSeaAccess)
    .map(([name]) => name);
}

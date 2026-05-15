import { CountryData } from "../index";
// TRIGGER AGGREGATOR HMR
import { afganistan, arab_saudi, armenia, azerbaijan, bahrain, bangladesh, bhutan, brunei, china, filipina, georgia, india, indonesia, irak, iran, israel, jepang, yordania, kamboja, kazakhstan, kirgizstan, korea_selatan, korea_utara, kuwait, laos, lebanon, malaysia, maldives, mongolia, myanmar, nepal, oman, pakistan, palestina, qatar, republik_timor_leste, singapura, sri_lanka, suriah, taiwan, tajikistan, thailand, turkmenistan, uni_emirat_arab, uzbekistan, vietnam, yaman, hong_kong, makau } from "./asia/index";
import { afrika_selatan, aljazair, angola, benin, botswana, burkina_faso, burundi, chad, eritrea, ethiopia, gabon, gambia, ghana, guinea, guinea_bissau, kamerun, kenya, komoro, kongo, lesotho, liberia, libya, madagaskar, malawi, mali, maroko, mauritania, mauritius, mozambik, namibia, niger, nigeria, republik_afrika_tengah, republik_demokratik_kongo, republik_sudan, republik_tanzania, republik_uganda, republik_zambia, republik_zimbabwe, rwanda, sao_tome_dan_principe, senegal, seychelles, sierra_leone, somalia, sudan_selatan, togo, tunisia, tanjung_verde, djibouti, mesir, eswatini, pantai_gading } from "./afrika/index";
import { albania, andorra, austria, belanda, belarus, belgia, bosnia_dan_hercegovina, bulgaria, ceko, denmark, estonia, finlandia, hungaria, islandia, irlandia, italia, jerman, kroasia, latvia, liechtenstein, lithuania, luksemburg, malta, moldova, monako, montenegro, norwegia, polandia, portugal, republik_rumania, republik_serbia, rusia, san_marino, slowakia, slovenia, spanyol, swedia, swiss, turki, ukraina, vatikan, siprus, prancis, yunani, makedonia_utara, inggris, kepulauan_faroe, gibraltar, kosovo } from "./eropa/index";
import { amerika_serikat, antigua_dan_barbuda, bahama, barbados, belize, costa_rica, dominika, el_salvador, grenada, guatemala, haiti, honduras, jamaika, kanada, kuba, meksiko, nikaragua, panama, republik_dominika, saint_kitts_dan_nevis, saint_lucia, saint_vincent_dan_grenadine, trinidad_dan_tobago, bermuda, curacao, greenland, puerto_rico } from "./na/index";
import { argentina, bolivia, brazil, chile, ekuador, guyana, kolombia, paraguay, peru, suriname, uruguay, venezuela, guiana_prancis } from "./sa/index";
import { australia, fiji, kiribati, marshall, mikronesia, nauru, palau, papua_nugini, samoa, tahiti, tonga, tuvalu, vanuatu, selandia_baru, samoa_amerika, guam } from "./oceania/index";

export const asiaCountries: CountryData[] = [
  afganistan, arab_saudi, armenia, azerbaijan, bahrain, bangladesh, bhutan, brunei, china, filipina, georgia, india, indonesia, irak, iran, israel, jepang, yordania, kamboja, kazakhstan, kirgizstan, korea_selatan, korea_utara, kuwait, laos, lebanon, malaysia, maldives, mongolia, myanmar, nepal, oman, pakistan, palestina, qatar, republik_timor_leste, singapura, sri_lanka, suriah, taiwan, tajikistan, thailand, turkmenistan, uni_emirat_arab, uzbekistan, vietnam, yaman, hong_kong, makau
];

export const afrikaCountries: CountryData[] = [
  afrika_selatan, aljazair, angola, benin, botswana, burkina_faso, burundi, chad, eritrea, ethiopia, gabon, gambia, ghana, guinea, guinea_bissau, kamerun, kenya, komoro, kongo, lesotho, liberia, libya, madagaskar, malawi, mali, maroko, mauritania, mauritius, mozambik, namibia, niger, nigeria, republik_afrika_tengah, republik_demokratik_kongo, republik_sudan, republik_tanzania, republik_uganda, republik_zambia, republik_zimbabwe, rwanda, sao_tome_dan_principe, senegal, seychelles, sierra_leone, somalia, sudan_selatan, togo, tunisia, tanjung_verde, djibouti, mesir, eswatini, pantai_gading
];

export const eropaCountries: CountryData[] = [
  albania, andorra, austria, belanda, belarus, belgia, bosnia_dan_hercegovina, bulgaria, ceko, denmark, estonia, finlandia, hungaria, islandia, irlandia, italia, jerman, kroasia, latvia, liechtenstein, lithuania, luksemburg, malta, moldova, monako, montenegro, norwegia, polandia, portugal, republik_rumania, republik_serbia, rusia, san_marino, slowakia, slovenia, spanyol, swedia, swiss, turki, ukraina, vatikan, siprus, prancis, yunani, makedonia_utara, inggris, kepulauan_faroe, gibraltar, kosovo
];

export const naCountries: CountryData[] = [
  amerika_serikat, antigua_dan_barbuda, bahama, barbados, belize, costa_rica, dominika, el_salvador, grenada, guatemala, haiti, honduras, jamaika, kanada, kuba, meksiko, nikaragua, panama, republik_dominika, saint_kitts_dan_nevis, saint_lucia, saint_vincent_dan_grenadine, trinidad_dan_tobago, bermuda, curacao, greenland, puerto_rico
];

export const saCountries: CountryData[] = [
  argentina, bolivia, brazil, chile, ekuador, guyana, kolombia, paraguay, peru, suriname, uruguay, venezuela, guiana_prancis
];

export const oceaniaCountries: CountryData[] = [
  australia, fiji, kiribati, marshall, mikronesia, nauru, palau, papua_nugini, samoa, tahiti, tonga, tuvalu, vanuatu, selandia_baru, samoa_amerika, guam
];

export const countries: CountryData[] = [
  ...asiaCountries,
  ...afrikaCountries,
  ...eropaCountries,
  ...naCountries,
  ...saCountries,
  ...oceaniaCountries
];

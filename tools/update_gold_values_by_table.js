const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..', 'json', 'semua_fitur_negara', '1_pembangunan', '1_produksi', '2_sektor_mineral_kritis');

const table = `
Afganistan	Asia	600	17	10.200	10.600	+200
Arab Saudi	Asia	400	25	15.000	14.100	+1.300
Armenia	Asia	660	20	12.000	13.500	-840
Azerbaijan	Asia	750	20	12.000	14.800	-2.050
Bahrain	Asia	150	72	43.200	14.700	+28.650
Bangladesh	Asia	785	21	12.600	12.600	+785
Bhutan	Asia	670	18	10.800	13.100	-1.630
Brunei	Asia	300	17	10.200	12.900	-2.400
China	Asia	900	50	30.000	11.000	+19.900
Filipina	Asia	830	100	60.000	12.200	+48.630
Georgia	Asia	580	16	9.600	11.500	-1.320
Hong kong	Asia	315	38	22.800	18.300	+4.815
India	Asia	935	41	24.600	12.500	+13.035
Indonesia	Asia	680	39	23.400	12.000	+12.080
Irak	Asia	650	54	32.400	13.500	+19.550
Iran	Asia	740	16	9.600	13.700	-3.360
Israel	Asia	980	13	7.800	15.000	-6.220
Jepang	Asia	896,2	15	9.000	17.500	-7.603,8
Kamboja	Asia	550	25	15.000	12.600	+2.950
Kazakhstan	Asia	470	48	28.800	13.300	+15.970
Kirgizstan	Asia	370	31	18.600	11.500	+7.470
Korea Selatan	Asia	850	19	11.400	14.100	-1.850
Korea Utara	Asia	1.150	45	27.000	13.000	+15.150
Kuwait	Asia	190	43	25.800	15.600	+10.390
Laos	Asia	590	19	11.400	10.600	+1.390
Lebanon	Asia	545	24	14.400	13.400	+1.545
Makau	Asia	240	40	24.000	16.100	+8.140
Malaysia	Asia	615	34	20.400	12.500	+8.515
Maldives	Asia	140	20	12.000	13.600	-1.460
Mongolia	Asia	350	24	14.400	11.800	+2.950
Myanmar	Asia	600	17	10.200	12.500	-1.700
Nepal	Asia	730	29	17.400	12.000	+6.130
Oman	Asia	300	39	23.400	15.000	+8.700
Pakistan	Asia	860	52	31.200	11.900	+20.160
Palestina	Asia	660	18	10.800	12.700	-1.240
Qatar	Asia	150	15	9.000	17.500	-8.350
Republik timor-leste	Asia	320	18	10.800	10.600	+520
Singapura	Asia	470	43	25.800	16.700	+9.570
Sri lanka	Asia	840	24	14.400	12.300	+2.940
Suriah	Asia	595	16	9.600	13.500	-3.305
Taiwan	Asia	710	28	16.800	14.200	+3.310
Tajikistan	Asia	630	17	10.200	11.800	-970
Thailand	Asia	670	46	27.600	12.000	+16.270
Turkmenistan	Asia	530	15	9.000	13.700	-4.170
Uni emirat arab	Asia	100	38	22.800	15.100	+7.800
Uzbekistan	Asia	580	28	16.800	12.800	+4.580
Vietnam	Asia	700	22	13.200	12.400	+1.500
Yaman	Asia	500	40	24.000	13.400	+11.100
Yordania	Asia	685	15	9.000	12.300	-2.615
Afrika Selatan	Africa	760	45	27.000	10.700	+17.060
Aljazair	Africa	950	45	27.000	10.700	+17.250
Angola	Africa	730	45	27.000	10.800	+16.930
Benin	Africa	880	45	27.000	12.600	+15.280
Botswana	Africa	680	45	27.000	9.900	+17.780
Burkina faso	Africa	905	45	27.000	9.100	+18.805
Burundi	Africa	960	45	27.000	9.400	+18.560
Chad	Africa	960	45	27.000	4.300	+23.660
Djibouti	Africa	730	45	27.000	9.700	+18.030
Eritrea	Africa	800	45	27.000	4.900	+22.900
Eswatini	Africa	790	45	27.000	10.600	+17.190
Ethiopia	Africa	870	45	27.000	8.000	+19.870
Gabon	Africa	1.030	45	27.000	13.100	+14.930
Gambia	Africa	800	45	27.000	6.400	+21.400
Ghana	Africa	810	45	27.000	11.400	+16.410
Guinea	Africa	950	45	27.000	6.400	+21.550
Guinea-bissau	Africa	800	45	27.000	4.800	+23.000
Kamerun	Africa	927,5	45	27.000	9.500	+18.427,5
Kenya	Africa	845	45	27.000	10.300	+17.545
Komoro	Africa	750	45	27.000	13.000	+14.750
Kongo	Africa	1.020	45	27.000	9.000	+19.020
Lesotho	Africa	790	45	27.000	7.400	+20.390
Liberia	Africa	695	45	27.000	5.500	+22.195
Libya	Africa	500	45	27.000	12.000	+15.500
Madagaskar	Africa	800	45	27.000	10.700	+17.100
Malawi	Africa	890	45	27.000	5.900	+21.990
Mali	Africa	930	45	27.000	4.800	+23.130
Maroko	Africa	990	45	27.000	12.500	+15.490
Mauritania	Africa	840	45	27.000	8.900	+18.940
Mauritius	Africa	710	45	27.000	16.900	+10.810
Mesir	Africa	815	45	27.000	9.700	+18.115
Mozambik	Africa	940	45	27.000	6.800	+21.140
Namibia	Africa	960	45	27.000	11.600	+16.360
Niger	Africa	915	45	27.000	4.400	+23.515
Nigeria	Africa	755	45	27.000	14.300	+13.455
Pantai gading	Africa	945	45	27.000	10.300	+17.645
Republik afrika tengah	Africa	1.130	45	27.000	6.100	+22.030
Republik demokratik kongo	Africa	1.030	45	27.000	11.600	+16.430
Republik sudan	Africa	840	45	27.000	11.700	+16.140
Republik tanzania	Africa	890	45	27.000	9.400	+18.490
Republik uganda	Africa	890	45	27.000	11.300	+16.590
Republik zambia	Africa	945	45	27.000	10.200	+17.745
Republik zimbabwe	Africa	907,5	45	27.000	11.600	+16.307,5
Rwanda	Africa	880	45	27.000	8.300	+19.580
Sao tome dan principe	Africa	770	45	27.000	8.600	+19.170
Senegal	Africa	930	45	27.000	9.100	+18.830
Seychelles	Africa	350	45	27.000	14.800	+12.550
Sierra leone	Africa	900	45	27.000	10.800	+17.100
Somalia	Africa	760	45	27.000	9.900	+17.860
Sudan selatan	Africa	680	45	27.000	9.900	+17.780
Tanjung verde	Africa	750	45	27.000	11.300	+16.450
Albania	Europe	630	20	12.000	16.000	-3.370
Andorra	Europe	385	20	12.000	15.700	-3.315
Austria	Europe	1.010	50	30.000	15.000	+16.010
Belanda	Europe	905	28	16.800	18.900	-1.195
Belarus	Europe	730	45	27.000	15.000	+12.730
Belgia	Europe	970	25	15.000	13.400	+2.570
Bosnia dan hercegovina	Europe	800	16	9.600	14.600	-4.200
Bulgaria	Europe	670	12	7.200	15.300	-7.430
Ceko	Europe	725	38	22.800	16.400	+7.125
Denmark	Europe	1.050	33	19.800	14.100	+6.750
Estonia	Europe	820	25	15.000	14.900	+920
Finlandia	Europe	975,6	17	10.200	17.400	-6.224,4
Gibraltar	Europe	500	15	9.000	15.800	-6.300
Hungaria	Europe	610	31	18.600	14.100	+5.110
Inggris	Europe	900	11	6.600	14.900	-7.400
Irlandia	Europe	860	15	9.000	17.300	-7.440
Islandia	Europe	920	16	9.600	14.300	-3.780
Italia	Europe	900	50	30.000	13.800	+17.100
Jerman	Europe	920	32	19.200	16.400	+3.720
Kepulauan faroe	Europe	579,2	20	12.000	16.600	-4.020,8
Kosovo	Europe	530	15	9.000	16.000	-6.470
Kroasia	Europe	800	18	10.800	14.900	-3.300
Latvia	Europe	830	36	21.600	13.400	+9.030
Liechtenstein	Europe	402	12	7.200	13.900	-6.298
Lithuania	Europe	730	20	12.000	16.300	-3.570
Luksemburg	Europe	790	15	9.000	15.100	-5.310
Makedonia utara	Europe	510	18	10.800	14.400	-3.090
Malta	Europe	880	18	10.800	14.000	-2.320
Moldova	Europe	550	15	9.000	13.800	-4.250
Monako	Europe	533,3	19	11.400	15.600	-3.666,7
Montenegro	Europe	590	19	11.400	13.500	-1.510
Norwegia	Europe	989	38	22.800	17.500	+6.289
Polandia	Europe	740	25	15.000	14.800	+940
Portugal	Europe	935	23	13.800	15.800	-1.065
Prancis	Europe	910	12	7.200	15.900	-7.790
Republik rumania	Europe	725	36	21.600	13.600	+8.725
Republik serbia	Europe	570	50	30.000	14.900	+15.670
Rusia	Europe	600	36	21.600	13.500	+8.700
San marino	Europe	770	36	21.600	15.800	+6.570
Siprus	Europe	635	40	24.000	15.600	+9.035
Slovenia	Europe	920	36	21.600	14.700	+7.820
Slowakia	Europe	730	15	9.000	13.900	-4.170
Spanyol	Europe	920	13	7.800	13.700	-4.980
Swedia	Europe	1.046	17	10.200	17.500	-6.254
Swiss	Europe	669	41	24.600	18.200	+7.069
Turki	Europe	830	32	19.200	15.400	+4.630
Ukraina	Europe	610	39	23.400	16.800	+7.210
Vatikan	Europe	990	40	24.000	13.000	+11.990
Yunani	Europe	910	26	15.600	16.800	-290
Amerika Serikat	North America	605	16	9.600	18.700	-8.495
Antigua dan Barbuda	North America	450	12	7.200	16.200	-8.550
Bahama	North America	175	24	14.400	16.300	-1.725
Barbados	North America	800	19	11.400	14.400	-2.200
Belize	North America	675	16	9.600	15.400	-5.125
Bermuda	North America	210	18	10.800	18.500	-7.490
Costa rica	North America	740	24	14.400	16.200	-1.060
Curacao	North America	930	12	7.200	18.100	-9.970
Dominika	North America	770	16	9.600	14.400	-4.030
El salvador	North America	780	20	12.000	16.100	-3.320
Greenland	North America	598	16	9.600	13.000	-2.802
Grenada	North America	775	35	21.000	14.600	+7.175
Guatemala	North America	790	24	14.400	15.200	-10
Haiti	North America	750	20	12.000	16.200	-3.450
Honduras	North America	770	20	12.000	15.700	-2.930
Jamaika	North America	775	16	9.600	14.300	-3.925
Kanada	North America	860,3	23	13.800	17.800	-3.139,7
Kuba	North America	1.250	29	17.400	14.700	+3.950
Meksiko	North America	870	18	10.800	15.300	-3.630
Nikaragua	North America	800	15	9.000	16.300	-6.500
Panama	North America	370	45	27.000	14.600	+12.770
Puerto rico	North America	745	12	7.200	18.300	-10.355
Republik dominika	North America	825	28	16.800	15.100	+2.525
Saint kitts dan nevis	North America	470	44	26.400	16.200	+10.670
Saint lucia	North America	775	15	9.000	15.000	-5.225
Saint vincent dan grenadine	North America	775	16	9.600	14.500	-4.125
Trinidad dan tobago	North America	775	17	10.200	15.000	-4.025
Argentina	South America	1.060	34	20.400	13.300	+8.160
Bolivia	South America	830	49	29.400	12.200	+18.030
Brazil	South America	845	21	12.600	12.600	+845
Chile	South America	930	21	12.600	12.700	+830
Ekuador	South America	820	45	27.000	11.500	+16.320
Guiana prancis	South America	910	15	9.000	10.100	-190
Guyana	South America	775	42	25.200	13.700	+12.275
Kolombia	South America	960	40	24.000	10.900	+14.060
Paraguay	South America	650	18	10.800	12.300	-850
Peru	South America	830	11	6.600	10.900	-3.470
Suriname	South America	760	50	30.000	12.300	+18.460
Uruguay	South America	830	16	9.600	11.500	-1.070
Venezuela	South America	920	43	25.800	9.300	+17.420
Australia	Oceania	880	15	9.000	15.700	-5.820
Fiji	Oceania	660	16	9.600	12.700	-2.440
Guam	Oceania	780	18	10.800	12.700	-1.120
Kiribati	Oceania	600	18	10.800	11.300	+100
Marshall	Oceania	750	32	19.200	13.900	+6.050
Mikronesia	Oceania	800	47	28.200	14.100	+14.900
Nauru	Oceania	50	19	11.400	13.200	-1.750
Palau	Oceania	700	19	11.400	12.700	-600
Papua nugini	Oceania	870	46	27.600	12.400	+16.070
Samoa	Oceania	770	16	9.600	14.900	-4.530
Samoa amerika	Oceania	780	20	12.000	13.400	-620
Selandia baru	Oceania	900	23	13.800	15.500	-800
Tahiti	Oceania	775	19	11.400	12.800	-625
Tuvalu	Oceania	600	15	9.000	14.100	-4.500
Tonga	Oceania	750	15	9.000	12.100	-2.350
Vanuatu	Oceania	300	16	9.600	13.400	-3.500
Togo	Lainnya	885	45	27.000	10.200	+17.685
Tunisia	Lainnya	850	45	27.000	11.000	+16.850
`;

function parseNumber(raw) {
  const value = String(raw || '').trim();
  if (!value) return 0;
  const cleaned = value.replace(/\./g, '').replace(/,/g, '.').replace(/[^0-9.-]/g, '');
  const parsed = Number(cleaned);
  return Number.isFinite(parsed) ? parsed : 0;
}

function normalizeName(text) {
  return String(text || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '');
}

function getTargetRange(tax) {
  if (tax <= 500) return { min: 100, max: 500 };
  if (tax <= 900) return { min: 500, max: 800 };
  return { min: 800, max: 1500 };
}

function findRequiredBuildingCount(tax, expense, range) {
  const productionPerBuilding = 600;
  let best = 0;
  for (let count = 0; count <= 5000; count += 1) {
    const net = tax + count * productionPerBuilding - expense;
    if (net > 0 && net >= range.min && net <= range.max) {
      return count;
    }
    if (net > 0 && count === 0) {
      best = 0;
    }
  }
  return best;
}

function listFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...listFiles(fullPath));
    } else if (entry.isFile() && entry.name.endsWith('.ts')) {
      files.push(fullPath);
    }
  }
  return files;
}

const files = listFiles(root);
const bySlug = new Map();
for (const file of files) {
  const base = path.basename(file, '.ts').replace(/^\d+_/, '');
  bySlug.set(normalizeName(base), file);
}

const rows = table
  .trim()
  .split(/\r?\n/)
  .filter(Boolean)
  .map((line) => {
    const tokens = line.trim().split(/\s+/);
    const country = tokens.slice(0, -6).join(' ');
    const [continent, taxRaw, buildingRaw, productionRaw, expenseRaw, netRaw] = tokens.slice(-6);
    return {
      country,
      continent,
      tax: parseNumber(taxRaw),
      building: parseNumber(buildingRaw),
      production: parseNumber(productionRaw),
      expense: parseNumber(expenseRaw),
      net: parseNumber(netRaw),
    };
  });

let updatedCount = 0;
let missingCount = 0;

for (const row of rows) {
  const slug = normalizeName(row.country);
  const filePath = bySlug.get(slug);
  if (!filePath) {
    missingCount += 1;
    console.log(`No file found for ${row.country}`);
    continue;
  }

  const range = getTargetRange(row.tax);
  const requiredBuildingCount = findRequiredBuildingCount(row.tax, row.expense, range);
  const content = fs.readFileSync(filePath, 'utf8');
  const pattern = /(\bemas\s*:\s*)(\d+)/;
  if (!pattern.test(content)) {
    console.log(`No emas field in ${path.relative(process.cwd(), filePath)}`);
    continue;
  }

  const updatedContent = content.replace(pattern, `$1${requiredBuildingCount}`);
  if (updatedContent !== content) {
    fs.writeFileSync(filePath, updatedContent, 'utf8');
    updatedCount += 1;
  }
}

console.log(`Updated ${updatedCount} files. Missing ${missingCount} files.`);

-- Data Kendaraan untuk sri lanka
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'sri lanka'), 'Sepeda Motor', 3250500),
  ((SELECT id FROM countries WHERE name_en = 'sri lanka'), 'Mobil', 1733600),
  ((SELECT id FROM countries WHERE name_en = 'sri lanka'), 'Bus', 4334),
  ((SELECT id FROM countries WHERE name_en = 'sri lanka'), 'Truk', 21670);
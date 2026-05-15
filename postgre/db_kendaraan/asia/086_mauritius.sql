-- Data Kendaraan untuk mauritius
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'mauritius'), 'Sepeda Motor', 189795),
  ((SELECT id FROM countries WHERE name_en = 'mauritius'), 'Mobil', 101224),
  ((SELECT id FROM countries WHERE name_en = 'mauritius'), 'Bus', 253),
  ((SELECT id FROM countries WHERE name_en = 'mauritius'), 'Truk', 1265);
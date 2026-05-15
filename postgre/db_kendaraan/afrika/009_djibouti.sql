-- Data Kendaraan untuk djibouti
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'djibouti'), 'Sepeda Motor', 143838),
  ((SELECT id FROM countries WHERE name_en = 'djibouti'), 'Mobil', 76713),
  ((SELECT id FROM countries WHERE name_en = 'djibouti'), 'Bus', 191),
  ((SELECT id FROM countries WHERE name_en = 'djibouti'), 'Truk', 958);
-- Data Kendaraan untuk makau
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'makau'), 'Sepeda Motor', 0),
  ((SELECT id FROM countries WHERE name_en = 'makau'), 'Mobil', 0),
  ((SELECT id FROM countries WHERE name_en = 'makau'), 'Bus', 0),
  ((SELECT id FROM countries WHERE name_en = 'makau'), 'Truk', 0);
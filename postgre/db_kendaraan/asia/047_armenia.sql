-- Data Kendaraan untuk armenia
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'armenia'), 'Sepeda Motor', 442766),
  ((SELECT id FROM countries WHERE name_en = 'armenia'), 'Mobil', 236142),
  ((SELECT id FROM countries WHERE name_en = 'armenia'), 'Bus', 590),
  ((SELECT id FROM countries WHERE name_en = 'armenia'), 'Truk', 2951);
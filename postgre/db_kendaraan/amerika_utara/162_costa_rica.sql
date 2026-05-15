-- Data Kendaraan untuk costa rica
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'costa rica'), 'Sepeda Motor', 749916),
  ((SELECT id FROM countries WHERE name_en = 'costa rica'), 'Mobil', 399955),
  ((SELECT id FROM countries WHERE name_en = 'costa rica'), 'Bus', 999),
  ((SELECT id FROM countries WHERE name_en = 'costa rica'), 'Truk', 4999);
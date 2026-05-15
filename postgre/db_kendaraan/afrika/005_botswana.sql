-- Data Kendaraan untuk botswana
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'botswana'), 'Sepeda Motor', 338118),
  ((SELECT id FROM countries WHERE name_en = 'botswana'), 'Mobil', 180330),
  ((SELECT id FROM countries WHERE name_en = 'botswana'), 'Bus', 450),
  ((SELECT id FROM countries WHERE name_en = 'botswana'), 'Truk', 2254);
-- Data Kendaraan untuk honduras
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'honduras'), 'Sepeda Motor', 1438128),
  ((SELECT id FROM countries WHERE name_en = 'honduras'), 'Mobil', 767001),
  ((SELECT id FROM countries WHERE name_en = 'honduras'), 'Bus', 1917),
  ((SELECT id FROM countries WHERE name_en = 'honduras'), 'Truk', 9587);
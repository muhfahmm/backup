-- Data Kendaraan untuk belarus
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'belarus'), 'Sepeda Motor', 1422524),
  ((SELECT id FROM countries WHERE name_en = 'belarus'), 'Mobil', 758679),
  ((SELECT id FROM countries WHERE name_en = 'belarus'), 'Bus', 1896),
  ((SELECT id FROM countries WHERE name_en = 'belarus'), 'Truk', 9483);
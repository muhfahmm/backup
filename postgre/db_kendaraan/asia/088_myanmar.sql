-- Data Kendaraan untuk myanmar
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'myanmar'), 'Sepeda Motor', 8056259),
  ((SELECT id FROM countries WHERE name_en = 'myanmar'), 'Mobil', 4296671),
  ((SELECT id FROM countries WHERE name_en = 'myanmar'), 'Bus', 10741),
  ((SELECT id FROM countries WHERE name_en = 'myanmar'), 'Truk', 53708);
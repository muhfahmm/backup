-- Data Kendaraan untuk republik serbia
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'republik serbia'), 'Sepeda Motor', 1044564),
  ((SELECT id FROM countries WHERE name_en = 'republik serbia'), 'Mobil', 557101),
  ((SELECT id FROM countries WHERE name_en = 'republik serbia'), 'Bus', 1392),
  ((SELECT id FROM countries WHERE name_en = 'republik serbia'), 'Truk', 6963);
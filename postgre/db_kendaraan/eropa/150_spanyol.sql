-- Data Kendaraan untuk spanyol
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'spanyol'), 'Sepeda Motor', 7019481),
  ((SELECT id FROM countries WHERE name_en = 'spanyol'), 'Mobil', 3743723),
  ((SELECT id FROM countries WHERE name_en = 'spanyol'), 'Bus', 9359),
  ((SELECT id FROM countries WHERE name_en = 'spanyol'), 'Truk', 46796);
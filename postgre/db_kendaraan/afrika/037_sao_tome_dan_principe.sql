-- Data Kendaraan untuk sao tome dan principe
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'sao tome dan principe'), 'Sepeda Motor', 31654),
  ((SELECT id FROM countries WHERE name_en = 'sao tome dan principe'), 'Mobil', 16882),
  ((SELECT id FROM countries WHERE name_en = 'sao tome dan principe'), 'Bus', 42),
  ((SELECT id FROM countries WHERE name_en = 'sao tome dan principe'), 'Truk', 211);
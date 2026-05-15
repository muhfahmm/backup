-- Data Kendaraan untuk denmark
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'denmark'), 'Sepeda Motor', 869045),
  ((SELECT id FROM countries WHERE name_en = 'denmark'), 'Mobil', 463490),
  ((SELECT id FROM countries WHERE name_en = 'denmark'), 'Bus', 1158),
  ((SELECT id FROM countries WHERE name_en = 'denmark'), 'Truk', 5793);
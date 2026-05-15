-- Data Kendaraan untuk mongolia
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'mongolia'), 'Sepeda Motor', 475531),
  ((SELECT id FROM countries WHERE name_en = 'mongolia'), 'Mobil', 253616),
  ((SELECT id FROM countries WHERE name_en = 'mongolia'), 'Bus', 634),
  ((SELECT id FROM countries WHERE name_en = 'mongolia'), 'Truk', 3170);
-- Data Kendaraan untuk greenland
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'greenland'), 'Sepeda Motor', 8403),
  ((SELECT id FROM countries WHERE name_en = 'greenland'), 'Mobil', 4482),
  ((SELECT id FROM countries WHERE name_en = 'greenland'), 'Bus', 11),
  ((SELECT id FROM countries WHERE name_en = 'greenland'), 'Truk', 56);
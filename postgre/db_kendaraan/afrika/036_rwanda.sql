-- Data Kendaraan untuk rwanda
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'rwanda'), 'Sepeda Motor', 1845290),
  ((SELECT id FROM countries WHERE name_en = 'rwanda'), 'Mobil', 984155),
  ((SELECT id FROM countries WHERE name_en = 'rwanda'), 'Bus', 2460),
  ((SELECT id FROM countries WHERE name_en = 'rwanda'), 'Truk', 12301);
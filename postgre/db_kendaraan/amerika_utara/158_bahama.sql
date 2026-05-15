-- Data Kendaraan untuk bahama
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'bahama'), 'Sepeda Motor', 57846),
  ((SELECT id FROM countries WHERE name_en = 'bahama'), 'Mobil', 30851),
  ((SELECT id FROM countries WHERE name_en = 'bahama'), 'Bus', 77),
  ((SELECT id FROM countries WHERE name_en = 'bahama'), 'Truk', 385);
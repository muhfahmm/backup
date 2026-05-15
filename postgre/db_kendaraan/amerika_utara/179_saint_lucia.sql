-- Data Kendaraan untuk saint lucia
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'saint lucia'), 'Sepeda Motor', 27283),
  ((SELECT id FROM countries WHERE name_en = 'saint lucia'), 'Mobil', 14551),
  ((SELECT id FROM countries WHERE name_en = 'saint lucia'), 'Bus', 36),
  ((SELECT id FROM countries WHERE name_en = 'saint lucia'), 'Truk', 181);
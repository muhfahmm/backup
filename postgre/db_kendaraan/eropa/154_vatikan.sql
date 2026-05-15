-- Data Kendaraan untuk vatikan
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'vatikan'), 'Sepeda Motor', 123),
  ((SELECT id FROM countries WHERE name_en = 'vatikan'), 'Mobil', 66),
  ((SELECT id FROM countries WHERE name_en = 'vatikan'), 'Bus', 0),
  ((SELECT id FROM countries WHERE name_en = 'vatikan'), 'Truk', 0);
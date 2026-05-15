-- Data Kendaraan untuk antigua dan barbuda
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'antigua dan barbuda'), 'Sepeda Motor', 14442),
  ((SELECT id FROM countries WHERE name_en = 'antigua dan barbuda'), 'Mobil', 7702),
  ((SELECT id FROM countries WHERE name_en = 'antigua dan barbuda'), 'Bus', 19),
  ((SELECT id FROM countries WHERE name_en = 'antigua dan barbuda'), 'Truk', 96);
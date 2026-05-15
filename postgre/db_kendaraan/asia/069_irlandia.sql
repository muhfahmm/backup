-- Data Kendaraan untuk irlandia
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'irlandia'), 'Sepeda Motor', 730096),
  ((SELECT id FROM countries WHERE name_en = 'irlandia'), 'Mobil', 389384),
  ((SELECT id FROM countries WHERE name_en = 'irlandia'), 'Bus', 973),
  ((SELECT id FROM countries WHERE name_en = 'irlandia'), 'Truk', 4867);
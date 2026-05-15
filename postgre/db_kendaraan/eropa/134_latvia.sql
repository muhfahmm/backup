-- Data Kendaraan untuk latvia
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'latvia'), 'Sepeda Motor', 289076),
  ((SELECT id FROM countries WHERE name_en = 'latvia'), 'Mobil', 154173),
  ((SELECT id FROM countries WHERE name_en = 'latvia'), 'Bus', 385),
  ((SELECT id FROM countries WHERE name_en = 'latvia'), 'Truk', 1927);
-- Data Kendaraan untuk monako
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'monako'), 'Sepeda Motor', 5802),
  ((SELECT id FROM countries WHERE name_en = 'monako'), 'Mobil', 3094),
  ((SELECT id FROM countries WHERE name_en = 'monako'), 'Bus', 7),
  ((SELECT id FROM countries WHERE name_en = 'monako'), 'Truk', 38);
-- Data Kendaraan untuk mauritania
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'mauritania'), 'Sepeda Motor', 660497),
  ((SELECT id FROM countries WHERE name_en = 'mauritania'), 'Mobil', 352265),
  ((SELECT id FROM countries WHERE name_en = 'mauritania'), 'Bus', 880),
  ((SELECT id FROM countries WHERE name_en = 'mauritania'), 'Truk', 4403);
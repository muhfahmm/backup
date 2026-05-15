-- Data Kendaraan untuk pantai gading
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'pantai gading'), 'Sepeda Motor', 3760384),
  ((SELECT id FROM countries WHERE name_en = 'pantai gading'), 'Mobil', 2005538),
  ((SELECT id FROM countries WHERE name_en = 'pantai gading'), 'Bus', 5013),
  ((SELECT id FROM countries WHERE name_en = 'pantai gading'), 'Truk', 25069);
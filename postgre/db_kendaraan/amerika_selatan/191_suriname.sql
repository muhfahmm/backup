-- Data Kendaraan untuk suriname
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'suriname'), 'Sepeda Motor', 86398),
  ((SELECT id FROM countries WHERE name_en = 'suriname'), 'Mobil', 46079),
  ((SELECT id FROM countries WHERE name_en = 'suriname'), 'Bus', 115),
  ((SELECT id FROM countries WHERE name_en = 'suriname'), 'Truk', 575);
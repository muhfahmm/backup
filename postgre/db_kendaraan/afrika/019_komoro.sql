-- Data Kendaraan untuk komoro
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'komoro'), 'Sepeda Motor', 124848),
  ((SELECT id FROM countries WHERE name_en = 'komoro'), 'Mobil', 66585),
  ((SELECT id FROM countries WHERE name_en = 'komoro'), 'Bus', 166),
  ((SELECT id FROM countries WHERE name_en = 'komoro'), 'Truk', 832);
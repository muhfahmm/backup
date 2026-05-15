-- Data Kendaraan untuk barbados
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'barbados'), 'Sepeda Motor', 42996),
  ((SELECT id FROM countries WHERE name_en = 'barbados'), 'Mobil', 22931),
  ((SELECT id FROM countries WHERE name_en = 'barbados'), 'Bus', 57),
  ((SELECT id FROM countries WHERE name_en = 'barbados'), 'Truk', 286);
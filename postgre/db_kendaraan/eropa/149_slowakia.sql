-- Data Kendaraan untuk slowakia
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'slowakia'), 'Sepeda Motor', 817015),
  ((SELECT id FROM countries WHERE name_en = 'slowakia'), 'Mobil', 435741),
  ((SELECT id FROM countries WHERE name_en = 'slowakia'), 'Bus', 1089),
  ((SELECT id FROM countries WHERE name_en = 'slowakia'), 'Truk', 5446);
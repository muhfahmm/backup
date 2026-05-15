-- Data Kendaraan untuk afrika selatan
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'afrika selatan'), 'Sepeda Motor', 8666943),
  ((SELECT id FROM countries WHERE name_en = 'afrika selatan'), 'Mobil', 4622369),
  ((SELECT id FROM countries WHERE name_en = 'afrika selatan'), 'Bus', 11555),
  ((SELECT id FROM countries WHERE name_en = 'afrika selatan'), 'Truk', 57779);
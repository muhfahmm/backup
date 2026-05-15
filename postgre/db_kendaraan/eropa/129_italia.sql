-- Data Kendaraan untuk italia
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'italia'), 'Sepeda Motor', 9063264),
  ((SELECT id FROM countries WHERE name_en = 'italia'), 'Mobil', 4833740),
  ((SELECT id FROM countries WHERE name_en = 'italia'), 'Bus', 12084),
  ((SELECT id FROM countries WHERE name_en = 'italia'), 'Truk', 60421);
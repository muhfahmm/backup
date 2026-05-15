-- Data Kendaraan untuk kosovo
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'kosovo'), 'Sepeda Motor', 0),
  ((SELECT id FROM countries WHERE name_en = 'kosovo'), 'Mobil', 0),
  ((SELECT id FROM countries WHERE name_en = 'kosovo'), 'Bus', 0),
  ((SELECT id FROM countries WHERE name_en = 'kosovo'), 'Truk', 0);
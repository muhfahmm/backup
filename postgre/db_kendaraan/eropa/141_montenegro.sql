-- Data Kendaraan untuk montenegro
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'montenegro'), 'Sepeda Motor', 94682),
  ((SELECT id FROM countries WHERE name_en = 'montenegro'), 'Mobil', 50497),
  ((SELECT id FROM countries WHERE name_en = 'montenegro'), 'Bus', 126),
  ((SELECT id FROM countries WHERE name_en = 'montenegro'), 'Truk', 631);
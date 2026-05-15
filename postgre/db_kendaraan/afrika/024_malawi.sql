-- Data Kendaraan untuk malawi
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'malawi'), 'Sepeda Motor', 2721497),
  ((SELECT id FROM countries WHERE name_en = 'malawi'), 'Mobil', 1451465),
  ((SELECT id FROM countries WHERE name_en = 'malawi'), 'Bus', 3628),
  ((SELECT id FROM countries WHERE name_en = 'malawi'), 'Truk', 18143);
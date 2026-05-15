-- Data Kendaraan untuk saint vincent dan grenadine
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'saint vincent dan grenadine'), 'Sepeda Motor', 16531),
  ((SELECT id FROM countries WHERE name_en = 'saint vincent dan grenadine'), 'Mobil', 8816),
  ((SELECT id FROM countries WHERE name_en = 'saint vincent dan grenadine'), 'Bus', 22),
  ((SELECT id FROM countries WHERE name_en = 'saint vincent dan grenadine'), 'Truk', 110);
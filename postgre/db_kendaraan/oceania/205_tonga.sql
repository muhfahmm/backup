-- Data Kendaraan untuk tonga
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'tonga'), 'Sepeda Motor', 15479),
  ((SELECT id FROM countries WHERE name_en = 'tonga'), 'Mobil', 8255),
  ((SELECT id FROM countries WHERE name_en = 'tonga'), 'Bus', 20),
  ((SELECT id FROM countries WHERE name_en = 'tonga'), 'Truk', 103);
-- Mitra Perdagangan untuk bolivia
-- Syarat: Harus memiliki Kedutaan Besar
INSERT INTO mitra_perdagangan (country_id, partner_country_id, type, status) VALUES
  ((SELECT id FROM countries WHERE name_en = 'bolivia'), (SELECT id FROM countries WHERE name_en = 'Prancis'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'bolivia'), (SELECT id FROM countries WHERE name_en = 'Jepang'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'bolivia'), (SELECT id FROM countries WHERE name_en = 'Kolombia'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'bolivia'), (SELECT id FROM countries WHERE name_en = 'Argentina'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'bolivia'), (SELECT id FROM countries WHERE name_en = 'China'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'bolivia'), (SELECT id FROM countries WHERE name_en = 'Brazil'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'bolivia'), (SELECT id FROM countries WHERE name_en = 'Venezuela'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'bolivia'), (SELECT id FROM countries WHERE name_en = 'Jerman'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'bolivia'), (SELECT id FROM countries WHERE name_en = 'Peru'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'bolivia'), (SELECT id FROM countries WHERE name_en = 'Amerika Serikat'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'bolivia'), (SELECT id FROM countries WHERE name_en = 'India'), 'Perdagangan', 'Aktif');
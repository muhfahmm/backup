-- Mitra Perdagangan untuk chad
-- Syarat: Harus memiliki Kedutaan Besar
INSERT INTO mitra_perdagangan (country_id, partner_country_id, type, status) VALUES
  ((SELECT id FROM countries WHERE name_en = 'chad'), (SELECT id FROM countries WHERE name_en = 'Nigeria'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'chad'), (SELECT id FROM countries WHERE name_en = 'Singapura'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'chad'), (SELECT id FROM countries WHERE name_en = 'Inggris'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'chad'), (SELECT id FROM countries WHERE name_en = 'Maroko'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'chad'), (SELECT id FROM countries WHERE name_en = 'Ethiopia'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'chad'), (SELECT id FROM countries WHERE name_en = 'Amerika Serikat'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'chad'), (SELECT id FROM countries WHERE name_en = 'Prancis'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'chad'), (SELECT id FROM countries WHERE name_en = 'China'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'chad'), (SELECT id FROM countries WHERE name_en = 'Mesir'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'chad'), (SELECT id FROM countries WHERE name_en = 'India'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'chad'), (SELECT id FROM countries WHERE name_en = 'Kenya'), 'Perdagangan', 'Aktif');
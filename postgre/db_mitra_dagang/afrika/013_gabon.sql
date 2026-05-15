-- Mitra Perdagangan untuk gabon
-- Syarat: Harus memiliki Kedutaan Besar
INSERT INTO mitra_perdagangan (country_id, partner_country_id, type, status) VALUES
  ((SELECT id FROM countries WHERE name_en = 'gabon'), (SELECT id FROM countries WHERE name_en = 'Jerman'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'gabon'), (SELECT id FROM countries WHERE name_en = 'Jepang'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'gabon'), (SELECT id FROM countries WHERE name_en = 'China'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'gabon'), (SELECT id FROM countries WHERE name_en = 'Inggris'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'gabon'), (SELECT id FROM countries WHERE name_en = 'Ethiopia'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'gabon'), (SELECT id FROM countries WHERE name_en = 'Prancis'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'gabon'), (SELECT id FROM countries WHERE name_en = 'Ghana'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'gabon'), (SELECT id FROM countries WHERE name_en = 'Afrika Selatan'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'gabon'), (SELECT id FROM countries WHERE name_en = 'Aljazair'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'gabon'), (SELECT id FROM countries WHERE name_en = 'Mesir'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'gabon'), (SELECT id FROM countries WHERE name_en = 'Maroko'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'gabon'), (SELECT id FROM countries WHERE name_en = 'Nigeria'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'gabon'), (SELECT id FROM countries WHERE name_en = 'Korea Selatan'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'gabon'), (SELECT id FROM countries WHERE name_en = 'Kenya'), 'Perdagangan', 'Aktif');
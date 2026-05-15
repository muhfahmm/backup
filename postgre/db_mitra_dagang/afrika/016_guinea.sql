-- Mitra Perdagangan untuk guinea
-- Syarat: Harus memiliki Kedutaan Besar
INSERT INTO mitra_perdagangan (country_id, partner_country_id, type, status) VALUES
  ((SELECT id FROM countries WHERE name_en = 'guinea'), (SELECT id FROM countries WHERE name_en = 'Uni Emirat Arab'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'guinea'), (SELECT id FROM countries WHERE name_en = 'Ghana'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'guinea'), (SELECT id FROM countries WHERE name_en = 'Inggris'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'guinea'), (SELECT id FROM countries WHERE name_en = 'Korea Selatan'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'guinea'), (SELECT id FROM countries WHERE name_en = 'Singapura'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'guinea'), (SELECT id FROM countries WHERE name_en = 'Kenya'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'guinea'), (SELECT id FROM countries WHERE name_en = 'China'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'guinea'), (SELECT id FROM countries WHERE name_en = 'Afrika Selatan'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'guinea'), (SELECT id FROM countries WHERE name_en = 'Mesir'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'guinea'), (SELECT id FROM countries WHERE name_en = 'Jepang'), 'Perdagangan', 'Aktif');
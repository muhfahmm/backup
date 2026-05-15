-- Mitra Perdagangan untuk pantai gading
-- Syarat: Harus memiliki Kedutaan Besar
INSERT INTO mitra_perdagangan (country_id, partner_country_id, type, status) VALUES
  ((SELECT id FROM countries WHERE name_en = 'pantai gading'), (SELECT id FROM countries WHERE name_en = 'Jepang'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'pantai gading'), (SELECT id FROM countries WHERE name_en = 'Aljazair'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'pantai gading'), (SELECT id FROM countries WHERE name_en = 'Amerika Serikat'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'pantai gading'), (SELECT id FROM countries WHERE name_en = 'Maroko'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'pantai gading'), (SELECT id FROM countries WHERE name_en = 'Inggris'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'pantai gading'), (SELECT id FROM countries WHERE name_en = 'Ethiopia'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'pantai gading'), (SELECT id FROM countries WHERE name_en = 'Singapura'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'pantai gading'), (SELECT id FROM countries WHERE name_en = 'Afrika Selatan'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'pantai gading'), (SELECT id FROM countries WHERE name_en = 'Kenya'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'pantai gading'), (SELECT id FROM countries WHERE name_en = 'China'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'pantai gading'), (SELECT id FROM countries WHERE name_en = 'Uni Emirat Arab'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'pantai gading'), (SELECT id FROM countries WHERE name_en = 'Nigeria'), 'Perdagangan', 'Aktif');
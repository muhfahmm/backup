-- Mitra Perdagangan untuk slowakia
-- Syarat: Harus memiliki Kedutaan Besar
INSERT INTO mitra_perdagangan (country_id, partner_country_id, type, status) VALUES
  ((SELECT id FROM countries WHERE name_en = 'slowakia'), (SELECT id FROM countries WHERE name_en = 'Italia'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'slowakia'), (SELECT id FROM countries WHERE name_en = 'Rusia'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'slowakia'), (SELECT id FROM countries WHERE name_en = 'Korea Selatan'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'slowakia'), (SELECT id FROM countries WHERE name_en = 'Singapura'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'slowakia'), (SELECT id FROM countries WHERE name_en = 'Uni Emirat Arab'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'slowakia'), (SELECT id FROM countries WHERE name_en = 'Swiss'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'slowakia'), (SELECT id FROM countries WHERE name_en = 'Spanyol'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'slowakia'), (SELECT id FROM countries WHERE name_en = 'China'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'slowakia'), (SELECT id FROM countries WHERE name_en = 'Inggris'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'slowakia'), (SELECT id FROM countries WHERE name_en = 'Belanda'), 'Perdagangan', 'Aktif');
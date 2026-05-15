-- Mitra Perdagangan untuk bahrain
-- Syarat: Harus memiliki Kedutaan Besar
INSERT INTO mitra_perdagangan (country_id, partner_country_id, type, status) VALUES
  ((SELECT id FROM countries WHERE name_en = 'bahrain'), (SELECT id FROM countries WHERE name_en = 'Singapura'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'bahrain'), (SELECT id FROM countries WHERE name_en = 'Indonesia'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'bahrain'), (SELECT id FROM countries WHERE name_en = 'Filipina'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'bahrain'), (SELECT id FROM countries WHERE name_en = 'Malaysia'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'bahrain'), (SELECT id FROM countries WHERE name_en = 'Thailand'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'bahrain'), (SELECT id FROM countries WHERE name_en = 'Korea Selatan'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'bahrain'), (SELECT id FROM countries WHERE name_en = 'Uni Emirat Arab'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'bahrain'), (SELECT id FROM countries WHERE name_en = 'Prancis'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'bahrain'), (SELECT id FROM countries WHERE name_en = 'Jepang'), 'Perdagangan', 'Aktif');
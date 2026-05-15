-- Mitra Perdagangan untuk honduras
-- Syarat: Harus memiliki Kedutaan Besar
INSERT INTO mitra_perdagangan (country_id, partner_country_id, type, status) VALUES
  ((SELECT id FROM countries WHERE name_en = 'honduras'), (SELECT id FROM countries WHERE name_en = 'Korea Selatan'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'honduras'), (SELECT id FROM countries WHERE name_en = 'Kuba'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'honduras'), (SELECT id FROM countries WHERE name_en = 'Inggris'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'honduras'), (SELECT id FROM countries WHERE name_en = 'Meksiko'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'honduras'), (SELECT id FROM countries WHERE name_en = 'Prancis'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'honduras'), (SELECT id FROM countries WHERE name_en = 'India'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'honduras'), (SELECT id FROM countries WHERE name_en = 'China'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'honduras'), (SELECT id FROM countries WHERE name_en = 'Kanada'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'honduras'), (SELECT id FROM countries WHERE name_en = 'Uni Emirat Arab'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'honduras'), (SELECT id FROM countries WHERE name_en = 'Jerman'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'honduras'), (SELECT id FROM countries WHERE name_en = 'Jepang'), 'Perdagangan', 'Aktif');
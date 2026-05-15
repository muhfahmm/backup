-- Database Organisasi: Kelompok Tujuh (G7)
-- Tipe: Regional

INSERT INTO organisasi_internasional (code, name, type) 
VALUES ('G7', 'Kelompok Tujuh (G7)', 'Regional')
ON CONFLICT (code) DO UPDATE SET name = EXCLUDED.name;

INSERT INTO organisasi_membership (organisasi_id, country_id, membership_type) VALUES
  ((SELECT id FROM organisasi_internasional WHERE code = 'G7'), (SELECT id FROM countries WHERE name_en = 'amerika serikat' OR name_id = 'amerika serikat'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'G7'), (SELECT id FROM countries WHERE name_en = 'inggris' OR name_id = 'inggris'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'G7'), (SELECT id FROM countries WHERE name_en = 'italia' OR name_id = 'italia'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'G7'), (SELECT id FROM countries WHERE name_en = 'jepang' OR name_id = 'jepang'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'G7'), (SELECT id FROM countries WHERE name_en = 'jerman' OR name_id = 'jerman'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'G7'), (SELECT id FROM countries WHERE name_en = 'kanada' OR name_id = 'kanada'), 'Member');
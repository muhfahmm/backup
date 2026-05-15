-- Database Organisasi: Kelompok Duapuluh (G20)
-- Tipe: Regional

INSERT INTO organisasi_internasional (code, name, type) 
VALUES ('G20', 'Kelompok Duapuluh (G20)', 'Regional')
ON CONFLICT (code) DO UPDATE SET name = EXCLUDED.name;

INSERT INTO organisasi_membership (organisasi_id, country_id, membership_type) VALUES
  ((SELECT id FROM organisasi_internasional WHERE code = 'G20'), (SELECT id FROM countries WHERE name_en = 'afrika selatan' OR name_id = 'afrika selatan'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'G20'), (SELECT id FROM countries WHERE name_en = 'amerika serikat' OR name_id = 'amerika serikat'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'G20'), (SELECT id FROM countries WHERE name_en = 'arab saudi' OR name_id = 'arab saudi'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'G20'), (SELECT id FROM countries WHERE name_en = 'argentina' OR name_id = 'argentina'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'G20'), (SELECT id FROM countries WHERE name_en = 'australia' OR name_id = 'australia'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'G20'), (SELECT id FROM countries WHERE name_en = 'brazil' OR name_id = 'brazil'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'G20'), (SELECT id FROM countries WHERE name_en = 'china' OR name_id = 'china'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'G20'), (SELECT id FROM countries WHERE name_en = 'india' OR name_id = 'india'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'G20'), (SELECT id FROM countries WHERE name_en = 'indonesia' OR name_id = 'indonesia'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'G20'), (SELECT id FROM countries WHERE name_en = 'inggris' OR name_id = 'inggris'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'G20'), (SELECT id FROM countries WHERE name_en = 'italia' OR name_id = 'italia'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'G20'), (SELECT id FROM countries WHERE name_en = 'jepang' OR name_id = 'jepang'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'G20'), (SELECT id FROM countries WHERE name_en = 'jerman' OR name_id = 'jerman'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'G20'), (SELECT id FROM countries WHERE name_en = 'kanada' OR name_id = 'kanada'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'G20'), (SELECT id FROM countries WHERE name_en = 'korea selatan' OR name_id = 'korea selatan'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'G20'), (SELECT id FROM countries WHERE name_en = 'meksiko' OR name_id = 'meksiko'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'G20'), (SELECT id FROM countries WHERE name_en = 'rusia' OR name_id = 'rusia'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'G20'), (SELECT id FROM countries WHERE name_en = 'turki' OR name_id = 'turki'), 'Member');
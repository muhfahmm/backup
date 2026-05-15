-- Database Organisasi: Kerja Sama Ekonomi Asia-Pasifik (APEC)
-- Tipe: Regional

INSERT INTO organisasi_internasional (code, name, type) 
VALUES ('APEC', 'Kerja Sama Ekonomi Asia-Pasifik (APEC)', 'Regional')
ON CONFLICT (code) DO UPDATE SET name = EXCLUDED.name;

INSERT INTO organisasi_membership (organisasi_id, country_id, membership_type) VALUES
  ((SELECT id FROM organisasi_internasional WHERE code = 'APEC'), (SELECT id FROM countries WHERE name_en = 'amerika serikat' OR name_id = 'amerika serikat'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'APEC'), (SELECT id FROM countries WHERE name_en = 'australia' OR name_id = 'australia'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'APEC'), (SELECT id FROM countries WHERE name_en = 'brunei' OR name_id = 'brunei'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'APEC'), (SELECT id FROM countries WHERE name_en = 'chile' OR name_id = 'chile'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'APEC'), (SELECT id FROM countries WHERE name_en = 'china' OR name_id = 'china'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'APEC'), (SELECT id FROM countries WHERE name_en = 'filipina' OR name_id = 'filipina'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'APEC'), (SELECT id FROM countries WHERE name_en = 'indonesia' OR name_id = 'indonesia'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'APEC'), (SELECT id FROM countries WHERE name_en = 'jepang' OR name_id = 'jepang'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'APEC'), (SELECT id FROM countries WHERE name_en = 'kanada' OR name_id = 'kanada'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'APEC'), (SELECT id FROM countries WHERE name_en = 'korea selatan' OR name_id = 'korea selatan'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'APEC'), (SELECT id FROM countries WHERE name_en = 'malaysia' OR name_id = 'malaysia'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'APEC'), (SELECT id FROM countries WHERE name_en = 'meksiko' OR name_id = 'meksiko'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'APEC'), (SELECT id FROM countries WHERE name_en = 'papua nugini' OR name_id = 'papua nugini'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'APEC'), (SELECT id FROM countries WHERE name_en = 'peru' OR name_id = 'peru'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'APEC'), (SELECT id FROM countries WHERE name_en = 'rusia' OR name_id = 'rusia'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'APEC'), (SELECT id FROM countries WHERE name_en = 'selandia baru' OR name_id = 'selandia baru'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'APEC'), (SELECT id FROM countries WHERE name_en = 'singapura' OR name_id = 'singapura'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'APEC'), (SELECT id FROM countries WHERE name_en = 'thailand' OR name_id = 'thailand'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'APEC'), (SELECT id FROM countries WHERE name_en = 'vietnam' OR name_id = 'vietnam'), 'Member');
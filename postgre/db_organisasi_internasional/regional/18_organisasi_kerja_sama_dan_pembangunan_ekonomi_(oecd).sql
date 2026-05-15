-- Database Organisasi: Organisasi Kerja Sama dan Pembangunan Ekonomi (OECD)
-- Tipe: Regional

INSERT INTO organisasi_internasional (code, name, type) 
VALUES ('OECD', 'Organisasi Kerja Sama dan Pembangunan Ekonomi (OECD)', 'Regional')
ON CONFLICT (code) DO UPDATE SET name = EXCLUDED.name;

INSERT INTO organisasi_membership (organisasi_id, country_id, membership_type) VALUES
  ((SELECT id FROM organisasi_internasional WHERE code = 'OECD'), (SELECT id FROM countries WHERE name_en = 'amerika serikat' OR name_id = 'amerika serikat'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'OECD'), (SELECT id FROM countries WHERE name_en = 'australia' OR name_id = 'australia'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'OECD'), (SELECT id FROM countries WHERE name_en = 'austria' OR name_id = 'austria'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'OECD'), (SELECT id FROM countries WHERE name_en = 'belanda' OR name_id = 'belanda'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'OECD'), (SELECT id FROM countries WHERE name_en = 'belgia' OR name_id = 'belgia'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'OECD'), (SELECT id FROM countries WHERE name_en = 'ceko' OR name_id = 'ceko'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'OECD'), (SELECT id FROM countries WHERE name_en = 'chile' OR name_id = 'chile'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'OECD'), (SELECT id FROM countries WHERE name_en = 'denmark' OR name_id = 'denmark'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'OECD'), (SELECT id FROM countries WHERE name_en = 'estonia' OR name_id = 'estonia'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'OECD'), (SELECT id FROM countries WHERE name_en = 'finlandia' OR name_id = 'finlandia'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'OECD'), (SELECT id FROM countries WHERE name_en = 'hungaria' OR name_id = 'hungaria'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'OECD'), (SELECT id FROM countries WHERE name_en = 'inggris' OR name_id = 'inggris'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'OECD'), (SELECT id FROM countries WHERE name_en = 'irlandia' OR name_id = 'irlandia'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'OECD'), (SELECT id FROM countries WHERE name_en = 'islandia' OR name_id = 'islandia'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'OECD'), (SELECT id FROM countries WHERE name_en = 'israel' OR name_id = 'israel'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'OECD'), (SELECT id FROM countries WHERE name_en = 'italia' OR name_id = 'italia'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'OECD'), (SELECT id FROM countries WHERE name_en = 'jepang' OR name_id = 'jepang'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'OECD'), (SELECT id FROM countries WHERE name_en = 'jerman' OR name_id = 'jerman'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'OECD'), (SELECT id FROM countries WHERE name_en = 'kanada' OR name_id = 'kanada'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'OECD'), (SELECT id FROM countries WHERE name_en = 'kolombia' OR name_id = 'kolombia'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'OECD'), (SELECT id FROM countries WHERE name_en = 'korea selatan' OR name_id = 'korea selatan'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'OECD'), (SELECT id FROM countries WHERE name_en = 'latvia' OR name_id = 'latvia'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'OECD'), (SELECT id FROM countries WHERE name_en = 'lithuania' OR name_id = 'lithuania'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'OECD'), (SELECT id FROM countries WHERE name_en = 'luksemburg' OR name_id = 'luksemburg'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'OECD'), (SELECT id FROM countries WHERE name_en = 'meksiko' OR name_id = 'meksiko'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'OECD'), (SELECT id FROM countries WHERE name_en = 'norwegia' OR name_id = 'norwegia'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'OECD'), (SELECT id FROM countries WHERE name_en = 'polandia' OR name_id = 'polandia'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'OECD'), (SELECT id FROM countries WHERE name_en = 'portugal' OR name_id = 'portugal'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'OECD'), (SELECT id FROM countries WHERE name_en = 'selandia baru' OR name_id = 'selandia baru'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'OECD'), (SELECT id FROM countries WHERE name_en = 'slovenia' OR name_id = 'slovenia'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'OECD'), (SELECT id FROM countries WHERE name_en = 'slowakia' OR name_id = 'slowakia'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'OECD'), (SELECT id FROM countries WHERE name_en = 'spanyol' OR name_id = 'spanyol'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'OECD'), (SELECT id FROM countries WHERE name_en = 'swedia' OR name_id = 'swedia'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'OECD'), (SELECT id FROM countries WHERE name_en = 'swiss' OR name_id = 'swiss'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'OECD'), (SELECT id FROM countries WHERE name_en = 'turki' OR name_id = 'turki'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'OECD'), (SELECT id FROM countries WHERE name_en = 'yunani' OR name_id = 'yunani'), 'Member');
-- Database Organisasi: Pakta Pertahanan Atlantik Utara (NATO)
-- Tipe: Regional

INSERT INTO organisasi_internasional (code, name, type) 
VALUES ('NATO', 'Pakta Pertahanan Atlantik Utara (NATO)', 'Regional')
ON CONFLICT (code) DO UPDATE SET name = EXCLUDED.name;

INSERT INTO organisasi_membership (organisasi_id, country_id, membership_type) VALUES
  ((SELECT id FROM organisasi_internasional WHERE code = 'NATO'), (SELECT id FROM countries WHERE name_en = 'albania' OR name_id = 'albania'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'NATO'), (SELECT id FROM countries WHERE name_en = 'amerika serikat' OR name_id = 'amerika serikat'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'NATO'), (SELECT id FROM countries WHERE name_en = 'belanda' OR name_id = 'belanda'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'NATO'), (SELECT id FROM countries WHERE name_en = 'belgia' OR name_id = 'belgia'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'NATO'), (SELECT id FROM countries WHERE name_en = 'bulgaria' OR name_id = 'bulgaria'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'NATO'), (SELECT id FROM countries WHERE name_en = 'ceko' OR name_id = 'ceko'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'NATO'), (SELECT id FROM countries WHERE name_en = 'denmark' OR name_id = 'denmark'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'NATO'), (SELECT id FROM countries WHERE name_en = 'estonia' OR name_id = 'estonia'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'NATO'), (SELECT id FROM countries WHERE name_en = 'finlandia' OR name_id = 'finlandia'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'NATO'), (SELECT id FROM countries WHERE name_en = 'hungaria' OR name_id = 'hungaria'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'NATO'), (SELECT id FROM countries WHERE name_en = 'inggris' OR name_id = 'inggris'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'NATO'), (SELECT id FROM countries WHERE name_en = 'islandia' OR name_id = 'islandia'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'NATO'), (SELECT id FROM countries WHERE name_en = 'italia' OR name_id = 'italia'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'NATO'), (SELECT id FROM countries WHERE name_en = 'jerman' OR name_id = 'jerman'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'NATO'), (SELECT id FROM countries WHERE name_en = 'kanada' OR name_id = 'kanada'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'NATO'), (SELECT id FROM countries WHERE name_en = 'kroasia' OR name_id = 'kroasia'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'NATO'), (SELECT id FROM countries WHERE name_en = 'latvia' OR name_id = 'latvia'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'NATO'), (SELECT id FROM countries WHERE name_en = 'lithuania' OR name_id = 'lithuania'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'NATO'), (SELECT id FROM countries WHERE name_en = 'luksemburg' OR name_id = 'luksemburg'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'NATO'), (SELECT id FROM countries WHERE name_en = 'makedonia utara' OR name_id = 'makedonia utara'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'NATO'), (SELECT id FROM countries WHERE name_en = 'montenegro' OR name_id = 'montenegro'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'NATO'), (SELECT id FROM countries WHERE name_en = 'norwegia' OR name_id = 'norwegia'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'NATO'), (SELECT id FROM countries WHERE name_en = 'polandia' OR name_id = 'polandia'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'NATO'), (SELECT id FROM countries WHERE name_en = 'portugal' OR name_id = 'portugal'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'NATO'), (SELECT id FROM countries WHERE name_en = 'republik rumania' OR name_id = 'republik rumania'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'NATO'), (SELECT id FROM countries WHERE name_en = 'slovenia' OR name_id = 'slovenia'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'NATO'), (SELECT id FROM countries WHERE name_en = 'slowakia' OR name_id = 'slowakia'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'NATO'), (SELECT id FROM countries WHERE name_en = 'spanyol' OR name_id = 'spanyol'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'NATO'), (SELECT id FROM countries WHERE name_en = 'swedia' OR name_id = 'swedia'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'NATO'), (SELECT id FROM countries WHERE name_en = 'turki' OR name_id = 'turki'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'NATO'), (SELECT id FROM countries WHERE name_en = 'yunani' OR name_id = 'yunani'), 'Member');
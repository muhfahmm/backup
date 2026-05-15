-- Kedutaan Besar untuk denmark (REALISTIC)
INSERT INTO kedutaan_besar (country_id, partner_country_id, type, status) VALUES
  ((SELECT id FROM countries WHERE name_en = 'denmark' OR name_id = 'denmark' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Afganistan' OR name_id = 'Afganistan' LIMIT 1), 'Kedutaan Besar', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'denmark' OR name_id = 'denmark' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Albania' OR name_id = 'Albania' LIMIT 1), 'Kedutaan Besar', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'denmark' OR name_id = 'denmark' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Amerika Serikat' OR name_id = 'Amerika Serikat' LIMIT 1), 'Kedutaan Besar', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'denmark' OR name_id = 'denmark' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Antigua dan Barbuda' OR name_id = 'Antigua dan Barbuda' LIMIT 1), 'Kedutaan Besar', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'denmark' OR name_id = 'denmark' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Australia' OR name_id = 'Australia' LIMIT 1), 'Kedutaan Besar', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'denmark' OR name_id = 'denmark' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Azerbaijan' OR name_id = 'Azerbaijan' LIMIT 1), 'Kedutaan Besar', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'denmark' OR name_id = 'denmark' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Bangladesh' OR name_id = 'Bangladesh' LIMIT 1), 'Kedutaan Besar', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'denmark' OR name_id = 'denmark' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Belarus' OR name_id = 'Belarus' LIMIT 1), 'Kedutaan Besar', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'denmark' OR name_id = 'denmark' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Belgia' OR name_id = 'Belgia' LIMIT 1), 'Kedutaan Besar', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'denmark' OR name_id = 'denmark' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Benin' OR name_id = 'Benin' LIMIT 1), 'Kedutaan Besar', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'denmark' OR name_id = 'denmark' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Bermuda' OR name_id = 'Bermuda' LIMIT 1), 'Kedutaan Besar', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'denmark' OR name_id = 'denmark' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Bolivia' OR name_id = 'Bolivia' LIMIT 1), 'Kedutaan Besar', 'Aktif');
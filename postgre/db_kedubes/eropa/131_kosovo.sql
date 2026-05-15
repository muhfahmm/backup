-- Kedutaan Besar untuk kosovo (REALISTIC)
INSERT INTO kedutaan_besar (country_id, partner_country_id, type, status) VALUES
  ((SELECT id FROM countries WHERE name_en = 'kosovo' OR name_id = 'kosovo' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Afganistan' OR name_id = 'Afganistan' LIMIT 1), 'Kedutaan Besar', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'kosovo' OR name_id = 'kosovo' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Afrika Selatan' OR name_id = 'Afrika Selatan' LIMIT 1), 'Kedutaan Besar', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'kosovo' OR name_id = 'kosovo' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Albania' OR name_id = 'Albania' LIMIT 1), 'Kedutaan Besar', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'kosovo' OR name_id = 'kosovo' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Antigua dan Barbuda' OR name_id = 'Antigua dan Barbuda' LIMIT 1), 'Kedutaan Besar', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'kosovo' OR name_id = 'kosovo' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Arab Saudi' OR name_id = 'Arab Saudi' LIMIT 1), 'Kedutaan Besar', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'kosovo' OR name_id = 'kosovo' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Austria' OR name_id = 'Austria' LIMIT 1), 'Kedutaan Besar', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'kosovo' OR name_id = 'kosovo' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Bangladesh' OR name_id = 'Bangladesh' LIMIT 1), 'Kedutaan Besar', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'kosovo' OR name_id = 'kosovo' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Belgia' OR name_id = 'Belgia' LIMIT 1), 'Kedutaan Besar', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'kosovo' OR name_id = 'kosovo' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Belize' OR name_id = 'Belize' LIMIT 1), 'Kedutaan Besar', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'kosovo' OR name_id = 'kosovo' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Bermuda' OR name_id = 'Bermuda' LIMIT 1), 'Kedutaan Besar', 'Aktif');
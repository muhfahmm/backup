-- Kedutaan Besar untuk moldova (REALISTIC)
INSERT INTO kedutaan_besar (country_id, partner_country_id, type, status) VALUES
  ((SELECT id FROM countries WHERE name_en = 'moldova' OR name_id = 'moldova' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Angola' OR name_id = 'Angola' LIMIT 1), 'Kedutaan Besar', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'moldova' OR name_id = 'moldova' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Armenia' OR name_id = 'Armenia' LIMIT 1), 'Kedutaan Besar', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'moldova' OR name_id = 'moldova' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Australia' OR name_id = 'Australia' LIMIT 1), 'Kedutaan Besar', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'moldova' OR name_id = 'moldova' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Austria' OR name_id = 'Austria' LIMIT 1), 'Kedutaan Besar', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'moldova' OR name_id = 'moldova' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Bahama' OR name_id = 'Bahama' LIMIT 1), 'Kedutaan Besar', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'moldova' OR name_id = 'moldova' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Belarus' OR name_id = 'Belarus' LIMIT 1), 'Kedutaan Besar', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'moldova' OR name_id = 'moldova' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Bermuda' OR name_id = 'Bermuda' LIMIT 1), 'Kedutaan Besar', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'moldova' OR name_id = 'moldova' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Bhutan' OR name_id = 'Bhutan' LIMIT 1), 'Kedutaan Besar', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'moldova' OR name_id = 'moldova' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Bolivia' OR name_id = 'Bolivia' LIMIT 1), 'Kedutaan Besar', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'moldova' OR name_id = 'moldova' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Brunei' OR name_id = 'Brunei' LIMIT 1), 'Kedutaan Besar', 'Aktif');
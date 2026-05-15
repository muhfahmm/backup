-- Hubungan Geopolitik untuk jerman (REALISTIC DATA)
INSERT INTO hubungan_negara (country_id, target_country_id, relation_value) VALUES
  ((SELECT id FROM countries WHERE name_en = 'jerman' OR name_id = 'jerman' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Albania' OR name_id = 'Albania' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'jerman' OR name_id = 'jerman' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Aljazair' OR name_id = 'Aljazair' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'jerman' OR name_id = 'jerman' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Amerika Serikat' OR name_id = 'Amerika Serikat' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'jerman' OR name_id = 'jerman' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Australia' OR name_id = 'Australia' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'jerman' OR name_id = 'jerman' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Austria' OR name_id = 'Austria' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'jerman' OR name_id = 'jerman' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Barbados' OR name_id = 'Barbados' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'jerman' OR name_id = 'jerman' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Belize' OR name_id = 'Belize' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'jerman' OR name_id = 'jerman' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Bolivia' OR name_id = 'Bolivia' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'jerman' OR name_id = 'jerman' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Brazil' OR name_id = 'Brazil' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'jerman' OR name_id = 'jerman' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Brunei' OR name_id = 'Brunei' LIMIT 1), 50);
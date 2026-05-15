-- Hubungan Geopolitik untuk el salvador (REALISTIC DATA)
INSERT INTO hubungan_negara (country_id, target_country_id, relation_value) VALUES
  ((SELECT id FROM countries WHERE name_en = 'el salvador' OR name_id = 'el salvador' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Afganistan' OR name_id = 'Afganistan' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'el salvador' OR name_id = 'el salvador' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Albania' OR name_id = 'Albania' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'el salvador' OR name_id = 'el salvador' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Angola' OR name_id = 'Angola' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'el salvador' OR name_id = 'el salvador' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Arab Saudi' OR name_id = 'Arab Saudi' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'el salvador' OR name_id = 'el salvador' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Australia' OR name_id = 'Australia' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'el salvador' OR name_id = 'el salvador' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Austria' OR name_id = 'Austria' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'el salvador' OR name_id = 'el salvador' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Barbados' OR name_id = 'Barbados' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'el salvador' OR name_id = 'el salvador' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Belarus' OR name_id = 'Belarus' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'el salvador' OR name_id = 'el salvador' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Benin' OR name_id = 'Benin' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'el salvador' OR name_id = 'el salvador' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Botswana' OR name_id = 'Botswana' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'el salvador' OR name_id = 'el salvador' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Brazil' OR name_id = 'Brazil' LIMIT 1), 50);
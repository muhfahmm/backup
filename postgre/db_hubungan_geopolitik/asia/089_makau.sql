-- Hubungan Geopolitik untuk makau (REALISTIC DATA)
INSERT INTO hubungan_negara (country_id, target_country_id, relation_value) VALUES
  ((SELECT id FROM countries WHERE name_en = 'makau' OR name_id = 'makau' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Albania' OR name_id = 'Albania' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'makau' OR name_id = 'makau' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Arab Saudi' OR name_id = 'Arab Saudi' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'makau' OR name_id = 'makau' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Armenia' OR name_id = 'Armenia' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'makau' OR name_id = 'makau' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Australia' OR name_id = 'Australia' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'makau' OR name_id = 'makau' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Azerbaijan' OR name_id = 'Azerbaijan' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'makau' OR name_id = 'makau' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Bahama' OR name_id = 'Bahama' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'makau' OR name_id = 'makau' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Bangladesh' OR name_id = 'Bangladesh' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'makau' OR name_id = 'makau' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Barbados' OR name_id = 'Barbados' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'makau' OR name_id = 'makau' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Belanda' OR name_id = 'Belanda' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'makau' OR name_id = 'makau' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Belize' OR name_id = 'Belize' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'makau' OR name_id = 'makau' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Benin' OR name_id = 'Benin' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'makau' OR name_id = 'makau' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Bermuda' OR name_id = 'Bermuda' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'makau' OR name_id = 'makau' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Bhutan' OR name_id = 'Bhutan' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'makau' OR name_id = 'makau' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Bosnia dan Hercegovina' OR name_id = 'Bosnia dan Hercegovina' LIMIT 1), 50);
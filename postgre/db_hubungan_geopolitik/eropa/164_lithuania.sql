-- Hubungan Geopolitik untuk lithuania (REALISTIC DATA)
INSERT INTO hubungan_negara (country_id, target_country_id, relation_value) VALUES
  ((SELECT id FROM countries WHERE name_en = 'lithuania' OR name_id = 'lithuania' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Afganistan' OR name_id = 'Afganistan' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'lithuania' OR name_id = 'lithuania' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Albania' OR name_id = 'Albania' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'lithuania' OR name_id = 'lithuania' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Amerika Serikat' OR name_id = 'Amerika Serikat' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'lithuania' OR name_id = 'lithuania' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Andorra' OR name_id = 'Andorra' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'lithuania' OR name_id = 'lithuania' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Antigua dan Barbuda' OR name_id = 'Antigua dan Barbuda' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'lithuania' OR name_id = 'lithuania' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Arab Saudi' OR name_id = 'Arab Saudi' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'lithuania' OR name_id = 'lithuania' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Austria' OR name_id = 'Austria' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'lithuania' OR name_id = 'lithuania' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Bahrain' OR name_id = 'Bahrain' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'lithuania' OR name_id = 'lithuania' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Belanda' OR name_id = 'Belanda' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'lithuania' OR name_id = 'lithuania' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Benin' OR name_id = 'Benin' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'lithuania' OR name_id = 'lithuania' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Bhutan' OR name_id = 'Bhutan' LIMIT 1), 50);
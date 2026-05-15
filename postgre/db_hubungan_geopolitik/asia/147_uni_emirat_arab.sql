-- Hubungan Geopolitik untuk uni emirat arab (REALISTIC DATA)
INSERT INTO hubungan_negara (country_id, target_country_id, relation_value) VALUES
  ((SELECT id FROM countries WHERE name_en = 'uni emirat arab' OR name_id = 'uni emirat arab' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Afrika Selatan' OR name_id = 'Afrika Selatan' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'uni emirat arab' OR name_id = 'uni emirat arab' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Aljazair' OR name_id = 'Aljazair' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'uni emirat arab' OR name_id = 'uni emirat arab' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Amerika Serikat' OR name_id = 'Amerika Serikat' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'uni emirat arab' OR name_id = 'uni emirat arab' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Andorra' OR name_id = 'Andorra' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'uni emirat arab' OR name_id = 'uni emirat arab' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Antigua dan Barbuda' OR name_id = 'Antigua dan Barbuda' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'uni emirat arab' OR name_id = 'uni emirat arab' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Arab Saudi' OR name_id = 'Arab Saudi' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'uni emirat arab' OR name_id = 'uni emirat arab' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Argentina' OR name_id = 'Argentina' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'uni emirat arab' OR name_id = 'uni emirat arab' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Bangladesh' OR name_id = 'Bangladesh' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'uni emirat arab' OR name_id = 'uni emirat arab' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Barbados' OR name_id = 'Barbados' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'uni emirat arab' OR name_id = 'uni emirat arab' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Belarus' OR name_id = 'Belarus' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'uni emirat arab' OR name_id = 'uni emirat arab' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Belgia' OR name_id = 'Belgia' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'uni emirat arab' OR name_id = 'uni emirat arab' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Bermuda' OR name_id = 'Bermuda' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'uni emirat arab' OR name_id = 'uni emirat arab' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Brazil' OR name_id = 'Brazil' LIMIT 1), 50);
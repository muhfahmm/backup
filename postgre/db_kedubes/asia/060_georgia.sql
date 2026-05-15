-- Kedutaan Besar untuk georgia (REALISTIC)
INSERT INTO kedutaan_besar (country_id, partner_country_id, type, status) VALUES
  ((SELECT id FROM countries WHERE name_en = 'georgia' OR name_id = 'georgia' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Afganistan' OR name_id = 'Afganistan' LIMIT 1), 'Kedutaan Besar', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'georgia' OR name_id = 'georgia' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Andorra' OR name_id = 'Andorra' LIMIT 1), 'Kedutaan Besar', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'georgia' OR name_id = 'georgia' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Azerbaijan' OR name_id = 'Azerbaijan' LIMIT 1), 'Kedutaan Besar', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'georgia' OR name_id = 'georgia' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Bahrain' OR name_id = 'Bahrain' LIMIT 1), 'Kedutaan Besar', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'georgia' OR name_id = 'georgia' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Bangladesh' OR name_id = 'Bangladesh' LIMIT 1), 'Kedutaan Besar', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'georgia' OR name_id = 'georgia' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Barbados' OR name_id = 'Barbados' LIMIT 1), 'Kedutaan Besar', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'georgia' OR name_id = 'georgia' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Belarus' OR name_id = 'Belarus' LIMIT 1), 'Kedutaan Besar', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'georgia' OR name_id = 'georgia' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Belize' OR name_id = 'Belize' LIMIT 1), 'Kedutaan Besar', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'georgia' OR name_id = 'georgia' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Benin' OR name_id = 'Benin' LIMIT 1), 'Kedutaan Besar', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'georgia' OR name_id = 'georgia' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Brazil' OR name_id = 'Brazil' LIMIT 1), 'Kedutaan Besar', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'georgia' OR name_id = 'georgia' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Brunei' OR name_id = 'Brunei' LIMIT 1), 'Kedutaan Besar', 'Aktif');
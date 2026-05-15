-- Kedutaan Besar untuk italia (REALISTIC)
INSERT INTO kedutaan_besar (country_id, partner_country_id, type, status) VALUES
  ((SELECT id FROM countries WHERE name_en = 'italia' OR name_id = 'italia' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Afganistan' OR name_id = 'Afganistan' LIMIT 1), 'Kedutaan Besar', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'italia' OR name_id = 'italia' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Aljazair' OR name_id = 'Aljazair' LIMIT 1), 'Kedutaan Besar', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'italia' OR name_id = 'italia' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Amerika Serikat' OR name_id = 'Amerika Serikat' LIMIT 1), 'Kedutaan Besar', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'italia' OR name_id = 'italia' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Argentina' OR name_id = 'Argentina' LIMIT 1), 'Kedutaan Besar', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'italia' OR name_id = 'italia' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Armenia' OR name_id = 'Armenia' LIMIT 1), 'Kedutaan Besar', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'italia' OR name_id = 'italia' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Azerbaijan' OR name_id = 'Azerbaijan' LIMIT 1), 'Kedutaan Besar', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'italia' OR name_id = 'italia' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Bahama' OR name_id = 'Bahama' LIMIT 1), 'Kedutaan Besar', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'italia' OR name_id = 'italia' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Belgia' OR name_id = 'Belgia' LIMIT 1), 'Kedutaan Besar', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'italia' OR name_id = 'italia' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Bhutan' OR name_id = 'Bhutan' LIMIT 1), 'Kedutaan Besar', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'italia' OR name_id = 'italia' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Bolivia' OR name_id = 'Bolivia' LIMIT 1), 'Kedutaan Besar', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'italia' OR name_id = 'italia' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Brazil' OR name_id = 'Brazil' LIMIT 1), 'Kedutaan Besar', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'italia' OR name_id = 'italia' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Brunei' OR name_id = 'Brunei' LIMIT 1), 'Kedutaan Besar', 'Aktif');
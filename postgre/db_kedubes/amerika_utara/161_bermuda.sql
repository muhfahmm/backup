-- Kedutaan Besar untuk bermuda (REALISTIC)
INSERT INTO kedutaan_besar (country_id, partner_country_id, type, status) VALUES
  ((SELECT id FROM countries WHERE name_en = 'bermuda' OR name_id = 'bermuda' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Afrika Selatan' OR name_id = 'Afrika Selatan' LIMIT 1), 'Kedutaan Besar', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'bermuda' OR name_id = 'bermuda' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Albania' OR name_id = 'Albania' LIMIT 1), 'Kedutaan Besar', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'bermuda' OR name_id = 'bermuda' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Aljazair' OR name_id = 'Aljazair' LIMIT 1), 'Kedutaan Besar', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'bermuda' OR name_id = 'bermuda' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Amerika Serikat' OR name_id = 'Amerika Serikat' LIMIT 1), 'Kedutaan Besar', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'bermuda' OR name_id = 'bermuda' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Andorra' OR name_id = 'Andorra' LIMIT 1), 'Kedutaan Besar', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'bermuda' OR name_id = 'bermuda' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Arab Saudi' OR name_id = 'Arab Saudi' LIMIT 1), 'Kedutaan Besar', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'bermuda' OR name_id = 'bermuda' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Argentina' OR name_id = 'Argentina' LIMIT 1), 'Kedutaan Besar', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'bermuda' OR name_id = 'bermuda' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Austria' OR name_id = 'Austria' LIMIT 1), 'Kedutaan Besar', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'bermuda' OR name_id = 'bermuda' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Azerbaijan' OR name_id = 'Azerbaijan' LIMIT 1), 'Kedutaan Besar', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'bermuda' OR name_id = 'bermuda' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Bahama' OR name_id = 'Bahama' LIMIT 1), 'Kedutaan Besar', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'bermuda' OR name_id = 'bermuda' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Barbados' OR name_id = 'Barbados' LIMIT 1), 'Kedutaan Besar', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'bermuda' OR name_id = 'bermuda' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Bolivia' OR name_id = 'Bolivia' LIMIT 1), 'Kedutaan Besar', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'bermuda' OR name_id = 'bermuda' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Brazil' OR name_id = 'Brazil' LIMIT 1), 'Kedutaan Besar', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'bermuda' OR name_id = 'bermuda' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Brunei' OR name_id = 'Brunei' LIMIT 1), 'Kedutaan Besar', 'Aktif');
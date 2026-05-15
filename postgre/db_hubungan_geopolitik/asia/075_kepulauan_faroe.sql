-- Hubungan Geopolitik untuk kepulauan faroe (REALISTIC DATA)
INSERT INTO hubungan_negara (country_id, target_country_id, relation_value) VALUES
  ((SELECT id FROM countries WHERE name_en = 'kepulauan faroe' OR name_id = 'kepulauan faroe' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Albania' OR name_id = 'Albania' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'kepulauan faroe' OR name_id = 'kepulauan faroe' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Amerika Serikat' OR name_id = 'Amerika Serikat' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'kepulauan faroe' OR name_id = 'kepulauan faroe' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Andorra' OR name_id = 'Andorra' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'kepulauan faroe' OR name_id = 'kepulauan faroe' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Arab Saudi' OR name_id = 'Arab Saudi' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'kepulauan faroe' OR name_id = 'kepulauan faroe' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Argentina' OR name_id = 'Argentina' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'kepulauan faroe' OR name_id = 'kepulauan faroe' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Armenia' OR name_id = 'Armenia' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'kepulauan faroe' OR name_id = 'kepulauan faroe' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Austria' OR name_id = 'Austria' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'kepulauan faroe' OR name_id = 'kepulauan faroe' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Azerbaijan' OR name_id = 'Azerbaijan' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'kepulauan faroe' OR name_id = 'kepulauan faroe' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Bahama' OR name_id = 'Bahama' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'kepulauan faroe' OR name_id = 'kepulauan faroe' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Bahrain' OR name_id = 'Bahrain' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'kepulauan faroe' OR name_id = 'kepulauan faroe' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Belanda' OR name_id = 'Belanda' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'kepulauan faroe' OR name_id = 'kepulauan faroe' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Belgia' OR name_id = 'Belgia' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'kepulauan faroe' OR name_id = 'kepulauan faroe' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Benin' OR name_id = 'Benin' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'kepulauan faroe' OR name_id = 'kepulauan faroe' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Bhutan' OR name_id = 'Bhutan' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'kepulauan faroe' OR name_id = 'kepulauan faroe' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Bolivia' OR name_id = 'Bolivia' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'kepulauan faroe' OR name_id = 'kepulauan faroe' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Botswana' OR name_id = 'Botswana' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'kepulauan faroe' OR name_id = 'kepulauan faroe' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Brunei' OR name_id = 'Brunei' LIMIT 1), 50);
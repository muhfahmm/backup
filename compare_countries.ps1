# Countries in db_negara.txt
$dbNegara = @(
    'afganistan','afrika selatan','albania','aljazair','amerika serikat','andorra','angola','antigua dan barbuda','arab saudi','argentina','armenia','australia','austria','azerbaijan','bahama','bahrain','bangladesh','barbados','belanda','belarus','belgia','belize','benin','bermuda','bhutan','bolivia','bosnia dan hercegovina','botswana','brazil','brunei','bulgaria','burkina faso','burundi','ceko','chad','chile','china','costa rica','curacao','denmark','djibouti','dominika','ekuador','el salvador','eritrea','estonia','eswatini','ethiopia','fiji','filipina','finlandia','gabon','gambia','georgia','ghana','gibraltar','greenland','grenada','guam','guatemala','guiana prancis','guinea','guinea bissau','guyana','haiti','honduras','hong kong','hungaria','india','indonesia','inggris','irak','iran','irlandia','islandia','israel','italia','jamaika','jepang','jerman','kamboja','kamerun','kanada','kazakhstan','kenya','kepulauan faroe','kirgizstan','kiribati','kolombia','komoro','kongo','korea selatan','korea utara','kosovo','kroasia','kuba','kuwait','laos','latvia','lebanon','lesotho','liberia','libya','liechtenstein','lithuania','luksemburg','madagaskar','makau','makedonia utara','malawi','malaysia','maldives','mali','malta','maroko','marshall','mauritania','mauritius','meksiko','mesir','mikronesia','moldova','monako','mongolia','montenegro','mozambik','myanmar','namibia','nauru','nepal','niger','nigeria','nikaragua','norwegia','oman','pakistan','palau','palestina','panama','pantai gading','papua nugini','paraguay','peru','polandia','portugal','prancis','puerto rico','qatar','republik afrika tengah','republik demokratik kongo','republik dominika','republik rumania','republik serbia','republik sudan','republik tanzania','republik timor leste','republik uganda','republik zambia','republik zimbabwe','rusia','rwanda','saint kitts dan nevis','saint lucia','saint vincent dan grenadine','samoa','samoa amerika','san marino','sao tome dan principe','selandia baru','senegal','seychelles','sierra leone','singapura','siprus','slovenia','slowakia','somalia','spanyol','sri lanka','sudan selatan','suriah','suriname','swedia','swiss','tahiti','taiwan','tajikistan','tanjung verde','thailand','togo','tonga','trinidad dan tobago','tunisia','turki','turkmenistan','tuvalu','ukraina','uni emirat arab','uruguay','uzbekistan','vanuatu','vatikan','venezuela','vietnam','yaman','yordania','yunani'
)

# Countries in country-paths.json (as keys, normalized to lowercase)
$countryPaths = @(
    'marshall','madagaskar','saint lucia','bahama','china','prancis','mozambik','kuwait','lebanon','myanmar','mauritius','liberia','somalia','nigeria','latvia','korea utara','kazakhstan','malawi','republik uganda','nepal','bahrain','portugal','samoa','ethiopia','papua nugini','swiss','aljazair','india','hong kong','ceko','jamaika','brazil','fiji','israel','rusia','mauritania','nikaragua','guinea','qatar','curacao','ekuador','armenia','uzbekistan','kenya','yaman','el salvador','arab saudi','republik zimbabwe','chile','brunei','ukraina','uni emirat arab','albania','turkmenistan','hungaria','sao tome dan principe','angola','swedia','yunani','moldova','malta','siprus','niger','vatikan','burundi','jerman','bhutan','republik sudan','irak','argentina','eritrea','irlandia','austria','indonesia','namibia','turki','mesir','palestina','sierra leone','belanda','oman','bosnia dan hercegovina','slowakia','republik afrika tengah','bermuda','bulgaria','kamboja','makedonia utara','jepang','montenegro','grenada','dominika','republik serbia','luksemburg','maroko','gibraltar','djibouti','republik zambia','kolombia','botswana','chad','suriname','seychelles','suriah','meksiko','bangladesh','kamerun','kroasia','mongolia','puerto rico','malaysia','slovenia','afganistan','kiribati','panama','australia','senegal','costa rica','rwanda','korea selatan','makau','togo','honduras','iran','tanjung verde','inggris','lithuania','samoa amerika','tuvalu','bolivia','islandia','pantai gading','republik tanzania','liechtenstein','sudan selatan','paraguay','maldives','libya','polandia','gabon','vietnam','estonia','belize','benin','tunisia','antigua dan barbuda','kuba','pakistan','kongo','guam','lesotho','sri lanka','republik demokratik kongo','komoro','saint kitts dan nevis','vanuatu','peru','georgia','haiti','burkina faso','greenland','thailand','norwegia','san marino','kirgizstan','kosovo','selandia baru','tahiti','uruguay','saint vincent dan grenadine','republik rumania','belgia','belarus','venezuela','azerbaijan','guatemala','tonga','republik timor leste','ghana','guyana','spanyol','filipina','andorra','amerika serikat','taiwan','guiana prancis','gambia','denmark','republik dominika','afrika selatan','monako','eswatini','singapura','yordania','nauru','kanada','palau','tajikistan','kepulauan faroe','italia','trinidad dan tobago','laos','barbados','finlandia','guinea-bissau','mali','mikronesia'
) | ForEach-Object { $_.tolower() }

# Find missing
$missing = @()
foreach ($country in $dbNegara) {
    if ($countryPaths -notcontains $country) {
        $missing += $country
    }
}

Write-Host "NEGARA KURANG DI COUNTRY-PATHS.JSON: $($missing.Count) negara"
Write-Host "=========================================" -ForegroundColor Yellow
if ($missing.Count -eq 0) {
    Write-Host "Semua negara sudah ada di country-paths.json!" -ForegroundColor Green
} else {
    $missing | Sort-Object | ForEach-Object { 
        Write-Host "  ❌ $_" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "Total negara di db_negara.txt: $($dbNegara.Count)"
Write-Host "Total negara di country-paths.json: $($countryPaths.Count)"

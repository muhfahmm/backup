# Generate tax database files for all countries

function Get-TaxRate {
    param(
        [string]$countryName
    )
    
    $sum = 0
    foreach ($char in $countryName.ToCharArray()) {
        $sum += [int]$char
    }
    return $sum % 101
}

function Get-TaxFileContent {
    param(
        [string]$countryName
    )
    
    # Calculate tax rates for each type
    $ppnRate = Get-TaxRate ($countryName + "ppn")
    $corpRate = Get-TaxRate ($countryName + "korporasi")
    $incomeRate = Get-TaxRate ($countryName + "penghasilan")
    $customsRate = Get-TaxRate ($countryName + "beacukai")
    $envRate = Get-TaxRate ($countryName + "lingkungan")
    $transitAlliedRate = Get-TaxRate ($countryName + "transitsekutu")
    $transitNonAlliedRate = Get-TaxRate ($countryName + "transitnonsekutu")
    $otherRate = Get-TaxRate ($countryName + "lainnya")
    
    $content = @()
    $content += "// @ts-nocheck"
    $content += "const ${countryName}_pajak = {"
    $content += '  "pajak": {'
    $content += "    ""ppn"": { ""tarif"": $ppnRate },"
    $content += "    ""korporasi"": { ""tarif"": $corpRate },"
    $content += "    ""penghasilan"": { ""tarif"": $incomeRate },"
    $content += "    ""bea_cukai"": { ""tarif"": $customsRate },"
    $content += "    ""lingkungan"": { ""tarif"": $envRate },"
    $content += "    ""transit_sekutu"": { ""tarif"": $transitAlliedRate },"
    $content += "    ""transit_non_sekutu"": { ""tarif"": $transitNonAlliedRate },"
    $content += "    ""lainnya"": { ""tarif"": $otherRate }"
    $content += '  }'
    $content += "};"
    
    return $content -join "`n"
}

# Define regions
$regions = @("afrika", "asia", "eropa", "na", "oceania", "sa")
$totalCreated = 0
$errors = @{}

foreach ($region in $regions) {
    Write-Host "Processing region: $region"
    $regionPath = "c:\EM\json\database_hubungan_antar_negara\$region"
    $outputPath = "c:\EM\json\database_pajak_negara\$region"
    
    $files = Get-ChildItem $regionPath -Filter "*.ts" -File
    $regionCount = 0
    
    foreach ($file in $files) {
        try {
            # Extract country name from filename (e.g., "1_afrika_selatan.ts" -> "afrika_selatan")
            $baseName = [System.IO.Path]::GetFileNameWithoutExtension($file.Name)
            $countryName = $baseName -replace '^\d+_', ''
            
            # Generate content
            $content = Get-TaxFileContent $countryName
            
            # Write to output directory
            $outputFile = Join-Path $outputPath $file.Name
            $content | Set-Content -Path $outputFile -Encoding UTF8
            
            $regionCount++
            $totalCreated++
        }
        catch {
            $errors[$file.Name] = $_.Exception.Message
        }
    }
    
    Write-Host "  Created $regionCount files for $region"
}

Write-Host "`n=== Summary ==="
Write-Host "Total files created: $totalCreated"
Write-Host "Files per region:"
foreach ($region in $regions) {
    $regionPath = "c:\EM\json\database_pajak_negara\$region"
    $count = (Get-ChildItem $regionPath -Filter "*.ts" -File).Count
    Write-Host "  $region: $count files"
}

if ($errors.Count -gt 0) {
    Write-Host "`n=== Errors ==="
    foreach ($error in $errors.GetEnumerator()) {
        Write-Host "  $($error.Key): $($error.Value)"
    }
}
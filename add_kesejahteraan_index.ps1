# Script untuk menambahkan kesejahteraanIndex ke semua database negara
# Menggunakan nilai default berdasarkan region untuk realistic data distribution

$regions = @{
    'eropa' = 75
    'asia' = 65
    'na' = 70
    'sa' = 60
    'Afrika' = 45
    'oceania' = 72
}

$baseDir = "c:\utama\project\project-sendiri\em2\json\database_index_kepuasan"
$count = 0
$updated = 0

# Get all TS files except index.ts
$files = Get-ChildItem -Path $baseDir -Recurse -Filter "*.ts" | Where-Object { $_.Name -ne "index.ts" }

Write-Host "Found $($files.Count) files to update" -ForegroundColor Cyan

foreach ($file in $files) {
    $count++
    
    # Determine region from path
    $regionPath = $file.DirectoryName.Replace($baseDir, "").TrimStart("\").Split("\")[0]
    
    # Get default value for this region
    $defaultKesejahteraan = 50
    foreach ($region in $regions.Keys) {
        if ($regionPath -eq $region) {
            $defaultKesejahteraan = $regions[$region]
            break
        }
    }
    
    # Add some variance (±10 from default)
    $variance = Get-Random -Minimum -10 -Maximum 11
    $finalValue = [Math]::Max(1, [Math]::Min(100, $defaultKesejahteraan + $variance))
    
    # Read file content
    $content = Get-Content $file.FullName -Raw
    
    # Check if kesejahteraanIndex already exists
    if ($content -match "kesejahteraanIndex") {
        Write-Host "[$count] SKIP: $($file.Name) - already has kesejahteraanIndex" -ForegroundColor Yellow
        continue
    }
    
    # Add kesejahteraanIndex before the closing brace
    # Match pattern: closing brace at end of object
    $newContent = $content -replace "(\};)$", ", `n  kesejahteraanIndex: $finalValue`n};"
    
    # If pattern doesn't match, try alternative pattern
    if ($newContent -eq $content) {
        $newContent = $content -replace "(\s+\};)$", ", `n  kesejahteraanIndex: $finalValue`n};"
    }
    
    # Write back to file
    Set-Content $file.FullName $newContent -Encoding UTF8
    $updated++
    
    if ($updated % 20 -eq 0) {
        Write-Host "[$updated/$($files.Count)] Updated: $($file.Name) - kesejahteraanIndex: $finalValue" -ForegroundColor Green
    }
}

Write-Host "`n✅ Completed! Updated $updated files" -ForegroundColor Green

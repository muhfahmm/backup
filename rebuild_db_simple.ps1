# Simple script using direct string replacement

$baseDir = "c:\utama\project\project-sendiri\em2\json\database_index_kepuasan"

$files = Get-ChildItem -Path $baseDir -Recurse -Filter "*.ts" | Where-Object { $_.Name -ne "index.ts" }

Write-Host "Rebuilding $($files.Count) files..." -ForegroundColor Cyan

$updated = 0

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    
    # Skip if already has proper format
    if ($content -match "`n  kesejahteraanIndex: \d+,?\s*\n\};") {
        continue
    }
    
    # Extract values using multiple patterns
    $hasKesejahteraan = $content -match "kesejahteraanIndex"
    
    if (-not $hasKesejahteraan) {
        # Generate random kesejahteraan value
        $randomValue = Get-Random -Minimum 35 -Maximum 85
        
        # Replace closing }; with proper format
        # Pattern 1: region: 'xx', };
        $newContent = $content -replace "region: '([^']+)',\s*\};", "region: `$1',`n  kesejahteraanIndex: $randomValue,`n};"
        
        # If pattern 1 didn't work, try pattern 2
        if ($newContent -eq $content) {
            $newContent = $content -replace "region: `"([^`"]+)`",\s*\};", "region: `$1`",`n  kesejahteraanIndex: $randomValue,`n};"
        }
        
        # Write only if changed
        if ($newContent -ne $content) {
            Set-Content $file.FullName $newContent -Encoding UTF8
            $updated++
        }
    } else {
        # Fix existing formatting
        $newContent = $content -replace "`n\s*,\s*`n\s+kesejahteraanIndex:", "`n  kesejahteraanIndex:"
        
        if ($newContent -ne $content) {
            Set-Content $file.FullName $newContent -Encoding UTF8
            $updated++
        }
    }
    
    if ($updated % 30 -eq 0) {
        Write-Host "Updated: $updated files" -ForegroundColor Green
    }
}

Write-Host "`n✅ Done! Updated $updated files" -ForegroundColor Green

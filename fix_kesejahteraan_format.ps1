# Script untuk fix format kesejahteraanIndex

$baseDir = "c:\utama\project\project-sendiri\em2\json\database_index_kepuasan"
$count = 0
$fixed = 0

# Get all TS files except index.ts
$files = Get-ChildItem -Path $baseDir -Recurse -Filter "*.ts" | Where-Object { $_.Name -ne "index.ts" }

Write-Host "Fixing format for $($files.Count) files..." -ForegroundColor Cyan

foreach ($file in $files) {
    $count++
    
    # Read file content
    $content = Get-Content $file.FullName -Raw
    
    # Fix pattern: remove extra comma/newline before kesejahteraanIndex
    $newContent = $content -replace ", \r?\n\s+kesejahteraanIndex:", "`n  kesejahteraanIndex:"
    $newContent = $newContent -replace ", `n  kesejahteraanIndex:", "`n  kesejahteraanIndex:"
    
    # Also remove extra newlines at the end
    $newContent = $newContent -replace "};\r?\n\r?\n+", "}`n"
    
    # Write back to file
    if ($newContent -ne $content) {
        Set-Content $file.FullName $newContent -Encoding UTF8
        $fixed++
    }
    
    if ($fixed % 30 -eq 0) {
        Write-Host "[$fixed/$($files.Count)] Fixed formatting" -ForegroundColor Green
    }
}

Write-Host "`n✅ Completed! Fixed $fixed files" -ForegroundColor Green

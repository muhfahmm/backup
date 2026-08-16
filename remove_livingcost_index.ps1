# Script untuk menghapus livingCostIndex dari semua 207 file database

$baseDir = "c:\utama\project\project-sendiri\em2\json\database_index_kepuasan"
$files = Get-ChildItem -Path $baseDir -Recurse -Filter "*.ts" | Where-Object { $_.Name -ne "index.ts" }

Write-Host "Removing livingCostIndex from $($files.Count) files..." -ForegroundColor Cyan

$updated = 0

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    
    # Remove the line: livingCostIndex: XX,
    $newContent = $content -replace "`n\s+livingCostIndex: \d+,\s*", "`n  "
    
    # Also handle case without trailing comma
    $newContent = $newContent -replace "`n\s+livingCostIndex: \d+\s+", "`n  "
    
    # Remove extra blank lines
    $newContent = $newContent -replace "`n\s*`n\s*`n", "`n"
    
    if ($newContent -ne $content) {
        Set-Content $file.FullName $newContent -Encoding UTF8
        $updated++
    }
    
    if ($updated % 50 -eq 0) {
        Write-Host "Updated: $updated files" -ForegroundColor Green
    }
}

Write-Host "`n✅ Done! Removed livingCostIndex from $updated files" -ForegroundColor Green

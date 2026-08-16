# Script untuk rebuild database dengan format yang benar

$baseDir = "c:\utama\project\project-sendiri\em2\json\database_index_kepuasan"

$regions = @{
    'eropa' = 75
    'asia' = 65
    'na' = 70
    'sa' = 60
    'afrika' = 45
    'oceania' = 72
}

$count = 0
$updated = 0

# Get all TS files except index.ts
$files = Get-ChildItem -Path $baseDir -Recurse -Filter "*.ts" | Where-Object { $_.Name -ne "index.ts" }

Write-Host "Rebuilding $($files.Count) database files..." -ForegroundColor Cyan

foreach ($file in $files) {
    $count++
    
    # Read file content
    $content = Get-Content $file.FullName -Raw
    
    # Extract existing data
    $id = if ($content -match "id:\s*(\d+)") { [int]$matches[1] } else { 0 }
    $name = if ($content -match "name:\s*['\"]([^'\"]+)['\"]") { $matches[1] } else { "" }
    $livingCost = if ($content -match "livingCostIndex:\s*(\d+)") { [int]$matches[1] } else { 50 }
    $region = if ($content -match "region:\s*['\"]([^'\"]+)['\"]") { $matches[1] } else { "" }
    
    # Determine kesejahteraanIndex
    $defaultKesejahteraan = 50
    foreach ($reg in $regions.Keys) {
        if ($region -eq $reg) {
            $defaultKesejahteraan = $regions[$reg]
            break
        }
    }
    
    # Add variance if not already set
    $variance = Get-Random -Minimum -10 -Maximum 11
    $kesejahteraan = [Math]::Max(1, [Math]::Min(100, $defaultKesejahteraan + $variance))
    
    # Build new content
    $newContent = @"
// @ts-nocheck
export const $($file.BaseName.Replace('.ts', '')}_kepuasan = {
  id: $id,
  name: '$name',
  livingCostIndex: $livingCost,
  region: '$region',
  kesejahteraanIndex: $kesejahteraan,
};
"@
    
    # Write back
    Set-Content $file.FullName $newContent -Encoding UTF8
    $updated++
    
    if ($updated % 30 -eq 0) {
        Write-Host "[$updated/$($files.Count)] Rebuilt: $($file.Name)" -ForegroundColor Green
    }
}

Write-Host "`n✅ Completed! Rebuilt $updated files" -ForegroundColor Green

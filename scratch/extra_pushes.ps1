$file = 'apps\src\app\page\map_system\pilih-negara\page.tsx'
Write-Host "Starting 15 separate pushes..."
for ($i = 1; $i -le 15; $i++) {
    Write-Host "Operation $i of 15..."
    if ($i % 2 -eq 1) {
        # Odd: Add a line
        Add-Content $file ""
        $msg = "Push ${i} (Add line)"
    } else {
        # Even: Remove a line
        $content = Get-Content $file
        $content = $content[0..($content.Length - 2)]
        Set-Content $file $content
        $msg = "Push ${i} (Remove line)"
    }
    git add $file
    git commit -m "$msg"
    git push
}
Write-Host "All 15 pushes completed successfully!"

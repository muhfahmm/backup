$file = 'apps\src\app\page\map_system\pilih-negara\page.tsx'
Write-Host "Adding 15 empty lines..."
for ($i = 1; $i -le 15; $i++) {
    Add-Content $file ""
}

Write-Host "Starting 15 push cycle..."
for ($i = 1; $i -le 15; $i++) {
    Write-Host "Commit $i of 15..."
    $content = Get-Content $file
    if ($content.Length -gt 1) {
        $content = $content[0..($content.Length - 2)]
        Set-Content $file $content
    }
    git add $file
    git commit -m "$i"
    git push
}
Write-Host "Done!"

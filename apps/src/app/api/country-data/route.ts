import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const countryPath = searchParams.get('path');

    if (!countryPath) {
        return NextResponse.json({ error: 'Path is required' }, { status: 400 });
    }

    try {
        // Find project root by looking for 'json' directory
        let currentDir = process.cwd();
        let projectRoot = currentDir;
        
        // If we are in 'apps', go up one level
        if (currentDir.endsWith('apps')) {
            projectRoot = path.join(currentDir, '..');
        }
        
        const fullPath = path.join(projectRoot, 'json/semua_fitur_negara/0_profiles', countryPath);
        
        if (!fs.existsSync(fullPath)) {
            console.error('File not found at:', fullPath);
            return NextResponse.json({ error: 'File not found' }, { status: 404 });
        }

        const fileContent = fs.readFileSync(fullPath, 'utf8');
        
        return new NextResponse(fileContent, {
            headers: { 'Content-Type': 'text/plain' },
        });
    } catch (e) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

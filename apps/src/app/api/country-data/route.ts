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
        let currentDir = process.cwd();
        let projectRoot = currentDir;
        if (currentDir.endsWith('apps')) {
            projectRoot = path.join(currentDir, '..');
        }
        
        const jsonRoot = path.join(projectRoot, 'json/semua_fitur_negara');
        const profilesDir = path.join(jsonRoot, '0_profiles');
        const targetFilename = path.basename(countryPath);
        
        // Find ALL files with this name across the json directory
        const allFiles: string[] = [];
        const findFiles = (dir: string) => {
            const files = fs.readdirSync(dir);
            for (const file of files) {
                const fullPath = path.join(dir, file);
                if (fs.statSync(fullPath).isDirectory()) {
                    findFiles(fullPath);
                } else if (file === targetFilename) {
                    allFiles.push(fullPath);
                }
            }
        };
        findFiles(jsonRoot);

        if (allFiles.length === 0) {
            return NextResponse.json({ error: 'File not found' }, { status: 404 });
        }

        // Merge all file contents
        let mergedContent = "// Virtual Merged Data for " + targetFilename + "\n";
        for (const f of allFiles) {
            mergedContent += fs.readFileSync(f, 'utf8') + "\n";
        }
        
        return new NextResponse(mergedContent, {
            headers: { 'Content-Type': 'text/plain' },
        });
    } catch (e) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

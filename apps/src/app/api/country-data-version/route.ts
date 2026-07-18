import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const getLatestMtime = (dir: string): number => {
    if (!fs.existsSync(dir)) return 0;
    let latest = 0;
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            const sub = getLatestMtime(fullPath);
            if (sub > latest) latest = sub;
        } else {
            const stat = fs.statSync(fullPath);
            const mtime = stat.mtimeMs;
            if (mtime > latest) latest = mtime;
        }
    }
    return latest;
};

export async function GET() {
    try {
        const currentDir = process.cwd();
        const projectRoot = currentDir.endsWith('apps') ? path.join(currentDir, '..') : currentDir;
        const mineralDir = path.join(
            projectRoot,
            'json/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis'
        );
        const version = getLatestMtime(mineralDir);
        return NextResponse.json({ version });
    } catch (e) {
        console.error('Failed to get data version:', e);
        return NextResponse.json({ version: 0 });
    }
}

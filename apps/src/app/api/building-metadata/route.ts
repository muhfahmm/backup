import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

async function readAllTsFiles(dir: string, files: string[] = []) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      await readAllTsFiles(full, files);
    } else if (/\.ts$/.test(e.name)) {
      files.push(full);
    }
  }
  return files;
}

export async function GET() {
  try {
    const localJsonPath = path.join(process.cwd(), 'src', 'lib', 'building-metadata.json');
    try {
      const jsonContent = await fs.readFile(localJsonPath, 'utf8');
      const metadata = JSON.parse(jsonContent);
      console.log('[building-metadata] loaded local JSON:', localJsonPath);
      return NextResponse.json(metadata);
    } catch (jsonErr) {
      console.warn('[building-metadata] local JSON unavailable, falling back to TS parsing:', jsonErr?.message ?? jsonErr);
    }

    let base = path.join(process.cwd(), 'json', 'semua_fitur_negara');
    // In dev server process.cwd() may be apps/; try parent folder as fallback
    try {
      await fs.access(base);
    } catch (e) {
      const alt = path.join(process.cwd(), '..', 'json', 'semua_fitur_negara');
      try {
        await fs.access(alt);
        base = alt;
      } catch (e2) {
        throw new Error(`Cannot locate json/semua_fitur_negara at ${base} or ${alt}`);
      }
    }
    console.log('[building-metadata] using base path:', base);
    const tsFiles = await readAllTsFiles(base);
    const metadata: Record<string, any> = {};
    // More robust parsing: find every dataKey occurrence and extract the surrounding object literal
    const dataKeyRegex = /dataKey\s*:\s*"([^\"]+)"/g;
    for (const f of tsFiles) {
      const content = await fs.readFile(f, 'utf8');
      let m: RegExpExecArray | null;
      while ((m = dataKeyRegex.exec(content)) !== null) {
        const dataKey = m[1];
        // find the nearest opening brace before this match
        const idx = m.index;
        let start = content.lastIndexOf('{', idx);
        if (start === -1) continue;
        // find matching closing brace for that opening brace
        let depth = 0;
        let end = -1;
        for (let i = start; i < content.length; i++) {
          const ch = content[i];
          if (ch === '{') depth++;
          else if (ch === '}') {
            depth--;
            if (depth === 0) { end = i; break; }
          }
        }
        if (end === -1) continue;
        const objText = content.slice(start, end + 1);
        const biayaMatch = /biaya_pembangunan\s*:\s*([0-9.]+)/.exec(objText);
        const produksiMatch = /produksi\s*:\s*([0-9.]+)/.exec(objText);
        const satuanMatch = /satuan\s*:\s*"([^\"]+)"/.exec(objText);
        metadata[dataKey] = metadata[dataKey] || {};
        if (biayaMatch) metadata[dataKey].biaya_pembangunan = Number(biayaMatch[1]);
        if (produksiMatch) metadata[dataKey].produksi = Number(produksiMatch[1]);
        if (satuanMatch) metadata[dataKey].satuan = satuanMatch[1];
      }
    }

    return NextResponse.json(metadata);
  } catch (err) {
    console.error('[building-metadata] error', err);
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}

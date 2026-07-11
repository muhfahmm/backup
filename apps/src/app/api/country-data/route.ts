import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const removeComments = (input: string) =>
    input.replace(/\/\/.*$/gm, '').replace(/\/\*[\s\S]*?\*\//g, '');

const findObjectLiteral = (input: string, start: number) => {
    let depth = 0;
    let inString: string | null = null;
    let escaped = false;

    for (let i = start; i < input.length; i++) {
        const char = input[i];
        if (escaped) {
            escaped = false;
            continue;
        }
        if (char === '\\') {
            escaped = true;
            continue;
        }
        if (inString) {
            if (char === inString) {
                inString = null;
            }
            continue;
        }
        if (char === '"' || char === "'" || char === '`') {
            inString = char;
            continue;
        }
        if (char === '{') {
            depth += 1;
            continue;
        }
        if (char === '}') {
            depth -= 1;
            if (depth === 0) {
                return input.slice(start, i + 1);
            }
        }
    }
    return null;
};

const parseObjectLiteral = (literal: string) => {
    try {
        return new Function(`"use strict"; return (${literal});`)();
    } catch (e) {
        console.warn('Failed to parse object literal', e);
        return null;
    }
};

const extractObjectsFromFile = (fileContent: string) => {
    const cleaned = removeComments(fileContent);
    const objects: any[] = [];

    const constRegex = /(?:const|let|var)\s+[A-Za-z_$][\w$]*\s*=\s*\{/g;
    let match: RegExpExecArray | null;
    while ((match = constRegex.exec(cleaned))) {
        const start = match.index + match[0].length - 1;
        const objectLiteral = findObjectLiteral(cleaned, start);
        if (objectLiteral) {
            const parsed = parseObjectLiteral(objectLiteral);
            if (parsed && typeof parsed === 'object') {
                objects.push(parsed);
            }
        }
    }

    const exportRegex = /export\s+default\s*\{/g;
    const exportMatch = exportRegex.exec(cleaned);
    if (exportMatch) {
        const start = exportMatch.index + exportMatch[0].length - 1;
        const objectLiteral = findObjectLiteral(cleaned, start);
        if (objectLiteral) {
            const parsed = parseObjectLiteral(objectLiteral);
            if (parsed && typeof parsed === 'object') {
                objects.push(parsed);
            }
        }
    }

    return Object.assign({}, ...objects);
};

const getLevelSource = (source: any) => {
    const wrapperKey = Object.keys(source).find((key) => key.endsWith('_level_kabinet'));
    if (wrapperKey && typeof source[wrapperKey] === 'object' && source[wrapperKey] !== null) {
        return source[wrapperKey];
    }

    if (
        typeof source.kementerian === 'object' && source.kementerian !== null &&
        typeof source.keamanan === 'object' && source.keamanan !== null &&
        typeof source.layanan === 'object' && source.layanan !== null
    ) {
        return {
            kementerian: source.kementerian,
            keamanan: source.keamanan,
            layanan: source.layanan,
        };
    }

    return null;
};

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const countryPath = searchParams.get('path');

    if (!countryPath) {
        return NextResponse.json({ error: 'Path is required' }, { status: 400 });
    }

    try {
        const currentDir = process.cwd();
        const projectRoot = currentDir.endsWith('apps') ? path.join(currentDir, '..') : currentDir;
        const jsonRoot = path.join(projectRoot, 'json/semua_fitur_negara');
        const levelRoot = path.join(projectRoot, 'json/database_level_kabinet');
        const targetFilename = path.basename(countryPath);

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

        const levelCabinetPath = path.join(levelRoot, countryPath);
        if (fs.existsSync(levelCabinetPath)) {
            allFiles.push(levelCabinetPath);
        }

        if (allFiles.length === 0) {
            return NextResponse.json({ error: 'File not found' }, { status: 404 });
        }

        let mergedData: any = {};
        for (const filePath of allFiles) {
            const fileContents = fs.readFileSync(filePath, 'utf8');
            const parsed = extractObjectsFromFile(fileContents);

            const isLevelFile = path.relative(levelRoot, filePath).startsWith('..') === false;
            if (isLevelFile && parsed) {
                const levelData = getLevelSource(parsed);
                if (levelData) {
                    const levelFields: Record<string, number> = {};
                    ['kementerian', 'keamanan', 'layanan'].forEach((group) => {
                        const groupData = levelData[group];
                        if (groupData && typeof groupData === 'object') {
                            Object.entries(groupData).forEach(([dept, level]) => {
                                const parsedLevel = Number(level);
                                if (!Number.isNaN(parsedLevel) && parsedLevel > 0) {
                                    levelFields[`level_${dept}`] = parsedLevel;
                                }
                            });
                        }
                    });
                    mergedData = { ...mergedData, ...levelFields };
                    if (parsed.nama_negara) {
                        mergedData.nama_negara = parsed.nama_negara;
                    }
                    continue;
                }
            }

            mergedData = { ...mergedData, ...parsed };
        }

        return NextResponse.json(mergedData);
    } catch (e) {
        console.error('Failed to load country data file:', e);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

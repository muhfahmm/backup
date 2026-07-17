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
        // First attempt: direct evaluation
        return new Function(`"use strict"; return (${literal});`)();
    } catch (e) {
        // Second attempt: replace bare identifiers (that look like variable references) with null
        try {
            let fixedLiteral = literal;
            // Replace patterns like ": identifier_name" with ": null" where identifier is not a string/number/boolean/null
            fixedLiteral = fixedLiteral.replace(/:\s*([A-Za-z_$][\w$]*)\s*([,\}])/g, (match, identifier, after) => {
                // Skip if it's a literal value keyword
                if (['true', 'false', 'null', 'undefined', 'NaN', 'Infinity'].includes(identifier)) {
                    return match;
                }
                return `: null${after}`;
            });
            return new Function(`"use strict"; return (${fixedLiteral});`)();
        } catch (e2) {
            console.warn('Failed to parse object literal', e);
            return null;
        }
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

const extractFileOrder = (fileName: string) => {
    const match = fileName.match(/^(\d+)/);
    return match ? Number(match[1]) : NaN;
};

const getCountryKey = (filePath: string) => {
    const fileName = path.basename(filePath).replace(/\.(ts|tsx|js|json)$/i, '');
    const withoutPrefix = fileName.replace(/^\d+_/, '');
    return withoutPrefix.toLowerCase().replace(/[^a-z0-9]+/g, '_');
};

const getContinentFromOrder = (order: number) => {
    if (Number.isNaN(order)) return 'Lainnya';
    if (order >= 1 && order <= 51) return 'Afrika';
    if (order >= 54 && order <= 102) return 'Asia';
    if (order >= 103 && order <= 151) return 'Eropa';
    if (order >= 152 && order <= 178) return 'Amerika Utara';
    if (order >= 179 && order <= 194) return 'Oseania';
    if (order >= 195 && order <= 207) return 'Amerika Selatan';
    return 'Lainnya';
};

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const countryPath = searchParams.get('path');
    const requestAll = searchParams.get('all') === 'true';

    if (!countryPath && !requestAll) {
        return NextResponse.json({ error: 'Path is required unless all=true is provided' }, { status: 400 });
    }

    try {
        const currentDir = process.cwd();
        const projectRoot = currentDir.endsWith('apps') ? path.join(currentDir, '..') : currentDir;
        const jsonRoot = path.join(projectRoot, 'json/semua_fitur_negara');
        const levelRoot = path.join(projectRoot, 'json/database_level_kabinet');
        const taxRoot = path.join(projectRoot, 'json/database_pajak_negara');

        const allFiles: string[] = [];
        const findFiles = (dir: string, filename?: string) => {
            const files = fs.readdirSync(dir);
            for (const file of files) {
                const fullPath = path.join(dir, file);
                if (fs.statSync(fullPath).isDirectory()) {
                    findFiles(fullPath, filename);
                } else if (!filename || file === filename) {
                    allFiles.push(fullPath);
                }
            }
        };

        const loadFileData = (filePath: string) => {
            const fileContents = fs.readFileSync(filePath, 'utf8');
            const parsed = extractObjectsFromFile(fileContents);
            if (!parsed || typeof parsed !== 'object') return null;

            const isLevelFile = path.relative(levelRoot, filePath).startsWith('..') === false;
            if (isLevelFile) {
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
                    const result: any = { ...levelFields };
                    if (parsed.nama_negara) {
                        result.nama_negara = parsed.nama_negara;
                    }
                    return result;
                }
            }

            return parsed;
        };

        if (requestAll) {
            const taxFiles: string[] = [];
            const findTaxFiles = (dir: string) => {
                const files = fs.readdirSync(dir);
                for (const file of files) {
                    const fullPath = path.join(dir, file);
                    if (fs.statSync(fullPath).isDirectory()) {
                        findTaxFiles(fullPath);
                    } else {
                        taxFiles.push(fullPath);
                    }
                }
            };

            findTaxFiles(taxRoot);
            const countryKeys = new Set(taxFiles.map((filePath) => getCountryKey(filePath)));

            const collectCountryFiles = (dir: string) => {
                const files: string[] = [];
                const walk = (currentDir: string) => {
                    const entries = fs.readdirSync(currentDir);
                    for (const entry of entries) {
                        const fullPath = path.join(currentDir, entry);
                        if (fs.statSync(fullPath).isDirectory()) {
                            walk(fullPath);
                        } else if (countryKeys.has(getCountryKey(fullPath))) {
                            files.push(fullPath);
                        }
                    }
                };
                walk(dir);
                return files;
            };

            const countryProfileFiles = collectCountryFiles(jsonRoot);
            const countryLevelFiles = collectCountryFiles(levelRoot);
            const extractionRoot = path.join(projectRoot, 'json/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis');
            const extractionFiles: string[] = [];
            const collectExtractionFiles = (dir: string) => {
                if (!fs.existsSync(dir)) return;
                const entries = fs.readdirSync(dir);
                for (const entry of entries) {
                    const fullPath = path.join(dir, entry);
                    if (fs.statSync(fullPath).isDirectory()) {
                        collectExtractionFiles(fullPath);
                    } else if (countryKeys.has(getCountryKey(fullPath))) {
                        extractionFiles.push(fullPath);
                    }
                }
            };
            collectExtractionFiles(extractionRoot);

            const mergedByCountryKey: Record<string, any> = {};
            for (const taxFilePath of taxFiles) {
                const countryKey = getCountryKey(taxFilePath);
                const countryFilename = path.basename(taxFilePath);
                const order = extractFileOrder(countryFilename);
                mergedByCountryKey[countryKey] = {
                    __fileName: countryFilename,
                    __fileOrder: order,
                    __continent: getContinentFromOrder(order),
                };
            }

            for (const filePath of [...taxFiles, ...countryProfileFiles, ...countryLevelFiles, ...extractionFiles]) {
                const fileData = loadFileData(filePath);
                if (!fileData) continue;

                const countryKey = getCountryKey(filePath);
                mergedByCountryKey[countryKey] = {
                    ...(mergedByCountryKey[countryKey] || {}),
                    ...fileData,
                };
            }

            return NextResponse.json(Object.values(mergedByCountryKey));
        }

        const targetFilename = path.basename(countryPath!);
        const findTargetFiles = (dir: string) => {
            const files = fs.readdirSync(dir);
            for (const file of files) {
                const fullPath = path.join(dir, file);
                if (fs.statSync(fullPath).isDirectory()) {
                    findTargetFiles(fullPath);
                } else if (file === targetFilename) {
                    allFiles.push(fullPath);
                }
            }
        };

        findTargetFiles(jsonRoot);
        findTargetFiles(taxRoot);
        
        // Explicitly search for extraction files in 2_sektor_mineral_kritis
        const ekstraksiRoot = path.join(projectRoot, 'json/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis');
        if (fs.existsSync(ekstraksiRoot)) {
            const findEkstraksiFiles = (dir: string) => {
                if (!fs.existsSync(dir)) return;
                const files = fs.readdirSync(dir);
                for (const file of files) {
                    const fullPath = path.join(dir, file);
                    if (fs.statSync(fullPath).isDirectory()) {
                        findEkstraksiFiles(fullPath);
                    } else if (file === targetFilename) {
                        allFiles.push(fullPath);
                    }
                }
            };
            findEkstraksiFiles(ekstraksiRoot);
        }
        
        const levelCabinetPath = path.join(levelRoot, countryPath!);
        if (fs.existsSync(levelCabinetPath)) {
            allFiles.push(levelCabinetPath);
        }

        const explicitTaxPath = path.join(taxRoot, countryPath!);
        if (fs.existsSync(explicitTaxPath)) {
            allFiles.push(explicitTaxPath);
        }

        if (allFiles.length === 0) {
            return NextResponse.json({ error: 'File not found' }, { status: 404 });
        }

        let mergedData: any = {};
        for (const filePath of allFiles) {
            const parsed = loadFileData(filePath);
            if (!parsed) continue;
            mergedData = { ...mergedData, ...parsed };
        }

        return NextResponse.json(mergedData);
    } catch (e) {
        console.error('Failed to load country data file:', e);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

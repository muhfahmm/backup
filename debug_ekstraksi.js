const fs = require('fs');
const path = require('path');

const projectRoot = process.cwd();
const ekstraksiRoot = path.join(projectRoot, 'json/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis');

console.log('=== EKSTRAKSI ROOT CHECK ===');
console.log('Path:', ekstraksiRoot);
console.log('Exists:', fs.existsSync(ekstraksiRoot));

// Try to find 193_tuvalu.ts
const targetFilename = '193_tuvalu.ts';
const foundFiles = [];

const findEkstraksiFiles = (dir) => {
    if (!fs.existsSync(dir)) {
        console.log('Dir not exists:', dir);
        return;
    }
    
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
            console.log('  DIR:', file);
            findEkstraksiFiles(fullPath);
        } else {
            console.log('  FILE:', file, '- match?', file === targetFilename);
            if (file === targetFilename) {
                foundFiles.push(fullPath);
            }
        }
    }
};

console.log('\n=== SEARCHING FOR', targetFilename, '===');
findEkstraksiFiles(ekstraksiRoot);

console.log('\n=== FOUND FILES ===');
console.log('Count:', foundFiles.length);
foundFiles.forEach(f => console.log(' -', f));

if (foundFiles.length > 0) {
    console.log('\n=== PARSING FILE ===');
    const filePath = foundFiles[0];
    const content = fs.readFileSync(filePath, 'utf8');
    console.log('Content:', content.substring(0, 200));
    
    // Try to extract object
    const cleaned = content.replace(/\/\/.*$/gm, '').replace(/\/\*[\s\S]*?\*\//g, '');
    console.log('\nCleaned:', cleaned.substring(0, 150));
    
    // Try regex
    const constRegex = /(?:const|let|var)\s+[A-Za-z_$][\w$]*\s*=\s*\{/g;
    let match;
    console.log('\nSearching for const patterns...');
    while ((match = constRegex.exec(cleaned))) {
        console.log('Found match at index', match.index, ':', match[0]);
        
        // Find object literal
        const start = match.index + match[0].length - 1;
        let depth = 0;
        let end = -1;
        for (let i = start; i < cleaned.length; i++) {
            if (cleaned[i] === '{') depth++;
            if (cleaned[i] === '}') {
                depth--;
                if (depth === 0) {
                    end = i;
                    break;
                }
            }
        }
        
        if (end > -1) {
            const objectLiteral = cleaned.slice(start, end + 1);
            console.log('Object literal:', objectLiteral.substring(0, 100) + '...');
            
            // Try to parse
            try {
                const result = new Function(`"use strict"; return (${objectLiteral});`)();
                console.log('✓ Parsed successfully');
                console.log('  emas:', result.emas);
                console.log('  uranium:', result.uranium);
            } catch (e) {
                console.log('✗ Parse error:', e.message);
            }
        }
    }
}

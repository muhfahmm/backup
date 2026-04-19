/**
 * POLYGLOT SERVER LAUNCHER (V4 - Full Online Native)
 * Memastikan 13 server polyglot berjalan stabil di Windows tanpa dependensi eksternal berat.
 */
const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

const servers = [
    // RUST
    { name: 'Rust-Actix', cwd: 'apps/frontend/src/server/rust-service', cmd: 'cargo', args: ['run', '--bin', 'actix_server'] },
    { name: 'Rust-Axum', cwd: 'apps/frontend/src/server/rust-service', cmd: 'cargo', args: ['run', '--bin', 'axum_server'] },
    
    // GO (Isolasi total menggunakan pola cmd/ agar tidak bentrok di IDE)
    { name: 'Go-Fasthttp', cwd: 'apps/frontend/src/server/go-backend/cmd/fasthttp', cmd: 'go', args: ['run', 'main.go'] },
    { name: 'Go-Gin', cwd: 'apps/frontend/src/server/go-backend/cmd/gin', cmd: 'go', args: ['run', 'main.go'] },
    { name: 'Go-Fiber', cwd: 'apps/frontend/src/server/go-backend/cmd/fiber', cmd: 'go', args: ['run', 'main.go'] },
    
    // PYTHON (Absolute path ke Python Windows yang valid)
    { name: 'Python-FastAPI', cwd: 'apps/frontend/src/server/python-api', cmd: 'C:\\Users\\fahim\\AppData\\Local\\Programs\\Python\\Python310\\python.exe', args: ['fastapi_server.py'] },
    { name: 'Python-BlackSheep', cwd: 'apps/frontend/src/server/python-api', cmd: 'C:\\Users\\fahim\\AppData\\Local\\Programs\\Python\\Python310\\python.exe', args: ['blacksheep_server.py'] },
    { name: 'Python-Sanic', cwd: 'apps/frontend/src/server/python-api', cmd: 'C:\\Users\\fahim\\AppData\\Local\\Programs\\Python\\Python310\\python.exe', args: ['sanic_server.py'] },
    
    // JAVA (Native mock untuk Vertx, Netty, Quarkus)
    { name: 'Java-Vertx', cwd: 'apps/frontend/src/server/java-service/src/main/java', cmd: 'java', args: ['com.simulator.VertxServer'] },
    { name: 'Java-Netty', cwd: 'apps/frontend/src/server/java-service/src/main/java', cmd: 'java', args: ['com.simulator.NettyServer'] },
    { name: 'Java-Quarkus', cwd: 'apps/frontend/src/server/java-service/src/main/java', cmd: 'java', args: ['com.simulator.QuarkusServer'] },
    
    // CPP (Lightweight HttpLib)
    { name: 'CPP-Drogon-Mock', cwd: 'apps/frontend/src/server/cpp-core/build', cmd: './drogon_server.exe', args: [] },
    { name: 'CPP-uWS-Mock', cwd: 'apps/frontend/src/server/cpp-core/build', cmd: './uwebsockets_server.exe', args: [] }
];

console.log('🚀 Menyalakan 13 Mesin Polyglot Backend (V4 - Native Optimized)...');

servers.forEach(s => {
    const fullCwd = path.resolve(__dirname, s.cwd);
    
    if (!fs.existsSync(fullCwd)) {
        console.warn(`⚠️  Skip [${s.name}]: Directory ${s.cwd} tidak ditemukan.`);
        return;
    }

    console.log(`[${s.name}] Memulai...`);
    
    // Tambahkan .exe otomatis jika di Windows untuk cmd lokal
    let command = s.cmd;
    if (command.startsWith('./')) {
        command = path.join(fullCwd, command.replace('./', ''));
    }

    const child = spawn(command, s.args, {
        cwd: fullCwd,
        shell: true,
        detached: true,
        stdio: 'ignore'
    });

    child.on('error', (err) => {
        console.error(`❌  [${s.name}] ERROR: ${err.message}`);
    });

    child.unref();
});

console.log('✅ Inisialisasi Berhasil. Seluruh 5 Bahasa sedang booting.');
console.log('Cek http://localhost:3000/server-status dalam 5-10 detik.');

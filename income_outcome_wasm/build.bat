@echo off
REM Build script for Rust WASM module (Windows)
REM Run this from the income_outcome_wasm directory

setlocal enabledelayedexpansion

echo 🦀 Building Rust WASM module...

REM Check if wasm-pack is installed
where wasm-pack >nul 2>nul
if !errorlevel! neq 0 (
    echo Installing wasm-pack...
    curl https://rustwasm.org/wasm-pack/installer/init.sh -sSf | sh
)

REM Build the WASM module
echo Compiling Rust to WASM...
call wasm-pack build --target web --out-dir pkg

if !errorlevel! equ 0 (
    echo ✅ WASM build complete!
    echo.
    echo Next steps:
    echo 1. Copy pkg/ folder to: apps\src\app\logic\economic_logic\4_icome_outcome\wasm\
    echo    Or configure webpack alias in next.config.ts
    echo.
    echo 2. Install dependencies:
    echo    cd ..\..\apps
    echo    npm install
    echo.
    echo 3. Test in your TypeScript code:
    echo    import { getWasmModule } from './logic/economic_logic/4_icome_outcome'
    echo    const wasm = await getWasmModule()
) else (
    echo ❌ Build failed!
    exit /b 1
)

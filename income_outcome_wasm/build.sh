#!/bin/bash

# Build script for Rust WASM module
# Run this from the income_outcome_wasm directory

set -e

echo "🦀 Building Rust WASM module..."

# Install wasm-pack if not already installed
if ! command -v wasm-pack &> /dev/null; then
    echo "Installing wasm-pack..."
    curl https://rustwasm.org/wasm-pack/installer/init.sh -sSf | sh
fi

# Build the WASM module
echo "Compiling Rust to WASM..."
wasm-pack build --target web --out-dir pkg

echo "✅ WASM build complete!"
echo ""
echo "Next steps:"
echo "1. Copy pkg/ folder to: apps/src/app/logic/economic_logic/4_icome_outcome/wasm/"
echo "   Or configure webpack alias in next.config.ts"
echo ""
echo "2. Install dependencies:"
echo "   cd ../../apps && npm install"
echo ""
echo "3. Test in your TypeScript code:"
echo "   import { getWasmModule } from './logic/economic_logic/4_icome_outcome'"
echo "   const wasm = await getWasmModule()"

/**
 * WASM Module Loader
 * 
 * Dynamically loads and caches the Rust WASM module for income/outcome calculations.
 * Handles initialization and provides a singleton instance.
 */

let wasmModule: any = null;
let wasmInitPromise: Promise<any> | null = null;

/**
 * Initialize and get WASM module
 * 
 * Uses a promise to ensure module is only initialized once,
 * even with concurrent requests.
 * 
 * @returns Initialized WASM module instance
 */
export async function getWasmModule(): Promise<any> {
  // If already loaded, return immediately
  if (wasmModule !== null) {
    return wasmModule;
  }

  // If initialization is in progress, wait for it
  if (wasmInitPromise !== null) {
    return wasmInitPromise;
  }

  // Start initialization
  wasmInitPromise = initWasmModule();
  wasmModule = await wasmInitPromise;

  return wasmModule;
}

/**
 * Initialize WASM module
 * 
 * @returns Initialized module
 */
async function initWasmModule(): Promise<any> {
  try {
    // Import the compiled WASM module
    const mod = await import(
      /* webpackChunkName: "income_outcome_wasm" */
      '../../../../../../../income_outcome_wasm/pkg/income_outcome_wasm'
    );

    // Module is ready
    console.log('[WASM] Income/Outcome module loaded successfully');

    return mod;
  } catch (error) {
    console.error('[WASM] Failed to load income/outcome module:', error);
    wasmInitPromise = null; // Reset so it can retry
    throw new Error(
      `Failed to initialize WASM module. Make sure to run: wasm-pack build ../income_outcome_wasm --target web`
    );
  }
}

/**
 * Reload WASM module (useful for hot-reload during development)
 */
export async function reloadWasmModule(): Promise<any> {
  wasmModule = null;
  wasmInitPromise = null;
  return getWasmModule();
}

/**
 * Check if WASM module is available
 */
export function isWasmAvailable(): boolean {
  return wasmModule !== null;
}

/**
 * Get WASM module status
 */
export function getWasmStatus(): 'uninitialized' | 'initializing' | 'ready' | 'error' {
  if (wasmModule !== null) return 'ready';
  if (wasmInitPromise !== null) return 'initializing';
  return 'uninitialized';
}

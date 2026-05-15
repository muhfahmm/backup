import * as wasm from "./map_engine_rs_bg.wasm";
import { __wbg_set_wasm } from "./map_engine_rs_bg.js";

__wbg_set_wasm(wasm);
wasm.__wbindgen_start();
export {
    MapEngine, start_map_engine
} from "./map_engine_rs_bg.js";

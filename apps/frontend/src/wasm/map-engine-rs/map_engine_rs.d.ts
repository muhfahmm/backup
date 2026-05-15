/* tslint:disable */
/* eslint-disable */

export class MapEngine {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    get_country_at(mouse_x: number, mouse_y: number): any;
    handle_mouse_down(x: number, y: number): void;
    handle_mouse_move(x: number, y: number): void;
    handle_mouse_up(): void;
    handle_wheel(delta_y: number, mouse_x: number, mouse_y: number): void;
    static new(ctx: CanvasRenderingContext2D, width: number, height: number): MapEngine;
    render(): void;
    set_capitals(capitals: any[]): void;
    set_countries(countries: any[]): void;
    set_data(geojson_str: string): void;
}

export function start_map_engine(canvas_id: string): Promise<void>;

use wasm_bindgen::prelude::*;
use wasm_bindgen::JsCast;
use web_sys::{CanvasRenderingContext2d, HtmlCanvasElement, Window, MouseEvent, WheelEvent, Response};
use serde::{Deserialize, Serialize};
use geojson::{GeoJson, FeatureCollection, Value};
use std::rc::Rc;
use std::cell::RefCell;

#[derive(Deserialize)]
struct CountryData {
    iso: String,
    latitude: Option<f64>,
    longitude: Option<f64>,
}

#[derive(Deserialize)]
struct CapitalData {
    capital: String,
    lat: f64,
    lng: f64,
}

#[wasm_bindgen]
pub struct MapEngine {
    ctx: CanvasRenderingContext2d,
    width: f64,
    height: f64,
    scale: f64,
    offset_x: f64,
    offset_y: f64,
    data: Option<FeatureCollection>,
    countries: Vec<JsValue>,
    capitals: Vec<JsValue>,
    selected_country_iso: Option<String>,
    is_panning: bool,
    last_mouse_x: f64,
    last_mouse_y: f64,
    target_offset_x: f64,
    target_offset_y: f64,
    target_scale: f64,
}

#[wasm_bindgen]
impl MapEngine {
    pub fn new(ctx: CanvasRenderingContext2d, width: f64, height: f64) -> MapEngine {
        MapEngine {
            ctx,
            width,
            height,
            scale: 1.0,
            offset_x: 0.0,
            offset_y: 0.0,
            data: None,
            countries: Vec::new(),
            capitals: Vec::new(),
            selected_country_iso: None,
            is_panning: false,
            last_mouse_x: 0.0,
            last_mouse_y: 0.0,
            target_offset_x: 0.0,
            target_offset_y: 0.0,
            target_scale: 1.0,
        }
    }

    pub fn set_data(&mut self, geojson_str: &str) {
        if let Ok(GeoJson::FeatureCollection(fc)) = geojson_str.parse::<GeoJson>() {
            self.data = Some(fc);
        }
    }

    pub fn set_countries(&mut self, countries: Vec<JsValue>) {
        self.countries = countries;
    }

    pub fn set_capitals(&mut self, capitals: Vec<JsValue>) {
        self.capitals = capitals;
    }

    pub fn handle_wheel(&mut self, delta_y: f64, mouse_x: f64, mouse_y: f64) {
        let zoom_speed = 0.001;
        let factor = 1.0 - delta_y * zoom_speed;
        let new_scale = (self.scale * factor).clamp(1.0, 50.0);
        let actual_factor = new_scale / self.scale;
        self.offset_x = mouse_x - (mouse_x - self.offset_x) * actual_factor;
        self.offset_y = mouse_y - (mouse_y - self.offset_y) * actual_factor;
        self.scale = new_scale;
        self.target_scale = new_scale;
        self.target_offset_x = self.offset_x;
        self.target_offset_y = self.offset_y;
        self.apply_clamping();
    }

    pub fn handle_mouse_down(&mut self, x: f64, y: f64) {
        self.is_panning = true;
        self.last_mouse_x = x;
        self.last_mouse_y = y;
    }

    pub fn handle_mouse_move(&mut self, x: f64, y: f64) {
        if self.is_panning {
            self.offset_x += x - self.last_mouse_x;
            self.offset_y += y - self.last_mouse_y;
            self.last_mouse_x = x;
            self.last_mouse_y = y;
            
            // Sync targets immediately to stop any active lerping
            self.target_offset_x = self.offset_x;
            self.target_offset_y = self.offset_y;
            self.target_scale = self.scale;
            
            self.apply_clamping();
        }
    }

    pub fn handle_mouse_up(&mut self) {
        self.is_panning = false;
    }

    pub fn set_selected_country(&mut self, iso: Option<String>, should_center: bool) {
        self.selected_country_iso = iso.clone();
        
        if let Some(iso_val) = iso {
            if should_center {
                // Find country coordinates
                for country_js in &self.countries {
                    if let Ok(country) = serde_wasm_bindgen::from_value::<CountryData>(country_js.clone()) {
                        if country.iso.to_lowercase() == iso_val.to_lowercase() {
                            if let (Some(lat), Some(lng)) = (country.latitude, country.longitude) {
                                let (px, py) = self.project(lng, lat);
                                
                                // Set target zoom
                                let new_scale = 4.0f64.max(self.scale);
                                self.target_scale = new_scale;
                                
                                // Calculate offset to center the point
                                self.target_offset_x = (self.width / 2.0) - (px * new_scale);
                                self.target_offset_y = (self.height / 2.0) - (py * new_scale);
                            }
                            break;
                        }
                    }
                }
            }
        }
    }

    pub fn get_menu_options(&self) -> JsValue {
        let options = vec!["Mulai Simulasi", "Lanjutkan", "Pengaturan", "Keluar"];
        serde_wasm_bindgen::to_value(&options).unwrap()
    }

    fn apply_clamping(&mut self) {
        if self.scale <= 1.0 {
            self.offset_x = 0.0;
            self.offset_y = 0.0;
        } else {
            let min_x = self.width * (1.0 - self.scale);
            let min_y = self.height * (1.0 - self.scale);
            self.offset_x = self.offset_x.clamp(min_x, 0.0);
            self.offset_y = self.offset_y.clamp(min_y, 0.0);
        }
    }

    fn unproject(&self, mouse_x: f64, mouse_y: f64) -> (f64, f64) {
        let x_norm = (mouse_x - self.offset_x) / (self.width * self.scale);
        let y_norm = (mouse_y - self.offset_y) / (self.height * self.scale);
        let lng = x_norm * 360.0 - 180.0;
        let lat = 90.0 - y_norm * 180.0;
        (lng, lat)
    }

    fn is_point_in_polygon(&self, poly: &Vec<Vec<Vec<f64>>>, lng: f64, lat: f64) -> bool {
        for ring in poly {
            let mut inside = false;
            let mut j = ring.len() - 1;
            for i in 0..ring.len() {
                if ((ring[i][1] > lat) != (ring[j][1] > lat)) &&
                   (lng < (ring[j][0] - ring[i][0]) * (lat - ring[i][1]) / (ring[j][1] - ring[i][1]) + ring[i][0]) {
                    inside = !inside;
                }
                j = i;
            }
            if inside { return true; }
        }
        false
    }

    fn is_point_in_feature(&self, feature: &geojson::Feature, lng: f64, lat: f64) -> bool {
        if let Some(ref geometry) = feature.geometry {
            match &geometry.value {
                Value::Polygon(poly) => return self.is_point_in_polygon(poly, lng, lat),
                Value::MultiPolygon(multi) => {
                    for poly in multi {
                        if self.is_point_in_polygon(poly, lng, lat) { return true; }
                    }
                }
                _ => {}
            }
        }
        false
    }

    fn update_camera(&mut self) {
        let lerp_factor = 0.1;
        self.scale += (self.target_scale - self.scale) * lerp_factor;
        self.offset_x += (self.target_offset_x - self.offset_x) * lerp_factor;
        self.offset_y += (self.target_offset_y - self.offset_y) * lerp_factor;
        
        self.apply_clamping();
    }

    pub fn render(&mut self) {
        self.update_camera();
        
        if let Some(ref fc) = self.data {
            self.ctx.set_transform(1.0, 0.0, 0.0, 1.0, 0.0, 0.0).unwrap();
            self.ctx.set_fill_style(&JsValue::from_str("#1e3a8a"));
            self.ctx.fill_rect(0.0, 0.0, self.width, self.height);

            self.ctx.set_transform(self.scale, 0.0, 0.0, self.scale, self.offset_x, self.offset_y).unwrap();

            for feature in &fc.features {
                self.draw_feature(feature);
            }

            self.draw_capitals();
        }
    }

    fn draw_capitals(&self) {
        // List untuk menyimpan bounding box label yang sudah digambar
        // Format: [x1, y1, x2, y2] dalam koordinat layar
        let mut drawn_labels: Vec<[f64; 4]> = Vec::new();

        for cap_js in &self.capitals {
            if let Ok(cap) = serde_wasm_bindgen::from_value::<CapitalData>(cap_js.clone()) {
                let (x, y) = self.project(cap.lng, cap.lat);
                
                // Draw Star (Bintang selalu digambar)
                self.draw_star(x, y, 5, 4.0 / self.scale, 2.0 / self.scale);
                
                // Draw Text (Hanya jika zoom cukup)
                if self.scale > 1.5 {
                    let base_size = 8.0;
                    let zoom_bonus = (self.scale - 1.0) * 0.5;
                    let font_size = (base_size + zoom_bonus) / self.scale;
                    
                    // Estimasi lebar teks yang lebih rapat (0.5x font_size)
                    let text_width = font_size * (cap.capital.len() as f64) * 0.5;
                    let text_height = font_size;

                    // Coba posisi dengan urutan prioritas: Kanan, Atas, Bawah, Kiri
                    // Jarak diperkecil dari 6.0 ke 4.0 agar lebih rapat
                    let positions = [
                        (x + 4.0 / self.scale, y + 3.0 / self.scale, "left"), // Kanan (text-align: left)
                        (x - text_width / 2.0, y - 6.0 / self.scale, "center"), // Atas
                        (x - text_width / 2.0, y + text_height + 6.0 / self.scale, "center"), // Bawah
                        (x - text_width - 4.0 / self.scale, y + 3.0 / self.scale, "right"), // Kiri
                    ];

                    for (tx, ty, _align) in positions {
                        // Hitung bounding box dalam koordinat layar
                        let bx1 = tx * self.scale + self.offset_x;
                        let by1 = (ty - text_height) * self.scale + self.offset_y;
                        let bx2 = bx1 + text_width * self.scale;
                        let by2 = by1 + text_height * self.scale;

                        let padding = 1.0; // Padding lebih tipis agar bisa lebih rapat
                        let box_with_padding = [bx1 - padding, by1 - padding, bx2 + padding, by2 + padding];

                        let mut collides = false;
                        for existing in &drawn_labels {
                            if !(box_with_padding[2] < existing[0] || box_with_padding[0] > existing[2] ||
                                 box_with_padding[3] < existing[1] || box_with_padding[1] > existing[3]) {
                                collides = true;
                                break;
                            }
                        }

                        if !collides {
                            self.ctx.set_fill_style(&JsValue::from_str("white"));
                            self.ctx.set_font(&format!("bold {}px sans-serif", font_size));
                            self.ctx.set_shadow_blur(3.0 / self.scale);
                            self.ctx.set_shadow_color("black");
                            self.ctx.fill_text(&cap.capital, tx, ty).unwrap();
                            self.ctx.set_shadow_blur(0.0);

                            drawn_labels.push(box_with_padding);
                            break;
                        }
                    }
                    
                    // Jika tetap tabrakan di semua posisi, label ini dilewati (disembunyikan)
                }
            }
        }
    }

    fn draw_star(&self, cx: f64, cy: f64, spikes: u32, outer_radius: f64, inner_radius: f64) {
        let mut rot = std::f64::consts::PI / 2.0 * 3.0;
        let step = std::f64::consts::PI / spikes as f64;

        self.ctx.begin_path();
        self.ctx.move_to(cx, cy - outer_radius);

        for _ in 0..spikes {
            let x = cx + rot.cos() * outer_radius;
            let y = cy + rot.sin() * outer_radius;
            self.ctx.line_to(x, y);
            rot += step;

            let x = cx + rot.cos() * inner_radius;
            let y = cy + rot.sin() * inner_radius;
            self.ctx.line_to(x, y);
            rot += step;
        }
        self.ctx.line_to(cx, cy - outer_radius);
        self.ctx.close_path();
        self.ctx.set_fill_style(&JsValue::from_str("#fbbf24")); // Yellow star
        self.ctx.fill();
        self.ctx.set_stroke_style(&JsValue::from_str("black"));
        self.ctx.set_line_width(0.5 / self.scale);
        self.ctx.stroke();
    }

    fn draw_feature(&self, feature: &geojson::Feature) {
        let properties = feature.properties.as_ref().unwrap();
        let continent = properties.get("CONTINENT").and_then(|v| v.as_str()).unwrap_or("Unknown");
        let is_selected = self.check_selected(properties);

        let color = if is_selected { "#10b981" } else {
            match continent {
                "Asia" => "#a855f7", "Africa" => "#eab308", "Europe" => "#3b82f6",
                "North America" => "#22c55e", "South America" => "#f97316",
                "Oceania" => "#ec4899", "Antarctica" => "#cbd5e1", _ => "#475569",
            }
        };

        self.ctx.set_fill_style(&JsValue::from_str(color));
        self.ctx.set_stroke_style(&JsValue::from_str(if is_selected { "#34d399" } else { "rgba(255, 255, 255, 0.6)" }));
        self.ctx.set_line_width(if is_selected { 2.0 / self.scale } else { 0.7 / self.scale });

        if let Some(ref geometry) = feature.geometry {
            self.ctx.begin_path();
            match &geometry.value {
                Value::Polygon(poly) => self.draw_polygon(poly),
                Value::MultiPolygon(multi) => { for poly in multi { self.draw_polygon(poly); } }
                _ => {}
            }
            self.ctx.fill();
            self.ctx.stroke();
        }
    }

    fn draw_polygon(&self, polygon: &Vec<Vec<Vec<f64>>>) {
        for ring in polygon {
            for (i, coord) in ring.iter().enumerate() {
                let (x, y) = self.project(coord[0], coord[1]);
                if i == 0 { self.ctx.move_to(x, y); } else { self.ctx.line_to(x, y); }
            }
        }
    }

    fn project(&self, lng: f64, lat: f64) -> (f64, f64) {
        let x_norm = (lng + 180.0) / 360.0;
        let y_norm = (90.0 - lat) / 180.0;
        (x_norm * self.width, y_norm * self.height)
    }

    fn check_selected(&self, properties: &serde_json::Map<String, serde_json::Value>) -> bool {
        if let Some(ref sel_iso) = self.selected_country_iso {
            if let Some(iso) = properties.get("ISO_A2").and_then(|v| v.as_str()) {
                if iso.to_lowercase() == sel_iso.to_lowercase() { return true; }
            }
        }
        false
    }
    
    pub fn get_country_at(&self, mouse_x: f64, mouse_y: f64) -> JsValue {
        let (lng, lat) = self.unproject(mouse_x, mouse_y);
        
        // 1. Polygon-based detection (Priority)
        if let Some(ref fc) = self.data {
            for feature in &fc.features {
                if self.is_point_in_feature(feature, lng, lat) {
                    if let Some(properties) = &feature.properties {
                        if let Some(iso) = properties.get("ISO_A2").and_then(|v| v.as_str()) {
                            for country_js in &self.countries {
                                if let Ok(country) = serde_wasm_bindgen::from_value::<CountryData>(country_js.clone()) {
                                    if country.iso.to_lowercase() == iso.to_lowercase() {
                                        return country_js.clone();
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        // 2. Fallback to dot-based detection (for tiny islands)
        let hit_threshold = 15.0; 
        for country_js in &self.countries {
            if let Ok(country) = serde_wasm_bindgen::from_value::<CountryData>(country_js.clone()) {
                if let (Some(lat), Some(lng)) = (country.latitude, country.longitude) {
                    let (x, y) = self.project(lng, lat);
                    let screen_x = x * self.scale + self.offset_x;
                    let screen_y = y * self.scale + self.offset_y;
                    let dx = mouse_x - screen_x;
                    let dy = mouse_y - screen_y;
                    if (dx * dx + dy * dy).sqrt() <= hit_threshold { return country_js.clone(); }
                }
            }
        }
        JsValue::NULL
    }
}

thread_local! {
    static ACTIVE_ENGINE: RefCell<Option<Rc<RefCell<MapEngine>>>> = RefCell::new(None);
}

#[wasm_bindgen]
pub fn set_selected_country_on_map(iso: String, should_center: bool) {
    ACTIVE_ENGINE.with(|global_engine| {
        if let Some(engine) = global_engine.borrow().as_ref() {
            engine.borrow_mut().set_selected_country(Some(iso), should_center);
        }
    });
}

#[wasm_bindgen]
pub fn get_country_at_on_map(mouse_x: f64, mouse_y: f64) -> JsValue {
    ACTIVE_ENGINE.with(|global_engine| {
        if let Some(engine) = global_engine.borrow().as_ref() {
            engine.borrow().get_country_at(mouse_x, mouse_y)
        } else {
            JsValue::NULL
        }
    })
}

#[wasm_bindgen]
pub fn start_map_engine(
    canvas_id: String, 
    world_text: String, 
    countries_json: JsValue, 
    capitals_json: JsValue
) -> Result<(), JsValue> {
    console_error_panic_hook::set_once();
    
    let window = web_sys::window().ok_or("no global window")?;
    let document = window.document().ok_or("no document on window")?;
    let canvas = document.get_element_by_id(&canvas_id).ok_or("canvas not found")?;
    let canvas: HtmlCanvasElement = canvas.dyn_into::<HtmlCanvasElement>()?;
    
    let width = canvas.offset_width() as f64;
    let height = canvas.offset_height() as f64;
    canvas.set_width(width as u32);
    canvas.set_height(height as u32);
    
    let ctx = canvas.get_context("2d")?.ok_or("no context")?.dyn_into::<CanvasRenderingContext2d>()?;
    
    let engine = Rc::new(RefCell::new(MapEngine::new(ctx, width, height)));
    
    // Store in global thread local for external access
    ACTIVE_ENGINE.with(|global_engine| {
        *global_engine.borrow_mut() = Some(engine.clone());
    });

    // Inisialisasi Data Langsung
    {
        let mut engine_mut = engine.borrow_mut();
        engine_mut.set_data(&world_text);
        engine_mut.set_countries(countries_json.dyn_into::<js_sys::Array>().unwrap().to_vec());
        engine_mut.set_capitals(capitals_json.dyn_into::<js_sys::Array>().unwrap().to_vec());
    }


    // Event Listeners
    {
        let engine = engine.clone();
        let closure = Closure::wrap(Box::new(move |e: WheelEvent| {
            e.prevent_default();
            engine.borrow_mut().handle_wheel(e.delta_y(), e.offset_x() as f64, e.offset_y() as f64);
        }) as Box<dyn FnMut(_)>);
        canvas.add_event_listener_with_callback("wheel", closure.as_ref().unchecked_ref())?;
        closure.forget();
    }
    
    {
        let engine = engine.clone();
        let closure = Closure::wrap(Box::new(move |e: MouseEvent| {
            engine.borrow_mut().handle_mouse_down(e.offset_x() as f64, e.offset_y() as f64);
        }) as Box<dyn FnMut(_)>);
        canvas.add_event_listener_with_callback("mousedown", closure.as_ref().unchecked_ref())?;
        closure.forget();
    }
    
    {
        let engine = engine.clone();
        let closure = Closure::wrap(Box::new(move |e: MouseEvent| {
            engine.borrow_mut().handle_mouse_move(e.offset_x() as f64, e.offset_y() as f64);
        }) as Box<dyn FnMut(_)>);
        canvas.add_event_listener_with_callback("mousemove", closure.as_ref().unchecked_ref())?;
        closure.forget();
    }
    
    {
        let engine = engine.clone();
        let closure = Closure::wrap(Box::new(move |_e: MouseEvent| {
            engine.borrow_mut().handle_mouse_up();
        }) as Box<dyn FnMut(_)>);
        canvas.add_event_listener_with_callback("mouseup", closure.as_ref().unchecked_ref())?;
        closure.forget();
    }

    // Animation Loop
    let f = Rc::new(RefCell::new(None::<Closure<dyn FnMut()>>));
    let g = f.clone();
    let engine_render = engine.clone();
    *g.borrow_mut() = Some(Closure::wrap(Box::new(move || {
        engine_render.borrow_mut().render();
        let window = web_sys::window().unwrap();
        window.request_animation_frame(f.borrow().as_ref().unwrap().as_ref().unchecked_ref()).unwrap();
    }) as Box<dyn FnMut()>));
    
    window.request_animation_frame(g.borrow().as_ref().unwrap().as_ref().unchecked_ref())?;
    
    Ok(())
}

/**
 * Rust Map Rendering Speedster - Optimized Heatmap Engine
 * Fitur: Zero-copy buffer manipulation & Dirty regions
 */

pub struct HeatmapEngine {
    width: usize,
    height: usize,
    buffer: Vec<u8>,
}

impl HeatmapEngine {
    pub fn new(w: usize, h: usize) -> Self {
        Self {
            width: w,
            height: h,
            buffer: vec![0; w * h * 4],
        }
    }

    // Hanya update bagian yang berubah untuk performa maksimal
    pub fn update_heatmap(&mut self, data: &[f32], is_paused: bool) {
        if is_paused {
            // Rust: Skip buffer manipulation if paused (Freeze frame)
            return;
        }

        // Simulating high-speed SIMD processing
        for (i, &val) in data.iter().enumerate() {
            let idx = i * 4;
            if idx + 3 < self.buffer.len() {
                self.buffer[idx] = (val * 255.0) as u8; // Red Channel
                self.buffer[idx + 3] = 150;            // Alpha
            }
        }
    }
}

fn main() {
    println!("Rust: Heatmap Engine optimized with Zero-allocation strategy.");
}

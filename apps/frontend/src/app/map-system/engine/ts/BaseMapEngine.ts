import { Projector } from './Projector';

export interface GeoJsonFeature {
  type: string;
  properties: any;
  geometry: {
    type: string;
    coordinates: any;
  };
}

export interface GeoJsonData {
  type: string;
  features: GeoJsonFeature[];
}

export const CONTINENT_COLORS: Record<string, string> = {
  'Asia': '#a855f7',          // Purple
  'Africa': '#eab308',         // Yellow
  'Europe': '#3b82f6',         // Blue
  'North America': '#22c55e',  // Green
  'South America': '#f97316',  // Orange
  'Oceania': '#ec4899',        // Pink
  'Antarctica': '#cbd5e1',     // Greyish Blue
  'Seven seas (open ocean)': '#1e40af'
};

export abstract class BaseMapEngine {
  protected ctx: CanvasRenderingContext2D;
  protected projector: Projector;
  protected data: GeoJsonData | null = null;
  protected countries: any[] = [];
  protected selectedCountryName: string | null = null;
  protected selectedCountryCode: string | null = null;

  // Transformation State
  protected scale: number = 1;
  protected offsetX: number = 0;
  protected offsetY: number = 0;
  protected relations: any[] = []; // ID-based relations
  protected width: number;
  protected height: number;

  constructor(ctx: CanvasRenderingContext2D, width: number, height: number) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.projector = new Projector(width, height);
  }

  public setData(data: GeoJsonData) {
    this.data = data;
  }

  public setCountries(countries: any[]) {
    this.countries = countries;
    this.render();
  }

  public setRelations(relations: any[]) {
    this.relations = relations;
    this.render();
  }

  public setSelectedCountry(name: string | null, code: string | null = null) {
    this.selectedCountryName = name;
    this.selectedCountryCode = code;
  }

  public setTransform(scale: number, offsetX: number, offsetY: number) {
    this.scale = scale;
    this.offsetX = offsetX;
    this.offsetY = offsetY;
    this.render();
  }

  public render() {
    if (!this.data) return;

    // 1. Reset transform to draw background (Global)
    this.ctx.setTransform(1, 0, 0, 1, 0, 0);
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

    // 2. Clear background with solid color
    this.ctx.fillStyle = '#070b14'; // Universal dark theme
    this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

    // 3. Draw Water/Environment (Optional: Subclasses can override this)
    this.drawBackground();

    // 4. Apply Global Transform for Map Elements
    this.ctx.setTransform(this.scale, 0, 0, this.scale, this.offsetX, this.offsetY);

    // 5. Draw Country Polygons
    for (const feature of this.data.features) {
      this.drawFeature(feature);
    }

    // 6. Draw Specialized Overlays (Implemented by sub-classes)
    this.drawOverlays();
  }

  // Hook for subclasses to draw custom backgrounds (like ocean textures)
  protected abstract drawBackground(): void;

  // Hook for subclasses to draw custom feature styles
  protected abstract drawFeature(feature: GeoJsonFeature): void;

  // Hook for subclasses to draw things on top of land (Capitals, Routes, Icons)
  protected abstract drawOverlays(): void;

  protected drawPolygon(polygon: number[][][]) {
    const rings = polygon;
    for (let i = 0; i < rings.length; i++) {
        const ring = rings[i];
        if (ring.length === 0) continue;

        for (let j = 0; j < ring.length; j++) {
            const [lng, lat] = ring[j];
            const { x, y } = this.projector.project(lng, lat);
            if (j === 0) this.ctx.moveTo(x, y);
            else this.ctx.lineTo(x, y);
        }
    }
  }

  protected drawStar(cx: number, cy: number, spikes: number, outerRadius: number, innerRadius: number) {
    let rot = Math.PI / 2 * 3;
    let x = cx, y = cy;
    const step = Math.PI / spikes;
    this.ctx.beginPath();
    this.ctx.moveTo(cx, cy - outerRadius);
    for (let i = 0; i < spikes; i++) {
        x = cx + Math.cos(rot) * outerRadius; y = cy + Math.sin(rot) * outerRadius;
        this.ctx.lineTo(x, y); rot += step;
        x = cx + Math.cos(rot) * innerRadius; y = cy + Math.sin(rot) * innerRadius;
        this.ctx.lineTo(x, y); rot += step;
    }
    this.ctx.lineTo(cx, cy - outerRadius); this.ctx.closePath();
  }

  protected drawMicrostatePulse(feature: GeoJsonFeature) {
    const labelX = feature.properties.LABEL_X, labelY = feature.properties.LABEL_Y;
    if (labelX === undefined || labelY === undefined) return;
    const { x, y } = this.projector.project(labelX, labelY);
    this.ctx.beginPath();
    this.ctx.arc(x, y, 2 / this.scale, 0, Math.PI * 2);
    this.ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
    this.ctx.fill();
  }

  public getCountryAt(mouseX: number, mouseY: number): any | null {
    if (!this.countries || this.countries.length === 0) return null;
    const hitThreshold = 10;

    for (const country of this.countries) {
        if (!country.latitude || !country.longitude) continue;
        const { x, y } = this.projector.project(Number(country.longitude), Number(country.latitude));
        const screenX = x * this.scale + this.offsetX;
        const screenY = y * this.scale + this.offsetY;
        const dx = mouseX - screenX;
        const dy = mouseY - screenY;
        if (Math.sqrt(dx * dx + dy * dy) <= hitThreshold) return country;
    }
    return null;
  }

  public resize(width: number, height: number) {
    this.projector.updateDimensions(width, height);
    this.render();
  }
}

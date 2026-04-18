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

const CONTINENT_COLORS: Record<string, string> = {
  'Asia': '#a855f7',          // Purple
  'Africa': '#eab308',         // Yellow
  'Europe': '#3b82f6',         // Blue
  'North America': '#22c55e',  // Green
  'South America': '#f97316',  // Orange
  'Oceania': '#ec4899',        // Pink
  'Antarctica': '#cbd5e1',     // Greyish Blue
  'Seven seas (open ocean)': '#1e40af'
};

export class CanvasEngine {
  private ctx: CanvasRenderingContext2D;
  private projector: Projector;
  private data: GeoJsonData | null = null;
  
  // Transformation State
  private scale: number = 1;
  private offsetX: number = 0;
  private offsetY: number = 0;

  constructor(ctx: CanvasRenderingContext2D, width: number, height: number) {
    this.ctx = ctx;
    this.projector = new Projector(width, height);
  }

  public setData(data: GeoJsonData) {
    this.data = data;
  }

  public setTransform(scale: number, offsetX: number, offsetY: number) {
    this.scale = scale;
    this.offsetX = offsetX;
    this.offsetY = offsetY;
    this.render();
  }

  public render() {
    if (!this.data) return;

    // Reset transform to draw background
    this.ctx.setTransform(1, 0, 0, 1, 0, 0);
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    
    // Draw Ocean Background - Tactical Blue
    this.ctx.fillStyle = '#1e3a8a'; 
    this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

    // Apply Global Transform
    this.ctx.setTransform(this.scale, 0, 0, this.scale, this.offsetX, this.offsetY);

    for (const feature of this.data.features) {
      this.drawFeature(feature);
    }
  }

  private drawFeature(feature: GeoJsonFeature) {
    const continent = feature.properties.CONTINENT || 'Unknown';
    const name = feature.properties.NAME || 'Unknown';
    const color = CONTINENT_COLORS[continent] || '#475569';

    this.ctx.beginPath();
    this.ctx.fillStyle = color;
    // Consistent borders: Standard thin line across all nations
    this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)'; 
    
    // Check if it's a microstate for pulse logic
    const isTiny = feature.properties.TINY > 0 || feature.properties.LABELRANK > 5;
    
    // Use a fixed width relative to scale but with a floor to keep it thin but visible
    this.ctx.lineWidth = Math.max(0.7 / this.scale, 0.4);

    const { type, coordinates } = feature.geometry;

    if (type === 'Polygon') {
      this.drawPolygon(coordinates);
    } else if (type === 'MultiPolygon') {
      for (const polygon of coordinates) {
        this.drawPolygon(polygon);
      }
    }

    this.ctx.fill();
    this.ctx.stroke();

    // Extra "Perfection" Step: 
    // If it's a tiny state (like Singapore/Vatican), draw a small highlight glow
    // so it doesn't disappear into the ocean pixel cluster.
    if (isTiny && this.scale < 3) {
        this.drawMicrostatePulse(feature);
    }
  }

  private drawMicrostatePulse(feature: GeoJsonFeature) {
    // Get approximate center from properties if available, or just use first coordinate
    const labelX = feature.properties.LABEL_X;
    const labelY = feature.properties.LABEL_Y;
    if (labelX === undefined || labelY === undefined) return;

    const { x, y } = this.projector.project(labelX, labelY);
    
    this.ctx.beginPath();
    this.ctx.arc(x, y, 2 / this.scale, 0, Math.PI * 2);
    this.ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
    this.ctx.fill();
  }

  private drawPolygon(polygon: number[][][]) {
    const rings = polygon;
    for (let i = 0; i < rings.length; i++) {
        const ring = rings[i];
        if (ring.length === 0) continue;

        // Skip extremely small rings for performance if zoomed out
        // (Perfection: only for very high resolution datasets)
        
        for (let j = 0; j < ring.length; j++) {
            const [lng, lat] = ring[j];
            const { x, y } = this.projector.project(lng, lat);
            
            if (j === 0) {
            this.ctx.moveTo(x, y);
            } else {
            this.ctx.lineTo(x, y);
            }
        }
    }
  }

  public resize(width: number, height: number) {
    this.projector.updateDimensions(width, height);
    this.render();
  }
}

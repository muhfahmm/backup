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
  private countries: any[] = [];
  private selectedCountryName: string | null = null;
  private selectedCountryCode: string | null = null;

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

  public setCountries(countries: any[]) {
    this.countries = countries;
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

    // Draw Capitals - On top of land
    this.drawCapitals();
  }

  private drawFeature(feature: GeoJsonFeature) {
    const continent = feature.properties.CONTINENT || 'Unknown';
    const name = feature.properties.NAME || 'Unknown';
    const nameLong = feature.properties.NAME_LONG || '';

    // Prioritas 1: Pencocokan ISO Code (A2 atau A3) - Paling Akurat
    // Prioritas 2: Pencocokan Nama (ID atau EN) - Backup
    const isSelected = (
      (this.selectedCountryCode && (
        feature.properties.ISO_A3?.toLowerCase() === this.selectedCountryCode.toLowerCase() ||
        feature.properties.ISO_A2?.toLowerCase() === this.selectedCountryCode.toLowerCase() ||
        feature.properties.ADM0_A3?.toLowerCase() === this.selectedCountryCode.toLowerCase()
      )) ||
      (this.selectedCountryName && (
        name.toLowerCase() === this.selectedCountryName.toLowerCase() ||
        nameLong.toLowerCase() === this.selectedCountryName.toLowerCase() ||
        feature.properties.NAME_ID?.toLowerCase() === this.selectedCountryName.toLowerCase()
      ))
    );

    let color = CONTINENT_COLORS[continent] || '#475569';
    let borderColor = 'rgba(255, 255, 255, 0.6)';
    let lineWidth = Math.max(0.7 / this.scale, 0.4);

    if (isSelected) {
      color = '#10b981'; // Emerald-500 Tactical Highlight
      borderColor = '#34d399'; // Brighter Emerald for border
      lineWidth = Math.max(2 / this.scale, 1);
    }

    this.ctx.beginPath();
    this.ctx.fillStyle = color;
    this.ctx.strokeStyle = borderColor;
    this.ctx.lineWidth = lineWidth;

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

    // Check if it's a microstate for pulse logic
    const isTiny = feature.properties.TINY > 0 || feature.properties.LABELRANK > 5;

    if (isTiny && this.scale < 3) {
      this.drawMicrostatePulse(feature);
    }
  }

  private drawCapitals() {
    if (!this.countries || this.countries.length === 0) return;

    this.ctx.save();
    
    // Tactical styling for dots
    this.ctx.shadowBlur = 4 / this.scale;
    this.ctx.shadowColor = 'rgba(0, 0, 0, 0.8)';

    for (const country of this.countries) {
      if (country.latitude === undefined || country.longitude === undefined || country.latitude === null || country.longitude === null) continue;

      // Ensure coordinates are numbers (Postgres NUMERIC can come as strings)
      const lat = Number(country.latitude);
      const lng = Number(country.longitude);

      if (isNaN(lat) || isNaN(lng)) continue;

      const { x, y } = this.projector.project(lng, lat);
      const dotSize = Math.max(2 / this.scale, 0.5);

      // Draw Capital Star Icon
      const outerRadius = Math.max(3.5 / this.scale, 0.8);
      const innerRadius = outerRadius / 2.5;
      this.drawStar(x, y, 5, outerRadius, innerRadius);
      this.ctx.fillStyle = '#22d3ee'; // Tactical Neon Cyan
      this.ctx.fill();

      // Draw Capital Label (Contextual)
      if (this.scale > 4.5 && country.ibukota) {
        this.ctx.font = `bold ${10 / this.scale}px "Cascadia Code", "Fira Code", monospace`;
        this.ctx.fillStyle = '#22d3ee'; // Match dot color
        this.ctx.textAlign = 'center';
        
        // Add subtle text shadow for legibility
        this.ctx.shadowBlur = 2 / this.scale;
        this.ctx.fillText(
          country.ibukota.toUpperCase(), 
          x, 
          y - (6 / this.scale)
        );
      }
    }

    this.ctx.restore();
  }

  private drawStar(cx: number, cy: number, spikes: number, outerRadius: number, innerRadius: number) {
    let rot = Math.PI / 2 * 3;
    let x = cx;
    let y = cy;
    const step = Math.PI / spikes;

    this.ctx.beginPath();
    this.ctx.moveTo(cx, cy - outerRadius);
    
    for (let i = 0; i < spikes; i++) {
      x = cx + Math.cos(rot) * outerRadius;
      y = cy + Math.sin(rot) * outerRadius;
      this.ctx.lineTo(x, y);
      rot += step;

      x = cx + Math.cos(rot) * innerRadius;
      y = cy + Math.sin(rot) * innerRadius;
      this.ctx.lineTo(x, y);
      rot += step;
    }
    
    this.ctx.lineTo(cx, cy - outerRadius);
    this.ctx.closePath();
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

  public getCountryAt(mouseX: number, mouseY: number): any | null {
    if (!this.countries || this.countries.length === 0) return null;

    // We check distance in screen space (pixels)
    // A 10px radius is usually good for mouse interaction
    const hitThreshold = 10;

    for (const country of this.countries) {
      if (country.latitude === undefined || country.longitude === undefined || country.latitude === null || country.longitude === null) continue;

      const lat = Number(country.latitude);
      const lng = Number(country.longitude);
      if (isNaN(lat) || isNaN(lng)) continue;

      const { x, y } = this.projector.project(lng, lat);
      
      // Convert map-space coordinates to screen-space (after scale and offset)
      const screenX = x * this.scale + this.offsetX;
      const screenY = y * this.scale + this.offsetY;

      const dx = mouseX - screenX;
      const dy = mouseY - screenY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance <= hitThreshold) {
        return country;
      }
    }

    return null;
  }

  public resize(width: number, height: number) {
    this.projector.updateDimensions(width, height);
    this.render();
  }
}

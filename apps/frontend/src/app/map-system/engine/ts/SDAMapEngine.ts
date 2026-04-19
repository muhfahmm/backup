import { BaseMapEngine, GeoJsonFeature, CONTINENT_COLORS } from './BaseMapEngine';

export class SDAMapEngine extends BaseMapEngine {
  protected drawBackground(): void {
    // Ocean Background - Tactical Blue (Synced)
    this.ctx.fillStyle = '#1e3a8a';
    this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
  }

  protected drawFeature(feature: GeoJsonFeature): void {
    const continent = feature.properties.CONTINENT || 'Unknown';
    const name = feature.properties.NAME || 'Unknown';
    const nameLong = feature.properties.NAME_LONG || '';

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
      color = '#10b981'; // Emerald-500
      borderColor = '#34d399';
      lineWidth = Math.max(2 / this.scale, 1);
    }

    this.ctx.beginPath();
    this.ctx.fillStyle = color;
    this.ctx.strokeStyle = borderColor;
    this.ctx.lineWidth = lineWidth;

    const { type, coordinates } = feature.geometry;
    if (type === 'Polygon') this.drawPolygon(coordinates);
    else if (type === 'MultiPolygon') {
      for (const polygon of coordinates) this.drawPolygon(polygon);
    }
    this.ctx.fill();
    this.ctx.stroke();
  }

  protected drawOverlays(): void {
    this.drawResourceIcons();
  }

  private drawResourceIcons() {
    if (!this.countries || this.countries.length === 0) return;
    
    this.ctx.save();
    for (const country of this.countries) {
      if (!country.latitude || !country.longitude) continue;
      
      const { x, y } = this.projector.project(Number(country.longitude), Number(country.latitude));
      
      // Draw a "Resource Site" indicator (Tactical Diamond)
      const size = Math.max(4 / this.scale, 1);
      this.ctx.beginPath();
      this.ctx.moveTo(x, y - size);
      this.ctx.lineTo(x + size, y);
      this.ctx.lineTo(x, y + size);
      this.ctx.lineTo(x - size, y);
      this.ctx.closePath();
      
      this.ctx.fillStyle = '#fbbf24'; // Amber resource color
      this.ctx.shadowColor = '#fbbf24';
      this.ctx.shadowBlur = 10 / this.scale;
      this.ctx.fill();
      this.ctx.shadowBlur = 0;
    }
    this.ctx.restore();
  }
}

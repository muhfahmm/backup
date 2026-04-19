import { BaseMapEngine, GeoJsonFeature } from './BaseMapEngine';

export class SDAMapEngine extends BaseMapEngine {
  protected drawBackground(): void {
    // Industrial Dark Background
    this.ctx.fillStyle = '#0f172a';
    this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
  }

  protected drawFeature(feature: GeoJsonFeature): void {
    const isSelected = (
      (this.selectedCountryCode && feature.properties.ISO_A3?.toLowerCase() === this.selectedCountryCode.toLowerCase()) ||
      (this.selectedCountryName && feature.properties.NAME?.toLowerCase() === this.selectedCountryName.toLowerCase())
    );

    // Resource-specific coloring (Desaturated unless selected)
    this.ctx.beginPath();
    this.ctx.fillStyle = isSelected ? '#10b981' : 'rgba(71, 85, 105, 0.3)';
    this.ctx.strokeStyle = isSelected ? '#34d399' : 'rgba(255, 255, 255, 0.1)';
    this.ctx.lineWidth = 1 / this.scale;

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

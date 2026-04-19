import { BaseMapEngine, GeoJsonFeature, CONTINENT_COLORS } from './BaseMapEngine';

export class MainMapEngine extends BaseMapEngine {
  protected drawBackground(): void {
    // Ocean Background - Tactical Blue
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

    // Pulse microstates
    const isTiny = feature.properties.TINY > 0 || feature.properties.LABELRANK > 5;
    if (isTiny && this.scale < 3) this.drawMicrostatePulse(feature);
  }

  protected drawOverlays(): void {
    this.drawCapitals();
  }

  private drawCapitals() {
    if (!this.countries || this.countries.length === 0) return;
    this.ctx.save();
    this.ctx.shadowBlur = 4 / this.scale;
    this.ctx.shadowColor = 'rgba(0, 0, 0, 0.8)';

    for (const country of this.countries) {
      if (!country.latitude || !country.longitude) continue;
      const { x, y } = this.projector.project(Number(country.longitude), Number(country.latitude));

      // Draw Capital Star
      const outerRadius = Math.max(3.5 / this.scale, 0.8);
      const innerRadius = outerRadius / 2.5;
      this.drawStar(x, y, 5, outerRadius, innerRadius);
      this.ctx.fillStyle = '#22d3ee';
      this.ctx.fill();

      // Labels at high zoom
      if (this.scale > 4.5 && country.ibukota) {
        this.ctx.font = `bold ${10 / this.scale}px "Cascadia Code", monospace`;
        this.ctx.fillStyle = '#22d3ee';
        this.ctx.textAlign = 'center';
        this.ctx.shadowBlur = 2 / this.scale;
        this.ctx.fillText(country.ibukota.toUpperCase(), x, y - (6 / this.scale));
      }
    }
    this.ctx.restore();
  }
}

import { BaseMapEngine, GeoJsonFeature, CONTINENT_COLORS } from './BaseMapEngine';

export class TradeMapEngine extends BaseMapEngine {
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
    this.drawTradeRoutes();
  }

  private drawTradeRoutes() {
    if (!this.countries || this.countries.length < 2) return;
    
    // Logic for trade routes (Visual only for now)
    // Connecting all major countries to the selected country
    if (!this.selectedCountryName) return;
    
    const target = this.countries.find(c => 
      c.nama_negara.toLowerCase() === this.selectedCountryName?.toLowerCase()
    );
    if (!target) return;

    const { x: tx, y: ty } = this.projector.project(Number(target.longitude), Number(target.latitude));

    this.ctx.save();
    this.ctx.lineWidth = 1 / this.scale;
    
    for (const country of this.countries) {
      if (country.nama_negara === target.nama_negara) continue;
      if (!country.latitude || !country.longitude) continue;

      const { x, y } = this.projector.project(Number(country.longitude), Number(country.latitude));
      
      // Draw curved line (Arc)
      this.ctx.beginPath();
      this.ctx.moveTo(x, y);
      const cpX = (x + tx) / 2;
      const cpY = (y + ty) / 2 - 100 / this.scale; // Arc height
      this.ctx.quadraticCurveTo(cpX, cpY, tx, ty);
      
      const gradient = this.ctx.createLinearGradient(x, y, tx, ty);
      gradient.addColorStop(0, 'rgba(56, 189, 248, 0.1)');
      gradient.addColorStop(1, 'rgba(56, 189, 248, 0.5)');
      
      this.ctx.strokeStyle = gradient;
      this.ctx.stroke();
      
      // Moving Dot Animation Logic would go here (requires animation frame)
    }
    this.ctx.restore();
  }
}

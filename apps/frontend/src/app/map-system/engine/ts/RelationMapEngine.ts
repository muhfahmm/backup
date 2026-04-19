import { BaseMapEngine, GeoJsonFeature, CONTINENT_COLORS } from './BaseMapEngine';

export class RelationMapEngine extends BaseMapEngine {
  protected drawBackground(): void {
    // Ocean Background - Tactical Blue (Synced)
    this.ctx.fillStyle = '#1e3a8a';
    this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
  }

  protected drawFeature(feature: GeoJsonFeature): void {
    const name = feature.properties.NAME || 'Unknown';
    const nameLong = feature.properties.NAME_LONG || '';
    const continent = feature.properties.CONTINENT || 'Unknown';

    const isSelected = (
      (this.selectedCountryCode && (
        feature.properties.ISO_A3?.toLowerCase() === this.selectedCountryCode.toLowerCase() ||
        feature.properties.ISO_A2?.toLowerCase() === this.selectedCountryCode.toLowerCase() ||
        feature.properties.ADM0_A3?.toLowerCase() === this.selectedCountryCode.toLowerCase()
      )) ||
      (this.selectedCountryName && (
        name.toLowerCase() === this.selectedCountryName.toLowerCase() ||
        nameLong.toLowerCase() === this.selectedCountryName.toLowerCase()
      ))
    );

    let color = CONTINENT_COLORS[continent] || '#475569';
    let borderColor = 'rgba(255, 255, 255, 0.4)';
    let lineWidth = Math.max(0.6 / this.scale, 0.3);

    // Dynamic Coloring based on Relations
    if (!isSelected && this.relations.length > 0) {
      // Robust matching: Priority Exhaustive ISO Codes > Indonesian/English Names
      const countryDoc = this.countries.find(c => {
        const dbCode = c.kode_negara?.toUpperCase();
        const dbName = c.nama_negara?.toLowerCase();
        
        // Extract all possible codes from feature properties
        const geoCodes = [
          feature.properties.ISO_A3,
          feature.properties.ADM0_A3,
          feature.properties.ISO_A3_EH,
          feature.properties.BRK_A3,
          feature.properties.GU_A3,
          feature.properties.SOV_A3,
          feature.properties.WB_A3
        ].filter(v => v && v !== "-99" && v !== -99).map(v => v.toString().toUpperCase());

        const geoNames = [
          feature.properties.NAME,
          feature.properties.NAME_LONG,
          feature.properties.NAME_ID,
          feature.properties.NAME_SORT,
          feature.properties.FORMAL_EN
        ].filter(v => !!v).map(v => v.toLowerCase());

        return (
          (dbCode && geoCodes.includes(dbCode)) ||
          (dbName && geoNames.includes(dbName))
        );
      });

      if (countryDoc) {
        const rel = this.relations.find(r => Number(r.country_id_target) === Number(countryDoc.id));
        if (rel) {
          const score = rel.relation_score;
          if (score >= 1 && score <= 39) color = '#ef4444';      // Red
          else if (score >= 40 && score <= 69) color = '#eab308'; // Yellow
          else if (score >= 70 && score <= 80) color = '#4ade80'; // Bright Green
          else if (score >= 81 && score <= 100) color = '#15803d'; // Deep Green
        }
      }
    }

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
    this.drawDiplomaticRelations();
  }

  private drawDiplomaticRelations() {
    // UI logic for diplomatic arcs could be added here
  }
}

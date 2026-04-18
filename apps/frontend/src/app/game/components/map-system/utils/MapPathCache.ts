/**
 * MapPathCache Utility
 * 
 * Provides high-performance GeoJSON path caching for 2D Canvas rendering.
 * Converts GeoJSON features into Path2D objects once and caches them for subsequent frames.
 */

export interface MapPathItem {
  name: string;
  path: Path2D;
}

class MapPathCacheService {
  private cache: Map<string, MapPathItem[]> = new Map();

  /**
   * Generates or retrieves cached paths for GeoJSON data
   */
  getPaths(geoData: any, project: (lon: number, lat: number) => { x: number, y: number }): MapPathItem[] {
    if (!geoData || !geoData.features) return [];

    const cacheKey = JSON.stringify(geoData.features.length); // Simple key based on count
    
    if (this.cache.has(cacheKey)) {
      return this.cache.get(cacheKey)!;
    }

    const newPaths: MapPathItem[] = geoData.features.map((feature: any) => {
      const path = new Path2D();
      const geometry = feature.geometry;
      const name = feature.properties.name || feature.properties.NAME || "Unknown";

      if (geometry.type === 'Polygon') {
        const coords = geometry.coordinates;
        this.renderPolygon(path, coords, project);
      } else if (geometry.type === 'MultiPolygon') {
        const coords = geometry.coordinates;
        coords.forEach((polygon: any) => {
          this.renderPolygon(path, polygon, project);
        });
      }

      return { name, path };
    });

    this.cache.set(cacheKey, newPaths);
    return newPaths;
  }

  private renderPolygon(path: Path2D, coordinates: any[], project: (lon: number, lat: number) => { x: number, y: number }) {
    coordinates.forEach((ring: any[]) => {
      ring.forEach((coord, index) => {
        const { x, y } = project(coord[0], coord[1]);
        if (index === 0) {
          path.moveTo(x, y);
        } else {
          path.lineTo(x, y);
        }
      });
      path.closePath();
    });
  }

  clear() {
    this.cache.clear();
  }
}

export const mapPathCache = new MapPathCacheService();

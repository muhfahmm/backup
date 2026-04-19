export class Projector {
  private width: number;
  private height: number;
  private padding: number;

  constructor(width: number, height: number, padding: number = 0) {
    this.width = width;
    this.height = height;
    this.padding = padding;
  }

  /**
   * Projects Lat/Long to Canvas Coordinates (X, Y)
   * Using Equirectangular projection
   */
  public project(lng: number, lat: number): { x: number; y: number } {
    // Range: Lng [-180, 180], Lat [-90, 90]
    // Map to [padding, width - padding] and [padding, height - padding]
    
    // Normalize to 0-1
    const xNorm = (lng + 180) / 360;
    const yNorm = (90 - lat) / 180; // Invert Y because canvas Y grows downwards

    const x = xNorm * (this.width - 2 * this.padding) + this.padding;
    const y = yNorm * (this.height - 2 * this.padding) + this.padding;

    return { x, y };
  }

  public updateDimensions(width: number, height: number) {
    this.width = width;
    this.height = height;
  }
}

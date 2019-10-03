export class MapBase {
  SM: HTMLImageElement;
  cols: number;
  rows: number;
  tsize: number;
  tiles: Array<any>;
  
  constructor() {
    this.cols = 0;
    this.rows = 0;
    this.tsize = 0;
    this.tiles = null;
  }

  /**
   * Gets the tile value located by the column and row (x,y) coordinates.
   * This is trivial with a 2D array, but this method allows us to use a 1D
   * array instead.
   *
   * @param {integer} x   The x-axis position of the requested tile.
   * @param {integer} y   The y-axis position of the requested tile.
   */
  getTile(x: number, y: number): number {
    if (
      this.cols === 0
      || this.rows === 0
      || this.tsize === 0
    ) {
      throw new Error("Map size needs to have proper dimensions.");
    }

    return this.tiles[y * this.cols + x];
  }
}
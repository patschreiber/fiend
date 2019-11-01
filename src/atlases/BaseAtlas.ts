export abstract class BaseAtlas {

  /**
   * The tile map image to be used.
   */
  protected tileMapImg: HTMLImageElement;

  /**
   * The number of grid columns.
   */
  protected gridCols: number;

  /**
   * The number of grid rows.
   */
  protected gridRows: number;
  protected layers: Array<any>;

  /**
   * The total sizw of the map's grid.
   */
  protected tsize: number;

  /**
   * The array of elements used as the map's grid
   */
  protected mapGrid: Array<number>;

  /**
   * How large each grid element is, in pixels. This corresponds to how large
   * a grid element is in it's asset file. The [[Renderer]] will handle
   * scaling/manipulation.
   */
  public abstract gridElemPixelSize: number;

  /**
   * Gets the tile value located by the column and row (x,y) coordinates.
   * This is trivial with a 2D array, but this method allows us to use a 1D
   * array instead.
   *
   * @param x The x-axis position of the requested tile.
   * @param y The y-axis position of the requested tile.
   */
  public getTile(x: number, y: number): number {
    if (this.gridCols === 0|| this.gridRows === 0) {
      throw new Error("Map size needs to have proper dimensions.");
    }

    return this.mapGrid[y * this.gridCols + x];
  }

  /**
   * Returns the tile map image assiciated with this atlas.
   */
  public getTileMapImg(): HTMLImageElement {
    return this.tileMapImg;
  }

  /**
   * Returns how many elements are in one row of the grid.
   *
   * @return The number of columns in the grid.
   */
  public getGridWidth(): number {
    return this.gridCols;
  }

  /**
   * Returns how many rows are in the grid. Rows stacked on top of one another
   * produce a height.
   *
   * @return The number of rows in the grid.
   */
  public getGridHeight(): number {
    return this.gridRows;
  }

}

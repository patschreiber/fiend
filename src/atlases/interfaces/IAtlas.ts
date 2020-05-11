/**
 * The IAtlas interface. All Atlases should implement this interface either
 * directly or through inheritance.
 */
export interface IAtlas {

  /**
   * How large each grid element is, in pixels. This corresponds to how large
   * a grid element is in it's asset file. The [[Renderer]] will handle
   * scaling/manipulation.
   */
  gridElemPixelSize: number;

  /**
   * Gets the tile value located by the column and row (x,y) coordinates.
   * This is trivial with a 2D array, but this method allows us to use a 1D
   * array instead.
   *
   * @param x The x-axis position of the requested tile.
   * @param y The y-axis position of the requested tile.
   */
  getTile(x: number, y: number): number;

  /**
   * Accessor for the tile map image assiciated with this atlas.
   */
  getTileMapImg(): HTMLImageElement;

  /**
   * Accessor for gridCols. How many elements are in one row of the grid.
   */
  getGridWidth(): number;

  /**
   * Accessor for gridRows. How many rows are in the grid. Rows stacked on top
   * of one another produce a height.
   */
  getGridHeight(): number;

}

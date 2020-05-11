import { IAtlas } from './interfaces/IAtlas';

/**
 * The BaseAtlas class.
 * @abstract
 * @implements [[IAtlas]]
 */
export abstract class BaseAtlas implements IAtlas {

  /**
   * How large each grid element is, in pixels. This corresponds to how large
   * a grid element is in it's asset file. The [[Renderer]] will handle
   * scaling/manipulation.
   */
  public gridElemPixelSize: number;

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

  /**
   * The layers of the atlas.
   */
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

  public getGridWidth(): number {
    return this.gridCols;
  }

  public getGridHeight(): number {
    return this.gridRows;
  }

}

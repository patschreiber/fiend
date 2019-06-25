import { MapBase } from "../atlases/MapBase";

export class Renderer {

  EMPTY_TILE: number;
  ctx: CanvasRenderingContext2D;
  pixels: number;
  scale: number;

  constructor(context) {
    /**
     * The empty tile value. If this value is set for a position in a map's 
     * array, it will not be rendered. 
     * 
     * @var {integer} 
     */
    this.EMPTY_TILE = 0;

    /**
     * The canvas context.
     * 
     * @var {CanvasRenderingContext2D}
     */
    this.ctx = context;

    /**
     * Multiplier for x,y position to pixels. What size the tiles for the game
     * will be rendered at. Always use a power of 2 so the scaling prevents
     * blurring.
     * 
     * @var {integer}
     */
    this.pixels = 32;

    /**
     * The scale at which the tile will be rendered. 1 = 1x scaling, 2 = 2x 
     * scaling, etc.
     * 
     * @var {integer}
     */
    this.scale = 1;
  }

  draw() {
    // Clear the screen
    window.FG.ctx.clearRect(
      0, 
      0, 
      window.FG.canvas.width, 
      window.FG.canvas.height
    );
    
    for (let i=0; i<window.FG.gameObjectCount; i++) {
      window.FG.gameObjects[i].draw();
    }
  }

  /**
   * Renders a map according to the coordinates given in the map's file by
   * translating the coordinates to a spritesheet. 
   * 
   * If a tile is 32x32 pixels, the 1st tile will start at (0,0) on 
   * the spritesheet, the 2nd tile will start at (32,0), the 34d at (64,0) and 
   * so on.
   * 
   * +---+---+---+---+
   * | 1 | 2 | 3 | 4 |
   * +---+---+---+---+
   * | 5 | 6 | 7 | 8 |
   * +---+---+---+---+
   * 
   * 'source x' and 'source y' will get the correct coords in the image file.
   * So for our first tile, '1', drawImage will grab the subimage at (32,0).
   * drawImage would get the subimage at (64,32) for tile '7'.
   * 
   * TODO  https://hashrocket.com/blog/posts/using-tiled-and-canvas-to-render-game-screens
   *
   * @param {Object} map  The map object that extends MapBase.
   */
  drawTileMap(map: MapBase): void {
    for (let x=0; x<map.cols; x++) {
      for (let y=0; y<map.rows; y++) {
        let tile = map.getTile(x, y);
        console.log('tile :', tile);

        // Let's skip rendering empty tiles.
        if (tile !== this.EMPTY_TILE) { 
          this.ctx.drawImage(
            // Image Source
            map.SM, 
            // Source x (See example in comment block)
            ((tile - 1) % map.cols) * this.pixels, 
            // Source y (See example in comment block)
            Math.floor(((tile - 1) / map.rows)) * this.pixels,  
            // Source width
            this.pixels, 
            // Source height
            this.pixels, 
            // Target x
            x * (this.pixels * this.scale), 
            // Target y
            y * (this.pixels * this.scale),
            // Target width 
            this.pixels * this.scale,
             // Target height
            this.pixels * this.scale,
          );
        }
      }
    }
  }
}

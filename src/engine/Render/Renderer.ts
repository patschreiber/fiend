// TODO: Remove all this scene-specific shit out of here. Ex. EMPTY_TILE.

import { OverworldAtlas } from "../../atlases/OverworldAtlas";
import { BaseAtlas } from "../../atlases/BaseAtlas";
import { SceneManager } from '../Scene';

export class Renderer {
  // TODO: Add object culling to not render items which can't be seen
  // TODO: This class probably needs to be rewritten/refactored

  EMPTY_TILE: number;
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  pixels: number;
  scale: number;

  SceneManager: SceneManager;

  /**
   * TODO: Change this to be the scene. Recreate the Renderer when a new scene
   * is loaded. Edit: Maybe keep the renderer independent of the Scene.
   */
  protected _currentMap: BaseAtlas;

  constructor(canvas: HTMLCanvasElement) {

    this.canvas = canvas;

    /**
     * The canvas context.
     *
     * @var {CanvasRenderingContext2D}
     */
     this.ctx = this.canvas.getContext('2d');

    /**
     * Prevent anti-aliasing in the event a tile gets scaled.
     *
     * @property {CanvasRenderingContext2D.imageSmoothingEnabled}
     */
     this.ctx.imageSmoothingEnabled = false;

    /**
     * The empty tile value. If this value is set for a position in a map's
     * array, it will not be rendered.
     * TODO: Move this to the Scene.
     *
     * @var {integer}
     */
    this.EMPTY_TILE = 0;

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

    this._currentMap = new OverworldAtlas();
  }

  /**
   * Draws every [[GameObject]] currently active in the scene.
   *
   * @param delta The time difference between frames. Provided by the game's
   * main game loop.
   * @see FiendGame.main()
   * //TODO: Pass in a dumb list of GameObjects to be rendered. Render shouldn't know about Scenes.
   * // https://gamedev.stackexchange.com/questions/153879/scene-components-and-renderer
   */
  public draw(SM: SceneManager): void {

    // Clear the screen on every frame so our entities don't have trails.
    // TODO: Internet says clearing the screen on every draw might be a bad idea.
    this._clrScreen();

    // Draws the Scene's background.
    this.drawTileMap(SM.currentScene.tileMap);

    // Iterate through the scene's gameObjects and render them.
    // TODO: Make this use a hasComponent() function for readability.
    for (let gameObject of SM.currentScene.activeGameObjects) {
      let goid = gameObject.getId();
      let renComp = SM.ComponentManager
        .getComponent("RenderComponent", goid);
      let posComp = SM.ComponentManager
        .getComponent("PositionComponent", goid);

      if (
        (renComp !== undefined && renComp !== null)
        && (posComp !== undefined && posComp !== null)
      ) {
        renComp.draw(this.ctx, posComp.worldPosition);
      }
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
  drawTileMap(map: BaseAtlas): void {
    let mapWidth = map.getGridWidth();
    let mapHeight = map.getGridHeight();

    for (let x=0; x<mapWidth; x++) {
      for (let y=0; y<mapHeight; y++) {
        let tile = map.getTile(x, y);

        // Let's skip rendering empty tiles.
        if (tile !== this.EMPTY_TILE) {
          this.ctx.drawImage(
            // Image Source
            map.getTileMapImg(),
            // Source x (See example in comment block)
            ((tile - 1) % mapWidth) * this.pixels,
            // Source y (See example in comment block)
            Math.floor(((tile - 1) / mapHeight)) * this.pixels,
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

  /**
   * Clears the game screen.
   * TODO: We probably don't want to clear and redraw items outside of view.
   */
  private _clrScreen(): void {
    this.ctx.clearRect(
      0,
      0,
      this.canvas.width,
      this.canvas.height
    );
  }

}

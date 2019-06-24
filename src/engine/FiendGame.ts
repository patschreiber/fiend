import { Enemy } from "../entities/Enemy";

/**
 * The Game superclass. Operations to act upon the main game thread are found
 * here.
 */
export class FiendGame implements FiendGameInterface {

  public canvas: HTMLCanvasElement;
  public ctx: CanvasRenderingContext2D;
  public gameObjectCount: number;
  public gameObjects: Array<Enemy>;
  
  private container: HTMLElement;
  private stopToken: number|null;
  private tickLength: number;
  private lastFrameTime: number;
  private maxEntities: number;

  constructor(gamePaneWidth: number, gamePaneHeight: number) {

    /**
     * 
     */
    this.canvas = this.genCanvas(gamePaneWidth, gamePaneHeight);
    this.container = document.getElementById("fiend-game");
    this.container.insertBefore(this.canvas, this.container.firstChild);
    this.ctx = this.canvas.getContext('2d');

    /**t
     * Prevent anti-aliasing in the event a tile gets scaled.
     * 
     * @property {CanvasRenderingContext2D.imageSmoothingEnabled}
     */
    this.ctx.imageSmoothingEnabled = false;

    /**
     * The ID returned from our main loop's most recent call to
     * requestAnimationFrame(). The token can then be used when we call
     * cancelAnimationFrame() to stop the main loop by telling the browser to
     * cancel the request that corresponds to our token.
     * @type {number}
     */
    this.stopToken = null;

    /**
     * How frequently the game state updates. It is 16.66 Hz (60ms)
     * @type {number}
     */
    this.tickLength = 60;

    /**
     * The most recently elapsed tick of the game clock.
     * @type {double} DOMHighResTimeStamp
     */
    this.lastFrameTime = 0;

    this.maxEntities = 1000;

    this.gameObjectCount = 0;

    /**
     * The list of active game objects to be updated each framr
     */
    this.gameObjects = [
      new Enemy(),
    ];
  }

  /**
   * 
   * @param {integer} w The width of the canvas, in pixels. 
   * @param {integer} h The height of the canvas, in pixels.
   */
  genCanvas(w: number, h: number): HTMLCanvasElement {
    let canvas = document.createElement('canvas');
    canvas.id = "game-pane";
    canvas.width = w;
    canvas.height = h;

    return canvas;
  }

  /**
   * Calculates the game state as of a given point in time. It is the authority
   * for game state. The delta should be used in calculations to make the game
   * simulation framerate independent.
   *
   * @param {float} delta  The difference in time between this frame and last
   * frame, in seconds.
   */
  update(delta: number): void {
    for (let i=0; i<this.gameObjectCount; i++) {
      this.gameObjects[i].update(delta);
    }

    this.gameObjectCount = this.gameObjects.length;
  }

  /**
   * Stops the main game loop.
   */
  stopMainLoop(): void {
    window.cancelAnimationFrame(this.stopToken);
    console.log("Goodbye...");
  }

  /**
   * Attempts to gracefully tear down the game.
   */
  shutdownGame(): void {

  }
}

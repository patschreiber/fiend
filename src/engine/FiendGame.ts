import { InputHandler } from "./Input/InputHandler";
import { Renderer } from "./Renderer";

// Atlases
import { MapBase } from "../atlases/MapBase";
import { Overworld } from "../atlases/Overworld";

// Enemies
// TODO This might change
import { Enemy } from "../entities/Enemy";

/**
 * The Game superclass. Operations to act upon the main game thread are found
 * here.
 */
export class FiendGame {

  public InputHandler: InputHandler;
  public Renderer: Renderer;

  public canvas: HTMLCanvasElement;
  public gameObjectCount: number;
  public gameObjects: Array<any>;
  public stopToken: number|null;

  /**
   */
  public container: HTMLElement;
  public tickLength: number;
  public lastFrameTime: number;
  public maxEntities: number;
  protected _currentMap: MapBase; 

  public ctx: CanvasRenderingContext2D;

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
     * The list of active game objects to be updated each frame.
     */
    this.gameObjects = [
      // TODO This is a test, do should be empty on init.
      new Enemy(),
    ];

    this._currentMap = new Overworld();

    this.Renderer = new Renderer(this.ctx);

    // We need to attach the input handling to the enclosing div, since you 
    // can't get a handle on `canvas` DOM element since it's not focusable. 
    this.InputHandler = new InputHandler(this.container);

    // Let's kick off the game loop!
    this.main(performance.now());
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
    // TODO Remove clog. 
    // console.log('delta :', delta);
    for (let i=0; i<this.gameObjectCount; i++) {
      this.gameObjects[i].update(delta);
    }

    this.gameObjectCount = this.gameObjects.length;
  }

  draw(delta: number): void {
    // Clear the screen
    this.ctx.clearRect(
      0, 
      0, 
      this.canvas.width, 
      this.canvas.height
    );

    // Always store the texture in a var so we don't call "new Foo()" multiple
    // times a second. 
    this.Renderer.drawTileMap(this._currentMap);
    this.Renderer.draw(this.gameObjectCount, this.gameObjects);
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
  shutdownGame(): void {}

/**
  * The main game loop. We use requestAnimationFrame to be thread-safe and not
  * dominate the browser when the player blurs focus on our tab.
  *
  * render() is passed tFrame because it is assumed that the render method will
  *          calculate how long it has been since the most recently passed
  *          update tick for extrapolation (purely cosmetic for fast devices).
  *          It draws the scene.
  *
  * update() calculates the game state as of a given point in time.
  *
  * init()   Performs whatever tasks are needed before the main loop can run.
  *
  *
  * @param {DOMHighResTimeStamp} tFrame The number of milliseconds since
  * navigationStart (when the previous document is unloaded.
  * window.requestAnimationFrame() always provides a DOMHighResTimeStamp to
  * callbacks as an argument when they are executed.
  */
  main(tFrame: DOMHighResTimeStamp): void {
    // Store the ID returned from our main loop's most recent call to
    // requestAnimationFrame().
    this.stopToken = window.requestAnimationFrame(this.main.bind(this));
  
    // Delta should be in seconds, not ms, so we divide by 1000.
    let delta = (tFrame - this.lastFrameTime) / 1000.0;
    // Keep track of when the last frame happened.
    this.lastFrameTime = tFrame;
  
    // this.InputHandler.handleInput();
    this.update(delta);
    this.draw(delta);
  }
}

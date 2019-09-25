import { InputHandler } from "./Input/InputHandler";
import { Camera } from "./Render/Camera/Camera";
import { Renderer } from "./Render/Renderer";

// Player
import { Player } from './GameObject';

// Enemies
// TODO: Might remove
import { Enemy } from './GameObject';

/**
 * The Game superclass. Operations to act upon the main game thread are found
 * here.
 */
export class FiendGame {

  /**
   * The input handler that accepts player input.
   */
  public InputHandler: InputHandler;

  /**
   * The instance of the Player's character.
   */
  public Player: Player;

  /**
   * The renderer responsible for drawing to the screen.
   */
  public Renderer: Renderer;

  /**
   * The main camera
   */
  public Camera: Camera;

  /**
   * The canvas in the DOM. What the game is rendered on.
   */
  public canvas: HTMLCanvasElement;

  /**
   * The number of currently-active game objects.
   *
   * @type {number}
   */
  public gameObjectCount: number;

  /**
   * The list of active game objects. Every game object in this list will have
   * their state updated every frame, if possible.
   */
  public gameObjects: Array<any>;

  /**
   * The max amount of active game objects that can be present in the game.
   * TODO: Figure out what happens if this limit is reached.
   * @internal This could be an "importance weight" where less important game
   * objects are purged.
   */
  public maxEntities: number;

  /**
   * The HTML wrapper for the game. Assume everything in this container is part
   * of the game.
   */
  public container: HTMLElement;

  /**
   * How frequently the game state updates, ideally. Defaults to 60 Hz, 16.6
   * frames-per-second.
   */
  public tickLength: number;

  /**
   * The most recently elapsed tick of the game clock.
   */
  public lastFrameTime: number;

  /**
   * The ID returned from our main loop's most recent call to
   * requestAnimationFrame(). The token can then be used when we call
   * cancelAnimationFrame() to stop the main loop by telling the browser to
   * cancel the request that corresponds to our token.
   */
  public stopToken: number|null;

  constructor(gamePaneWidth: number, gamePaneHeight: number) {

    /**
     * Create the game pane and canvas.
     */
    this.canvas = this.genCanvas(gamePaneWidth, gamePaneHeight);
    this.container = document.getElementById("fiend-game");
    this.container.insertBefore(this.canvas, this.container.firstChild);

    this.stopToken = null;

    this.tickLength = 60;

    this.lastFrameTime = 0;

    this.maxEntities = 1000;

    this.Player = new Player({x:125,y:125});

    this.Renderer = new Renderer(this.canvas);

    this.InputHandler = new InputHandler();

    this.Camera = new Camera();

    this.gameObjectCount = 0;

    this.gameObjects = [
      // TODO This is a test, do should be empty on init.
      // new Enemy(),
      this.Player,
    ];

    // Let's kick off the game loop!
    this.main(performance.now());
  }

  /**
   * Generates a new canvas DOM canvas element. The game will run in this
   * canvas.
   *
   * @param {number} w The width of the canvas, in pixels.
   * @param {number} h The height of the canvas, in pixels.
   */
  private genCanvas(w: number, h: number): HTMLCanvasElement {
    let canvas = document.createElement('canvas');
    canvas.id = "game-pane";
    canvas.width = w;
    canvas.height = h;
    canvas.tabIndex = 1;

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
  private _update(delta: number): void {
    // TODO Remove clog.
    // console.log('delta :', delta);
    for (let i=0; i<this.gameObjectCount; i++) {
      this.gameObjects[i].update(delta);
    }

    this.gameObjectCount = this.gameObjects.length;
  }

  /**
   * Responsible for drawing the current game state to the screen.
   */
  private _draw(): void {

    // Draw the scene.
    this.Renderer.draw(this.gameObjectCount, this.gameObjects);
  }

  /**
   * Stops the main game loop.
   */
  private stopMainLoop(): void {
    window.cancelAnimationFrame(this.stopToken);
    console.log("Goodbye...");
  }

  /**
   * Attempts to gracefully tear down the game.
   */
  public shutdownGame(): void {
    this.stopMainLoop();
  }

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
  public main(tFrame: DOMHighResTimeStamp): void {
    // Store the ID returned from our main loop's most recent call to
    // requestAnimationFrame().
    this.stopToken = window.requestAnimationFrame(this.main.bind(this));

    // Delta should be in seconds, not ms, so we divide by 1000.
    let delta = (tFrame - this.lastFrameTime) / 1000.0;
    // Keep track of when the last frame happened.
    this.lastFrameTime = tFrame;

    this.InputHandler.handleInput(this.Player, delta);
    this._update(delta);
    this._draw();
  }
}

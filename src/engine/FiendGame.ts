import { ComponentManager } from './Component/ComponentManager';
import { GameObject } from './GameObject';
import { GameObjectManager } from './GameObject/GameObjectManager';
import { InputHandler } from './Input/InputHandler';
import { DebugKeyboardPlugin } from './Input/io_device_plugins/DebugKeyboardPlugin';
import { MovementSystem } from './Input/MovementSystem';
import { Renderer } from './Render/Renderer';
import { SceneManager } from './Scene/SceneManager';
import { Template } from './templates/Template';

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
   * The renderer responsible for drawing to the screen.
   */
  public Renderer: Renderer;

  /**
   * The manager responsible for orchestrating Scenes.
   */
  public SceneManager: SceneManager;
  public GameObjectManager: GameObjectManager;
  public ComponentManager: ComponentManager;

  /**
   * Systems
   */

  /**
   * The movement system.
   */
  public MovementSystem: MovementSystem;

  /**
   * The instance of the Player's character.
   */
  public Player: GameObject;

  /**
   * The canvas in the DOM. What the game is rendered on.
   */
  public canvas: HTMLCanvasElement;

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

  /**
   * @constructor
   * Generates the instance of the game.
   *
   * @param gamePaneWidth The width of the game pane.
   * @param gamePaneHeight The height of the game pane.
   * TODO: gamePlayWidth and height should probably be handled by tbe Camera.
   */
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

    this.Renderer = new Renderer(this.canvas);
    this.InputHandler = new InputHandler(new DebugKeyboardPlugin());
    this.GameObjectManager = new GameObjectManager();
    this.ComponentManager = new ComponentManager();
    this.SceneManager = new SceneManager(
      this.GameObjectManager,
      this.ComponentManager
    );

    this.MovementSystem = new MovementSystem(
      this.ComponentManager,
      this.InputHandler
    );

    // TODO: Try and remove the player from this class. They should exist as an
    // entity in a scene, same as everything else. Pain points: InputHandler.
    this.Player = GameObject.create(Template.get("Player"));

    // Let's kick off the game loop!
    this.main(performance.now());
  }

  /**
   * Generates a new canvas DOM canvas element. The game will run in this
   * canvas.
   *
   * @param w The width of the canvas, in pixels.
   * @param h The height of the canvas, in pixels.
   * TODO: We might want to have the browser viewport be the width and height of the canvas.
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
   * Handles input from a player's I/O device. Currently only supports keyboard.
   *
   * @param delta The difference in time between this frame and last frame, in
   * seconds.
   * TODO: Handle input should be InputComponent and be attached to GameActors.
   */
  private _handleInput(delta: number): void {
    // this.InputHandler.
  }

  /**
   * Calculates the game state as of a given point in time. It is the authority
   * for game state. The delta should be used in calculations to make the game
   * simulation framerate independent.
   *
   * @param delta The difference in time between this frame and last frame, in
   * seconds.
   *
   * @example
   * ```js
   * delta: 0.016682999999999993
   * ```
   */
  private _update(delta: number): void {

    // TODO: Remove clog.
    // console.log('delta :', delta);

    for (let go of this.SceneManager.currentScene.activeGameObjects) {
      this.MovementSystem.update(go, delta);

      // // BEGIN TEST TODO:
      // if (GameObject.getMostRecentId() < 1999) {
      //   console.log('GameObject.getMostRecentId() :', GameObject.getMostRecentId());
      // }


      // this.ComponentManager.removeComponent("PositionComponent", go.getId());
      // console.log('this.Com :', this.ComponentManager.getComponentContainer("PositionComponent"));
      // console.log('object :', this.ComponentManager.getComponentContainer("PositionComponent").length);
      // // END TEST TODO:
    }
  }

  /**
   * Responsible for drawing the current game state to the screen.
   */
  private _draw(): void {

    // Draw the scene.
    // TODO: Renderer might have to be attached/related to SceneManager in some
    // way since we might need to know the world coordinates. Or not. The update()
    // method provides the transform for game objects
    this.Renderer.draw(this.SceneManager);
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
    // TODO: Flesh out.
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

    this._handleInput(delta);
    this._update(delta);
    this._draw();
  }

}

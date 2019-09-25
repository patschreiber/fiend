import { GameActor } from './GameActor';

/**
 * The interface for the [[Player]] class.
 *
 * @interface IPlayer
 */
interface IPlayer {

  moveN(delta: number): void;
  moveS(delta: number): void;
  moveE(delta: number): void;
  moveW(delta: number): void;
}

/**
 * The Player class. Keeps track of the state of the player including all
 * attributes and stats.
 *
 * @abstract
 * @extends [[GameActor]] The GameObject base abstract class.
 * @implements [[IPlayer]]
 */
export class Player extends GameActor implements IPlayer {

  public HP: number;

  public EXP: number;

  public speed: number;

  /**
   * @constructor
   */
   constructor(position: Coordinate) {
    super();

    this.position = {x:100,y:100};

    this.HP = 100;
    this.EXP = 0;
    this.speed = 100;
  }

  /**
   * Updates the Player's state. Intended to be run in the main game loop.
   *
   * @param delta The time difference between frames. Provided by the game's
   * main game loop.
   * @see FiendGame.main()
   */
  public update(delta: number): void {
    console.log('this.position :', this.position);
  }


  /**
   * Draws the Player entity
   * @param ctx The canvas context.
   */
   public draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.position.x, this.position.y, 10, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
  }


  /**
   *    |               .    ||
   *   |||      ....  .||.  ...    ...   .. ...    ....
   *  |  ||   .|   ''  ||    ||  .|  '|.  ||  ||  ||. '
   *  .''''|.  ||       ||    ||  ||   ||  ||  ||  . '|..
   * .|.  .||.  '|...'  '|.' .||.  '|..|' .||. ||. |'..|'
   */

  /**
   * Move the Player north.
   * @param delta The game's delta between frames.
   */
  public moveN(delta: number): void {
    // Decrementing {y} makes the actor move south, since we're dealing with a
    // 2D array and not an actual mathematical grid plane.
    this.position.y -= this.speed * delta;
  }

  /**
   * Move the Player south.
   *
   * @param delta The game's delta between frames.
   */
  public moveS(delta: number): void {
    // Increasing {y} makes the actor move south, since we're dealing with a 2D
    // array and not an actual mathematical grid plane.
    this.position.y += this.speed * delta;
  }

  /**
   * Move the Player east.
   *
   * @param delta The game's delta between frames.
   */
  public moveE(delta: number): void {
    this.position.x += this.speed * delta;
  }

    /**
   * Move the Player west.
   *
   * @param delta The game's delta between frames.
   */
  public moveW(delta: number): void {
    this.position.x -= this.speed * delta;
  }

}


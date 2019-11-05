import {
  GameActor,
  ActorFactory
} from '../../GameObject';

/**
 * The interface for the [[Player]] class.
 *
 * @interface IPlayer
 */
interface IPlayer {

  /**
   * Move the Player north.
   *
   * @param delta The game's delta between frames.
   */
  moveN(delta: number): void;

  /**
   * Move the Player south.
   *
   * @param delta The game's delta between frames.
   */
  moveS(delta: number): void;

  /**
   * Move the Player east.
   *
   * @param delta The game's delta between frames.
   */
  moveE(delta: number): void;

  /**
   * Move the Player west.
   *
   * @param delta The game's delta between frames.
   */
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

  /**
   * The actor's type.
   */
  protected _type: ActorFactory;

  /**
   * @constructor
   *
   * @param actorType The Actor's type.
   * @param position The starting position of the Player.
   */
   constructor(actorType: ActorFactory, position: Coordinate) {
    super(position);

    this._type = actorType;
  }

  /**
   * Updates the Player's state. Intended to be run in the main game loop.
   *
   * @param delta The time difference between frames. Provided by the game's
   * main game loop.
   * @see FiendGame.main()
   */
  public update(delta: number): void {
    // this._eventComponent.emit('player_died');
    // TODO: console.log('this.position :', this.position);
  }

  /**
   * Draws the Player entity
   *
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
   *
   * @param delta The game's delta between frames.
   */
  public moveN(delta: number): void {
    if (this.hasComponent("MovementComponent")) {
      this.getComponent("MovementComponent").moveN(this, delta);
    }
  }

  /**
   * Public API for the MovementComponent
   *
   * @param delta The game's delta between frames.
   */
  public moveS(delta: number): void {
    if (this.hasComponent("MovementComponent")) {
      this.getComponent("MovementComponent").moveS(this, delta);
    }
  }

  /**
   * Move the Player east.
   *
   * @param delta The game's delta between frames.
   */
  public moveE(delta: number): void {
    if (this.hasComponent("MovementComponent")) {
      this.getComponent("MovementComponent").moveE(this, delta);
    }
  }

  /**
   * Move the Player west.
   *
   * @param delta The game's delta between frames.
   */
  public moveW(delta: number): void {
    if (this.hasComponent("MovementComponent")) {
      this.getComponent("MovementComponent").moveW(this, delta);
    }
  }

}

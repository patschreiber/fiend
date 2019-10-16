import { GameActor } from './GameActor';
import {
  EventComponent,
  LifeforceComponent,
  MovementComponent
} from '../../Component';

import { PlayerDeathEvent } from '../../Event';

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

  private _eventComponent: EventComponent;
  private _lifeforceComponent: LifeforceComponent;
  private _movementComponent: MovementComponent;

  /**
   * @constructor
   *
   * @param position The starting position of the Player.
   */
   constructor(position: Coordinate) {
    super(position);

    this._lifeforceComponent = new LifeforceComponent();
    this._movementComponent = new MovementComponent();

    this._eventComponent = new EventComponent();
    this._eventComponent.attach(PlayerDeathEvent.create(this));
  }

  /**
   * Updates the Player's state. Intended to be run in the main game loop.
   *
   * @param delta The time difference between frames. Provided by the game's
   * main game loop.
   * @see FiendGame.main()
   */
  public update(delta: number): void {
    this._lifeforceComponent.update(this);
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
    this._movementComponent.moveN(this, delta);
  }

  /**
   * Public API for the MovementComponent
   *
   * @param delta The game's delta between frames.
   */
  public moveS(delta: number): void {
    this._movementComponent.moveS(this, delta);
  }

  /**
   * Move the Player east.
   *
   * @param delta The game's delta between frames.
   */
  public moveE(delta: number): void {
    this._movementComponent.moveE(this, delta);
  }

  /**
   * Move the Player west.
   *
   * @param delta The game's delta between frames.
   */
  public moveW(delta: number): void {
    this._movementComponent.moveW(this, delta);
  }

}


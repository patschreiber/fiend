import {
  ActorFactory,
  Npc
} from '../../GameObject';

import {
  MovementComponent,
  LifeforceComponent
} from '../../Component';

/**
 * The OrdinaryFolk class. Ordinary Folks are generally benign NPCs to populate
 * the world.
 */
export class OrdinaryFolk extends Npc {

  private _lifeforceComponent: LifeforceComponent;
  private _movementComponent: MovementComponent;

  /**
   * @constructor
   *
   * @param actorType The Actor's type.
   * @param position The starting position of the spawned Actor.
   * @param mc The movement component.
   * @param lc The lifeforce component.
   */
  public constructor(
    actorType: ActorFactory,
    position: Coordinate,
    mc: MovementComponent,
    lc: LifeforceComponent
  ) {
    super(actorType, position);

    this._movementComponent = mc;
    this._lifeforceComponent = lc;
  }

  /**
   * The update method for the Npc class.
   *
   * @param delta The time difference between frames. Provided by the game's
   * main game loop.
   * @see FiendGame.main()
   */
  public update(delta: number): void {}

  /**
   * Draws the NPC entity.
   * TODO: This should be moved to the Render component once it's done.
   *
   * @param ctx The canvas context.
   */
  public draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.rect(this.position.x, this.position.y, 20, 20);
    ctx.fillStyle = "#FF0000";
    ctx.fill();
    ctx.closePath();
  }

}

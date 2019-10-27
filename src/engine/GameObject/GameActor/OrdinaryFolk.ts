import {
  ActorFactory,
  Npc
} from '../../GameObject';

import { Coordinate } from '../../types/globals';

/**
 * The OrdinaryFolk class. Ordinary Folks are generally benign NPCs to populate
 * the world.
 */
export class OrdinaryFolk extends Npc {

  /**
   * @constructor
   *
   * @param actorType The Actor's type.
   * @param position The starting position of the spawned Actor.
   */
  public constructor(actorType: ActorFactory, position: Coordinate) {
    super(actorType, position);
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
  public draw(ctx: CanvasRenderingContext2D): void {
    ctx.beginPath();
    ctx.rect(this.position.x, this.position.y, 20, 20);
    ctx.fillStyle = "#FF0000";
    ctx.fill();
    ctx.closePath();
  }

}

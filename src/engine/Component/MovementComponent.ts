import { Component } from "./Component";
import { GameActor } from "../GameObject";
import { FiendMath } from "../utilities/FiendMath";

/**
 * The Movement component. Adds movement to a GameObject.
 *
 * This component is required for entities to be able to move around the world.
 *
 * @extends [[Component]]
 */
export class MovementComponent extends Component {

  /**
   * The speed at which the GameObject can move.
   */
  public speed: number;

  /**
   * @constructor
   * @param initialSpeed The initial speed the attached entity will move at.
   */
  public constructor(initialSpeed: number) {
    super();

    this.typeId = "MovementComponent";

    this.speed = initialSpeed;
  }

  /**
   * Move the Actor north.
   * @param delta The game's delta between frames.
   */
   public moveN(actor: GameActor, delta: number): void {
    // Decrementing {y} makes the actor move south, since we're dealing with a
    // 2D array and not an actual mathematical quadrants.
    actor.position.y -= this.speed * delta;

    // Dont allow the position to exceed the bounds of the Scene.
    // FiendMath.clamp(actor.position.y -= this.speed * delta, );
  }

  /**
   * Move the Actor south.
   *
   * @param delta The game's delta between frames.
   */
  public moveS(actor: GameActor, delta: number): void {
    // Increasing {y} makes the actor move south, since we're dealing with a 2D
    // array and not mathematical quadrants.
    actor.position.y += this.speed * delta;
  }

  /**
   * Move the Actor east.
   *
   * @param delta The game's delta between frames.
   */
  public moveE(actor: GameActor, delta: number): void {
    actor.position.x += this.speed * delta;
  }

  /**
   * Move the Actor west.
   *
   * @param delta The game's delta between frames.
   */
  public moveW(actor: GameActor, delta: number): void {
    actor.position.x -= this.speed * delta;
  }

}

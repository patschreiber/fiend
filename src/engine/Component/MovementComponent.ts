import { Component } from './Component';
import { GameObject } from '../GameObject';
import { FiendMath } from '../utilities/FiendMath';
import { IComponent } from './interfaces/IComponent';

/**
 * The Movement component. Adds movement to a GameObject.
 *
 * This component is required for entities to be able to move around the world.
 *
 * @extends [[Component]]
 */
export class MovementComponent extends Component implements IComponent {

  /**
   * The Lifeforce component.
   */
  private static readonly _typeId = "MovementComponent";

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

    this.speed = initialSpeed;
  }

  /**
   * Retrieves the type id of the component. Used when fetching or checking a
   * specific component for a [[GameObject]].
   */
  public getTypeId(): string {
    return MovementComponent._typeId;
  }

  /**
   * Move the Actor north.
   * @param delta The game's delta between frames.
   */
   public moveN(actor: GameObject, delta: number): void {
    // Decrementing {y} makes the actor move south, since we're dealing with a
    // 2D array and not an actual mathematical quadrants.
    // actor.position.y -= this.speed * delta;

    // Dont allow the position to exceed the bounds of the Scene.
    // FiendMath.clamp(actor.position.y -= this.speed * delta, );
  }

  /**
   * Move the Actor south.
   *
   * @param actor The GameObject to operate on.
   * @param delta The game's delta between frames.
   */
  public moveS(actor: GameObject, delta: number): void {
    // Increasing {y} makes the actor move south, since we're dealing with a 2D
    // array and not mathematical quadrants.
    // actor.position.y += this.speed * delta;
  }

  /**
   * Move the Actor east.
   *
   * @param actor The GameObject to operate on.
   * @param delta The game's delta between frames.
   */
  public moveE(actor: GameObject, delta: number): void {
    // actor.position.x += this.speed * delta;
  }

  /**
   * Move the Actor west.
   *
   * @param actor The GameObject to operate on.
   * @param delta The game's delta between frames.
   */
  public moveW(actor: GameObject, delta: number): void {
    // actor.position.x -= this.speed * delta;
  }

}

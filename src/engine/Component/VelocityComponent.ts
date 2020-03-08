import { Component } from './Component';
import { IComponent } from './interfaces/IComponent';

/**
 * The VelocityComponent class.
 * @implements IVelocityComponentMembers
 */
export class VelocityComponent extends Component implements IComponent, IVelocityComponentMembers {

  /**
   * Speed is total pixels moved in a second.
   */
  public speed: number;


  /**
   * The max speed.
   */
  public maxSpeed: number;

  /**
   * The direction and rate the GameObject is changing it's position. Velocity
   * implies speed and direction.
   */
  public velocity: number;

  /**
   * The direction and rate your GameObject is changing it's velocity.
   */
  public acceleration: number;

  /**
   * The decay and deceleration applied when already in motion.
   */
  public decayRate: number;

  /**
   * The current direction of travel.
   */
  public currDot: number;

  /**

   */
  private static defaults: IVelocityComponentMembers = {
    maxSpeed: 40,
    currSpeed: 0,
    decayRate: 0,
    currDot: 0,
  };

  /**
   * The Velocity component.
   */
  private static readonly _typeId = "VelocityComponent";

  /**
   * @constructor
   * @internal We use [[Partial]] to declare every
   * @param args (optional) The members of the class.
   */
   public constructor(overrides?: Partial<IVelocityComponentMembers>) {
    super();
    Object.assign(this, VelocityComponent.defaults);
    Object.assign(this, overrides);
  }

  /**
   * Retrieves the type id of the component. Used when fetching or checking a
   * specific component for a [[GameObject]].
   */
  public getTypeId(): string {
    return VelocityComponent._typeId;
  }

}

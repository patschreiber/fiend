import { Component } from './Component';

/**
 * The VelocityComponent class.
 * @implements IVelocityComponentMembers
 */
export class VelocityComponent extends Component implements IVelocityComponentMembers {

  private static defaults: IVelocityComponentMembers = {}

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

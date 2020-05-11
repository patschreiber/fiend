import { Component } from './Component';
import { IComponent } from './interfaces/IComponent';

/**
 * The PositionComponent class.
 * Dictates a location in the world for a given [[GameObject]].
 * @implements IPositionComponentMembers
 * TODO:: Flesh this out
 */
export class PositionComponent extends Component implements IComponent, IPositionComponentMembers {

  /**
   The position of the related GameObject relative to it's parent's position.
   */
  public localPosition: Coordinate;

  /**
   * The position of the related GameObject relative to the world.
   */
  public worldPosition: Coordinate;

  /**
   * The x,y position of the related GameObject.
   */
  public gridLocation: Coordinate;

  /**
   * The Collider component.
   */
  private static readonly _typeId = "PositionComponent";

  /**
   * The PositionComponent's default values.
   */
  private static defaults: IPositionComponentMembers = {
    localPosition: {x:0,y:0},
    worldPosition: {x:0,y:0},
    gridLocation: {x:0,y:0},
  }

  /**
   * @constructor
   * @internal We use [[Partial]] to declare every
   * @param args (optional) The members of the class.
   */
   public constructor(overrides?: Partial<IPositionComponentMembers>) {
    super();
    Object.assign(this, PositionComponent.defaults);
    Object.assign(this, overrides);
  }

  /**
   * Retrieves the type id of the component. Used when fetching or checking a
   * specific component for a [[GameObject]].
   */
   public getTypeId(): string {
    return PositionComponent._typeId;
  }

}

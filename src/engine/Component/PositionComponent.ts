/**
 * The PositionComponent class.
 * Dictates a location in the world for a given [[GameObject]].
 * @implements IPositionComponentMembers
 * TODO:: Flesh this out
 */
export class PositionComponent implements IPositionComponentMembers {
  public localPosition: Coordinate;
  public worldPosition: Coordinate;
  public gridLocation: Coordinate;

  /**
   * @constructor
   * @param worldPosition The world position to place this GameObject.
   */
  public constructor(worldPosition: Coordinate) {
    this.worldPosition = worldPosition;
  }

}

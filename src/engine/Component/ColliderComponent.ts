import { IComponent } from './interfaces/IComponent';
import { Component } from './Component';

/**
 * The ColliderComponent component class.
 * Allows a [[GameActor]] to collide with other objects.
 *
 * This component is part of the physics system.
 *
 * @extends [[Component]]
 */
export class ColliderComponent extends Component implements IComponent {

  /**
   * The Lifeforce component.
   */
  private static readonly _typeId = "ColliderComponent";

  /**
   * Retrieves the type id of the component. Used when fetching or checking a
   * specific component for a [[GameObject]].
   */
  public getTypeId(): string {
    return ColliderComponent._typeId;
  }

}

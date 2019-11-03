import { IComponent } from './interfaces/IComponent';
import { Component } from './Component';
import { GameObject } from '../GameObject';

/**
 * The BrainComponent class.
 * Allows a [[GameActor]] to operate autonomously.
 *
 * This component is part of the AI system.
 *
 * @extends [[Component]]
 */
export class BrainComponent extends Component implements IComponent {

  /**
   * The Lifeforce component.
   */
  private static readonly _typeId = "ColliderComponent";

  /**
   * Retrieves the type id of the component. Used when fetching or checking a
   * specific component for a [[GameObject]].
   */
  public getTypeId(): string {
    return BrainComponent._typeId;
  }

  /**
   * Update is intended to be run once per frame.
   *
   * @param GO The GameObject this component belongs to.
   */
  public update(GO: GameObject): void {}
}

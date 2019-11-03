import { GameObject } from '../GameObject/GameObject';
import { Component } from './Component';
import { IComponent } from './interfaces/IComponent';

/**
 * The Lifeforce component. Adds health to a GameObject. Adds life, health
 * regeneration, and death.
 *
 * This component is required for entities to be alive or dead, as well as take
 * damage.
 *
 * @extends [[Component]]
 */
export class LifeforceComponent extends Component implements IComponent {

  /**
   * The Lifeforce component.
   */
  private static readonly _typeId = "LifeforceComponent";

  /**
   * The current HP of the GameObject.
   */
  private currentHP: number;

  /**
   * The maximum HP of the GameObject.
   */
  private maxHP: number;

  /**
   * Retrieves the type id of the component. Used when fetching or checking a
   * specific component for a [[GameObject]].
   */
  public getTypeId(): string {
    return LifeforceComponent._typeId;
  }

  public addProperties(): void {

  }

  /**
   * Update is intended to be run once per frame.
   *
   * @param GO The GameObject this component belongs to.
   */
  public update(GO: GameObject): void {}

}

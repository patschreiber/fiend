import { Component } from './Component';

export interface ILifeforceComponentMembers extends IComponentMembers {
  currentHP: number,
  maxHP: number,
}

/**
 * The Lifeforce component. Adds health to a GameObject. Adds life, health
 * regeneration, and death.
 *
 * This component is required for entities to be alive or dead, as well as take
 * damage.
 *
 * @extends [[Component]]
 */
export class LifeforceComponent extends Component implements ILifeforceComponentMembers {

  /**
   * The LifeforceComponents's component type id.
   */
  private static _type: Symbol = Symbol("LifeforceComponent");

  private static defaults: ILifeforceComponentMembers = {
    currentHP: 125,
    maxHP: 125
  }

  /**
   * The current HP of the GameObject.
   */
  public currentHP: number;

  /**
   * The maximum HP of the GameObject.
   */
  public maxHP: number;

  /**
   * @constructor
   * @internal We use [[Partial]] to declare every
   * @param args (optional) The members of the class.
   */
  public constructor(overrides: ILifeforceComponentMembers) {
    super();
    Object.assign(this, LifeforceComponent.defaults);
    Object.assign(this, overrides);
  }

  /**
   * Retrieves the type id of the component. Used when fetching or checking a
   * specific component for a [[GameObject]].
   */
  public getTypeId(): Symbol {
    return LifeforceComponent._type;
  }

}

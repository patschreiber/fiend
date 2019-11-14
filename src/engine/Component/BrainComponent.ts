import { Component } from './Component';
import { IComponent } from './interfaces/IComponent';

export interface IBrainComponentMembers extends IComponentMembers {}

/**
 * The BrainComponent component.
 *
 * @extends [[Component]]
 */
export class BrainComponent extends Component implements IComponent, IBrainComponentMembers {

  /**
   * The LifeforceComponents's component type id.
   */
  private static readonly _type: string = "BrainComponent";

  private static defaults: IBrainComponentMembers = {}

  /**
   * @constructor
   * @internal We use [[Partial]] to declare every
   * @param args (optional) The members of the class.
   */
  public constructor(overrides: Partial<IBrainComponentMembers>) {
    super();
    Object.assign(this, BrainComponent.defaults);
    Object.assign(this, overrides);
  }

  /**
   * Retrieves the type id of the component. Used when fetching or checking a
   * specific component for a [[GameObject]].
   */
  public getTypeId(): string {
    return BrainComponent._type;
  }

}

import { Component } from './Component';
import { IComponent } from './interfaces/IComponent';
import { InputHandler } from '../Input/InputHandler';

export interface IInputComponentMembers extends IComponentMembers {}

/**
 * The InputComponent component.
 *
 * @extends [[Component]]
 */
export class InputComponent extends Component implements IComponent, IInputComponentMembers {

  /**
   * The InputComponent's component type id.
   */
  private static readonly _type: string = "InputComponent";

  private static defaults: IInputComponentMembers = {}

  private InputHandler: InputHandler;

  /**
   * @constructor
   * @internal We use [[Partial]] to declare every
   * @param args (optional) The members of the class.
   */
  public constructor(overrides?: Partial<IInputComponentMembers>) {
    super();
    Object.assign(this, InputComponent.defaults);
    Object.assign(this, overrides);
  }

  /**
   * Retrieves the type id of the component. Used when fetching or checking a
   * specific component for a [[GameObject]].
   */
  public getTypeId(): string {
    return InputComponent._type;
  }

}

import { IRenderComponentMembers } from "../RenderComponent";
import { IComponent } from "./IComponent";

/**
 * The IRederComponentMembers interface.
 */
export interface IRederComponentMembers extends IComponent {
  /**
   * @constructor
   * @internal We use [[Partial]] to declare every
   * @param overrides (optional) Values that will override the defaults.
   */
  constructor(overrides?: Partial<IRenderComponentMembers>): void;

  /**
   * Retrieves the type id of the component. Used when fetching or checking a
   * specific component for a [[GameObject]].
   */
  getTypeId(): string;
}

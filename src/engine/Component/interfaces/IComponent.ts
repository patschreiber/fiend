import { ComponentId } from "../../types/components";
import { GameObjectId } from "../../types/gameobjects";

/**
 * The IComponent interface.
 */
export interface IComponent {
  /**
   * Retrieves the type id of the component. Used when fetching or checking a
   * specific component for a [[GameObject]].
   */
  getTypeId(): string;

  /**
   * The id of the GameObject this Component is currently associated with.
   */
  goid: GameObjectId;

  /**
   * The instance id of the Component.
   */
  getId(): ComponentId;
}

/**
 * The IComponent interface.
 */
export interface IComponent {

  /**
   * Retrieves the type id of the component. Used when fetching or checking a
   * specific component for a [[GameObject]].
   */
  getTypeId(): string;
}

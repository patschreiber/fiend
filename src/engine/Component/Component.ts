/**
 * The Component interface.
 */
interface IComponent {}

/**
 * The Component class
 * @abstract
 */
export abstract class Component {

  /**
   * @var typeId The type of the component.
   */
  protected typeId: string;

  /**
   * Accessor for the private member `typeId`.
   *
   * @returns The type id the Component.
   */
  public getTypeId(): string {
    return this.typeId;
  }

}

import { IComponent } from './interfaces/IComponent';

/**
 * The Component base class.
 *
 * @abstract
 */
export abstract class Component implements IComponent {

  /**
   * The type id of the component. Used when fetching or checking a specific
   * component for a [[GameObject]].
   */
  public abstract getTypeId(): string;

}

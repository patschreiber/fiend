// TODO: Tabled for now.
// =====================
import { Component } from '../Component';
import { IComponent } from '../interfaces/IComponent';

/**
 * The Component Factory. Allows dynamic creation of a Component at runtime.
 */
export class ComponentFactory {

  /**
   * Creates a new component instance based on the passed in type.
   *
   * @param C The component to create. Must extend the `Component` base
   * class.
   *
   * @return A new component instance of the given component type.
   */
  // public static create<CType extends Component>(C: new () => CType): CType {
  public static create<CType extends Component>(C: new () => CType): CType {
    return new C();
  }
}

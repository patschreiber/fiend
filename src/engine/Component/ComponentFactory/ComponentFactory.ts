import { Component } from "../Component";

/**
 * The Component Factory. Allows dynamic creation of a Component at runtime.
 * Dynamically maps passed parameters to the Component's members, overriding
 * the defaults if any overrides were provided.
 */
export class ComponentFactory {
  /**
   * Creates a new component instance based on the passed in type. Optionally-
   * provided Component value overrides will
   *
   * @param type The type of Component to create. Must extend the `Component`
   * base class.
   * @param overrides (optional) The arguments to pass to the Component
   * constructor. The constructor will compare the arguments against the
   * Component type's [[IComponentMembers]] interface, and map any values
   * that match.
   *
   * @return A new instance of the desired Component type.
   *
   * @example
   * let a = ComponentFactory.create(LifeforceComponent, {currentHP: 100})
   */
  // public static create<C extends Component, T extends IComponentMembers>(
  //   type: new(overrides?: Partial<T>) => C,
  //   overrides?: Partial<T>
  // ): C {

  //   return new type(overrides);
  // }

  public static create<C extends Component, T extends IComponentMembers>(
    component: new (overrides?: Partial<T>) => C,
    overrides?: Partial<T>
  ): Component {
    return new component(overrides);
  }
}

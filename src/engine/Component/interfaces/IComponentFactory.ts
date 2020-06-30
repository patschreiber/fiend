import { Component } from "../Component";

/**
 * The IEventComponent interface.
 */
export interface IComponentFactory {
  /**
   * Creates a new object instance based on the passed in component type. Note:
   * The Component must inherit from the base `Component` class.
   *
   * @param C The component to create. Must extend the `Component` base
   * class.
   */
  create<CType extends Component>(C: new () => CType): CType;
}

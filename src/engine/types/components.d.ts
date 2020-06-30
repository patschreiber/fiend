import {
  BrainComponent,
  ColliderComponent,
  Component,
  EventComponent,
  LifeforceComponent,
  PositionComponent,
  VelocityComponent,
} from "../Component";
import { RenderComponent } from "../Component/RenderComponent";

/**
 * The ComponentTypes type definition. This is useful for when a Component is
 * reuqested by it's string type id.
 *
 * @internal When adding new Components, be sure to add it to this list as well!
 *
 * @example
 * ```ts
 * public getComponent<K extends keyof ComponentTypes>(
 *   component: K
 * ): ComponentTypes[K] {}
 */
export type ComponentTypes = {
  BrainComponent?: BrainComponent;
  ColliderComponent?: ColliderComponent;
  EventComponent?: EventComponent;
  LifeforceComponent?: LifeforceComponent;
  PositionComponent?: PositionComponent;
  RenderComponent?: RenderComponent;
  VelocityComponent?: VelocityComponent;
};

/**
 * Provides a type for use with Component ids.
 * Essentially ComponentId is an alias of the `number` type, however, it is so
 * important that we want to emphasize its use. (Much the same way as we do with
 * the GameObjectId).
 * @internal
 * Note, a `number` is used over a `Symbol` for the id intentionally. Symbols
 * aren't indexable, so the id can never act as the array index a GameObject is
 * located at (which may cause issues depending on how the storage is ultimately
 * managed).
 */
export type ComponentId = number;

/**
 * Provides a container to house a GameActor's attached Components. Each array
 * index denotes a type of Component. For instance, array index 0 will always
 * signify the PositionComponent, so if a (non-zero) value is present here, we
 * know that that particular GameObject has a PositionComponent. Modifying
 * the contents of this container should be done through an interface provided
 * by the actor; it should not be modified directly. An actor may not have any
 * Components, in which case all values for this array will be `0`.
 *
 * @example
 * ```
 * gameObjectId:[componentId,componentId,componentId,componentId]
 * // Output
 * 1001:[0,22,0,37,0,104,0,53]
 * ```
 */
type GameObjectComponentReference<C extends Component> = {
  [gameObjectId: number]: ComponentId;
};

/**
 * The template for use with GaneObjects to help facilitate easy creation of
 * "archetypes" which exist in the game.
 * @see Template.ts
 *
 * @example
 * ```ts
 * [ComponentType.PositionComponent, {x:100,y:0}]
 * [ComponentType.LifeforceComponent, {maxHP:999}]
 *
 * Player's position is at [100,0].
 * Player's life is at 100/999 since the default currentHP wasn't overwritten.
 */
export type ComponentTemplate = [typeof Component, ComponentOverrides?];

/**
 * The Component Pool type definition.
 * TODO: Come up with something better than 'any'.
 */
export type ComponentPool = {
  [key: string]: Array<any>;
};

/**
 * The Component values to override. We don't typecheck here, but do when the
 * Component is instantiated.abnf
 */
interface ComponentOverrides {
  [key: string]: any;
}

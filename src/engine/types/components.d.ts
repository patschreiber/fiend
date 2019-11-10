import {
  Component,
  EventComponent,
  LifeforceComponent,
  MovementComponent,
  BrainComponent,
  ColliderComponent,
  ILifeforceComponentMembers
} from '../Component';
import { IComponent } from '../Component/interfaces/IComponent';

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
 * Provides a container to house a GameActor's attached Components. Modifying
 * the contents of this container should be done through an interface provided
 * by the actor; it should not be modified directly. An actor may not have any
 * Components, so we mark every one as optional.
 *
 * @example
 * Player.components = {
  *   MovementComponent: new MovementComponent(),
  *   LifeforceComponent: new LifeforceComponent(),
  * }
  * // Gets the event component attached to the player, then attached a new event
  * // "SomeEvent" to the EventComponent.
  * player.getComponent("EventComponent").attach(SomeEvent.create(player));
  *
  * @see https://stackoverflow.com/questions/58573975
  */
// type ComponentContainer = {
//    EventComponent?: EventComponent;
//    LifeforceComponent?: LifeforceComponent;
//    MovementComponent?: MovementComponent;
//    BrainComponent?: BrainComponent;
// }

// // TODO: WIP
// type ComponentTemplate<C extends Component, T extends IComponentMembers> = {
//   component: C, customValues?: Partial<T>
// }

// interface ComponentTemplate<C extends Component, T extends IComponentMembers> {
//   component: C, customValues?: Partial<T>
// }

type AvailableComps = BrainComponent|LifeforceComponent|MovementComponent;

/**
 * Provides a structure of available Components that the engine recognizes.
 * Should probably be alphabetical.
 * TODO: Does the enum int value === the array key of the Component array? E.g.
 * Does ComponentManager->components[0] equal the BrainComponent?
 */
export const enum ComponentType {
  Brain,
  Collider,
  Event,
  Lifeforce,
  Position,
  Velocity
}

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
export type ComponentTemplate = [ComponentType, ComponentOverrides?];

/**
 * The Component values to override. We don't typecheck here, but do when the
 * Component is instantiated.abnf
 */
interface ComponentOverrides {
  [key: string]: any;
}

/**
 * // TODO:
 * A container for all Components that exist in a scene. There will be a
 * different Component queue for each type of Component.
 * @example
 * ```
 * {10: BrainComponent}
 * ```
 */
type ComponentContainer<C extends Component> = {
  [gameObjectId: number]: C;
}

import {
  Component,
  EventComponent,
  LifeforceComponent,
  MovementComponent,
  BrainComponent,
  ColliderComponent
} from '../Component';
import { IComponent } from '../Component/interfaces/IComponent';

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
type ComponentContainer = {
   EventComponent?: EventComponent;
   LifeforceComponent?: LifeforceComponent;
   MovementComponent?: MovementComponent;
   BrainComponent?: BrainComponent;
}

/**
 * Provides a structure of available Components that the system recognizes.
 */
type AvailableComponentsContainer = {
  BrainComponent?: BrainComponent;
  ColliderComponent?: ColliderComponent;
  EventComponent?: EventComponent;
  LifeforceComponent?: LifeforceComponent;
  MovementComponent?: MovementComponent;
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
type GameObjectComponentList = {
  [gameObjectId: number]: BrainComponent;
}



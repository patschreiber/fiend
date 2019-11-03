import {
  Component,
  EventComponent,
  LifeforceComponent,
  MovementComponent,
  BrainComponent
} from '../Component';
import { GameObjectId } from './globals';

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
 * A container for all Components that exist in a scene.
 */
type ComponentQueue = {
  [gameObjectId: number]: Event|CustomEvent,
}

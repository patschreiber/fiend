import {
  Component,
  EventComponent,
  LifeforceComponent,
  MovementComponent
} from "../Component";

/**
 * Provides an x,y coordinate tuple.
 * [x,y]: The coordinate tuple.
 *
 * @example
 * position = {x:132,y:0}
 */
type Coordinate = {
  x: number,
  y: number,
};

/**
 * Provides a container type to house Events. This type will be used with
 * objects that can emit events. Event is a built-in ES6 type that represents an
 * event which takes place in the DOM.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Event
 *
 * In this example, 'event_name' is the value that the event listener will be
 * listening for.
 *
 * eventContainer = {
 *   'event_name': new Event('event_name')
 * }
 *
 * @example
 * eventContainer = {
 *   'gameobject_created': new Event('gameobject_created'),
 *   'player_died': new Event('player_died'),
 * }
 */
type EventContainer = {
  [eventName: string]: Event|CustomEvent,
};

/**
 * Provides a container to house an entity's attached Components. Modifying the
 * contents of this container should be done through an interface provided by
 * the entity; it should not be modified directly. An entity may not have any
 * Components, so we mark every one optional.
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
}

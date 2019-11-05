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

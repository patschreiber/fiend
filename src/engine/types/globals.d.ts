/**
 * Removes the `readonly` attribute from a member.
 */
type Mutable<T> = {
  -readonly [P in keyof T]: T[P];
};

/**
 * Provides an x,y coordinate type.
 * [x:number,y:number]: The coordinate type.
 *
 * @example
 * position = {x:132,y:0}
 */
type Coordinate = {
  x: number;
  y: number;
};

/**
 * Provides a width/height/length dimension type.
 *
 * @param w The width.
 * @param h The height.
 * @param l (optional) The length.
 *
 * @example
 * dimensions = {w:32,h:32,l:32}
 * dimensions = {w:100,h:125}
 */
type Dimension = {
  w: number;
  h: number;
  l?: number;
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
  [eventName: string]: Event | CustomEvent;
};

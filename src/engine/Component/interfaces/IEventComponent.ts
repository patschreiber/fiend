import { IComponent } from './IComponent';

/**
 * The IEventComponent interface.
 */
export interface IEventComponent extends IComponent {

  /**
   * The list of ES6 Events or CustomEvents that can be emitted.
   */
  attachedEvents: EventContainer;

  /**
   * Adds DOM Events to this component via an array of events.
   *
   * @param events The array of events to add.
   */
  attachMultiple(eventList: Array<Event|CustomEvent>): void;

  /**
   * Attaches a single event to this component. Attached components can be
   * emitted.
   *
   * @param event An `Event` or `CustomEvent` that this EventComponent knows
   * about.
   */
  attach(event: Event|CustomEvent): void;

  /**
   * Emits an event via the `game-pane` DOM element. Uses the string name of the
   * event to lookup if it's in the attachedEvent member.
   *
   * @param eventName The event to emit.
   */
  emit(eventName: string): void;
}

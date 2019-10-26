import { EventContainer } from "../types/globals";
import { Component } from './Component';

/**
 * The EventComponent interface.
 */
 interface IEventComponent {

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

/**
 * The EventComponent class.
 * @implements [[IEventComponent]]
 */
export class EventComponent extends Component implements IEventComponent {

  /**
   * @var attachedEvents The list of events that can be emitted.
   */
  public attachedEvents: EventContainer;

  /**
   * @constructor
   */
  public constructor() {
    super();

    this.typeId = "EventComponent";

    // We need to declare this as an object otherwise we get a reference error
    // when we try and assign events to it in the `attach` and `attachMultiple`
    // methods.
    this.attachedEvents = {};
  }

  /**
   * Attaches a single event to this component. Attached components can be
   * emitted.
   *
   * @param event An `Event` or `CustomEvent` that this EventComponent knows
   * about.
   */
  public attach(event: Event|CustomEvent): void {
    this.attachedEvents[event.type] = event;
  }

  /**
   * Adds DOM Events to this component via an array of events.
   *
   * @param events The array of events to add.
   */
  public attachMultiple(eventList: Array<Event|CustomEvent>): void {
    for (let event of eventList) {
      this.attach(event);
    }
  }

  /**
   * Emits an event via the `game-pane` DOM element. Uses the string name of the
   * event to lookup if it's in the attachedEvent member.
   *
   * @param eventName The event to emit.
   */
  public emit(eventName: string): void {
    document.getElementById('game-pane')
      .dispatchEvent(this.attachedEvents[eventName]);
  }

}

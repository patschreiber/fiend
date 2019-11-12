import { IEventComponent } from './interfaces/IEventComponent';
import { Component } from './Component';
import { IComponent } from './interfaces/IComponent';

/**
 * The EventComponent class.
 * @implements [[IEventComponent]]
 */
export class EventComponent extends Component implements IComponent, IEventComponent {

  /**
   * The type id of the component.
   */
  private static readonly _typeId = "EventComponent";

  /**
   * The list of events that can be emitted.
   */
  public attachedEvents: EventContainer;

  /**
   * @constructor
   */
  public constructor() {
    super();

    // We need to declare this as an object otherwise we get a reference error
    // when we try and assign events to it in the `attach` and `attachMultiple`
    // methods.
    this.attachedEvents = {};
  }

  /**
   * Retrieves the type id of the component. Used when fetching or checking a
   * specific component for a [[GameObject]].
   */
  public getTypeId(): string {
    return EventComponent._typeId;
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

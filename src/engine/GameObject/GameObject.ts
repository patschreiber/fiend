/**
 * The interface for the [[GameActor]] class.
 *
 * @interface IGameActor
 */
interface IGameObject {

  /**
   * Keeps track of the `id` of the last GameObject instantiated.
   *
   * @static
   * @type {number}
   */
  idIncrementor: number;

  /**
   * The `id` of the GameObject.
   *
   * @type {number}
   */
  id: number;

  /**
   * The type of the GameObject.
   *
   * @type {string}
   */
  type: string;

  /**
   * The human-readable name of the GameObject. This will appear in-game.
   *
   * @type {string}
   */
  name: string;

  /**
   * The list of events that can be emitted.
   *
   * @type {EventContainer}
   */
  attachedEvents: EventContainer;

  /**
   * Defines the signature for the update method for the GameActor.
   *
   * @abstract
   * @param delta The time difference between frames. Provided by the game's
   * main game loop.
   * @see FiendGame.main()
   */
  update(delta: number): void;
}

/**
 * The GameObject abstract class. All game entities inherit from this class.
 * On instantiation, the class will generate an auto-incrementing id for use
 * in identifying the newly-created GameObject.
 *
 * @abstract
 */
export abstract class GameObject {

  /**
   * @var idIncrementor Keeps track of the `id` of the last GameObject
   instantiated.
   *
   * @static
   */
  private static idIncrementor: number = 1;

  /**
   * @var id The id of the instance of the GameObject.
   */
  private id: number;

  /**
    * @var type The name of the type of the GameObject.
    */
  protected type: string;

  /**
   * @var name The humanized name of the GameObject.
   */
  public name: string;

  /**
   * @var attachedEvents The list of events that can be emitted.
   */
  public attachedEvents: EventContainer;

  /**
   * The GameObject constructor. Auto-increments the GameOject id for the new
   * GameObject being created.
   */
  public constructor() {

    this.id = GameObject.idIncrementor++;

    this.attachedEvents = {
      'GO_created': new Event('GO_created'),
    }
    document.getElementById('game-pane')
      .dispatchEvent(this.attachedEvents["GO_created"]);
  }

  /**
   * Accessor for the private member `id`.
   *
   * @returns The id of the GameObject
   */
  public getId(): number {
    return this.id;
  }

  /**
   * Updates the GameObject's state. Intended to be run in the main game loop.
   *
   * @abstract
   * @param delta The time difference between frames. Provided by the game's
   * main game loop.
   * @see FiendGame.main()
   */
  protected abstract update(delta: number): void;

  protected attachEvents(events: Array<string>): void {

    for (let event of events) {
      this.attachedEvents[event] = new Event(event);
    }
  }

}

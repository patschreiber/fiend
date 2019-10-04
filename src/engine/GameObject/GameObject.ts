/**
 * The interface for the [[GameActor]] class.
 *
 * @interface IGameActor
 */
interface IGameObject {

  /**
   * The human-readable name of the GameObject. This will appear in-game.
   */
  name: string;

  /**
   * The list of events that can be emitted.
   */
  attachedEvents: EventContainer;

  /**
   * Defines the signature for the update method for the GameActor.
   *
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
export abstract class GameObject implements IGameObject {

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
   * @constructor
   * Auto-increments the GameOject id for the new GameObject being created.
   */
  public constructor() {

    this.id = GameObject.idIncrementor++;

    // Attach events to the Game Object and emit the created event.
    this.attachedEvents = {
      'GO_created': new CustomEvent('GO_created', {
        detail: {
          go_id: this.getId(),
        }
      }),
    }
    document.getElementById('game-pane')
      .dispatchEvent(this.attachedEvents['GO_created']);
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
  public abstract update(delta: number): void;

}

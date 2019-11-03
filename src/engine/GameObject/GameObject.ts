import { GameObjectId } from "../types/globals";

/**
 * The interface for the [[GameObject]] class.
 *
 * @interface IGameObject
 */
interface IGameObject {

  /**
   * Accessor for the private member `id`.
   *
   * @returns The id of the GameObject
   */
   getId(): number;

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
  private id: GameObjectId;

  /**
   * @constructor
   * Auto-increments the GameOject id for the new GameObject being created.
   */
  public constructor() {
    this.id = GameObject.idIncrementor++;
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

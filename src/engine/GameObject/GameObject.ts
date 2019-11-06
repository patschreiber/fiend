import {
  GameObjectId,
} from '../types/gameobjects';
import { IGameObject } from './interfaces/IGameObject';

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
   * TODO: Switch this to use a Symbol (https://www.sitepen.com/blog/advanced-typescript-concepts-classes-and-types/)
   */
  // private id: GameObjectId;
  private id: GameObjectId;

  /**
   * @constructor
   * Auto-increments the GameOject id for the new GameObject being created.
   * TODO: Make sure to save the number we left off on when we quit so we can
   * resume auto-incrementing when we save/load the game.
   *
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

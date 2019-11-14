import {
  GameObjectId,
  GameObjectTemplate
} from '../types/gameobjects';
import { IGameObject } from './interfaces/IGameObject';

/**
 * The GameObject abstract class. All game entities inherit from this class.
 * On instantiation, the class will generate an auto-incrementing id for use
 * in identifying the newly-created GameObject.
 *
 * TODO: Consider we might not even NEED to create an instance of a GameObject
 * if we play our cards right. We could just generate the auto-incrementing ID.
 */
export class GameObject implements IGameObject {

  /**
   * Keeps track of the `id` of the last GameObject instantiated.
   *
   * @static
   */
  private static _idIncrementor: number = 1;

  /**
   * The id of the instance of the GameObject.
   * TODO: Switch this to use a Symbol (https://www.sitepen.com/blog/advanced-typescript-concepts-classes-and-types/)
   */
  private readonly _id: GameObjectId;

  /**
   * GameObject tags can be added to a GameObject to facilitate the
   * identification of an Object. They should not be used as the law on what the
   * GameObject type actually is, since they can be changed on the fly. Think of
   * Tags as more of a quality-of-life feature for the developer.
   */
  private _tags: Array<string>;

  /**
   * @constructor
   * Auto-increments the GameOject id for the new GameObject being created.
   * TODO: Make sure to save the number we left off on when we quit so we can
   * resume auto-incrementing when we save/load the game.
   *
   */
  private constructor(template: GameObjectTemplate) {
    this._id = GameObject._idIncrementor++;
  }

  /**
   * Creates a new instance of a GameObject based on the given template.
   *
   * @param template The template to base the new GameObject on.
   */
  public static create(template: GameObjectTemplate): GameObject {
    return new GameObject(template);
  }

  /**
   * Accessor for the private member `id`.
   *
   * @returns The id of the instance of the GameObject.
   */
  public getId(): GameObjectId {
    return this._id;
  }

  /**
   * Accessor for the private member `tags`.
   *
   * @return The Array of tags on the GameObject.
   */
  public getTags(): Array<string> {
    return this._tags;
  }

}

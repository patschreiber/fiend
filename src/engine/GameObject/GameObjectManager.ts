import { IGameObjectManager } from './interfaces/IGameObjectManager';
import {
  GameObjectId,
  GameObjectTemplate
} from '../types/gameobjects';
import { GameObject } from './GameObject';

/**
 * The GameObjectManager class.
 * Manages GameObjects and the containers they belong to.
 */
export class GameObjectManager implements IGameObjectManager {

  /**
   * Game objects that are not present in the scene, but who’s state needs to be
   * maintained, go here. When a scene is unloaded, an entity marked with the
   * “persist” flag will be added to this container.
   */
  public inactiveGameObjects: Array<GameObjectId>;

  /**
   * The data structure that tracks all of the Components attached to an
   * instance of a GameObject. The Array indices represent a specific Component
   * type. If new Component types are ever added, they get appended to this
   * pool. If a index ever has `-1` for it's value, that Component has been
   * soft-deleted in the system; new Components of that type cannot be added to
   * the GameObject.
   */
  //  private _attachedComponents: Array<ComponentId> = new Array(8);

  /**
   * Contains game objects that are unique, which means they can only ever
   * appear once in any given save file. A lot of the time, the state of these
   * unique entities needs to be maintained for reference.
   */
  // private _worldGraveyard: GameObjectContainer;

  /**
   * @constructor
   */
  public constructor() {
    this.inactiveGameObjects = Array<GameObjectId>();
  }

  /**
   * Getter for the inactive GameObject container.
   *
   * @return The Array of inactive GameObjects.
   */
  public getInactiveGameObjects(): Array<GameObjectId> {
    return this.inactiveGameObjects;
  }

  /**
   * Removes a GameObject from being tracked by the game state. Depending on the
   * status, the GameObject will either be hard deleted, or moved to an
   * "inactive pool" where it will be tracked by the game engine, but not
   * implemented.
   *
   * @param goid The instance id of the GameObject to remove.
   *
   * @return If the GameObject was successfully dealt with or not.
   */
  public removeGameObject(goid: GameObjectId): boolean {
    // TODO:
    return true;
  }

  /**
   *
   * @param template
   * @param container
   */
  public spawnFromTemplate(
    template: GameObjectTemplate,
    container?: Array<GameObject>
  ): GameObjectId|false {

    let newGameObject = GameObject.create(template);
    if (container === undefined) {
      this.inactiveGameObjects.push(newGameObject.getId());
    } else {
      container.push(newGameObject);
    }

    return newGameObject.getId();
  }

  /**
   * Adds a GameObject to one of the `_activeGameObjects`, `_culledGameObjects`,
   * `_sleepingGameObjects`, `sceneGraveyard`, `_inactiveGameObjects`, or
   * `_worldGraveyard` GameObject containers.
   * TODO: Don't always add to active.
   *
   * @param gameObject The GameObject to add.
   * @param scene The Scene that houses the containers that hold the
   * GameObjects.
   *
   * @return If the game object was successfully added or not.
   */
  // private _addToContainer<S extends BaseScene>() {
  //   goid: GameObjectId,
  //   scene: S
  // ): boolean {

  //   scene.activeGameObjects.push(gameObject);

  //   return true;
  // }

}

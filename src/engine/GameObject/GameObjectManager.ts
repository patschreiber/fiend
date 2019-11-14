import { IGameObjectManager } from './interfaces/IGameObjectManager';
import {
  GameObjectId,
  GameObjectTemplate
} from '../types/gameobjects';
import { GameObject } from './GameObject';
import { ComponentId } from '../types/components';

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
   * The data structure that tracks all of the Components attached to an
   * instance of a GameObject. The Array indices represent a specific Component
   * type. If new Component types are ever added, they get appended to this
   * pool. If a index ever has `-1` for it's value, that Component has been
   * soft-deleted in the system; new Components of that type cannot be added to
   * the GameObject.
   */
  private _attachedComponents: Array<ComponentId> = new Array(8);

  public spawnFromTemplate(
    template: GameObjectTemplate,
    container?: Array<GameObject>
  ): GameObjectId|false {

    let newGameObject = GameObject.create(template);
    if (container === undefined) {
      this.inactiveGameObjects.push(newGameObject.getId());
      // this.inactiveGameObjects.push(newGameObject.getId()); //TODO: Use this
    } else {
      container.push(newGameObject);
      // container.push(newGameObject.getId()); //TODO: Use this
    }

    return newGameObject.getId();
  }

  // /**
  //  * Spawns a new GameObject in the Scene.
  //  *
  //  * @param goType The type of GameObject to create.
  //  * @param position The position of the created GameObject.
  //  *
  //  * @return The created GameObject id or false if it couldn't be created.
  //  */
  // public spawn<S extends BaseScene>(
  //   goType: string,
  //   position: Coordinate,
  //   scene?: S,
  //   // template?: GameObjectTemplate
  // ): GameObjectId|false {


  //   let GO = null;
  //   switch (goType) {
  //     case "Player":
  //       GO = this._PF.spawn(position);
  //       break;
  //     case "OrdinaryFolk":
  //       GO = this._OFF.spawn(position);
  //       break;
  //     default:
  //       // TODO: Make this a real Error.
  //       console.log('addGameObjectWarning :', `GameObject of type ${goType}
  //       could not be created because it is not a valid type.`);
  //       return false;
  //   }

  //   if (this._addToContainer(GO, scene)) {
  //     return GO.getId();
  //   } else {
  //     console.log('addGameObjectWarning :', `GameObject (id:${GO.getId()})
  //     could not be added to a GameObject container at ${scene}`);
  //     return false;
  //   }
  // }

  // /**
  //  * Adds a GameObject to one of the `_activeGameObjects`, `_culledGameObjects`,
  //  * `_sleepingGameObjects`, `sceneGraveyard`, `_inactiveGameObjects`, or
  //  * `_worldGraveyard` GameObject containers.
  //  * TODO: Don't always add to active.
  //  *
  //  * @param gameObject The GameObject to add.
  //  * @param scene The Scene that houses the containers that hold the
  //  * GameObjects.
  //  *
  //  * @return If the game object was successfully added or not.
  //  */
  // private _addToContainer<S extends BaseScene>(
  //   gameObject: GameObject,
  //   scene: S
  // ): boolean {

  //   scene.activeGameObjects.push(gameObject);

  //   return true;
  // }

}

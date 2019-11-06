import { GameObjectId } from '../types/gameobjects';
import { OrdinaryFolkFactory } from '../GameObject';
import { PlayerFactory } from '../GameObject';
import { GameObject } from './GameObject';
import { IGameObjectManager } from './interfaces/IGameObjectManager';

/**
 * The GameObjectManager class.
 * Manages GameObjects and the containers they belong to.
 */
export class GameObjectManager implements IGameObjectManager {

  /**
   * The OrdinaryFolkFactory GameObject factory.
   */
  private _OFF: OrdinaryFolkFactory;

  /**
   * The PlayerFactory GameObject factory.
   */
  private _PF: PlayerFactory;

  /**
   * Game objects that are considered “active” in the current Scene. Active
   * GameObjects will update and render every frame.
   */
  private _activeGameObjects: Array<GameObject>;

  /**
   * Contains game objects that are present in the scene, but are not being
   * rendered. They are being updated every frame, however. These might be
   * objects that are just out of frame, but may need to be rendered in the near
   * future.
   */
  private _culledGameObjects: Array<GameObject>;

  /**
   * Contains game objects that are present in the scene, but are not be
   * rendered or updated for whatever reason.
   */
  private _sleepingGameObjects: Array<GameObject>;

  /**
   * GameObjects that have been killed, destroyed, or otherwise incapacitated,
   * but shouldn’t be deleted yet will be stored here.
   */
  private _sceneGraveyard: Array<GameObject>;

  /**
   * Game objects that are not present in the scene, but who’s state needs to be
   * maintained, go here. When a scene is unloaded, an entity marked with the
   * “persist” flag will be added to this container.
   */
  private _inactiveGameObjects: Array<GameObject>;

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

    this._PF = new PlayerFactory();
    this._OFF = new OrdinaryFolkFactory();

    this._activeGameObjects = new Array<GameObject>(1000);
    this._culledGameObjects = Array<GameObject>(1000);
    this._sleepingGameObjects = Array<GameObject>(1000);
    this._sceneGraveyard = Array<GameObject>(1000);
    this._inactiveGameObjects = Array<GameObject>(1000);
    // this._worldGraveyard = Array<GameObject>(1000);
  }

  /**
   * Getter for the active GameObjects.
   *
   * @return The container of GameObjects.
   */
  public getActiveGameObjects(): Array<GameObject> {
    return this._activeGameObjects;
  }

  /**
   * Getter for the culled GameObjects.
   *
   * @return The container of GameObjects.
   */
  public getCulledGameObjects(): Array<GameObject> {
    return this._culledGameObjects;
  }

  /**
   * Spawns a new GameObject in the Scene.
   * @param goType The type of GameObject to create.
   * @param position The position of the created GameObject.
   *
   * @return The created GameObject id or false if it couldn't be created.
   */
  public spawn(goType: string, position: Coordinate): GameObjectId|false {

    let GO = null;
    switch (goType) {
      case "Player":
        GO = this._PF.spawn(position);
        break;
      case "OrdinaryFolk":
        GO = this._OFF.spawn(position);
        break;
      default:
        // TODO: Make this a real Error.
        console.log('addGameObjectWarning :', `GameObject of type ${goType} could not be created because it is not a valid type.`);
        return false;
    }

    this._addToContainer(GO, this._activeGameObjects);

    return GO.getId();
  }

  /**
   * Adds a GameObject to one of the `_activeGameObjects`, `_culledGameObjects`,
   * `_sleepingGameObjects`, `sceneGraveyard`, `_inactiveGameObjects`, or
   * `_worldGraveyard` GameObject containers.
   * TODO: Don't always add to active.
   *
   * @param gameObject The GameObject to add.
   * @param container The container to put the GameObject in.
   *
   * @return If the game object was successfully added or not.
   */
  private _addToContainer(
    gameObject: GameObject,
    container: Array<GameObject>
  ): boolean {
    container[gameObject.getId()] = gameObject;

    return true;
  }

}

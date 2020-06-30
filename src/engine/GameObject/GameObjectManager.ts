import { GameObjectId, GameObjectTemplate } from "../types/gameobjects";
import { GameObject } from "./GameObject";
import { IGameObjectManager } from "./interfaces/IGameObjectManager";

/**
 * The GameObjectManager class.
 * Manages GameObjects and the containers they belong to.
 */
export class GameObjectManager implements IGameObjectManager {
  public inactiveGameObjects: Array<GameObjectId>;

  /**
   * The data structure that tracks all of the Components attached to an
   * instance of a GameObject. The Array indices represent a specific Component
   * type. If new Component types are ever added, they get appended to this
   * pool. If a index ever has `-1` for it's value, that Component has been
   * soft-deleted in the system; new Components of that type cannot be added to
   * the GameObject.
   */
  // TODO: YAGNI...
  //  private _attachedComponents: Array<ComponentId> = new Array(8);

  /**
   * Contains game objects that are unique, which means they can only ever
   * appear once in any given save file. A lot of the time, the state of these
   * unique entities needs to be maintained for reference.
   */
  // TODO: YAGNI...
  // private _worldGraveyard: GameObjectContainer;

  /**
   * @constructor
   */
  public constructor() {
    this.inactiveGameObjects = Array<GameObjectId>();
  }

  public getInactiveGameObjects(): Array<GameObjectId> {
    return this.inactiveGameObjects;
  }

  /**
   * @param template The archetype to use when instantiating a new GameObject.
   * @param container The container to add the GameObject to.
   *
   * @return The GameObject ID if it was successfully created, or false if not.
   */
  public spawnFromTemplate(
    template: GameObjectTemplate,
    container?: Array<GameObject>
  ): GameObjectId | false {
    let newGameObject = GameObject.create(template);
    if (container === undefined) {
      this.inactiveGameObjects.push(newGameObject.getId());
    } else {
      container.push(newGameObject);
    }

    return newGameObject.getId();
  }

  /**
   * @param goid The instance id of the GameObject to remove.
   *
   * @return If the GameObject was successfully dealt with or not.
   */
  public removeGameObject(goid: GameObjectId): boolean {
    // TODO:
    console.log("goid", goid);
    return true;
  }
}

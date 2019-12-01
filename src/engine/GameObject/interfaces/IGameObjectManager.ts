import { GameObjectId, GameObjectTemplate } from '../../types/gameobjects';
import { GameObject } from '../GameObject';

/**
 * The IGameObjectManager interface.
 */
export interface IGameObjectManager {

  /**
   * Game objects that are not present in the scene, but who’s state needs to be
   * maintained, go here. When a scene is unloaded, an entity marked with the
   * “persist” flag will be added to this container.
   */
  inactiveGameObjects: Array<GameObjectId>;

  /**
   * Getter for the inactive GameObject container.
   *
   * @return The Array of inactive GameObjects.
   */
  getInactiveGameObjects(): Array<GameObjectId>;

  /**
   * Instantiates a new GameObject based on a template archetype. The template
   * will dictate such things as starting Components and initial value overrides
   * (if applicable).
   * @param template The archetype to use when instantiating a new GameObject.
   * @param container The container to add the GameObject to.
   *
   * @return The GameObject ID if it was successfully created, or false if not.
   */
  spawnFromTemplate(
    template: GameObjectTemplate,
    container?: Array<GameObject>
  ): GameObjectId|false;

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
  removeGameObject(goid: GameObjectId): boolean;

}

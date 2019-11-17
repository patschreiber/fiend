import { GameObjectId, GameObjectTemplate } from '../../types/gameobjects';
import { GameObject } from '../GameObject';

/**
 * The IGameObjectManager interface.
 */
export interface IGameObjectManager {

  inactiveGameObjects: Array<GameObjectId>;

  getInactiveGameObjects(): Array<GameObjectId>;

  spawnFromTemplate(
    template: GameObjectTemplate,
    container?: Array<GameObject>
  ): GameObjectId|false;

  removeGameObject(goid: GameObjectId): boolean;

}

import { GameObject } from '../GameObject';
import { GameObjectId } from '../../types/gameobjects';

/**
 * The IGameObjectManager interface.
 */
export interface IGameObjectManager {

  getActiveGameObjects(): Array<GameObject>;
  getCulledGameObjects(): Array<GameObject>;
  spawn(goType: string, position: Coordinate): GameObjectId|false;
}

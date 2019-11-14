import { BaseScene } from '../scenes/BaseScene';
import { SceneManagerState } from '../SceneManager';
import { GameObjectManager } from '../../GameObject/GameObjectManager';

/**
 * The interface for the [[SceneManager]] class.
 *
 * @interface ISceneManager
 */
export interface ISceneManager {

  state: SceneManagerState;
  currentScene: BaseScene;
  GameObjectManager: GameObjectManager;

  loadScene<S extends BaseScene>(scene: new () => S): void;
  unloadScene(): void;
  update(delta: number): void;
}

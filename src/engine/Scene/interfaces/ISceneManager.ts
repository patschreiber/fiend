import { BaseScene } from '../scenes/BaseScene';
import { GameObject } from '../../GameObject';
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
  unloadScene(scene: BaseScene): void;
  addToScene(gameObject: GameObject): void;
  removeFromScene(gameObject: GameObject): void;
  update(delta: number): void;
}

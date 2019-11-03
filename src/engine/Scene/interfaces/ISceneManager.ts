import { BaseScene } from '../scenes/BaseScene';
import { GameObject } from '../../GameObject';

/**
 * The interface for the [[SceneManager]] class.
 *
 * @interface ISceneManager
 */
export interface ISceneManager {
  currentScene: BaseScene;
  // renderQueue: Array<GameObject>;

  loadScene(scene: BaseScene): void;
  unloadScene(scene: BaseScene): void;
  addToScene(gameObject: GameObject): void;
  removeFromScene(gameObject: GameObject): void;
  moveToQueue(gameObject: GameObject): void;
}
import { ComponentManager } from '../../Component/ComponentManager';
import { GameObjectManager } from '../../GameObject/GameObjectManager';
import { SceneManagerState } from '../SceneManager';
import { BaseScene } from '../scenes/BaseScene';

/**
 * The interface for the [[SceneManager]] class.
 *
 * @interface ISceneManager
 */
export interface ISceneManager {

  /**
   * The current state of the SceneManager.
   */
  state: SceneManagerState;

   /**
    * The [[GameObjectManager]].
    */
  GameObjectManager: GameObjectManager;

   /**
    * The [[ComponentManager]].
    */
  ComponentManager: ComponentManager;

   /**
    * The currently-loaded Scene.
    */
  currentScene: BaseScene;

  /**
   * Loads a new Scene.
   *
   * @param scene The Scene to load.
   */
  loadScene<S extends BaseScene>(scene: new () => S): void;

  /**
   * Unloads a Scene.
   *
   * @param scene The Scene to unload.
   */
  unloadScene(): void;

}

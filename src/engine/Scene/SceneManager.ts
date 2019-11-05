import { GameObject } from '../GameObject';
import { BaseScene } from './index';
import { TestScene } from './scenes/TestScene';
import { ISceneManager } from './interfaces/ISceneManager';
import { GameObjectManager } from '../GameObject/GameObjectManager';
import { ComponentManager } from '../Component/ComponentManager';

enum SceneManagerState {
  Ready,
  Loading,
  Unloading,
  Error
}

/**
 * The SceneManager class.
 * The scene manager keeps track of the scenes in a game, allowing to switch
 * between them. At it's basic, it provides a centralized place to load and
 * unload the scenes, keeping track of which one is loaded and handle unloading
 * that scene when a new one is loaded.
 */
export class SceneManager implements ISceneManager {

  /**
   * The number of currently-active game objects.
   */
  public gameObjectCount: number;
  public GOM: GameObjectManager;
  public CM: ComponentManager;

  /**
   * The currently-loaded Scene.
   */
  public currentScene: BaseScene;

  /**
   * @constructor
   */
  public constructor(gom: GameObjectManager, cm: ComponentManager) {
    this.loadScene(new TestScene());
  }

  /**
   * Loads a new Scene.
   *
   * @param scene The Scene to load.
   */
  public loadScene(scene: BaseScene): void {
    // TODO: Finish
    this.currentScene = scene;
    this.gameObjectCount = scene.gameObjects.length;
  }

  /**
   * Unloads a Scene.
   *
   * @param scene The Scene to unload.
   */
  public unloadScene(scene: BaseScene): void {
    // TODO: Finish
    this.gameObjectCount = 0;
  }

  /**
   * Adds a GameObject to the current Scene.
   *
   * @param gameObject The GameObject to add to the Scene.
   */
  public addToScene(gameObject: GameObject): void {
    if (this.gameObjectCount < this.currentScene.maxActiveEntities) {
      // TODO: Finish
    }

    this.gameObjectCount++;
  }

  /**
   * Removes a GameObject from the current Scene.
   *
   * @param gameObject The GameObject to remove from the Scene.
   */
  public removeFromScene(gameObject: GameObject): void {
    // TODO: Finish
    this.gameObjectCount--;
  }

  /**
   * Moves a GameObject from one Scene's GameObject queue to another. Used for
   * when GameObjects become inactive.
   *
   * @param gameObject
   */
  public moveToQueue(gameObject: GameObject): void {
    // TODO: Finish
  }

  public update(delta: number): void {
    this.currentScene.update(delta);
  }
}

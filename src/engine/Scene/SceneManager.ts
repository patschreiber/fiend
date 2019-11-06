import { GameObject } from '../GameObject';
import { BaseScene } from './index';
import { TestScene } from './scenes/TestScene';
import { ISceneManager } from './interfaces/ISceneManager';
import { GameObjectManager } from '../GameObject/GameObjectManager';
import { ComponentManager } from '../Component/ComponentManager';

/**
 * Defines the different states that the SceneManager can be in.
 * `Ready`: The SceneManager is ready to attempt an action that will change it's
 * state.
 * `Loading`: The SceneManager is currently loading a Scene.
 * `Unloading`: The SceneManager is currently unloading a Scene.
 * `Error`: The SceneManager is stuck in an Error state. Reloading the
 * SceneMananger may fix the problem.
 */
export enum SceneManagerState {
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
   * The current state of the SceneManager.
   */
  public state: SceneManagerState;

  /**
   * The number of currently-processed game objects.
   */
  public gameObjectCount: number;

  /**
   * The [[GameObjectManager]].
   */
  public GameObjectManager: GameObjectManager;

  /**
   * The [[ComponentManager]].
   */
  public ComponentManager: ComponentManager;

  /**
   * The currently-loaded Scene.
   */
  public currentScene: BaseScene;

  /**
   * @constructor
   *
   * @param gom A [[GameObjectManager]] instance.
   * @param cm A [[ComponentManager]] instance.
   */
  public constructor(gom: GameObjectManager, cm: ComponentManager) {
    this.state = SceneManagerState.Ready

    this.ComponentManager = cm;
    this.GameObjectManager = gom;

    this.loadScene(TestScene);
  }

  /**
   * Loads a new Scene.
   *
   * @param scene The Scene to load.
   */
  public loadScene<S extends BaseScene>(scene: new () => S): void {
    this.state = SceneManagerState.Loading;

    // TODO: Finish
    this.currentScene = new scene();
    for (let initialGO in this.currentScene.initialGameObjectManifest) {
      console.log('initialGO :', initialGO);
      // this.GameObjectManager.spawn(initialGO.type, initialGO.position, );
    }
    this.GameObjectManager.spawn("OrdinaryFolk", {x:100,y:100}, this.currentScene);
    console.log('this.activeGameObjects :', this.currentScene.activeGameObjects);

    this.state = SceneManagerState.Ready;
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
  public addToScene(goType: GameObject): void {
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
   * Updates the Scene's GameObjects.
   *
   * @param delta The time difference between frames. Provided by the game's
   * main game loop.
   * @see FiendGame.main()
   */
  public update(delta: number): void {
    this.currentScene.update(delta);
  }
}

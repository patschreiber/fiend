import { BaseScene } from '.';
import { ComponentManager } from '../Component/ComponentManager';
import { GameObjectManager } from '../GameObject/GameObjectManager';
import { ISceneManager } from './interfaces/ISceneManager';
import { TestScene } from './scenes/TestScene';

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

  public state: SceneManagerState;

  public GameObjectManager: GameObjectManager;

  public ComponentManager: ComponentManager;

  public currentScene: BaseScene;

  /**
   * @constructor
   *
   * @param gom A [[GameObjectManager]] instance.
   * @param cm A [[ComponentManager]] instance.
   */
  public constructor(gom: GameObjectManager, cm: ComponentManager) {
    this.state = SceneManagerState.Ready;

    this.ComponentManager = cm;
    this.GameObjectManager = gom;

    this.loadScene(TestScene);
  }

  /**
   * @param scene The Scene to load.
   */
  public loadScene<S extends BaseScene>(scene: new () => S): void {
    this.state = SceneManagerState.Loading;

    // Load the scene/
    this.currentScene = new scene();
    // We dumbly create every GameObject in the Scene's manifest right now
    // regardless of if they are a special type. This will become more
    // intelligent as features become built.
    for (let template of this.currentScene.initialGameObjectManifest) {
      let goid = this.GameObjectManager.spawnFromTemplate(
        template,
        this.currentScene.activeGameObjects
      );

      // Once the GameObject is successfully created, we then turn to creating
      // it's components.
      if (goid) {
        this.ComponentManager.spawnFromTemplate(template["components"], goid);
      }
    }

    this.state = SceneManagerState.Ready;
  }

  /**
   * @param scene The Scene to unload.
   */
  public unloadScene(): void {}

  /**
   * Updates the Scene's GameObjects.
   *
   * @param delta The time difference between frames. Provided by the game's
   * main game loop.
   * @see FiendGame.main()
   */
  public update(delta: number): void {

    // for (let go of this.currentScene.activeGameObjects) {
    //   if (go === undefined) {
    //     throw new Error(
    //       `There was an undefined GameObject, they should be contiguous!`
    //     );
    //   }

    //   let posC = this.ComponentManager
    //     .getComponent("PositionComponent", go.getId());

    //   if (go.getId() === 4) {
    //     posC["localPosition"].x = posC["localPosition"].x + (10 * delta);
    //   }
    // }

    // this.currentScene.update(delta);
  }

}

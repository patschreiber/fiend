import { ISceneManager } from './interfaces/ISceneManager';

import { GameObject } from '../GameObject';
import { BaseScene } from './index';
import { TestScene } from './scenes/TestScene';
import { GameObjectManager } from '../GameObject/GameObjectManager';
import { ComponentManager } from '../Component/ComponentManager';
import { LifeforceComponent } from '../Component';
import { ComponentFactory } from '../Component/ComponentFactory/ComponentFactory';
import { Template } from '../templates/Template';

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
    this.state = SceneManagerState.Ready;

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

    // TODO: This is all a test.
    let a = ComponentFactory.create(LifeforceComponent, {currentHP: 100, maxHP: 999});
    let b = ComponentFactory.create(LifeforceComponent);
    let c = ComponentFactory.create(LifeforceComponent, {currentHP: 37});
    console.log('a :', a);
    console.log('b :', b);
    console.log('c :', c);

    // this.ComponentManager.addComponent<BrainComponent>(C);

    this.currentScene = new scene();
    // We dumbly create every GameObject in the Scene's manifest right now
    // regardless of if they are a special type. This will become more
    // intelligent as features become built.
    for (let template of this.currentScene.initialGameObjectManifest) {
      let goid = this.GameObjectManager.spawnFromTemplate(
        template,
        this.currentScene.activeGameObjects
      );

      if (goid) {
        this.ComponentManager.spawnFromTemplate(template["components"], goid);
      }
    }
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
    // this.gameObjectCount = 0;
  }

  /**
   * Adds a GameObject to the current Scene.
   *
   * @param gameObject The GameObject to add to the Scene.
   */
  public addToScene(goType: GameObject): void {
    // if (this.gameObjectCount < this.currentScene.maxActiveEntities) {
      // TODO: Finish
    // }

    // this.gameObjectCount++;
  }

  /**
   * Removes a GameObject from the current Scene.
   *
   * @param gameObject The GameObject to remove from the Scene.
   */
  public removeFromScene(gameObject: GameObject): void {
    // TODO: Finish
    // this.gameObjectCount--;
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

  public test() {

  }
}

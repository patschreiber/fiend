import {
  GameObject
} from '../../GameObject';
import { IScene } from '../interfaces/IScene';
import { BaseAtlas } from '../../../atlases/BaseAtlas';
import { GameObjectManifest } from '../../types/gameobjects';

/**
 * The BaseScene class.
 * All Scenes inherit from this class.
 */
export abstract class BaseScene implements IScene {

  /**
   * The max amount of active GameObjects that can be present in the Scene. Some
   * Scenes will have a smaller max entity count if the Scene is smaller e.g. if
   * the scene is a room in a house. We generally only care about "active"
   * GameObjects since there will be overhead when maintaining their state and
   * redrawing them.
   * TODO: Figure out what happens if this limit is reached.
   *
   * @internal This could be an "importance weight" where less important game
   * objects are purged.
   */
  public maxActiveEntities: number;

  /**
   * A list of the GameObjects that should be initially present when the Scene
   * loads. Contains templates so the factory classes can build the GameObjects.
   */
  public readonly initialGameObjectManifest: GameObjectManifest;

  /**
   * The list of active GameObjects. Every game object in this list will have
   * their state updated every frame, if possible.
   * TODO: Make the type a Union like with Components.
   */
  public gameObjects: Array<any>;

  /**
   * The tilemap associated with this Scene.
   * TODO: Make this of type TileMap when it's created. Edit: Change this to be
   * "atlas"
   */
  public tileMap: BaseAtlas;

  /**
   * Game objects that are considered “active” in the current Scene. Active
   * GameObjects will update and render every frame.
   */
  public activeGameObjects: Array<GameObject>;

  /**
   * Contains game objects that are present in the scene, but are not being
   * rendered. They are being updated every frame, however. These might be
   * objects that are just out of frame, but may need to be rendered in the near
   * future.
   */
  public culledGameObjects: Array<GameObject>;


  /**
   * Contains game objects that are present in the scene, but are not be
   * rendered or updated for whatever reason.
   */
  public sleepingGameObjects: Array<GameObject>;

  /**
   * GameObjects that have been killed, destroyed, or otherwise incapacitated,
   * but shouldn’t be deleted yet will be stored here.
   */
  public sceneGraveyard: Array<GameObject>;

  /**
   * @constructor
   */
  public constructor() {

    // Initialize the gameObjects container.
    // TODO: Remove
    this.gameObjects = [];

    this.activeGameObjects = new Array<GameObject>();
    this.culledGameObjects = Array<GameObject>();
    this.sleepingGameObjects = Array<GameObject>();
    this.sceneGraveyard = Array<GameObject>();
  }

  /**
   * Updates every [[GameObject]] currently active in the scene,
   *
   * @param delta The time difference between frames. Provided by the game's
   * main game loop.
   * @see FiendGame.main()
   */
  public update(delta: number): void {
    // TODO:
    // for (let gameObject of this.gameObjects) {
    //   if (gameObject.hasComponent("MovementComponent")) {
    //     gameObject.update(delta, this.sceneBoundaries);
    //   } else {
    //     gameObject.update(delta);
    //   }
    // }
    for (let gameObject of this.activeGameObjects) {
      // gameObject.update(delta);
    }

    for (let gameObject of this.culledGameObjects) {
      // gameObject.update(delta);
    }
  }

}

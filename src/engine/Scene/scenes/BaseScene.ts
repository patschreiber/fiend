import { BaseAtlas } from '../../../atlases/BaseAtlas';
import { GameObject } from '../../GameObject';
import { ITexture } from '../../Render/textures/interfaces/ITexture';
import { GameObjectManifest } from '../../types/gameobjects';
import { IScene } from '../interfaces/IScene';

/**
 * The BaseScene class.
 * All Scenes inherit from this class.
 */
export abstract class BaseScene implements IScene {

  public maxActiveEntities: number;

  public readonly initialGameObjectManifest: GameObjectManifest;

  public gameObjects: Array<any>;

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

  public texturePool: Array<ITexture>;

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
   // TODO: We dont need this. Can just grab the List of game objects from FiendGame by calling the SceneManager
  public update(delta: number): void {
  }

}

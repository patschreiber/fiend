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

  public tileMap: BaseAtlas;

  public texturePool: Array<ITexture>;

  public activeGameObjects: Array<GameObject>;

  public culledGameObjects: Array<GameObject>;

  public sleepingGameObjects: Array<GameObject>;

  public sceneGraveyard: Array<GameObject>;

  /**
   * @constructor
   */
  public constructor() {

    this.activeGameObjects = new Array<GameObject>();
    this.culledGameObjects = new Array<GameObject>();
    this.sleepingGameObjects = new Array<GameObject>();
    this.sceneGraveyard = new Array<GameObject>();
    this.texturePool = new Array<ITexture>();
  }

}

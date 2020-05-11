import { GameObject } from '../../GameObject';
import { GameObjectManifest } from '../../types/gameobjects';
import { TexturePoolItem } from '../../types/rendering';

/**
 * The IScene interface. All Scenes will implement this interface.
 */
export interface IScene {

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
  maxActiveEntities: number;

  /**
   * A list of the GameObjects that should be initially present when the Scene
   * loads. Contains templates so the factory classes can build the GameObjects.
   */
  readonly initialGameObjectManifest: GameObjectManifest;

  /**
   * The tilemap associated with this Scene.
   * TODO: Make this of type TileMap when it's created. Edit: Change this to be
   * "atlas"
   */
  tileMap: any;

  /**
   * Game objects that are considered “active” in the current Scene. Active
   * GameObjects will update and render every frame.
   */
  activeGameObjects: Array<GameObject>;

  /**
   * Contains game objects that are present in the scene, but are not being
   * rendered. They are being updated every frame, however. These might be
   * objects that are just out of frame, but may need to be rendered in the near
   * future.
   */
  culledGameObjects: Array<GameObject>;

  /**
   * Contains game objects that are present in the scene, but are not be
   * rendered or updated for whatever reason.
   */
  sleepingGameObjects: Array<GameObject>;

  /**
   * GameObjects that have been killed, destroyed, or otherwise incapacitated,
   * but shouldn’t be deleted yet will be stored here.
   */
  sceneGraveyard: Array<GameObject>;

  /**
   * The pool of textures to use for GameObjects. Having textures pre-loaded in
   * a pool enables us to implement the "flyweight" pattern, where each
   * GameObject that shares a texture with another GameObject uses the reference
   * to an already-loaded texture, instead of instantiating a new Texture.
   */
  texturePool: Array<TexturePoolItem>;

}

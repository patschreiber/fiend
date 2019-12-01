import { ITexture } from '../../Render/textures/interfaces/ITexture';
import { GameObjectManifest } from '../../types/gameobjects';

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
   * The list of active GameObjects. Every game object in this list will have
   * their state updated every frame, if possible.
   * TODO: Make the type a Union like with Components.
   */
  gameObjects: Array<any>;

  /**
   * The tilemap associated with this Scene.
   * TODO: Make this of type TileMap when it's created. Edit: Change this to be
   * "atlas"
   */
  tileMap: any;

  /**
   * The pool of textures to use for GameObjects. Having textures pre-loaded in
   * a pool enables us to implement the "flyweight" pattern, where each
   * GameObject that shares a texture with another GameObject uses the reference
   * to an already-loaded texture, instead of instantiating a new Texture.
   *
   */
  texturePool: Array<ITexture>;

  update(delta: number): void;
}

import { Player } from '../../GameObject';
import { IScene } from './IScene';

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
   * The list of active GameObjects. Every game object in this list will have
   * their state updated every frame, if possible.
   * TODO: Make the type a Union like with Components.
   */
  public gameObjects: Array<any>;

  /**
   * The tilemap associated with this Scene.
   * TODO: Make this of type TileMap when it's created.
   */
  public tileMap: any;

  /**
   * @constructor
   */
  public constructor() {

    // Initialize the gameObjects container.
    this.gameObjects = [];
  }

  /**
   * Updates every [[GameObject]] currently active in the scene,
   *
   * @param delta The time difference between frames. Provided by the game's
   * main game loop.
   * @see FiendGame.main()
   */
  public update(delta: number): void {

    for (let gameObject of this.gameObjects) {
      gameObject.update(delta);
    }
  }

  /**
   * Retrieves the instance of the [[Player]] in the current scene. Scenes may
   * have to retrieve the player differently from one another, so it's up to the
   * sublass to decide.
   *
   * @return The instance of the Player from the scene.
   */
  public abstract getPlayer(): Player;

}

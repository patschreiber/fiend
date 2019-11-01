import { Player } from '../../GameObject';
import { IScene } from './IScene';
import { BaseAtlas } from '../../../atlases/BaseAtlas';

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
   * TODO: Make this of type TileMap when it's created. Edit: Change this to be
   * "atlas"
   */
  public tileMap: BaseAtlas;

  public sceneBoundaries: Array<number>;

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
    // TODO:
    // for (let gameObject of this.gameObjects) {
    //   if (gameObject.hasComponent("MovementComponent")) {
    //     gameObject.update(delta, this.sceneBoundaries);
    //   } else {
    //     gameObject.update(delta);
    //   }
    // }
    for (let gameObject of this.gameObjects) {
      gameObject.update(delta);
    }
  }

  /**
   * Calculates the scene boundaries in pixels.
   * TODO: This is probably a stop gap solution until colliders come into play.
   *
   * @return An array of game boundaries in `[top, right, bottom, left]` order.
   */
  public calculateSceneBoundaries(): Array<number> {
    let pxSize = this.tileMap.gridElemPixelSize;

    let bottom = this.tileMap.getGridHeight() * pxSize;
    let right = this.tileMap.getGridWidth() * pxSize;

    return [0,right,bottom,0];
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

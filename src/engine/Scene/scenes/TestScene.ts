import { IScene } from './IScene';
import { BaseScene } from './BaseScene';
import { PlayerFactory, OrdinaryFolkFactory, Player } from '../../GameObject';
import { Overworld } from '../../../atlases/Overworld';

/**
 * The TestScene class.
 * This will be the Scene to test out new things.
 */
export class TestScene extends BaseScene implements IScene {

  /**
   * @constructor
   */
  public constructor() {
    super();

    this.maxActiveEntities = 1000;
    this.tileMap = new Overworld();

    let pf = new PlayerFactory();
    this.gameObjects.push(pf.spawn({x:125,y:125}));

    let off = new OrdinaryFolkFactory();
    this.gameObjects.push(off.spawn({x:200,y:100}));

    // TODO: This is a test to test event emission.
    document.getElementById('game-pane').addEventListener(
      'player_died',
      (event: CustomEvent) => this.respondToGameObjectCreation(event),
      false
    );
  }

  /**
   * Retrieves the instance of the [[Player]] in the current scene. Scenes may
   * have to retrieve the player differently from one another, so it's up to the
   * sublass to decide.
   *
   * @return The instance of the Player from the scene.
   */
  public getPlayer(): Player {
    return this.gameObjects[0];
  }

  /**
   * TEST
   * TODO: Remove
   *
   * @param event The event to respond to.
   */
  public respondToGameObjectCreation(event: CustomEvent) {
    console.log('event.detail.go_id :', event.detail.go_id);
  }

}

import { IScene } from '../interfaces/IScene';
import { BaseScene } from './BaseScene';
import {
  PlayerFactory,
  OrdinaryFolkFactory,
  Player,
  GameActor } from '../../GameObject';
import { OverworldAtlas } from '../../../atlases/OverworldAtlas';

/**
 * The TestScene class.
 * This will be the Scene to test out new things.
 */
export class TestScene extends BaseScene implements IScene {

  private _PF: PlayerFactory;
  private _OFF: OrdinaryFolkFactory

  /**
   * @constructor
   */
  public constructor() {
    super();

    this.maxActiveEntities = 1000;
    this.tileMap  = new OverworldAtlas();

    this._PF = new PlayerFactory();
    this._OFF = new OrdinaryFolkFactory();

    this.sceneBoundaries = this.calculateSceneBoundaries();

    this.gameObjects.push(this._PF.spawn({x:125,y:125}));
    this.gameObjects.push(this._OFF.spawn({x:200,y:100}));

    // this.gameObjects.push(this.loadDummies(900));

    // this.gameObjects.push(this._PF.spawn({x:200,y:200}));

    // Stress test w/20,000 entities.
    // for(let i=0; i<100; i++) {
    //   this.gameObjects.push(this._OFF.spawn({x:200,y:100}));
    // }

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

    // The Player should always be the first gameObject loaded in the Test
    // Scene.
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

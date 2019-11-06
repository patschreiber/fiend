import { IScene } from '../interfaces/IScene';
import { BaseScene } from './BaseScene';
import {
  PlayerFactory,
  OrdinaryFolkFactory,
  Player,
} from '../../GameObject';
import { OverworldAtlas } from '../../../atlases/OverworldAtlas';
import { GameObjectManifest } from '../../types/gameobjects';
import { Template } from '../../templates/Template';

/**
 * The TestScene class.
 * This will be the Scene to test out new things.
 */
export class TestScene extends BaseScene implements IScene {

  /**
   * @inheritdoc
   */
  public static readonly maxActiveEntities = 1000;

  /**
   * @inheritdoc
   */
  public readonly initialGameObjectManifest: GameObjectManifest = [
    Template.get("player"),
    Template.get("ordinary_folk"),
    Template.get("ordinary_folk"),
    Template.mutate("player", ["position"], [{x:999,y:999}]) // Example of overriding a template's default values.
  ];

  private _PF: PlayerFactory;
  private _OFF: OrdinaryFolkFactory

  /**
   * @constructor
   */
  public constructor() {
    super();

    this.tileMap  = new OverworldAtlas();

    console.log('this.initialGameObjectManifest :', this.initialGameObjectManifest);

    // this._PF = new PlayerFactory();
    // this._OFF = new OrdinaryFolkFactory();

    // this.activeGameObjects.push(this._PF.spawn({x:125,y:125}));
    // this.activeGameObjects.push(this._OFF.spawn({x:200,y:100}));

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
    // return this.activeGameObjects[0];
    return new Player(this._PF, {x:100,y:100});
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

import { IScene } from '../interfaces/IScene';
import { BaseScene } from './BaseScene';
import { OverworldAtlas } from '../../../atlases/OverworldAtlas';
import { GameObjectManifest, TemplateType } from '../../types/gameobjects';
import { Template } from '../../templates/Template';
import { GameObject } from '../../GameObject';

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
    Template.get("Player"),
    Template.get("OrdinaryFolk"),
    Template.get(TemplateType.OrdinaryFolk), // You can use the TemplateType enum as well.
    Template.mutate("Player", ["position"], [{x:999,y:999}]) // Example of overriding a template's default values.
  ];

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
   * @inheritdoc
   */
  public getPlayer(): GameObject {
    // TODO...
    return GameObject.create(Template.get("Player"));
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

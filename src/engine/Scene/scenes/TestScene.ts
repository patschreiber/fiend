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
    Template.mutate("Player", ["tags"], [["player_2", "special", "keep"]]) // Example of overriding a template's default values.
  ];

  /**
   * @constructor
   */
  public constructor() {
    super();

    this.tileMap  = new OverworldAtlas();

    console.log('this.initialGameObjectManifest :', this.initialGameObjectManifest);

    // TODO: This is a test to test event emission.
    document.getElementById('game-pane').addEventListener(
      'player_died',
      (event: CustomEvent) => this.respondToGameObjectCreation(event),
      false
    );
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

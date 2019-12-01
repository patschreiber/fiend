import { OverworldAtlas } from '../../../atlases/OverworldAtlas';
import { OrdinaryFolkTexture } from '../../Render/textures/ordinaryfolk.tex';
import { PlayerTexture } from '../../Render/textures/player.tex';
import { Template } from '../../templates/Template';
import { GameObjectManifest, TemplateType } from '../../types/gameobjects';
import { IScene } from '../interfaces/IScene';
import { BaseScene } from './BaseScene';

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

    // TODO: Hardcoded for now. There will be a better way. When a GameObject is
    // created, we should check the texture pool to see if it's associated tex
    // is already present. If not, add to texture pool.
    this.texturePool.push(new PlayerTexture());
    this.texturePool.push(new OrdinaryFolkTexture());

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

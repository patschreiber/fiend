import { ObjectMutator as OM } from '../utilities/ObjectMutator';
import {
  GameObjectTemplate,
  TemplateType
} from '../types/gameobjects';
import {
  LifeforceComponent,
  ColliderComponent,
  PositionComponent,
  VelocityComponent,
  BrainComponent,
  Component
} from '../Component';

/**
 * The structure of a template collection.
 */
type TemplateStruct = {
  [templateKey: string]: GameObjectTemplate;

}
/**
 * The Template class.
 */
export class Template {

  /**
   * The structured Template data. Specific template data is available at each
   * key of the structure.
   */
  protected static readonly gameObjectTemplates: TemplateStruct = {
    "Player": {
      type: TemplateType.Player,
      components: [
        [ColliderComponent],
        [LifeforceComponent, {currentHP: 100, maxHP: 100}],
        [PositionComponent],
        [VelocityComponent],
      ]
    },
    "OrdinaryFolk": {
      type: TemplateType.OrdinaryFolk,
      components: [
        [BrainComponent],
        [LifeforceComponent],
        [PositionComponent],
        [VelocityComponent],
      ],
      tags: ["ghost", "no collider"]
    },
  }

  /**
   * Retrieves a specified GameObjectTemplate.
   *
   * @param template The key of the requested GameObject template.
   *
   * @return The desired GameObject template.
   *
   * @example
   * `Template.get("player");` will get the template data for the player.
   */
  public static get<K extends keyof TemplateStruct>(
    template: K
  ): GameObjectTemplate {
    return Template.gameObjectTemplates[template];
  }

  /**
   * Provides a mutable version of the GameObjectTemplate so the caller can
   * override the initial values of the template. Note: The index of
   * `properties` corresponds to the same index in the `values` array.
   *
   * @param template The key of the requested GameObject template.
   * @param properties An array of GameObjectTemplate property keys to override.
   * @param values An array of GameObjectTemplate property values to override.
   *
   * @return The mutated version of the template.
   */
  public static mutate<K extends keyof GameObjectTemplate>(
    template: keyof TemplateStruct,
    properties: Array<K>,
    values: Array<GameObjectTemplate[K]>
  ): Mutable<GameObjectTemplate> {
    let mutantTemplate = OM.clone(Template.gameObjectTemplates[template]);

    for (let i in properties) {
      mutantTemplate[properties[i]] = values[i];
    }

    return mutantTemplate;
  }
}

// ORDINARY FOLK
//   public draw(ctx: CanvasRenderingContext2D): void {
//     ctx.beginPath();
//     ctx.rect(this.position.x, this.position.y, 20, 20);
//     ctx.fillStyle = "#FF0000";
//     ctx.fill();
//     ctx.closePath();
//   }

//   /**
//    * Draws the Player entity
//    *
//    * @param ctx The canvas context.
//    */
//    public draw(ctx: CanvasRenderingContext2D) {

//     ctx.beginPath();
//     ctx.arc(this.position.x, this.position.y, 10, 0, Math.PI*2);
//     ctx.fillStyle = "#0095DD";
//     ctx.fill();
//     ctx.closePath();
//   }

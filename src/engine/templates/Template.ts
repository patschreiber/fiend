import { GameObjectTemplate } from '../types/gameobjects';
import { ObjectMutator as OM } from '../utilities/ObjectMutator';

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
    "player": {
      type: "Player",
      position: {x:125,y:125},
      components: [
        "BrainComponent",
        "ColliderComponent",
        "LifeforceComponent",
        "MovementComponent"
        ]
    },
    "ordinary_folk": {
      type: "OrdinaryFolk",
      position: {x:200,y:100},
      components: [
        "MovementComponent"
      ]
    },
  }

  /**
   * Retrieves a specified [[GameObjectTemplate]].
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

    // for (let i=0; i<properties.length; i++) {
    for (let i in properties) {
      mutantTemplate[properties[i]] = values[i];
    }

    return mutantTemplate;
  }
}

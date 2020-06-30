import { Asset } from "../structs/enums/rendering_enums";
import { Component } from "./Component";
import { IComponent } from "./interfaces/IComponent";

export interface IRenderComponentMembers extends IComponentMembers {}

/**
 * The RenderComponent component.
 *
 * @extends [[Component]]
 */
export class RenderComponent extends Component
  implements IComponent, IRenderComponentMembers {
  public textureId: Asset;

  /**
   * The RenderComponent's component type id.
   */
  private static readonly _type: string = "RenderComponent";

  /**
   * The RenderComponent's default values.
   */
  private static defaults: IRenderComponentMembers = {
    // Render the NullTexture if a specific texture wasn't set.
    textureId: Asset.NullTexture,
  };

  /**
   * @constructor
   * @param texture The texture of the GameObject.
   * @param overrides
   */
  public constructor(overrides?: Partial<IRenderComponentMembers>) {
    super();
    Object.assign(this, RenderComponent.defaults);
    Object.assign(this, overrides);
  }

  public getTypeId(): string {
    return RenderComponent._type;
  }
}

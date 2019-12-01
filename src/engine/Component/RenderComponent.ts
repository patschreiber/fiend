<<<<<<< HEAD
import { ITexture } from '../Render/ITexture';
=======
import { ITexture } from '../Render/textures/interfaces/ITexture';
>>>>>>> Shifted some comments around
import { Component } from './Component';
import { IComponent } from './interfaces/IComponent';

export interface IRenderComponentMembers extends IComponentMembers {}

/**
 * The RenderComponent component.
 *
 * @extends [[Component]]
 */
export class RenderComponent
  extends Component
  implements IComponent, IRenderComponentMembers
{

  public Sprite: ITexture;

  /**
   * The RenderComponent's component type id.
   */
  private static readonly _type: string = "RenderComponent";

  private static defaults: IRenderComponentMembers = {};

  /**
   * @constructor
   * @param texture The texture of the GameObject.
   * @param overrides
   */
  public constructor(
    texture?: ITexture,
    overrides?: Partial<IRenderComponentMembers>
  ) {
    super();
    this.Sprite = texture;
    Object.assign(this, RenderComponent.defaults);
    Object.assign(this, overrides);
  }

  public getTypeId(): string {
    return RenderComponent._type;
  }

  public draw(ctx: CanvasRenderingContext2D, position: Coordinate): void {
    ctx.beginPath();
    ctx.arc(position.x, position.y, 10, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
  }

}

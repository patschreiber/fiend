import { Component } from './Component';
import { IComponent } from './interfaces/IComponent';

export interface IRenderComponentMembers extends IComponentMembers {}

/**
 * The RenderComponent component.
 *
 * @extends [[Component]]
 */
export class RenderComponent extends Component implements IComponent, IRenderComponentMembers {

  /**
   * The LifeforceComponents's component type id.
   */
  private static readonly _type: string = "RenderComponent";

  private static defaults: IRenderComponentMembers = {};

  /**
   * @constructor
   * @internal We use [[Partial]] to declare every
   * @param args (optional) The members of the class.
   */
  public constructor(overrides?: Partial<IRenderComponentMembers>) {
    super();
    Object.assign(this, RenderComponent.defaults);
    Object.assign(this, overrides);
  }

  /**
   * Retrieves the type id of the component. Used when fetching or checking a
   * specific component for a [[GameObject]].
   */
  public getTypeId(): string {
    return RenderComponent._type;
  }

  /**
   * Draws the Player entity
   *
   * @param ctx The canvas context.
   * @param posX The current X-asis position for the model.
   * @param posY The current Y-axis position for the model.
   */
  public draw(ctx: CanvasRenderingContext2D, position: Coordinate) {
    ctx.beginPath();
    ctx.arc(position.x, position.y, 10, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
  }

}

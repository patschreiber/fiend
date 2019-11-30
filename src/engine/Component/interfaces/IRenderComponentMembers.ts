import { ITexture } from '../../Render/ITexture';
import { IRenderComponentMembers } from '../RenderComponent';
import { Component } from '../Component';

/**
 * The IRederComponentMembers interface.
 */
interface IRederComponentMembers extends Component {

  /**
   * @var Sprite The texture to render.
   */
  Sprite: ITexture;

  /**
   * @constructor
   * @internal We use [[Partial]] to declare every
   * @param args (optional) The members of the class.
   */
  constructor(
    texture?: ITexture,
    overrides?: Partial<IRenderComponentMembers>
  ): void;

  /**
   * Retrieves the type id of the component. Used when fetching or checking a
   * specific component for a [[GameObject]].
   */
  getTypeId(): string;

  /**
   * Draws the Player entity
   *
   * @param ctx The canvas context.
   * @param posX The current X-asis position for the model.
   * @param posY The current Y-axis position for the model.
   */
  draw(ctx: CanvasRenderingContext2D, position: Coordinate): void;
}

import { ITexture } from '../../Render/textures/interfaces/ITexture';
import { IRenderComponentMembers } from '../RenderComponent';
import { IComponent } from './IComponent';

/**
 * The IRederComponentMembers interface.
 */
export interface IRederComponentMembers extends IComponent {

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

import { ITexture } from './interfaces/ITexture';

/**
 * The BaseTexture class. All textures will extend this class.
 * @abstract
 * @implements ITexture
 */
export abstract class BaseTexture implements ITexture {

  public readonly Texture: HTMLImageElement;

  /**
   * The Texture's type id.
   */
  protected readonly _type: string;

  /**
   * @constructor
   *
   * @param typeId The string name identifier of the texture.
   * @param imgElem The image element to use as the texture.
   */
  constructor(typeId: string, imgElem: HTMLImageElement) {
    this._type = typeId;
    this.Texture = imgElem;
  }

  public getTypeId(): string {
    return this._type;
  }
}

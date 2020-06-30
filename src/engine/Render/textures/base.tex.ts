import { Asset } from "../../structs/enums/rendering_enums";
import { ITexture } from "./interfaces/ITexture";

/**
 * The BaseTexture class. All textures will extend this class.
 * @abstract
 * @implements ITexture
 */
export abstract class BaseTexture implements ITexture {
  public readonly resource: HTMLImageElement;

  /**
   * The Texture's type id.
   */
  protected readonly _resourceName: string;

  /**
   * @constructor
   *
   * @param assetId The string name identifier of the external asset resource.
   */
  constructor(assetId: Asset) {
    this._resourceName = assetId;
    this.resource = window.F_LOADER.getImage(assetId);
  }

  public getResourceName(): string {
    return this._resourceName;
  }
}

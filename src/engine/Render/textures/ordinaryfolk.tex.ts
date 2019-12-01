import { ITexture } from './interfaces/ITexture';

/**
 * The OrdinaryFolkTexture class.
 * @implements ITexture
 */
export class OrdinaryFolkTexture implements ITexture {

  public readonly Texture: HTMLImageElement;

  /**
   * @constructor
   */
  constructor() {
    this.Texture = window.F_LOADER.getImage("npc_stand_in");
  }

}

import { ITexture } from './interfaces/ITexture';

/**
 * The PlayerTexture class.
 * @implements ITexture
 */
export class PlayerTexture implements ITexture {

  public readonly Texture: HTMLImageElement;

  /**
   * @constructor
   */
  constructor() {
    this.Texture = window.F_LOADER.getImage("character_stand_in");
  }

}

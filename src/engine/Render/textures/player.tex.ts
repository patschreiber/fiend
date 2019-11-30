import { ITexture } from '../ITexture';

/**
 * The PlayerTexture class.
 * @implements ITexture
 */
export class PlayerTexture implements ITexture {

  /**
   * The texture to use as a Sprite.
   */
  public readonly Texture: HTMLImageElement;

  /**
   * @constructor
   */
  constructor() {
    this.Texture = window.F_LOADER.getImage("character_stand_in");
  }

}

import { BaseTexture } from './base.tex';

/**
 * The PlayerTexture class.
 * @implements ITexture
 */
export class PlayerTexture extends BaseTexture {

  /**
   * @constructor
   */
  constructor() {
    super("player", window.F_LOADER.getImage("character_stand_in"));
  }

}

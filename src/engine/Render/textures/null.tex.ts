import { BaseTexture } from './base.tex';

/**
 * The NullTexture class. Used when a texture cannot be loaded/found.
 * @implements ITexture
 */
export class NullTexture extends BaseTexture {

  /**
   * @constructor
   */
  constructor() {
    super("NULL_TEX", window.F_LOADER.getImage("NULL_TEX"));
  }

}

import { Asset } from '../../structs/enums/rendering_enums';
import { BaseTexture } from './base.tex';

/**
 * The NullTexture class. Used when a texture cannot be loaded/found.
 */
export class NullTexture extends BaseTexture {

  /**
   * @constructor
   */
  constructor() {
    super(Asset.NullTexture);
  }

}

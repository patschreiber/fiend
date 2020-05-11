import { Asset } from '../../structs/enums/rendering_enums';
import { BaseTexture } from './base.tex';

/**
 * The PlayerTexture class.
 */
export class PlayerTexture extends BaseTexture {

  /**
   * @constructor
   */
  constructor() {
    super(Asset.Player);
  }

}

import { BaseTexture } from './base.tex';

/**
 * The OrdinaryFolkTexture class.
 * @implements ITexture
 */
export class OrdinaryFolkTexture extends BaseTexture {

  /**
   * @constructor
   */
  constructor() {
    super("ordinary_folk", window.F_LOADER.getImage("npc_stand_in"));
  }

}

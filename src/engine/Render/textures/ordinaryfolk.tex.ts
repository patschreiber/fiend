import { Asset } from "../../structs/enums/rendering_enums";
import { BaseTexture } from "./base.tex";

/**
 * The OrdinaryFolkTexture class.
 */
export class OrdinaryFolkTexture extends BaseTexture {
  /**
   * @constructor
   */
  constructor() {
    super(Asset.OrdinaryFolk);
  }
}

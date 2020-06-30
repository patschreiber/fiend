import { ITexture } from "../Render/textures/interfaces/ITexture";

/**
 * Provides a type for the Texture Pool that will house the loaded textures for
 * a scene. The key will be the Texture's type id.
 *
 * @example
 * ```
 * {
 *   assetTypeId: Asset.Player,
 *   texture: new PlayerTexture(),
 * }
 * ```
 */
export type TexturePoolItem = {
  [assetTypeId: string]: ITexture;
};

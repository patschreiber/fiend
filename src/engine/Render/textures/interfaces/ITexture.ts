/**
 * The ITexture interface. All textures should implement this interface either
 * directly or through inheritance.
 */
export interface ITexture {

  /**
   * The raw texture image.
   */
  Texture: HTMLImageElement;

  /**
   * Accessor for the private member `id`.
   *
   * @returns The id of the instance of the Texture.
   */
  getTypeId(): string;

}

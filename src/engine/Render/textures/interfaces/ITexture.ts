/**
 * The ITexture interface. All textures should implement this interface either
 * directly or through inheritance.
 */
export interface ITexture {

  /**
   * The raw texture resource.
   */
  resource: HTMLImageElement;

  /**
   * Accessor for the private member `_resourceName`.
   *
   * @returns The name of the external asset resource.
   */
  getResourceName(): string;

}

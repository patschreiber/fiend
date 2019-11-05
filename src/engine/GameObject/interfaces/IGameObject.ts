/**
 * The interface for the [[GameObject]] class.
 *
 * @interface IGameObject
 */
 export interface IGameObject {

  /**
   * Accessor for the private member `id`.
   *
   * @returns The id of the GameObject
   */
   getId(): number;

  /**
   * Defines the signature for the update method for the GameActor.
   *
   * @param delta The time difference between frames. Provided by the game's
   * main game loop.
   * @see FiendGame.main()
   */
  update(delta: number): void;
}

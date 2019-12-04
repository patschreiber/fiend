import { GameObject } from '../../GameObject';

/**
 * The IMovementSystem interface.
 */
export interface IMovementSystem {

  /**
   * Handles user input and movement of GameObjects. Runs once per game loop.
   *
   * @param go The GameObject entity to handle movement.
   * @param delta The time difference between frames. Provided by the game's
   * main game loop.
   * @param inputState The InputHandler's input state, if applicable
   * @see FiendGame.main()
   */
  update(go: GameObject, delta: number): void;

}

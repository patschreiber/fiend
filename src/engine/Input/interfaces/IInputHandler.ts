import { GameObject } from '../../GameObject';
import { Command } from '../../Command';

/**
 * The interface for the InputHandler.
 */
export interface IInputHandler {

  /**
   * Binds an input to a command.
   *
   * @param event The user interaction with a keyboard.
   * @param command The command to bind.
   */
  keyBind(event: KeyboardEvent, command: Command): void;

  /**
   * Handles any input if a mapped button is pressed. Run once per game update
   * tick.
   *
   * @param actor The GameObject entity to handle input. Most likely will be the
   * Player(s) currently in the game.
   * @param delta The time difference between frames. Provided by the game's
   * main game loop.
   * @see FiendGame.main()
   */
  handleInput(actor: GameObject, delta: number): void;
}

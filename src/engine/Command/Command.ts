import { GameActor } from "../GameObject";

/**
 * The Command class.
 * @abstract
 */
export abstract class Command {

  /**
   * Executes the command.
   *
   * @param actor The GameActor to command.
   * @param delta The game's delta between frames.
   */
  public abstract execute(actor: GameActor, delta: number): void;
}

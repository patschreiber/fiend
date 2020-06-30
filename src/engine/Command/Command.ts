import { GameObject } from "../GameObject";

/**
 * The Command base class.
 * @abstract
 */
export abstract class Command {
  /**
   * Executes the command.
   *
   * @param actor The GameActor to command.
   * @param delta The game's delta between frames.
   */
  public abstract execute(actor: GameObject, delta: number): void;
}

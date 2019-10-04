import { Command } from "./Command";
import { GameActor } from "../GameObject";

/**
 * The MoveWestCommand class.
 */
export class MoveWestCommand extends Command {

  /**
   * Executes the command.
   *
   * @param actor The GameActor to command.
   * @param delta The game's delta between frames.
   */
  public execute(actor: GameActor, delta: number): void {
    actor.moveW(delta);
  }
}

import { Command } from "./Command";
import { GameActor } from "../GameObject";

/**
 * The MoveWestCommand class.
 */
export class MoveWestCommand extends Command {

  /**
   * Executes the command.
   */
  public execute(actor: GameActor, delta: number): void {
    actor.moveW(delta);
  }
}

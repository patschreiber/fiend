import { Command } from "./Command";
import { GameActor } from "../GameObject";

/**
 * The MoveNorthCommand class.
 */
export class MoveNorthCommand extends Command {

  /**
   * Executes the command.
   */
  public execute(actor: GameActor, delta: number): void {
    actor.moveN(delta);
  }
}

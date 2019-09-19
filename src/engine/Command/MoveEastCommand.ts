import { Command } from "./Command";
import { GameActor } from "../GameObject";

/**
 * The MoveEastCommand class.
 */
export class MoveEastCommand extends Command {

  /**
   * Executes the command.
   */
  public execute(actor: GameActor, delta: number): void {
    actor.moveE(delta);
  }
}

import { Command } from "./Command";
import { GameActor } from "../GameObject";

/**
 * The MoveSouthCommand class.
 */
export class MoveSouthCommand extends Command {

  /**
   * Executes the command.
   */
  public execute(actor: GameActor, delta: number): void {
    actor.moveS(delta);
  }
}

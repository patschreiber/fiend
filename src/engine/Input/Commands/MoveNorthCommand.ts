import { Command } from "./Command";

/**
 * The MoveNorthCommand class.
 */
export class MoveNorthCommand extends Command {

  /**
   * Executes the command.
   */
  public execute(): void {
    console.log("Move North!");
  }
}

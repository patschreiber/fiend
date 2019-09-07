import { Command } from "./Command";

/**
 * The MoveSouthCommand class.
 */
export class MoveSouthCommand extends Command {

  /**
   * Executes the command.
   */
  public execute(): void {
    console.log("Move South!");
  }
}
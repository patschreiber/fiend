import { Command } from './Command';
import { ICommand } from './interfaces/ICommand';

/**
 * The NullCommand class.
 * This class is special in that it intentionally doesn't execute anything, in
 * so if a user doesn't have a mapped button, we don't have to check fo `null`.
 */
export class NullCommand extends Command implements ICommand {

  /**
   * Executes the command.
   */
  public execute(): void {
    throw new Error("Cannot call execute() on a NullCommand.");
  }
}

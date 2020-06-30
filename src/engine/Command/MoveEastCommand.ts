import { Command } from "./Command";
import { GameObject } from "../GameObject";
import { ICommand } from "./interfaces/ICommand";

/**
 * The MoveEastCommand class.
 */
export class MoveEastCommand extends Command implements ICommand {
  /**
   * Executes the command.
   *
   * @param actor The GameObject to command.
   * @param delta The game's delta between frames.
   */
  public execute(actor: GameObject, delta: number): void {
    // TODO: get movement comp
    //actor.moveE(delta);
  }
}

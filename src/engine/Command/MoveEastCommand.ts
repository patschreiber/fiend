import { Command } from './Command';
import { GameObject } from '../GameObject';

/**
 * The MoveEastCommand class.
 */
export class MoveEastCommand extends Command {

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

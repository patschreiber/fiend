import { Command } from '../../Command';
import { ButtonStatus } from '../InputHandler';

/**
 * The IInputMap interface.
 *
 * @keys
 * [key]: The name of the key pressed, sent by the browser.header
 * [command]: The mapped command to be executed.
 * [status]: The button's current status
 */
export interface IInputMap {
  [key: string]: {
    command: Command,
    status: ButtonStatus
  }
}

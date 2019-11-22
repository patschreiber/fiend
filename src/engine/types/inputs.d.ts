import { Button, Action, ButtonStatus } from '../structs/enums/input_enums'
import { Command } from '../Command';
import { ICommand } from '../Command/interfaces/ICommand';

/**
 * Maps a I/O device's input signal to a Button.
 */
export type InputSignalMap = {
  [key: string]: Button
}

 /**
  * The ButtonState type. Keeps track of the Command a certain button should
  * execute, and the status of it.
  *
  * @example
  * ```
  * {
  *   command: new MoveCommand(),
  *   status: Button.PRESSED
  * }
  * ```
  * @see Action
  * @see input_enums
 */
export type ButtonState = {
  // command: ICommand,
  command: Action,
  status: ButtonStatus
}

/**
 * Alias for a I/O device's input signals so it can be used by the engine.
 */
export type InputState = Array<ButtonState>;

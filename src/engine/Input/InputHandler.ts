import { IInputMap } from './interfaces/IInputMap';
import { IInputHandler } from './interfaces/IInputHandler';
import { IInputOutputPlugin } from './interfaces/IInputOutputPlugin';
import { Actions, ButtonStatus, Button } from './control_scheme_plugins/enums';

export type ButtonState = {
  command: Actions
  status: ButtonStatus
}

/**
 * The InputHandler class.
 */
export class InputHandler implements IInputHandler {

  public IO: IInputOutputPlugin;

  /**
   * @constructor
   * The InputHandler constructor.
   * Attaches the keydown and keyup KeyboardEvent to the document.
   */
  constructor(ioPlugin: IInputOutputPlugin) {
    this.IO = ioPlugin;
  }

  /**
   * Retrueves the current input state. Calling getInputState instead of reading
   * it directly from the input/output plugin allows us to make sure the I/O is
   * only being read once per frame.
   *
   * @return The current state of the input.
   */
  public getInputState(): IInputMap {
    return this.IO.getInputState();
  }

  public getButtonState(button: Button): ButtonState {
    return this.IO.getInputState()[button];
  }

  public update(delta: number): void {

  }
}

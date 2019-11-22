import { IInputHandler } from './interfaces/IInputHandler';
import { IInputOutputDevicePlugin } from './interfaces/IInputOutputDevicePlugin';
import {
  Button,
  Action
} from '../structs/enums/input_enums';
import {
  ButtonState,
  InputState
} from '../types/inputs';

/**
 * The InputHandler class.
 */
export class InputHandler implements IInputHandler {

  public controller: IInputOutputDevicePlugin;

  /**
   * @constructor
   * The InputHandler constructor.
   * Attaches the keydown and keyup KeyboardEvent to the document.
   */
  constructor(ioPlugin: IInputOutputDevicePlugin) {
    this.controller = ioPlugin;
  }

  /**
   * Retrueves the current input state. Calling getInputState instead of reading
   * it directly from the input/output plugin allows us to make sure the I/O is
   * only being read once per frame.
   *
   * @return The current state of the input.
   */
  public getInputState(): InputState {
    return this.controller.getInputState();
  }

  public getButtonState(needle: Button|Action): ButtonState {
    switch (needle) {
      case (needle as Button):
        // Since the needle is a Button already, we can just go get the input
        // state directly.
        return this.controller.getInputState()[needle];
      case (needle as Action):
        let action = (needle as Action);
        // We get a handle on the Button assigned to the Action.
        let button = this.controller.getInputSignalMap()[action];
        // Then we grab the input state using our new Button.
        return this.controller.getInputState()[button];
      default:
        return;
    }
  }

}

import { IInputHandler, IIODevicePlugin } from '../Input';
import { Action, Button } from '../structs/enums/input_enums';
import { ButtonState, InputState } from '../types/inputs';

/**
 * The InputHandler class.
 * @implements [[IInputHandler]]
 */
export class InputHandler implements IInputHandler {

  public controller: IIODevicePlugin;

  /**
   * @constructor
   * The InputHandler constructor.
   * Attaches the keydown and keyup KeyboardEvent to the document.
   */
  constructor(ioPlugin: IIODevicePlugin) {
    this.controller = ioPlugin;
  }

  public getInputState(): InputState {
    return this.controller.getInputState();
  }

  public getButtonState(needle: Button|Action): ButtonState|null {
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
        return null;
    }
  }

}

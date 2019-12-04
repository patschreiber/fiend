import { IIODevicePlugin } from '../../Input';
import { Action, Button } from '../../structs/enums/input_enums';
import { ButtonState, InputState } from '../../types/inputs';

/**
 * The InputHandler interface.
 */
export interface IInputHandler {

  /**
   * The referenced I/O Device Plugin. Think Keyboard, controller, joystick,
   * etc.
   */
  controller: IIODevicePlugin

  /**
   * Retrieves the current input state. Call getInputState instead of reading it
   * directly from the input/output plugin.
   *
   * @return The current state of the input.
   */
  getInputState(): InputState;

  /**
   * Helps retrieve a specific Button's state. Can be searched for using eith
   * the engine's internal Button id, or the Action currently mapped to the
   * button.
   *
   * @param needle The type of the needle that dictates what strategy to use to
   * get a handle on a Button's state.
   *
   * @return The state of the button or null if no button was found.
   */
  getButtonState(needle: Button|Action): ButtonState|null;

}

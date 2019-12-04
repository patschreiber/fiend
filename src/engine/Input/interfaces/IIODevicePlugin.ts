import { ButtonStatus, DefaultControlSchemes } from '../../structs/enums/input_enums';
import { InputEvent } from '../../types/events';
import { InputSignalMap, InputState } from '../../types/inputs';

/**
 * The IIODevicePlugin interface.
 * Defines an interface for Input/Output devices plugins to guarantee
 * compatibility with the [[InputHandler]].
 */
export interface IIODevicePlugin {

  /**
   * Gets the current state of all the Buttons at the time of calling.
   *
   * @return The current state of the controller.
   */
  getInputState(): InputState;

  /**
   * Retrieves the button mapping between the I/O device's input event and the
   * engine's abstract "buttons" that can be assigned to input events.
   * @example For a keyboard I/O device, part of the mapping would look
   * something like:
   * ```ts
   * {
   *   "ArrowUp": Button.B1,
   *   "ArrowDown": Button.B2,
   *   "ArrowLeft": Button.B3,
   *   "ArrowRight": Button.B4,
   * }
   * ```
   *
   * @returns the mapping of input signal from the active I/O device to an
   * internal [[Button]].
   */
  getInputSignalMap(): InputSignalMap;

  /**
   * Callback for when a device-specific input event fires. A device-specific
   * input event would be something like:
   *   - A key is pressed on a keyboard,
   *   - The "X" button is pressed on a PS4
   *   - etc.
   *
   * @param event The event representing the user interaction with a keyboard.
   * @param btnStatus The status the button should be sent to when the event
   * fires.
   */
  inputEventFired(event: InputEvent, btnStatus: ButtonStatus): void;

  /**
   * Maps Action to the current in-use input controller. Supports multiple
   * control schemes so players can choose sensible default controls without
   * having to re-map each button individually.
   *
   * @param controlScheme (optional) The control scheme to attach.
   */
  loadControlScheme(controlScheme?: DefaultControlSchemes): void;

}

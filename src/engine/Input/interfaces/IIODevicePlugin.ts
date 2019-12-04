import { ButtonStatus, DefaultControlSchemes } from '../../structs/enums/input_enums';
import { InputEvent } from '../../types/events';
import { InputSignalMap, InputState } from '../../types/inputs';

/**
 * The IIODevicePlugin interface.
 * Defines an interface for Input/Output devices plugins to guarantee
 * compatibility with the [[InputHandler]].
 */
export interface IIODevicePlugin {
  // IIODevicePlugin

  getInputState(): InputState;

  getInputSignalMap(): InputSignalMap;

  handleInputEvent(event: InputEvent, buttonStatus: ButtonStatus): void;

  loadControlScheme(controlScheme?: DefaultControlSchemes): void;
}

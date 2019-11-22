import { InputEvent } from '../../types/events';
import { InputState, InputSignalMap } from '../../types/inputs';
import { ButtonStatus, DefaultControlSchemes } from '../../structs/enums/input_enums';

/**
 * The IInputOutputPlugin interface.
 * Defines a universal interface for Input/Output devices.
 */
export interface IInputOutputDevicePlugin {

  getInputState(): InputState;

  getInputSignalMap(): InputSignalMap;

  handleInputEvent(event: InputEvent, buttonStatus: ButtonStatus): void;

  loadControlScheme(controlScheme?: DefaultControlSchemes): void;
}

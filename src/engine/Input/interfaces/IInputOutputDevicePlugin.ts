import { InputEvent } from '../../types/events';
import { InputState, InputSignalMap } from '../../types/inputs';
import { ButtonStatus } from '../../structs/enums/input_enums';

/**
 * The IInputOutputPlugin interface.
 * Defines a universal interface for Input/Output devices.
 */
export interface IInputOutputDevicePlugin {
  handleInputEvent(event: InputEvent, buttonStatus: ButtonStatus): void;

  getInputState(): InputState;

  getInputSignalMap(): InputSignalMap;
}

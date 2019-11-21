import { InputEvent } from '../../types/events';
import { IInputMap } from './IInputMap';

/**
 * The IInputOutputPlugin interface.
 * Defines a universal interface for Input/Output devices.
 */
export interface IInputOutputPlugin {
  // buttonList: ButtonList;
  buttonPressed(event: InputEvent): void;
  buttonReleased(event: InputEvent): void;
  getInputState(): IInputMap;
}

import { InputState } from '../../types/inputs';

/**
 * The InputHandler interface.
 */
export interface IInputHandler {

  getInputState(): InputState;
}

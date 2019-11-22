import { InputState } from '../../types/inputs';

/**
 * The interface for the InputHandler.
 */
export interface IInputHandler {

  getInputState(): InputState;
}

import { GameObject } from '../../GameObject';

/**
 * The ICommand interface.
 */
export interface ICommand {
  execute(actor: GameObject, delta: number): void;
}

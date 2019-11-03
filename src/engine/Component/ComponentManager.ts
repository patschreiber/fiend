import { ComponentQueue } from '../types/components';

/**
 * The ComponentManager class.
 * The ComponentManager is responsible for orchestrating all currently-active
 * Components that belong to [[GameObject]] entities.
 */
 export class ComponentManager {
  private _brainComponentQueue: ComponentQueue;
  private _colliderComponentQueue: ComponentQueue;
  private _eventComponentQueue: ComponentQueue;
  private _lifeforceComponent: ComponentQueue;
}

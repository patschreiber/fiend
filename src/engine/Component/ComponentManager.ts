import { ComponentContainer } from '../types/components';

/**
 * The ComponentManager class.
 * The ComponentManager is responsible for orchestrating all currently-active
 * Components that belong to [[GameObject]] entities.
 */
 export class ComponentManager {
  private _brainComponentQueue: ComponentContainer;
  private _colliderComponentQueue: ComponentContainer;
  private _eventComponentQueue: ComponentContainer;
  private _lifeforceComponent: ComponentContainer;
}

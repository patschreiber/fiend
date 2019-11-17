import { GameObjectId } from '../../types/gameobjects';
import { ComponentId, ComponentTypes, ComponentTemplate } from '../../types/components';
import { Component } from '../Component';


export interface IComponentManager {

  addComponent<T extends IComponentMembers>(
    component: new (overrides?: Partial<T>) => Component,
    goid: GameObjectId,
    overrides?: Partial<T>
  ): ComponentId|null;

  getComponent<K extends keyof ComponentTypes>(
    component: K,
    goid: GameObjectId
    // componentTypeId: string
  ): ComponentTypes[K]|null;

  removeComponent<K extends keyof ComponentTypes>(
    component: K,
    goid: GameObjectId
  ): boolean;

  getComponentContainer<K extends keyof ComponentTypes>(
    component: K
  ): Array<ComponentTypes[K]>;

  spawnFromTemplate(
    templateComponentCollection: Array<ComponentTemplate>,
    goid: ComponentId
  ): boolean;

  hasComponent<K extends keyof ComponentTypes>(
    componentType: K,
    goid: GameObjectId
  ): boolean;

}

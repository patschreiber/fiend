import {
  ComponentId,
  ComponentTemplate,
  ComponentTypes
} from '../types/components';
import { Component } from './Component';
import { BrainComponent } from './BrainComponent';
import { ColliderComponent } from './ColliderComponent';
import { EventComponent } from './EventComponent';
import { LifeforceComponent } from './LifeforceComponent';
import { GameObjectId } from '../types/gameobjects';
import { ComponentFactory } from './ComponentFactory/ComponentFactory';
import { PositionComponent } from './PositionComponent';
import { VelocityComponent } from './VelocityComponent';
import { RenderComponent } from './../Component';

/**
 * The Component Pool type definition.
 * TODO: Come up with something better than 'any'.
 */
type Pool = {
  [key: string]: Array<any>;
}

/**
 * The ComponentManager class.
 * The ComponentManager is responsible for orchestrating all currently-active
 * Components that belong to [[GameObject]] entities. There are a few
 */
 export class ComponentManager {

  /**
   * The data structure to house the active Components.
   */
  private _activePools:Pool = {
    BrainComponent: new Array<BrainComponent>(),
    ColliderComponent: new Array<ColliderComponent>(),
    EventComponent: Array<EventComponent>(),
    LifeforceComponent: new Array<LifeforceComponent>(),
    PositionComponent: new Array<PositionComponent>(),
    RenderComponent: new Array<RenderComponent>(),
    VelocityComponent: new Array<VelocityComponent>(),
  };

  /**
   * Adds a Component to the GameObject's `Component container`, if it's not
   * already attached.
   *
   * @param compType The Component type to be attached.
   *
   * @return The Component's id if it was successfully created and attached, or
   null if it wasn't.
   */
  public addComponent<T extends IComponentMembers>(
    component: new (overrides?: Partial<T>) => Component,
    goid: GameObjectId,
    overrides?: Partial<T>
  ): ComponentId|null {

    try {

      let comp = ComponentFactory.create(component, overrides);
      this._activePools[comp.getTypeId()][goid] = comp;

      return comp.getId();
    } catch (e) {

      console.error(e, {type: "ComponentCreationError"});

      return null;
    }
  }

  /**
   * Gets a Component attached to this GameActor.
   *
   * @see https://stackoverflow.com/questions/58573975
   *
   * @param goid The GameObject id.
   * @param component The Component to use as a look up.
   *
   * @return The desired attached Component, or null if it's not attached.
   */
  public getComponent<K extends keyof ComponentTypes>(
    component: K,
    goid: GameObjectId
    // componentTypeId: string
  ): ComponentTypes[K]|null {

    let attachedComponent = this.getComponentContainer(component)[goid];
    if (attachedComponent === undefined) {
      return null;
    } else {
      return attachedComponent;
    }
  }

  /**
   * Removes a Component from the GameActor's `ComponentContainer`, if it's
   * attached.
   *
   * @param cid The lookup key for the Component to be removed from this
   * GameActor. Usually this is the Component's `typeId` as a string.
   *
   * @return If the Component was successfully removed or not.
   */
  public removeComponent<K extends keyof ComponentTypes>(
    component: K,
    goid: GameObjectId
  ): boolean {

    delete this.getComponentContainer(component)[goid];
    return true;
  }

  /**
   * Retrieves the Component's container based in the Component's type.
   *
   * @param component The Component who's container will be retrieved.
   *
   * @return The container for the Component type.
   */
  public getComponentContainer<K extends keyof ComponentTypes>(component: K): Array<ComponentTypes[K]> {
    return this._activePools[component];
  }

  /**
   * Retrieves the active Component pool data structure.
   *
   * @return The active pool container.
   */
  public getActiveComponentPools(): object {
    return this._activePools;
  }

  /**
   * Spawns Components based on the given [[GameObjectTemplate]].
   *
   * @internal
   * Components are always subordinate to GameObject (they will always be
   * attached to a GameObject and not the other way around), so
   *
   * @param template The [[GameObjectTemplate]] with defined Components.
   * @param goid The id of the GameObject that owns these Components.
   *
   * @return If the Components were successfully created.
   */
   public spawnFromTemplate(
    templateComponentCollection: Array<ComponentTemplate>,
    goid: ComponentId
  ): boolean {
    let cid: ComponentId;

    // Creates a new Component instance for every Component template we receive.
    for (let componentTemplate of templateComponentCollection) {
      let compType = componentTemplate[0];
      let overrides = componentTemplate[1];
      cid = this.addComponent(compType, goid, overrides);

      // If the comp was created, it was added to the appropriate list,
      // otherwise, let's log the error but continue to minimize damages.
      if (cid === null) {
        console.log('component_creation_warning :', `There was a problem when
        creating Component of type ${compType} for GameObject (id:${goid}).
        Make sure the GameObject has the correct Components attached to it`);
      }
    }

    return true; //Temp
  }

}

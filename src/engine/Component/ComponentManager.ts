import {
  ComponentId,
  ComponentTemplate
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

/**
 * The ComponentManager class.
 * The ComponentManager is responsible for orchestrating all currently-active
 * Components that belong to [[GameObject]] entities. There are a few
 */
 export class ComponentManager {

  /**
   * The data structure to house the active Components.
   */
  private _activePools = {
    BrainComponent: new Array<BrainComponent>(),
    ColliderComponent: new Array<ColliderComponent>(),
    EventComponent: Array<EventComponent>(),
    LifeforceComponent: new Array<LifeforceComponent>(),
    PositionComponent: new Array<PositionComponent>(),
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
    goid: GameObjectId,
    component: new (overrides?: Partial<T>) => Component,
    overrides?: Partial<T>
  ): ComponentId|null {

    // let comp: Component = new component();

    // If the GameObject already has a component of this type attached, we don't
    // want to add another.
    // if (this.hasComponent(goid, comp)) {
    //   return null;
    // }
    let comp: Component
    try {
      comp = ComponentFactory.create(component, overrides);
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
  public getComponent(
    goid: GameObjectId,
    component: typeof Component
  ): Component|null {

    let attachedComponent = this.getComponentContainer(component)[goid];
    if (attachedComponent === undefined) {
      return null;
    } else {
      return attachedComponent;
    }
  }

  /**
   * Checks to see if a Component is attached to this GameActor via the
   * `ComponentContainer` list.
   *
   * @param typeId The key to use as a look up. This is the Component's static
   * id.
   *
   * @return If the Component is attached to the GameObject.
   */
   public hasComponent(//<C extends Component>(
    goid: GameObjectId,
    component: typeof Component
  ): boolean {

    let container = this.getComponentContainer(component)[goid];

    return container === undefined ? false : true;
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
  public removeComponent(goid: GameObjectId, component: typeof Component): boolean {
    if (this.hasComponent(goid, component)) {
      this.getComponentContainer(component)[goid] = undefined;
    }

    return true;

    // // TODO: Make this a real exception.
    // console.log('removeComponentError :', `Cannot remove Component ${key} since one's not attached to this GameActor(id:${this.getId()})`);
  }

  /**
   * Retrieves the Component's container based in the Component's type.
   *
   * @param component The Component who's container will be retrieved.
   *
   * @return The container for the Component type.
   */
  public getComponentContainer(component: typeof Component): Array<Component> {
    let comp = new component();
    return this._activePools[comp.getTypeId()];
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

      cid = this.addComponent(goid, compType, overrides);

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

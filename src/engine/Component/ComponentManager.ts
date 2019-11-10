import {
  ComponentContainer,
  ComponentId,
  ComponentTemplate
} from '../types/components';
import { Component } from './Component';
import { BrainComponent } from './BrainComponent';
import { ColliderComponent } from './ColliderComponent';
import { EventComponent } from './EventComponent';
import { LifeforceComponent } from './LifeforceComponent';
import { GameObjectId } from '../types/gameobjects';

/**
 * The ComponentManager class.
 * The ComponentManager is responsible for orchestrating all currently-active
 * Components that belong to [[GameObject]] entities.
 */
 export class ComponentManager {
  private _brainComponents: ComponentContainer<BrainComponent>;
  private _colliderComponents: ComponentContainer<ColliderComponent>;
  private _eventComponents: ComponentContainer<EventComponent>;
  private _lifeforceComponents: ComponentContainer<LifeforceComponent>;

  /**
   * Adds a Component to the GameActor's `ComponentContainer`, if it's not
   * already attached.
   *
   * @param component The Component instance to be attached.
   *
   * @return The component instance if it was successfully attached, or false if
   * it wasn't.
   */
  public addComponent<C extends Component>(component: new () => C): C {

    let comp = new component();

    console.log('typeof comp; :', comp);

    // typeof component;

    // let typeId = component.getTypeId();
    // if (this.hasComponent(typeId)) {
    //   // TODO: Make this a real exception.
    //   console.log('addComponentError :', `A ${typeId} Component is already attached to this GameActor(id:${this.getId()})`);
    //   return false;
    // }
    // this.components[typeId] = component;

    return comp;
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
   */
  public spawnFromTemplate(
    componentTemplate: Array<ComponentTemplate>,
    goid: GameObjectId
  ): ComponentId {
    console.log('goid :', goid);

    return 10;
  }

  // /**
  //  * Removes a Component from the GameActor's `ComponentContainer`, if it's
  //  * attached.
  //  *
  //  * @param key The lookup key for the Component to be removed from this
  //  * GameActor. Usually this is the Component's `typeId` as a string.
  //  *
  //  * @return If the Component was successfully removed or not.
  //  */
  // public removeComponent(key: string): boolean {

  //   if (this.hasComponent(key)) {
  //     delete this.components[key];     // TODO: Do not use delete, it makes non-contiguous arrays
  //     return true;
  //   }

  //   // TODO: Make this a real exception.
  //   console.log('removeComponentError :', `Cannot remove Component ${key} since one's not attached to this GameActor(id:${this.getId()})`);
  // }

  // /**
  //  * Checks to see if a Component is attached to this GameActor via the
  //  * `ComponentContainer` list.
  //  *
  //  * @param typeId The key to use as a look up. This is the Component's static
  //  * id.
  //  *
  //  * @return If the Component is attached to this GameActor.
  //  */
  // public hasComponent(typeId: string): boolean {
  //   return this.components[typeId] === undefined ? false : true;
  // }

  // /**
  //  * Gets a Component attached to this GameActor.
  //  *
  //  * @see https://stackoverflow.com/questions/58573975
  //  *
  //  * @param typeId The key to use as a look up. This is the Component's static
  //  * id.
  //  *
  //  * @return The desired attached Component, or null if it's not attached.
  //  */
  // public getComponent<CT extends keyof ComponentContainer>(
  //   typeId: CT
  // ): ComponentContainer[CT]|null {
  //   if (this.hasComponent(typeId)) {
  //     return this.components[typeId];
  //   }

  //   return null;
  // }

  // /**
  //  * Retrieves the list of Components attached to this GameActor.
  //  *
  //  * @return The list of attached Components.
  //  */
  // public listComponents(): Array<string> {
  //   return Object.keys(this.components);
  // }
}

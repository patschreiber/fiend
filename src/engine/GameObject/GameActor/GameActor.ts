import { GameObject } from '../../GameObject';
import { Component } from '../../Component';
import { ComponentContainer, Coordinate } from '../../types/globals';

/**
 * The interface for the [[GameActor]] class.
 *
 * @interface IGameActor
 */
interface IGameActor {

  /**
   * The position member. Signifies the location of the of the GameObject.
   */
  position: Coordinate;

  /**
   * Defines the signature for the update method for the GameActor.
   *
   * @param delta The time difference between frames. Provided by the game's
   * main game loop.
   * @see FiendGame.main()
   */
  update(delta: number): void;

  /**
   * Attaches a Component to a `GameActor` instance.
   *
   * @param component The Component to be attached.
   *
   * @return If the Component was successfully attached or not.
   */
  addComponent(component: Component): boolean;

  /**
   * Removes a Component from a `GameActor` instance.
   *
   * @param key The lookup key for the Component to be removed from this
   * GameActor. Usually this is the Component's `typeId` as a string.
   *
   * @return If the Component was successfully removed or not.
   */
  removeComponent(key: string): boolean;

  /**
   * Checks to see if a Component is attached to a `GameActor` instance.
   *
   * @param key The key to use as a look up. Usually this is the Component's
   * `typeId` as a string.
   *
   * @return If the Component is attached to this GameActor.
   */
  hasComponent(key: string): boolean;

  /**
   *  Gets a Component attached to a `GameActor` instance.
   *
   * @param key The key to use as a look up. Usually this is the Component's
   * `typeId` as a string.
   *
   * @return The desired attached Component, or null if it's not attached.
   */
  getComponent(key: string): Component|null;

  /**
   * Retrieves the list of Components attached to a `GameActor` instance.
   *
   * @return The list of attached Components.
   */
  listComponents(): Array<string>;

}

/**
 * The base GameActor class. All GameObjects that can influence things in the
 * environment will derive from the GameActor class.
 * @abstract
 * @extends [[GameObject]] The GameObject base abstract class.
 * @implements [[IGameActor]]
 */
export abstract class GameActor extends GameObject implements IGameActor {

  /**
   * @var position The position of the GameObject.
   */
  public position: Coordinate;

  /**
   * @var components The container for all the actor's components.
   */
  protected components: ComponentContainer;

  /**
   * @constructor
   *
   * @param position The starting position of the spawned Actor.
   */
  constructor(position: Coordinate) {
    super();

    this.position = position;

    // We need to declare this as an object otherwise we get a reference error
    // when we try and assign Components to it with addComponent().
    this.components = {};
  }

  /**
   * Adds a Component to the GameActor's `ComponentContainer`, if it's not
   * already attached.
   *
   * @param component The Component to be attached.
   *
   * @return If the Component was successfully attached or not.
   */
  public addComponent(component: Component): boolean {
    let typeId = component.getTypeId();

    if (this.hasComponent(typeId)) {
      // TODO: Make this a real exception.
      console.log('addComponentError :', `A ${typeId} Component is already attached to this GameActor(id:${this.getId()})`);
      return false;
    }

    this.components[typeId] = component;
    return true;
  }

  /**
   * Removes a Component from the GameActor's `ComponentContainer`, if it's
   * attached.
   *
   * @param key The lookup key for the Component to be removed from this
   * GameActor. Usually this is the Component's `typeId` as a string.
   *
   * @return If the Component was successfully removed or not.
   */
  public removeComponent(key: string): boolean {

    if (this.hasComponent(key)) {
      delete this.components[key];
      return true;
    }

    // TODO: Make this a real exception.
    console.log('removeComponentError :', `Cannot remove Component ${key} since one's not attached to this GameActor(id:${this.getId()})`);
  }

  /**
   * Checks to see if a Component is attached to this GameActor via the
   * `ComponentContainer` list.
   *
   * @param key The key to use as a look up. Usually this is the Component's
   * `typeId` as a string.
   *
   * @return If the Component is attached to this GameActor.
   */
  public hasComponent(key: string): boolean {
    return this.components[key] === undefined ? false : true;
  }

  /**
   *  Gets a Component attached to this GameActor.
   *
   * @param key The key to use as a look up. Usually this is the Component's
   * `typeId` as a string.
   *
   * @return The desired attached Component, or null if it's not attached.
   */
  public getComponent(key: string): Component|null {
    if (this.hasComponent(key)) {
      return this.components[key];
    }

    return null;
  }

  /**
   * Retrieves the list of Components attached to this GameActor.
   *
   * @return The list of attached Components.
   */
  public listComponents(): Array<string> {
    return Object.keys(this.components);
  }

  /**
   * The update method for the abstract GameActor class.
   *
   * @abstract
   * @param delta The time difference between frames. Provided by the game's
   * main game loop.
   * @see FiendGame.main()
   */
  public abstract update(delta: number): void;

  // TODO: Make a subclass that has movement. Not all actors will, I dont think.
  public moveN(delta: number): void {}
  public moveS(delta: number): void {}
  public moveE(delta: number): void {}
  public moveW(delta: number): void {}
}

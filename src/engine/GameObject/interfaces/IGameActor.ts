import { Coordinate } from '../../types/globals';
import { ComponentContainer } from '../../types/components';
import { Component } from '../../Component';

/**
 * The interface for the [[GameActor]] class.
 *
 * @interface IGameActor
 */
export interface IGameActor {

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
  addComponent<K extends keyof ComponentContainer>(
    component: ComponentContainer[K]
  ): boolean;

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

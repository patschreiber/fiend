import { IComponent } from './interfaces/IComponent';
import { GameObjectId } from '../types/gameobjects';
import { ComponentId } from '../types/components';

/**
 * The Component base class. // TODO: CHange name to BaseComponent
 * @internal
 * Note that the _typeId member found on every subclass is not defined here.
 * @abstract
 */
export class Component implements IComponent {

  /**
   * Keeps track of the `id` of the last GameObject instantiated.
   *
   * @static
   */
  private static _idIncrementor: number = 1;  // TODO: Make sure to save this when we unload the game.

  /**
   * The id of the instance of the Component.
   */
  private readonly _cid: ComponentId;

  /**
   * The id of the GameObject this Component is currently associated with.
   */
  public goid: GameObjectId;

  /**
   * @constructor
   * Auto-increments the Component id for the new Component instance being
   * created.
   * TODO: Make sure to save the number we left off on when we quit so we can
   * resume auto-incrementing when we save/load the game.
   * TODO: Make constructor private, like GameObject is. Use ComponentFactory.
   */
  public constructor(overrides?: IComponentMembers) {
    this._cid = Component._idIncrementor++;
  }

  /**
   * The type id of the component. Used when fetching or checking a specific
   * component for a [[GameObject]].
   * TODO: Use Symbol for type ID.
   */
  // public abstract getTypeId(): string;

  /**
   * Accessor for the private member `id`.
   *
   * @returns The instance id of the Component.
   */
  public getId(): ComponentId {
    return this._cid;
  }

  public getTypeId(): string { return ""; }

}

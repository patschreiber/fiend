import {
  ComponentTemplate
} from './components';
import { GameObject } from '../GameObject';
import { Component } from '../Component';

/**
 * Provides a type for use with GameObject ids.
 * Essentially GameObjectId is an alias of the `number` type, however, it is so
 * important that we want to emphasize its use.
 * @internal
 * Note, a `number` is used over a `Symbol` for the id intentionally. Symbols
 * aren't indexable, so the id can never act as the array index a GameObject is
 * located at (which may cause issues depending on how the storage is ultimately
 * managed).
 */
 export type GameObjectId = number;

/**
 * The desired status for any given GameObject. The engine will move GameObjects
 * around depending on their current status.
 * `Active`: The GameObject should be considered "hot" and will update and
 * render every frame in most instances.
 * `Cull`: The GameObject will be updated by systems, but will not be rendered.
 * `Sleep`: The GameObject is present in the scene, but is not being rendered or
 * updated for whatever reason.
 * `Inactive`: The GameObject is not present in the current Scene, but it's
 * state needs to be maintained between Scenes.
 * `Delete`: The GameObject is slated for deletion. The engine will delete the
 * GameObject when the current Scene is unloaded, or move it to the
 * `WorldGraveyard` if it was a unique entity.
 */
export const enum GameObjectStatus {
  Active = "Active",
  Cull = "Cull",
  Sleep = "Sleep",
  Inactive = "Inactive",
  Delete = "Delete"
}

/**
 * Provides a structure of available Templates that the engine recognizes.
 * `Player`: Template best suited for Player-controlled characters.
 * `OrdinaryFolk`: A generic NPC class.
 */
export const enum TemplateType {
  Player = "Player",
  OrdinaryFolk = "OrdinaryFolk"
}

/**
 * Tells a Scene or other structure which GameObjects to initialize when the
 * structure is loaded.
 */
export type GameObjectTemplate = {
  type: TemplateType,
  components: Array<ComponentTemplate>;
  tags: Array<string>;
}

/**
 * The `Array` type that holds `ManifestItems`.
 */
export type GameObjectManifest = Array<GameObjectTemplate>;

/**
 * TODO:
 * Holds the unique GameObjects that have been removed from the game. Prevents
 * these GameObjects from being instantiated again at a later time. Records the
 * GameObject's state at the time of addition and the date the GameObject was
 * added to this container. The key is the type of GameObject. Since only unique
 * GameObjects will be added to this list, the list is keyed by the GameObject's
 * type.
 */
// interface WorldGraveyardContainer {
//   UniqueGameObjectType: {
//     objectId: GameObjectId,
//     object: GameObject,
//     dateAdded: Date
//   }
//   length: number;
// }

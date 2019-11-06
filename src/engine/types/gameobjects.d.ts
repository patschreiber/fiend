import { GameObject } from '../GameObject';
import { IComponent } from '../Component/interfaces/IComponent';
import { AvailableComponentsContainer } from './components';

/**
 * Provides a type for use with GameObject ids.
 * Essentially GameObjectId is an alias of the `number` type, however, it is so
 * important that we want to emphasize its use.
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
 export enum GameObjectStatus {
  Active = "Active",
  Cull = "Cull",
  Sleep = "Sleep",
  Inactive = "Inactive",
  Delete = "Delete"
}

/**
 * Tells a Scene or other structure which GameObjects to initialize when the
 * structure is loaded.
 * @example
 * ```ts
 * // Contents of GameObjectManifest[]
 * [
 *   {
 *     type: "Player",
 *     position: {x:299,y:210}
 *   },
 *   {
 *      type: "OrdinaryFolk",
 *      position: {x:0,y:10}
 *   },
 *   {
 *     type: "OrdinaryFolk",
 *     position: {x:132,y:742}
 *   },
 * ]
 * ```
 */
export type GameObjectTemplate = {
  type: string;
  position: Coordinate;
  // components: Array<ComponentTemplate<Component>>;
  components: Array<keyof AvailableComponentsContainer>;

}

/**
 * The `Array` type that holds `ManifestItems`.
 */
export type GameObjectManifest = Array<GameObjectTemplate>;

/**
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

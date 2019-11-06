/**
 * Provides a type for use with GameObject ids.
 * Essentially GameObjectId is an alias of the `number` type, however, it is so
 * important that we want to emphasize its use.
 */
export type GameObjectId = number;

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

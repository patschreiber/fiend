import {
  GameObject,
  IGameObject
} from '../GameObject';

/**
 * Provides a type for use with GameObject ids.
 * Essentially GameObjectId is an alias of the `number` type, however, it is so
 * important that we want to emphasize its use.
 */
type GameObjectId = number;

/**
 * The container type to house GameObject instances.
 * @internal
 * TypeScript doesn't let an alias be used as an index, so the `number` type has
 * to be used explicitly here.
 */
type GameObjectContainer = {
 [gameObjectId: number]: IGameObject;
}

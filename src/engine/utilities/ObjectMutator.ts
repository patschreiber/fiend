/**
 * The ObjectMutator utility class.
 */
export class ObjectMutator {

  /**
   * Clones an entity and returns the mutable copy of the entity.
   *
   * @param clone The readonly version of the entity to clone.
   *
   * @return The mutable version of the cloned entity.
   */
  public static clone<T>(immutableEntity: T): Mutable<T> {
    return immutableEntity;
  }
}

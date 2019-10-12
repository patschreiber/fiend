import { GameActor } from "../GameActor";

/**
 * The ActorFactory class. Used for common actors such as common enemies,
 * wildlife, generic NPCs, etc. Allows us to implement the "Type Object"
 * pattern.
 *
 * The benefit here is twofold:
 * 1) We can define the Actor's properties in an external file, say, JSON, then
 * create a new Actor with those properties when a Scene is loaded.
 * 2) We can change the type of the Actor on the fly without recreating it.
 */
export abstract class ActorFactory {

  /**
   * The string unique label for the Actor type.
   */
  public label: string;

  /**
   * Factory method for creating a new Npc of a specific type.
   * For reference, check out the Type Object (factory) pattern.
   *
   * @param position The starting position of the spawned Actor.
   *
   * @return The spawned GameActor.
   */
  protected abstract spawn(position: Coordinate): GameActor;
}

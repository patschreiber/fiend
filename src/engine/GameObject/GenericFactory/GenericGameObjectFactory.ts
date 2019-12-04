// ************************
// TODO: We may not need this, but it was created, so...meh.
// ************************
import { GameObjectTemplate } from '../../types/gameobjects';
import { GameObject } from '../GameObject';


/**
 * The GenericGameObjectFactory factory class. This can be used to spawn a new
 * GameObject in the game.
 */
export class GenericGameObjectFactory {

  /**
   * Factory method for creating a new Npc of type OrdinaryFolk.
   * For reference, check out the Type Object (factory) pattern.
   *
   * @param position The starting position of the spawned Actor.
   *
   * @return The spawned GameActor.
   * // TODO: This might work better as a static class. E.g. PlayerFactory::spawn()
   */
  public static spawn(
    template: GameObjectTemplate
  ): GameObject|false {
    let go = GameObject.create(template);

    return go instanceof GameObject ? go : false;
  }

}

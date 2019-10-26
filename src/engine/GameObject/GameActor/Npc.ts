import { GameActor } from './GameActor';
import { ActorFactory } from '../../GameObject';
import { Coordinate } from '../../types/globals';

/**
 * The Npc class. All non-player characters are Npcs, unlike some games where
 * there is a `Monster` class for all hostile actors.The reasoning is that in
 * Fiend, any non-player character can be a friend or foe, depending on how the
 * player acts.
 */
export class Npc extends GameActor {

  /**
   * The actor's type.
   */
  protected _type: ActorFactory;

  /**
   * @constructor
   *
   * @param actorType The Actor's type.
   * @param position The starting position of the spawned Actor.
   */
  public constructor(actorType: ActorFactory, position: Coordinate) {
    super(position);

    this._type = actorType;
  }

  /**
   * The update method for the Npc class.
   *
   * @param delta The time difference between frames. Provided by the game's
   * main game loop.
   * @see FiendGame.main()
   */
  public update(delta: number): void {}

}

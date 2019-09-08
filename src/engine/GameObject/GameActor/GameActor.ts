import { GameObject } from '../GameObject';

/**
 * The interface for the [[GameActor]] class.
 *
 * @interface IGameActor
 */
interface IGameActor {

  /**
   * The position member. Signifies the location of the of the GameObject.
   *
   * @type {Coordinate}
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
}

/**
 * The base GameActor class. All GameObjects that can influence things in the
 * environment will derive from the GameActor class.
 * @abstract
 * @extends [[GameObject]] The GameObject base abstract class.
 * @implements [[IGameActor]]
 */
export abstract class GameActor extends GameObject implements IGameActor {

  /**
   * The position of the GameObject.
   *
   * @type {Coordinate}
   */
  public position: Coordinate;

  /**
   * @constructor
   */
  constructor() {
    super();
  }

  /**
   * The update method for the abstract GameActor class.
   *
   * @abstract
   * @param delta The time difference between frames. Provided by the game's
   * main game loop.
   * @see FiendGame.main()
   */
  public abstract update(delta: number): void;
}

namespace Engine.GameObject {

  export interface IGameActor {

    /**
     *
     * @param delta The time difference between frames. Provided by the game's
     * main game loop.
     * @see {@link FiendGame}
     */
    update(delta: number): void;
  }

  export abstract class GameActor extends GameObject implements IGameActor {

    /**
     * The position of the GameObject.
     */
    public position: Coordinate;

    constructor() {
      super();
    }

    abstract update(delta: number): void;

  }
}

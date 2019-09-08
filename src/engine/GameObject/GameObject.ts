/**
 * Namespace GameObject
 */
namespace Engine.GameObject {

  export interface IGameObject {
    idIncrementor: number;
    id: number;
    type: string;
    name: string;

    update(delta: number): void;
  }

  /**
   * The GameObject abstract class.
   * All game entities inherit from this class.
   */
  export abstract class GameObject {

    private static idIncrementor: number = 0;

    /**
    * @property id The id of the instance of the GameObject.
    */
    protected id: number;

    /**
    * @property type The name of the type of the GameObject.
    */
    protected type: string;

    /**
    * @var name The humanized name of the GameObject.
    */
    public name: string;



    /**
    * The GameObject constructor.
    *
    * @param {string} name The humanized name of the GameObject.
    * @param {string} type The name of the type of the GameObject.
    */
    public constructor() {
      this.id = GameObject.idIncrementor++;
    }

    protected update(delta: number): void {}
  }
}

import { VelocityComponent, PositionComponent } from '../Component';
import { GameObject } from '../GameObject';
import { ComponentManager } from '../Component/ComponentManager';
import { InputHandler } from './InputHandler';
import { Action, ButtonStatus } from '../structs/enums/input_enums';

/**
 * The MovementSystem system class.
 */
export class MovementSystem {

  /**
   * A list of required Components for this system.`
   * @internal
   * Intentionally left as `any` since its static and making an array of
   * disparate types is a PITA.
   */
  public static requiredComponents: Array<any> = [
    VelocityComponent,
    PositionComponent
  ];

  // private readonly movementDirections: MovementDirections = [
  //   {x:0,y:1},    // North
  //   {x:0,y:-1},   // South
  //   {x:1,y:0},    // East
  //   {x:-1,y:0},   // West
  // ];

  // TODO: https://github.com/patschreiber/fiend/issues/47 Create different
  // control components for each type of movable entity
  public InputHandler: InputHandler;

  private _componentManager: ComponentManager;

  /**
   * The VelocityComponent reference.
   */
  private velComp: VelocityComponent;

  /**
   * The PositionComponent reference.
   */
  private posComp: PositionComponent;

  /**
   * @constructor
   * Injects the ComponentManager to the system.
   *
   * @param cm Dependency injection for a ComponentManager.
   */
  public constructor(cm: ComponentManager, ih: InputHandler) {
    this._componentManager = cm;
    this.InputHandler = ih;
  }

  /**
   * Handles user input and movement of GameObjects. Runs once per game loop.
   *
   * @param go The GameObject entity to handle movement.
   * @param delta The time difference between frames. Provided by the game's
   * main game loop.
   * @param inputState The InputHandler's input state, if applicable
   * @see FiendGame.main()
   */
  public update(go: GameObject, delta: number): void {
    // Don't move an entity without the required components.
    if(this._setRequiredComponents(go) === false) {
      return;
    }

    // this.InputHandler.getButtonState()



    let directions = [
      this.InputHandler.getButtonState(Action.MoveS),
      this.InputHandler.getButtonState(Action.MoveN),
      this.InputHandler.getButtonState(Action.MoveE),
      this.InputHandler.getButtonState(Action.MoveW),
    ];

    for (let direction of directions) {
      if (direction.status === ButtonStatus.PRESSED) {
        console.log('this.InputHandler.getInputState() :', this.InputHandler.getInputState());
        console.log("PRe$$ed: ", delta);
        console.log('direction.status :', direction.command);
      }
    }
  }

  /**
   * Sets the references if the GameObject has them attached.
   *
   * @param go The GameObject whos Components we retrieve the components.
   *
   * @return If the Components were attached or not.
   */
  private _setRequiredComponents(go: GameObject): boolean {
    let goid = go.getId();
    this.posComp = this._componentManager
      .getComponent("PositionComponent", goid);
    this.velComp = this._componentManager
      .getComponent("VelocityComponent", goid);

    if (this.posComp === null || this.velComp === null) {
      return false;
    } else {
      return true;
    }
  }

}

import { PositionComponent, VelocityComponent } from '../Component';
import { ComponentManager } from '../Component/ComponentManager';
import { GameObject } from '../GameObject';
import { IMovementSystem } from '../Input';
import { Action, ButtonStatus } from '../structs/enums/input_enums';
import { InputHandler } from './InputHandler';

/**
 * The MovementSystem system class.
 */
export class MovementSystem implements IMovementSystem {

  /**
   * Applies a force to the player. The cardinality is reversed since we're
   * using a programmatically created grid for the game world. `[0,0]` will be
   * in the top-left corner. Put another way, we're only operating in quadrant
   * IV of a grid.
   */
  private _forces: Array<Coordinate> = [
    // North (Action.MoveN === 0)
    // Y is -1 to move north since we're using a grid constructed from Arrays.
    // This means
    {x:0,y:-1},    // North (Action.MoveN === 0)
    {x:0,y:1},   // South (Action.MoveN === 1)
    {x:-1,y:0},    // East  (Action.MoveN === 2)
    {x:1,y:0},   // West  (Action.MoveN === 0)
  ];

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

    let directions = [
      this.InputHandler.getButtonState(Action.MoveN),
      this.InputHandler.getButtonState(Action.MoveS),
      this.InputHandler.getButtonState(Action.MoveE),
      this.InputHandler.getButtonState(Action.MoveW),
    ];

    for (let direction of directions) {
      if (direction.status === ButtonStatus.PRESSED) {
        // direction.command.execute(go, delta);

        let force = this._forces[direction.command];

        this.posComp.worldPosition.x = this.posComp.worldPosition.x += (force.x * 10) * delta;
        this.posComp.worldPosition.y = this.posComp.worldPosition.y += (force.y * 10) * delta;


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

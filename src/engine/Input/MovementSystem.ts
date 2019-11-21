import { VelocityComponent, PositionComponent } from '../Component';
import { GameObject } from '../GameObject';
import { ComponentManager } from '../Component/ComponentManager';
import { InputHandler } from './InputHandler';
import { ButtonStatus, Button } from './control_scheme_plugins/enums';

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

  public Input: InputHandler;

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
    this.Input = ih;
  }

  /**
   * Handles user input and movement of players. Runs once per game loop.
   *
   * @param go The GameObject entity to handle movement.
   * @param delta The time difference between frames. Provided by the game's
   * main game loop.
   * @param inputState The InputHandler's input state, if applicable
   * @see FiendGame.main()
   */
  public update(go: GameObject, delta: number): void {
    let key = this.Input.getButtonState(Button.DOWN);

    if (key.status === ButtonStatus.PRESSED) {
      console.log("PRe$$ed");
    }

    if(this._getRequiredComponents(go)) {
      // switch(inputState) {
      //   case
      // }
    }
  }

  /**
   * Sets the references if the GameObject has them attached.
   *
   * @param go The GameObject in which to retrieve the components.
   *
   * @return The required Components, if they're attached, if they're not, we
   * return an empty object.
   */
  private _getRequiredComponents(go: GameObject): object {
    let goid = go.getId();
    let fetchedComponents = {};

    // for (let C of MovementSystem.requiredComponents) {
    //   let container = this._componentManager.getComponentContainer(C);
    //   console.log('container :', container);

    if (this._componentManager.hasComponent("VelocityComponent", goid)) {
      let comp = this._componentManager
        .getComponent("VelocityComponent", goid);
      fetchedComponents[comp.getTypeId()] = comp;
    }

    if (this._componentManager.hasComponent("PositionComponent", goid)) {
      let comp = this._componentManager
        .getComponent("PositionComponent", goid);
      fetchedComponents[comp.getTypeId()] = comp;
    }

    return fetchedComponents;
  }

}

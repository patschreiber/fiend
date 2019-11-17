import { VelocityComponent, PositionComponent, Component } from '../Component';
import { GameObject } from '../GameObject';
import { IInputMap } from './interfaces/IInputMap';
import { IComponentManager } from '../Component/interfaces/IComponentManager';
import { ComponentManager } from '../Component/ComponentManager';

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
  public constructor(cm: ComponentManager) {
    this._componentManager = cm;
  }

  /**
   * Handles user input and movement of players. Runs once per game loop.
   *
   * @param go The GameObject entity to handle movement.
   * @param delta The time difference between frames. Provided by the game's
   * main game loop.
   * @param ih The InputHandler's input state, if applicable
   * @see FiendGame.main()
   */
  public update(go: GameObject, delta: number, is?: IInputMap): void {
    // console.log('is :', is);

    if(this._getRequiredComponents(go)) {
      // do work here...
    }


  }

  /**
   * Moves the referenced GameObject by updating it's components.
   *
   * @param delta The time difference between frames. Provided by the game's
   * main game loop.
   */
  // private _move(delta: number): void {
  //   this.posComp;
  //   this.velComp;

  //   // speed * time
  // }

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
      } else {
        return {};
      }
    //   console.log('comp :', comp);
    //   if (comp === null) {
    //     return false;
    //  dq

      // attachedComponents[comp.getTypeId()] = comp;
    // }

    return fetchedComponents;
  }

}

import { Component } from "./Component";
import { GameObject } from "../GameObject";

/**
 * The BrainComponent class.
 */
export class BrainComponent extends Component {

  /**
   * @constructor
   */
  public constructor() {
    super();

    this.typeId = "BrainComponent";
  }

  /**
   * Update is intended to be run once per frame.
   *
   * @param GO The GameObject this component belongs to.
   */
  public update(GO: GameObject): void {}
}

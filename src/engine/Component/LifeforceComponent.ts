import { GameObject } from '../GameObject/GameObject';
import { Component } from './Component';

/**
 * The Lifeforce component. Adds health to a GameObject. Adds life, health
 * regeneration, and death.
 *
 * This component is required for entities to be alive or dead, as well as take
 * damage.
 *
 * @extends [[Component]]
 */
export class LifeforceComponent extends Component implements Component {

  /**
   * The current HP of the GameObject.
   */
  private currentHP: number;

  /**
   * The maximum HP of the GameObject.
   */
  private maxHP: number;

  /**
   * @constructor
   */
  public constructor() {
    super();

    this.typeId = "LifeforceComponent";
  }

  /**
   * Update is intended to be run once per frame.
   *
   * @param GO The GameObject this component belongs to.
   */
  public update(GO: GameObject): void {}

}

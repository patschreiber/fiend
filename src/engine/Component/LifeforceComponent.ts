import { GameObject } from '../GameObject/GameObject';
import { Component } from './Component';
import { EventComponent } from './EventComponent';

import { PlayerDeathEvent } from '../Event/PlayerDeathEvent';

/**
 * The Lifeforce component. Adds health to a GameObject. Adds life, health
 * regeneration, and death.
 *
 * This component is required for entities to be alive or dead, as well as take
 * damage.
 */
export class LifeforceComponent extends Component {

  private currentHP: number;

  private maxHP: number;

  private _eventComponent: EventComponent;

  /**
   * @constructor
   *
   * @param GO The GameObject this component belongs to.
   */
  public constructor(GO: GameObject) {
    super();

    this._eventComponent = new EventComponent();
    this._eventComponent.attach(PlayerDeathEvent.create(GO));
  }

  /**
   * Update is intended to be run once per frame.
   */
  public update(): void {
    // this._eventComponent.emit('player_died');
  }

}

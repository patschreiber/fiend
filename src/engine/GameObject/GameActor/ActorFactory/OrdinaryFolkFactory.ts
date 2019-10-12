import {
  ActorFactory,
  OrdinaryFolk
} from '../../../GameObject';

import {
  LifeforceComponent,
  MovementComponent
} from "../../../Component";

/**
 * The OrdinaryFolkFactory class. This is used to spawn non-unique,
 * humanoid-like GameActors aka "Folks."
 */
export class OrdinaryFolkFactory extends ActorFactory {

  /**
   * @constructor
   */
  public constructor() {
    super();

    this.label = "ordinary_folk";
  }

  /**
   * Factory method for creating a new Npc of type OrdinaryFolk.
   * For reference, check out the Type Object (factory) pattern.
   *
   * @param position The starting position of the spawned Actor.
   *
   * @return The spawned GameActor.
   */
  public spawn(position: Coordinate): OrdinaryFolk {
    let npc = new OrdinaryFolk(
      this,
      position,
      new MovementComponent(),
      new LifeforceComponent()
    );

    return npc;
  }
}

import {
  ActorFactory,
  OrdinaryFolk
} from '../../../GameObject';

import {
  LifeforceComponent,
  MovementComponent,
  BrainComponent
} from "../../../Component";

import { Coordinate } from '../../../types/globals';

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
    let npc = new OrdinaryFolk(this, position);

    npc.addComponent(new BrainComponent());
    npc.addComponent(new MovementComponent(50));
    npc.addComponent(new LifeforceComponent());

    return npc;
  }
}

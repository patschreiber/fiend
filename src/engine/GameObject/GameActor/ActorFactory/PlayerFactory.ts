import {
  ActorFactory,
  Player
} from '../../../GameObject';


import {
  LifeforceComponent,
  MovementComponent,
  EventComponent
} from "../../../Component";

import { Coordinate } from '../../../types/globals';
import { PlayerDeathEvent } from '../../../Event';

/**
 * The Player class. This is used to spawn a Player character.
 */
export class PlayerFactory extends ActorFactory {

  /**
   * @constructor
   */
  public constructor() {
    super();

    this.label = "player_1";
  }

  /**
   * Factory method for creating a new Npc of type OrdinaryFolk.
   * For reference, check out the Type Object (factory) pattern.
   *
   * @param position The starting position of the spawned Actor.
   *
   * @return The spawned GameActor.
   */
  public spawn(position: Coordinate): Player {
    let player = new Player(this, position);

    player.addComponent(new EventComponent());
    player.addComponent(new LifeforceComponent());
    player.addComponent(new MovementComponent());

    // Attach some Player-specific events.
    player.getComponent("EventComponent")
      .attach(PlayerDeathEvent.create(player));

    return player;
  }
}

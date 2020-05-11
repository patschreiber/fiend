import { GameObject } from '../GameObject';

/**
 * The PlayerDeathEvent class.
 */
export class PlayerDeathEvent {

  /**
   * Retrieves the native ES6 CustomEvent. [[CustomEvent]] allows the attachment
   * of data via the `CustomEventInit` dictionary.
   *
   * @param player The player GameObject.
   *
   * @emits `player_died`
   */
  public static create(player: GameObject): CustomEvent {

    let event = new CustomEvent('player_died', {
      detail: {
        'go_id': player.getId(),
      }
    });

    return event;
  }
}

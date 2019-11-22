/**
 * The built-in control scheme types. Allows a user to change the control scheme
 * without remapping all the keys individually.
 */
export enum DefaultControlSchemes {
  DEFAULT,
  FPS,
  ONEHANDED_RIGHT,
  ONEHANDED_LEFT,
}

/**
 * The actions an entity can participate in.
 */
export enum Action {
  NullCommand = -1,
  MoveN = 0,
  MoveS = 1,
  MoveE = 2,
  MoveW = 3,
  Use = 4,
  // TODO: Finish
}

/**
 * The ButtonStatus enum.
 * @values
 * [PRESSED]: The button is pressed.
 * [RAISED]: The button is NOT pressed, it is raised. Also can be considered
 * "untouched" by the player.
 * [HELD]: The button is held down.
 * [RELEASED]: The button has been released from a pressed state.
 * [DISABLED]: The button has been disabled and will not fire events.
 */
 export enum ButtonStatus {
  PRESSED,
  RAISED,
  HELD,
  RELEASED,
  DISABLED,
}

/**
 * The generic Button mappings used by the engine internally. B1,B2,B3...etc
 * are standard button presses. The ALT_* buttons are activated when a modifier
 * button has already been pressed. e.g. LSHIFT + W makes a player sprint in
 * most games.
 */
export enum Button {
  NULL = -1,
  B1 = 0,
  B2 = 1,
  B3 = 2,
  B4 = 3,
  B5 = 4,
  B6 = 5,
  B7 = 6,
  B8 = 7,
  B9 = 8,
  ALT_B1 = 9,
  ALT_B2 = 10,
  ALT_B3 = 11,
  ALT_B4 = 3,
  ALT_B5 = 4,
  ALT_B6 = 5,
  ALT_B7 = 6,
  ALT_B8 = 7,
  ALT_B9 = 8,
}

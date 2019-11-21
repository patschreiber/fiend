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

export enum Actions {
  NullCommand,
  MoveN,
  MoveS,
  MoveE,
  MoveW,
  Use
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

export enum Button {
  UP = "ArrowUp",
  DOWN = "ArrowDown",
  LEFT = "ArrowLeft",
  RIGHT = "ArrowRight",
  E = "e",
  Q = "q",
  BSPACE = "Backspace",
  ENTER = "Enter",
  SHIFT = "Shift"
}

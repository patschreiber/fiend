import { Command } from '../Command';
import { GameObject } from '../GameObject';

import { NullCommand } from '../Command';
import { MoveNorthCommand } from '../Command';
import { MoveSouthCommand } from '../Command';
import { MoveEastCommand } from '../Command';
import { MoveWestCommand } from '../Command';
import { IInputMap } from './interfaces/IInputMap';
import { IInputHandler } from './interfaces/IInputHandler';

/**
 * The built-in control scheme types. Allows a user to change the control scheme
 * without remapping all the keys individually.
 */
export enum ControlSchemes {
  DEFAULT,
  FPS,
  ONEHANDED_RIGHT,
  ONEHANDED_LEFT,
}

/**
 * Maps a button to a keyboard input key.
 */
export enum Button {
  UP = "ArrowUp",
  DOWN = "ArrowDown",
  LEFT = "ArrowLeft",
  RIGHT = "ArrowRight",
  E = "e",
  Q = "q",
  BSPACE = "Backspace",
  ENTER = "Enter",
  SHIFT = "Shift",
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
 * The InputHandler class.
 */
export class InputHandler implements IInputHandler {

  /**
   * TODO Structure should add ["context"] so we can have context-independent
   * buttons
   * @type The inputMap instance.
   */
  private inputMap: IInputMap;

  /**
   * @constructor
   * The InputHandler constructor.
   * Attaches the keydown and keyup KeyboardEvent to the document.
   */
  constructor() {

    document.getElementById('game-pane').addEventListener(
      'keydown', (event) => this.buttonPressed(event), false
    );

    document.getElementById('game-pane').addEventListener(
      'keyup', (event) => this.buttonReleased(event), false
    );

    this.inputMap = this.initInputMap();

    // TODO: This should read in user-defined input mappings, otheriwse load
    // default settings. (if user has saved control scheme, else load default)
    this.loadControlScheme(ControlSchemes.DEFAULT);
  }

  /**
   * Binds an input to a command.
   *
   * @param event The key to bind the event to. Uses the browser's native
   * [[KeyboardEvent]] event.
   * @param command The command to bind to the button.
   */
  public keyBind(event: KeyboardEvent, command: Command): void {
    this.inputMap[event.key].command = command;
  }

  /**
   * Determins if a button was pressed. Callback for when a button is pressed by
   * the user.
   *
   * @param {KeyboardEvent} event The user interaction with a keyboard.
   */
  public buttonPressed(event: KeyboardEvent): void {
    event.preventDefault();

    if (this.inputMap[event.key]) {
      this.inputMap[event.key].status = ButtonStatus.PRESSED;
    }
  }

  /**
   * Callback for when a button is released by the user.
   *
   * @param {KeyboardEvent} event The user interaction with a keyboard.
   */
  public buttonReleased(event: KeyboardEvent): void {
    event.preventDefault();

    if (this.inputMap[event.key]) {
      this.inputMap[event.key].status = ButtonStatus.RAISED;
    }
  }

  /**
   * Handles user input. Runs once per game loop.
   *
   * @param actor The GameObject entity to handle input. Most likely will be the
   * Player(s) currently in the game.
   * @param delta The time difference between frames. Provided by the game's
   * main game loop.
   * @see FiendGame.main()
   */
  public handleInput(actor: GameObject, delta: number): void {

    if (this.inputMap[Button.UP].status === ButtonStatus.PRESSED) {
      this.inputMap[Button.UP].command.execute(actor, delta);
    }
    if (this.inputMap[Button.DOWN].status === ButtonStatus.PRESSED) {
      this.inputMap[Button.DOWN].command.execute(actor, delta);
    }
    if (this.inputMap[Button.LEFT].status === ButtonStatus.PRESSED) {
      this.inputMap[Button.LEFT].command.execute(actor, delta);
    }
    if (this.inputMap[Button.RIGHT].status === ButtonStatus.PRESSED) {
      this.inputMap[Button.RIGHT].command.execute(actor, delta);
    }
    if (this.inputMap[Button.E].status === ButtonStatus.PRESSED) {
      this.inputMap[Button.E].command.execute(actor, delta);
    }
    if (this.inputMap[Button.Q].status === ButtonStatus.PRESSED) {
      this.inputMap[Button.Q].command.execute(actor, delta);
    }
    if (this.inputMap[Button.BSPACE].status === ButtonStatus.PRESSED) {
      this.inputMap[Button.BSPACE].command.execute(actor, delta);
    }
    if (this.inputMap[Button.ENTER].status === ButtonStatus.PRESSED) {
      this.inputMap[Button.ENTER].command.execute(actor, delta);
    }
    if (this.inputMap[Button.SHIFT].status === ButtonStatus.PRESSED) {
      this.inputMap[Button.SHIFT].command.execute(actor, delta);
    }
  }

  /**
   * Initializes an input map so the structure is available when needed.
   *
   * @return {IInputMap} The IInputMap interface.
   */
  private initInputMap(): IInputMap {
    let ip = {};

    for(let buttonKey in Button) {
      ip[Button[buttonKey]] = {
        command: NullCommand,
        status: ButtonStatus.RAISED
      }
    }

    return ip;
  }

  /**
   * Loads a control scheme when the game first initializes, so the player can
   * have some input. Supports multiple control schemes so players can re-map
   * controls without having to re-map each button individually.
   *
   * @param controlScheme
   */
  private loadControlScheme(controlScheme: ControlSchemes): void {
    switch(controlScheme) {
      case 1:
        break;
      default:
        // this.inputMap[Button.UP].command = new MoveNorthCommand(player: GameObject);
        this.inputMap[Button.UP].command = new MoveNorthCommand();
        this.inputMap[Button.DOWN].command = new MoveSouthCommand();
        this.inputMap[Button.LEFT].command = new MoveWestCommand();
        this.inputMap[Button.RIGHT].command = new MoveEastCommand();
        this.inputMap[Button.E].command = new NullCommand();
        this.inputMap[Button.Q].command = new NullCommand();
        this.inputMap[Button.BSPACE].command = new NullCommand();
        this.inputMap[Button.ENTER].command = new NullCommand();
        this.inputMap[Button.SHIFT].command = new NullCommand();
    }
  }
}

// var key = {
//   BACKSPACE: 8,
//   TAB:       9,
//   RETURN:   13,
//   ESC:      27,
//   SPACE:    32,
//   PAGEUP:   33,
//   PAGEDOWN: 34,
//   END:      35,
//   HOME:     36,
//   LEFT:     37,
//   UP:       38,
//   RIGHT:    39,
//   DOWN:     40,
//   INSERT:   45,
//   DELETE:   46,
//   ZERO:     48, ONE: 49, TWO: 50, THREE: 51, FOUR: 52, FIVE: 53, SIX: 54, SEVEN: 55, EIGHT: 56, NINE: 57,
//   A:        65, B: 66, C: 67, D: 68, E: 69, F: 70, G: 71, H: 72, I: 73, J: 74, K: 75, L: 76, M: 77, N: 78, O: 79, P: 80, Q: 81, R: 82, S: 83, T: 84, U: 85, V: 86, W: 87, X: 88, Y: 89, Z: 90,
//   TILDA:    192
// };

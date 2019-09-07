import { Command } from "./Commands/Command";
import { MoveNorthCommand } from "./Commands/MoveNorthCommand";
import { MoveSouthCommand } from "./Commands/MoveSouthCommand";

/**
 * The interface for the InputHandler
 */
interface IInputHandler {

  /**
   * 
   * @param event The user interaction with a keyboard.
   * @param command 
   */
  keyBind(event: KeyboardEvent, command: Command): void;

  /**
   * Handles any input if a mapped button is pressed. Run once per game update
   * tick. 
   */
  handleInput(): void;
}

/**
 * The ButtonPress Interface.
 * [Keyboard key: pressed] pair
 */
interface ButtonStatus {
  [key: string]: boolean
}

/**
 * The KeyMap interface. 
 */
interface KeyMap {
  [key: string]: Command
}

/**
 * The built-in control scheme types. Allows a user to change the control scheme
 * without remapping all the keys individually. 
 *
 * @type {enum} ControlSchemes
 */
enum ControlSchemes {
  DEFAULT,
  FPS,
  ONEHANDED_RIGHT,
  ONEHANDED_LEFT,    
}

/**
 * Maps a button to a keyboard input key. 
 * 
 * @type {enum} Button
 */
enum Button {
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
 * Available actions for game actors.
 */
enum Action {
  moveN,
  moveS,
  moveE,
  moveW,
  confirm,
  cancel,
  interact,
}

/**
 * The InputHandler class.
 */
export class InputHandler implements IInputHandler {

  /**
   * TODO Structure should be ["context"][KeyboardEvent.key][Command]
   * e.g. "overworld": {"ArrowUp": this.MoveN, "ArrowDown": this.moveS}
   */
   private buttonMapping: KeyMap;

  /** 
   * List of buttons that have been pressed.
   * [Keyboard key: true]
   */
  private buttonStatus: ButtonStatus = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false,
    e: false,
    q: false,
    Backspace: false,
    Enter: false,
    Shift: false,
  };

  /**
   * The InputHandler constructor. 
   * Attaches the keydown and keyup KeyboardEvent to the document.
   */
  constructor() {

    document.addEventListener(
      'keydown', (event) => this.buttonPressed(event), false
    );

    document.addEventListener(
      'keyup', (event) => this.buttonReleased(event), false
    );

    // this.moveN = new MoveNorthCommand();

    // TODO: This should read in user-defined input mappings, otheriwse load 
    // default settings. (if user has saved control scheme, else load default)
    this.loadControlScheme(ControlSchemes.DEFAULT);
  }

  /**
   * 
   * @param {KeyboardEvent} event The key to bind the event to 
   * @param {Command} command The command to bind to the button
   */
  public keyBind(event: KeyboardEvent, command: Command): void {
    this.buttonMapping[event.key] = command;
  }

  /**
   * Determins if a button was pressed. Callback for when a button is pressed by
   * the user.
   *
   * @param {KeyboardEvent} event The user interaction with a keyboard. 
   */
  public buttonPressed(event: KeyboardEvent): void {
    event.preventDefault();

    // Toggles a boolean.
    this.buttonStatus[event.key] = !this.buttonStatus[event.key];
  }

  /**
   * Callback for when a button is released by the user. 
   * 
   * @param {KeyboardEvent} event The user interaction with a keyboard.
   */
  private buttonReleased(event: KeyboardEvent): void {
    event.preventDefault();

    // Toggles a boolean.
    this.buttonStatus[event.key] = !this.buttonStatus[event.key];
  }
  
  /**
   * Handles user input. Runs once per game loop. 
   */
  public handleInput(): void {

    if (this.buttonStatus[Button.UP]) { 
      this.buttonMapping[Button.UP].execute(); 
    }
    if (this.buttonStatus[Button.DOWN]) { 
      this.buttonMapping[Button.DOWN].execute(); 
    }
    if (this.buttonStatus[Button.LEFT]) { 
      this.buttonMapping[Button.LEFT].execute(); 
    }
    if (this.buttonStatus[Button.RIGHT]) { 
      this.buttonMapping[Button.RIGHT].execute(); 
    }
    if (this.buttonStatus[Button.E]) { 
      this.buttonMapping[Button.E].execute(); 
    }
    if (this.buttonStatus[Button.Q]) { 
      this.buttonMapping[Button.Q].execute(); 
    }
    if (this.buttonStatus[Button.BSPACE]) { 
      this.buttonMapping[Button.BSPACE].execute(); 
    }
    if (this.buttonStatus[Button.ENTER]) { 
      this.buttonMapping[Button.ENTER].execute(); 
    }
    if (this.buttonStatus[Button.SHIFT]) { 
      this.buttonMapping[Button.SHIFT].execute();
    }

    // Nothing pressed, so do nothing.
    return null;
  }

  /**
   * 
   * @param controlScheme 
   */
  private loadControlScheme(controlScheme: ControlSchemes): void {
    switch(controlScheme) {
      case 1:
        break;
      default: 
      this.buttonMapping = {
        "ArrowUp": new MoveNorthCommand,
        "ArrowDown": new MoveSouthCommand,
        // "ArrowRight": this.moveE,
        // "ArrowLeft": this.moveW,
        // "e": this.interact,
        // "q": this.cancel,
        // "Backspace": this.cancel,
        // "Enter": this.confirm,
        // "Shift": this.cancel,
      }


        // this.buttonMapping[Button.UP] = new MoveNorthCommand;
        // this.buttonMapping[Button.DOWN] = new MoveSouthCommand;
        // this.buttonMapping[Button.LEFT] = new MoveNorthCommand;
        // this.buttonMapping[Button.RIGHT] = new MoveNorthCommand;
        // this.buttonMapping[Button.E] = new MoveNorthCommand;
        // this.buttonMapping[Button.Q] = new MoveNorthCommand;
        // this.buttonMapping[Button.BSPACE] = new MoveNorthCommand;
        // this.buttonMapping[Button.ENTER] = new MoveNorthCommand;
        // this.buttonMapping[Button.SHIFT] = new MoveNorthCommand;
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
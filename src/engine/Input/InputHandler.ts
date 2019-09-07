import { Command } from "./Commands/Command";
import { NullCommand } from "./Commands/NullCommand";
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
 * The InputMap interface. 
 * key: The name of the key pressed, sent by the browser.header
 * command: The mapped command to be executed.
 * status: The button's current status
 */
interface InputMap {
  [key: string]: {
    command: Command,
    status: ButtonStatus
  }
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
 * The ButtonStatus enum.
 * - PRESSED: The button is pressed.
 * - RAISED: The button is NOT pressed, it is raised. Also can be considered 
 * "untouched" by the player.
 * - HELD: The button is held down. 
 * - RELEASED: The button has been released from a pressed state.
 * - DISABLED: The button has been disabled and will not fire events. 
 */
 enum ButtonStatus {
  PRESSED,
  RAISED,
  HELD,
  RELEASED,
  DISABLED,
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
   * TODO Structure should add ["context"] so we can have context-independent 
   * buttons
   */
  private inputMap: InputMap;

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

    this.inputMap = this.initInputMap();

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
  private buttonReleased(event: KeyboardEvent): void {
    event.preventDefault();

    if (this.inputMap[event.key]) {
      this.inputMap[event.key].status = ButtonStatus.RAISED; 
    }
  }
  
  /**
   * Handles user input. Runs once per game loop. 
   */
  public handleInput(): void {

    if (this.inputMap[Button.UP].status === ButtonStatus.PRESSED) { 
      this.inputMap[Button.UP].command.execute(); 
    }
    if (this.inputMap[Button.DOWN].status === ButtonStatus.PRESSED) { 
      this.inputMap[Button.DOWN].command.execute(); 
    }
    if (this.inputMap[Button.LEFT].status === ButtonStatus.PRESSED) { 
      this.inputMap[Button.LEFT].command.execute(); 
    }
    if (this.inputMap[Button.RIGHT].status === ButtonStatus.PRESSED) { 
      this.inputMap[Button.RIGHT].command.execute(); 
    }
    if (this.inputMap[Button.E].status === ButtonStatus.PRESSED) { 
      this.inputMap[Button.E].command.execute(); 
    }
    if (this.inputMap[Button.Q].status === ButtonStatus.PRESSED) { 
      this.inputMap[Button.Q].command.execute(); 
    }
    if (this.inputMap[Button.BSPACE].status === ButtonStatus.PRESSED) { 
      this.inputMap[Button.BSPACE].command.execute(); 
    }
    if (this.inputMap[Button.ENTER].status === ButtonStatus.PRESSED) { 
      this.inputMap[Button.ENTER].command.execute(); 
    }
    if (this.inputMap[Button.SHIFT].status === ButtonStatus.PRESSED) { 
      this.inputMap[Button.SHIFT].command.execute();
    }
  }

  private initInputMap(): InputMap {
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
        // this.inputMap[Button.UP].command = new MoveNorthCommand(player: GameActor);
        this.inputMap[Button.UP].command = new MoveNorthCommand();
        this.inputMap[Button.DOWN].command = new MoveSouthCommand();
        this.inputMap[Button.LEFT].command = new NullCommand();
        this.inputMap[Button.RIGHT].command = new NullCommand();
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
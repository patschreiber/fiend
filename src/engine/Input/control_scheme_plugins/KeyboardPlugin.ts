import { IControlSchemePlugin } from './IInputPlugin';

/**
 * The KeyboardInputMap class.
 *
 */
export class KeyboardPlugin implements IControlSchemePlugin {

  public readonly buttonList: ButtonList = {
    UP: "ArrowUp",
    DOWN: "ArrowDown",
    LEFT: "ArrowLeft",
    RIGHT: "ArrowRight",
    E: "e",
    Q: "q",
    BSPACE:"Backspace",
    ENTER: "Enter",
    SHIFT: "Shift",
  }

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

  }

  /**
   * Determins if a button was pressed. Callback for when a button is pressed by
   * the user.
   *
   * @param event The user interaction with a keyboard.
   */
   public buttonPressed(event: KeyboardEvent): void {
    event.preventDefault();
    console.log("pressed");
    if (this.inputMap[event.key]) {
      this.inputMap[event.key].status = ButtonStatus.PRESSED;
    }
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
        this.inputMap[Button.UP].command = new MoveNorthCommand();
        this.inputMap[Button.DOWN].command = new MoveSouthCommand();
        this.inputMap[Button.LEFT].command = new MoveWestCommand();
        this.inputMap[Button.RIGHT].command = new MoveEastCommand();
        this.inputMap[Button.E].command = new NullCommand();
        this.inputMap[Button.Q].command = new NullCommand();
        this.inputMap[Button.BSPACE].command = new NullCommand();
        this.inputMap[Button.ENTER].command = new NullCommand();
        this.inputMap[Button.SHIFT].command = new NullCommand();

        this.inputMap[Button.UP].command = "MoveN";
        this.inputMap[Button.DOWN].command = "MoveS";
        this.inputMap[Button.LEFT].command = "MoveE";
        this.inputMap[Button.RIGHT].command = new MoveEastCommand();
        this.inputMap[Button.E].command = "Use";
        this.inputMap[Button.Q].command = new NullCommand();
        this.inputMap[Button.BSPACE].command = new NullCommand();
        this.inputMap[Button.ENTER].command = new NullCommand();
        this.inputMap[Button.SHIFT].command = new NullCommand();
    }
  }

  /**
   * Callback for when a button is released by the user.
   *
   * @param event The user interaction with a keyboard.
   */
  public buttonReleased(event: KeyboardEvent): void {
    event.preventDefault();
    console.log("released");
    if (this.inputMap[event.key]) {
      this.inputMap[event.key].status = ButtonStatus.RAISED;
    }
  }

}

import { IInputOutputPlugin } from '../interfaces/IInputOutputPlugin';
import { InputEvent } from '../../types/events';
import { IInputMap } from '../interfaces/IInputMap';
import {
  Actions,
  DefaultControlSchemes,
  ButtonStatus,
  Button
} from './enums';

/**
 * The KeyboardInputMap class.
 *
 */
export class KeyboardPlugin implements IInputOutputPlugin {

  /**
   * TODO: Structure should add ["context"] so we can have context-independent
   * buttons
   * @type The inputMap instance.
   */
  private _inputMap: IInputMap = {
    "ArrowUp": {
      command: Actions.NullCommand,
      status: ButtonStatus.RAISED
    },
    "ArrowDown": {
      command: Actions.NullCommand,
      status: ButtonStatus.RAISED
    },
    "ArrowLeft": {
      command: Actions.NullCommand,
      status: ButtonStatus.RAISED
    },
    "ArrowRight": {
      command: Actions.NullCommand,
      status: ButtonStatus.RAISED
    },
    "e": {
      command: Actions.NullCommand,
      status: ButtonStatus.RAISED
    },
    "q": {
      command: Actions.NullCommand,
      status: ButtonStatus.RAISED
    },
    "Backspace": {
      command: Actions.NullCommand,
      status: ButtonStatus.RAISED
    },
    "Enter": {
      command: Actions.NullCommand,
      status: ButtonStatus.RAISED
    },
    "Shift": {
      command: Actions.NullCommand,
      status: ButtonStatus.RAISED
    },
  };

  // public readonly buttonList: ButtonList = {
  //   UP: "ArrowUp",
  //   DOWN: "ArrowDown",
  //   LEFT: "ArrowLeft",
  //   RIGHT: "ArrowRight",
  //   E: "e",
  //   Q: "q",
  //   BSPACE:"Backspace",
  //   ENTER: "Enter",
  //   SHIFT: "Shift",
  // }

  /**
   * @constructor
   * The InputHandler constructor.
   * Attaches the keydown and keyup KeyboardEvent to the document.
   *
   * @param controlScheme optional The control scheme to load. If none is give, the
   * default will be used.
   */
  constructor(controlScheme?: DefaultControlSchemes) {
    // this._inputMap = this._initInputMap(this.buttonList);
    this.loadControlScheme();

    document.getElementById('game-pane').addEventListener(
      'keydown', (event) => this.buttonPressed(event), false
    );

    document.getElementById('game-pane').addEventListener(
      'keyup', (event) => this.buttonReleased(event), false
    );
  }


  public getInputState(): IInputMap {
    return this._inputMap;
  }

  /**
   * Determins if a button was pressed. Callback for when a button is pressed by
   * the user.
   *
   * @param event The user interaction with a keyboard.
   */
   public buttonPressed(event: InputEvent, ): void {
    event.preventDefault();
    console.log("pressed");
    if (this._inputMap[event.key]) {
      this._inputMap[event.key].status = ButtonStatus.PRESSED;
    }
  }

  /**
   * Callback for when a button is released by the user.
   *
   * @param event The user interaction with a keyboard.
   */
   public buttonReleased( event: KeyboardEvent): void {
    event.preventDefault();
    console.log("released");
    if (this._inputMap[event.key]) {
      this._inputMap[event.key].status = ButtonStatus.RAISED;
    }
  }

  /**
   * Loads a control scheme when the game first initializes, so the player can
   * have some input. Supports multiple control schemes so players can re-map
   * controls without having to re-map each button individually.
   *
   * @param controlScheme optional The control scheme to attach.
   */
  public loadControlScheme(
    controlScheme?: DefaultControlSchemes
  ): void {

    switch(controlScheme) {
      case 1:
        break;
      default:
        this._inputMap[Button.UP].command = Actions.MoveN;
        this._inputMap[Button.DOWN].command = Actions.MoveS;
        this._inputMap[Button.LEFT].command = Actions.MoveE;
        this._inputMap[Button.RIGHT].command = Actions.MoveW;
        this._inputMap[Button.E].command = Actions.Use;
        this._inputMap[Button.Q].command = Actions.NullCommand;
        this._inputMap[Button.BSPACE].command = Actions.NullCommand;
        this._inputMap[Button.ENTER].command = Actions.NullCommand;
        this._inputMap[Button.SHIFT].command = Actions.NullCommand;
    }
  }

  // /**
  //  * Initializes an input map so the structure is available when needed.
  //  *
  //  * @param buttonList The buttons provided by the control scheme plugin.
  //  *
  //  * @return The constructed Input map interface.
  //  */
  //  private _initInputMap(buttonList: ButtonList): IInputMap {
  //   let ip: IInputMap = {};

  //   for(let i in this.buttonList) {
  //     ip[this.buttonList[i]] = {
  //       command: Actions.NullCommand,
  //       status: ButtonStatus.RAISED
  //     }
  //   }

  //   return ip;
  // }

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

import { IInputOutputDevicePlugin } from '../interfaces/IInputOutputDevicePlugin';
import {
  Action,
  DefaultControlSchemes,
  ButtonStatus,
  Button
} from '../../structs/enums/input_enums';
import { InputSignalMap, InputState } from '../../types/inputs';

/**
 * The KeyboardInputMap class.
 *
 */
export class KeyboardPlugin implements IInputOutputDevicePlugin {

  /**
   * Maps an input from an I/O device to an internal Button used by the engine.
   * This is necessary for when the engine needs to know when to change the
   * state of an internal button, and must lookup the input that came through to
   * do it.
   *
   * @internal This will be I/O device dependent.
   */
  private _inputSignalMap: InputSignalMap = {
    "ArrowUp": Button.B1,
    "ArrowDown": Button.B2,
    "ArrowLeft": Button.B3,
    "ArrowRight": Button.B4,
    "e": Button.B5,
    "q": Button.B6,
    "Backspace": Button.B7,
    "Enter": Button.B8,
    "Shift": Button.B9
  }

  /**
   * TODO: Structure should add ["context"] so we can have context-independent
   * buttons
   * @type The inputMap instance.
   */
  private _currentControllerMap: InputState = [
    // Button.B_1
    {
      command: Action.NullCommand,
      status: ButtonStatus.RAISED
    },
    // Button.B_2
    {
      command: Action.NullCommand,
      status: ButtonStatus.RAISED
    },
    // Button.B_3
    {
      command: Action.NullCommand,
      status: ButtonStatus.RAISED
    },
    // Button.B_4
    {
      command: Action.NullCommand,
      status: ButtonStatus.RAISED
    },
    // Button.B_5
    {
      command: Action.NullCommand,
      status: ButtonStatus.RAISED
    },
    // Button.B_6
    {
      command: Action.NullCommand,
      status: ButtonStatus.RAISED
    },
    // Button.B_7
    {
      command: Action.NullCommand,
      status: ButtonStatus.RAISED
    },
    // Button.B_8
    {
      command: Action.NullCommand,
      status: ButtonStatus.RAISED
    },
    // Button.B_9
    {
      command: Action.NullCommand,
      status: ButtonStatus.RAISED
    },
  ];

  /**
   * @constructor
   * The InputHandler constructor.
   * Attaches the keydown and keyup KeyboardEvent to the document.
   *
   * @param controlScheme optional The control scheme to load. If none is give,
   * the default will be used.
   */
  constructor(controlScheme?: DefaultControlSchemes) {
    // this._inputMap = this._initInputMap(this.buttonList);
    this._loadControlScheme(controlScheme);

    document.getElementById('game-pane').addEventListener(
      'keydown', (event) => this.handleInputEvent(
        event,
        ButtonStatus.PRESSED
      ),
      false
    );

    document.getElementById('game-pane').addEventListener(
      'keyup', (event) => this.handleInputEvent(
        event,
        ButtonStatus.RAISED
      ),
      false
    );
  }

  /**
   * Callback for when an input event fires.
   *
   * @param event The event representing the user interaction with a keyboard.
   * @param buttonStatus The status the button should be sent to when the event
   * fires.
   */
   public handleInputEvent(event: KeyboardEvent, buttonStatus: ButtonStatus): void {
    event.preventDefault();

    let button = this._inputSignalMap[event.key];

    if (this._currentControllerMap[button]) {
      this._currentControllerMap[button].status = buttonStatus;
    }
  }

  /**
   * Gets the current state of the Buttons at the time of invocation.
   *
   * @return The current state of the controller.
   */
  public getInputState(): InputState {
    return this._currentControllerMap;
  }

  public getInputSignalMap(): InputSignalMap {
    return this._inputSignalMap;
  }

  /**
   * Maps Action to the current in-use input controller. Supports multiple
   * control schemes so players can choose sensible default controls without
   * having to re-map each button individually.
   *
   * @param controlScheme optional The control scheme to attach.
   */
  public _loadControlScheme(
    controlScheme?: DefaultControlSchemes
  ): void {

    switch(controlScheme) {
      case 1:
        break;
      default:
        this._currentControllerMap[Button.B1].command = Action.MoveN;
        this._currentControllerMap[Button.B2].command = Action.MoveS;
        this._currentControllerMap[Button.B3].command = Action.MoveE;
        this._currentControllerMap[Button.B4].command = Action.MoveW;
        this._currentControllerMap[Button.B5].command = Action.Use;
        this._currentControllerMap[Button.B6].command = Action.NullCommand;
        this._currentControllerMap[Button.B7].command = Action.NullCommand;
        this._currentControllerMap[Button.B8].command = Action.NullCommand;
        this._currentControllerMap[Button.B9].command = Action.NullCommand;
    }
  }

}

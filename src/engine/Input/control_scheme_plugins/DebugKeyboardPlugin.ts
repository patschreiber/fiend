/**
 * @file This KeyboardPlugin offers a lot of functionality and debug mappings
 * not found in normal InputOutputDevicePlugins.
 *
 * ONLY USE FOR ACTIVE DEVELOPMENT!
 */

import { IInputOutputDevicePlugin } from '../interfaces/IInputOutputDevicePlugin';
import {
  Action,
  DefaultControlSchemes,
  ButtonStatus,
  Button,
  DebugAction
} from '../../structs/enums/input_enums';
import { InputSignalMap, InputState } from '../../types/inputs';
// import { MoveNorthCommand, MoveSouthCommand, MoveEastCommand, MoveWestCommand, NullCommand } from '../../Command';

/**
 * The DebugKeyboardInputMap class.
 *
 */
export class DebugKeyboardPlugin implements IInputOutputDevicePlugin {

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
    "Shift": Button.B9,
    "F1": Button.ALT_B1,
    "F2": Button.ALT_B2,
    "F3": Button.ALT_B2,
    "F4": Button.ALT_B2,
    "F5": Button.ALT_B2,
    "F6": Button.ALT_B2,
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
    // Button.ALT_B1
    {
      command: Action.NullCommand,
      status: ButtonStatus.RAISED
    },
    // Button.ALT_B2
    {
      command: Action.NullCommand,
      status: ButtonStatus.RAISED
    },
    // Button.ALT_B3
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
    this.loadControlScheme(controlScheme);

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
    console.log(event);

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

  /**
   * Retrieves the mapping of input signal from the active I/O device to an
   * internal [[Button]].
   *
   * @return THe mapping of input signal.
   */

  /**
   * Accessor for the private member `id`.
   *
   * @returns the mapping of input signal from the active I/O device to an
   * internal [[Button]].
   */
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
  public loadControlScheme(
    controlScheme?: DefaultControlSchemes
  ): void {

    switch(controlScheme) {
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
        this._currentControllerMap[Button.ALT_B1].command = DebugAction.SpawnPlayer;
        this._currentControllerMap[Button.ALT_B2].command = DebugAction.SpawnOrdinaryFolk;
        this._currentControllerMap[Button.ALT_B3].command = DebugAction.SwitchInput;
    }
  }

}

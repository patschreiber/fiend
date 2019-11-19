/**
 * The IControlSchemePlugin interface.
 */
export interface IControlSchemePlugin {
  buttonList: ButtonList;
  buttonPressed(event: any): void;
  buttonReleased(event: any): void;
}

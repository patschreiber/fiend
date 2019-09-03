export interface KeyCode {
  [key: string]: number
}

export class InputHandler {

  // /**
  //   * The keyboard event listener
  //   * 
  //   * @var {EventListener}
  //   */
  // protected keyboardEventListener: EventListener;

    /**
     * The game div container. id="fiend-game"
     * 
     * @var {HTMLElement}
     */
  private _gameContainerElement: HTMLElement;

  // TODO These are commands to be delegated
  public moveN: number;
  public moveS: number;
  public moveE: number;
  public moveW: number;
  public confirm: number;
  public cancel: number;

  constructor(gameDiv: HTMLElement) {

    this._gameContainerElement = gameDiv;


    // this.keyboardEventListener = () => this.handleInput(); 

    document.getElementById("fiend-game").addEventListener(
      'keydown', event=> this.handleInput(event)
    );
  }
  
  public execute(): void {
    throw new Error("Abstract method!");
  }
  
  /**
   * 
   * @param {KeyboardEvent} event The user interaction with a keyboard. 
   * Deprecates event keyCode.
   */
  handleInput(event: KeyboardEvent): void {
    console.log("hi");
    console.log('event.key :', event.keyCode);
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
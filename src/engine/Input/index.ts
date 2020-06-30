/**
 * @file The Input Barrel. Re-exports Input files for easier import
 * elsewhere.
 * @see @link https://basarat.gitbooks.io/typescript/docs/tips/barrel.html
 */

/**
 * The InputHandler interface.
 */
export * from "./InputHandler";

/**
 * The MovementSystem interface.
 */
export * from "./MovementSystem";

/**
 * Interfaces
 */

/**
 * The InputHandler interface.
 */
export * from "./interfaces/IInputHandler";

/**
 * The IODevicePlugin interface.
 */
export * from "./interfaces/IIODevicePlugin";

/**
 * The MovementSystem interface.
 */
export * from "./interfaces/IMovementSystem";

/**
 * I/O Device Plugins
 */

/**
 * The DebugKeyboardPlugin interface.
 */
export * from "./io_device_plugins/DebugKeyboardPlugin";

/**
 * The KeyboardPlugin interface.
 */
export * from "./io_device_plugins/KeyboardPlugin";

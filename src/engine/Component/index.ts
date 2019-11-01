/**
 * @file The Component Barrel. Re-exports Component files for easier import
 * elsewhere.
 * @see @link https://basarat.gitbooks.io/typescript/docs/tips/barrel.html
 */

/**
 * Progenitor classes for all Component classes in the game.
 */
export * from './Component';

/**
 * The Event component. Allows a GameObject to emit and/or listen for events.
 */
 export * from './EventComponent';

/**
 * The Lifeforce component. Adds health and all that comes with it when attached
 * to a GameActor.
 */
export * from './LifeforceComponent';

/**
 * The Movement component. Adds movement to a GameActor.
 */
 export * from './MovementComponent';

/**
 * The Brain component. Adds AI and behavior to a GameActor.
 */
export * from './BrainComponent';

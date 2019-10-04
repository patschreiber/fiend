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
 * The Lifeforce component. Adds health and all that comes with it when attached
 * to an entity.
 */
export * from './LifeforceComponent';

/**
 * The Event component. Allows an entiy to emit and/or listen for events.
 */
export * from './EventComponent';

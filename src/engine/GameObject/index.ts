/**
 * @file The GameObject Barrel. Re-exports GameObject files for easier import
 * elsewhere.
 * @see @link https://basarat.gitbooks.io/typescript/docs/tips/barrel.html
 */

/**
 * Progenitor classes for all entities in the game.
 */
export * from './GameObject';

/**
 * The base GameActor class. All GameObjects that can influence things in the
 * environment will derive from the GameActor class.
 */
export * from './GameActor/GameActor';

/**
 * The player character class.
 */
export * from './GameActor/Player';

/**
 * The base enemy class. TODO: Might be deprecated in the future.
 */
export * from './GameActor/Enemy';

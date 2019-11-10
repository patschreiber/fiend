/**
 * @file The GameObject Barrel. Re-exports GameObject files for easier import
 * elsewhere.
 * @see @link https://basarat.gitbooks.io/typescript/docs/tips/barrel.html
 */

/**
 * The interface for GameObject.
 */
export * from './interfaces/IGameObject';

/**
 * The interface for GameObjectManager.
 */
export * from './interfaces/IGameObjectManager'

/**
 * The GameObjectManager class.
 */
export * from './GameObjectManager';

/**
 * Progenitor classes for all entities in the game.
 */
export * from './GameObject';

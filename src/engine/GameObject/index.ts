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
 * The interface for GameActor.
 */
export * from './interfaces/IGameActor';

/**
 * The interface for GameObjectManager.
 */
export * from './interfaces/IGameObjectManager'

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
 * The base Npc class.
 */
export * from './GameActor/Npc';

/**
 * The ordinary folk npc class.
 */
export * from './GameActor/OrdinaryFolk';

/**
 * The player character class.
 */
export * from './GameActor/Player';

/**
 * The base Actor factory class.
 */
export * from './GameActor/ActorFactory/ActorFactory';

/**
 * The OrdinaryFolk factory class.
 */
export * from './GameActor/ActorFactory/OrdinaryFolkFactory';

/**
 * The Player factory class.
 */
export * from './GameActor/ActorFactory/PlayerFactory';

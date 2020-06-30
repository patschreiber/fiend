/**
 * @file The Component Barrel. Re-exports Component files for easier import
 * elsewhere.
 * @see @link https://basarat.gitbooks.io/typescript/docs/tips/barrel.html
 */

/**
 * Progenitor classes for all Component classes in the game.
 */
export * from "./Component";

/**
 * The Event component. Allows a GameObject to emit and/or listen for events.
 */
export * from "./EventComponent";

/**
 * The Lifeforce component. Adds health and all that comes with it when attached
 * to a GameObject.
 */
export * from "./LifeforceComponent";

/**
 * The Brain component. Adds AI and behavior to a GameObject.
 */
export * from "./BrainComponent";

/**
 * The Collider component. Adds collision detection to a GameObject.
 */
export * from "./ColliderComponent";

/**
 * The Velocity component. Gives the GameObject the need for speed.
 */
export * from "./VelocityComponent";

/**
 * The Position component. Adds a location for the GameObect.
 */
export * from "./PositionComponent";

/**
 * The Render component. Gives the GameObject a shape that can be drawn.
 */
export * from "./RenderComponent";

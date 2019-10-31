import { Player } from '../../GameObject';

/**
 * The IScene interface. All Scenes will implement this interface.
 */
export interface IScene {
  maxActiveEntities: number;
  gameObjects: Array<any>;
  tileMap: any;
  update(delta: number): void;
  getPlayer(): Player;
}

import { GameObjectContainer } from '../types/gameobjects';
import { OrdinaryFolkFactory } from '../GameObject';
import { PlayerFactory } from '../GameObject';

/**
 * The GameObjectManager class.
 */
export class GameObjectManager {

  public OrdinaryFolkFactory: OrdinaryFolkFactory;
  public PlayerFactory: PlayerFactory;

  private _activeGameObjects: GameObjectContainer;
  private _culledGameObjects: GameObjectContainer;
  private _sleepingGameObjects: GameObjectContainer;
  private _sceneGraveyard: GameObjectContainer;
  private _inactiveGameObjects: GameObjectContainer;
  private _worldGraveyard: GameObjectContainer;

  public constructor() {
    this._initGameObjectFactories();
  }

  private _initGameObjectFactories(): void {
    this.PlayerFactory = new PlayerFactory();
    this.OrdinaryFolkFactory = new OrdinaryFolkFactory();
  }
}

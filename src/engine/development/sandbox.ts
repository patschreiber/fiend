// Import everything
import {
  Command,
  MoveEastCommand,
  MoveNorthCommand,
  MoveSouthCommand,
  MoveWestCommand,
  NullCommand
} from "../Command"
import {
  Component,
  EventComponent,
  LifeforceComponent,
  MovementComponent
} from "../Component"
import { PlayerDeathEvent } from "../Event"
import {
  ActorFactory,
  PlayerFactory,
  OrdinaryFolkFactory,

  GameObject,
  GameActor,
  Npc,
  OrdinaryFolk,
  Player
} from "../GameObject"
import { InputHandler } from "../Input/InputHandler"
import { Camera } from "../Render/Camera/Camera"
import { Renderer } from "../Render/Renderer"
import { AssetLoader } from "../AssetLoader"
import { FiendGame } from "../FiendGame"

/**
 * The Sandbox class. Play around!
 * This is a debug file and should not be used in production.
 */
export class Sandbox {

  /**
   * This array replaces the normal gameObjects array found in FiendGame.
   */
  public testGameObjects: Array<any>;

  // TODO: This is a test! Actor factories should be loaded per Scene, once the
  // scene functionality is created!
  public OrdinaryFolkFactory: OrdinaryFolkFactory;
  public PlayerFactory: PlayerFactory;

  /**
   * The instance of the Player's character.
   */
  public Player: Player;

  constructor() {
    // Instantiate Actor factories here as a test. We want to instantiate the
    // factory so the memory is allocated when the Scene is loaded.
    // TODO: Actor factories should be loaded per Scene, once the scene
    // functionality is created!
    this.OrdinaryFolkFactory = new OrdinaryFolkFactory();
    this.PlayerFactory = new PlayerFactory();
    this.Player = this.PlayerFactory.spawn({x:125,y:125});

    this.testGameObjects = [
      // TODO This is a test, do should be empty on init.
      this.Player,
      this.OrdinaryFolkFactory.spawn({x:200,y:100}),
    ];

    // TODO: This is a test to test event emission.
    document.getElementById('game-pane').addEventListener(
      'player_died',
      (event: CustomEvent) => this.respondToGameObjectCreation(event),
      false
    );


  }

  public update(delta: number): void {
  }

  public respondToGameObjectCreation(event: CustomEvent) {
    console.log('event.detail.go_id :', event.detail.go_id);
  }
}

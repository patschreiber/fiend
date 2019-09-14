import { GameActor } from "../GameObject";

export abstract class Command {
  public abstract execute(actor: GameActor, delta: number): void;
}

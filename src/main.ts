import { Enemy } from "./entities/Enemy";
import { FiendGame } from "./engine/FiendGame";

declare global {
  interface Window { 
    FG: any ,
    ctx: CanvasRenderingContext2D
  }
}

var FG = new FiendGame(640, 480);


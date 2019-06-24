interface FiendGame {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  gameObjectCount: number;
  gameObjects: Array<Enemy>;
  
  container: HTMLElement;
  stopToken: number|null;
  tickLength: number;
  lastFrameTime: number;
  maxEntities: number;
}
export class Enemy {
  public HP: number;
  public ATK: number;
  public speed: number;
  public position: { x: number, y: number };

  constructor() {
    this.HP = 100;
    this.ATK = 1;
    this.speed = 100;
    this.position = {
      x: 0,
      y: 0
    };
  }

  update(delta: number) {
    this.position.x += this.speed * delta;
    this.position.y += this.speed * delta;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.position.x, this.position.y, 10, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
  }
}

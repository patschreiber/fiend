namespace Engine.GameObject {

  /**
   * The Enemy class.
   */
  export class Enemy extends GameActor {
    public HP: number;
    public ATK: number;
    public speed: number;

    /**
     * The position of the GameObject
     */
    public position: Coordinate;

    constructor() {
      super();

      this.name = "Black Bat";

      this.HP = 100;
      this.ATK = 1;
      this.speed = 100;
      this.position = {
        x: 0,
        y: 0
      };

      console.log('this.id :', this.id);
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
}

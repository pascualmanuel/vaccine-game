class Score {
  constructor(ctx, posX, posY){
    this.ctx= ctx,
    this.pos = {
      x: 210,
      y: 70
    }
    this.points = 0
  }

  draw() {
    this.ctx.font = '40px Helvetica';
    this.ctx.fillText(this.points, this.pos.x, this.pos.y);
  }

}

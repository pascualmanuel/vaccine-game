class Lives {
  constructor(ctx, posX, posY){
    this.ctx = ctx,
    this.pos = {
      x: 785,
      y: 63    
    }
    this.playerLives = 5
  }

  draw() {
    this.ctx.font = '40px helvetica';
    this.ctx.fillStyle = "white"
    this.ctx.fillText(this.playerLives, this.pos.x, this.pos.y);
  }
}

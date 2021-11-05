class Lives {
  constructor(ctx, posX, posY){
    this.ctx = ctx,
    this.pos = {
      x: 755,
      y: 70    
    }
    this.playerLives = 5
  }

  draw() {
    this.ctx.font = '40px helvetica';
    this.ctx.fillStyle = "black"
    this.ctx.fillText(this.playerLives, this.pos.x, this.pos.y);
  }

}

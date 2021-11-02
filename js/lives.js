class Lives {
  constructor(ctx, posX, posY){
    this.ctx = ctx,
    this.pos = {
      x: 600,
      y: 35    
    }
    this.playerLives = 5
  }

  draw() {
    this.ctx.font = '40px serif';
    this.ctx.fillText(this.playerLives + " Vidas.", this.pos.x, this.pos.y);
  }
}

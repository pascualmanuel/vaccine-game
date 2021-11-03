class Score {
  constructor(ctx, posX, posY){
    this.ctx = ctx,
    this.pos = {
      x: 40,
      y: 35    
    }
    this.points = 0

  }

  draw() {
    this.ctx.font = '40px serif';
    this.ctx.fillText(this.points + " Virus Killed.", this.pos.x, this.pos.y);
  }

}

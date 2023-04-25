class Score {
  constructor(ctx, posX, posY) {
    (this.ctx = ctx),
      (this.pos = {
        x: 222,
        y: 70,
      });
    this.points = 0;
  }

  draw() {
    this.ctx.font = "40px Helvetica";
    if (this.points > 9) {
      this.pos.x = 209; // Change the "X" position when the score is greater than 10.
      this.pos.y = 70; // Change the "Y" position when the score is greater than 10.
    }
    this.ctx.fillText(this.points, this.pos.x, this.pos.y);
  }
}

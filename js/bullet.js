class Bullet {
    constructor(ctx, playerPosX, playerPosY, playerWidth, playerHeight ){
        this.ctx = ctx;
        
        this.pos = {
            x: playerPosX + (playerWidth / 2),
            y: playerPosY + (playerHeight / 3)
          }
          this.radius = 10;
          this.speed = {
            y: 10
          }
        }

        draw() {
          this.ctx.fillStyle = "red";
          this.ctx.beginPath();
          this.ctx.arc(this.pos.x, this.pos.y, this.radius, 0, Math.PI * 2);
          this.ctx.fill();
          this.ctx.closePath();
        //   this.ctx.fillStyle = "black";
          this.move()
        }
        
        move() {
          this.pos.y -= this.speed.y;
        }
    }
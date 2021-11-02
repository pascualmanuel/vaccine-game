class Bullet {
    constructor(ctx, playerPosX, playerPosY, playerWidth, playerHeight ){
        this.ctx = ctx;
        
        this.pos = {
            x: playerPosX + (playerWidth / 3),
            y: playerPosY + (playerHeight / 3)
          }

          this.width = 18
          this.height = 18
          // this.radius = 10;
          this.speed = {
            y: 10
          }
        }

        

        draw() {
          this.ctx.fillStyle = "red";
          this.ctx.beginPath();
          this.ctx.fillRect(this.pos.x, this.pos.y, this.width, this.height);
          this.ctx.fill();
          this.ctx.closePath();
          this.move()
        }
        
        move() {
          this.pos.y -= this.speed.y;
        }
    }
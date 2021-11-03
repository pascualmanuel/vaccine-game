class Bullet {
  constructor(ctx, playerPosX, playerPosY, playerWidth, playerHeight, imageName){
    this.ctx = ctx;
    
    this.pos = {
      x: playerPosX + (playerWidth / 3),
      y: playerPosY + (playerHeight / 3)
    }

    this.width = 20
    this.height = 35
    // this.radius = 10;
    this.speed = {
      y: 10
    }
    this.image = undefined
    this.imageName = imageName
    this.init()
  }

  init() {
    this.image = new Image()
    this.image.src = `img/${this.imageName}`
  }

  draw() {
    this.ctx.drawImage(this.image, this.pos.x, this.pos.y, this.width, this.height)     
    this.move()  
  }

  move() {
    this.pos.y -= this.speed.y;
  }

}
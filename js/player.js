class Player {
  constructor(ctx, canvasSize, posX, posY, width, height, imageName) {
    this.ctx = ctx
    this.canvasSize = canvasSize
    this.posX = posX
    this.posY = posY
    this.width = width
    this.height = height
    this.image = undefined
    this.bullets = []
    this.imageName = imageName
    this.lives = 5
    this.init()
  }

  init() {
    this.image = new Image()
    this.image.src = `img/${this.imageName}`
  }
  
  draw() {
    this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height )
  }

  shoot() {
    this.bullets.push(new Bullet(this.ctx, this.posX, this.posY, this.width, this.height, "bullet.png"))
  }


  moveLeft() {
    if (this.posX >= 20) this.posX -= 40
    else this.posX = 0
  }

  moveRight() {
    if (this.posX + this.width < this.canvasSize.width) this.posX += 40
  }
}


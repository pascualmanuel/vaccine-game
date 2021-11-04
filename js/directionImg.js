class ChangeDirection{
  constructor(ctx, posX, posY, width, height, imageName){
    this.ctx = ctx
    this.posX = posX
    this.posY = posY
    this.width = width
    this.height = height
    this.image = undefined
    this.imageName = imageName
    this.init()
  }

  init() {
    this.image = new Image()
    this.image.src = `img/${this.imageName}`
  }

  draw() {
    this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height)       
  }
}
class Player {
    constructor(ctx, posX, posY, width, height) {
      this.ctx = ctx
  
      this.posX = posX
      this.posY = posY
  
      this.width = width
      this.height = height
  
      this.image = undefined
  
      this.init()
    }
}
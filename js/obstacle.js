class Obstacle{
    constructor(ctx, posX, posY, width, height, speed){

    this.ctx = ctx
    this.posX = posX
    this.posY = posY
    this.width = width
    this.height = height
    this.speed = speed
    }

    draw() {
        this.ctx.fillStyle = "Black"
        this.ctx.fillRect(this.posX, this.posY, 20, 20)
    }

    move() {
        this.posY += this.speed
        console.log(this.posY);
    }
}
const covidGame = {
    title: 'Covid Game',
    author: 'Alex & Manu',
    license: undefined,
    version: '1.0.0',
    desciption: 'Kill the CO-VID',
    canvasDOM: undefined,
    ctx: undefined,
    intervalId: undefined,
    canvasSize: { width: undefined, height: undefined },
    background: undefined,
    player: undefined,
    // scoreBoard: 0,
    framesCounter: 0,
    frames: 60,
    obstacles: [],
    keys: {
    player: {
        SPACE: " ",
        ARROW_LEFT: "ArrowLeft",
        ARROW_RIGHT: "ArrowRight"
        },
    },

    init() {
      this.setContext()
      this.setDimensions()
      this.createAll()
      this.setListeners()
      this.start()
    },

    start() {
      setInterval(() => {
        this.framesCounter++
        if (this.framesCounter % 60 === 0) {
          this.createObstacles()
        }
        this.clearScreen()
        this.drawAll()
        this.moveObstacles()
        // if(this.detectFloorCollision()) {
        // // console.log("quitlive");
        // }
        this.detectFloorCollision()
        // console.log(this.detectCollision())
        if (this.detectCollision()) {
          
        }
      }, 1000 / this.frames);
    },

    clearScreen() {
      this.ctx.clearRect(0, 0, this.canvasSize.width, this.canvasSize.height)
      this.drawPlayer
    },

    setContext() {
      this.canvasDOM = document.querySelector("#myCanvas")
      this.ctx = this.canvasDOM.getContext("2d")
    },

    setDimensions() {
      this.canvasDOM.setAttribute("width", 1000)
      this.canvasDOM.setAttribute("height", 850)
      this.canvasSize.width = 1000
      this.canvasSize.height = 850
    },

    createPlayer() {
      this.player = new Player(this.ctx, this.canvasSize, this.canvasSize.width / 2 - 25, this.canvasSize.height - 170, 50, 165, "syringe.png")

    },

    drawPlayer() {
      this.player.draw()
    },

    drawAll() {
      this.drawScoreBoard()
      this.drawPlayer()
      this.drawBullets()
      this.drawObstacles()
    },

    drawObstacles() {
      this.obstacles.forEach(obstacle => obstacle.draw())
    },
    
    createAll() {
      this.createPlayer()
      this.createObstacles()
      this.createScoreBoard()
    },

    createScoreBoard() {
      this.scoreBoard = new Score(this.ctx)
    },

    drawScoreBoard() {
      this.scoreBoard.draw()
    },

    setListeners() {
      document.onkeydown = e => {
      e.key === this.keys.player.ARROW_LEFT ? this.player.moveLeft() : null
      e.key === this.keys.player.ARROW_RIGHT ? this.player.moveRight() : null
      e.key === this.keys.player.SPACE ? this.player.shoot() : null
    }
  },

    drawBullets() {
      this.player.bullets.forEach(bullet => bullet.draw())
    },
      
    createObstacles() {
      const randomX = Math.floor(Math.random() * 950 + 10)
      const randomSpeed = Math.floor(Math.random() * 1 + 1)
      this.obstacles.push(new Obstacle(this.ctx, randomX, 50, 70, 70, randomSpeed, "bacteria.png"))

    },

    moveObstacles() {
      this.obstacles.forEach(obs => obs.move())
    },
    
    createBackground() {
      this.background = new Background(this.ctx, 0, 0, this.canvasSize.width, this.canvasSize.height, "background2.png")
    },


   detectCollision() { 
     return this.player.bullets.some((bullet, bulletIndex) => {
      return this.obstacles.some((obstacle, obstacleIndex) => {
         if (bullet.pos.x < obstacle.posX + obstacle.width 
          && bullet.pos.x + bullet.width > obstacle.posX 
          && bullet.pos.y < obstacle.posY + obstacle.height
          && bullet.pos.y + bullet.height > obstacle.posY){

            this.removeObstacle(obstacleIndex)
            this.removeBullet(bulletIndex)
            this.addPoints()
            return true
          } else {
            return false
          }
        })
      })
  },

  removeObstacle(index) {
    this.obstacles.splice(index, 1)
  },

  removeBullet(index) {
    this.player.bullets.splice(index, 1)
  },


  detectFloorCollision() {
  this.obstacles = this.obstacles.filter(obs => {
    if (obs.posY > this.canvasSize.height) {
      this.quitLives()
    } else {
      return true
    }
  })
  },

  quitLives() {
    this.player.lives--
  },

  addPoints() {
    this.scoreBoard.points++
  }
  
  
}

// funcion que sume puntos. 
// Mostrar vidas y puntos
// Remove bullets que salgan del canvas

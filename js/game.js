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
    scoreBoard: undefined,
    framesCounter: 0,
    frames: 60,
    obstacles: [],
    bullets: [],
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
      this.drawBoard()
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
      this.canvasDOM.setAttribute("height", 700)
      this.canvasSize.width = 1000
      this.canvasSize.height = 700
    },

    drawBoard() {
    this.ctx.strokeRect(0, 0, 1000, 700);

    },

    createPlayer() {
      this.player = new Player(this.ctx, this.canvasSize, this.canvasSize.width / 2 - 25, this.canvasSize.height - 170, 50, 165, "syringe.png")

    },

    drawPlayer() {
      this.player.draw()
    },

    drawAll() {
      this.drawPlayer()
      this.drawBoard()
      this.drawBullets()
      this.drawObstacles()
    },

    drawObstacles() {
      this.obstacles.forEach(obstacle => obstacle.draw())
    },

    

    createAll() {
      this.createPlayer()
      this.createObstacles()
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
      const randomSpeed = Math.floor(Math.random() * 3 + 2)
      this.obstacles.push(new Obstacle(this.ctx, randomX, 0, this.width, this.height, randomSpeed))

    },

    moveObstacles() {
      this.obstacles.forEach(obs => obs.move())
    }

  }

  //1- Eliminar obstaculos. Tema vidas.
  //2- Colisiones de los obs con el suelo y las balas
  //3- Score
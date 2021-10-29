const covidGame = {
    title: 'Covid Game',
    author: 'Alex & Manu',
    license: undefined,
    version: '1.0.0',
    desciption: 'Kill the CO-VID',
    canvasDOM: undefined,
    ctx: undefined,
    canvasSize: { width: undefined, height: undefined },
    background: undefined,
    player: undefined,
    scoreBoard: undefined,
    obstacles: [],
    bullets: [],
    keys: {
    player: {
        SPACE: " ",
        ARROW_LEFT: "ArrowLeft",
        ARROW_RIGHT: "ArrowRight"
        },
    },

    init(){
      this.setContext()
      this.setDimensions()
      this.drawBoard()
    },
    setContext() {
        this.canvasDOM = document.querySelector("#myCanvas")
        this.ctx = this.canvasDOM.getContext("2d")
      },

      setDimensions() {
        this.canvasDOM.setAttribute("width", 1000)
        this.canvasDOM.setAttribute("height", 700)
        this.canvasSize.width = window.innerWidth
        this.canvasSize.height = window.innerHeight
      },

      drawBoard(){
    this.ctx.fillStyle = "green";
    this.ctx.fillRect(0, 0, 1000, 700);

      }
    



  }
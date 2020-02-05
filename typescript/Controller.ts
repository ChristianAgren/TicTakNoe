class Controller {
    //Class attributes
    private scene: Scene
    private board: Board
    public cameraX: number
    public cameraY: number
    private distX: number
    private distY: number
    private margin: number
    
    //Class constructor
    constructor() {
        this.scene = {
            width: windowWidth,
            height: windowHeight
        }
        this.board = new Board()
        this.cameraX = 0
        this.cameraY = 0
        this.distX = 0
        this.distY = 0
        this.margin = 100
    }

    //Class functions
    public update() {
        this.distX = (this.scene.width/2 - mouseX)*.005
        this.distY = (this.scene.height/2 - mouseY)*.005
        if (mouseX+this.margin < this.scene.width/2 ||
            mouseX-this.margin > this.scene.width/2) {
                this.cameraX+=this.distX                
            }
            if (mouseY+this.margin < this.scene.height/2 ||
                mouseY-this.margin > this.scene.height/2) {
                    this.cameraY+=this.distY                 
                }
            }

    public draw() {
        this.board.draw()
    }
}
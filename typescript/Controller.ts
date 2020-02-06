class Controller {
    //Class attributes
    private canvas: p5.Renderer
    private scene: Scene
    private board: Board
    public cameraX: number
    public cameraY: number
    private distX: number
    private distY: number
    private marginX: number
    private marginY: number
    private activePlayer: number
    
    //Class constructor
    constructor(canvas: p5.Renderer) {
        this.activePlayer = 2
        this.canvas = canvas
        this.scene = {
            width: windowWidth,
            height: windowHeight
        }
        this.board = new Board()
        this.cameraX = 0
        this.cameraY = 0
        this.distX = 0
        this.distY = 0
        this.marginX = windowWidth/4
        this.marginY = windowHeight/4
        this.canvas.mouseClicked((e: MouseEvent) => {
            const cellArray = this.board.getActiveCellArray()
            const mousePosX = (e.pageX - windowWidth/2) - this.cameraX
            const mousePosY = (e.pageY - windowHeight/2) - this.cameraY
            console.log(e, mousePosX, mousePosY);
            
            cellArray.forEach(cell => {
                if (cell.state === 1) {
                    if (mousePosX >= cell.x - cell.size/2 &&
                        mousePosX <= cell.x + cell.size/2 &&
                        mousePosY >= cell.y - cell.size/2 &&
                        mousePosY <= cell.y + cell.size/2) {
                        cell.state = this.activePlayer
                        if (this.activePlayer === 2) {
                            this.activePlayer = 3
                        }
                        else {
                            this.activePlayer = 2
                        }
                        this.board.addEmptyCell()
                        console.log(cell);
                        console.log(this.board.layout);
                        
                    }
                }
            });
            
        })
    }

    //Class functions
    public update() {
        this.distX = (this.scene.width/2 - mouseX)*.005
        this.distY = (this.scene.height/2 - mouseY)*.005
        if (mouseX+this.marginX < this.scene.width/2 ||
            mouseX-this.marginX > this.scene.width/2) {
                this.cameraX+=this.distX                
            }
        if (mouseY+(this.marginY) < this.scene.height/2 ||
            mouseY-(this.marginY) > this.scene.height/2) {
                this.cameraY+=this.distY                 
            }
        this.board.updateLayout()
        }


  public draw() {
    this.board.draw();
  }
}

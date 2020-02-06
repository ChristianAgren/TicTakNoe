class Controller {
  //Class attributes
  private canvas: p5.Renderer;
  private scene: Scene;
  private board: Board;
  public cameraX: number;
  public cameraY: number;
  private distX: number;
  private distY: number;
  private marginX: number;
  private marginY: number;
  private activePlayer: number;
  private isWin: boolean;

  //Class constructor
  constructor(canvas: p5.Renderer) {
    this.isWin = false;
    this.activePlayer = 2;
    this.canvas = canvas;
    this.scene = {
      width: windowWidth,
      height: windowHeight
    };
    this.board = new Board();
    this.cameraX = 0;
    this.cameraY = 0;
    this.distX = 0;
    this.distY = 0;
    this.marginX = windowWidth / 4;
    this.marginY = windowHeight / 4;

    this.canvas.mouseClicked((e: MouseEvent) => {
      const cellArray = this.board.getActiveCellArray();
      const mousePosX = e.pageX - windowWidth / 2 - this.cameraX;
      const mousePosY = e.pageY - windowHeight / 2 - this.cameraY;
    //   console.log(e, mousePosX, mousePosY);

      cellArray.forEach(cell => {
        if (cell.state === 1) {
          if (
            mousePosX >= cell.x - cell.size / 2 &&
            mousePosX <= cell.x + cell.size / 2 &&
            mousePosY >= cell.y - cell.size / 2 &&
            mousePosY <= cell.y + cell.size / 2
          ) {
              if (this.activePlayer === 2) {
                  this.activePlayer = 3;
                } else {
                    this.activePlayer = 2;
                }
              cell.state = this.activePlayer;
                this.board.addEmptyCell();
                // console.log(cell);
                // console.log(this.board.layout);
                this.checkWin(this.activePlayer, cell);
          }
        }
      });
    });
  }

  //Class functions
  public update() {
    this.distX = (this.scene.width / 2 - mouseX) * 0.003;
    this.distY = (this.scene.height / 2 - mouseY) * 0.005;
    if (
      mouseX + this.marginX < this.scene.width / 2 ||
      mouseX - this.marginX > this.scene.width / 2
    ) {
        if(this.cameraX >= -1000 && this.cameraX <= 1000) {
            this.cameraX += this.distX;
        }
        else {
            this.cameraX -= this.distX;
        }
    }
    if (
      mouseY + this.marginY < this.scene.height / 2 ||
      mouseY - this.marginY > this.scene.height / 2
    ) {
        if (this.cameraY >= -500 && this.cameraY <= 500) {
            this.cameraY += this.distY;
        }
        else {
            this.cameraY -= this.distY;
        }
    }
    this.board.updateLayout();
  }

  public draw() {
    this.board.draw();
  }

  private checkWin(player: number, cell: Cell) {
    //   this.horizontal();
    //   this.vertical();

    // console.log(player, cell);
    // console.log(this.board.layout);
    
    const playerCells: Array<Cell> = this.board.getPlayerCells(player)
    
    if (playerCells.length >= 3) {
        console.log(playerCells);
    }
    
    
    
    if(this.isWin) {
        console.log(player + "Won!");
        
    }
  }

//   private horizontal(): boolean {
//     console.log(this.board.layout);
    
//     this.board.layout.forEach(row => {
//         if (row.join("").includes("222") && !this.isWin) {
//             this.isWin = true;
//         } else if (row.join("").includes("333") && !this.isWin) {
//             this.isWin = true;
//         } else if (!this.isWin) {
//             console.log("No win HOR!");
//         }
//     });
//     return this.isWin;
// }

// private vertical() {
//     let column: Array<number> = [];
//     console.log(this.board.layout);

//     for (let i = 0; i < this.board.layout.length; i++) {
//       for (let j = 0; j < this.board.layout.length; j++) {
//         column.push(this.board.layout[j][i]);
//       }
//       if (column.join("").includes("222") && !this.isWin) {
//         this.isWin = true;
//       } else if (column.join("").includes("333") && !this.isWin) {
//         this.isWin = true;
//       } else if (!this.isWin) {
//         console.log("No win VER!");
//       }
//       column = [];
//     }
//   }
}

class Controller {
  //Class attributes
  private canvas: p5.Renderer;
  private scene: Scene;
  public board: Board;
  public cameraX: number;
  public cameraY: number;
  private distX: number;
  private distY: number;
  private marginX: number;
  private marginY: number;
  public activePlayer: number;
  private isLoss: boolean;

  //Class constructor
  constructor(canvas: p5.Renderer) {
    this.isLoss = false;
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
      if (this.cameraX >= -windowWidth / 2 && this.cameraX <= windowWidth / 2) {
        this.cameraX += this.distX;
      } else {
        if (this.cameraX < -windowWidth / 2) {
          this.cameraX = -windowWidth / 2;
        } else {
          this.cameraX = windowWidth / 2;
        }
      }
    }
    if (
      mouseY + this.marginY < this.scene.height / 2 ||
      mouseY - this.marginY > this.scene.height / 2
    ) {
      if (
        this.cameraY >= -windowHeight / 2 &&
        this.cameraY <= windowHeight / 2
      ) {
        this.cameraY += this.distY;
      } else {
        if (this.cameraY < -windowHeight / 2) {
          this.cameraY = -windowHeight / 2;
        } else {
          this.cameraY = windowHeight / 2;
        }
      }
    }
    this.board.updateLayout();
  }

  public draw() {
    this.board.draw();
  }

  private checkWin(player: number, cell: Cell) {
    const playerCells: Array<Cell> = this.board.getPlayerCells(player);
    const oneArray: Array<Cell> = [];
    const twoArray: Array<Cell> = [];
    const { x, y } = cell.indexPos;
    playerCells.forEach(otherCell => {
      if (otherCell.indexPos != cell.indexPos) {
        const { x: otherX, y: otherY } = otherCell.indexPos;
        const distX = otherX - x;
        const distY = otherY - y;
        if (distX >= -2 && distX <= 2 && distY >= -2 && distY <= 2) {
          if (distX >= -1 && distX <= 1 && distY >= -1 && distY <= 1) {
            oneArray.push(otherCell);
          } else {
            twoArray.push(otherCell);
          }
        }
      }
    });
    if (oneArray.length + twoArray.length >= 2) {
      oneArray.forEach(secondCell => {
        if (secondCell.indexPos != cell.indexPos) {
          const { x: secondX, y: secondY } = secondCell.indexPos;
          const twoX = secondX - x;
          const twoY = secondY - y;

          oneArray.forEach(thirdCell => {
            const { x: thirdX, y: thirdY } = thirdCell.indexPos;
            const threeX = thirdX - x;
            const threeY = thirdY - y;

            if (twoX * -1 === threeX && twoY * -1 === threeY) {
              console.log(`${player} is a loser`);
              cell.lossColor = true;
              secondCell.lossColor = true;
              thirdCell.lossColor = true;
              this.isLoss = true;
              return;
            } else {
              twoArray.forEach(forthCell => {
                const { x: fourthX, y: fourthY } = forthCell.indexPos;
                const fourX = fourthX - x;
                const fourY = fourthY - y;
                if (threeX * 2 === fourX && threeY * 2 === fourY) {
                  console.log(`${player} is a loser`);
                  cell.lossColor = true;
                  thirdCell.lossColor = true;
                  forthCell.lossColor = true;
                  this.isLoss = true;
                  return;
                }
              });
            }
          });
        }
      });
    }

    if (this.isLoss) {
      console.log(player + " Lost!");
    }
  }
}

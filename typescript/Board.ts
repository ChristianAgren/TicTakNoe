class Board {
  //Class attributes
  public layout: Array<Array<number>> = [
    [1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1]
  ];
  private cellArray: Array<Cell> = [];
  private isWin: boolean;

  //Class constructor
  constructor() {
    this.generateCells();
    this.isWin = false;
  }

  //Class methods

  public draw() {
    this.cellArray.forEach(cell => {
      cell.draw();
    });
  }

  private generateCells() {
    // const activeCells: Array<Cell> = [];

    for (let i = 0; i < this.layout.length; i++) {
      for (let j = 0; j < this.layout.length; j++) {
        //generate cells
        let size = windowHeight / (this.layout.length * 2.5);
        let offset = this.layout.length / 2;

        if (this.layout[i][j] === 0) {
          let voidedCell = new Cell(i, j, size, 0, offset);
          this.cellArray.push(voidedCell);
        }
        if (this.layout[i][j] === 1) {
          let emptyCell = new Cell(i, j, size, 1, offset);
          this.cellArray.push(emptyCell);
        }
      }
    }
  }

  private addCellLayer() {
    // let generation: Array<number> = [];

    this.layout.push([]);
    this.layout.unshift([]);

    this.layout.forEach(arrayOfCells => {
      console.log(arrayOfCells);

      if (arrayOfCells.length != this.layout.length) {
        if (arrayOfCells.length === 0) {
          for (let i = 0; i < this.layout.length; i++) {
            arrayOfCells.push(0);
          }
        } else {
          arrayOfCells.unshift(0);
          arrayOfCells.push(0);
        }
      }
    });

    this.addEmptyCell();
  }

  private addEmptyCell() {
    let voidedCells: Array<Array<number>> = this.countVoidedCells();
    const rng: number = Math.floor(random(voidedCells.length));
    const coordinates: Array<number> = voidedCells[rng];

    if (voidedCells.length != 0) {
      for (let i = 0; i < this.layout.length; i++) {
        if (coordinates[0] === i) {
          for (let j = 0; j < this.layout.length; j++) {
            if (coordinates[0] === i && coordinates[1] === j) {
              this.layout[coordinates[0]][coordinates[1]] = 1;
            }
          }
        }
      }
    } else if (voidedCells.length === 0) {
      this.addCellLayer();
      voidedCells = this.countVoidedCells();
    }
  }

  private countVoidedCells() {
    let arrayOfVoidedCells: Array<Array<number>> = [];
    for (let i = 0; i < this.layout.length; i++) {
      for (let j = 0; j < this.layout.length; j++) {
        if (this.layout[i][j] === 0) {
          arrayOfVoidedCells.push([i, j]);
        }
      }
    }
    return arrayOfVoidedCells;
  }

  private checkWin() {
    // this.horizontal();
    // this.vertical();
    this.diagonal();

    console.log(this.isWin);
  }

  private horizontal(): boolean {
    let index: number = 1;
    this.layout.forEach(row => {
      if (row.join("").includes("111") && !this.isWin) {
        console.log("O won" + "\n" + "on row : " + index);
        this.isWin = true;
      } else if (row.join("").includes("000") && !this.isWin) {
        console.log("X won" + "\n" + "on row : " + index);
        this.isWin = true;
      } else if (!this.isWin) {
        console.log("No win HOR!");
      }
      index++;
    });
    return this.isWin;
  }

  private vertical() {
    let column: Array<number> = [];

    for (let i = 0; i < this.layout.length; i++) {
      for (let j = 0; j < this.layout.length; j++) {
        column.push(this.layout[j][i]);
      }
      if (column.join("").includes("111") && !this.isWin) {
        console.log("O won" + "\n" + "on column : " + (i + 1));
        this.isWin = true;
      } else if (column.join("").includes("000") && !this.isWin) {
        console.log("X won" + "\n" + "on column : " + (i + 1));
        this.isWin = true;
      } else if (!this.isWin) {
        console.log("No win VER!");
      }
      column = [];
    }
  }

  private diagonal() {
    let diagonal: Array<number> = [];
    let index: number = 0;
    for (let i = 0; i < this.layout.length; i++) {
      for (let j = 0; j < this.layout.length; j++) {
        diagonal.push(this.layout[j][j + index]);
        console.log(index);
      }
      index++;
      console.log(diagonal);
      diagonal = [];
    }
  }
}

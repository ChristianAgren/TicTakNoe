class Board {
  //Class attributes
  public layout: Array<Array<number>> = [
    [0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0],
    [0, 1, 1, 1, 0],
    [0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0]
  ];
  private cellArray: Array<Cell> = []
  //Class constructor
  constructor() {
    this.generateCells()
  }

  //Class methods

  public draw() {
    this.cellArray.forEach(cell => {
      cell.draw()
    });
  }


  private generateCells() {
    // const activeCells: Array<Cell> = [];

    for (let i = 0; i < this.layout.length; i++) {
      for (let j = 0; j < this.layout.length; j++) {
        //generate cells
        let size = 100;
        let xPos = (j * size);
        let yPos = (i * size);

        if (this.layout[i][j] === 0) {
          let voidedCell = new Cell(xPos, yPos, size, 0);
          this.cellArray.push(voidedCell)
        }
        if (this.layout[i][j] === 1) {
          let emptyCell = new Cell(xPos, yPos, size, 1);
          this.cellArray.push(emptyCell)
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

    this.addEmptyCell()
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
}

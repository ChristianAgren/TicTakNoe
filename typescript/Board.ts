class Board {
  //Class attributes
  public layout: Array<Array<number>> = [
    [0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0],
    [0, 1, 1, 1, 0],
    [0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0]
  ];
  private cellArray: Array<Cell> = [];
  //Class constructor
  constructor() {
    this.generateCells();
  }

  //Class methods

  public draw() {
    this.cellArray.forEach(cell => {
      cell.draw();
    });
  }

  public getPlayerCells(player: number): Array<Cell> {
    const playerCellArray: Array<Cell> = []
    this.cellArray.forEach(cell => {
      if (cell.state === player) {
        playerCellArray.push(cell)
      }
    });
    return playerCellArray
  }

  public updateLayout() {
    this.cellArray.forEach(cell => {
      if (cell.state != this.layout[cell.indexPos.y][cell.indexPos.x]) {
        this.layout[cell.indexPos.y][cell.indexPos.x] = cell.state
      }
    });
  }

  public getActiveCellArray(): Array<Cell> {
    return this.cellArray
  }

  private generateCells() {
    // const activeCells: Array<Cell> = [];

    for (let i = 0; i < this.layout.length; i++) {
      for (let j = 0; j < this.layout.length; j++) {
        //generate cells
        let size = windowHeight * .1;
        let offset = this.layout.length/2
        let indexPos: PositionPoint = {x: j, y:i}

        if (this.layout[i][j] === 0) {
          let voidedCell = new Cell(size, 0, offset, indexPos);
          this.cellArray.push(voidedCell)
        }
        if (this.layout[i][j] === 1) {
          let emptyCell = new Cell(size, 1, offset, indexPos);
          this.cellArray.push(emptyCell)
        }
      }
    }
  }
  
  private createNewCellLayer(){
    
    for (let i = 0; i < this.layout.length; i++) {
      for (let j = 0; j < this.layout.length; j++) {
        //generate cells
        let size = windowHeight * .1;
        let offset = this.layout.length / 2;
        let indexPos: PositionPoint = {x: j, y:i}

        if (this.layout[i][j] === 0) {
          let voidedCell = new Cell(size, 0, offset, indexPos);
          this.cellArray.push(voidedCell)
        }
      }
    }
  }

  private addCellLayer() {
    // let generation: Array<number> = [];

    this.layout.unshift([]);
    this.layout.push([]);
    
    this.layout.forEach(arrayOfCells => {
      if (arrayOfCells.length != this.layout.length) {
        if (arrayOfCells.length === 0) {
          for (let i = 0; i < this.layout.length; i++) {
            arrayOfCells.push(0);
          }
        } 
        else {
          arrayOfCells.unshift(0)
          arrayOfCells.push(0)
        }
      }
    });

    this.createNewCellLayer()
    this.addEmptyCell()
  }


  public addEmptyCell() {
    let voidedCells: Array<PositionPoint> = this.countVoidedCells();
    const rng: number = Math.floor(random(voidedCells.length));
    
    if (voidedCells.length === 0) {
      this.cellArray.forEach(cell => {
        cell.updateCellPos()
      });
      this.addCellLayer()
      // this.countVoidedCells()
    } else {
      this.cellArray.forEach(cell => {
        let {x, y} = cell.indexPos
        if (x === voidedCells[rng].x && y === voidedCells[rng].y) {
          cell.state = 1
        }
      });
    }
  }

  private countVoidedCells() {
    let arrayOfVoidedCells: Array<PositionPoint> = [];
    this.cellArray.forEach(cell => {
      if (cell.state === 0) {
        arrayOfVoidedCells.push(cell.indexPos)
      }
    });
    return arrayOfVoidedCells;
  }
}

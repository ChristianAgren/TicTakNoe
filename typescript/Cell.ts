class Cell {
  //Class attributes
  public x: number;
  public y: number;
  public size: number;
  public state: number;
  public indexPos: PositionPoint;
  private offset: number

  //Class constructor
  constructor(
    size: number,
    state: number,
    offset: number,
    indexPos: PositionPoint
  ) {
    this.indexPos = indexPos
    this.offset = offset
    this.x = this.indexPos.x * size - size * offset + size / 2;
    this.y = this.indexPos.y * size - size * offset + size / 2;
    this.size = size;
    this.state = state;
  }

  //Class functions

  public updateCellPos(offset: number) {
        let {x, y} = this.indexPos  
        const newPos = {x: x+1, y: y+1}
        this.indexPos = newPos
  }

//Class functions
  public draw() {       
    // Rita ut kvadrat
    
    if(this.state === 0){
        fill(50)
        
        // console.log('drawing a voidedcell');
    } 
    if(this.state === 1) {
        fill(150)
        // console.log('drawing an emptycell');
    }
    if(this.state === 2) {
        fill(255)
    }
    
    strokeWeight(8);
    stroke(205, 55, 55);
    rect(this.x, this.y, this.size, this.size);
  }    
}

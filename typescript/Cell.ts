class Cell {
    //Class attributes
    public x: number;
    public y: number;
    public size: number;
    public state: number;
    public indexPos: PositionPoint

    //Class constructor
    constructor(size: number, state: number, indexPos: PositionPoint) {
        this.indexPos = indexPos
        this.size = size
        this.x = this.indexPos.x * size
        this.y = this.indexPos.y * size
        this.state = state
    }

    public updateCellPos() {
        let {x, y} = this.indexPos  
        const newPos = {x: x+1, y: y+1}
        this.indexPos = newPos
        this.x = this.indexPos.x * this.size
        this.y = this.indexPos.y * this.size        
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
        
        strokeWeight(2)
        stroke(220)
        rect(this.x, this.y, this.size, this.size)
    }
}
class Cell {
    //Class attributes
    public x: number;
    public y: number;
    public size: number;
    public state: number;

    //Class constructor
    constructor(x: number, y: number, size: number, state: number) {
        this.x = x
        this.y = y
        this.size = size
        this.state = state
    }

    //Class functions
    draw() {

        
        // Rita ut kvadrat
        
        if(this.state === 0){
            fill(150)
            
            // console.log('drawing a voidedcell');
        } 
        if(this.state === 1) {
            fill(255)
            // console.log('drawing an emptycell');
        }
        
        strokeWeight(2)
        stroke(220)
        rect(this.x, this.y, this.size, this.size)
    }
}
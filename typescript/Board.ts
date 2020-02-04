class Board {
    //Class attributes
    public layout: Array<Array<number>> = [
        [0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0],
        [0, 1, 1, 1, 0],
        [0, 1, 1, 1, 0],
        [0, 0, 0, 0, 0],
    ]

    //Class constructor
    constructor() {

    }

    //Class methods

    generateCells() {
        for (let i = 0; i > this.layout.length; i++) {
            for (let j = 0; j > this.layout.length; i++) {
                //generate cells
            }
        }
    }

    addCellLayer() {
        let generation: Array<number> = []

        for (let i = 0; i < this.layout.length; i++) {
            generation.push(0)
        }
        
        this.layout.unshift(generation)
        this.layout.push(generation)
        
        this.layout.forEach(arrayOfCells => {
            if (arrayOfCells.length != this.layout.length) {
                arrayOfCells.unshift(0)
                arrayOfCells.push(0)
            }
        });
        // console.log(this.layout);
        console.log(this.layout);  
    }

    addEmptyCell() {

        let voidedCells: Array<Array<number>> = this.countVoidedCells()

        if (voidedCells.length === 0) {
            this.addCellLayer()
            voidedCells = this.countVoidedCells()
        }

        let rng = Math.floor(random(voidedCells.length))        
        for (let i = 0; i < this.layout.length; i++) {
            if(voidedCells[rng][0] === i) {                
                for (let j = 0; j < this.layout.length; j++) {
                    if (voidedCells[rng][1] === j) {
                        this.layout[i][j] = 1                        
                    }
                }
            }
        }

        

        console.log(voidedCells, this.layout);
        
    }

    countVoidedCells() {
        let arrayOfVoidedCells: Array<Array<number>> = []
        for (let i = 0; i < this.layout.length; i++) {
            for (let j = 0; j < this.layout.length; j++) {
                if (this.layout[i][j] === 0 ) {
                    arrayOfVoidedCells.push([i, j])
                }
            }
        }
        return arrayOfVoidedCells
    }
}
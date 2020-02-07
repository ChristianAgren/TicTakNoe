class Cell {
  //Class attributes
  public x: number;
  public y: number;
  public size: number;
  public state: number;
  public indexPos: PositionPoint;
  public lossColor: boolean;

  //Class constructor
  constructor(
    size: number,
    state: number,
    offset: number,
    indexPos: PositionPoint
  ) {
    this.indexPos = indexPos;
    this.x = this.indexPos.x * size - size * offset + size / 2;
    this.y = this.indexPos.y * size - size * offset + size / 2;
    this.size = size;
    this.state = state;
    this.lossColor = false;
  }

  //Class functions

  public updateCellPos() {
    let { x, y } = this.indexPos;
    const newPos = { x: x + 1, y: y + 1 };
    this.indexPos = newPos;
  }

  //Class functions
  public draw() {
    let distance: number = this.size / 5;
    rectMode(CENTER);
    angleMode(DEGREES)
    // Rita ut kvadrat

    if (this.state === 0) {
      noStroke();
      fill("#009bb000");
    }
    if (this.state === 1) {
      fill(222);
      strokeWeight(8);
      stroke("#009bb0");
    }

    if (this.state === 2) {
      if (this.lossColor) {
        fill("#CC5C8C");
      } else {
        fill(222);
      }
      stroke(50);
      strokeWeight(5);
      circle(this.x, this.y, this.size / 2);
      strokeWeight(8);
      stroke("#009bb0");
    }
    if (this.state === 3) {
      if (this.lossColor) {
        fill("#CC5C8C");
      } else {
        fill(50);
      }
      stroke(222);

      strokeWeight(5);
      line(
        this.x - this.size / 2 + distance,
        this.y - this.size / 2 + distance,
        this.x + this.size - this.size / 2 - distance,
        this.y + this.size - this.size / 2 - distance
      );
      line(
        this.x - this.size / 2 + distance,
        this.y + this.size - this.size / 2 - distance,
        this.x + this.size - this.size / 2 - distance,
        this.y - this.size / 2 + distance
      );
      strokeWeight(8);
      stroke("#009bb0");
    }

    rect(this.x, this.y, this.size, this.size);
  }
}

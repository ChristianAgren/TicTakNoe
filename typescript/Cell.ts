class Cell {
  //Class attributes
  public x: number;
  public y: number;
  public size: number;
  public state: number;

  //Class constructor
  constructor(
    x: number,
    y: number,
    size: number,
    state: number,
    offset: number
  ) {
    console.log(offset);

    this.x = x * size - size * offset + size / 2;
    this.y = y * size - size * offset + size / 2;
    this.size = size;
    this.state = state;
  }

  //Class functions
  draw() {
    // Rita ut kvadrat

    if (this.state === 0) {
      fill(33);
    }
    if (this.state === 1) {
      fill(222);
    }

    strokeWeight(8);
    stroke(205, 55, 55);
    rect(this.x, this.y, this.size, this.size);
  }
}

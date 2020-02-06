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
    this.x = x * size - size * offset + size / 2;
    this.y = y * size - size * offset + size / 2;
    this.size = size;
    this.state = state;
  }

  //Class functions
  draw() {
    rectMode(CORNER);
    let distance = this.size / 5;
    // Rita ut kvadrat
    if (this.state === 0) {
      fill(33);
    }
    if (this.state === 1) {
      fill(222);
    }

    strokeWeight(8);
    stroke(0, 155, 175);
    rect(this.x, this.y, this.size, this.size);

    if (this.state === 0) {
      stroke(222);
      strokeWeight(10);

      //cross
      line(
        this.x + distance,
        this.y + this.size / 2,
        this.x + this.size - distance,
        this.y + this.size / 2
      );
      line(
        this.x + this.size / 2,
        this.y + distance,
        this.x + this.size / 2,
        this.y + this.size - distance
      );

      //   // plus
      //     line(
      //       this.x + distance,
      //       this.y + distance,
      //       this.x + this.size - distance,
      //       this.y + this.size - distance
      //     );
      //     line(
      //       this.x + distance,
      //       this.y + this.size - distance,
      //       this.x + this.size - distance,
      //       this.y + distance
      //     );
    }
    if (this.state === 1) {
      stroke(33);
      strokeWeight(5);
      circle(this.x + this.size / 2, this.y + this.size / 2, this.size / 2);

      //   noFill();
    }
  }
}

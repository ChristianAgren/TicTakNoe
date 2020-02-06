class Controller {
  //Class attributes
  private scene: Scene;
  private board: Board;
  public cameraX: number;
  public cameraY: number;
  private distX: number;
  private distY: number;
  private marginX: number;
  private marginY: number;

  //Class constructor
  constructor() {
    this.scene = {
      width: windowWidth,
      height: windowHeight
    };
    this.board = new Board();
    this.cameraX = 0;
    this.cameraY = 0;
    this.distX = 0;
    this.distY = 0;
    this.marginX = windowWidth / 4;
    this.marginY = windowHeight / 4;
  }

  //Class functions
  public update() {
    this.distX = (this.scene.width / 2 - mouseX) * 0.01;
    this.distY = (this.scene.height / 2 - mouseY) * 0.01;
    if (
      mouseX + this.marginX < this.scene.width / 2 ||
      mouseX - this.marginX > this.scene.width / 2
    ) {
      this.cameraX += this.distX;
    }
    if (
      mouseY + this.marginY < this.scene.height / 2 ||
      mouseY - this.marginY > this.scene.height / 2
    ) {
      this.cameraY += this.distY;
    }
  }

  public draw() {
    this.board.draw();
  }
}

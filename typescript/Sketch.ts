//This is the main .ts that runs on start-up
window.addEventListener("resize", setup);
let controller: Controller;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  frameRate(60);
  rectMode(CENTER);
  angleMode(DEGREES);
  translate(windowWidth / 2, windowHeight / 2);
  controller = new Controller();
}

function draw() {
  background(0, 155, 175);
  translate(controller.cameraX - 50, controller.cameraY - 100, 10);
  // controller.update()
  controller.draw();
}

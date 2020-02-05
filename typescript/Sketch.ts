//This is the main .ts that runs on start-up
window.addEventListener("resize", setup);
let controller: Controller

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  frameRate(60)
  rectMode(CENTER)
  controller = new Controller()
  background(205, 55, 55)
}

function draw() {
  let fps = frameRate()
  console.log(fps);
  // translate(controller.cameraX, controller.cameraY)
  controller.update()
  controller.draw()
}

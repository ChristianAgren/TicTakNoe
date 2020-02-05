//This is the main .ts that runs on start-up
window.addEventListener("resize", setup);
let controller: Controller

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60)
  rectMode(CENTER)
  translate(windowWidth/2, windowHeight/2)
  controller = new Controller()
}

function draw() {
  background(205, 55, 55)
  let fps = frameRate()
  console.log(fps);
  translate(controller.cameraX, controller.cameraY)
  controller.update()
  controller.draw()
}

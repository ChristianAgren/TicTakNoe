//This is the main .ts that runs on start-up
window.addEventListener("resize", setup);
let controller: Controller

function setup() {
  const canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  frameRate(60)
  rectMode(CENTER)
  angleMode(DEGREES)
  controller = new Controller(canvas)
}

function draw() {
  background(205, 55, 55)
  // let fps = frameRate()
  // console.log(fps);
  translate(controller.cameraX, controller.cameraY, 10)
  controller.draw()
  controller.update()
}

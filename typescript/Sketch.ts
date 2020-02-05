//This is the main .ts that runs on start-up
window.addEventListener("resize", setup);
let controller: Controller

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60)
  fullscreen()
  controller = new Controller()  
}

function draw() {
  let fps = frameRate()
  console.log(fps);
  
  // translate(controller.cameraX, controller.cameraY)
  background(205, 55, 55)
  fill(255)
  rectMode(CENTER)
  rect(windowWidth/2, windowHeight/2, 300, 300)
  // controller.update()
  // controller.update()
}
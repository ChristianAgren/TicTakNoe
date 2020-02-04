//This is the main .ts that runs on start-up
window.addEventListener("resize", setup);
let test = new Board()

function setup() {
  createCanvas(windowWidth, windowHeight);
  console.log(test.layout);
  
}

function draw() {
  background(205, 55, 55);
  // noStroke();
}
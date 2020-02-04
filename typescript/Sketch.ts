//This is the main .ts that runs on start-up
window.addEventListener("resize", setup);

function setup() {
  createCanvas(width, height);
}

function draw() {
  background(205, 55, 55);
  noStroke();
}
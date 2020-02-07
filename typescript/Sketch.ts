//This is the main .ts that runs on start-up
window.addEventListener("resize", setup);
let controller: Controller;
let myFont: any;
let button: any;
let playgame: boolean = false;

function preload() {
  myFont = loadFont("assets/EmblemaOne-Regular.ttf");
}

function setup() {
  const canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  frameRate(60);
  rectMode(CENTER);
  angleMode(DEGREES);

  controller = new Controller(canvas);

  if (!playgame) {
    button = createButton("PLAY");
    button.position(windowWidth / 2, windowHeight / 2 + 100);
    button.mousePressed(play);
  }
}

function draw() {
  background(0, 155, 175);

  if (!playgame) {
    noStroke();

    textSize(130);
    textAlign(CENTER, CENTER);
    textFont(myFont);

    fill("#FFF38C");
    text("TIC", 0, -200);
    text("TAC", 0, -100);
    text("NOE", 0, 0);
  } else if (playgame) {
    displayTurn();

    translate(controller.cameraX, controller.cameraY, 10);
    controller.draw();
    controller.update();
  }
}

function play() {
  playgame = true;
  button.hide();
}

function displayTurn() {
  noFill();
  stroke(50);
  strokeWeight(5);
  
  rectMode(CENTER);
  if (controller.activePlayer === 2) {
    line(-40, windowHeight / 3 - 40, 40, windowHeight / 3 + 40);
    line(-40, windowHeight / 3 + 40, 40, windowHeight / 3 - 40)
  } else if (controller.activePlayer === 3) {
    strokeWeight(5);
    circle(0, windowHeight / 3, 80);
  }
  noStroke()
  rect(0, windowHeight / 3, 100, 100);

  fill("#333")
  textSize(60)
  text("TURN", 0, windowHeight/2 - 250)
}

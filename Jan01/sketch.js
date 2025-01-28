let iIncrement, jDecrement;
let currentFPS = 1;
let currentInt = 10;

function setup() {
  createCanvas(900, 900);
  frameRate(60);
  iIncrement = random(5, 20);
  jDecrement = random(5, 20);
}

function draw() {
  background(0);
  strokeWeight(2);
  for (
    let i = currentInt, j = height - currentInt;
    i < height && j > 0;
    i += iIncrement, j -= jDecrement
  ) {
    stroke(255);
    line(i, height - j - currentInt, i, j + currentInt);
    line(width - i, height - j - currentInt, width - i, j + currentInt);
    line(i, height - j, width - i, height - j);
    line(i, j, width - i, j);
  }
  if (frameCount % currentFPS == 0) {
    iIncrement = random(5, 20);
    jDecrement = random(5, 20);
    currentInt = random(5, 20);
  }
}

function keyPressed() {
  if (keyCode === LEFT_ARROW && currentFPS <= 60) {
    currentFPS++;
  } else if (keyCode === RIGHT_ARROW && currentFPS >= 1) {
    currentFPS--;
  }
}

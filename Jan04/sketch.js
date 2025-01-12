function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES);
}

function draw() {
  background("#000000");

  push();
  rectMode(CENTER);
  translate(width / 2, height / 2);
  for (let i = 60, j = 1000; j > 0.01; i -= 1) {
    fill(10 - i * 0.08, 10 - i * 0.08, 10 - i * 0.08, 255 - i * 4);
    stroke(15 + i * 0.02, 15 + i * 0.02, 30 + i * 0.02);
    rotate(360 / 50);
    rect(0, 0, j, j);
    j -= 15;
  }
  pop();  
}

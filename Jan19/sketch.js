function setup() {
  createCanvas(900, 900);
}

function draw() {
  background(0);
  noFill();
  translate(width / 2, height / 2);
  for (let i = 0; i < 1000; i += 0.5) {
    let size = 400 - i * 4;
    let offset = sin(frameCount * 0.02 + i * 0.1) * 50;
    let rotation = cos(frameCount * 0.01 + i * 0.1) * 0.1;

    let r = map(sin(frameCount * 0.01 + i * 0.05), -1, 1, 100, 255);
    let g = map(cos(frameCount * 0.01 + i * 0.05), -1, 1, 50, 200);
    let b = map(sin(frameCount * 0.02 + i * 0.1), -1, 1, 150, 255);

    stroke(r, g, b, map(i, 0, 1000, 255, 0));
    strokeWeight(1);

    push();
    rotate(rotation);
    rect(-size / 2 + offset, -size / 2 + offset, size, size);
    pop();
  }
}

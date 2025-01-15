let x1, y1, x2, y2, x3, y3;

function setup() {
  createCanvas(800, 800);
  frameRate(3);
  // noLoop();
}

function draw() {
  blendMode(BLEND);
  background(0);
  blendMode(DIFFERENCE);
  fill("white");
  noStroke();

  drawTriangle();
  drawRectangle();
  drawCircle();
}

function drawTriangle() {
  let p1 = width / 2 + 50,
    p2 = height / 2 + 50,
    p3 = width / 2 - 50,
    p4 = height / 2 - 50;
  for (let i = 0; i < random(1, 2); i++) {
    x1 = random(-100, p1);
    y1 = random(-100, p2);
    x2 = random(-100, p1);
    y2 = random(-100, p2);
    x3 = random(-100, p1);
    y3 = random(-100, p2);
    triangle(x1, y1, x2, y2, x3, y3);
  }
  for (let i = 0; i < random(1, 2); i++) {
    x1 = random(p3, width + 100);
    y1 = random(p4, height + 100);
    x2 = random(p3, width + 100);
    y2 = random(p4, height + 100);
    x3 = random(p3, width + 100);
    y3 = random(p4, height + 100);
    triangle(x1, y1, x2, y2, x3, y3);
  }
  for (let i = 0; i < random(1, 2); i++) {
    x1 = random(p3, width + 100);
    y1 = random(-100, p2);
    x2 = random(p3, width + 100);
    y2 = random(-100, p2);
    x3 = random(p3, width + 100);
    y3 = random(-100, p2);
    triangle(x1, y1, x2, y2, x3, y3);
  }
  for (let i = 0; i < random(1, 2); i++) {
    x1 = random(-100, p1);
    y1 = random(p4, height + 100);
    x2 = random(-100, p1);
    y2 = random(p4, height + 100);
    x3 = random(-100, p1);
    y3 = random(p4, height + 100);
    triangle(x1, y1, x2, y2, x3, y3);
  }
  for (let i = 0; i < random(3, 6); i++) {
    do {
      x1 = random(-100, width + 100);
      y1 = random(-100, height + 100);
      x2 = random(-100, width + 100);
      y2 = random(-100, height + 100);
      x3 = random(-100, width + 100);
      y3 = random(-100, height + 100);
    } while (
      dist(x1, y1, x2, y2) < 100 ||
      dist(x2, y2, x3, y3) < 100 ||
      dist(x3, y3, x1, y1) < 100
    );
    triangle(x1, y1, x2, y2, x3, y3);
  }
}

function drawRectangle() {
  let p1 = width / 2 + 50,
    p2 = height / 2 + 50,
    p3 = width / 2 - 50,
    p4 = height / 2 - 50;
  for (let i = 0; i < random(1, 2); i++) {
    x1 = random(-100, p1);
    y1 = random(-100, p2);
    x2 = random(-100, p1);
    y2 = random(-100, p2);
    rect(x1, y1, x2, y2);
  }
  for (let i = 0; i < random(1, 2); i++) {
    x1 = random(p3, width + 100);
    y1 = random(p4, height + 100);
    x2 = random(p3, width + 100);
    y2 = random(p4, height + 100);
    rect(x1, y1, x2, y2);
  }
  for (let i = 0; i < random(1, 2); i++) {
    x1 = random(p3, width + 100);
    y1 = random(-100, p2);
    x2 = random(p3, width + 100);
    y2 = random(-100, p2);
    rect(x1, y1, x2, y2);
  }
  for (let i = 0; i < random(1, 2); i++) {
    x1 = random(-100, p1);
    y1 = random(p4, height + 100);
    x2 = random(-100, p1);
    y2 = random(p4, height + 100);
    rect(x1, y1, x2, y2);
  }
  for (let i = 0; i < random(3, 6); i++) {
    do {
      x1 = random(-100, width + 100);
      y1 = random(-100, height + 100);
      x2 = random(-100, width + 100);
      y2 = random(-100, height + 100);
    } while (dist(x1, y1, x2, y2) < 100);
    rect(x1, y1, x2, y2);
  }
}

function drawCircle() {
  let p1 = width / 2 + 50,
    p2 = height / 2 + 50,
    p3 = width / 2 - 50,
    p4 = height / 2 - 50,
    r;
  for (let i = 0; i < random(1, 2); i++) {
    x1 = random(-100, p1);
    y1 = random(-100, p2);
    r = random(50, 400);
    circle(x1, y1, r);
  }
  for (let i = 0; i < random(1, 2); i++) {
    x1 = random(p3, width + 100);
    y1 = random(p4, height + 100);
    r = random(50, 400);
    circle(x1, y1, r);
  }
  for (let i = 0; i < random(1, 2); i++) {
    x1 = random(p3, width + 100);
    y1 = random(-100, p2);
    r = random(50, 400);
    circle(x1, y1, r);
  }
  for (let i = 0; i < random(1, 2); i++) {
    x1 = random(-100, p1);
    y1 = random(p4, height + 100);
    r = random(50, 400);
    circle(x1, y1, r);
  }
  for (let i = 0; i < random(3, 6); i++) {
    x1 = random(-100, width + 100);
    y1 = random(-100, height + 100);
    r = random(50, 400);
    circle(x1, y1, r);
  }
}

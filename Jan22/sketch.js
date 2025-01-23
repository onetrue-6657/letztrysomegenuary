let x = [],
  y = [],
  w = [],
  h = [],
  r1 = [],
  g1 = [],
  b1 = [],
  a1 = [],
  r2 = [],
  g2 = [],
  b2 = [],
  a2 = [];
let t = 0;

function setup() {
  createCanvas(900, 900);
  // noLoop();
  frameRate(60);
  // colorMode(HSB, 360, 100, 100, 100);
  for (let i = 0; i < random(60, 100); i++) {
    x[i] = random(width) - 100;
    y[i] = random(height) - 100;
    w[i] = random(50, width);
    h[i] = random(50, height);

    r1[i] = random(255);
    g1[i] = random(255);
    b1[i] = random(255);
    a1[i] = random(60, 180);

    r2[i] = random(255);
    g2[i] = random(255);
    b2[i] = random(255);
    a2[i] = random(60, 180);
  }
}

function draw() {
  background("white");
  // background(220);
  updateColors();
  drawRect();
  blendMode(HARD_LIGHT);
}

function updateColors() {
  for (let i = 0; i < r1.length; i++) {
    r1[i] = (sin(t + i) * 128 + 127) % 255;
    g1[i] = (cos(t + i) * 128 + 127) % 255;
    b1[i] = (sin(t * 1.5 + i) * 128 + 127) % 255;

    r2[i] = (cos(t + i * 2) * 128 + 127) % 255;
    g2[i] = (sin(t * 1.5 + i * 2) * 128 + 127) % 255;
    b2[i] = (cos(t * 2 + i) * 128 + 127) % 255;
  }

  t += 0.05;
}

function drawRect() {
  noStroke();
  // blendMode(OVERLAY);
  // blendMode(SOFT_LIGHT);

  for (let i = 0; i < x.length; i++) {
    // x = random(width) - 100;
    // y = random(height) - 100;
    // w = random(width);
    // h = random(height);
    let gradient = drawingContext.createLinearGradient(
      x[i],
      y[i],
      x[i] + w[i],
      y[i] + h[i]
    );
    // (r1 = random(255)),
    //   (g1 = random(255)),
    //   (b1 = random(255)),
    //   (a1 = random(60, 180));
    // (r2 = random(255)),
    //   (g2 = random(255)),
    //   (b2 = random(255)),
    //   (a2 = random(60, 180));
    gradient.addColorStop(0, color(r1[i], g1[i], b1[i], a1[i]));
    gradient.addColorStop(1, color(r2[i], g2[i], b2[i], a2[i]));
    drawingContext.fillStyle = gradient;
    rect(x[i], y[i], w[i], h[i]);
  }
}

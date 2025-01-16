let colorsRed = [],
  colorsWhite = [],
  colorsBlack = [],
  colorsGray = [];

function setup() {
  createCanvas(1200, 800);
  noLoop();
  generateColors(2000);
}

function generateColors(nums) {
  for (let i = 0; i < nums; i++) {
    let rand = random();

    if (rand < 0.15) {
      colorsBlack.push(color(random(20, 40), random(20, 40), random(20, 40)));
    } else if (rand < 0.3) {
      colorsWhite.push(
        color(random(246, 256), random(246, 256), random(246, 256))
      );
    } else if (rand < 0.4) {
      let x = random(150, 200);
      colorsGray.push(color(x, x, x));
    } else {
      let r = random(130, 190);
      let g = random(30, 80);
      let b = g;

      let brightnessFactor = random(0.6, 1.4);
      r = constrain(r * brightnessFactor, 0, 255);
      g = constrain(g * brightnessFactor, 0, 255);
      b = constrain(b * brightnessFactor, 0, 255);

      colorsRed.push(color(r, g, b));
    }
  }
}

function draw() {
  background(255);

  // fill(50);
  // rect(0, 0, width, height, 30);

  let cnt1 = 0,
    cnt2 = 0,
    cnt3 = 0,
    cnt4 = 0;

  let c1, c2, c3, c4;

  for (let i = 0; i < ceil(width / 45) + 1; i++) {
    for (let j = 0; j < ceil(height / (30 * sqrt(3))) + 1; j++) {
      let x1 = i * 90,
        x2 = x1 + 45,
        y1 = j * 30 * sqrt(3),
        y2 = y1 - 15 * sqrt(3);

      if (x1 < y1 * sqrt(3)) {
        let rand = random();
        if (rand < 0.2) c1 = colorsWhite[cnt2++];
        else if (rand < 0.3) c1 = colorsGray[cnt4++];
        else if (rand < 0.4) c1 = colorsBlack[cnt3++];
        else c1 = colorsRed[cnt1++];
      } else {
        let rand = random();
        if (rand < 0.05) c1 = colorsBlack[cnt3++];
        else if (rand < 0.15) c1 = colorsRed[cnt1++];
        else if (rand < 0.35) c1 = colorsGray[cnt4++];
        else c1 = colorsWhite[cnt2++];
      }

      if (x2 < y2 * sqrt(3)) {
        let rand = random();
        if (rand < 0.2) c2 = colorsWhite[cnt2++];
        else if (rand < 0.3) c2 = colorsGray[cnt4++];
        else if (rand < 0.4) c2 = colorsBlack[cnt3++];
        else c2 = colorsRed[cnt1++];
      } else {
        let rand = random();
        if (rand < 0.05) c2 = colorsBlack[cnt3++];
        else if (rand < 0.15) c2 = colorsRed[cnt1++];
        else if (rand < 0.35) c2 = colorsGray[cnt4++];
        else c2 = colorsWhite[cnt2++];
      }

      hexagon(x1, y1, c1);
      hexagon(x2, y2, c2);
    }
  }

  fill("white");
  drawRoundedRect(50, 50, 300, 200, 40);
}

function hexagon(transX, transY, c) {
  let strokeColor = color(
    red(c) * 0.8 + random(-10, 10),
    green(c) * 0.8 + random(-10, 10),
    blue(c) * 0.8 + random(-10, 10),
    200
  );
  stroke(strokeColor);
  strokeWeight(2);
  fill(c);

  push();
  translate(transX, transY);
  beginShape();

  vertex(-30, 0);
  vertex(-15, 15 * sqrt(3));
  vertex(15, 15 * sqrt(3));
  vertex(30, 0);
  vertex(15, -15 * sqrt(3));
  vertex(-15, -15 * sqrt(3));

  endShape(CLOSE);
  pop();
}

function drawRoundedRect(x, y, w, h, r) {
  fill("white");
  noStroke();
  beginShape();

  vertex(x + r, y);
  arc(x + r, y + r, 2 * r, 2 * r, PI, (3 * PI) / 2);
  vertex(x + w, y);
  vertex(x + w, y + h);
  vertex(x, y + h);
  vertex(x, y + r);

  endShape(CLOSE);
}

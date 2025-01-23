function setup() {
  createCanvas(2400, 2400);
  noLoop();
}

function draw() {
  background("#ecdcca");

  drawWall();

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 6; j++) {
      let baseX = i * 600;
      let baseY = j * 400;

      let windowWeight1 = random();
      let windowWeight2 = random();
      let acWeight1 = random();
      let acWeight2 = random();
      let balconyWeight = random();

      if (windowWeight1 < 0.7) {
        drawTVWindow(baseX + 50, baseY + 100, 200, 200);

        if (acWeight1 > 0.6) {
          drawAC(baseX + 50, baseY + 150, 100, 50);
        }

        if (windowWeight2 < 0.7) {
          drawTVWindow(baseX + 350, baseY + 100, 200, 200);
          if (acWeight2 < 0.6) {
            drawAC(baseX + 350, baseY + 150, 100, 50);
          }
        }
      } else {
        if (balconyWeight > 0.5) {
          drawBalconyOne(baseX + 5, baseY + 5, 600 - 10, 400 - 10);
        } else {
          drawBalconyTwo(baseX, baseY, 600, 410);
        }
      }
    }
  }

  // drawTVWindow(50, 100, 200, 200);
  // drawTVWindow(50, 500, 200, 200);
  // drawTVWindow(50, 900, 200, 200);

  // drawTVWindow(350, 100, 200, 200);
  // drawTVWindow(350, 500, 200, 200);
  // drawTVWindow(350, 900, 200, 200);

  // drawTVWindow(650, 900, 200, 200);
  // drawTVWindow(950, 900, 200, 200);

  // drawBalconyOne(650, 5, 545, 400);
  // drawBalconyTwo(645, 405, 555, 400);
}

function drawWall() {
  loadPixels();
  let scale = 0.2;
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height * 4; y++) {
      let noiseValue = noise(x * scale, y * scale);
      let brightness = map(noiseValue, 0, 1, 120, 255);
      let index = (x + y * width) * 4;
      pixels[index] = brightness;
      pixels[index + 1] = brightness;
      pixels[index + 2] = brightness;
      pixels[index + 3] = 255;
    }
  }
  updatePixels();
}

function drawTVWindow(x, y, w, h) {
  noStroke();
  push();
  translate(x, y);

  fill(220);
  rect(0, 0, w, h);

  fill("#555f6b");
  rect(10, 10, w - 20, h - 20, 10, 10);

  if (random() > 0.7) {
    fill("white");
    rect(15, 15, w - 30, h - 30, 10, 10);
  }
  if (random() > 0.5) {
    fill("#a8b2c1");
    rect(15, 15, w / 2 - 20, h - 30);
    rect(w / 2 + 5, 15, w / 2 - 20, h - 30);
  }
  pop();
}

function drawBalconyOne(x, y, w, h) {
  stroke("white");
  strokeWeight(10);
  push();
  translate(x, y);

  fill("#a6aec3");
  strokeCap(SQUARE);
  rect(0, 0, w, h);

  stroke(255);
  strokeWeight(20);
  for (let i = 1; i <= 4; i++) {
    line((i * w) / 5, 0, (i * w) / 5, h / 2);
  }
  line((2 * w) / 5, 0, (2 * w) / 5, h);
  stroke("#abb1bf");
  for (let i = 1; i <= 4; i++) {
    if (i != 2) {
      line((i * w) / 5, h / 2, (i * w) / 5, h - 5);
    }
  }

  stroke(0);

  line(-5, 0, w + 5, 0);
  line(-5, h / 2, w + 5, h / 2);
  line(-5, h / 2 + 30, w + 5, h / 2 + 30);

  pop();
}

function drawBalconyTwo(x, y, w, h) {
  stroke("#aab0bb");
  strokeWeight(2);
  push();
  translate(x, y);

  fill("white");
  strokeCap(SQUARE);
  rect(0, 0, w, h / 2 + 30);

  fill("#d1d6da");
  rect(0, 230, w, h / 2 - 30);

  stroke(255);
  strokeWeight(3);
  for (let i = 0; i <= 3; i++) {
    stroke("#bcc4cd");
    if (i != 0) {
      line((i * w) / 4 - 8, 0, (i * w) / 4 - 8, h);
    }

    line((i * w) / 4 + 8, 0, (i * w) / 4 + 8, h);
  }

  stroke(0);

  line(-1, 10, w + 1, 10);
  line(-1, h / 2, w + 1, h / 2);
  line(-1, h / 2 + 30, w + 1, h / 2 + 30);

  stroke("#898d97");
  line(-1, h - 30, w + 1, h - 30);

  noStroke();
  fill("#5e7177");
  rect(8, 140, 135, 65);
  rect(157, 130, 135, 75);

  pop();
}

function drawAC(x, y, w, h) {
  push();
  stroke(0);
  strokeWeight(2);
  translate(x, y + h);
  fill(255);
  rect(0, h / 2, w, h);
  fill("#404851");
  circle(w / 4, h, 40);
  pop();
}

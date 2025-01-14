let x1, x2, x3, y1, y2, y3;
let prevMouseX,
  prevMouseY,
  xOffset = 0,
  yOffset = 0;
let colors = [];
let colorful = true;

function setup() {
  createCanvas(802, 400 * sqrt(3) + 2);
  generateColors();
}

function draw() {
  background("black");
  strokeWeight(3);

  let colorIndex = 0;

  for (let i = 0; i < 4; i++) {
    x1 = 0;
    y1 = 100 * i * sqrt(3);

    (x2 = 50), (y2 = y1), (x3 = 0);

    for (let j = 0; j < 8; j++) {
      x2 = x1 + 100;
      y2 = y1;
      x3 = x1 + 50 + xOffset;
      y3 = y1 + 50 * sqrt(3) + yOffset;

      stroke(colors[colorIndex].strokeColor);
      fill(colors[colorIndex].fillColor);
      colorIndex++;
      triangle(x1, y1, x2, y2, x3, y3);

      if (j == 0) {
        stroke(colors[colorIndex].strokeColor);
        fill(colors[colorIndex].fillColor);
        colorIndex++;
        triangle(0, y3, x3, y3, 0, y1);
      }

      if (j == 7) {
        stroke(colors[colorIndex].strokeColor);
        fill(colors[colorIndex].fillColor);
        colorIndex++;
        triangle(x3, y3, 800, y3, 800, y1);
      }

      if (j < 7) {
        stroke(colors[colorIndex].strokeColor);
        fill(colors[colorIndex].fillColor);
        colorIndex++;
        triangle(x3 + 100, y3, x2, y2 + 100 * sqrt(3), x3, y3);
      }

      x1 += 100;
    }

    x1 = 0;
    y1 += 100 * sqrt(3);

    for (let j = 0; j < 8; j++) {
      x2 = x1 + 100;
      y2 = y1;
      x3 = x1 + 50 + xOffset;
      y3 = y1 - 50 * sqrt(3) + yOffset;

      stroke(colors[colorIndex].strokeColor);
      fill(colors[colorIndex].fillColor);
      colorIndex++;
      triangle(x1, y1, x2, y2, x3, y3);

      if (j == 0) {
        stroke(colors[colorIndex].strokeColor);
        fill(colors[colorIndex].fillColor);
        colorIndex++;
        triangle(0, y3, x3, y3, 0, y1);
      }

      if (j == 7) {
        stroke(colors[colorIndex].strokeColor);
        fill(colors[colorIndex].fillColor);
        colorIndex++;
        triangle(x3, y3, 800, y3, 800, y1);
      }

      if (j < 7) {
        stroke(colors[colorIndex].strokeColor);
        fill(colors[colorIndex].fillColor);
        colorIndex++;
        triangle(x3 + 100, y3, x2, y2 - 100 * sqrt(3), x3, y3);
      }

      x1 += 100;
    }

    line(0, y3, 800, y3);
  }
}

function mousePressed() {
  prevMouseX = mouseX;
  prevMouseY = mouseY;
}

function mouseDragged() {
  if (prevMouseX !== undefined) {
    let dx = mouseX - prevMouseX;
    xOffset += dx;
    prevMouseX = mouseX;
  }
  if (prevMouseY !== undefined) {
    let dy = mouseY - prevMouseY;
    yOffset += dy;
    let maxYOffset = 50 * sqrt(3);
    if (yOffset > maxYOffset) {
      yOffset = maxYOffset;
    } else if (yOffset < -maxYOffset) {
      yOffset = -maxYOffset;
    }
    prevMouseY = mouseY;
  }
}

function keyPressed() {
  if (keyCode === ENTER) {
    generateColors();
  }
  if (keyCode == SHIFT) {
    if (colorful) generateBlackAndWhiteColors();
    else generateColors();
  }
}

function generateColors() {
  colors = [];
  for (let i = 0; i < 136; i++) {
    colors.push({
      strokeColor: color(random(255), random(255), random(255)),
      fillColor: color(random(255), random(255), random(255)),
    });
  }
  colorful = true;
}

function generateBlackAndWhiteColors() {
  colors = [];
  for (let i = 0; i < 136; i++) {
    colors.push({
      strokeColor: color("white"),
      fillColor: color("black"),
    });
  }
  colorful = false;
}

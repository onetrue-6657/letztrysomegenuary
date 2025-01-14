let img, w, h;
let prevMouseX,
  prevMouseY,
  xOffset = 0,
  yOffset = 0;
let rsum = 0,
  gsum = 0,
  bsum = 0;
let standardBright = 0;

function preload() {
  img = loadImage("top1.jpg");
}

function setup() {
  w = img.width;
  h = img.height;
  createCanvas(w, h);
  noStroke();
}

function draw() {
  background(220);

  image(img, 0, 0, w, h);

  loadPixels();
  (standardBright = 0), (rsum = 0), (gsum = 0), (bsum = 0);

  for (let x = 0; x < w; x++) {
    for (let y = 0; y < h; y++) {
      const i = (x + y * w) * 4;
      const [r, g, b] = [pixels[i], pixels[i + 1], pixels[i + 2]];

      (rsum += r), (gsum += g), (bsum += b);
    }
  }

  standardBright = (rsum + gsum + bsum) / (3 * w * h);

  for (let x = 0; x < w; x++) {
    for (let y = 0; y < h; y++) {
      const i = (x + y * w) * 4;
      const [r, g, b] = [pixels[i], pixels[i + 1], pixels[i + 2]];

      let bright = (r + g + b) / 3;

      if (bright > standardBright + xOffset * 0.25) {
        pixels[i] = 255;
        pixels[i + 1] = 255;
        pixels[i + 2] = 255;
      } else {
        pixels[i] = 0;
        pixels[i + 1] = 0;
        pixels[i + 2] = 0;
      }
    }
  }

  updatePixels();
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

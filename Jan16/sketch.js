let filled;

function setup() {
  createCanvas(900, 900);
  noLoop();
  // frameRate(3);
}

function draw() {
  // background("white");
  background(220);
  noStroke();
  filled = false;
  let cnt = 0;

  // blendMode(OVERLAY);
  blendMode(HARD_LIGHT);
  // blendMode(SOFT_LIGHT);

  while (cnt <= random(40, 120)) {
    let r = random(255),
      g = random(255),
      b = random(255),
      a = random(60, 150);
    fill(r, g, b, a);
    rect(
      random(width) - 100,
      random(height) - 100,
      random(width),
      random(height)
    );
    cnt++;
    // if (cnt % 5 == 0) {
    //   filled = checkFilled();
    // }
  }
}

// function checkFilled() {
//   loadPixels();
//   for (let i = 0; i < height; i++) {
//     for (let j = 0; j < width; j++) {
//       let idx = (i + j * width) * 4;
//       if (
//         pixels[idx] === 220 &&
//         pixels[idx + 1] === 220 &&
//         pixels[idx + 2] === 220
//       ) {
//         return false;
//       }
//     }
//   }
//   return true;
// }

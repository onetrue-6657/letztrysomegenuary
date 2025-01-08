// function setup() {
//   createCanvas(1000, 1000);
// }

// function draw() {
//   // background('black');

//   let c = color(0, 0, 0);
//   stroke(c);

//   for (let i = 1; i <= 1000; i++) {
//     for (let j = 1; j <= 1000; j++) {
//       let x = random(0, 256);
//       let y = random(0, 256);
//       let z = random(0, 256);
//       let c = color(x, y, z);
//       stroke(c);
//       point(i, j);
//     }
//   }
// }

function setup() {
  createCanvas(1000, 4000);
}

function draw() {
  loadPixels();
  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      let x = random(0, 256);
      let y = random(0, 256);
      let z = random(0, 256);
      let index = (i + j * width) * 4;
      pixels[index] = x; // R
      pixels[index + 1] = y; // G
      pixels[index + 2] = z; // B
      pixels[index + 3] = 255; // A
    }
  }
  updatePixels();
}
let d = 150,
  a = 225,
  b = 425,
  c = 625;
function setup() {
  createCanvas(850, 850);
  frameRate(60);
}
function draw() {
  background(0);
  stroke(255);
  strokeWeight(5);
  fill(186, 12, 47, 125);
  let x1 = a + ((d - 150) * 17.5) / 30;
  let y1 = a + ((d - 150) * 17.5) / 30;
  circle(x1, y1, d);
  let x2 = b;
  let y2 = a + ((d - 150) * 17.5) / 30;
  circle(x2, y2, d);
  let x3 = c - ((d - 150) * 17.5) / 30;
  let y3 = a + ((d - 150) * 17.5) / 30;
  circle(x3, y3, d);
  let x4 = a + ((d - 150) * 17.5) / 30;
  let y4 = b;
  circle(x4, y4, d);
  let x5 = b;
  let y5 = b;
  circle(x5, y5, d);
  let x6 = c - ((d - 150) * 17.5) / 30;
  let y6 = b;
  circle(x6, y6, d);
  let x7 = a + ((d - 150) * 17.5) / 30;
  let y7 = c - ((d - 150) * 17.5) / 30;
  circle(x7, y7, d);
  let x8 = b;
  let y8 = c - ((d - 150) * 17.5) / 30;
  circle(x8, y8, d);
  let x9 = c - ((d - 150) * 17.5) / 30;
  let y9 = c - ((d - 150) * 17.5) / 30;
  circle(x9, y9, d);
  d += 0.5; // 30 per second
}

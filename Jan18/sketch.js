function setup() {
  createCanvas(800, 800);
  frameRate(60);
}

function draw() {
  background(0);
  noStroke();

  drawBase();
  translate(width / 2, height / 2);
  rotate(radians(frameCount));
  windMill();
}

function drawBase() {
  fill(100);
  rect(250, 720, 300, 80);

  fill("#e9a5bc");
  quad(250, 720, 325, 450, 475, 450, 550, 720);

  fill("#e46051");
  arc(400, 450, 150, 150, PI, 2 * PI);

  fill("black");
  arc(400, 525, 40, 80, PI, 2 * PI);
  arc(400, 600, 40, 80, PI, 2 * PI);
  arc(400, 675, 40, 80, PI, 2 * PI);

  stroke("#e46051");
  strokeWeight(3);
  line(375, 524, 425, 524);
  line(375, 599, 425, 599);
  line(375, 674, 425, 674);
}

function windMill() {
  strokeWeight(10);

  fill("#e34400");
  stroke("#922a01");
  arc(0, -150, 300, 300, (3 * PI) / 2, (5 * PI) / 2);

  fill("#c19500");
  stroke("#c2b60d");
  arc(-150, 0, 300, 300, PI, 2 * PI);

  fill("#315d8d");
  stroke("#68a1c8");
  arc(0, 150, 300, 300, PI / 2, (3 * PI) / 2);

  fill("#38be17");
  stroke("#288908");
  arc(150, 0, 300, 300, 0, PI);
}

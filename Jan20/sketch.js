let img1, img2, img3;

function preload() {
  img1 = loadImage("osu.png");
  img2 = loadImage("ohio.png");
  img3 = loadImage("stadium.png");
}

function setup() {
  createCanvas(900, 900);
}

function draw() {
  background("#BA0C2F");
  translate(450, 450);
  drawCenter();
  drawLeft();
  drawRight();

  image(img3, -360, -200, 720, 460);
}

function drawCenter() {
  stroke(0);
  strokeWeight(3);
  fill("#949494");
  rect(-175, -100, 75, 200);
  rect(100, -100, 75, 200);
  rect(-170, -108, 65, 8);
  rect(-165, -116, 55, 8);
  rect(-160, -124, 45, 8);
  rect(105, -108, 65, 8);
  rect(110, -116, 55, 8);
  rect(115, -124, 45, 8);

  rect(-100, -100, 200, 200);
  line(-100, -115, 100, -115);
  for (let i = -100; i <= 100; i += 10) {
    line(i, -115, i, -100);
  }

  noStroke();
  arc(0, -65, 140, 100, (9 * PI) / 8, (15 * PI) / 8);
  stroke(0);
  strokeWeight(3);
  noFill();
  arc(0, -65, 140, 100, (9.55 * PI) / 8, (14.45 * PI) / 8);

  fill("#9a9a98");
  rect(-80, 0, 160, 100);

  noStroke();
  arc(0, 5, 160, 160, PI, TWO_PI);
  stroke(0);
  strokeWeight(3);
  noFill();
  arc(0, 5, 160, 160, PI, TWO_PI);

  bezier(-30, -67, -20, -50, 20, -50, 30, -67);

  stroke("#472626");
  bezier(-80, -5, -15, 10, 15, 10, 80, -5);
  line(-165, -10, -110, -10);
  line(110, -10, 165, -10);

  stroke(0);
  line(-175, -15, -100, -15);
  line(100, -15, 175, -15);

  line(-15, 100, -15, 40);
  line(15, 100, 15, 40);
  line(-15, 45, 15, 45);
  bezier(-15, 40, -15, 20, 15, 20, 15, 40);

  line(-60, 100, -60, 40);
  line(-35, 100, -35, 40);
  line(-60, 45, -35, 45);
  bezier(-60, 40, -60, 20, -35, 20, -35, 40);

  line(60, 100, 60, 40);
  line(35, 100, 35, 40);
  line(60, 45, 35, 45);
  bezier(60, 40, 60, 20, 35, 20, 35, 40);

  line(-100, -15, -80, -15);
  bezier(-80, -15, -15, 0, 15, 0, 80, -15);
  line(80, -15, 100, -15);

  fill("#b1b7b5");
  rect(-155, -70, 35, 45);
  line(-160, -70, -115, -70);
  rect(120, -70, 35, 45);
  line(115, -70, 160, -70);

  fill(0);

  rect(-151, -60, 3, 35);
  rect(-127, -60, 3, 35);
  rect(-142, -60, 9, 35);
  line(-155, -60, -120, -60);

  rect(148, -60, 3, 35);
  rect(124, -60, 3, 35);
  rect(133, -60, 9, 35);
  line(120, -60, 155, -60);

  fill("#b1b7b5");
  rect(-150, 25, 25, 75);
  rect(125, 25, 25, 75);

  noStroke();
  arc(-137.5, 27, 25, 32, PI, TWO_PI);
  stroke(0);
  strokeWeight(3);
  noFill();
  arc(-137.5, 27, 25, 32, PI, TWO_PI);

  fill("#b1b7b5");
  noStroke();
  arc(137.5, 27, 25, 32, PI, TWO_PI);
  stroke(0);
  strokeWeight(3);
  noFill();
  arc(137.5, 27, 25, 32, PI, TWO_PI);

  stroke(0);
  line(-137.5, -124, -137.5, -225);
  line(137.5, -124, 137.5, -225);
  image(img1, -140, -227, 60, 42);
  image(img2, 138, -225, 60, 42);
}

function drawLeft() {
  stroke(0);
  strokeWeight(3);
  fill("#949494");
  rect(-275, -100, 100, 200);

  fill(0);
  rect(-273, -26, 96, 4);

  noStroke();
  rect(-245, -60, 5, 8);
  rect(-210, -60, 5, 8);

  stroke(0);
  strokeWeight(3);
  rect(-255, 10, 20, 90);
  arc(-245, 10, 20, 25, PI, TWO_PI);

  rect(-215, 10, 20, 90);
  arc(-205, 10, 20, 25, PI, TWO_PI);

  strokeWeight(2);
  line(-275, -120, -175, -120);
  strokeWeight(3);
  line(-275, -110, -175, -110);
  strokeWeight(2);
  for (let i = -275; i <= -175; i += 10) {
    line(i, -120, i, -100);
  }

  strokeWeight(3);
  fill("#bcbfc4");
  rect(-415, -150, 140, 250);
  line(-415, -125, -275, -125);
  line(-415, -115, -300, -115);
  line(-415, -80, -300, -80);
  fill(0);
  rect(-415, -20, 140, 5);

  rect(-315, 15, 20, 85);
  arc(-305, 15, 20, 25, PI, TWO_PI);
  rect(-355, 15, 20, 85);
  arc(-345, 15, 20, 25, PI, TWO_PI);

  fill("#b1b7b5");
  rect(-395, 15, 20, 85);

  noStroke();
  arc(-385, 17, 20, 30, PI, TWO_PI);
  stroke(0);
  strokeWeight(3);
  noFill();
  arc(-385, 17, 20, 30, PI, TWO_PI);

  line(-365, -150, -365, -115);

  fill(0);
  rect(-415, -115, 45, 35);
  rect(-360, -115, 80, 35);
}

function drawRight() {
  stroke(0);
  strokeWeight(3);
  fill("#949494");
  rect(175, -100, 100, 200);

  fill(0);
  rect(177, -26, 96, 4);

  noStroke();
  rect(205, -60, 5, 8);
  rect(240, -60, 5, 8);

  stroke(0);
  strokeWeight(3);
  rect(195, 10, 20, 90);
  arc(205, 10, 20, 25, PI, TWO_PI);

  rect(235, 10, 20, 90);
  arc(245, 10, 20, 25, PI, TWO_PI);

  strokeWeight(2);
  line(175, -120, 275, -120);
  strokeWeight(3);
  line(175, -110, 275, -110);
  strokeWeight(2);
  for (let i = 175; i <= 275; i += 10) {
    line(i, -120, i, -100);
  }

  strokeWeight(3);
  fill("#bcbfc4");
  rect(275, -150, 140, 250);
  line(275, -125, 415, -125);
  line(300, -115, 415, -115);
  line(300, -80, 415, -80);
  fill(0);
  rect(275, -20, 140, 5);

  rect(295, 15, 20, 85);
  arc(305, 15, 20, 25, PI, TWO_PI);
  rect(335, 15, 20, 85);
  arc(345, 15, 20, 25, PI, TWO_PI);

  fill("#b1b7b5");
  rect(375, 15, 20, 85);

  noStroke();
  arc(385, 17, 20, 30, PI, TWO_PI);
  stroke(0);
  strokeWeight(3);
  noFill();
  arc(385, 17, 20, 30, PI, TWO_PI);

  line(365, -150, 365, -115);

  fill(0);
  rect(370, -115, 45, 35);
  rect(280, -115, 80, 35);
}

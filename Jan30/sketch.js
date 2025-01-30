function setup() {
  createCanvas(1200, 1200);
}

function draw() {
  background(0);

  drawLake();
  drawRiver();
  lineOne();
  lineTwo();
  lineThreeAndEleven();
  lineFour();
  lineFive();
  lineSix();
  lineSeven();
  lineEight();
}

function drawLake() {
  fill("#91d6d2");
  noStroke();

  rect(-100, 975, 450, 300, 40, 40);
  rect(800, -100, 280, 350, 40, 40);
}

function drawRiver() {
  /**
   * Grand Canal
   */
  fill("#91d6d2");
  noStroke();

  quad(0, 70, 218, 255, 200, 280, 0, 100);
  rect(200, 280, 30, 470);
  rect(260, 780, 290, 30);
  rect(580, 840, 30, 420);

  arc(200, 280, 60, 60, PI + HALF_PI, TWO_PI);

  fill("#91d6d2");
  arc(260, 750, 120, 120, HALF_PI, PI);
  fill("#000000");
  arc(260, 750, 60, 60, HALF_PI, PI);

  fill("#91d6d2");
  arc(550, 840, 120, 120, PI + HALF_PI, TWO_PI);
  fill("#000000");
  arc(550, 840, 60, 60, PI + HALF_PI, TWO_PI);

  /**
   * The Moat
   */
  fill("#91d6d2");
  rect(360, 360, 30, 250);
  rect(580, 360, 30, 250);
  rect(420, 300, 130, 30);
  rect(420, 640, 130, 30);

  fill("#91d6d2");
  arc(420, 360, 120, 120, PI, HALF_PI + PI);
  fill("#000000");
  arc(420, 360, 60, 60, PI, HALF_PI + PI);

  fill("#91d6d2");
  arc(550, 360, 120, 120, HALF_PI + PI, TWO_PI);
  fill("#000000");
  arc(550, 360, 60, 60, HALF_PI + PI, TWO_PI);

  fill("#91d6d2");
  arc(420, 610, 120, 120, HALF_PI, PI);
  fill("#000000");
  arc(420, 610, 60, 60, HALF_PI, PI);

  fill("#91d6d2");
  arc(550, 610, 120, 120, 0, HALF_PI);
  fill("#000000");
  arc(550, 610, 60, 60, 0, HALF_PI);
}

function lineOne() {
  noStroke();
  fill("#7abf1d");
  rect(40, 480 + 40, 580, 15);
  rect(635, 405 + 60, 400, 15);
  rect(620, 420 + 60, 15, 45);
  fill("#7abf1d");
  arc(620, 480 + 40, 30, 30, 0, HALF_PI);
  arc(635, 420 + 60, 30, 30, HALF_PI, HALF_PI + PI);
}

function lineTwo() {
  noStroke();
  fill("#ef2e3d");
  rect(550, 40, 15, 80);
  arc(550, 120, 30, 33, 0, HALF_PI);
  quad(550, 120, 556, 135, 300, 360, 295, 342);
  arc(300, 360, 30, 36, PI, HALF_PI + PI);
  rect(285, 360, 15, 485);
  arc(315, 845, 60, 60, HALF_PI, PI);
  fill(0);
  arc(315, 845, 30, 30, HALF_PI, PI);
  fill("#ef2e3d");
  rect(315, 860, 420, 15);
  arc(735, 875, 33, 30, HALF_PI + PI, TWO_PI);
  quad(735, 875, 752, 871, 830, 954, 804, 954);
  arc(820, 950, 31, 30, HALF_PI, PI);
  rect(820, 950, 250, 15);
}

function lineThreeAndEleven() {
  noStroke();
  fill("#ff8200");
  triangle(60, 80, 60, 65, 75, 80);
  rect(60, 80, 15, 300);
  arc(75, 380, 30, 30, HALF_PI, PI);
  rect(75, 380, 60, 15);
  arc(135, 395, 30, 30, HALF_PI + PI, TWO_PI);
  rect(135, 395, 15, 320);
  arc(150, 715, 30, 30, HALF_PI, PI);
  rect(150, 715, 580, 15);
  arc(730, 715, 30, 30, 0, HALF_PI);
  rect(730, 380, 15, 335);
  arc(745, 380, 30, 30, PI, HALF_PI + PI);
  rect(745, 365, 290, 15);

  fill("#efc5a6");
  rect(1035, 365, 60, 15);
  arc(1095, 380, 30, 30, HALF_PI + PI, TWO_PI);
  rect(1095, 380, 15, 350);
  arc(1110, 730, 30, 30, HALF_PI, PI);
  rect(1110, 730, 60, 15);

  fill("#771f2c");
  rect(1170, 730, 50, 15);
}

function lineFour() {
  noStroke();
  fill("#0072ce");
  rect(320, 40, 15, 180);
  arc(335, 220, 30, 32.5, HALF_PI, PI);
  quad(335, 220, 330, 236, 425, 318, 428, 300);
  arc(425, 315, 30, 31, HALF_PI + PI, TWO_PI);
  rect(425, 315, 15, 780);
  arc(440, 1095, 30, 30, HALF_PI, PI);
  rect(440, 1095, 240, 15);
}

function lineFive() {
  noStroke();
  fill("#e938ad");
  rect(50, 640, 15, 275);
  arc(80, 640, 60, 60, PI, PI + HALF_PI);
  fill(0);
  arc(80, 640, 30, 30, PI, PI + HALF_PI);
  fill("#e938ad");
  rect(80, 610, 550, 15);
  arc(630, 625, 30, 30, PI + HALF_PI, TWO_PI);
  rect(630, 625, 15, 30);
  arc(645, 655, 30, 30, HALF_PI, PI);
  rect(645, 655, 240, 15);
  arc(885, 655, 33, 30, 0, HALF_PI);
  quad(885, 655, 975, 575, 982, 590, 900, 662);
  arc(975, 575, 30, 34, 0, HALF_PI);
  rect(975, 300, 15, 275);
}

function lineSix() {
  noStroke();
  fill("#2eacde");
  triangle(60, 65, 75, 65, 75, 80);
  rect(75, 65, 35, 15);
  arc(110, 80, 32, 30, HALF_PI + PI, TWO_PI);
  quad(110, 80, 265, 190, 280, 183, 123, 70.5);
  arc(280, 183, 32, 30, HALF_PI, PI);
  rect(280, 183, 230, 15);
  arc(510, 213, 60, 60, PI + HALF_PI, TWO_PI);
  fill(0);
  arc(510, 213, 30, 30, PI + HALF_PI, TWO_PI);
  fill("#2eacde");
  rect(525, 213, 15, 350);
  arc(555, 563, 60, 60, HALF_PI, PI);
  fill(0);
  arc(555, 563, 30, 30, HALF_PI, PI);
  fill("#2eacde");
  rect(555, 578, 330, 15);
  arc(885, 593, 33, 30, PI + HALF_PI, TWO_PI);
  quad(885, 593, 975, 675, 980, 658.5, 900, 587);
  arc(975, 675, 30, 33, PI + HALF_PI, TWO_PI);
  rect(975, 675, 15, 260);
  arc(990, 935, 30, 30, HALF_PI, PI);
  rect(990, 935, 80, 15);
}

function lineSeven() {
  noStroke();
  fill("#ad87d0");
  rect(180, 900, 480, 15);
  arc(660, 885, 60, 60, 0, HALF_PI);
  fill(0);
  arc(660, 885, 30, 30, 0, HALF_PI);
  fill("#ad87d0");
  rect(675, 40, 15, 845);
}

function lineEight() {
  noStroke();
  fill("#9f9100");
  rect(150, 180, 15, 250);
  arc(180, 180, 60, 60, PI, PI + HALF_PI);
  fill(0);
  arc(180, 180, 30, 30, PI, PI + HALF_PI);
  fill("#9f9100");
  rect(180, 150, 535, 15);
  arc(715, 180, 60, 60, PI + HALF_PI, TWO_PI);
  fill(0);
  arc(715, 180, 30, 30, PI + HALF_PI, TWO_PI);
  fill("#9f9100");
  rect(730, 180, 15, 130);
  arc(760, 310, 60, 60, HALF_PI, PI);
  fill(0);
  arc(760, 310, 30, 30, HALF_PI, PI);
  fill("#9f9100");
  rect(760, 325, 85, 15);
  arc(845, 355, 60, 60, HALF_PI + PI, TWO_PI);
  fill(0);
  arc(845, 355, 30, 30, HALF_PI + PI, TWO_PI);
  fill("#9f9100");
  rect(860, 355, 15, 675);
}

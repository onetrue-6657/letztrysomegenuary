function setup() {
  createCanvas(1000, 1000);
  angleMode(DEGREES);
}

function draw() {
  background("#000000");

  fill("white");
  circle(200, 200, 100);

  for (let i = 0; i < 150; i++) {
    let x = random(0, 1000);
    let y = random(0, 800);
    circle(x, y, 8);
  }

  fill('#E5E5D1');
  noStroke();
  quad(0, 600, 200, 450, 500, 800, 0, 1000);
  quad(150, 650, 550, 400, 1000, 800, 800, 1000);
  quad(700, 700, 900, 500, 1000, 620, 1000, 1000);

  fill('#000080');
  quad(760, 800, 760, 550, 880, 550, 880, 1000);
  fill('white');
  quad(760, 540, 760, 550, 880, 550, 880, 540);

  fill('#BFBF00');
  quad(680, 800, 680, 630, 800, 630, 800, 1000);
  fill('white');
  quad(680, 620, 680, 630, 800, 630, 800, 620);
  
  fill('#800000');
  quad(880, 800, 880, 650, 970, 650, 970, 1000);
  fill('white');
  quad(880, 640, 880, 650, 970, 650, 970, 640);

  fill('#964B00');
  quad(120, 800, 120, 700, 140, 700, 140, 1000);

  fill('#008000');
  triangle(80, 730, 180, 730, 130, 650);
  fill('white');
  triangle(85, 720, 175, 720, 130, 645);

  fill('#008000');
  triangle(90, 700, 170, 700, 130, 650);
  fill('white');
  triangle(95, 690, 165, 690, 130, 645);

  fill('#008000');
  triangle(100, 675, 160, 675, 130, 640);
  fill('white');
  triangle(105, 665, 155, 665, 130, 640);

  circle(350, 745, 50);
  circle(350, 705, 30);

  fill('black');
  circle(345, 700, 3);
  circle(355, 700, 3);
  circle(350, 755, 3);
  circle(350, 735, 3);
  circle(350, 745, 3);
  
  fill('orange');
  triangle(350, 705, 330, 715, 353, 708);

  stroke('brown');
  strokeWeight(4);
  line(370, 745, 400, 730);
  line(330, 745, 300, 730);

  noStroke();
  fill('white');
  quad(0, 750, 1000, 800, 1000, 810, 0, 760);
  fill("#f5f5dc");
  quad(0, 760, 1000, 810, 1000, 1000, 0, 1000);
}

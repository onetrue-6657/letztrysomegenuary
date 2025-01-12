function setup() {
  createCanvas(800, 800, WEBGL);
}

function draw() {
  background('black');
  orbitControl();
  lights();
  strokeWeight(4);
  stroke('white');
  fill('black');

  let p1 = 100, p2 = 200, p3 = 400;
  translate(0, 400, 0);

  let rectSizeX, rectSizeY;

  for (let i = 10; i > 0; i--) {
    strokeWeight(p3 / 100);
    let w = p3 / 100;

    translate(0, -p3, -p1);
    box(p3, p3, p2);

    rectSizeX = p3 * 3 / 4;
    rectSizeY = p2 * 3 / 4;
    drawFace(0, 0, p2 / 2, 0, 0, 0, rectSizeX, rectSizeY, w); 
    drawFace(0, 0, -p2 / 2, 0, PI, 0, rectSizeX, rectSizeY, w); 
    drawFace(0, -p3 / 2, 0, -PI / 2, 0, 0, rectSizeX, rectSizeY, w); 
    drawFace(0, p3 / 2, 0, PI / 2, 0, 0, rectSizeX, rectSizeY, w); 
    drawFace(-p3 / 2, 0, 0, 0, -PI / 2, 0, rectSizeY, rectSizeX, w); 
    drawFace(p3 / 2, 0, 0, 0, PI / 2, 0, rectSizeY, rectSizeX, w); 

    translate(-p1, 0, p2);
    box(p2, p3, p2);

    rectSizeX = p2 * 3 / 4;
    rectSizeY = p3 * 3 / 4;
    drawFace(0, 0, p2 / 2, 0, 0, 0, rectSizeX, rectSizeY, w); 
    drawFace(0, 0, -p2 / 2, 0, PI, 0, rectSizeX, rectSizeY, w); 
    drawFace(0, -p3 / 2, 0, -PI / 2, 0, 0, rectSizeY / 2, rectSizeY / 2, w); 
    drawFace(0, p3 / 2, 0, PI / 2, 0, 0, rectSizeY / 2, rectSizeY / 2, w); 
    drawFace(-p2 / 2, 0, 0, 0, -PI / 2, 0, rectSizeY / 2, rectSizeX * 2, w); 
    drawFace(p2 / 2, 0, 0, 0, PI / 2, 0, rectSizeY / 2, rectSizeX * 2, w);

    translate(p2, p1, 0);
    box(p2, p2, p2);

    rectSizeX = p2 * 3 / 4;
    rectSizeY = p2 * 3 / 4;
    drawFace(0, 0, p2 / 2, 0, 0, 0, rectSizeX, rectSizeY, w); 
    drawFace(0, 0, -p2 / 2, 0, PI, 0, rectSizeX, rectSizeY, w); 
    drawFace(0, -p2 / 2, 0, -PI / 2, 0, 0, rectSizeX, rectSizeY, w); 
    drawFace(0, p2 / 2, 0, PI / 2, 0, 0, rectSizeX, rectSizeY, w); 
    drawFace(-p2 / 2, 0, 0, 0, -PI / 2, 0, rectSizeY, rectSizeX, w); 
    drawFace(p2 / 2, 0, 0, 0, PI / 2, 0, rectSizeY, rectSizeX, w); 

    p1 /= 2;
    p2 /= 2;
    p3 /= 2;
  }
}

function drawFace(x, y, z, rotX, rotY, rotZ, w, h, weight) {
  push();
  stroke('white');
  strokeWeight(weight);
  translate(x, y, z); 
  rotateX(rotX); 
  rotateY(rotY); 
  rotateZ(rotZ);
  fill('black');
  rectMode(CENTER);

  let currentX = -w / 2; 
  let currentY = -h / 2;
  let currentW = w;
  let currentH = h;  

  for (let i = 0; i < 14; i++) {
    rect(currentX + currentW / 2, currentY + currentH / 2, currentW, currentH); 

    if (i % 2 === 0) {
      currentX += currentW / 2; 
      currentW /= 2; 
    } else {
      currentY += currentH / 2;
      currentH /= 2;
    }
  }

  pop();
}

  // translate(0, 0, -100);
  // box(400, 400, 200);

  // translate(-100, 0, 200);
  // box(200, 400, 200);

  // translate(200, 100, 0);
  // box(200, 200, 200);

  // translate(0, -200, -50);
  // box(200, 200, 100);

  // translate(-50, 0, 100);
  // box(100, 200, 100);

  // translate(100, 50, 0);
  // box(100, 100, 100);
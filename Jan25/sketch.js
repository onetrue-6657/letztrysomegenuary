let path = [];
let speed = 3;
let angle = [-90, 0];
let idx = 0;
let started = false,
  ended = false;
let timerStart = 0,
  finalTime = 0;
let initialRotation = 315;

function setup() {
  createCanvas(600, 900);
  path.push(createVector(width / 2, height / 2));
  strokeCap(SQUARE);
  strokeJoin(SQUARE);

  timerStart = millis();

  for (let y = height; y >= height / 2 - 100; y -= speed) {
    path.push(createVector(width / 2, y));
  }

  displayTimer();
}

function draw() {
  background(0);

  if (!ended) {
    /**
     * Push every next position as a vector into the path array
     */
    if (started) {
      let lastPos = path[path.length - 1];

      let currentAngle = radians(angle[idx]);
      let dir = createVector(cos(currentAngle), sin(currentAngle));

      let nextPos = p5.Vector.add(lastPos, p5.Vector.mult(dir, speed));
      path.push(nextPos);
    }

    let headPos = path[path.length - 1];

    /**
     * Let the camera go with the line
     */
    push();

    translate(width / 2, height / 2);
    rotate(radians(initialRotation));
    translate(-headPos.x, -headPos.y);

    stroke("#BA0C2F");
    // stroke("#ff32ff");
    strokeWeight(20);
    noFill();

    beginShape();
    for (let i = 0; i < path.length; i++) {
      vertex(path[i].x, path[i].y);
    }
    endShape();

    pop();

    displayTimer();
  } else {
    /**
     * Show the whole line after the animation ends
     */
    let minX = Infinity,
      maxX = -Infinity;
    let minY = Infinity,
      maxY = -Infinity;
    /**
     * Iterate the path array to find the start and end points
     */
    for (let p of path) {
      if (p.x < minX) minX = p.x;
      if (p.x > maxX) maxX = p.x;
      if (p.y < minY) minY = p.y;
      if (p.y > maxY) maxY = p.y;
    }
    let w = maxX - minX;
    let h = maxY - minY;

    let scaleFactor = 1;
    if (w > 0 && h > 0) {
      let scaleW = (width * 0.8) / w;
      let scaleH = (height * 0.8) / h;
      scaleFactor = min(scaleW, scaleH);
    }

    push();
    translate(width / 2, height / 2);
    scale(scaleFactor);
    let midX = (minX + maxX) / 2;
    let midY = (minY + maxY) / 2;
    translate(-midX, -midY);

    // stroke("#ff32ff");
    stroke("#BA0C2F");
    strokeWeight(10 / scaleFactor);
    noFill();
    beginShape();
    for (let i = 0; i < path.length; i++) {
      vertex(path[i].x, path[i].y);
    }
    endShape();
    pop();

    displayTimer();
  }
}

/**
 * Status controller
 */
function keyPressed() {
  if (keyCode === ENTER && !ended) {
    idx = 1 - idx;
  }
  if (keyCode === SHIFT && !started && !ended) {
    started = true;
    timerStart = millis();
  }
  if (keyCode === BACKSPACE && !ended) {
    ended = true;
    started = false;
    finalTime = millis() - timerStart;
  }
}

/**
 * Timer, used the same in Jan11
 */
function displayTimer() {
  // fill("#ff32ff");
  fill("#BA0C2F");
  textSize(30);
  textStyle(BOLD);
  textAlign(LEFT, TOP);
  textFont("Verdana");

  let timeStr = "00:00";

  if (started) {
    let now = millis();
    let elapsedMS = now - timerStart;
    if (elapsedMS < 0) elapsedMS = 0;

    let elapsedSec = elapsedMS / 1000.0;
    timeStr = formatTime(elapsedSec);
  }
  if (ended) {
    let elapsedSec = finalTime / 1000.0;
    timeStr = formatTime(elapsedSec);
  }

  text(`${timeStr}`, 20, 20);
}

function formatTime(s) {
  let min = floor(s / 60);
  let sec = floor(s % 60);
  return nf(min, 2) + ":" + nf(sec, 2);
}

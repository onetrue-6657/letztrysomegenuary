let started = false,
  ended = false;
let currentScale = 0.5;
let maxLevel = 1;
let targetScale = 0.5;

function setup() {
  createCanvas(1800, 900);
  frameRate(60);
}

function draw() {
  background("#BA0C2F");
  stroke("#666666");

  if (started && !ended) {
    translate(width / 2, height / 2);

    currentScale += (targetScale - currentScale) * 0.1;
    push();
    scale(currentScale);

    for (let i = 0; i < maxLevel; i++) {
      drawLevel(i);
    }
    pop();
  }
}

function drawLevel(level) {
  const yGap = height / (maxLevel + 1);
  const y = -height / 2 + yGap * (level + 1);

  const nodes = pow(2, level);
  const xGap = width / pow(2, level);
  const nodeSize = min(250, width / (pow(2, maxLevel) * 1.5));
  const strokeSize = nodeSize / 10;

  strokeWeight(strokeSize);

  for (let i = 0; i < nodes; i++) {
    const x = -width / 2 + xGap * (i + 0.5);

    if (level > 0) {
      const parentIndex = floor(i / 2);
      const parentX =
        -width / 2 + (width / pow(2, level - 1)) * (parentIndex + 0.5);
      const parentY = -height / 2 + yGap * level;

      const angle = atan2(y - parentY, x - parentX);
      const startX = parentX + cos(angle) * (nodeSize / 2);
      const startY = parentY + sin(angle) * (nodeSize / 2);
      const endX = x - cos(angle) * (nodeSize / 2);
      const endY = y - sin(angle) * (nodeSize / 2);

      line(startX, startY, endX, endY);
    }

    fill(255);
    circle(x, y, nodeSize);
  }
}

function keyPressed() {
  if (keyCode === ENTER) {
    started = true;
    ended = false;
    maxLevel = 1;
    targetScale = 0.5;
  } else if (keyCode === BACKSPACE && started) {
    ended = true;
    started = false;
  } else if (keyCode === RIGHT_ARROW && started) {
    maxLevel++;
    targetScale *= 1.1;
  } else if (keyCode === LEFT_ARROW && started && maxLevel > 1) {
    maxLevel--;
    targetScale *= 0.9;
  }
}

let colors = [
  "#FFFFFF",
  "#CCE6FC",
  "#A4E28B",
  "#9285b8",
  "#e999c1",
  "#0a9592",
  "#844f68",
  "#c38967",
  "#187c91",
  "#1377a4",
  "#8d488d",
];
let innerRadius = 60;
let shrinkSpeed = 4;
let circles = [];
let currentLogicState;

function setup() {
  createCanvas(1200, 900);
  frameRate(60);
  currentLogicState = initializeLogicState(randomLogic());
}

function draw() {
  background(0);

  if (currentLogicState) {
    executeCurrentLogic();
  }

  for (let i = circles.length - 1; i >= 0; i--) {
    let circle = circles[i];
    drawAndUpdateCircle(circle);

    if (circle.alpha <= 0) {
      circles.splice(i, 1);
    }
  }
}

/**
 * Randomly generates the logic for the next animation
 * @returns the logic object
 */
function randomLogic() {
  let logicIndex = int(random(3));
  let color = random(colors);
  if (logicIndex === 0) {
    return {
      name: "linear",
      points: generateLinearPoints(
        random(100, width - 100),
        random(80, height - 80),
        color
      ),
    };
  } else if (logicIndex === 1) {
    return {
      name: "circlesAnimation",
      points: generateCirclePoints(
        random(100, width - 100),
        random(80, height - 80),
        color
      ),
    };
  } else {
    return {
      name: "arcs",
      points: generateArcPoints(
        random(100, width - 100),
        random(80, height - 80),
        color
      ),
    };
  }
}

/**
 * Initializes the state for the current logic
 * @param {Object} logic - the logic object
 * @returns the state object
 */
function initializeLogicState(logic) {
  return {
    points: logic.points,
    index: 0,
    lastTime: 0,
    interval: random(50, 150),
  };
}

/**
 * Executes the current logic
 */
function executeCurrentLogic() {
  let state = currentLogicState;
  if (
    millis() - state.lastTime > state.interval &&
    state.index < state.points.length
  ) {
    let point = state.points[state.index];
    addCircle(point.x, point.y, point.color);
    state.index++;
    state.lastTime = millis();
  }

  if (state.index >= state.points.length) {
    currentLogicState = initializeLogicState(randomLogic());
  }
}

function generateLinearPoints(x, y, c) {
  let points = [];
  let dist = random(200, 600);
  let num = int(random(4, 10));
  let angle = random(TWO_PI);
  let stepX = (cos(angle) * dist) / num;
  let stepY = (sin(angle) * dist) / num;

  let startX = constrain(
    x - (dist / 2) * cos(angle),
    innerRadius,
    width - innerRadius
  );
  let startY = constrain(
    y - (dist / 2) * sin(angle),
    innerRadius,
    height - innerRadius
  );

  for (let i = 0; i < num; i++) {
    let offsetX = startX + i * stepX;
    let offsetY = startY + i * stepY;

    offsetX = constrain(offsetX, innerRadius, width - innerRadius);
    offsetY = constrain(offsetY, innerRadius, height - innerRadius);

    points.push({ x: offsetX, y: offsetY, color: c });
  }
  return points;
}

function generateCirclePoints(x, y, c) {
  let points = [];
  let r = random(100, min(width, height) / 2 - innerRadius);
  let num = int(random(4, 12));
  let angleStep = TWO_PI / num;

  for (let i = 0; i < num; i++) {
    let angle = i * angleStep;
    if (i % 2 === 0) {
      let offsetX1 = x + cos(angle) * r;
      let offsetY1 = y + sin(angle) * r;
      points.push({
        x: constrain(offsetX1, innerRadius, width - innerRadius),
        y: constrain(offsetY1, innerRadius, height - innerRadius),
        color: c,
      });
    } else {
      let offsetX2 = x - cos(angle) * r;
      let offsetY2 = y - sin(angle) * r;
      points.push({
        x: constrain(offsetX2, innerRadius, width - innerRadius),
        y: constrain(offsetY2, innerRadius, height - innerRadius),
        color: c,
      });
    }
  }
  return points;
}

function generateArcPoints(x, y, c) {
  let points = [];
  let r = random(80, min(width, height) / 2 - innerRadius);
  let num = int(random(5, 12));
  let startAngle = random(0, PI);
  let endAngle = startAngle + random(PI / 2, PI);
  let angleStep = (endAngle - startAngle) / num;

  for (let i = 0; i < num; i++) {
    let angle = startAngle + i * angleStep;
    let offsetX = x + cos(angle) * r;
    let offsetY = y + sin(angle) * r;
    points.push({
      x: constrain(offsetX, innerRadius, width - innerRadius),
      y: constrain(offsetY, innerRadius, height - innerRadius),
      color: c,
    });
  }
  return points;
}

/**
 * Adds a circle to the animation
 * @param {Number} x - the x coordinate of the circle
 * @param {Number} y - the y coordinate of the circle
 * @param {String} c - the color of the circle
 */
function addCircle(x, y, c) {
  let outerRadius = 150;

  let circle = {
    x: x,
    y: y,
    outerRadius: outerRadius,
    innerRadius: innerRadius,
    color: c,
    alpha: 255,
    shrinking: false,
  };

  circles.push(circle);
}

/**
 * Draws and updates the circle
 * @param {Object} circle - the circle object
 */
function drawAndUpdateCircle(circle) {
  stroke(circle.color + hex(circle.alpha, 2));
  strokeWeight(4);
  noFill();

  ellipse(circle.x, circle.y, circle.outerRadius * 2);
  ellipse(circle.x, circle.y, circle.innerRadius * 2);

  if (!circle.shrinking) {
    circle.outerRadius -= shrinkSpeed;
    if (circle.outerRadius <= circle.innerRadius) {
      circle.shrinking = true;
    }
  } else {
    circle.alpha -= 10;
    if (circle.alpha < 0) {
      circle.alpha = 0;
    }
  }
}

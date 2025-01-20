let diamonds = [];

function setup() {
  createCanvas(900, 900);
  frameRate(60);
}

function draw() {
  background("black");

  if (frameCount % 6 === 0) {
    let x1 = random(width);
    let y1 = random(height);
    let x2 = x1 + random(-200, 200);
    let y2 = y1 + random(-200, 200);
    let c = color(random(255), random(255), random(255));
    diamonds.push({
      x1: x1,
      y1: y1,
      x2: x2,
      y2: y2,
      col: c,
      frame: frameCount,
    });
  }

  for (let i = diamonds.length - 1; i >= 0; i--) {
    let d = diamonds[i];
    let frame = frameCount - d.frame;

    drawRipple(d, frame);

    if (frame > 60) {
      diamonds.splice(i, 1);
    }
  }
}

function drawRipple(diamond, frame) {
  strokeWeight(2);

  let { x1, y1, x2, y2, col } = diamond;

  let mx = (x1 + x2) / 2,
    my = (y1 + y2) / 2, // middle point
    dx = x2 - x1,
    dy = y2 - y1, // distance
    nx = dy,
    ny = -dx; // vectors

  let c1x = x1,
    c1y = y1,
    c2x = mx + nx / 2,
    c2y = my + ny / 2,
    c3x = x2,
    c3y = y2,
    c4x = mx - nx / 2,
    c4y = my - ny / 2; // 4 points

  let s1x, s1y, s2x, s2y, s3x, s3y, s4x, s4y;

  let r = red(col),
    g = green(col),
    b = blue(col),
    a; // colors

  let maxLayers = 20,
    ringDuration = 30,
    zoomScale = 0.1;

  for (let i = 0; i < maxLayers; i++) {
    if (i === 0) {
      fill(r, g, b, random(60, 220));
    } else {
      noFill();
    }

    let startTime = i;
    let endTime = i + ringDuration;

    if (frame < startTime || frame > endTime) continue;

    if (frame < startTime + 10)
      a = map(frame, startTime, startTime + 10, 0, 255);
    else if (frame > endTime - 10)
      a = map(frame, endTime - 10, endTime, 255, 0);
    else a = 255;

    stroke(r, g, b, a);

    let zoom = 1 + i * zoomScale;

    (s1x = mx + (c1x - mx) * zoom),
      (s1y = my + (c1y - my) * zoom),
      (s2x = mx + (c2x - mx) * zoom),
      (s2y = my + (c2y - my) * zoom),
      (s3x = mx + (c3x - mx) * zoom),
      (s3y = my + (c3y - my) * zoom),
      (s4x = mx + (c4x - mx) * zoom),
      (s4y = my + (c4y - my) * zoom);

    quad(s1x, s1y, s2x, s2y, s3x, s3y, s4x, s4y);
  }
}

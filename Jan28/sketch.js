let fireworkY = 1000,
  fireworkSpeed = 4,
  exploded = false;
let colors = [
    [255, 69, 0],
    [255, 215, 0],
    [173, 255, 47],
    [30, 144, 255],
    [238, 130, 238],
    [255, 20, 147],
    [0, 255, 255],
    [255, 140, 0],
    [75, 0, 130],
    [255, 0, 255],
    [0, 255, 0],
    [255, 0, 0],
    [0, 0, 255],
    [255, 255, 255],
    [255, 182, 193],
    [255, 105, 180],
    [255, 255, 0],
    [0, 128, 128],
    [128, 0, 128],
    [0, 0, 128],
  ],
  color = [],
  fireworks = [];
let whistle1, whistle2, whistle3, explode;

function preload() {
  soundFormats("mp3", "wav");
  whistle1 = loadSound("whistle1.mp3");
  whistle2 = loadSound("whistle2.mp3");
  whistle3 = loadSound("whistle3.wav");
  explode = loadSound("explode1.wav");
}

function setup() {
  createCanvas(900, 900);
  frameRate(60);

  for (let i = 0; i < 1000; i++) {
    color.push(random(colors));
  }
}

function draw() {
  background(0);
  if (frameCount % 20 === 0 && fireworks.length < 1000) {
    fireworks.push(
      new Firework(random(width), height, 4, color[floor(random(1000))])
    );
    if (random() < 0.3) {
      whistle1.play();
    } else if (random() < 0.6) {
      whistle2.play();
    } else {
      whistle3.play();
    }
  }
  for (let i = fireworks.length - 1; i >= 0; i--) {
    let f = fireworks[i];
    f.update();
    f.show();
    if (f.y < -500) {
      fireworks.splice(i, 1);
    }
  }
}

function drawFirework(x, y, c, l) {
  for (let layer = 0; layer < l; layer++) {
    let numParticles = random(50, 150);
    for (let i = 0; i < numParticles; i++) {
      let angle = random(TWO_PI);
      let base = 30 * layer;
      let r1 = random(base + 2, base + 15);
      let r2 = r1 + random(15, 60);
      let x1 = x + cos(angle) * r1;
      let y1 = y + sin(angle) * r1;
      let x2 = x + cos(angle) * r2;
      let y2 = y + sin(angle) * r2;
      stroke(c);
      strokeWeight(random(1, 5));
      line(x1, y1, x2, y2);
    }
  }
}

class Firework {
  constructor(x, y, speed, c) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.exploded = false;
    this.color = c;
    this.explodeHeight = random(height / 3, (2 * height) / 3);
    this.trail = [];
  }
  update() {
    this.trail.push({ x: this.x, y: this.y });
    if (this.trail.length > 10) {
      this.trail.shift();
    }
    this.y -= this.speed;
    if (!this.exploded && this.y <= this.explodeHeight) {
      this.exploded = true;
      explode.play();
    }
  }
  show() {
    stroke(this.color);
    noFill();
    beginShape();
    for (let pos of this.trail) {
      vertex(pos.x, pos.y);
    }
    endShape();
    strokeWeight(2);
    fill(this.color);
    stroke(this.color);
    if (!this.exploded) {
      fill(this.color);
      ellipse(this.x, this.y, random(8, 12), random(8, 12));
    } else {
      drawFirework(this.x, this.y, this.color, random(1, 4));
    }
  }
}

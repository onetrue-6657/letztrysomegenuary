var balls = [];
var images = [];

function preload() {
  images[0] = loadImage("osu.png");
  images[1] = loadImage("afb.png");
  images[2] = loadImage("brutus.png");
}

function setup() {
  createCanvas(900, 900);
  // noLoop();

  for (let i = 0; i < 30; i++) {
    let b;
    let overlap = true;
    while (overlap) {
      b = new Ball();
      overlap = false;
      for (let j = 0; j < balls.length; j++) {
        let d = dist(b.pos.x, b.pos.y, balls[j].pos.x, balls[j].pos.y);
        if (d < b.radius + balls[j].radius) {
          overlap = true;
          break;
        }
      }
    }
    balls.push(b);
  }
}

function draw() {
  background("#BA0C2F");

  for (let i = 0; i < balls.length; i++) {
    balls[i].move();
    balls[i].show();
    balls[i].edges();
    balls[i].collide();
  }
}

class Ball {
  constructor() {
    this.radius = random(20, 50);
    this.pos = createVector(
      random(this.radius, width - this.radius),
      random(this.radius, height - this.radius)
    );
    this.vel = p5.Vector.random2D().mult(2);

    var ballColor = ["#a7b1b7", "#ffffff", "#4a0513", "#bfc6cb", "	#f6f7f8"];
    this.color = ballColor[int(random(5))];

    this.img = random(images);
    this.isColliding = false;
    this.collideTime = 0;
  }

  collide() {
    for (let i = 0; i < balls.length; i++) {
      if (this === balls[i]) continue;

      let d = dist(this.pos.x, this.pos.y, balls[i].pos.x, balls[i].pos.y);

      if (d < this.radius + balls[i].radius) {
        let temp = this.vel;
        this.vel = balls[i].vel;
        balls[i].vel = temp;
        balls[i].isColliding = true;
        balls[i].collideTime = millis();
        this.isColliding = true;
        this.collideTime = millis();
      }
    }
  }

  edges() {
    if (this.pos.x < this.radius || this.pos.x > width - this.radius) {
      this.vel.x *= -1;
    }
    if (this.pos.y < this.radius || this.pos.y > height - this.radius) {
      this.vel.y *= -1;
    }
  }

  move() {
    this.pos.add(this.vel);

    if (this.isColliding && millis() - this.collideTime > 500) {
      this.isColliding = false;
    }
  }

  show() {
    noStroke();
    if (this.isColliding) {
      imageMode(CENTER);
      image(this.img, this.pos.x, this.pos.y, this.radius * 2, this.radius * 2);
    } else {
      fill(this.color);
      ellipse(this.pos.x, this.pos.y, this.radius * 2);
    }
  }
}

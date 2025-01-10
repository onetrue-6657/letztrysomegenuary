function setup() {
  createCanvas(800, 800);
  // noLoop();
}

function draw() {
  // background('rgb(120, 190, 33)');
  // background('rgb(239, 51, 64)');
  // background('rgb(255, 130, 0)');
  // background('rgb(0, 114, 206)');
  // background('rgb(233, 60, 172)');
  // background('rgb(65, 182, 230)');
  // background('rgb(167, 123, 202)');
  // background('rgb(160, 146, 0)');
  // background('rgb(241, 198, 166)');
  background('#00008B');

  for (let i = 0; i < 800; i += 200) {
    for (let j = 0; j < 800; j += 200) {
      push();
      translate(i, j);

      noStroke();
      // fill('#8fe9f8');
      // quad(30, 75, 58, 20, 86, 25, 65, 40);

      fill('#ea063a');
      circle(130, 135, 40);

      fill('#00008B');
      circle(130, 135, 30);

      fill('white');
      circle(145, 120, 30);

      fill('#00008B');
      circle(145, 120, 20);

      noFill();
      stroke('white');
      strokeWeight(random(3, 5));
      bezier(0, 0, random(200), random(200), random(200), random(200), 200, 200);

      stroke('#8fe9f8');
      strokeWeight(random(3, 5));
      bezier(100, 0, random(200), random(200), random(200), random(200), 100, 200);

      stroke('#4682b4');
      strokeWeight(random(3, 5));
      bezier(0, 150, random(200), random(200), random(200), random(200), 200, 150);

      stroke('#728fce');
      strokeWeight(random(3, 5));
      bezier(0, 110, random(200), random(200), random(200), random(200), 120, 200);
      bezier(120, 0, random(200), random(200), random(200), random(200), 200, 110);

      stroke('#151b54');
      strokeWeight(random(3, 5));
      bezier(0, 200, random(200), random(200), random(200), random(200), 100, 0);
      bezier(100, 200, random(200), random(200), random(200), random(200), 200, 0);

      stroke('#ea063a');
      strokeWeight(random(3, 5));
      bezier(70, 200, random(200), random(200), random(200), random(200), 70, 0);

      pop();
    }
  }
}

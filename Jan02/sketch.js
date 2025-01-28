let layers = [],
  ground,
  leftSide,
  rightSide;

function setup() {
  createCanvas(600, 900);

  world.gravity.y = 10;

  noStroke();

  ground = new Sprite(width / 2, height - 10, width, 20, "static");
  // ground.color = color(100, 200, 100);
  ground.color = color(255);

  leftSide = new Sprite(0, 0, 20, height * 2, "static");
  leftSide.color = color(255);
  leftSide.friction = 0;

  rightSide = new Sprite(width, 0, 20, height * 2, "static");
  rightSide.color = color(255);
  rightSide.friction = 0;
}

function mousePressed() {
  /**
   * Type 1: Random width
   */
  // let layerWidth = random(50, 200);
  // let layerHeight = random(10, 50);
  // let layerX = random(layerWidth / 2, width - layerWidth / 2);

  // let layer = new Sprite(
  //   layerX,
  //   -layerHeight,
  //   layerWidth,
  //   layerHeight,
  //   "dynamic"
  // );
  // layer.color = color(random(255), random(255), random(255));

  /**
   * Type 2: Fixed width
   */
  let layerWidth = width - 22;
  let layerHeight = random(10, 50);
  let layerX = 30;

  let layer = new Sprite(
    layerX,
    -layerHeight,
    layerWidth,
    layerHeight,
    "dynamic"
  );
  layer.color = color(random(255), random(255), random(255));

  layer.friction = 0;
  layer.restitution = 0.2;

  layers.push(layer);
}

function draw() {
  background(0);

  ground.draw();
  leftSide.draw();
  rightSide.draw();

  for (let layer of layers) {
    layer.draw();
  }
}

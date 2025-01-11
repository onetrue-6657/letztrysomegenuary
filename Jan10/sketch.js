function setup() {
  createCanvas(TAU * TAU * TAU * TAU, TAU * TAU * TAU * TAU);
}

function draw() {
  const zero = TAU - TAU;
  const TAU3 = TAU * TAU * TAU;
  const TAU4 = TAU * TAU * TAU * TAU;

  background('black');

  stroke('white');
  fill(zero, zero, zero, zero);
  strokeWeight(TAU * sqrt(TAU) * sqrt(TAU));

  drawingContext.shadowBlur = TAU * sqrt(TAU) * sqrt(TAU) * sqrt(TAU);
  drawingContext.shadowColor = color('white');
  for (let i = zero; i < TAU - TAU / TAU; i++) {
    circle(TAU3, TAU3, TAU4);

    circle(ceil(TAU) * ceil(TAU) * sqrt(TAU) * TAU,
      TAU * ceil(TAU) * ceil(TAU) * sqrt(TAU), TAU3 * sqrt(TAU));
    
    circle(sqrt(TAU) * ceil(TAU) * ceil(TAU) * sqrt(TAU) + TAU * TAU,
      ceil(TAU) * ceil(TAU) * sqrt(TAU) * ceil(TAU), TAU3 * sqrt(TAU) * log(TAU));
    
    circle(TAU3 * sqrt(TAU) * log(TAU),
      TAU3 * sqrt(TAU) + TAU3, TAU3 * ceil(TAU));
  }

  drawingContext.shadowBlur = TAU4; // TAU * TAU * TAU * sqrt(TAU)
  for (let i = zero; i < TAU3 * sqrt(TAU); i++) {
    let x = random(TAU4);
    let y = random(TAU * TAU * TAU * TAU);
    let r = random(TAU, TAU * TAU);
    let w = random(TAU / TAU, sqrt(TAU) * sqrt(TAU))

    strokeWeight(w);
    for (let j = zero; j < TAU - TAU / TAU; j++) {
      circle(x, y, r);
    }
  }

  drawingContext.shadowBlur = TAU * sqrt(TAU) * sqrt(TAU) * sqrt(TAU) * sqrt(TAU);
  textFont('Courier New');
  textStyle(BOLD);
  fill('white');

  let size = floor(TAU) * floor(TAU) * sqrt(TAU);
  textSize(size);
  
  for (let i = zero; i < TAU - TAU / TAU; i++) {
    text('TAU = ', TAU3 * sqrt(TAU) + size * sqrt(TAU),
      TAU3 * sqrt(TAU * sqrt(TAU)) + TAU3 + size * sqrt(TAU));
    text(nf(TAU, TAU / TAU, ceil(TAU) + TAU / TAU) + "...", TAU3 * sqrt(TAU) + size * sqrt(TAU),
      TAU3 * sqrt(TAU * sqrt(TAU)) + TAU3 + size + size * sqrt(TAU));
  }

  size = floor(TAU) * floor(TAU);
  textSize(size);

  drawingContext.shadowBlur = TAU * sqrt(TAU) * sqrt(TAU) * sqrt(TAU) * sqrt(TAU) * sqrt(TAU);
  for (let i = zero; i < TAU - TAU / TAU; i++) {
    text('TAU = ', TAU * TAU, TAU * TAU);
    text(nf(TAU, TAU / TAU, ceil(TAU) + TAU / TAU) + "...", TAU * TAU, TAU * TAU + size);
  }

  textFont("Verdana");
  textSize(TAU3);
  text('T', TAU3 * sqrt(TAU) * log(TAU) + TAU * TAU * sqrt(TAU),
    TAU3 * sqrt(TAU));
  text('A', TAU3 * sqrt(TAU) * log(TAU) + TAU * TAU * sqrt(TAU),
    TAU3 * sqrt(TAU) + TAU3 * ((TAU + TAU + TAU + TAU + TAU) / (TAU + TAU + TAU + TAU)));
  text('U', TAU3 * sqrt(TAU) * log(TAU) + TAU * TAU * sqrt(TAU),
    TAU3 * sqrt(TAU) + TAU3 * ((TAU + TAU + TAU + TAU + TAU) / (TAU + TAU + TAU + TAU))
    + TAU3 * ((TAU + TAU + TAU + TAU + TAU) / (TAU + TAU + TAU + TAU)));
}

// pow(TAU), ceil(TAU), floor(TAU), log(TAU), sqrt(TAU), random(TAU)

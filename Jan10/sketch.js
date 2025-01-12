function setup() {
  createCanvas(TAU * TAU * TAU * TAU, TAU * TAU * TAU * TAU);
}

function draw() {
  const zero = TAU - TAU;
  const TAUT = TAU * TAU * TAU;
  const TAUF = TAU * TAU * TAU * TAU;

  background('black');

  stroke('white');
  fill(zero, zero, zero, zero);
  strokeWeight(TAU * sqrt(TAU) * sqrt(TAU));

  drawingContext.shadowBlur = TAU * sqrt(TAU) * sqrt(TAU) * sqrt(TAU);
  drawingContext.shadowColor = color('white');
  for (let i = zero; i < TAU - TAU / TAU; i++) {
    circle(TAUT, TAUT, TAUF);

    circle(ceil(TAU) * ceil(TAU) * sqrt(TAU) * TAU,
      TAU * ceil(TAU) * ceil(TAU) * sqrt(TAU), TAUT * sqrt(TAU));
    
    circle(sqrt(TAU) * ceil(TAU) * ceil(TAU) * sqrt(TAU) + TAU * TAU,
      ceil(TAU) * ceil(TAU) * sqrt(TAU) * ceil(TAU), TAUT * sqrt(TAU) * log(TAU));
    
    circle(TAUT * sqrt(TAU) * log(TAU),
      TAUT * sqrt(TAU) + TAUT, TAUT * ceil(TAU));
  }

  drawingContext.shadowBlur = TAUF; // TAU * TAU * TAU * sqrt(TAU)
  for (let i = zero; i < TAUT * sqrt(TAU); i++) {
    let x = random(TAUF);
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
    text('TAU = ', TAUT * sqrt(TAU) + size * sqrt(TAU),
      TAUT * sqrt(TAU * sqrt(TAU)) + TAUT + size * sqrt(TAU));
    text(nf(TAU, TAU / TAU, ceil(TAU) + TAU / TAU) + "...", TAUT * sqrt(TAU) + size * sqrt(TAU),
      TAUT * sqrt(TAU * sqrt(TAU)) + TAUT + size + size * sqrt(TAU));
  }

  size = floor(TAU) * floor(TAU);
  textSize(size);

  drawingContext.shadowBlur = TAU * sqrt(TAU) * sqrt(TAU) * sqrt(TAU) * sqrt(TAU) * sqrt(TAU);
  for (let i = zero; i < TAU - TAU / TAU; i++) {
    text('TAU = ', TAU * TAU, TAU * TAU);
    text(nf(TAU, TAU / TAU, ceil(TAU) + TAU / TAU) + "...", TAU * TAU, TAU * TAU + size);
  }

  textFont("Verdana");
  textSize(TAUT);
  text('T', TAUT * sqrt(TAU) * log(TAU) + TAU * TAU * sqrt(TAU),
    TAUT * sqrt(TAU));
  text('A', TAUT * sqrt(TAU) * log(TAU) + TAU * TAU * sqrt(TAU),
    TAUT * sqrt(TAU) + TAUT * ((TAU + TAU + TAU + TAU + TAU) / (TAU + TAU + TAU + TAU)));
  text('U', TAUT * sqrt(TAU) * log(TAU) + TAU * TAU * sqrt(TAU),
    TAUT * sqrt(TAU) + TAUT * ((TAU + TAU + TAU + TAU + TAU) / (TAU + TAU + TAU + TAU))
    + TAUT * ((TAU + TAU + TAU + TAU + TAU) / (TAU + TAU + TAU + TAU)));
}

// pow(TAU), ceil(TAU), floor(TAU), log(TAU), sqrt(TAU), random(TAU)

let nvda = [];
let opens = [
  136.0, 140.01, 148.59, 153.03, 142.58, 137.45, 129.99, 136.05, 133.65, 138.64,
  136.69, 139.16, 144.66, 145.05, 148.37, 124.79,
];
let high = [
  138.88, 144.9, 152.16, 153.13, 143.95, 139.92, 133.49, 136.38, 136.45, 138.75,
  138.5, 141.83, 147.79, 147.23, 148.97, 128.4,
];
let low = [
  134.63, 139.73, 147.82, 140.01, 137.56, 134.22, 129.51, 130.05, 131.29,
  133.49, 135.46, 137.09, 143.67, 143.72, 141.88, 116.7,
];
let closes = [
  138.31, 144.47, 149.43, 140.14, 140.11, 135.91, 133.23, 131.76, 136.24,
  133.57, 137.71, 140.83, 147.07, 147.22, 142.62, 118.42,
];
let volume = [
  198, 229, 265, 352, 227, 208, 205, 196, 185, 209, 201, 198, 238, 156, 234,
  794,
];
let dates = [2, 3, 6, 7, 8, 10, 13, 14, 15, 16, 17, 21, 22, 23, 24, 27];

function setup() {
  createCanvas(1800, 900);

  for (let i = 0; i < opens.length; i++) {
    nvda.push(new nvidia(opens[i], high[i], low[i], closes[i], volume[i]));
  }
}

function draw() {
  background(0);
  drawGraph();

  let cnt = 0;
  let dateCount = dates.length;
  let avgLen = 1700 / dateCount;

  for (let n in nvda) {
    drawCandle(nvda[n], cnt * avgLen + avgLen / 2);
    drawVolume(nvda[n], cnt * avgLen + avgLen / 2);
    cnt++;
  }
}

function drawGraph() {
  stroke(255);
  strokeWeight(3);

  line(0, 800, 1700, 800);
  line(1700, 800, 1700, 0);

  let dateCount = dates.length;
  let avgLen = 1700 / dateCount;
  let cnt = 0;

  for (let i in dates) {
    let xDate = cnt * avgLen + avgLen / 2;
    stroke(255);
    strokeWeight(1);
    line(xDate, 800, xDate, 820);

    noFill();
    strokeWeight(1);
    textSize(20);
    text(dates[i], xDate - 10, 850);

    stroke(220);
    strokeWeight(0.8);
    line(xDate, 0, xDate, 800);

    cnt++;
  }

  for (let i = 100; i <= 800; i += 100) {
    stroke(255);
    strokeWeight(1);
    line(1700, i, 1720, i);

    noFill();
    strokeWeight(1);
    textSize(20);
    text(155 - i / 20, 1740, i + 5);

    stroke(220);
    strokeWeight(0.8);
    line(0, i, 1700, i);
  }
}

class nvidia {
  constructor(open, high, low, close, volume) {
    this.open = open;
    this.high = high;
    this.close = close;
    this.low = low;
    this.volume = volume;
  }
}

function drawCandle(nvda, x3) {
  let y1 = 800 - (nvda.high - 115) * 20;
  let y2 = 800 - (nvda.low - 115) * 20;
  let y3 = 800 - (nvda.open - 115) * 20;
  let y4 = 800 - (nvda.close - 115) * 20;

  // close < open: red

  let x1 = x3 - 35;
  let x2 = x3 + 35;

  let c;
  if (nvda.open > nvda.close) {
    c = color(214, 10, 34);
  } else {
    c = color(3, 123, 75);
  }
  strokeWeight(2);
  stroke(c);
  line(x3, y1, x3, y2);

  fill(c);
  noStroke();
  rect(x1, min(y3, y4), x2 - x1, abs(y4 - y3));
}

function drawVolume(nvda, x3) {
  let x1 = x3 - 45;
  let x2 = x3 + 45;

  let c;
  if (nvda.open > nvda.close) {
    c = color(214, 10, 34, 120);
  } else {
    c = color(3, 123, 75, 120);
  }

  fill(c);
  noStroke();
  rect(x1, 800 - nvda.volume / 4, x2 - x1, nvda.volume / 4);
}

const cols = 40,
  rows = 40;
const colors = [
  "#000000",
  "#FFFFFF",
  "#FF0000",
  "#00FF00",
  "#0000FF",
  "#FFFF00",
  "#00FFFF",
  "#FF00FF",
  "#C0C0C0",
  "#808080",
  "#BA0C2F",
  "#808000",
  "#008000",
  "#800080",
  "#008080",
  "#000080",
];
let currentColor = "#000000";
let eraseMode = false,
  clearConfirm = false;

let cells = [],
  colorCells = [];

let eraseIcon, clearIcon;

function preload() {
  eraseIcon = loadImage("erase.png");
  clearIcon = loadImage("clear.png");
}

function setup() {
  createCanvas(900, 900);

  drawGrid();

  noLoop();
}

function draw() {
  background(0);
  noStroke();

  for (let i = 0; i < 30; i++) {
    for (let j = 0; j < 30; j++) {
      let index = i + j * 30;
      let c = cells[index].color;
      fill(c);
      rect(150 + i * 20, 100 + j * 20, 20, 20);
    }
  }

  stroke(0);
  strokeWeight(3);
  for (let i = 1; i < 30; i++) {
    let x = 150 + i * 20;
    let y = 100 + i * 20;
    line(x, 100, x, 700);
    line(150, y, 750, y);
  }

  stroke(255);
  strokeWeight(3);
  noFill();
  rect(147, 97, 606, 606);

  drawPalette();
  showCurrentColor();
  eraseButton();
  clearButton();
}

function clearButton() {
  image(clearIcon, 60, 40, 60, 60);
}

function eraseButton() {
  image(eraseIcon, 800, 48, 50, 50);
}

function drawGrid() {
  let w = 20,
    h = 20;
  for (let i = 0; i < 30; i++) {
    for (let j = 0; j < 30; j++) {
      let currentCell = new cell(
        150 + i * w,
        100 + j * h,
        150 + i * w + w,
        100 + j * h + h,
        "#222222"
      );
      cells.push(currentCell);
    }
  }
}

function drawPalette() {
  stroke(255);
  strokeWeight(2.5);
  let w = 40,
    h = 40;
  for (let i = 0; i < colors.length; i++) {
    fill(colors[i]);
    let currentCellColors = new cell(
      130 + i * w,
      760,
      130 + i * w + w,
      760 + h,
      colors[i]
    );
    colorCells.push(currentCellColors);
    rect(130 + i * w, 760, w, h);
  }
}

function showCurrentColor() {
  textSize(20);
  noStroke();
  textStyle(BOLD);
  fill(255);
  textFont("Verdana");
  text("Current Color: ", 300, 855);
  stroke(255);
  strokeWeight(3);
  fill(currentColor);
  rect(500, 825, 50, 50);
}

function mousePressed() {
  let currentX = mouseX;
  let currentY = mouseY;
  for (let i = 0; i < cells.length; i++) {
    if (
      currentX > cells[i].x1 &&
      currentX < cells[i].x2 &&
      currentY > cells[i].y1 &&
      currentY < cells[i].y2
    ) {
      if (!eraseMode) {
        cells[i].color = currentColor;
        cells[i].render();
      } else {
        cells[i].erase();
      }
    }
  }
  for (let i = 0; i < colorCells.length; i++) {
    if (
      currentX > colorCells[i].x1 &&
      currentX < colorCells[i].x2 &&
      currentY > colorCells[i].y1 &&
      currentY < colorCells[i].y2
    ) {
      currentColor = colorCells[i].color;
      showCurrentColor();
    }
  }
  if (currentX > 800 && currentX < 850 && currentY > 48 && currentY < 98) {
    eraseMode = !eraseMode;
    if (eraseMode) {
      stroke(255);
      strokeWeight(3);
      noFill();
      rect(795, 44, 60, 60);
    } else {
      stroke(0);
      strokeWeight(4);
      noFill();
      rect(795, 44, 60, 60);
    }
  }
  if (currentX > 60 && currentX < 120 && currentY > 40 && currentY < 100) {
    if (clearConfirm) {
      for (let i = 0; i < cells.length; i++) {
        cells[i].erase();
      }
      stroke(0);
      strokeWeight(4);
      noFill();
      rect(60, 40, 60, 60);
      stroke(255);
      strokeWeight(3);
      noFill();
      rect(147, 97, 606, 606);

      clearConfirm = false;
    } else {
      stroke(255);
      strokeWeight(3);
      noFill();
      rect(60, 40, 60, 60);
      clearConfirm = true;
    }
  }
}

function mouseDragged() {
  let currentX = mouseX;
  let currentY = mouseY;
  for (let i = 0; i < cells.length; i++) {
    if (
      currentX > cells[i].x1 &&
      currentX < cells[i].x2 &&
      currentY > cells[i].y1 &&
      currentY < cells[i].y2
    ) {
      if (!eraseMode) {
        cells[i].color = currentColor;
        cells[i].render();
      } else {
        cells[i].erase();
      }
    }
  }
}

class cell {
  constructor(x1, y1, x2, y2, color) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.color = color;
  }
  render() {
    stroke(this.color);
    strokeWeight(1.25);
    fill(this.color);
    rect(this.x1, this.y1, this.x2 - this.x1, this.y2 - this.y1);
  }
  erase() {
    stroke(0);
    strokeWeight(3);
    fill("#222222");
    rect(this.x1, this.y1, this.x2 - this.x1, this.y2 - this.y1);
  }
}

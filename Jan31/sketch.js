let img;

function preload() {
  img = loadImage("jan02-2.jpg");
}

function setup() {
  pixelDensity(1);

  createCanvas(img.width, img.height);

  let sortedH = pixelSortHorizontal(img);
  let sortedV = pixelSortVertical(img);

  // image(sortedH, 0, 0);
  image(sortedV, 0, 0);

  noLoop();
}

function pixelSortHorizontal(sourceImage) {
  let newImg = createImage(sourceImage.width, sourceImage.height);
  newImg.copy(
    sourceImage,
    0,
    0,
    sourceImage.width,
    sourceImage.height,
    0,
    0,
    sourceImage.width,
    sourceImage.height
  );

  newImg.loadPixels();
  let w = newImg.width;
  let h = newImg.height;

  for (let y = 0; y < h; y++) {
    let rowPixels = [];
    for (let x = 0; x < w; x++) {
      let index = 4 * (y * w + x);
      let r = newImg.pixels[index + 0];
      let g = newImg.pixels[index + 1];
      let b = newImg.pixels[index + 2];
      let a = newImg.pixels[index + 3];
      rowPixels.push([r, g, b, a]);
    }

    rowPixels.sort((a, b) => {
      let c1 = color(a[0], a[1], a[2]);
      let c2 = color(b[0], b[1], b[2]);
      let h1 = hue(c1);
      let h2 = hue(c2);
      return h1 - h2;
    });

    for (let x = 0; x < w; x++) {
      let index = 4 * (y * w + x);
      newImg.pixels[index + 0] = rowPixels[x][0];
      newImg.pixels[index + 1] = rowPixels[x][1];
      newImg.pixels[index + 2] = rowPixels[x][2];
      newImg.pixels[index + 3] = rowPixels[x][3];
    }
  }
  newImg.updatePixels();

  return newImg;
}

function pixelSortVertical(sourceImage) {
  let newImg = createImage(sourceImage.width, sourceImage.height);
  newImg.copy(
    sourceImage,
    0,
    0,
    sourceImage.width,
    sourceImage.height,
    0,
    0,
    sourceImage.width,
    sourceImage.height
  );

  newImg.loadPixels();
  let w = newImg.width;
  let h = newImg.height;

  for (let x = 0; x < w; x++) {
    let colPixels = [];
    for (let y = 0; y < h; y++) {
      let index = 4 * (y * w + x);
      let r = newImg.pixels[index + 0];
      let g = newImg.pixels[index + 1];
      let b = newImg.pixels[index + 2];
      let a = newImg.pixels[index + 3];
      colPixels.push([r, g, b, a]);
    }

    colPixels.sort((a, b) => {
      let c1 = color(a[0], a[1], a[2]);
      let c2 = color(b[0], b[1], b[2]);
      let h1 = hue(c1);
      let h2 = hue(c2);
      return h1 - h2;
    });

    for (let y = 0; y < h; y++) {
      let index = 4 * (y * w + x);
      newImg.pixels[index + 0] = colPixels[y][0];
      newImg.pixels[index + 1] = colPixels[y][1];
      newImg.pixels[index + 2] = colPixels[y][2];
      newImg.pixels[index + 3] = colPixels[y][3];
    }
  }
  newImg.updatePixels();

  return newImg;
}

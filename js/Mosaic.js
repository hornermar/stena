class Mosaic {
  constructor(
    param1Int,
    param2Int,
    param3Int,
    param4Bool,
    param5Bool,
    param6String
  ) {
    this.blockSize = param3Int;
    this.countWidth = 23;
    this.countHeight = 33;

    this.mosaicWidth = this.blockSize * this.countWidth;
    this.mosaicHeight = this.blockSize * this.countHeight;

    this.colors = ["black", "white"];

    this.isFramed = param4Bool;
    this.frameWidth = 8;

    this.x = param1Int;
    this.y = param2Int;

    this.isCalculator = param5Bool;
    this.types = {};

    this.mode = param6String;

    this.current = [];

    this.original = [
      [
        [2, 1, 0],
        [2, 0, 0],
        [2, 1, 0],
        [1, 3, 1],
        [1, 3, 0],
        [3, 1, 1],
        [2, 2, 1],
        [1, 0, 0],
        [1, 2, 1],
        [1, 2, 1],
        [1, 0, 0],
        [2, 1, 1],
        [3, 0, 1],
        [2, 2, 1],
        [1, 2, 1],
        [1, 2, 1],
        [1, 2, 1],
        [1, 1, 1],
        [2, 0, 1],
        [2, 1, 1],
        [2, 2, 1],
        [2, 2, 1],
        [1, 1, 1],
      ],
    ];
  }

  display() {
    this.isFramed && this.drawFrame();
    this.isCalculator && background(223, 230, 232);
    this.drawMosaic();
    this.isCalculator && this.drawCalculator(20);

    console.log("selected", this.selected);
  }

  drawMosaic() {
    this.types = {
      twoSame: 0,
      one: 0,
      twoMirrored: 0,
      blackSemiCircle: 0,
      whiteSemiCircle: 0,
    };

    this.mode === "random" && (this.selected = []);

    for (let iy = 0; iy < this.countHeight; iy++) {
      for (let ix = 0; ix < this.countWidth; ix++) {
        strokeWeight(1);

        push();
        translate(
          ix * this.blockSize +
            (width / 2 - this.mosaicWidth / 2 + this.blockSize / 2),
          iy * this.blockSize +
            (height / 2 - this.mosaicHeight / 2 + this.blockSize / 2)
        );

        if (this.mode === "original") {
          this.drawPieceFromGrid(this.original[iy][ix]);
        } else if (this.mode === "random") {
          this.drawRandomPiece();
        } else if (this.mode === "selected") {
          this.drawPieceFromGrid(this.selected[iy][ix]);
        }
        pop();
      }
    }
  }

  drawOne(semiCircle, size) {
    rect(0, 0, size, size);
    image(semiCircle, -size / 2, -size / 2);
  }

  drawTwoSame(semiCircle, size) {
    rect(0, 0, size, size);
    image(semiCircle, -size / 2, -size / 2);
    image(semiCircle, 0, -size / 2);
  }

  drawTwoMirrored(semiCircle, size) {
    rect(0, 0, size, size);
    image(semiCircle, -size / 2, -size / 2);
    rotate(radians(180));
    image(semiCircle, -size / 2, -size / 2);
  }

  drawRandomPiece() {
    const rotation = Math.round(random(0, 3));
    rotate(radians(90 * rotation));

    const queueNum = this.shuffleArray([0, 1]);
    fill(this.colors[queueNum[0]]);

    const randomNumber = random();
    const semiCircle = this.selectSemiCircle(
      this.colors[queueNum[1]],
      this.blockSize
    );

    if (randomNumber < 1 / 3) {
      // first option
      this.drawOne(semiCircle, this.blockSize);
      this.types.one++;
      this.types[`${this.colors[queueNum[1]]}SemiCircle`]++;

      this.selected.push([1, rotation, queueNum[1]]);
    } else if (randomNumber < (1 / 3) * 2) {
      // second option
      this.drawTwoSame(semiCircle, this.blockSize);
      this.types.twoSame++;
      this.types[`${this.colors[queueNum[1]]}SemiCircle`] += 2;

      this.selected.push([2, rotation, queueNum[1]]);
    } else {
      // third option
      this.drawTwoMirrored(semiCircle, this.blockSize);
      this.types.twoMirrored++;
      this.types[`${this.colors[queueNum[1]]}SemiCircle`] += 2;

      this.selected.push([2, rotation, queueNum[1]]);
    }
  }

  drawPieceFromGrid(piece) {
    rotate(radians(90 * piece[1]));
    fill(this.colors[piece[2]]);
    const backgroundColor = piece[2] === 0 ? 1 : 0;

    const semiCircle = this.selectSemiCircle(
      this.colors[backgroundColor],
      this.blockSize
    );

    if (piece[0] === 1) {
      this.drawOne(semiCircle, this.blockSize);
    } else if (piece[0] === 2) {
      this.drawTwoSame(semiCircle, this.blockSize);
    } else if (piece[0] === 3) {
      this.drawTwoMirrored(semiCircle, this.blockSize);
    }
  }

  shuffleArray(array) {
    var j, temp;
    for (var i = array.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  selectSemiCircle(color, blockSize) {
    return IMG[`${color}${blockSize}`];
  }

  drawFrame() {
    push();
    fill(192, 192, 192);
    rect(
      width / 2 - this.mosaicWidth / 2 + this.mosaicWidth / 2,
      height / 2 - this.mosaicHeight / 2 + this.mosaicHeight / 2,
      this.mosaicWidth + this.frameWidth,
      this.mosaicHeight + this.frameWidth
    );
    pop();
  }

  drawCalculator(size) {
    const x = 575;
    const y = 90;

    const whiteSemiCircle = this.selectSemiCircle(this.colors[1], size);

    // calculator for types
    fill(this.colors[0]);
    push();
    translate(x, y);
    this.drawTwoSame(whiteSemiCircle, size);
    pop();

    push();
    translate(x, y + 1.5 * size);
    this.drawOne(whiteSemiCircle, size);
    pop();

    push();
    translate(x, y + 3 * size);
    this.drawTwoMirrored(whiteSemiCircle, size);
    pop();

    fill(0, 0, 255);
    text(this.types.one, x + size, y + size / 2 + 1.5 * size);
    text(this.types.twoSame, x + size, y + size / 2);
    text(this.types.twoMirrored, x + size, y + size / 2 + 3 * size);

    // calculator for colors
    const blackSemiCircle = this.selectSemiCircle(this.colors[0], size);
    push();
    translate(x, y + 8 * size);
    image(blackSemiCircle, -size / 2, -size / 2);
    image(whiteSemiCircle, -size / 2, size);
    pop();
    text(this.types.blackSemiCircle, x + size, y + size / 2 + 8 * size);
    text(this.types.whiteSemiCircle, x + size, y + size / 2 + 9.5 * size);
  }
}

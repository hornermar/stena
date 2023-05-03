class Mosaic {
  constructor(param1Int, param2Int, param3Int, param4Bool, param5Bool) {
    this.blockSize = param3Int;
    this.countWidth = 23;
    this.countHeight = 33;

    this.mosaicWidth = this.blockSize * this.countWidth;
    this.mosaicHeight = this.blockSize * this.countHeight;

    this.colors = ["black", "white"];

    this.isFrame = param4Bool;
    this.frameWidth = 8;

    this.x = param1Int;
    this.y = param2Int;

    this.isCalculator = param5Bool;
    this.types = {};
  }

  display() {
    this.isFrame && this.drawFrame();
    this.isCalculator && background(color(223, 230, 232));
    this.drawMosaic();
    this.isCalculator && this.drawCalculator(20);
  }

  drawCalculator(size) {
    const x = 600;
    const y = 30;
    const whiteSemiCircle = this.selectSemiCircle(this.colors[1], size);

    // calculate types
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

    // calculate colors
    const blackSemiCircle = this.selectSemiCircle(this.colors[0], size);
    push();
    translate(x, y + 8 * size);
    image(blackSemiCircle, -size / 2, -size / 2);
    image(whiteSemiCircle, -size / 2, size);
    pop();
    text(this.types.blackSemiCircle, x + size, y + size / 2 + 8 * size);
    text(this.types.whiteSemiCircle, x + size, y + size / 2 + 9.5 * size);
  }

  drawTwoSame(semiCircle, size) {
    rect(0, 0, size, size);
    image(semiCircle, -size / 2, -size / 2);
    image(semiCircle, 0, -size / 2);
  }

  drawOne(semiCircle, size) {
    rect(0, 0, size, size);
    image(semiCircle, -size / 2, -size / 2);
  }

  drawTwoMirrored(semiCircle, size) {
    rect(0, 0, size, size);
    image(semiCircle, -size / 2, -size / 2);
    rotate(radians(180));
    image(semiCircle, -size / 2, -size / 2);
  }

  drawFrame() {
    push();
    fill(192, 192, 192);
    rect(
      400,
      194,
      this.mosaicWidth + this.frameWidth,
      this.mosaicHeight + this.frameWidth
    );
    pop();
  }

  drawMosaic() {
    this.types = {
      twoSame: 0,
      one: 0,
      twoMirrored: 0,
      blackSemiCircle: 0,
      whiteSemiCircle: 0,
    };
    for (
      let iy = this.y;
      iy < this.y + this.mosaicHeight;
      iy += this.blockSize
    ) {
      for (
        let ix = width / 2 - this.mosaicWidth / 2 + this.blockSize / 2;
        ix < width / 2 + this.mosaicWidth / 2 + this.blockSize / 2;
        ix += this.blockSize
      ) {
        strokeWeight(1);

        push();
        translate(ix, iy);
        rotate(radians(90 * Math.round(random(1, 5))));
        this.drawRandomPiece();
        pop();
      }
    }
  }

  drawRandomPiece() {
    const queueNum = this.shuffleArray([0, 1]);
    fill(this.colors[queueNum[0]]);
    const randomNumber = random();
    const semiCircle = this.selectSemiCircle(
      this.colors[queueNum[1]],
      this.blockSize
    );

    if (randomNumber < 1 / 3) {
      // first option
      this.drawTwoSame(semiCircle, this.blockSize);
      this.types.twoSame++;
      this.types[`${this.colors[queueNum[1]]}SemiCircle`] += 2;
    } else if (randomNumber < (1 / 3) * 2) {
      // second option
      this.drawOne(semiCircle, this.blockSize);
      this.types.one++;
      this.types[`${this.colors[queueNum[1]]}SemiCircle`]++;
    } else {
      // third option
      this.drawTwoMirrored(semiCircle, this.blockSize);
      this.types.twoMirrored++;
      this.types[`${this.colors[queueNum[1]]}SemiCircle`] += 2;
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
}

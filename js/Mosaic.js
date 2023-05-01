class Mosaic {
  constructor(param1Int, param2Int, param3Int, param4Bool, param5Bool) {
    this.blockSize = param3Int;
    this.countWidth = 23;
    this.countHeight = 33;

    this.mosaicWidth = this.blockSize * this.countWidth;
    this.mosaicHeight = this.blockSize * this.countHeight;
    this.queueNum = [0, 1];
    this.clrs = ["#000000", "#FFFFFF"];
    this.numbers = ["black", "white"];
    this.colors = [];

    this.isFrame = param4Bool;
    this.frameWidth = 8;

    this.x = param1Int;
    this.y = param2Int;

    this.isCalculator = param5Bool;
    this.types = { twoSame: 0, one: 0, twoMirrored: 0 };
  }

  display() {
    this.isFrame && this.drawFrame();

    this.isCalculator && background(color(223, 230, 232));

    this.drawRandomMosaic();
    this.isCalculator && this.drawCalculator(20);
  }

  drawCalculator(size) {
    const x = 100;
    const y = 30;
    const semiCircle = this.selectSemiCircle(this.clrs[1], size);

    push();
    fill(this.clrs[0]);
    this.drawTwoSame(semiCircle, x, y, size);
    this.drawOne(semiCircle, x, y + 2 * size, size);
    this.drawTwoMirrored(semiCircle, x, y + 4 * size, size);

    fill(0, 0, 255);
    text(this.types.one, x + size, y + size / 2 + 2 * size);
    text(this.types.twoSame, x + size, y + size / 2);
    text(this.types.twoMirrored, x + size, y + size / 2 + 4 * size);
    pop();
  }

  drawTwoSame(semiCircle, x, y, size) {
    push();
    rect(x, y, size, size);
    image(semiCircle, x - size / 2, y - size / 2);
    image(semiCircle, x, y - size / 2);
    pop();
  }

  drawOne(semiCircle, x, y, size) {
    rect(x, y, size, size);
    image(semiCircle, x - size / 2, y - size / 2);
  }

  drawTwoMirrored(semiCircle, x, y, size) {
    push();
    rect(x, y, size, size);
    image(semiCircle, x - size / 2, y - size / 2);
    //  rotate(radians(180));
    // image(semiCircle, x - size / 2, y - size / 2 + size);
    pop();
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

  drawRandomMosaic() {
    this.types = { twoSame: 0, one: 0, twoMirrored: 0 };
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
        this.queueNum = this.shuffleArray([0, 1]);

        strokeWeight(1);
        fill(this.clrs[this.queueNum[0]]);
        rect(ix, iy, this.blockSize, this.blockSize);

        push();

        translate(ix, iy);
        this.semiDual(0, 0, this.clrs);
        pop();
      }
    }
    console.log(this.types);
  }

  semiDual(x, y, clrs) {
    const randomNumber = random();
    rotate(radians(90 * Math.round(random(1, 5))));

    const semiCircle = this.selectSemiCircle(
      this.clrs[this.queueNum[1]],
      this.blockSize
    );

    image(semiCircle, x - this.blockSize / 2, y - this.blockSize / 2);

    if (randomNumber < 1 / 3) {
      image(semiCircle, x, y - this.blockSize / 2);
      this.types.twoSame++;
    } else if (randomNumber < (1 / 3) * 2) {
      // second option
      this.types.one++;
    } else {
      // third option//

      rotate(radians(180));
      image(semiCircle, x - this.blockSize / 2, y - this.blockSize / 2);
      this.types.twoMirrored++;
    }
  }

  selectSemiCircle(clrs, blockSize) {
    if (clrs === "#000000") {
      if (blockSize === 10) return IMG[0];
      else if (blockSize === 12) return IMG[2];
      else if (blockSize === 8) return IMG[4];
      else if (blockSize === 20) return IMG[6];
    } else if (clrs === "#FFFFFF") {
      if (blockSize === 10) return IMG[1];
      else if (blockSize === 12) return IMG[3];
      else if (blockSize === 8) return IMG[5];
      else if (blockSize === 20) return IMG[7];
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
}

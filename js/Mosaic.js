class Mosaic {
  constructor(param1Int, param2Int) {
    this.blockSize = 10;
    this.countWidth = 23;
    this.countHeight = 33;

    this.mosaicWidth = this.blockSize * this.countWidth;
    this.mosaicHeight = this.blockSize * this.countHeight;
    this.queueNum = [0, 1];
    this.clrs = ["#000000", "#FFFFFF"];
    this.numbers = ["black", "white"];
    this.colors = [];

    this.frameWidth = 12;

    this.x = param1Int;
    this.y = param2Int;
  }

  display() {
    this.drawFrame();
    this.drawRandomMosaic();
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
  }

  semiDual(x, y, clrs) {
    const randomNumber = random();
    rotate(radians(90 * Math.round(random(1, 5))));

    const semiCircle = this.selectSemiCircle(this.clrs[this.queueNum[1]]);
    fill(this.clrs[this.queueNum[1]]);

    // arc(
    //   x - this.blockSize / 2,
    //   y,
    //   this.blockSize,
    //   this.blockSize,
    //   radians(270),
    //   radians(450)
    // );
    image(semiCircle, x - this.blockSize / 2, y - this.blockSize / 2);

    if (randomNumber < 1 / 3) {
      // first option
      // arc(
      //   x + this.blockSize / 2,
      //   y,
      //   this.blockSize,
      //   this.blockSize,
      //   radians(90),
      //   radians(270)
      // );
      image(semiCircle, x, y - this.blockSize / 2);
    } else if (randomNumber < (1 / 3) * 2) {
      // second option
    } else {
      // third option//
      arc(x, y, this.blockSize, this.blockSize, radians(270), radians(450));

      rotate(radians(180));
      image(semiCircle, x - this.blockSize / 2, y - this.blockSize / 2);
    }
  }

  selectSemiCircle(clrs) {
    if (clrs === "#000000") {
      return IMG[0];
    } else if (clrs === "#FFFFFF") {
      return IMG[1];
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

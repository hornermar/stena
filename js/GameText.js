class GameText {
  constructor(param1String1, param2Int1, param3Int2, param4Int3, param4Bool1) {
    this.text = param1String1;
    this.size = param2Int1;
    this.x = param3Int2;
    this.y = param4Int3;
    this.isClickable = param4Bool1;
    this.textFill = color(0, 0, 255);
  }

  display() {
    textSize(this.size);
    fill(this.textFill);

    text(this.text, this.x, this.y);
  }

  getClickableArea(mouseX, mouseY) {
    //  console.log(mouseX, mouseY);
    if (!this.isClickable) return false;

    // fill(0, 0, 255);
    // rectMode(CORNERS);
    // rect(
    //   this.x,
    //   this.y - this.size,
    //   this.x + textWidth(this.text),
    //   this.y + this.size
    // );

    if (
      mouseX > this.x &&
      mouseX < this.x + textWidth(this.text) &&
      mouseY > this.y - this.size &&
      mouseY < this.y + this.size
    ) {
      console.log("true");
      return true;
    } else {
      console.log("false");
      return false;
    }
  }
}

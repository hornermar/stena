class GameText {
  constructor(param1String, param2Int, param3Int, param4Int, param4Bool) {
    this.text = param1String;
    this.size = param2Int;
    this.x = param3Int;
    this.y = param4Int;
    this.isClickable = param4Bool;
    this.textFill = color(0, 0, 255);
  }

  display() {
    textSize(this.size);
    fill(this.textFill);

    text(this.text, this.x, this.y);
  }

  getClickableArea(mouseX, mouseY) {
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

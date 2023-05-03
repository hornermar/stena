class Button {
  constructor(param1String1, param1Int1, param1Int2, param3Function) {
    this.text = param1String1;
    this.x = param1Int1;
    this.y = param1Int2;
    this.onClick = param3Function;
    this.textFill = color(0, 0, 255);
  }

  display() {
    textSize(16);
    fill(this.textFill);

    text(`(S)TART`, 100, 200);
  }
}

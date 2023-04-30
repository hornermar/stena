class Floor {
  constructor() {}

  display() {
    this.drawFloor();
    //  this.drawCeiling();
  }

  drawFloor() {
    fill(150);
    rect(width / 2, height - 35, width + 4, 70);
  }

  drawCeiling() {
    push();
    fill(237, 232, 221);
    rect(width / 2, 35, width + 4, 70 + 4);
    pop();
  }
}

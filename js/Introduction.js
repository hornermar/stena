class Introduction {
  constructor(param1String1, param1Int1, param1Int2) {
    this.s = param1String1;
    this.x = param1Int1;
    this.y = param1Int2;
    this.introductionTtextFill = color(0, 0, 255);

    // this.f = loadFont("Helvetica-14.vlw");
  }

  display() {
    background(color(223, 230, 232));
    textSize(32);
    fill(this.introductionTtextFill);

    text("STĚNA", 100, 200);

    textSize(16);
    text(`CLICK / TOUCH TO BEGIN`, width / 2, height - 50);
  }
}

class World {
  constructor() {
    this.startGame = true;
    this.playGame = false;
    this.detail = false;
    this.endGame = false;

    this.GROUND_COLOR = color(150, 150, 160);

    this.room = new Room();
    this.mosaic = new Mosaic(width / 2, 66, 8, true, false);
    this.detailMosaic = new Mosaic(width / 2, 0 + 8, 12, false, true);

    this.title = new GameText("STĚNA", 44, 100, 150);
    this.author = new GameText("Zdeněk Sýkora", 20, 100, 200);
    this.year = new GameText("1966-1968", 20, 100, 250);
    this.start = new GameText(
      "CLICK / TOUCH TO START",
      16,
      width / 2,
      height - 50
    );
    this.openDetailButton = new GameText("open detail", 16, 310, 40, true);
  }

  tick() {
    if (this.startGame) {
      background(color(223, 230, 232));
      this.title.display();
      if (frameCount > 60) this.author.display();
      if (frameCount > 120) this.year.display();
      if (frameCount > 180) this.start.display();
    } else if (this.playGame) {
      background(color(223, 230, 232));
      this.room.display();
      this.mosaic.display();
      this.openDetailButton.display();
    } else if (this.detail) {
      this.detailMosaic.display();
      noLoop();
    } else if (this.endGame) {
    } else if (this.creditsDisplay) {
    }
  }

  keyPressed() {
    console.log("keyPressed");
    this.openDetailButton.getClickableArea(mouseX, mouseY);
    if (this.startGame && frameCount > 180) {
      this.startGame = false;
      this.playGame = true;
    } else if (
      this.playGame &&
      this.openDetailButton.getClickableArea(mouseX, mouseY)
    ) {
      this.playGame = false;
      this.detail = true;
    } else if (this.detail) {
      this.detailMosaic.display();
    }
  }
}

class World {
  constructor() {
    this.startGame = true;
    this.playGame = false;
    this.detail = false;
    this.endGame = false;

    this.GROUND_COLOR = color(150, 150, 160);

    this.room = new Room();

    this.originalMosaic = new Mosaic(width / 2, 66, 8, true, false, "original");
    this.originalMosaicDetail = new Mosaic(
      width / 2,
      0 + 8,
      12,
      false,
      true,
      "original"
    );

    this.randomMosaicDetail = new Mosaic(
      width / 2,
      0 + 8,
      12,
      false,
      true,
      "random"
    );

    this.selectedMosaic = new Mosaic(width / 2, 66, 8, true, false, "selected");

    this.title = new GameText("STĚNA", 44, 100, 150);
    this.author = new GameText("ZDENĚK SÝKORA", 16, 105, 190);
    this.you = new GameText("(AND YOU)", 16, 135, 220);
    this.start = new GameText(
      "CLICK / TOUCH TO START",
      16,
      width / 2,
      height - 50
    );
    this.openDetailButton = new GameText("open detail", 16, 310, 40, true);
    this.reloadButton = new GameText("Reload", 16, 100, 140, true);
    this.selectButton = new GameText("Select", 16, 100, 240, true);
  }

  tick() {
    if (this.startGame) {
      background(223, 230, 232);
      this.title.display();
      if (frameCount > 60) this.author.display();
      if (frameCount > 120) this.you.display();
      if (frameCount > 180) this.start.display();
    } else if (this.playGame) {
      background(223, 230, 232);
      this.room.display();
      this.originalMosaic.display();
      this.openDetailButton.display();
    } else if (this.detail) {
      background(223, 230, 232);
      this.originalMosaicDetail.display();
      this.reloadButton.display();
      this.selectButton.display();
      noLoop();
    } else if (this.endGame) {
      this.selectedMosaic.display();
    } else if (this.creditsDisplay) {
    }
  }

  keyPressed() {
    console.log("keyPressed");
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
      if (this.reloadButton.getClickableArea(mouseX, mouseY)) {
        this.randomMosaicDetail.display();
      } else if (this.selectButton.getClickableArea(mouseX, mouseY)) {
        console.log("selectButton");
        loop();
        this.detail = false;
        this.endGame = true;
      }
    }
  }
}

/**

*/
class World {
  /**

  */
  constructor() {
    this.endGame = false;
    this.startGame = true;
    this.playGame = false;
    this.detail = false;

    this.t = 0;

    this.introduction = new Introduction();

    this.TERRAIN_BASE_Y = (2 * height) / 3;
    this.GROUND_COLOR = color(150, 150, 160);
    this.room = new Room();
    this.mosaic = new Mosaic(width / 2, 66, 8, true, false);
    this.detailMosaic = new Mosaic(width / 2, 0 + 8, 12, false, true);

    this.startButton = new Button("start", 100, 150);
  }

  /**

  */
  tick() {
    if (this.startGame) {
      background(color(223, 230, 232));
      this.introduction.display();
    } else if (this.playGame) {
      background(color(223, 230, 232));
      this.room.display();
      this.mosaic.display();
      this.startButton.display();
      noLoop();
    } else if (this.detail) {
      // this.detailMosaic.display();
      noLoop();
    } else if (this.endGame) {
    } else if (this.creditsDisplay) {
    }
  }

  keyPressed() {
    console.log("keyPressed");
    if (
      this.startGame &&
      frameCount > 30 &&
      height - 50 &&
      mouseY > 200 &&
      mouseX > width / 2
    ) {
      this.startGame = false;
      this.playGame = true;
    } else if (this.playGame) {
      console.log(keyCode);
      if (
        (mouseY > 180 && mouseY < 200 && mouseX > 100 && mouseX < 210) ||
        keyCode === 83
      ) {
        this.playGame = false;
        this.detail = true;
        loop();
        frameRate(10);
      }
    } else if (this.detail) {
      this.detailMosaic.display();
    }
  }
}

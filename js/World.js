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
  }

  /**

  */
  tick() {
    if (this.startGame) {
      this.introduction.display();
    } else if (this.playGame) {
      this.room.display();
      this.mosaic.display();
      if (frameCount > 60) noLoop();
    } else if (this.detail) {
      this.detailMosaic.display();
      noLoop();
    } else if (this.endGame) {
    } else if (this.creditsDisplay) {
    }
  }

  keyPressed() {
    console.log("keyPressed");
    if (this.startGame && frameCount > 30) {
      this.startGame = false;
      this.playGame = true;
    } else if (this.playGame) {
      this.playGame = false;
      this.detail = true;
      loop();
      frameRate(10);
    } else if (this.detail) {
      this.detailMosaic.display();
    }
  }
}

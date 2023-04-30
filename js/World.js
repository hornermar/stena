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
    this.floor = new Floor();
    this.mosaic = new Mosaic(width / 2, 35);

    this.detailMosaic = new Mosaic(width / 2, 0);
  }

  /**

  */
  tick() {
    if (this.startGame) {
      //   this.introduction.display();
      // } else if (this.playGame) {
      this.display();
    } else if (this.detail) {
      console.log("detail");
      this.mosaic.display();
    } else if (this.endGame) {
    } else if (this.creditsDisplay) {
    }
  }

  display() {
    // wall
    background(255, 250, 240);

    // floor
    this.floor.display();
    this.mosaic.display();
  }

  keyPressed() {
    if (this.startGame) {
      this.startGame = false;
      this.playGame = true;
    } else if (this.playGame) {
      this.playGame = false;
      this.detail = true;
    }
  }
}

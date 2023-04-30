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
    this.mosaic = new Mosaic(width / 2, 35, 10, true);

    this.detailMosaic = new Mosaic(width / 2, 0 + 8, 12, false);
  }

  /**

  */
  tick() {
    if (this.startGame) {
      this.introduction.display();
    } else if (this.playGame) {
      this.room.display();
      this.mosaic.display();
      //  this.display();
    } else if (this.detail) {
      noLoop();
      background(0, 0, 0);
      this.detailMosaic.display();
    } else if (this.endGame) {
    } else if (this.creditsDisplay) {
    }
  }

  // display() {
  //   // wall
  //   // background(255, 250, 240);

  //   // floor
  //   // this.room.display();
  //   this.detailMosaic.display();
  // }

  keyPressed() {
    if (this.startGame) {
      this.startGame = false;
      this.playGame = true;
    } else if (this.playGame) {
      this.playGame = false;
      this.detail = true;
    } else if (this.detail) {
    }
  }
}

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
    this.mosaic = new Mosaic(width / 2, 66, 8, true);

    this.detailMosaic = new Mosaic(width / 2, 0 + 8, 12, false);
  }

  /**

  */
  tick() {
    if (this.startGame) {
      this.introduction.display();
    } else if (this.playGame) {
      noLoop();
      this.room.display();
      this.mosaic.display();
      //  this.display();
    } else if (this.detail) {
      background(0, 0, 0);
      this.detailMosaic.display();
      noLoop();
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
    console.log("keyPressed");
    if (this.startGame && frameCount > 30) {
      this.startGame = false;
      this.playGame = true;
    } else if (this.playGame) {
      this.playGame = false;
      this.detail = true;
      loop();
      frameRate(30);
    } else if (this.detail) {
      this.detailMosaic.display();
    }
  }
}

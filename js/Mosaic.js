class Mosaic {
  constructor(
    param1Int,
    param2Int,
    param3Int,
    param4Bool,
    param5Bool,
    param6String
  ) {
    this.blockSize = param3Int;
    this.countWidth = 23;
    this.countHeight = 33;

    this.mosaicWidth = this.blockSize * this.countWidth;
    this.mosaicHeight = this.blockSize * this.countHeight;

    this.colors = ["black", "white"];

    this.isFramed = param4Bool;
    this.frameWidth = 8;

    this.x = param1Int;
    this.y = param2Int;

    this.isCalculator = param5Bool;
    this.types = {};
    this.mode = param6String;
    this.current = [];

    this.selected = [];
    this.original = [
      // 1
      [
        [2, 1, 0],
        [2, 0, 0],
        [2, 1, 0],
        [1, 3, 1],
        [1, 3, 0],
        [3, 1, 1],
        [2, 2, 1],
        [1, 0, 0],
        [1, 2, 1],
        [1, 2, 1],
        [1, 0, 0],
        [2, 1, 1],
        [3, 0, 1],
        [2, 2, 1],
        [1, 2, 1],
        [1, 2, 1],
        [1, 2, 1],
        [1, 1, 1],
        [2, 0, 1],
        [2, 1, 1],
        [2, 2, 1],
        [2, 2, 1],
        [1, 1, 1],
      ],
      // 2
      [
        [2, 1, 0],
        [1, 3, 1],
        [1, 0, 1],
        [1, 1, 0],
        [1, 0, 0],
        [1, 3, 1],
        [2, 0, 1],
        [1, 1, 0],
        [1, 2, 1],
        [1, 1, 1],
        [1, 1, 0],
        [2, 1, 1],
        [2, 0, 1],
        [3, 0, 1],
        [1, 0, 0],
        [1, 1, 1],
        [1, 1, 1],
        [1, 0, 1],
        [1, 3, 0],
        [1, 3, 1],
        [2, 0, 1],
        [2, 0, 1],
        [1, 3, 0],
      ],
      // 3
      [
        [1, 2, 1],
        [1, 2, 1],
        [3, 1, 1],
        [1, 1, 0],
        [1, 2, 0],
        [1, 1, 0],
        [1, 3, 1],
        [1, 0, 1],
        [1, 2, 1],
        [1, 2, 1],
        [1, 3, 1],
        [1, 2, 0],
        [1, 2, 0],
        [1, 3, 0],
        [1, 2, 1],
        [1, 1, 1],
        [1, 0, 1],
        [2, 3, 0],
        [1, 3, 1],
        [1, 2, 0],
        [2, 2, 1],
        [3, 0, 1],
        [3, 1, 1],
      ],
      // 4
      [
        [1, 1, 1],
        [1, 3, 0],
        [1, 1, 0],
        [1, 0, 0],
        [1, 2, 1],
        [1, 0, 1],
        [3, 1, 0],
        [1, 1, 1],
        [1, 1, 1],
        [1, 0, 1],
        [3, 1, 0],
        [2, 1, 0],
        [1, 3, 1],
        [1, 1, 1],
        [1, 0, 1],
        [1, 0, 1],
        [1, 1, 1],
        [1, 1, 1],
        [3, 1, 0],
        [1, 3, 1],
        [1, 3, 0],
        [1, 0, 0],
        [1, 1, 0],
      ],
      // 5
      [
        [1, 3, 0],
        [3, 0, 0],
        [1, 0, 1],
        [1, 2, 1],
        [1, 2, 1],
        [1, 2, 1],
        [1, 1, 1],
        [1, 1, 1],
        [1, 2, 0],
        [2, 2, 0],
        [2, 2, 0],
        [2, 2, 0],
        [3, 1, 0],
        [1, 2, 1],
        [1, 2, 1],
        [1, 2, 1],
        [1, 0, 0],
        [1, 1, 1],
        [1, 1, 1],
        [1, 2, 1],
        [1, 1, 1],
        [1, 2, 1],
        [1, 2, 1],
      ],
      // 6
      [
        [2, 3, 0],
        [2, 0, 0],
        [3, 0, 0],
        [1, 0, 1],
        [1, 3, 1],
        [2, 2, 0],
        [2, 3, 0],
        [2, 0, 0],
        [1, 3, 1],
        [1, 0, 1],
        [2, 1, 0],
        [2, 0, 0],
        [3, 0, 0],
        [1, 3, 0],
        [1, 1, 1],
        [1, 0, 1],
        [1, 0, 1],
        [2, 3, 0],
        [2, 0, 0],
        [2, 0, 0],
        [1, 3, 1],
        [1, 0, 1],
        [2, 2, 0],
      ],
      // 7
      [
        [1, 1, 1],
        [3, 0, 0],
        [1, 0, 1],
        [1, 3, 0],
        [1, 2, 1],
        [3, 0, 0],
        [2, 2, 0],
        [2, 2, 0],
        [2, 1, 0],
        [2, 0, 0],
        [1, 2, 1],
        [3, 0, 0],
        [2, 1, 0],
        [2, 0, 0],
        [1, 2, 1],
        [3, 0, 0],
        [2, 3, 0],
        [3, 0, 0],
        [2, 1, 0],
        [2, 2, 0],
        [1, 0, 1],
        [1, 3, 0],
        [1, 2, 1],
      ],
      // 8
      [
        [1, 0, 0],
        [1, 0, 0],
        [1, 2, 0],
        [1, 3, 0],
        [1, 0, 0],
        [1, 2, 1],
        [3, 0, 0],
        [2, 1, 0],
        [3, 1, 0],
        [3, 0, 0],
        [1, 0, 1],
        [3, 0, 1],
        [1, 3, 1],
        [1, 0, 1],
        [2, 2, 0],
        [2, 1, 0],
        [2, 3, 0],
        [3, 0, 0],
        [2, 1, 0],
        [1, 2, 1],
        [1, 0, 0],
        [1, 3, 0],
        [1, 0, 0],
      ],
      // 9
      [
        [1, 1, 0],
        [2, 1, 1],
        [1, 2, 0],
        [1, 2, 0],
        [1, 3, 0],
        [1, 1, 1],
        [2, 2, 0],
        [3, 1, 0],
        [1, 1, 1],
        [3, 1, 0],
        [1, 2, 1],
        [1, 2, 1],
        [1, 2, 1],
        [1, 3, 1],
        [2, 2, 0],
        [3, 1, 0],
        [1, 1, 1],
        [2, 2, 0],
        [3, 1, 0],
        [1, 1, 1],
        [1, 2, 0],
        [1, 2, 0],
        [1, 1, 0],
      ],
      // 10
      [
        [1, 1, 0],
        [1, 0, 0],
        [1, 0, 0],
        [1, 2, 1],
        [3, 0, 0],
        [1, 0, 1],
        [2, 1, 0],
        [1, 1, 1],
        [1, 0, 1],
        [1, 2, 0],
        [1, 3, 0],
        [1, 1, 1],
        [2, 2, 0],
        [2, 1, 0],
        [1, 3, 1],
        [1, 3, 1],
        [1, 0, 1],
        [1, 0, 1],
        [2, 3, 0],
        [1, 2, 1],
        [3, 0, 0],
        [1, 0, 1],
        [1, 3, 0],
      ],
      // 11
      [
        [2, 3, 0],
        [1, 1, 0],
        [1, 1, 1],
        [1, 2, 1],
        [3, 0, 0],
        [2, 3, 0],
        [1, 2, 1],
        [1, 2, 1],
        [1, 1, 1],
        [1, 1, 0],
        [1, 1, 1],
        [2, 3, 0],
        [3, 0, 0],
        [2, 2, 0],
        [3, 1, 0],
        [1, 1, 0],
        [1, 2, 1],
        [1, 1, 1],
        [2, 2, 0],
        [2, 3, 0],
        [1, 2, 1],
        [1, 2, 1],
        [1, 1, 1],
      ],
      // 12
      [
        [2, 0, 1],
        [2, 0, 1],
        [3, 0, 1],
        [1, 0, 0],
        [1, 2, 1],
        [2, 0, 0],
        [3, 0, 0],
        [1, 0, 1],
        [1, 0, 1],
        [1, 2, 1],
        [3, 0, 0],
        [2, 2, 0],
        [3, 1, 0],
        [2, 0, 0],
        [3, 0, 0],
        [1, 0, 1],
        [1, 0, 1],
        [1, 0, 1],
        [2, 2, 0],
        [2, 2, 0],
        [2, 3, 0],
        [1, 0, 0],
        [3, 1, 1],
      ],
      // 13
      [
        [2, 1, 1],
        [3, 0, 1],
        [2, 3, 1],
        [1, 0, 1],
        [2, 3, 0],
        [1, 3, 1],
        [1, 1, 0],
        [1, 0, 0],
        [1, 1, 1],
        [2, 2, 0],
        [2, 1, 0],
        [3, 0, 0],
        [1, 2, 0],
        [1, 0, 1],
        [3, 0, 0],
        [2, 3, 0],
        [1, 2, 1],
        [1, 0, 0],
        [1, 2, 1],
        [3, 0, 0],
        [2, 3, 0],
        [1, 2, 1],
        [2, 3, 1],
      ],
      // 14
      [
        [1, 3, 0],
        [1, 3, 0],
        [1, 1, 0],
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 0],
        [1, 3, 0],
        [1, 0, 0],
        [1, 1, 1],
        [2, 1, 0],
        [1, 2, 1],
        [1, 0, 0],
        [1, 0, 0],
        [1, 0, 0],
        [1, 3, 1],
        [2, 2, 0],
        [1, 0, 1],
        [1, 0, 1],
        [1, 3, 0],
        [1, 2, 1],
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 0],
      ],
      // 15
      [
        [1, 1, 1],
        [2, 3, 0],
        [1, 2, 1],
        [1, 2, 1],
        [1, 1, 1],
        [1, 2, 0],
        [1, 3, 0],
        [1, 2, 1],
        [1, 2, 1],
        [1, 2, 1],
        [1, 1, 1],
        [1, 1, 0],
        [3, 1, 1],
        [1, 1, 0],
        [1, 2, 1],
        [1, 2, 1],
        [1, 2, 1],
        [1, 2, 1],
        [1, 1, 1],
        [1, 2, 1],
        [1, 2, 1],
        [1, 2, 1],
        [1, 2, 1],
      ],
      // 16
      [
        [2, 3, 0],
        [3, 0, 0],
        [2, 3, 0],
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 0],
        [1, 0, 0],
        [1, 0, 0],
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1],
        [1, 1, 0],
        [1, 1, 0],
        [1, 0, 0],
        [1, 1, 1],
        [1, 1, 1],
        [1, 0, 1],
        [1, 3, 0],
        [1, 0, 0],
        [1, 0, 0],
        [1, 2, 1],
        [1, 1, 1],
        [1, 0, 1],
      ],
      // 17
      [
        [1, 2, 0],
        [1, 2, 0],
        [1, 3, 0],
        [1, 2, 1],
        [1, 2, 1],
        [1, 2, 1],
        [1, 2, 1],
        [1, 2, 1],
        [1, 1, 1],
        [1, 2, 0],
        [1, 0, 1],
        [1, 2, 1],
        [1, 3, 1],
        [1, 2, 1],
        [1, 2, 1],
        [1, 0, 0],
        [1, 2, 1],
        [1, 1, 1],
        [1, 2, 1],
        [1, 2, 1],
        [1, 2, 1],
        [1, 0, 0],
        [1, 0, 0],
      ], // 18
      [
        [1, 1, 0],
        [2, 2, 1],
        [1, 0, 0],
        [1, 3, 0],
        [1, 0, 0],
        [1, 1, 1],
        [2, 2, 0],
        [2, 3, 0],
        [1, 1, 1],
        [1, 1, 0],
        [1, 1, 1],
        [1, 2, 0],
        [3, 1, 0],
        [3, 0, 0],
        [2, 2, 0],
        [1, 1, 0],
        [1, 0, 0],
        [2, 3, 0],
        [2, 0, 0],
        [1, 1, 1],
        [1, 3, 0],
        [1, 0, 0],
        [1, 2, 0],
      ],
      // 19
      [
        [1, 2, 0],
        [1, 2, 0],
        [1, 2, 0],
        [1, 2, 0],
        [1, 1, 0],
        [1, 1, 1],
        [2, 2, 0],
        [2, 3, 0],
        [1, 2, 1],
        [1, 2, 1],
        [1, 2, 1],
        [3, 0, 0],
        [2, 3, 0],
        [2, 1, 0],
        [1, 2, 1],
        [1, 2, 1],
        [1, 3, 1],
        [2, 3, 0],
        [2, 1, 0],
        [1, 2, 1],
        [1, 0, 0],
        [1, 0, 0],
        [1, 2, 0],
      ],
      // 20
      [
        [1, 0, 1],
        [2, 1, 0],
        [1, 3, 1],
        [1, 1, 0],
        [1, 0, 0],
        [1, 1, 1],
        [1, 3, 1],
        [1, 1, 1],
        [1, 0, 1],
        [1, 0, 1],
        [1, 0, 1],
        [1, 0, 1],
        [3, 1, 1],
        [1, 0, 1],
        [1, 0, 1],
        [1, 0, 1],
        [1, 0, 1],
        [1, 1, 1],
        [1, 3, 1],
        [1, 0, 1],
        [1, 0, 1],
        [1, 1, 0],
        [1, 0, 0],
      ],
      // 21
      [
        [1, 1, 1],
        [1, 0, 1],
        [1, 3, 0],
        [1, 2, 0],
        [1, 2, 0],
        [1, 2, 0],
        [1, 1, 0],
        [1, 1, 1],
        [1, 2, 1],
        [1, 1, 1],
        [1, 2, 0],
        [1, 2, 0],
        [1, 1, 0],
        [1, 3, 0],
        [1, 0, 0],
        [1, 2, 1],
        [1, 2, 1],
        [1, 1, 1],
        [1, 1, 0],
        [1, 2, 0],
        [1, 2, 0],
        [1, 2, 0],
        [1, 2, 0],
        [1, 3, 0],
      ],
      // 22
      [
        [1, 0, 0],
        [1, 0, 0],
        [2, 1, 1],
        [1, 1, 0],
        [1, 0, 1],
        [1, 2, 1],
        [1, 0, 0],
        [1, 0, 0],
        [1, 1, 1],
        [2, 3, 0],
        [2, 0, 0],
        [1, 3, 1],
        [1, 2, 0],
        [1, 2, 0],
        [1, 0, 1],
        [2, 2, 0],
        [1, 0, 1],
        [1, 3, 0],
        [1, 0, 0],
        [1, 0, 0],
        [1, 3, 1],
        [1, 2, 1],
        [2, 1, 1],
      ],
      // 23
      [
        [2, 0, 1],
        [3, 0, 1],
        [3, 1, 0],
        [1, 1, 0],
        [1, 2, 1],
        [2, 0, 0],
        [1, 2, 1],
        [1, 2, 1],
        [1, 2, 1],
        [1, 1, 1],
        [3, 0, 0],
        [2, 1, 0],
        [1, 2, 1],
        [1, 2, 1],
        [3, 0, 0],
        [1, 0, 1],
        [1, 2, 1],
        [1, 1, 1],
        [1, 0, 1],
        [2, 2, 0],
        [1, 0, 1],
        [1, 2, 0],
        [1, 2, 0],
      ],
      // 24
      [
        [2, 1, 1],
        [3, 0, 1],
        [1, 3, 1],
        [1, 0, 1],
        [1, 1, 1],
        [1, 0, 1],
        [1, 0, 1],
        [1, 2, 0],
        [1, 0, 1],
        [1, 3, 0],
        [2, 0, 0],
        [2, 0, 0],
        [2, 0, 0],
        [2, 3, 0],
        [3, 0, 0],
        [1, 3, 0],
        [1, 1, 1],
        [1, 2, 0],
        [1, 0, 1],
        [1, 0, 1],
        [1, 2, 1],
        [1, 0, 1],
        [1, 3, 1],
      ],
      // 25
      [
        [2, 2, 1],
        [3, 1, 1],
        [1, 1, 0],
        [1, 2, 1],
        [3, 0, 0],
        [1, 0, 1],
        [1, 1, 1],
        [1, 2, 0],
        [1, 2, 0],
        [1, 3, 0],
        [1, 3, 1],
        [2, 2, 0],
        [2, 2, 0],
        [2, 3, 0],
        [1, 3, 1],
        [1, 2, 0],
        [1, 2, 0],
        [1, 1, 0],
        [1, 2, 0],
        [1, 2, 0],
        [3, 0, 0],
        [1, 0, 1],
        [1, 1, 0],
      ],
      // 26
      [
        [2, 2, 1],
        [2, 3, 1],
        [1, 1, 0],
        [1, 1, 1],
        [1, 1, 0],
        [1, 1, 1],
        [1, 0, 1],
        [1, 0, 1],
        [1, 3, 1],
        [1, 1, 1],
        [1, 0, 1],
        [1, 3, 1],
        [1, 0, 1],
        [1, 1, 1],
        [1, 0, 1],
        [1, 0, 1],
        [1, 3, 1],
        [1, 0, 1],
        [1, 0, 1],
        [1, 0, 1],
        [1, 1, 0],
        [1, 2, 1],
        [1, 0, 0],
      ],
      // 27
      [
        [3, 0, 1],
        [2, 3, 1],
        [1, 1, 0],
        [1, 1, 0],
        [1, 1, 0],
        [1, 0, 0],
        [3, 0, 0],
        [2, 2, 0],
        [3, 1, 0],
        [1, 2, 1],
        [1, 1, 1],
        [2, 0, 1],
        [1, 3, 0],
        [1, 0, 0],
        [1, 2, 1],
        [1, 1, 1],
        [2, 1, 0],
        [2, 3, 0],
        [3, 0, 0],
        [1, 2, 0],
        [1, 2, 0],
        [1, 1, 0],
        [2, 2, 1],
      ],
      // 28
      [
        [3, 1, 1],
        [1, 2, 0],
        [1, 0, 1],
        [1, 1, 0],
        [1, 0, 0],
        [1, 3, 1],
        [1, 2, 1],
        [2, 0, 0],
        [2, 0, 0],
        [3, 0, 0],
        [1, 0, 1],
        [1, 0, 1],
        [1, 1, 1],
        [1, 3, 1],
        [1, 0, 1],
        [2, 2, 0],
        [2, 1, 0],
        [2, 2, 0],
        [2, 1, 0],
        [1, 3, 1],
        [1, 3, 0],
        [1, 0, 0],
        [1, 2, 1],
      ],
      // 29
      [
        [1, 2, 1],
        [1, 2, 1],
        [1, 2, 1],
        [1, 2, 1],
        [1, 1, 1],
        [3, 1, 0],
        [2, 2, 0],
        [3, 1, 0],
        [1, 2, 1],
        [1, 2, 1],
        [3, 0, 0],
        [2, 3, 0],
        [1, 1, 1],
        [1, 1, 0],
        [1, 1, 1],
        [1, 3, 1],
        [3, 1, 0],
        [2, 2, 0],
        [2, 2, 0],
        [2, 1, 0],
        [1, 1, 1],
        [1, 2, 1],
        [1, 1, 1],
      ],
      // 30
      [
        [1, 2, 1],
        [3, 0, 0],
        [1, 0, 1],
        [2, 3, 0],
        [3, 0, 0],
        [2, 2, 0],
        [2, 1, 0],
        [3, 0, 0],
        [1, 2, 0],
        [2, 2, 0],
        [2, 1, 0],
        [3, 0, 0],
        [2, 3, 0],
        [2, 0, 0],
        [2, 0, 0],
        [2, 1, 0],
        [1, 0, 0],
        [2, 0, 0],
        [2, 1, 0],
        [2, 0, 0],
        [2, 0, 0],
        [3, 0, 0],
        [1, 0, 1],
      ],
      // 31
      [
        [1, 2, 0],
        [1, 1, 0],
        [1, 2, 1],
        [3, 0, 0],
        [2, 1, 0],
        [3, 0, 0],
        [3, 1, 0],
        [1, 2, 1],
        [1, 3, 1],
        [2, 2, 0],
        [2, 2, 0],
        [2, 1, 0],
        [3, 0, 0],
        [2, 1, 0],
        [3, 0, 0],
        [2, 1, 0],
        [1, 3, 1],
        [1, 3, 1],
        [3, 1, 0],
        [3, 0, 0],
        [2, 2, 0],
        [2, 1, 0],
        [1, 1, 1],
      ],
      // 32
      [
        [2, 3, 1],
        [1, 1, 0],
        [3, 1, 1],
        [1, 0, 1],
        [1, 0, 1],
        [1, 0, 1],
        [2, 2, 0],
        [2, 3, 0],
        [1, 2, 1],
        [3, 0, 0],
        [2, 1, 0],
        [1, 3, 1],
        [1, 0, 1],
        [2, 1, 0],
        [2, 0, 0],
        [3, 0, 0],
        [1, 0, 1],
        [3, 1, 0],
        [2, 0, 0],
        [1, 2, 1],
        [1, 2, 1],
        [1, 2, 1],
        [3, 1, 1],
      ],
      // 33
      [
        [1, 1, 0],
        [1, 2, 0],
        [1, 1, 0],
        [1, 3, 0],
        [1, 0, 0],
        [1, 1, 1],
        [1, 1, 0],
        [1, 1, 1],
        [3, 0, 0],
        [3, 1, 0],
        [1, 2, 1],
        [2, 3, 1],
        [1, 3, 0],
        [1, 3, 1],
        [2, 1, 0],
        [3, 0, 0],
        [2, 3, 0],
        [1, 1, 1],
        [1, 1, 0],
        [1, 1, 1],
        [1, 0, 0],
        [1, 0, 0],
        [1, 1, 0],
      ],
    ];

    //    this.colorOfBackground = [];
  }

  display() {
    this.isFramed && this.drawFrame();
    //this.isCalculator && background(223, 230, 232);
    this.drawMosaic();
    this.isCalculator && this.drawCalculator(20);

    console.log("selected", this.selected);
  }

  drawMosaic() {
    this.types = {
      twoSame: 0,
      one: 0,
      twoMirrored: 0,
      blackSemiCircle: 0,
      whiteSemiCircle: 0,
    };

    this.mode === "random" && (this.selected = []);
    // this.colorOfBackground = [];

    for (let iy = 0; iy < this.countHeight; iy++) {
      for (let ix = 0; ix < this.countWidth; ix++) {
        strokeWeight(1);

        push();
        translate(
          ix * this.blockSize +
            (width / 2 - this.mosaicWidth / 2 + this.blockSize / 2),
          iy * this.blockSize +
            (height / 2 - this.mosaicHeight / 2 + this.blockSize / 2)
        );

        if (this.mode === "original") {
          this.drawPieceFromGrid(this.original[iy][ix]);
        } else if (this.mode === "random") {
          this.drawRandomPiece();
          //    console.log(this.selected);
          //    this.drawPieceFromGrid(this.selected[iy][ix]);
        } else if (this.mode === "selected") {
          this.drawPieceFromGrid(this.selected[iy][ix]);
        }
        pop();
      }
    }
  }

  drawOne(semiCircle, size) {
    rect(0, 0, size, size);
    image(semiCircle, -size / 2, -size / 2);

    this.types.one++;
  }

  drawTwoSame(semiCircle, size) {
    rect(0, 0, size, size);
    image(semiCircle, -size / 2, -size / 2);
    image(semiCircle, 0, -size / 2);

    this.types.twoSame++;
  }

  drawTwoMirrored(semiCircle, size) {
    rect(0, 0, size, size);
    image(semiCircle, -size / 2, -size / 2);
    rotate(radians(180));
    image(semiCircle, -size / 2, -size / 2);

    this.types.twoMirrored++;
  }

  drawRandomPiece() {
    const randomNumber = random();
    let rotation;
    let type;

    const queueNum = this.shuffleArray([0, 1]);
    const bacgroundColor = queueNum[0];

    if (randomNumber < 0.3) {
      rotation = 0;
    } else if (randomNumber < 0.575) {
      rotation = 1;
    } else if (randomNumber < 0.85) {
      rotation = 2;
    } else {
      rotation = 3;
    }

    rotate(radians(90 * rotation));

    color = queueNum[0];
    fill(this.colors[bacgroundColor]);

    const semiCircle = this.selectSemiCircle(
      this.colors[queueNum[1]],
      this.blockSize
    );

    if (randomNumber < 0.67) {
      // first option
      type = 1;
      this.drawOne(semiCircle, this.blockSize);
      //  this.types.one++;
      //   this.types[`${this.colors[queueNum[1]]}SemiCircle`]++;
      //   this.selected.push([1, rotation, queueNum[1]]);
    } else if (randomNumber < 0.89) {
      // second option
      type = 2;
      this.drawTwoSame(semiCircle, this.blockSize);

      //  this.types.twoSame++;
      //  this.types[`${this.colors[queueNum[1]]}SemiCircle`] += 2;
      //  this.selected.push([2, rotation, queueNum[1]]);
    } else {
      type = 3;
      // third option
      this.drawTwoMirrored(semiCircle, this.blockSize);
      //   this.types.twoMirrored++;
      //  this.types[`${this.colors[queueNum[1]]}SemiCircle`] += 2;
      //   this.selected.push([2, rotation, queueNum[1]]);
    }
    this.selected.push([type, rotation, bacgroundColor]);
  }

  drawPieceFromGrid(piece) {
    // this.colorOfBackground.push(piece[1]);

    // console.log(
    //   this.colorOfBackground.length > 0 &&
    //     this.colorOfBackground.filter((c) => c === 3)
    // );

    rotate(radians(90 * piece[1]));
    fill(this.colors[piece[2]]);

    const semiCircleColor = piece[2] === 0 ? 1 : 0;

    const semiCircle = this.selectSemiCircle(
      this.colors[semiCircleColor],
      this.blockSize
    );

    if (piece[0] === 1) {
      this.drawOne(semiCircle, this.blockSize);
    } else if (piece[0] === 2) {
      this.drawTwoSame(semiCircle, this.blockSize);
    } else if (piece[0] === 3) {
      this.drawTwoMirrored(semiCircle, this.blockSize);
    }
  }

  shuffleArray(array) {
    var j, temp;
    for (var i = array.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  selectSemiCircle(color, blockSize) {
    return IMG[`${color}${blockSize}`];
  }

  drawFrame() {
    push();
    fill(192, 192, 192);
    rect(
      width / 2 - this.mosaicWidth / 2 + this.mosaicWidth / 2,
      height / 2 - this.mosaicHeight / 2 + this.mosaicHeight / 2,
      this.mosaicWidth + this.frameWidth,
      this.mosaicHeight + this.frameWidth
    );
    pop();
  }

  drawCalculator(size) {
    const x = 575;
    const y = 90;

    const whiteSemiCircle = this.selectSemiCircle(this.colors[1], size);

    // calculator for types
    fill(this.colors[0]);
    push();
    translate(x, y);
    this.drawTwoSame(whiteSemiCircle, size);
    pop();

    push();
    translate(x, y + 1.5 * size);
    this.drawOne(whiteSemiCircle, size);
    pop();

    push();
    translate(x, y + 3 * size);
    this.drawTwoMirrored(whiteSemiCircle, size);
    pop();

    fill(0, 0, 255);
    text(this.types.one, x + size, y + size / 2 + 1.5 * size);
    text(this.types.twoSame, x + size, y + size / 2);
    text(this.types.twoMirrored, x + size, y + size / 2 + 3 * size);

    // calculator for colors
    const blackSemiCircle = this.selectSemiCircle(this.colors[0], size);
    push();
    translate(x, y + 8 * size);
    image(blackSemiCircle, -size / 2, -size / 2);
    image(whiteSemiCircle, -size / 2, size);
    pop();
    text(this.types.blackSemiCircle, x + size, y + size / 2 + 8 * size);
    text(this.types.whiteSemiCircle, x + size, y + size / 2 + 9.5 * size);
  }
}

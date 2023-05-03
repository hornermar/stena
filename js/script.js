"use strict";

let world;
// let semiCircleWhite10;
// let semiCircleBlack;

const IMG = {};
let myFont;

function preload() {
  const pixels = [8, 10, 12, 20];
  const colors = ["black", "white"];

  for (let i = 0; i < pixels.length; i++) {
    for (let j = 0; j < colors.length; j++) {
      let img = loadImage(
        `assets/images/semi-circle-${colors[j]}-${pixels[i]}.png`
      );

      IMG[`${colors[j]}${pixels[i]}`] = img;
    }
  }

  myFont = loadFont("assets/Press_Start_2P/PressStart2P-Regular.ttf");
}

function setup() {
  rectMode(CENTER);
  textFont(myFont);
  createCanvas(800, 400);
  frameRate(30);
  world = new World();
  background(0);
  strokeWeight(2);
  // noLoop();
}

function draw() {
  world.tick();
}

function keyPressed() {
  world.keyPressed();
}

function mouseClicked() {
  world.keyPressed();
}

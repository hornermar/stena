"use strict";

let world;
let semiCircleWhite;
let semiCircleBlack;

const IMG = [];
let myFont;

function preload() {
  semiCircleBlack = loadImage("assets/images/semi-circle-blackS.png");
  semiCircleWhite = loadImage("assets/images/semi-circle-whiteS.png");
  IMG.push(semiCircleBlack);
  IMG.push(semiCircleWhite);

  myFont = loadFont("assets/Press_Start_2P/PressStart2P-Regular.ttf");
}

function setup() {
  rectMode(CENTER);
  createCanvas(800, 500);
  frameRate(4);
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
